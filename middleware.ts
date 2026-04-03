import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { evaluateRequest } from '@/lib/firewall/firewall'

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

  // Create response
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // --- Security Headers ---
  const connectSources = [
    "'self'",
    'https://www.google-analytics.com',
    'https://region1.google-analytics.com',
    'https://www.googletagmanager.com',
    'https://analytics.google.com',
    'https://vitals.vercel-insights.com',
  ]

  const scriptSources = [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://va.vercel-scripts.com',
  ]

  // Prevent clickjacking
  response.headers.set('X-Frame-Options', 'DENY')

  // Prevent MIME type sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff')

  // Enable XSS protection
  response.headers.set('X-XSS-Protection', '1; mode=block')

  // Referrer policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Content Security Policy
  const contentSecurityPolicy = [
    "default-src 'self'",
    `script-src ${scriptSources.join(' ')}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    `connect-src ${connectSources.join(' ')}`,
  ].join('; ')

  response.headers.set('Content-Security-Policy', contentSecurityPolicy)

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
