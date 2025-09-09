import { NextRequest, NextResponse } from 'next/server'
import { i18n } from './types/i18n'

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname

  // Skip for API routes, static files, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/studio')
  ) {
    return
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = i18n.locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If the pathname already has a locale, don't redirect
  if (pathnameHasLocale) {
    // Add the pathname to the headers for the root layout to use
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-pathname', pathname)
    
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  // For paths without a locale, redirect to the locale-prefixed path
  // Get the preferred locale from the Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || ''
  const preferredLocale = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim())
    .find(lang => i18n.locales.some(locale => lang.startsWith(locale)))

  // Use the preferred locale or default to the default locale
  const locale = preferredLocale?.split('-')[0] || i18n.defaultLocale

  // Redirect to the locale-prefixed path
  return NextResponse.redirect(
    new URL(
      `/${locale}${pathname === '/' ? '' : pathname}${request.nextUrl.search}`,
      request.url
    )
  )
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|studio).*)'],
}
