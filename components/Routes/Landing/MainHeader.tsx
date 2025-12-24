'use client'

import { useEffect, useState } from 'react'

const MainHeader = () => {
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

  const isMobile = screenSize === 'mobile'
  const isTablet = screenSize === 'tablet'
  const isDesktop = screenSize === 'desktop'

  return (
    <div 
      style={{
        position: 'relative',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        height: getResponsiveValue('666px', '616px', '963px')
      }}
    >
      {/* Background layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}>
        {/* Background color */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: getResponsiveValue('rgba(249, 242, 236, 1)', 'rgba(244, 229, 218, 1)', 'rgba(239, 216, 201, 1)')
          }}
        />
        
        {/* Background image with opacity overlay - tablet and desktop */}
        {(isTablet || isDesktop) && (
          <>
            <div 
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/images/10.JPG)',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                opacity: 0.2
              }}
            />
          </>
        )}
      </div>

      {/* Content container */}
      <div 
        style={{
          position: 'relative',
          width: getResponsiveValue('100%', '768px', '1200px'),
          maxWidth: getResponsiveValue('100%', '768px', '1200px'),
          margin: '0 auto',
          padding: getResponsiveValue('0 20px', '0', '0')
        }}
      >
        {/* Dark background box */}
        <div
          style={{
            position: 'absolute',
            left: getResponsiveValue('50%', '32px', '50px'),
            top: getResponsiveValue('170px', '95px', '148px'),
            width: getResponsiveValue('calc(100% + 20px)', '414px', '647px'),
            maxWidth: getResponsiveValue('494px', '414px', '854px'),
            height: getResponsiveValue('720px', '432px', '675px'),
            transform: getResponsiveValue('translateX(-50%)', 'none', 'none'),
            display: 'flex',
            flexDirection: 'column',
            alignItems: getResponsiveValue('center', 'flex-start', 'flex-start')
          }}
        >
          {/* Background layer */}
          <div 
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(30, 30, 30, 1)',
              top: 0,
              left: 0,
              zIndex: 0
            }}
          />

          {/* Content wrapper with relative positioning */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              paddingTop: getResponsiveValue('157px', '77px', '120px'),
              paddingLeft: getResponsiveValue('30px', '38px', '60px'),
              paddingRight: getResponsiveValue('30px', '38px', '60px'),
              paddingBottom: getResponsiveValue('40px', '26px', '40px')
            }}
          >
            {/* Location subheading with fade-in */}
            <div 
              style={{
                animation: 'fadeIn 0.5s ease-in-out',
                animationDelay: '0s',
                animationDuration: '0.5s',
                animationFillMode: 'both',
                marginBottom: getResponsiveValue('10px', '16px', '25px')
              }}
            >
              <h2 
                style={{
                  color: 'rgba(249, 242, 236, 1)',
                  textTransform: 'uppercase',
                  lineHeight: '1.2',
                  letterSpacing: '0.2em',
                  fontSize: getResponsiveValue('12px', '9px', '14px'),
                  textAlign: getResponsiveValue('center', 'left', 'left'),
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: getResponsiveValue(400, 300, 300),
                  fontStyle: 'normal',
                  margin: 0
                }}
              >
                KIGALI, RWANDA&nbsp;
              </h2>
            </div>

            {/* Main heading with fade-in */}
            <div 
              style={{
                animation: 'fadeIn 0.75s ease-in-out',
                animationDelay: '0s',
                animationDuration: '0.75s',
                animationFillMode: 'both',
                maxWidth: getResponsiveValue('100%', '300px', '100%'),
                marginBottom: getResponsiveValue('10px', '8px', '12px'),
                width: '100%'
              }}
            >
              <h1 
                style={{
                  color: 'rgba(249, 242, 236, 1)',
                  textTransform: 'uppercase',
                  lineHeight: '1.2',
                  letterSpacing: '0em',
                  fontSize: getResponsiveValue('23px', '26px', '41px'),
                  textAlign: getResponsiveValue('center', 'left', 'left'),
                  fontFamily: 'Noiretblanc, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  margin: 0
                }}
              >
                intentionally curated EXPERIENCES, gifts &amp; celebrations&nbsp;
              </h1>
            </div>

            {/* Description text with fade-in */}
            <div 
              style={{
                animation: 'fadeIn 1s ease-in-out',
                animationDelay: '0s',
                animationDuration: '1s',
                animationFillMode: 'both',
                maxWidth: getResponsiveValue('100%', '300px', '100%'),
                marginBottom: getResponsiveValue('10px', '26px', '40px'),
                width: '100%'
              }}
            >
              <p 
                style={{
                  color: 'rgba(249, 242, 236, 1)',
                  textTransform: 'none',
                  lineHeight: getResponsiveValue('1.6', '1.7', '1.8'),
                  letterSpacing: '0em',
                  fontSize: getResponsiveValue('13px', '10px', '15px'),
                  textAlign: getResponsiveValue('justify', 'left', 'left'),
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  margin: 0
                }}
              >
                At Elev8 Moments, we specialize in curating intentional experiences, events &amp; thoughtful gifts that elevate any occasion. Whether you&apos;re hosting a soulful gathering, looking for the perfect corporate gift, or planning a creative retreat for yourself, our carefully designed offerings are created to inspire lasting memories.&nbsp;
              </p>
            </div>

            {/* Order button - child of dark box */}
            <a
              href="https://www.instagram.com/elev8moments/" 
              target="_self"
              style={{
                width: getResponsiveValue('224px', '158px', '247px'),
                height: getResponsiveValue('48px', '33px', '51px'),
                backgroundColor: 'rgba(249, 242, 236, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                alignSelf: getResponsiveValue('center', 'flex-start', 'flex-start')
              }}
            >
              <span 
                style={{
                  color: 'rgba(30, 30, 30, 1)',
                  textTransform: 'uppercase',
                  lineHeight: '1.8',
                  letterSpacing: '0.1em',
                  fontSize: getResponsiveValue('12px', '9px', '14px'),
                  textAlign: 'center',
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal'
                }}
              >
                BOOK YOUR EXPERIENCE
              </span>
            </a>
          </div>
        </div>

        {/* Desktop/Tablet image with fade-in */}
        {(isTablet || isDesktop) && (
          <div 
            style={{
              position: 'absolute',
              animation: 'fadeIn 0.5s ease-in-out',
              animationDelay: '0s',
              animationDuration: '0.5s',
              animationFillMode: 'both'
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: getResponsiveValue('0px', '410px', '641px'),
                top: getResponsiveValue('0px', '128px', '200px'),
                width: getResponsiveValue('0px', '360px', '562px'),
                height: getResponsiveValue('0px', '366px', '572px'),
                transform: 'scale(1, 1) translate(0px, 0px)'
              }}
            >
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundImage: 'url(/images/13.JPG)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '120%',
                  backgroundPosition: '50% 40%'
                }}
              />
            </div>
          </div>
        )}

        {/* Mobile gallery */}
        {isMobile && (
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '38px',
              width: '264px',
              height: '236px',
              transform: 'translateX(-50%) scale(1.20312, 1.20312)'
            }}
          >
            <div 
              style={{
                width: '100%',
                height: '100%'
              }}
            >
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url(/images/12.JPG)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '50% 50%'
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Custom font loading */}
      <style jsx>{`
        @font-face {
          font-family: Noiretblanc;
          src: url('//static.showit.co/file/-2eCp0_jSgW6z2q5bKVLgA/shared/noiretblanc-webfont.woff');
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default MainHeader