import type { NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

function getSupabaseOrigin() {
  const configuredUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  if (!configuredUrl) return ''

  try {
    return new URL(configuredUrl).origin
  } catch {
    return ''
  }
}

export async function middleware(request: NextRequest) {
  const response = await updateSession(request)
  const supabaseOrigin = getSupabaseOrigin()

  // Add security headers
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
    `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'${supabaseOrigin ? ` ${supabaseOrigin}` : ''};`
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
