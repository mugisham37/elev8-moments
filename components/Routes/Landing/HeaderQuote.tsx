'use client'

import React, { useState, useEffect } from 'react'

const HeaderQuote: React.FC = () => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScreenSize('mobile')
      } else if (width < 1024) {
        setScreenSize('tablet')
      } else {
        setScreenSize('desktop')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getResponsiveValue = <T,>(mobile: T, tablet: T, desktop: T): T => {
    if (screenSize === 'mobile') return mobile
    if (screenSize === 'tablet') return tablet
    return desktop
  }

  const isMobile = screenSize === 'mobile'

  return (
    <>
      {/* Font Loading */}
      <style jsx>{`
        @font-face {
          font-family: 'Noiretblanc';
          src: url('//static.showit.co/file/-2eCp0_jSgW6z2q5bKVLgA/shared/noiretblanc-webfont.woff') format('woff');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'Strings';
          src: url('//static.showit.co/file/lbBSknNrRtmaP384hN7Xnw/shared/strings.woff') format('woff');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fade-in-slow {
          animation: fadeIn 1s ease-out 0.25s both;
        }

        .animate-fade-in-medium {
          animation: fadeIn 0.75s ease-out 0.25s both;
        }

        .animate-fade-in-fast {
          animation: fadeIn 0.5s ease-out 0.25s both;
        }
      `}</style>

      {/* Main Container */}
      <div
        style={{
          position: 'relative',
          display: isMobile ? 'none' : 'block',
          height: getResponsiveValue('0px', '451px', '451px')
        }}
      >
        {/* Background Container */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: '#1e1e1e'
        }}>
          {/* Content Container */}
          <div 
            style={{ 
              position: 'relative',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: getResponsiveValue('320px', '768px', '1200px')
            }}
          >
            
            {/* Element 0 - Bottom Paragraph Text */}
            <div style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              visibility: 'visible'
            }} className="animate-fade-in-slow">
              <div
                style={{
                  position: 'absolute',
                  left: getResponsiveValue('11px', '244px', '244px'),
                  top: getResponsiveValue('242px', '261px', '261px'),
                  width: getResponsiveValue('302px', '712px', '712px'),
                  height: getResponsiveValue('184px', '118px', '118px')
                }}
              >
                <p
                  style={{ 
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 400,
                    color: '#f9f2ec',
                    fontSize: getResponsiveValue('14px', '15px', '15px'),
                    lineHeight: '1.8',
                    letterSpacing: '0em',
                    textAlign: getResponsiveValue('left', 'center', 'center')
                  }}
                >
                  Each experience is an artful blend of creativity, connection, healing, and meaningful moments, making us the ideal choice for your next celebration. With a focus on intentionality and presence, we create memorable soulful experiences that leave a lasting impression.
                  <br /><br />
                </p>
              </div>
            </div>

            {/* Element 1 - Middle Subtitle Text */}
            <div style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              visibility: 'visible'
            }} className="animate-fade-in-medium">
              <div
                style={{
                  position: 'absolute',
                  left: getResponsiveValue('11px', '200px', '200px'),
                  top: getResponsiveValue('108px', '195px', '195px'),
                  width: getResponsiveValue('302px', '801px', '801px'),
                  height: getResponsiveValue('134px', '60px', '60px')
                }}
              >
                <p
                  style={{ 
                    fontFamily: getResponsiveValue('Raleway, sans-serif', 'Noiretblanc, sans-serif', 'Noiretblanc, sans-serif'),
                    fontWeight: 400,
                    color: getResponsiveValue('#000000', '#f9f2ec', '#f9f2ec'),
                    fontSize: getResponsiveValue('17px', '20px', '20px'),
                    lineHeight: '1.2',
                    letterSpacing: '0em',
                    textAlign: getResponsiveValue('justify', 'center', 'center')
                  }}
                >
                  Celebrate life with <i>intention</i> through our curated events, unique experiences, and thoughtful gifts. Elevate your moments with our soulful creations and cherish every connection.
                </p>
              </div>
            </div>

            {/* Element 2 - Top Title Text */}
            <div style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              visibility: 'visible'
            }} className="animate-fade-in-fast">
              <div
                style={{
                  position: 'absolute',
                  left: getResponsiveValue('2px', '145px', '145px'),
                  top: getResponsiveValue('63px', '110px', '110px'),
                  width: getResponsiveValue('320px', '910px', '910px'),
                  height: getResponsiveValue('52px', '87px', '87px')
                }}
              >
                <p
                  style={{ 
                    fontFamily: 'Strings, cursive',
                    fontWeight: 400,
                    color: '#f9f2ec',
                    fontSize: getResponsiveValue('25px', '70px', '70px'),
                    lineHeight: '1.2',
                    letterSpacing: '0em',
                    textAlign: 'center'
                  }}
                >
                  Welcome to Elev8 Moments
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderQuote