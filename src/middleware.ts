import { NextRequest, NextResponse } from 'next/server'

const PRIMARY_HOST = 'www.remodex.site'
const LEGACY_HOSTS = new Set(['phodex.app', 'www.phodex.app'])

export function middleware(request: NextRequest) {
  const host = (request.headers.get('host') ?? '').split(':')[0].toLowerCase()

  if (LEGACY_HOSTS.has(host)) {
    const url = new URL(request.url)
    url.host = PRIMARY_HOST
    url.protocol = 'https:'
    url.port = ''
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)'],
}
