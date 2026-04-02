import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { evaluateRequest } from '@/lib/firewall/firewall'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

export async function middleware(request: NextRequest) {
  // --- Agent Firewall ---
  const firewallAction = evaluateRequest(request)

  if (firewallAction.type === 'block') {
    return new NextResponse(
      JSON.stringify({ error: firewallAction.reason }),
      {
        status: firewallAction.status,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  // --- Supabase Auth Session Refresh ---
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  // Refresh session if expired
  await supabase.auth.getUser()

  // Protect /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // --- Security Headers ---
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  let supabaseHost: string | null = null

  if (supabaseUrl) {
    try {
      supabaseHost = new URL(supabaseUrl).host
    } catch (error) {
      console.warn('Invalid Supabase URL provided to NEXT_PUBLIC_SUPABASE_URL', error)
    }
  }

  const supabaseWs = supabaseHost ? `wss://${supabaseHost}` : null

  const connectSources = [
    "'self'",
    supabaseHost ? `https://${supabaseHost}` : null,
    supabaseWs,
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com',
    'https://region1.google-analytics.com',
    'https://vitals.vercel-insights.com',
  ]
    .filter((value): value is string => Boolean(value))
    .join(' ')

  const scriptSources = [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
  ].join(' ')

  // Prevent clickjacking
  response.headers.set('X-Frame-Options', 'DENY')

  // Prevent MIME type sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff')

  // Enable XSS protection
  response.headers.set('X-XSS-Protection', '1; mode=block')

  // Referrer policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    `default-src 'self'; script-src ${scriptSources}; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src ${connectSources};`
  )

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
