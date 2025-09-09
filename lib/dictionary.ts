import 'server-only'
import type { Locale } from '@/types/i18n'

// Define the Dictionary type based on the structure of our dictionary files
export type Dictionary = {
  common: {
    navigation: {
      home: string
      about: string
      services: string
      blog: string
      contact: string
    }
    cta: {
      consultation: string
      freeConsultation: string
      learnMore: string
    }
    footer: {
      rights: string
      privacy: string
      terms: string
      description: string
      quickLinks: string
      ourServices: string
      socialMedia: string
      contentCreation: string
      podcastProduction: string
      contactUs: string
      address: string
      email: string
      phone: string
      businessHours: string
      weekdayHours: string
      saturdayHours: string
      sundayClosed: string
    }
  }
  home: {
    hero: {
      title: string
      subtitle: string
      storytelling?: string
      bookFreeCall?: string
      featuredService?: string
      strategicBrand?: string
      premiumServices?: string
      brandStory?: string
      closeModal?: string
      altText?: string
    }
    services: {
      title: string
      subtitle: string
      expertise?: string
      mediaServices?: string
      viewAll?: string
      premiumServices?: string
      discoverServices?: string
      altText?: {
        digitalMarketing?: string
        podcastProduction?: string
        communications?: string
      }
      srOnly?: {
        instagram?: string
        tiktok?: string
        linkedin?: string
      }
      digitalMarketing?: {
        title?: string
        description?: string
      }
      podcastProduction?: {
        title?: string
        description?: string
      }
      communications?: {
        title?: string
        description?: string
      }
      learnMore?: string
      bookConsultation?: string
    }
    whyChooseUs: {
      title: string
      subtitle: string
    }
    testimonials: {
      title: string
      subtitle: string
      testimonialLabel: string
      testimonials: {
        abdullah: {
          name: string
          position: string
          company: string
          quote: string
        }
        memory: {
          name: string
          position: string
          company: string
          quote: string
        }
        eugene: {
          name: string
          position: string
          company: string
          quote: string
        }
      }
      altText: string
      rating: string
    }
    blog: {
      title: string
      subtitle: string
      readMore: string
    }
    cta: {
      title: string
      subtitle: string
    }
    newsletter: {
      title: string
      subtitle: string
      placeholder: string
      button: string
    }
    team: {
      title: string
      subtitle: string
      members: {
        sandra: {
          name: string
          position: string
          bio: string
          instagram: string
          linkedin: string
        }
        moustapha: {
          name: string
          position: string
          bio: string
          instagram: string
          linkedin: string
        }
        moses: {
          name: string
          position: string
          bio: string
          instagram: string
          linkedin: string
        }
        teta: {
          name: string
          position: string
          bio: string
        }
        eloi: {
          name: string
          position: string
        }
        mbabazi: {
          name: string
          position: string
        }
      }
      altText: string
      ariaLabels: {
        instagram: string
        linkedin: string
      }
    }
  }
  about: {
    hero?: {
      title: string
      subtitle: string
    }
    mission?: {
      title: string
      vision: string
      mission: string
    }
    values?: {
      title: string
      items: {
        purpose: {
          title: string
          description: string
        }
        clarity: {
          title: string
          description: string
        }
        community: {
          title: string
          description: string
        }
        excellence: {
          title: string
          description: string
        }
        impact: {
          title: string
          description: string
        }
        collaboration: {
          title: string
          description: string
        }
      }
    }
    story?: {
      title: string
      content: string[]
    }
    founder?: {
      title: string
      content: string[]
      connect: string
    }
    portfolio?: {
      title: string
      subtitle: string
    }
    gallery?: {
      title: string
      subtitle: string
      description: string
    }
    cta?: {
      title: string
      subtitle: string
    }
  }
  services?: {
    hero?: {
      title: string
      subtitle: string
    }
    services?: {
      title: string
      subtitle: string
      digital_marketing?: {
        title: string
        description: string
        features: string[]
      }
      podcast_production?: {
        title: string
        description: string
        features: string[]
      }
      communications?: {
        title: string
        description: string
        features: string[]
      }
      includes?: string
    }
    process?: {
      title: string
      subtitle: string
      description: string
      steps: {
        discovery: {
          title: string
          description: string
        }
        audit: {
          title: string
          description: string
        }
        execution: {
          title: string
          description: string
        }
        reporting: {
          title: string
          description: string
        }
      }
    }
    faq?: {
      title: string
      subtitle: string
      questions: {
        services: {
          question: string
          answer: string
        }
        clients: {
          question: string
          answer: string
        }
        packages: {
          question: string
          answer: string
        }
        results: {
          question: string
          answer: string
        }
        client_types: {
          question: string
          answer: string
        }
      }
    }
    cta?: {
      title: string
      subtitle: string
    }
  }
  blog?: {
    hero?: {
      title: string
      subtitle: string
    }
    readMore?: string
    previous?: string
    next?: string
    newsletter?: {
      title: string
      subtitle: string
      placeholder: string
      button: string
    }
    post?: {
      backToAll: string
      relatedPosts: string
    }
    preview?: {
      label: string
      title: string
      subtitle: string
      viewAll: string
    }
    postNotFound?: string
  }
  contact?: {
    hero: {
      title: string
      subtitle: string
    }
    form: {
      title: string
      subtitle: string
      firstName: string
      lastName: string
      email: string
      phone: string
      service: string
      selectService: string
      socialMedia: string
      contentCreation: string
      podcast: string
      message: string
      messagePlaceholder: string
      submit: string
    }
    info: {
      title: string
      subtitle: string
      address: {
        title: string
        value: string
      }
      email: {
        title: string
        value: string
      }
      phone: {
        title: string
        value: string
      }
      followUs: string
      instagram: string
      tiktok: string
      linkedin: string
    }
  }
  languageSwitcher: {
    label: string
    en: string
    fr: string
    ar: string
  }
}

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
  ar: () => import('@/dictionaries/ar.json').then((module) => module.default)
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  // Fallback to default locale if the requested locale is not supported
  const selectedLocale = Object.keys(dictionaries).includes(locale) ? locale : 'en'
  return dictionaries[selectedLocale]()
}
