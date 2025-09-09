export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'fr', 'ar'],
} as const

export type Locale = (typeof i18n)['locales'][number]

// Function to determine text direction based on locale
export function getLocaleDirection(locale: Locale): 'ltr' | 'rtl' {
  // Arabic is right-to-left, all others are left-to-right
  return locale === 'ar' ? 'rtl' : 'ltr'
}
