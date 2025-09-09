export interface SanityImage {
  _type: string
  asset: {
    _ref: string
    _type: string
  }
  crop?: {
    bottom: number
    left: number
    right: number
    top: number
  }
  hotspot?: {
    height: number
    width: number
    x: number
    y: number
  }
}

export interface EventType {
  title: string
  image: SanityImage | string
  description?: string
}


export interface PortfolioItem {
  title: string
  description?: string
  image: SanityImage | string
}

export interface Service {
  _id: string 
  title: string
  description: string
  slug: { current: string }
  icon?: string
  image?: SanityImage | string
  features?: string[]
}

export interface Package {
  title: string
  price: string
  features: string[]
  isPopular: boolean
}


export interface Testimonial {
  _id: string
  name: string
  position?: string
  company?: string
  quote: string
  image?: SanityImage | string
  rating?: number
}

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  mainImage?: SanityImage | string
  image?: string
  publishedAt: string
  categories?: string[]
}

export interface TeamMember {
  _id: string
  name: string
  position: string
  bio?: string
  image?: SanityImage | string
  socialLinks?: {
    linkedin?: string
    twitter?: string
    instagram?: string
  }
}

// Brand data
export interface BrandData {
  _id?: string
  title?: string
  description?: string
  logo?: SanityImage | string
  services?: Service[]
  packages?: Package[]
  eventTypes?: EventType[]
  portfolio?: PortfolioItem[]
}

// Home page data
export interface HomePageData {
  hero?: {
    heading?: string
    subheading?: string
    images?: SanityImage[] | any[]
  }
  services?: Service[]
  stats?: Array<{ value: string; label: string }>
  testimonials?: Testimonial[]
  blogPosts?: BlogPost[]
}

// About page data
export interface AboutPageData {
  about?: {
    title?: string
    heroImage?: SanityImage | string
    mission?: string
    vision?: string
    values?: string[]
    story?: any // BlockContent
    storyImage?: SanityImage | string
  }
  teamMembers?: TeamMember[]
}

