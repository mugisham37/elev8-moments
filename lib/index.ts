/**
 * Navigation utilities index
 * Exports all navigation-related utilities for easy importing
 */

// Core navigation utilities
export {
  VALID_ROUTES,
  ROUTE_MAPPINGS,
  EXTERNAL_LINKS,
  EMAIL_CONTACT,
  validateInternalLink,
  validateExternalLink,
  validateEmailLink,
  standardizeRoute,
  getLinkType,
  getLinkTarget,
  getLinkRel,
  processLink,
  getAllValidRoutes,
  hasRouteMapping
} from './navigation';

// Type definitions
export type {
  ValidRoute,
  ExternalURL,
  LinkTypes,
  LinkDefinition,
  LinkChange,
  ComponentLinkAudit,
  LinkProcessResult,
  NavigationLinkProps,
  InternalLinkProps,
  ExternalLinkProps
} from './types';

// Link auditing utilities
export {
  extractHrefsFromHTML,
  analyzeLinkHref,
  validateLinkList,
  generateRouteMappingReport,
  createComponentAudit,
  logValidationResults,
  auditComponentLinks
} from './link-audit';