'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const EventPlanning = () => {
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
        width: '100%',
        overflow: 'hidden',
        height: getResponsiveValue('944px', '589px', '921px'),
        backgroundColor: getResponsiveValue('#1E1E1E', '#F9F2EC', '#F9F2EC'),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}
    >
      {/* Centered content wrapper */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: getResponsiveValue('375px', '768px', '1200px'),
        height: '100%',
        margin: '0 auto'
      }}>
        {/* Background container */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%'
          }}>
          
          {/* Background Rectangle (Mobile visible only) */}
          {isMobile && (
            <div 
              style={{
                position: 'absolute',
                left: '75px',
                top: '392px',
                width: '253px',
                height: '182px',
                backgroundColor: '#1E1E1E'
              }}
            >
            </div>
          )}

          {/* Main Image (casey_4.jpg) */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('22px', '54px', '84px'),
              top: getResponsiveValue('421px', '334px', '522px'),
              width: getResponsiveValue('332px', '445px', '696px'),
              height: getResponsiveValue('236px', '230px', '359px')
            }}
          >
            <div 
              style={{ 
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage: 'url(/images/17.jpg)',
                backgroundPosition: getResponsiveValue('50% 50%', '30% 30%', '30% 30%')
              }}
            >
              <Image 
                src="/images/17.jpg" 
                alt="casey 4" 
                fill
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Paragraph Text */}
          <div 
            style={{
              position: 'absolute',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 400,
              letterSpacing: '0em',
              left: getResponsiveValue('38px', '54px', '84px'),
              top: getResponsiveValue('191px', '154px', '241px'),
              width: getResponsiveValue('285px', '304px', '475px'),
              height: getResponsiveValue('106px', '119px', '186px'),
              color: getResponsiveValue('#F9F2EC', '#1E1E1E', '#1E1E1E'),
              fontSize: getResponsiveValue('13px', '10px', '16px'),
              lineHeight: '1.8',
              textAlign: getResponsiveValue('justify', 'left', 'left') as 'justify' | 'left'
            }}
          >
            <p>
              At Elev8 Moments, our passion for event design shines through in every detail, from creative workshops to soulful retreats, ensuring your experience is nothing short of memorable. Whether you&apos;re hosting an intimate gathering, a corporate celebration, or a meaningful community event, we are here to bring your vision to life with intentionality and meticulous attention to detail.
              <br /><br />
            </p>
          </div>

          {/* Button Background Link */}
          <a 
            href="/eventdesign" 
            target="_self"
            style={{
              position: 'absolute',
              border: 0,
              borderColor: 'white',
              left: getResponsiveValue('66px', '54px', '84px'),
              top: getResponsiveValue('844px', '273px', '427px'),
              width: getResponsiveValue('224px', '158px', '247px'),
              height: getResponsiveValue('48px', '33px', '51px'),
              backgroundColor: getResponsiveValue('#F9F2EC', '#1E1E1E', '#1E1E1E')
            }}
          >
            <div className="w-full h-full"></div>
          </a>

          {/* "Learn more" Button Text */}
          <a 
            href="/eventdesign" 
            target="_self"
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 1.2,
              letterSpacing: '0.1em',
              textAlign: 'center',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 400,
              textTransform: 'uppercase',
              left: getResponsiveValue('103px', '17px', '26px'),
              top: getResponsiveValue('860px', '284px', '444px'),
              width: getResponsiveValue('145px', '232px', '362px'),
              height: getResponsiveValue('16px', '11px', '17px'),
              color: getResponsiveValue('#1E1E1E', '#F9F2EC', '#F9F2EC'),
              fontSize: getResponsiveValue('12px', '9px', '14px')
            }}
          >
            <nav>
              Learn more
            </nav>
          </a>

          {/* Subheading */}
          <div 
            style={{
              position: 'absolute',
              textAlign: 'left',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              left: getResponsiveValue('36px', '54px', '84px'),
              top: getResponsiveValue('112px', '101px', '158px'),
              width: getResponsiveValue('285px', '292px', '456px'),
              height: getResponsiveValue('54px', '40px', '63px'),
              color: getResponsiveValue('#F9F2EC', '#1E1E1E', '#1E1E1E'),
              fontSize: getResponsiveValue('11px', '10px', '16px'),
              lineHeight: '1.4'
            }}
          >
            <p>
              IMAGINE STEPPING INTO AN INTENTIONALLY CURATED SPACE, WHERE EVERY DETAIL IS PERFECTLY DESIGNED FOR CONNECTION AND JOY
            </p>
          </div>

          {/* Background Rectangle (Tablet and Desktop visible) */}
          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('0px', '380px', '593px'),
                top: getResponsiveValue('0px', '31px', '49px'),
                width: getResponsiveValue('0px', '335px', '523px'),
                height: getResponsiveValue('0px', '376px', '587px'),
                backgroundColor: '#F9F2EC'
              }}
            >
            </div>
          )}

          {/* Background Image (Tablet and Desktop visible) */}
          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('0px', '390px', '609px'),
                top: getResponsiveValue('0px', '41px', '64px'),
                width: getResponsiveValue('0px', '314px', '491px'),
                height: getResponsiveValue('0px', '357px', '558px')
              }}
            >
              <div 
                style={{ 
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: 'url(/images/18.jpg)',
                  backgroundSize: '130%',
                  backgroundPosition: '50% 60%'
                }}
              >
                <Image 
                  src="/images/18.jpg" 
                  alt="Screenshot 2024-10-11 120246" 
                  fill
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          )}

          {/* Main Heading "EVENT DESIGN" */}
          <div 
            style={{
              position: 'absolute',
              textAlign: 'left',
              fontFamily: 'NoirEtBlanc, serif',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0em',
              left: getResponsiveValue('34px', '54px', '84px'),
              top: getResponsiveValue('57px', '66px', '103px'),
              width: getResponsiveValue('376px', '311px', '486px'),
              height: getResponsiveValue('28px', '25px', '39px'),
              color: getResponsiveValue('#F9F2EC', '#1E1E1E', '#1E1E1E'),
              fontSize: getResponsiveValue('42px', '32px', '50px'),
              lineHeight: '0.9'
            }}
          >
            <h3>
              EVENT DESIGN
            </h3>
          </div>

          {/* Box/Card Lower Right */}
          <div 
            style={{
              position: 'absolute',
              borderRadius: '2px',
              left: getResponsiveValue('54px', '499px', '779px'),
              top: getResponsiveValue('594px', '372px', '582px'),
              width: getResponsiveValue('257px', '260px', '407px'),
              height: getResponsiveValue('226px', '216px', '338px'),
              backgroundColor: getResponsiveValue('#1E1E1E', '#F9F2EC', '#F9F2EC')
            }}
          >
          </div>

          {/* Heading "& WORKSHOPS" */}
          <div 
            style={{
              position: 'absolute',
              fontFamily: 'NoirEtBlanc, serif',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0em',
              left: getResponsiveValue('-58px', '509px', '796px'),
              top: getResponsiveValue('618px', '404px', '632px'),
              width: getResponsiveValue('473px', '244px', '382px'),
              height: getResponsiveValue('50px', '25px', '39px'),
              color: getResponsiveValue('#F9F2EC', '#1E1E1E', '#1E1E1E'),
              fontSize: getResponsiveValue('40px', '32px', '50px'),
              lineHeight: '0.9',
              textAlign: getResponsiveValue('center', 'left', 'left') as 'center' | 'left'
            }}
          >
            <p>
              &amp; WORKSHOPS
            </p>
          </div>

          {/* Paragraph "We also specialize..." */}
          <div 
            style={{
              position: 'absolute',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 400,
              letterSpacing: '0em',
              left: getResponsiveValue('36px', '509px', '796px'),
              top: getResponsiveValue('673px', '444px', '693px'),
              width: getResponsiveValue('285px', '188px', '294px'),
              height: getResponsiveValue('75px', '96px', '150px'),
              color: getResponsiveValue('#F9F2EC', '#1E1E1E', '#1E1E1E'),
              fontSize: getResponsiveValue('13px', '10px', '16px'),
              lineHeight: getResponsiveValue('1.8', '1.4', '1.4'),
              textAlign: getResponsiveValue('justify', 'left', 'left') as 'justify' | 'left'
            }}
          >
            <p>
              We also specialize in creating soulful workshops that foster connection and creativity. Whether you&apos;re planning a Bloom &amp; Bond floral experience, hosting a Paint a Shirt creative session, or organizing a healing retreat, our thoughtful approach ensures every moment is meaningful and transformative.
              <br /><br />
            </p>
          </div>

          {/* Decorative Line (Mobile visible only) */}
          {isMobile && (
            <div 
              style={{
                position: 'absolute',
                left: '137px',
                top: '165px',
                width: '1px',
                height: '1px'
              }}
            >
              <svg style={{ 
                verticalAlign: 'top',
                overflow: 'visible',
                pointerEvents: 'none',
                boxSizing: 'content-box',
                width: '210.547px', 
                height: '1px' 
              }}>
                <line 
                  x1="0" 
                  y1="0" 
                  x2="100%" 
                  y2="0"
                  style={{ 
                    stroke: '#F9F2EC',
                    strokeWidth: '1.20312px', 
                    strokeDasharray: '0px',
                    strokeLinecap: 'butt'
                  }}
                />
              </svg>
            </div>
          )}

        </div>
      </div>
      </div>
    </div>
  )
}

export default EventPlanning