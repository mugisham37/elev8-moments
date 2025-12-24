'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

const FruitBoards: React.FC = () => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      const scrollStart = sectionTop - windowHeight
      const scrollEnd = sectionTop + sectionHeight
      const scrollRange = scrollEnd - scrollStart
      const currentScroll = scrollY - scrollStart

      const progress = Math.max(0, Math.min(1, currentScroll / scrollRange))
      setScrollProgress(progress)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getResponsiveValue = <T,>(mobile: T, tablet: T, desktop: T): T => {
    if (screenSize === 'mobile') return mobile
    if (screenSize === 'tablet') return tablet
    return desktop
  }

  const isMobile = screenSize === 'mobile'
  const isTablet = screenSize === 'tablet'
  const isDesktop = screenSize === 'desktop'

  // Calculate horizontal scroll offset for "Elev8 Moments" text
  const scrollTextOffset = scrollProgress * 1200

  return (
    <div 
      ref={sectionRef}
      style={{
        position: 'relative',
        backgroundColor: 'rgb(249,242,236)',
        height: getResponsiveValue('881px', '900px', '969px'),
        zIndex: 11
      }}
    >
      <div style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}>
        <div 
          style={{
            position: 'relative',
            height: '100%',
            marginLeft: '0',
            marginRight: '0',
            width: getResponsiveValue('320px', '768px', '1200px')
          }}
        >
          {/* Button/Link Container */}
          <a 
            href="/experiences" 
            target="_self"
            style={{
              position: 'absolute',
              backgroundColor: 'rgb(30,30,30)',
              left: getResponsiveValue('39px', '406px', '759px'),
              top: getResponsiveValue('508px', '303px', '360px'),
              width: getResponsiveValue('224px', '236px', '247px'),
              height: getResponsiveValue('48px', '50px', '51px')
            }}
          >
          </a>

          {/* Learn More Text - Hidden */}
          <div style={{
            visibility: 'visible',
            position: 'absolute'
          }}>
            <a 
              href="/experience" 
              target="_self"
              style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textTransform: 'uppercase',
                lineHeight: '1.2',
                letterSpacing: '0.1em',
                textAlign: 'center',
                fontFamily: 'Raleway',
                fontWeight: 'normal',
                left: getResponsiveValue('39px', '406px', '759px'),
                top: getResponsiveValue('508px', '303px', '360px'),
                width: getResponsiveValue('224px', '235px', '247px'),
                height: getResponsiveValue('48px', '50px', '51px'),
                fontSize: getResponsiveValue('12px', '13px', '14px')
              }}
            >
              <nav>
                LEARN MORE<br />
              </nav>
            </a>
          </div>

          {/* Description Text - Hidden */}
          <div 
            style={{
              visibility: 'visible',
              position: 'absolute',
              color: 'black',
              fontFamily: 'Raleway',
              fontWeight: 'normal',
              left: getResponsiveValue('45px', '378px', '758px'),
              top: getResponsiveValue('294px', '119px', '186px'),
              width: getResponsiveValue('290px', '377px', '460px'),
              height: getResponsiveValue('98px', '109px', '119px'),
              fontSize: getResponsiveValue('13px', '14px', '16px'),
              lineHeight: getResponsiveValue('1.8', '1.7', '1.6'),
              textAlign: getResponsiveValue('justify', 'left', 'left') as 'justify' | 'left'
            }}
          >
            <p>
              Treat your guests to our beautifully curated cultural and creative experiences, perfect for any visit! Each experience is thoughtfully designed to offer a vibrant mix of local culture and unique activities that will impress and delight. Whether it&apos;s a creative workshop or a bonding retreat, we&apos;ve got the perfect experience to elevate your Kigali journey!
            </p>
          </div>

          {/* Desktop Title - Hidden on Mobile */}
          {!isMobile && (
            <div style={{
              display: 'block',
              position: 'absolute'
            }}>
              <h3 
                style={{
                  position: 'absolute',
                  color: 'rgb(30,30,30)',
                  lineHeight: '1.1',
                  fontFamily: 'Noiretblanc',
                  fontWeight: 'normal',
                  left: getResponsiveValue('-37px', '378px', '758px'),
                  top: getResponsiveValue('208px', '19px', '74px'),
                  width: getResponsiveValue('395px', '531px', '531px'),
                  height: getResponsiveValue('26px', '93px', '93px'),
                  fontSize: getResponsiveValue('31px', '49px', '49px'),
                  textAlign: getResponsiveValue('center', 'left', 'left') as 'center' | 'left'
                }}
              >
                VISIT RWANDA<br />EXPERIENCES
              </h3>
            </div>
          )}

          {/* Mobile Title Part 2 - "EXPERIENCES" */}
          {isMobile && (
            <div 
              style={{
                position: 'absolute',
                left: '-7px',
                top: '248px',
                width: '395px',
                height: '26px'
              }}
            >
              <h2 style={{
                color: 'rgb(30,30,30)',
                lineHeight: '1.1',
                fontSize: '31px',
                textAlign: 'center',
                fontFamily: 'Noiretblanc',
                fontWeight: 'normal'
              }}>
                EXPERIENCES
              </h2>
            </div>
          )}

          {/* Mobile Title Part 1 - "VISIT RWANDA" */}
          {isMobile && (
            <div 
              style={{
                position: 'absolute',
                left: '-7px',
                top: '200px',
                width: '395px',
                height: '26px'
              }}
            >
              <h2 style={{
                color: 'rgb(30,30,30)',
                lineHeight: '1.1',
                fontSize: '43px',
                textAlign: 'center',
                fontFamily: 'Noiretblanc',
                fontWeight: 'normal'
              }}>
                VISIT RWANDA
              </h2>
            </div>
          )}

          {/* Main Image - fruit-boards_6 */}
          <div 
            style={{
              position: 'absolute',
              borderBottomRightRadius: '366px',
              left: '0px',
              top: '0px',
              width: getResponsiveValue('384px', '355px', '710px'),
              height: getResponsiveValue('171px', '357px', '517px')
            }}
          >
            <div 
              style={{ 
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderBottomRightRadius: '366px',
                backgroundImage: 'url(/images/13.JPG)',
                backgroundPosition: '70% 70%'
              }}
            ></div>
            <Image 
              src="/images/13.JPG" 
              alt="IMG_4401"
              fill
              style={{
                objectFit: 'cover',
                borderBottomRightRadius: '366px'
              }}
            />
          </div>

          {/* Divider Line - Desktop Only */}
          {(screenSize === 'tablet' || screenSize === 'desktop') && (
            <div 
              style={{
                position: 'absolute',
                backgroundColor: 'rgb(249,242,236)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'black',
                left: getResponsiveValue('-4px', '-4px', '-4px'),
                top: getResponsiveValue('517px', '389px', '517px'),
                width: getResponsiveValue('1209px', '979px', '1530px'),
                height: getResponsiveValue('55px', '55px', '55px')
              }}
            ></div>
          )}

          {/* Image fruit-boards_8 */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('68px', '278px', '676px'),
              top: getResponsiveValue('572px', '460px', '608px'),
              width: getResponsiveValue('184px', '216px', '247px'),
              height: getResponsiveValue('276px', '238px', '201px')
            }}
          >
            <div 
              style={{ 
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundImage: 'url(/images/14.JPG)',
                backgroundPosition: '50%'
              }}
            ></div>
            <Image 
              src="/images/14.JPG" 
              alt="IMG_2636"
              fill
              style={{
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Background Box 9 - Mobile Only */}
          {screenSize === 'mobile' && (
            <div 
              style={{
                position: 'absolute',
                backgroundColor: 'rgb(249,242,236)',
                left: '-32px',
                top: '610px',
                width: '138px',
                height: '202px'
              }}
            ></div>
          )}

          {/* Background Box 10 - Mobile Only */}
          {isMobile && (
            <div 
              style={{
                position: 'absolute',
                backgroundColor: 'rgb(249,242,236)',
                left: '215px',
                top: '607px',
                width: '143px',
                height: '202px'
              }}
            ></div>
          )}

          {/* Image fruit-boards_11 */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('-4px', '103px', '402px'),
              top: getResponsiveValue('622px', '485px', '608px'),
              width: getResponsiveValue('101px', '175px', '247px'),
              height: getResponsiveValue('178px', '190px', '201px')
            }}
          >
            <div 
              style={{ 
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: 'url(/images/15.JPG)'
              }}
            ></div>
            <Image 
              src="/images/15.JPG" 
              alt="IMG_0460"
              fill
              style={{
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Image fruit-boards_12 */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('223px', '494px', '952px'),
              top: getResponsiveValue('617px', '482px', '608px'),
              width: getResponsiveValue('101px', '175px', '247px'),
              height: getResponsiveValue('182px', '192px', '201px')
            }}
          >
            <div 
              style={{ 
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: 'url(/images/16.jpg)'
              }}
            ></div>
            <Image 
              src="/images/16.jpg" 
              alt="AEE7A816-268F-4680-8C40-2BA82B22664B"
              fill
              style={{
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Scrolling Text - Desktop Only - Scroll Controlled */}
          {(screenSize === 'tablet' || screenSize === 'desktop') && (
            <div 
              style={{
                position: 'absolute',
                left: `${-856 + scrollTextOffset}px`,
                top: getResponsiveValue('532px', '402px', '532px'),
                width: getResponsiveValue('2912px', '2912px', '2912px'),
                height: getResponsiveValue('39px', '39px', '39px'),
                transition: 'left 0.1s linear',
                willChange: 'left'
              }}
            >
              <p style={{
                color: 'rgb(30,30,30)',
                lineHeight: '1.2',
                fontSize: '27px',
                textAlign: 'center',
                fontFamily: 'Noiretblanc',
                fontWeight: 'normal'
              }}>
                Elev8 Moments&nbsp; -&nbsp; Elev8 Moments -&nbsp; Elev8 Moments -&nbsp; Elev8 Moments -&nbsp; Elev8 Moments -&nbsp; Elev8 Moments -&nbsp; Elev8 Moments -&nbsp; Elev8 Moments -&nbsp; Elev8 Moments -&nbsp; Elev8 Moments -&nbsp;&nbsp;
              </p>
            </div>
          )}

          {/* Bottom Description - Desktop Only */}
          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('172px', '58px', '372px'),
                top: getResponsiveValue('831px', '701px', '831px'),
                width: getResponsiveValue('857px', '657px', '857px'),
                height: getResponsiveValue('118px', '118px', '118px')
              }}
            >
              <p style={{
                color: 'black',
                lineHeight: '1.8',
                fontSize: '16px',
                textAlign: 'center',
                fontFamily: 'Raleway',
                fontWeight: 'normal'
              }}>
                All experiences and workshops include premium materials, guided sessions, and thoughtful touches to create meaningful moments. From creative supplies to healing spaces, every detail is curated with intention. For enhanced experiences, you can add custom gift packages, welcome kits, and personalized elements at an additional cost.&nbsp;
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FruitBoards;