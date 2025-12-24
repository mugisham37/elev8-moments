/**
 * Link auditing utilities for development and testing
 * Provides functions to extract, validate, and report on links in components
 */

import { 
  validateInternalLink, 
  validateExternalLink, 
  validateEmailLink,
  processLink,
  ROUTE_MAPPINGS,
  VALID_ROUTES
} from './navigation';
import type { LinkDefinition, LinkChange, ComponentLinkAudit } from './types';

/**
 * Extracts href attributes from HTML content (for static analysis)
 * @param htmlContent - HTML content to analyze
 * @returns Array of href values found
 */
export const extractHrefsFromHTML = (htmlContent: string): string[] => {
  const hrefRegex = /href=["']([^"']+)["']/g;
  const hrefs: string[] = [];
  let match;
  
  while ((match = hrefRegex.exec(htmlContent)) !== null) {
    hrefs.push(match[1]);
  }
  
  return hrefs;
};

/**
 * Analyzes a single href and provides detailed information
 * @param href - The href to analyze
 * @returns Detailed analysis of the link
 */
export const analyzeLinkHref = (href: string) => {
  const processed = processLink(href);
  const hasMapping = href in ROUTE_MAPPINGS;
  const isProblematic = !processed.isValid || processed.needsMapping;
  
  return {
    ...processed,
    hasMapping,
    isProblematic,
    recommendation: getRecommendation(href, processed)
  };
};

/**
 * Gets recommendation for fixing a problematic link
 * @param originalHref - The original href
 * @param processed - The processed link result
 * @returns Recommendation string
 */
const getRecommendation = (originalHref: string, processed: any): string => {
  if (processed.needsMapping) {
    return `Change "${originalHref}" to "${processed.standardizedHref}"`;
  }
  
  if (!processed.isValid && processed.linkType === 'internal') {
    return `Invalid internal route "${originalHref}" - consider redirecting to a valid route`;
  }
  
  if (!processed.isValid && processed.linkType === 'external') {
    return `Invalid external URL "${originalHref}" - check URL format`;
  }
  
  if (!processed.isValid && processed.linkType === 'email') {
    return `Invalid email link "${originalHref}" - check email format`;
  }
  
  return 'Link appears to be valid';
};

/**
 * Validates all links in a list and returns a summary
 * @param hrefs - Array of hrefs to validate
 * @returns Validation summary
 */
export const validateLinkList = (hrefs: string[]) => {
  const results = hrefs.map(analyzeLinkHref);
  const problematic = results.filter(r => r.isProblematic);
  const valid = results.filter(r => !r.isProblematic);
  
  return {
    total: hrefs.length,
    valid: valid.length,
    problematic: problematic.length,
    results,
    problematicLinks: problematic,
    summary: {
      needsMapping: problematic.filter(r => r.needsMapping).length,
      invalidInternal: problematic.filter(r => r.linkType === 'internal' && !r.isValid).length,
      invalidExternal: problematic.filter(r => r.linkType === 'external' && !r.isValid).length,
      invalidEmail: problematic.filter(r => r.linkType === 'email' && !r.isValid).length
    }
  };
};

/**
 * Generates a report of all route mappings
 * @returns Report of route mappings
 */
export const generateRouteMappingReport = () => {
  const mappings = Object.entries(ROUTE_MAPPINGS).map(([from, to]) => ({
    from,
    to,
    category: categorizeMapping(from, to)
  }));
  
  return {
    totalMappings: mappings.length,
    mappings,
    categories: {
      placeholder: mappings.filter(m => m.category === 'placeholder').length,
      inconsistent: mappings.filter(m => m.category === 'inconsistent').length,
      productToExperience: mappings.filter(m => m.category === 'product-experience').length,
      productToGifting: mappings.filter(m => m.category === 'product-gifting').length
    }
  };
};

/**
 * Categorizes a route mapping
 * @param from - Original route
 * @param to - Target route
 * @returns Category of the mapping
 */
const categorizeMapping = (from: string, to: string): string => {
  if (from.startsWith('#/')) {
    return 'placeholder';
  }
  
  if (from.includes('-') && to === VALID_ROUTES.EXPERIENCE) {
    return 'product-experience';
  }
  
  if (from.includes('-') && to === VALID_ROUTES.GIFTING) {
    return 'product-gifting';
  }
  
  if (from.includes('experience') || from.includes('event') || from.includes('about')) {
    return 'inconsistent';
  }
  
  return 'other';
};

/**
 * Creates a component audit template
 * @param componentName - Name of the component
 * @param links - Array of link definitions
 * @returns Component audit structure
 */
export const createComponentAudit = (
  componentName: string, 
  links: LinkDefinition[]
): ComponentLinkAudit => {
  const requiredChanges: LinkChange[] = [];
  
  links.forEach(link => {
    const analysis = analyzeLinkHref(link.currentHref);
    
    if (analysis.isProblematic) {
      requiredChanges.push({
        element: link.element,
        action: analysis.needsMapping ? 'update_href' : 'remove_link',
        oldValue: link.currentHref,
        newValue: analysis.standardizedHref,
        reasoning: analysis.recommendation
      });
    }
  });
  
  return {
    component: componentName,
    currentLinks: links,
    requiredChanges,
    preserveDesign: true
  };
};

/**
 * Utility to log validation results in a readable format
 * @param results - Validation results to log
 */
export const logValidationResults = (results: ReturnType<typeof validateLinkList>) => {
  console.log('\n=== Link Validation Results ===');
  console.log(`Total links: ${results.total}`);
  console.log(`Valid links: ${results.valid}`);
  console.log(`Problematic links: ${results.problematic}`);
  
  if (results.problematic > 0) {
    console.log('\n=== Issues Found ===');
    console.log(`Links needing mapping: ${results.summary.needsMapping}`);
    console.log(`Invalid internal routes: ${results.summary.invalidInternal}`);
    console.log(`Invalid external URLs: ${results.summary.invalidExternal}`);
    console.log(`Invalid email links: ${results.summary.invalidEmail}`);
    
    console.log('\n=== Problematic Links ===');
    results.problematicLinks.forEach((link, index) => {
      console.log(`${index + 1}. ${link.originalHref}`);
      console.log(`   Type: ${link.linkType}`);
      console.log(`   Recommendation: ${link.recommendation}`);
      console.log('');
    });
  }
  
  console.log('=== End Report ===\n');
};

/**
 * Development helper to validate a single component's links
 * @param componentName - Name of the component
 * @param hrefs - Array of hrefs from the component
 */
export const auditComponentLinks = (componentName: string, hrefs: string[]) => {
  console.log(`\n=== Auditing ${componentName} ===`);
  const results = validateLinkList(hrefs);
  logValidationResults(results);
  return results;
};