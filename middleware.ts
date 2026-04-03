import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { evaluateRequest } from '@/lib/firewall/firewall'
import { verifySession } from '@/lib/auth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // --- Admin Route Protection ---
  if (pathname.startsWith('/admin')) {
    const sessionValid = await verifySession(request)
    if (!sessionValid) {
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // --- Agent Firewall (skip for API routes) ---
  if (!pathname.startsWith('/api')) {
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
  }

  // Create response
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // --- Security Headers ---
  const connectSources = [
    "'self'",
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com',
    'https://region1.google-analytics.com',
    'https://vitals.vercel-insights.com',
  ].join(' ')

  const scriptSources = [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://va.vercel-scripts.com',
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
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
