import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Set cache control headers for static assets
  if (
    request.nextUrl.pathname.startsWith("/_next/") ||
    request.nextUrl.pathname.startsWith("/images/") ||
    request.nextUrl.pathname.endsWith(".jpg") ||
    request.nextUrl.pathname.endsWith(".png") ||
    request.nextUrl.pathname.endsWith(".svg") ||
    request.nextUrl.pathname.endsWith(".ico")
  ) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable")
  }

  // Set cache control headers for pages that can be cached
  if (
    request.nextUrl.pathname === "/" ||
    request.nextUrl.pathname === "/courses" ||
    request.nextUrl.pathname === "/instructors" ||
    request.nextUrl.pathname === "/testimonials" ||
    request.nextUrl.pathname === "/privacy-policy" ||
    request.nextUrl.pathname === "/terms"
  ) {
    response.headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400")
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /_next (Next.js internals)
     * 2. /api (API routes)
     * 3. /static (static files)
     * 4. /_vercel (Vercel internals)
     * 5. all root files inside public (e.g. /favicon.ico)
     */
    "/((?!_next|api|_vercel|static|.*\\..*|$).*)",
    "/",
  ],
}

