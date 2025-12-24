# Implementation Plan: Navigation Links Optimization

## Overview

This implementation plan converts the navigation links optimization design into actionable coding tasks. Each task builds incrementally to ensure proper routing, consistent user experience, and perfect design preservation.

## Tasks

- [x] 1. Set up route validation and mapping utilities
  - Create route constants and mapping configuration
  - Set up validation functions for link checking
  - Create utility functions for route standardization
  - _Requirements: 1.1, 1.2, 10.1_

- [x] 2. Fix MainMenu.tsx navigation links
  - [x] 2.1 Update experiences link to use correct route
    - Change `href="/experiences"` to `href="/experience"`
    - Maintain all existing styling and responsive behavior
    - _Requirements: 1.1, 8.1_

  - [x] 2.2 Fix placeholder home link
    - Change `href="#/"` to `href="/"`
    - Preserve Link component usage and styling
    - _Requirements: 1.1, 8.1_

  - [ ]* 2.3 Write property test for MainMenu navigation
    - **Property 1: Valid route navigation**
    - **Validates: Requirements 1.1**

- [x] 3. Standardize DesktopMenu.tsx social media links
  - [x] 3.1 Replace Facebook link with Instagram
    - Update Facebook href to `https://www.instagram.com/elev8moments/`
    - Change Facebook icon to Instagram icon (reuse existing Instagram SVG)
    - Maintain all hover effects and styling
    - _Requirements: 4.1, 4.2, 8.1_

  - [x] 3.2 Verify all navigation links are correct
    - Confirm all internal navigation uses existing routes
    - Ensure proper Link component usage
    - _Requirements: 1.1, 10.1_

  - [ ]* 3.3 Write property test for social media consistency
    - **Property 3: Social media link consistency**
    - **Validates: Requirements 4.1, 4.2**

- [ ] 4. Checkpoint - Verify core navigation functionality
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Fix MobilePopUpMenu.tsx navigation structure
  - [x] 5.1 Update all non-existent routes to valid routes
    - Change `href="#/"` to `href="/"`
    - Change `href="/experiences"` to `href="/experience"`
    - Change `href="/event-design"` to `href="/eventdesign"`
    - Change `href="/about-us"` to `href="/aboutus"`
    - _Requirements: 2.1, 2.2, 1.1_

  - [x] 5.2 Redirect product-specific routes to appropriate pages
    - Change `href="/mobile-boards-menu"` to `href="/experience"`
    - Change `href="/grazing-tables"` to `href="/experience"`
    - Change `href="/elf-kits"` to `href="/gifting"`
    - Update link text to match new destinations if needed
    - _Requirements: 2.1, 9.1, 9.2_

  - [x] 5.3 Maintain mobile menu functionality and styling
    - Preserve all popup behavior and animations
    - Keep all responsive styling intact
    - Maintain close button functionality
    - _Requirements: 8.1, 8.2, 8.3_

  - [ ]* 5.4 Write property test for mobile-desktop navigation parity
    - **Property 2: Consistent mobile-desktop navigation**
    - **Validates: Requirements 2.1, 2.2**

- [ ] 6. Update Footer.tsx navigation links
  - [ ] 6.1 Fix inconsistent route naming
    - Change `href="/experiences"` to `href="/experience"`
    - Change `href="#/"` to `href="/"`
    - Maintain all responsive positioning and styling
    - _Requirements: 1.1, 8.1_

  - [ ] 6.2 Verify email contact functionality
    - Confirm `mailto:hello@elev8moments.com` links work correctly
    - Test email client opening behavior
    - _Requirements: 7.1, 7.2_

  - [ ]* 6.3 Write unit tests for footer navigation
    - Test all footer links point to correct destinations
    - Test email links open email client
    - _Requirements: 1.1, 7.1_

- [ ] 7. Fix landing page navigation (CharcuterieOfferings.tsx)
  - [ ] 7.1 Update experiences link
    - Change `href="/experiences"` to `href="/experience"`
    - Maintain arrow icon functionality and styling
    - Preserve all responsive behavior
    - _Requirements: 1.1, 9.1, 8.1_

  - [ ] 7.2 Verify gifting section links
    - Confirm `href="/gifting"` is correct
    - Maintain arrow icon functionality
    - _Requirements: 1.1, 9.2_

  - [ ]* 7.3 Write property test for content-to-route mapping
    - **Property 6: Logical navigation flow**
    - **Validates: Requirements 9.1, 9.2**

- [ ] 8. Standardize Instagram.tsx social media links
  - [ ] 8.1 Update Instagram account links
    - Change all `glamhausdesignco` references to `elev8moments`
    - Update to `https://www.instagram.com/elev8moments/`
    - Maintain all hover effects and styling
    - _Requirements: 4.1, 4.2, 8.1_

  - [ ] 8.2 Preserve Instagram section design
    - Keep all image grid functionality
    - Maintain responsive behavior
    - Preserve all animations and transitions
    - _Requirements: 8.1, 8.2, 8.3_

- [ ] 9. Fix Grazingtable experience navigation
  - [ ] 9.1 Update arrow icon destinations
    - Change `href="#/"` to `href="/experience"`
    - Change `href="/traditional-boards"` to `href="/experience"`
    - Maintain arrow icon styling and positioning
    - _Requirements: 1.1, 9.1, 8.1_

  - [ ] 9.2 Preserve email contact functionality
    - Keep all `mailto:hello@elev8moments.com` links unchanged
    - Maintain button styling and responsive behavior
    - _Requirements: 7.1, 7.3, 8.1_

  - [ ]* 9.3 Write property test for email contact accessibility
    - **Property 5: Email contact accessibility**
    - **Validates: Requirements 7.1, 7.2**

- [ ] 10. Handle BoardBoxesMenuOpen.tsx component
  - [ ] 10.1 Analyze component usage and visibility
    - Determine if component is actively used (currently display: none)
    - Decide on redirect strategy for product-specific routes
    - _Requirements: 1.1, 5.1_

  - [ ] 10.2 Redirect product routes to experience page
    - Change all product-specific routes to `href="/experience"`
    - Maintain component styling and layout
    - Preserve close button functionality
    - _Requirements: 1.1, 9.1, 8.1_

- [ ] 11. Checkpoint - Verify all navigation links
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 12. Implement comprehensive testing
  - [ ] 12.1 Create automated link validation
    - Build script to extract and validate all links
    - Check internal links against existing routes
    - Verify external links use correct format
    - _Requirements: 1.1, 4.1, 7.1_

  - [ ] 12.2 Test responsive navigation behavior
    - Verify mobile navigation works correctly
    - Test tablet navigation functionality
    - Confirm desktop navigation unchanged
    - _Requirements: 2.1, 8.2, 8.3_

  - [ ]* 12.3 Write integration tests for user journeys
    - Test complete navigation flows
    - Verify logical content-to-route mapping
    - Test cross-device navigation consistency
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [ ] 13. Perform design integrity verification
  - [ ] 13.1 Visual regression testing
    - Compare before/after screenshots
    - Verify no styling changes occurred
    - Confirm responsive breakpoints unchanged
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [ ] 13.2 Cross-browser compatibility testing
    - Test navigation in Chrome, Firefox, Safari
    - Verify mobile browser compatibility
    - Test email and external link behavior
    - _Requirements: 1.1, 4.1, 7.1_

  - [ ]* 13.3 Write property test for design preservation
    - **Property 4: Design preservation**
    - **Validates: Requirements 8.1, 8.2, 8.3**

- [ ] 14. Final validation and cleanup
  - [ ] 14.1 Remove any unused link functionality
    - Identify decorative elements that don't need links
    - Remove link functionality while preserving styling
    - Ensure no broken or unnecessary links remain
    - _Requirements: 6.1, 6.2, 6.3_

  - [ ] 14.2 Document navigation structure
    - Create navigation map for future reference
    - Document route mapping decisions
    - Update any relevant documentation
    - _Requirements: 10.1, 10.2_

- [ ] 15. Final checkpoint - Complete navigation optimization
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster implementation
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation and user feedback
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- Design preservation is critical - no visual changes allowed
- All email contact functionality must be preserved
- Social media links should only point to Instagram account