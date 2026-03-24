import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''

  // phodex.app is the primary domain — no rewrite needed
  // Keep middleware in case future domain routing is added

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)'],
}
