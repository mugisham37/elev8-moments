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
          height: getResponsiveValue('752px', '465px', '726px')
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
                left: getResponsiveValue('0px', '178px', '278px'),
                top: '0px',
                width: getResponsiveValue('320px', '590px', '922px'),
                height: getResponsiveValue('274px', '480px', '750px')
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
                left: getResponsiveValue('192px', '88px', '138px'),
                top: getResponsiveValue('97px', '110px', '172px'),
                width: getResponsiveValue('128px', '180px', '281px'),
                height: getResponsiveValue('178px', '245px', '383px')
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
                left: getResponsiveValue('205px', '93px', '145px'),
                top: getResponsiveValue('110px', '122px', '190px'),
                width: getResponsiveValue('103px', '166px', '259px'),
                height: getResponsiveValue('149px', '221px', '346px')
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
                  left: getResponsiveValue('-19px', '268px', '419px'),
                  top: getResponsiveValue('242px', '65px', '102px'),
                  width: getResponsiveValue('319px', '387px', '604px'),
                  height: getResponsiveValue('483px', '317px', '496px')
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
                left: getResponsiveValue('14px', '286px', '447px'),
                top: getResponsiveValue('437px', '184px', '288px'),
                width: getResponsiveValue('294px', '444px', '537px'),
                height: getResponsiveValue('205px', '102px', '160px')
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
                  fontSize: getResponsiveValue('14px', '14px', '16px')
                }}
              >
                At Elev8 Moments, we create intentional spaces where people connect, heal, and celebrate. From floral design workshops like Bloom & Bond to creative gatherings like Paint a Shirt, our experiences are soulful, playful, and memorable. Whether you&apos;re planning a corporate retreat, a healing workshop, or a creative celebration, we bring your vision to life with purpose and attention to every meaningful detail.
              </p>
            </div>

            {/* Subheading Text */}
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('14px', '286px', '447px'),
                top: getResponsiveValue('400px', '138px', '247px'),
                width: getResponsiveValue('342px', '475px', '399px'),
                height: getResponsiveValue('17px', '12px', '19px')
              }}
            >
              <p 
                style={{
                  color: 'rgba(30,30,30,1)',
                  textTransform: 'uppercase',
                  lineHeight: 1.3,
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
                  left: getResponsiveValue('14px', '282px', '440px'),
                  top: getResponsiveValue('292px', '96px', '190px'),
                  width: getResponsiveValue('300px', '573px', '583px'),
                  height: getResponsiveValue('105px', '32px', '50px')
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
                    fontSize: getResponsiveValue('47px', '30px', '49px')
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
                left: getResponsiveValue('48px', '286px', '447px'),
                top: getResponsiveValue('668px', '359px', '472px'),
                width: getResponsiveValue('224px', '154px', '241px'),
                height: getResponsiveValue('48px', '33px', '51px')
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
              href="https://www.instagram.com/elev8moments/" 
              target="_self"
              style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                left: getResponsiveValue('48px', '295px', '461px'),
                top: getResponsiveValue('681px', '379px', '482px'),
                width: getResponsiveValue('224px', '136px', '213px'),
                height: getResponsiveValue('21px', '19px', '29px')
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