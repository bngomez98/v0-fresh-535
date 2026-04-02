import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { evaluateRequest } from '@/lib/firewall/firewall'

export function middleware(request: NextRequest) {
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

  // --- Security Headers ---
  const response = NextResponse.next()
  
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
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com;"
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
