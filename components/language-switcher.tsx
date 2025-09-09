"use client"

import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, ChevronDown, Globe } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { i18n, Locale } from '@/types/i18n'
import { cn } from '@/lib/utils'

type LanguageSwitcherProps = {
  dict: {
    label: string
    en: string
    fr: string
    ar: string
  }
  className?: string
}

export default function LanguageSwitcher({ dict, className }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] as Locale || i18n.defaultLocale
  const isDefaultLocale = currentLocale === i18n.defaultLocale

  // Function to switch language
  const switchLanguage = useCallback((locale: Locale) => {
    // Extract the path without the locale prefix
    const segments = pathname.split('/')
    // The first segment after the split will be empty (because pathname starts with /)
    // The second segment might be the locale
    
    let pathWithoutLocale = pathname
    
    // Check if the current path has a locale prefix
    if (segments.length > 1 && i18n.locales.includes(segments[1] as Locale)) {
      // Remove the locale segment
      pathWithoutLocale = '/' + segments.slice(2).join('/')
    }
    
    // If switching to default locale and we're at the root
    if (locale === i18n.defaultLocale && (pathWithoutLocale === '/' || pathWithoutLocale === '')) {
      router.push('/')
      return
    }
    
    // If switching to default locale and we're not at the root
    if (locale === i18n.defaultLocale) {
      router.push(pathWithoutLocale)
      return
    }
    
    // If switching to non-default locale
    router.push(`/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`)
  }, [pathname, router])

  // Get language name based on locale
  const getLanguageName = (locale: Locale) => {
    switch (locale) {
      case 'en':
        return dict.en
      case 'fr':
        return dict.fr
      case 'ar':
        return dict.ar
      default:
        return dict.en
    }
  }

  // Get current language name
  const currentLanguageName = getLanguageName(currentLocale)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn("flex items-center gap-1 px-2", className)}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden md:inline">{currentLanguageName}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            className={cn(
              "flex items-center gap-2 cursor-pointer",
              locale === currentLocale && "font-medium"
            )}
            onClick={() => {
              switchLanguage(locale)
              setOpen(false)
            }}
          >
            {locale === currentLocale && (
              <Check className="h-4 w-4 text-green-500" />
            )}
            <span className={locale !== currentLocale ? "pl-6" : ""}>
              {getLanguageName(locale)}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
