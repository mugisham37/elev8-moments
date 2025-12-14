'use client'

import { useState, useEffect } from 'react'

export default function Header() {
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

  return (
    <>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
      
      <div 
        style={{
          position: 'relative',
          width: '100%',
          zIndex: 2,
          height: getResponsiveValue('752px', '726px', '726px')
        }}
      >
        {/* Background container */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'rgba(239,216,201,1)'
          }}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: getResponsiveValue('320px', '768px', '1200px')
            }}
          >
            
            {/* Background Image */}
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('0px', '278px', '278px'),
                top: '0px',
                width: getResponsiveValue('320px', '922px', '922px'),
                height: getResponsiveValue('274px', '750px', '750px')
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '70% 70%',
                  backgroundImage: 'url(/images/29.jpg)'
                }}
              />
            </div>

            {/* Simple Rectangle Overlay */}
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('192px', '138px', '138px'),
                top: getResponsiveValue('97px', '172px', '172px'),
                width: getResponsiveValue('128px', '281px', '281px'),
                height: getResponsiveValue('178px', '383px', '383px')
              }}
            >
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(239,216,201,1)'
                }}
              />
            </div>

            {/* Zoomed Image Overlay */}
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('205px', '145px', '145px'),
                top: getResponsiveValue('110px', '190px', '190px'),
                width: getResponsiveValue('103px', '259px', '259px'),
                height: getResponsiveValue('149px', '346px', '346px')
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '120%',
                  backgroundPosition: '50% 70%',
                  backgroundImage: 'url(/images/29.jpg)'
                }}
              />
            </div>

            {/* Simple Rectangle Overlay (Desktop Only) */}
            {(screenSize === 'tablet' || screenSize === 'desktop') && (
              <div 
                style={{
                  position: 'absolute',
                  left: getResponsiveValue('-19px', '419px', '419px'),
                  top: getResponsiveValue('242px', '102px', '102px'),
                  width: getResponsiveValue('319px', '604px', '604px'),
                  height: getResponsiveValue('483px', '496px', '496px')
                }}
              >
                <div 
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(239,216,201,1)'
                  }}
                />
              </div>
            )}

            {/* Paragraph Text */}
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('14px', '447px', '447px'),
                top: getResponsiveValue('437px', '288px', '288px'),
                width: getResponsiveValue('294px', '537px', '537px'),
                height: getResponsiveValue('205px', '160px', '160px')
              }}
            >
              <p 
                style={{
                  color: 'rgba(30,30,30,1)',
                  lineHeight: 1.6,
                  letterSpacing: '0em',
                  textAlign: 'left',
                  fontFamily: "'Raleway'",
                  fontWeight: 'normal',
                  fontSize: getResponsiveValue('14px', '16px', '16px')
                }}
              >
                At Elev8 Moments, we create intentional spaces where people connect, heal, and celebrate. From floral design workshops like Bloom & Bond to creative gatherings like Paint a Shirt, our experiences are soulful, playful, and memorable. Whether you&apos;re planning a corporate retreat, a healing workshop, or a creative celebration, we bring your vision to life with purpose and attention to every meaningful detail.
              </p>
            </div>

            {/* Subheading Text */}
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('14px', '447px', '447px'),
                top: getResponsiveValue('406px', '247px', '247px'),
                width: getResponsiveValue('442px', '399px', '399px'),
                height: getResponsiveValue('17px', '19px', '19px')
              }}
            >
              <p 
                style={{
                  color: 'rgba(30,30,30,1)',
                  textTransform: 'uppercase',
                  lineHeight: 1.8,
                  letterSpacing: '0.1em',
                  textAlign: 'left',
                  fontFamily: "'Montserrat'",
                  fontWeight: 500,
                  fontSize: getResponsiveValue('11px', '14px', '14px')
                }}
              >
                INTENTIONAL GATHERINGS FOR CONNECTION & CELEBRATION
              </p>
            </div>

            {/* Title with FadeIn Animation */}
            <div 
              style={{
                animation: 'fadeIn 0.75s ease-in-out'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  left: getResponsiveValue('14px', '440px', '440px'),
                  top: getResponsiveValue('292px', '190px', '190px'),
                  width: getResponsiveValue('300px', '583px', '583px'),
                  height: getResponsiveValue('105px', '50px', '50px')
                }}
              >
                <h1 
                  style={{
                    color: 'rgba(30,30,30,1)',
                    textTransform: 'uppercase',
                    lineHeight: 1.2,
                    letterSpacing: '0em',
                    textAlign: 'left',
                    fontFamily: "'Noiretblanc'",
                    fontWeight: 'normal',
                    fontSize: getResponsiveValue('47px', '49px', '49px')
                  }}
                >
                  curated experiences
                </h1>
              </div>
            </div>

            {/* Button Border Container */}
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('48px', '447px', '447px'),
                top: getResponsiveValue('668px', '472px', '472px'),
                width: getResponsiveValue('224px', '241px', '241px'),
                height: getResponsiveValue('48px', '51px', '51px')
              }}
            >
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'rgba(30,30,30,1)',
                  backgroundColor: 'transparent'
                }}
              />
            </div>

            {/* Button Text/Link */}
            <a
              href="mailto:hello@elev8moments.com"
              target="_self"
              style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                left: getResponsiveValue('48px', '461px', '461px'),
                top: getResponsiveValue('681px', '482px', '482px'),
                width: getResponsiveValue('224px', '213px', '213px'),
                height: getResponsiveValue('21px', '29px', '29px')
              }}
            >
              <nav 
                style={{
                  color: 'rgba(30,30,30,1)',
                  textTransform: 'uppercase',
                  lineHeight: 2.2,
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                  fontFamily: "'Raleway'",
                  fontWeight: 'normal',
                  fontSize: getResponsiveValue('11px', '14px', '14px')
                }}
              >
                BOOK YOUR EXPERIENCE
              </nav>
            </a>

          </div>
        </div>
      </div>
    </>
  )
}