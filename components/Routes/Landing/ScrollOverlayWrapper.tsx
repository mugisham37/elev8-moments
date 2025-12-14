'use client'

import React from 'react'

interface ScrollOverlayWrapperProps {
  children: React.ReactNode
  zIndex?: number
}

/**
 * Wrapper component that makes its content overlay previous sections on scroll
 * Use this to wrap components that should slide up and cover the component above
 */
const ScrollOverlayWrapper: React.FC<ScrollOverlayWrapperProps> = ({ 
  children, 
  zIndex = 10 
}) => {
  return (
    <div 
      style={{
        position: 'relative',
        zIndex: zIndex,
        backgroundColor: 'inherit'
      }}
    >
      {children}
    </div>
  )
}

export default ScrollOverlayWrapper
