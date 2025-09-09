import { redirect } from 'next/navigation'
import { i18n } from '@/types/i18n'

// This is a root page that redirects to the default locale
// We're using app/[locale]/page.tsx for the actual page
export default function Home() {
  // Get the default locale from the i18n config
  const defaultLocale = i18n.defaultLocale
  
  // Redirect to the default locale
  redirect(`/${defaultLocale}`)
}
