import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// WHAT: Global middleware for the application.
// WHY: Used for tasks that need to run before every request, like logging, security, or routing.
// HOW: Exporting a middleware function and a matcher config.
// IMPACT: Centralizes request processing and improves security/consistency.

export function middleware(request: NextRequest) {
  // Example: Add a custom header to all responses
  const response = NextResponse.next()
  response.headers.set('x-portfolio-middleware', 'triggered')
  
  // Example: Basic request logging
  console.log(`[Middleware] ${request.method} ${request.nextUrl.pathname}`)

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
