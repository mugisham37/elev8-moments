/**
 * Type definitions for navigation link optimization
 */

import { VALID_ROUTES, EXTERNAL_LINKS } from './navigation';

// Valid route type
export type ValidRoute = typeof VALID_ROUTES[keyof typeof VALID_ROUTES];

// External link type
export type ExternalURL = typeof EXTERNAL_LINKS[keyof typeof EXTERNAL_LINKS];

// Link types classification
export interface LinkTypes {
  // Internal navigation using Next.js routing
  InternalLinks: {
    component: 'Link' | 'a';
    target: '_self';
    destinations: ValidRoute[];
  };
  
  // External links to social media
  ExternalLinks: {
    component: 'a';
    target: '_blank';
    rel: 'noopener noreferrer';
    destinations: ExternalURL[];
  };
  
  // Email contact links
  EmailLinks: {
    component: 'a';
    target: '_self';
    protocol: 'mailto:';
    destination: string;
  };
  
  // Interactive elements (no navigation)
  InteractiveElements: {
    component: 'div' | 'button';
    onClick: React.EventHandler<React.MouseEvent>;
    navigation: false;
  };
}

// Link definition for component auditing
export interface LinkDefinition {
  element: string;
  currentHref: string;
  linkType: 'internal' | 'external' | 'email' | 'interactive';
  functionality: 'navigation' | 'decoration' | 'action';
}

// Link change for component modifications
export interface LinkChange {
  element: string;
  action: 'update_href' | 'remove_link' | 'add_target' | 'change_component';
  oldValue: string;
  newValue: string;
  reasoning: string;
}

// Component link audit structure
export interface ComponentLinkAudit {
  component: string;
  currentLinks: LinkDefinition[];
  requiredChanges: LinkChange[];
  preserveDesign: boolean;
}

// Link processing result
export interface LinkProcessResult {
  originalHref: string;
  standardizedHref: string;
  linkType: 'internal' | 'external' | 'email' | 'unknown';
  isValid: boolean;
  target: '_self' | '_blank';
  rel?: string;
  needsMapping: boolean;
}

// Navigation component props
export interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.EventHandler<React.MouseEvent>;
}

// Internal link component props
export interface InternalLinkProps extends NavigationLinkProps {
  href: ValidRoute | string;
}

// External link component props
export interface ExternalLinkProps extends NavigationLinkProps {
  href: ExternalURL | string;
  target?: '_blank';
  rel?: string;
}