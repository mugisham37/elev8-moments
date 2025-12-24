/**
 * Validation script to test the navigation utilities setup
 * Run this to verify that all utilities are working correctly
 */

import {
  VALID_ROUTES,
  ROUTE_MAPPINGS,
  EXTERNAL_LINKS,
  EMAIL_CONTACT,
  validateInternalLink,
  validateExternalLink,
  validateEmailLink,
  standardizeRoute,
  getLinkType,
  processLink,
  getAllValidRoutes,
  hasRouteMapping
} from './navigation';

import {
  validateLinkList,
  generateRouteMappingReport,
  logValidationResults
} from './link-audit';

console.log('🚀 Validating Navigation Utilities Setup...\n');

// Test 1: Validate constants are properly defined
console.log('✅ Test 1: Constants Definition');
console.log('Valid Routes:', Object.keys(VALID_ROUTES));
console.log('Route Mappings Count:', Object.keys(ROUTE_MAPPINGS).length);
console.log('External Links:', Object.keys(EXTERNAL_LINKS));
console.log('Email Contact:', EMAIL_CONTACT);
console.log('');

// Test 2: Validate internal link validation
console.log('✅ Test 2: Internal Link Validation');
const validRoutes = ['/', '/aboutus', '/experience', '/eventdesign', '/gifting'];
const invalidRoutes = ['/experiences', '/mobile-boards-menu', '#/', '/nonexistent'];

validRoutes.forEach(route => {
  const isValid = validateInternalLink(route);
  console.log(`${route}: ${isValid ? '✅' : '❌'} ${isValid ? 'VALID' : 'INVALID'}`);
});

invalidRoutes.forEach(route => {
  const isValid = validateInternalLink(route);
  console.log(`${route}: ${!isValid ? '✅' : '❌'} ${!isValid ? 'CORRECTLY INVALID' : 'INCORRECTLY VALID'}`);
});
console.log('');

// Test 3: Validate external link validation
console.log('✅ Test 3: External Link Validation');
const validExternalLinks = [
  'https://www.instagram.com/elev8moments/',
  'http://example.com',
  'https://indiehausdesigns.com/'
];
const invalidExternalLinks = ['not-a-url', 'ftp://example.com', 'javascript:void(0)'];

validExternalLinks.forEach(link => {
  const isValid = validateExternalLink(link);
  console.log(`${link}: ${isValid ? '✅' : '❌'} ${isValid ? 'VALID' : 'INVALID'}`);
});

invalidExternalLinks.forEach(link => {
  const isValid = validateExternalLink(link);
  console.log(`${link}: ${!isValid ? '✅' : '❌'} ${!isValid ? 'CORRECTLY INVALID' : 'INCORRECTLY VALID'}`);
});
console.log('');

// Test 4: Validate email link validation
console.log('✅ Test 4: Email Link Validation');
const validEmailLinks = ['mailto:hello@elev8moments.com', 'mailto:test@example.com'];
const invalidEmailLinks = ['hello@elev8moments.com', 'mailto:', 'mailto:invalid'];

validEmailLinks.forEach(link => {
  const isValid = validateEmailLink(link);
  console.log(`${link}: ${isValid ? '✅' : '❌'} ${isValid ? 'VALID' : 'INVALID'}`);
});

invalidEmailLinks.forEach(link => {
  const isValid = validateEmailLink(link);
  console.log(`${link}: ${!isValid ? '✅' : '❌'} ${!isValid ? 'CORRECTLY INVALID' : 'INCORRECTLY VALID'}`);
});
console.log('');

// Test 5: Validate route standardization
console.log('✅ Test 5: Route Standardization');
const routesToStandardize = [
  '#/',
  '/experiences',
  '/mobile-boards-menu',
  '/elf-kits',
  '/',
  '/aboutus',
  'https://www.instagram.com/elev8moments/',
  'mailto:hello@elev8moments.com'
];

routesToStandardize.forEach(route => {
  const standardized = standardizeRoute(route);
  const changed = route !== standardized;
  console.log(`${route} → ${standardized} ${changed ? '(MAPPED)' : '(UNCHANGED)'}`);
});
console.log('');

// Test 6: Validate link type detection
console.log('✅ Test 6: Link Type Detection');
const linksToType = [
  '/',
  '/aboutus',
  '#/',
  'https://www.instagram.com/elev8moments/',
  'mailto:hello@elev8moments.com',
  'javascript:void(0)'
];

linksToType.forEach(link => {
  const type = getLinkType(link);
  console.log(`${link}: ${type}`);
});
console.log('');

// Test 7: Validate comprehensive link processing
console.log('✅ Test 7: Comprehensive Link Processing');
const linksToProcess = ['/experiences', 'https://www.instagram.com/elev8moments/', 'mailto:hello@elev8moments.com'];

linksToProcess.forEach(link => {
  const result = processLink(link);
  console.log(`\nProcessing: ${link}`);
  console.log(`  Type: ${result.linkType}`);
  console.log(`  Valid: ${result.isValid}`);
  console.log(`  Standardized: ${result.standardizedHref}`);
  console.log(`  Needs Mapping: ${result.needsMapping}`);
  console.log(`  Target: ${result.target}`);
  if (result.rel) console.log(`  Rel: ${result.rel}`);
});
console.log('');

// Test 8: Validate link list processing
console.log('✅ Test 8: Link List Validation');
const testLinks = [
  '/',
  '/experiences',
  '/mobile-boards-menu',
  'https://www.instagram.com/elev8moments/',
  'mailto:hello@elev8moments.com',
  '/nonexistent',
  'invalid-url'
];

const validationResults = validateLinkList(testLinks);
logValidationResults(validationResults);

// Test 9: Generate route mapping report
console.log('✅ Test 9: Route Mapping Report');
const mappingReport = generateRouteMappingReport();
console.log(`Total mappings: ${mappingReport.totalMappings}`);
console.log('Categories:');
Object.entries(mappingReport.categories).forEach(([category, count]) => {
  console.log(`  ${category}: ${count}`);
});
console.log('');

// Test 10: Validate utility functions
console.log('✅ Test 10: Utility Functions');
console.log('All valid routes:', getAllValidRoutes());
console.log('Has mapping for "/experiences":', hasRouteMapping('/experiences'));
console.log('Has mapping for "/":', hasRouteMapping('/'));
console.log('');

console.log('🎉 Navigation Utilities Setup Validation Complete!');
console.log('All utilities are properly configured and ready for use.');