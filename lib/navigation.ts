/**
 * Navigation utilities for route validation and mapping
 * Provides constants, validation functions, and standardization utilities
 * for the Elev8 Moments website navigation optimization
 */

// Valid internal routes based on app/ directory structure
export const VALID_ROUTES = {
  HOME: '/',
  ABOUT: '/aboutus',
  EXPERIENCE: '/experience', 
  EVENT_DESIGN: '/eventdesign',
  GIFTING: '/gifting'
} as const;

// Type for valid route values
export type ValidRoute = typeof VALID_ROUTES[keyof typeof VALID_ROUTES];

// Route mapping for problematic links
export const ROUTE_MAPPINGS: Record<string, ValidRoute> = {
  // Placeholder routes
  '#/': VALID_ROUTES.HOME,
  
  // Inconsistent route naming
  '/experiences': VALID_ROUTES.EXPERIENCE,
  '/event-design': VALID_ROUTES.EVENT_DESIGN,
  '/about-us': VALID_ROUTES.ABOUT,
  
  // Non-existent product routes → Experience
  '/mobile-boards-menu': VALID_ROUTES.EXPERIENCE,
  '/grazing-tables': VALID_ROUTES.EXPERIENCE,
  '/mens-boards': VALID_ROUTES.EXPERIENCE,
  '/traditional-boards': VALID_ROUTES.EXPERIENCE,
  '/custom-boards': VALID_ROUTES.EXPERIENCE,
  '/holiday-boards': VALID_ROUTES.EXPERIENCE,
  
  // Non-existent product routes → Gifting
  '/elf-kits': VALID_ROUTES.GIFTING,
} as const;

// External links configuration
export const EXTERNAL_LINKS = {
  INSTAGRAM: 'https://www.instagram.com/elev8moments/',
  WEBSITE_DESIGNER: 'https://indiehausdesigns.com/'
} as const;

// Email configuration
export const EMAIL_CONTACT = 'mailto:hello@elev8moments.com';

/**
 * Validates if a given href is a valid internal route
 * @param href - The href to validate
 * @returns boolean indicating if the route is valid
 */
export const validateInternalLink = (href: string): boolean => {
  const validRoutes = Object.values(VALID_ROUTES);
  return validRoutes.includes(href as ValidRoute);
};

/**
 * Validates if a given href is a valid external URL
 * @param href - The href to validate
 * @returns boolean indicating if the URL is valid
 */
export const validateExternalLink = (href: string): boolean => {
  try {
    const url = new URL(href);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

/**
 * Validates if a given href is a valid email link
 * @param href - The href to validate
 * @returns boolean indicating if the email link is valid
 */
export const validateEmailLink = (href: string): boolean => {
  return href.startsWith('mailto:') && href.includes('@');
};

/**
 * Standardizes a route by mapping it to a valid route if needed
 * @param href - The href to standardize
 * @returns The standardized route or the original href if no mapping exists
 */
export const standardizeRoute = (href: string): string => {
  // Check if there's a direct mapping
  if (ROUTE_MAPPINGS[href]) {
    return ROUTE_MAPPINGS[href];
  }
  
  // If it's already a valid route, return as-is
  if (validateInternalLink(href)) {
    return href;
  }
  
  // Return original href for external links, email links, etc.
  return href;
};

/**
 * Determines the type of link based on the href
 * @param href - The href to analyze
 * @returns The link type
 */
export const getLinkType = (href: string): 'internal' | 'external' | 'email' | 'unknown' => {
  if (validateEmailLink(href)) {
    return 'email';
  }
  
  if (href.startsWith('/') || href.startsWith('#/')) {
    return 'internal';
  }
  
  if (validateExternalLink(href)) {
    return 'external';
  }
  
  return 'unknown';
};

/**
 * Gets the appropriate target attribute for a link
 * @param href - The href to analyze
 * @returns The target attribute value
 */
export const getLinkTarget = (href: string): '_self' | '_blank' => {
  const linkType = getLinkType(href);
  return linkType === 'external' ? '_blank' : '_self';
};

/**
 * Gets the appropriate rel attribute for external links
 * @param href - The href to analyze
 * @returns The rel attribute value or undefined for internal links
 */
export const getLinkRel = (href: string): string | undefined => {
  const linkType = getLinkType(href);
  return linkType === 'external' ? 'noopener noreferrer' : undefined;
};

/**
 * Comprehensive link validation and standardization
 * @param href - The href to process
 * @returns Object with validation results and standardized href
 */
export const processLink = (href: string) => {
  const linkType = getLinkType(href);
  const standardizedHref = standardizeRoute(href);
  const isValid = linkType === 'internal' 
    ? validateInternalLink(standardizedHref)
    : linkType === 'external' 
    ? validateExternalLink(href)
    : linkType === 'email'
    ? validateEmailLink(href)
    : false;

  return {
    originalHref: href,
    standardizedHref,
    linkType,
    isValid,
    target: getLinkTarget(href),
    rel: getLinkRel(href),
    needsMapping: href !== standardizedHref
  };
};

/**
 * Extracts all routes from the VALID_ROUTES constant
 * @returns Array of all valid routes
 */
export const getAllValidRoutes = (): ValidRoute[] => {
  return Object.values(VALID_ROUTES);
};

/**
 * Checks if a route exists in the route mappings
 * @param href - The href to check
 * @returns boolean indicating if mapping exists
 */
export const hasRouteMapping = (href: string): boolean => {
  return href in ROUTE_MAPPINGS;
};