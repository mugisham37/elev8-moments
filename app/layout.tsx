import { redirect } from 'next/navigation'
import { i18n } from '@/types/i18n'
import { headers } from 'next/headers'

// This is a root layout that redirects to the default locale
// We're using app/[locale]/layout.tsx for the actual layout
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  // Get the default locale from the i18n config
  const defaultLocale = i18n.defaultLocale
  
  // Get the pathname from the request headers
  const headersList = headers()
  const pathname = headersList.get('x-pathname') || '/'
  
  // Check if the pathname already has a locale
  const pathnameHasLocale = i18n.locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  // If the pathname already has a locale, don't redirect
  if (pathnameHasLocale) {
    return children
  }
  
  // Redirect to the default locale
  redirect(`/${defaultLocale}`)
}
