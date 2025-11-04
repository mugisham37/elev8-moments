export const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'BOARDS + BOXES', href: '/boards-boxes' },
  { label: 'GRAZING TABLES', href: '/grazing-tables' },
  { label: 'EVENT DESIGN', href: '/event-design' },
  { label: 'ELF KITS', href: '/elf-kits' },
  { label: 'ABOUT', href: '/about' },
] as const;

export const SOCIAL_LINKS = [
  { 
    platform: 'instagram', 
    href: 'https://instagram.com', 
    ariaLabel: 'Follow us on Instagram' 
  },
  { 
    platform: 'facebook', 
    href: 'https://facebook.com', 
    ariaLabel: 'Follow us on Facebook' 
  },
] as const;