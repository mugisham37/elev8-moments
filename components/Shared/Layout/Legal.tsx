'use client'

import React, { useEffect, useState } from 'react'

const Legal = () => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScreenSize('mobile')
      } else if (width >= 768 && width < 1024) {
        setScreenSize('tablet')
      } else {
        setScreenSize('desktop')
      }
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Helper function to get responsive values
  const getResponsiveValue = <T,>(mobile: T, tablet: T, desktop: T): T => {
    if (screenSize === 'mobile') return mobile
    if (screenSize === 'tablet') return tablet
    return desktop
  }

  return (
    <footer 
      style={{
        width: '100%',
        minHeight: getResponsiveValue('61px', '50px', '45px'),
        backgroundColor: getResponsiveValue('#1E1E1E', '#F9F2EC', '#F9F2EC'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: getResponsiveValue('12px 20px', '15px 30px', '12px 40px'),
        gap: getResponsiveValue('10px', '20px', '30px'),
        flexWrap: getResponsiveValue('wrap', 'nowrap', 'nowrap')
      }}
    >
      {/* Left Section: PRIVACY Link */}
      <div 
        data-sid="legal_2"
        style={{ 
          flex: getResponsiveValue('0 0 100%', '0 1 auto', '0 1 auto'),
          order: getResponsiveValue('2', '1', '1')
        }}
      >
        <p 
          style={{
            textAlign: getResponsiveValue('center', 'left', 'left'),
            letterSpacing: '0em',
            fontFamily: 'Montserrat',
            fontWeight: 'normal',
            fontSize: getResponsiveValue('10px', '10px', '11px'),
            lineHeight: '1.4',
            color: getResponsiveValue('#CFDAC7', '#1E1E1E', '#1E1E1E'),
            margin: 0,
            cursor: 'pointer',
            transition: 'opacity 300ms ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          PRIVACY
        </p>
      </div>

      {/* Center Section: Copyright Text & Designer Link */}
      <div 
        style={{
          flex: getResponsiveValue('0 0 100%', '1 1 auto', '1 1 auto'),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: getResponsiveValue('8px', '6px', '4px'),
          order: getResponsiveValue('1', '2', '2')
        }}
      >
        {/* Website Designer Link */}
        <a 
          href="https://indiehausdesigns.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          data-sid="legal_3"
          style={{ 
            textDecoration: 'none',
            transition: 'all 300ms ease'
          }}
        >
          <p 
            style={{
              textAlign: 'center',
              lineHeight: '1.4',
              letterSpacing: '0.05em',
              fontWeight: 'normal',
              textTransform: getResponsiveValue('uppercase', 'none', 'none'),
              fontSize: getResponsiveValue('9px', '12px', '14px'),
              color: getResponsiveValue('#F9F2EC', '#1E1E1E', '#1E1E1E'),
              fontFamily: getResponsiveValue('Montserrat', 'Noiretblanc', 'Noiretblanc'),
              margin: 0,
              transition: 'text-decoration 300ms ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            Website Designed With Love By Indie Haus Design Co.
          </p>
        </a>

        {/* Copyright Text */}
        <div data-sid="legal_0">
          <p 
            style={{
              color: getResponsiveValue('#CFDAC7', '#1E1E1E', '#1E1E1E'),
              textAlign: 'center',
              letterSpacing: '0em',
              fontFamily: 'Montserrat',
              fontWeight: 'normal',
              fontSize: getResponsiveValue('7px', '8px', '9px'),
              lineHeight: '1.4',
              margin: 0
            }}
          >
            ELEV8 MOMENTS 2024 | ALL RIGHTS RESERVED
          </p>
        </div>
      </div>

      {/* Right Section: LEGAL Link */}
      <div 
        data-sid="legal_1"
        style={{ 
          flex: getResponsiveValue('0 0 100%', '0 1 auto', '0 1 auto'),
          order: getResponsiveValue('3', '3', '3')
        }}
      >
        <p 
          style={{
            textAlign: getResponsiveValue('center', 'right', 'right'),
            letterSpacing: '0em',
            fontFamily: 'Montserrat',
            fontWeight: 'normal',
            fontSize: getResponsiveValue('10px', '10px', '11px'),
            lineHeight: '1.4',
            color: getResponsiveValue('#CFDAC7', '#1E1E1E', '#1E1E1E'),
            margin: 0,
            cursor: 'pointer',
            transition: 'opacity 300ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          LEGAL
        </p>
      </div>
    </footer>
  )
}

export default Legal