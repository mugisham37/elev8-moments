'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const CharcuterieOfferings = () => {
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

  return (
    <div 
      style={{
        position: 'relative',
        zIndex: 3,
        backgroundColor: '#F9F2EC',
        height: getResponsiveValue('547px', '720px', '939px')
      }}
    >
      <div>
        <div 
          style={{
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: getResponsiveValue('330px', '768px', '1200px')
          }}
        >
          
          {/* ===== RIGHT-SIDE IMAGE (IMG_0802) - ALL SCREEN SIZES ===== */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('-66px', '380px', 'auto'),
              right: screenSize === 'desktop' ? 'calc((100vw - 1200px) / 2 * -1)' : 'auto',
              top: getResponsiveValue('159px', '0px', '0px'),
              width: getResponsiveValue('185px', '390px', 'calc(588px + (100vw - 1200px) / 2)'),
              height: getResponsiveValue('140px', '560px', '905px')
            }}
          >
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                position: 'absolute', 
                top: '0px', 
                left: '0px', 
                backgroundImage: "url('/images/19.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: getResponsiveValue('contain', 'cover', 'cover')
              }}
            />
            <Image 
              src="/images/19.jpg" 
              alt="IMG_0802" 
              fill
              style={{
                objectFit: screenSize === 'mobile' ? 'contain' : 'cover'
              }}
            />
          </div>

          {/* ===== BLACK BACKGROUND BOX - TABLET & DESKTOP ONLY ===== */}
          {(screenSize === 'tablet' || screenSize === 'desktop') && (
            <div 
              style={{
                position: 'absolute',
                backgroundColor: '#1E1E1E',
                left: getResponsiveValue('0px', '50px', '60px'),
                top: getResponsiveValue('0px', '450px', '610px'),
                width: getResponsiveValue('0px', '450px', '634px'),
                height: getResponsiveValue('0px', '240px', '313px')
              }}
            >
              <div />
            </div>
          )}

          {/* ===== LEFT-SIDE IMAGE (IMG_8064) - ALL SCREEN SIZES ===== */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('-29px', '25px', '30px'),
              top: getResponsiveValue('345px', '430px', '542px'),
              width: getResponsiveValue('111px', '420px', '649px'),
              height: getResponsiveValue('140px', '290px', '366px')
            }}
          >
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                position: 'absolute', 
                top: '0px', 
                left: '0px',
                backgroundImage: "url('/images/20.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '20% 20%'
              }}
            />
            <Image 
              src="/images/20.jpg" 
              alt="IMG_8064" 
              fill
              style={{
                objectFit: 'cover',
                objectPosition: '20% 20%'
              }}
            />
          </div>

          {/* ===== 'EVENTS + EXPERIENCES' LINK - TABLET & DESKTOP ONLY ===== */}
          {(screenSize === 'tablet' || screenSize === 'desktop') && (
            <div>
              <a 
                href="/experiences" 
                target="_self" 
                style={{
                  position: 'absolute',
                  color: '#000000',
                  textTransform: 'uppercase',
                  lineHeight: '1.8',
                  letterSpacing: '0.1em',
                  textAlign: 'left',
                  fontFamily: 'Montserrat',
                  fontWeight: 500,
                  left: getResponsiveValue('0px', '15px', '19px'),
                  top: getResponsiveValue('0px', '135px', '173px'),
                  width: getResponsiveValue('0px', '220px', '245px'),
                  height: getResponsiveValue('0px', '30px', '41px'),
                  fontSize: getResponsiveValue('0px', '17px', '20px')
                }}
              >
                <p>
                  EVENTS + EXPERIENCES
                </p>
              </a>
            </div>
          )}

          {/* ===== 'EVENTS + EXPERIENCES' LINK - MOBILE ONLY ===== */}
          {screenSize === 'mobile' && (
            <div>
              <a 
                href="/experiences" 
                target="_self" 
                style={{
                  position: 'absolute',
                  color: '#000000',
                  textTransform: 'uppercase',
                  lineHeight: '1.8',
                  letterSpacing: '0.1em',
                  textAlign: 'left',
                  fontFamily: 'Montserrat',
                  fontWeight: 500,
                  left: getResponsiveValue('105px', '0px', '0px'),
                  top: getResponsiveValue('159px', '0px', '0px'),
                  width: getResponsiveValue('202px', '0px', '0px'),
                  height: getResponsiveValue('22px', '0px', '0px'),
                  fontSize: getResponsiveValue('15px', '0px', '0px')
                }}
              >
                <p>
                  EVENTS + EXPERIENCES
                </p>
              </a>
            </div>
          )}

          {/* ===== HORIZONTAL DIVIDER LINE (TOP) - ALL SCREEN SIZES ===== */}
          <div 
            style={{
              position: 'absolute',
              backgroundColor: '#000000',
              left: getResponsiveValue('47px', '15px', '19px'),
              top: getResponsiveValue('316px', '240px', '308px'),
              width: getResponsiveValue('266px', '360px', '489px'),
              height: '1px'
            }}
          >
            <div />
          </div>

          {/* ===== MAIN HEADING 'SIGNATURE OFFERINGS' - TABLET & DESKTOP ONLY ===== */}
          {(screenSize === 'tablet' || screenSize === 'desktop') && (
            <div>
              <div 
                style={{
                  position: 'absolute',
                  color: '#000000',
                  letterSpacing: '0em',
                  fontFamily: 'Noiretblanc',
                  left: getResponsiveValue('0px', '12px', '16px'),
                  top: getResponsiveValue('0px', '75px', '96px'),
                  width: getResponsiveValue('0px', '550px', '710px'),
                  height: getResponsiveValue('0px', '35px', '43px'),
                  fontSize: getResponsiveValue('0px', '32px', '38px'),
                  lineHeight: getResponsiveValue('1.2', '1.4', '1.6'),
                  textAlign: getResponsiveValue('center', 'left', 'left')
                }}
              >
                <h3>
                  SIGNATURE OFFERINGS<br />
                </h3>
              </div>
            </div>
          )}

          {/* ===== MAIN HEADING 'SIGNATURE OFFERINGS' - MOBILE ONLY ===== */}
          {screenSize === 'mobile' && (
            <div 
              style={{
                position: 'absolute',
                color: '#000000',
                lineHeight: '1.2',
                letterSpacing: '0em',
                textAlign: 'center',
                fontFamily: 'Noiretblanc',
                left: getResponsiveValue('-39px', '0px', '0px'),
                top: getResponsiveValue('36px', '0px', '0px'),
                width: getResponsiveValue('398px', '0px', '0px'),
                height: getResponsiveValue('56px', '0px', '0px'),
                fontSize: getResponsiveValue('40px', '0px', '0px')
              }}
            >
              <h2>
                SIGNATURE<br />OFFERINGS<br />
              </h2>
            </div>
          )}

          {/* ===== ARROW LINK TO EXPERIENCES - ALL SCREEN SIZES ===== */}
          <a 
            href="/experiences" 
            target="_self" 
            style={{
              position: 'absolute',
              left: getResponsiveValue('285px', '230px', '289px'),
              top: getResponsiveValue('159px', '115px', '170px'),
              width: getResponsiveValue('30px', '32px', '34px'),
              height: getResponsiveValue('29px', '60px', '96px')
            }}
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: '#000000' }}>
                <polygon points="399.22 206.93 391.04 215.72 427.91 250 60 250 60 262 427.94 262 391.04 296.29 399.22 305.08 452 256.01 399.22 206.93" />
              </svg>
            </div>
          </a>

          {/* ===== BOARDS + BOXES DESCRIPTION TEXT - ALL SCREEN SIZES ===== */}
          <div>
            <div 
              style={{
                position: 'absolute',
                color: '#000000',
                letterSpacing: '0em',
                textAlign: 'justify',
                fontFamily: 'Raleway',
                fontWeight: 400,
                left: getResponsiveValue('105px', '15px', '19px'),
                top: getResponsiveValue('188px', '170px', '214px'),
                width: getResponsiveValue('210px', '410px', '553px'),
                height: getResponsiveValue('108px', '88px', '76px'),
                fontSize: getResponsiveValue('13px', '14px', '16px'),
                lineHeight: getResponsiveValue('1.4', '1.5', '1.7')
              }}
            >
              <p>
                Curated, intentional experiences designed for connection and celebration. From Bloom &amp; Bond floral workshops to Paint a Shirt creative gatherings, each event includes soulful activities, meaningful moments, community bonding, healing spaces, and joyful memories.<br />
              </p>
            </div>
          </div>

          {/* ===== HORIZONTAL DIVIDER LINE (BOTTOM) - ALL SCREEN SIZES ===== */}
          <div 
            style={{
              position: 'absolute',
              backgroundColor: '#000000',
              left: getResponsiveValue('47px', '15px', '19px'),
              top: getResponsiveValue('511px', '395px', '516px'),
              width: getResponsiveValue('266px', '360px', '489px'),
              height: '1px'
            }}
          >
            <div />
          </div>

          {/* ===== ARROW LINK TO GIFTING - ALL SCREEN SIZES ===== */}
          <a 
            href="/gifting" 
            target="_self" 
            style={{
              position: 'absolute',
              left: getResponsiveValue('285px', '230px', '289px'),
              top: getResponsiveValue('329px', '255px', '350px'),
              width: getResponsiveValue('30px', '32px', '34px'),
              height: getResponsiveValue('36px', '65px', '96px')
            }}
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: '#000000' }}>
                <polygon points="399.22 206.93 391.04 215.72 427.91 250 60 250 60 262 427.94 262 391.04 296.29 399.22 305.08 452 256.01 399.22 206.93" />
              </svg>
            </div>
          </a>

          {/* ===== 'GRAZING TABLES' HEADING LINK - ALL SCREEN SIZES ===== */}
          <div>
            <a 
              href="/grazing-tables" 
              target="_self" 
              style={{
                position: 'absolute',
                color: '#000000',
                textTransform: 'uppercase',
                lineHeight: '1.8',
                letterSpacing: '0.1em',
                textAlign: 'left',
                fontFamily: 'Montserrat',
                fontWeight: 500,
                left: getResponsiveValue('105px', '15px', '19px'),
                top: getResponsiveValue('334px', '270px', '353px'),
                width: getResponsiveValue('202px', '220px', '245px'),
                height: getResponsiveValue('22px', '30px', '41px'),
                fontSize: getResponsiveValue('15px', '17px', '20px')
              }}
            >
              <h3>
                THOUGHTFUL GIFTING
              </h3>
            </a>
          </div>

          {/* ===== GRAZING TABLES DESCRIPTION TEXT - ALL SCREEN SIZES ===== */}
          <div>
            <div 
              style={{
                position: 'absolute',
                color: '#000000',
                letterSpacing: '0em',
                textAlign: 'justify',
                fontFamily: 'Raleway',
                fontWeight: 400,
                left: getResponsiveValue('105px', '15px', '19px'),
                top: getResponsiveValue('365px', '310px', '394px'),
                width: getResponsiveValue('210px', '410px', '553px'),
                height: getResponsiveValue('120px', '95px', '76px'),
                fontSize: getResponsiveValue('13px', '14px', '16px'),
                lineHeight: getResponsiveValue('1.4', '1.5', '1.7')
              }}
            >
              <p>
                Elegant gifting solutions designed to celebrate moments that matter with style and intention. From corporate packages to personalized gifts, each offering is curated to create meaningful connections and lasting impressions with thoughtful touches and premium packaging.<br />
              </p>
            </div>
          </div>

          {/* ===== HIDDEN SEO HEADING - ALL SCREEN SIZES ===== */}
          <div 
            style={{
              position: 'absolute',
              display: 'none',
              left: getResponsiveValue('114px', '450px', '708px'),
              top: getResponsiveValue('265px', '680px', '902px'),
              width: getResponsiveValue('92px', '280px', '457px'),
              height: getResponsiveValue('17px', '20px', '21px'),
              fontSize: getResponsiveValue('12px', '11px', '11px')
            }}
          >
            <h1 style={{ textTransform: 'uppercase' }}>
              Curated Experiences Kigali Rwanda
            </h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CharcuterieOfferings