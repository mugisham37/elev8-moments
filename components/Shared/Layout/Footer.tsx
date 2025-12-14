'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
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

  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'rgba(249,242,236,1)',
        height: getResponsiveValue('441px', '340px', '280px')
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
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
          {/* Button Background */}
          <a
            href="/experiences"
            target="_self"
            style={{
              position: 'absolute',
              left: getResponsiveValue('15px', '500px', '883px'),
              top: getResponsiveValue('310px', '240px', '155px'),
              width: getResponsiveValue('224px', '235px', '247px'),
              height: getResponsiveValue('48px', '50px', '51px'),
              transform: getResponsiveValue('scale(1.20312,1.20312) translate(27.1818px,57.9091px)', 'scale(1,1) translate(0px,0px)', 'scale(1,1) translate(0px,0px)')
            }}
          >
            <div 
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(30,30,30,1)',
                borderColor: 'rgba(26,26,26,1)',
                borderWidth: 0,
                borderStyle: 'solid'
              }}
            ></div>
          </a>

          {/* Button Text */}
          <a
            href="/experiences"
            target="_self"
            style={{
              position: 'absolute',
              left: getResponsiveValue('12px', '490px', '873px'),
              top: getResponsiveValue('320px', '254px', '169px'),
              width: getResponsiveValue('251px', '260px', '267px'),
              height: getResponsiveValue('20px', '18px', '17px'),
              transform: getResponsiveValue('scale(1.20312,1.20312) translate(27.0974px,57.9091px)', 'scale(1,1) translate(0px,0px)', 'scale(1,1) translate(0px,0px)')
            }}
          >
            <nav 
              style={{
                color: 'rgba(249,242,236,1)',
                textTransform: 'uppercase',
                lineHeight: '1.8',
                letterSpacing: '0.1em',
                textAlign: 'center',
                fontFamily: 'Raleway',
                fontWeight: 'normal',
                fontSize: getResponsiveValue('13px', '12px', '13px')
              }}
            >
              book an experience
            </nav>
          </a>

          {/* Tagline */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('15px', '465px', '825px'),
              top: getResponsiveValue('259px', '165px', '78px'),
              width: getResponsiveValue('235px', '290px', '337px'),
              height: getResponsiveValue('33px', '55px', '77px'),
              transform: getResponsiveValue('scale(1.20312,1.20312) translate(27.0974px,46.513px)', 'scale(1,1) translate(0px,0px)', 'scale(1,1) translate(0px,0px)')
            }}
          >
            <p 
              style={{
                color: 'rgba(30,30,30,1)',
                lineHeight: '0.9',
                letterSpacing: '0em',
                textAlign: 'center',
                fontFamily: 'Noiretblanc',
                fontWeight: 'normal',
                fontSize: getResponsiveValue('23px', '27px', '30px')
              }}
            >
              Perfect for celebrating or gifting any occasion!
            </p>
          </div>

          {/* Divider Line 1 (Vertical on Desktop, Horizontal on Mobile) */}
          <div 
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,1)',
              left: getResponsiveValue('45px', '430px', '765px'),
              top: getResponsiveValue('396px', '42px', '52px'),
              width: getResponsiveValue('230px', '1px', '1px'),
              height: getResponsiveValue('1px', '250px', '169px'),
              transform: getResponsiveValue('scale(1.20312,1.20312) translate(27.013px,66.9416px)', 'scale(1,1) translate(0px,0px)', 'scale(1,1) translate(0px,0px)')
            }}
          ></div>

          {/* Hidden Brand Name (Desktop) */}
          <div 
            style={{
              position: 'absolute',
              left: '421px',
              top: '68px',
              width: '378px',
              height: '67px',
              display: getResponsiveValue('none', 'block', 'block'),
              transform: 'scale(1,1) translate(0px,0px)'
            }}
          >
            <p 
              style={{
                color: 'rgba(30,30,30,1)',
                lineHeight: '0.9',
                letterSpacing: '0em',
                fontSize: getResponsiveValue('24px', '24px', '53px'),
                textAlign: 'center',
                fontFamily: 'Noiretblanc',
                fontWeight: 'normal'
              }}
            >
              Elev8<br />Moments<br />
            </p>
          </div>

          {/* Brand Name (Mobile) */}
          {isMobile && (
            <div 
              style={{
                position: 'absolute',
                left: '-59px',
                top: '29px',
                width: '378px',
                height: '67px',
                transform: 'scale(1.20312,1.20312) translate(27.013px,10.5519px)'
              }}
            >
              <h1 
                style={{
                  color: 'rgba(0,0,0,1)',
                  lineHeight: '0.9',
                  letterSpacing: '0em',
                  fontSize: '51px',
                  textAlign: 'center',
                  fontFamily: 'Noiretblanc',
                  fontWeight: 'normal'
                }}
              >
                Elev8<br />Moments<br />
              </h1>
            </div>
          )}

          {/* Divider Line 2 (Vertical on Desktop, Horizontal on Mobile) */}
          <div 
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,1)',
              left: getResponsiveValue('45px', '260px', '435px'),
              top: getResponsiveValue('229px', '42px', '52px'),
              width: getResponsiveValue('230px', '1px', '1px'),
              height: getResponsiveValue('1px', '250px', '169px'),
              transform: getResponsiveValue('scale(1.20312,1.20312) translate(27.013px,38.7468px)', 'scale(1,1) translate(0px,0px)', 'scale(1,1) translate(0px,0px)')
            }}
          ></div>

          {/* EVENT DESIGN Link */}
          <a
            href="/eventdesign"
            target="_self"
            style={{
              position: 'absolute',
              left: getResponsiveValue('146px', '290px', '235px'),
              top: getResponsiveValue('189px', '175px', '185px'),
              width: getResponsiveValue('100px', '130px', '160px'),
              height: getResponsiveValue('19px', '18px', '18px'),
              transform: getResponsiveValue('scale(1.20312,1.20312) translate(39px,33.513px)', 'scale(1,1) translate(0px,0px)', 'scale(1,1) translate(0px,0px)')
            }}
          >
            <nav 
              style={{
                color: 'rgba(34,34,34,1)',
                textTransform: 'uppercase',
                lineHeight: '1.8',
                letterSpacing: '0.1em',
                fontFamily: 'Montserrat',
                fontWeight: 'normal',
                fontSize: getResponsiveValue('10px', '11px', '13px'),
                textAlign: getResponsiveValue('right', 'justify', 'justify')
              }}
            >
              EVENT DESIGN
            </nav>
          </a>

          {/* GIFTING SOLUTIONS Link */}
          <a
            href="/gifting"
            target="_self"
            style={{
              position: 'absolute',
              left: getResponsiveValue('102px', '280px', '235px'),
              top: getResponsiveValue('164px', '149px', '159px'),
              width: getResponsiveValue('144px', '147px', '150px'),
              height: getResponsiveValue('18px', '18px', '18px'),
              transform: getResponsiveValue('scale(1.20312,1.20312) translate(35.2857px,29.2078px)', 'scale(1,1) translate(0px,0px)', 'scale(1,1) translate(0px,0px)')
            }}
          >
            <nav 
              style={{
                color: 'rgba(34,34,34,1)',
                textTransform: 'uppercase',
                lineHeight: '1.8',
                letterSpacing: '0.1em',
                fontFamily: 'Montserrat',
                fontWeight: 'normal',
                fontSize: getResponsiveValue('10px', '11px', '13px'),
                textAlign: getResponsiveValue('right', 'justify', 'justify')
              }}
            >
              GIFTING SOLUTIONS<br />
            </nav>
          </a>

          {/* EXPERIENCES Link */}
          <a
            href="/experiences"
            target="_self"
            style={{
              position: 'absolute',
              left: getResponsiveValue('102px', '280px', '235px'),
              top: getResponsiveValue('141px', '122px', '132px'),
              width: getResponsiveValue('144px', '156px', '168px'),
              height: getResponsiveValue('18px', '18px', '18px'),
              transform: getResponsiveValue('scale(1.20312,1.20312) translate(35.2857px,25.3247px)', 'scale(1,1) translate(0px,0px)', 'scale(1,1) translate(0px,0px)')
            }}
          >
            <nav 
              style={{
                color: 'rgba(34,34,34,1)',
                textTransform: 'uppercase',
                lineHeight: '1.8',
                letterSpacing: '0.1em',
                fontFamily: 'Montserrat',
                fontWeight: 'normal',
                fontSize: getResponsiveValue('10px', '11px', '13px'),
                textAlign: getResponsiveValue('right', 'justify', 'justify')
              }}
            >
              EXPERIENCES<br />
            </nav>
          </a>

          {/* CONTACT Link */}
          <a
            href="mailto:hello@elev8moments.com"
            target="_self"
            style={{
              position: 'absolute',
              left: getResponsiveValue('5px', '90px', '108px'),
              top: getResponsiveValue('189px', '177px', '187px'),
              width: getResponsiveValue('100px', '85px', '73px'),
              height: getResponsiveValue('19px', '18px', '18px'),
              transform: getResponsiveValue('scale(1.20312,1.20312) translate(15.1948px,33.513px)', 'scale(1,1) translate(0px,0px)', 'scale(1,1) translate(0px,0px)')
            }}
          >
            <nav 
              style={{
                color: 'rgba(34,34,34,1)',
                textTransform: 'uppercase',
                lineHeight: '1.8',
                letterSpacing: '0.1em',
                textAlign: 'justify',
                fontFamily: 'Montserrat',
                fontWeight: 'normal',
                fontSize: getResponsiveValue('10px', '11px', '13px')
              }}
            >
              CONTACT
            </nav>
          </a>

          {/* about Link */}
          <a
            href="/aboutus"
            target="_self"
            style={{
              position: 'absolute',
              left: getResponsiveValue('5px', '90px', '108px'),
              top: getResponsiveValue('164px', '150px', '158px'),
              width: getResponsiveValue('72px', '85px', '97px'),
              height: getResponsiveValue('19px', '18px', '18px'),
              transform: getResponsiveValue('scale(1.20312,1.20312) translate(12.8312px,29.2922px)', 'scale(1,1) translate(0px,0px)', 'scale(1,1) translate(0px,0px)')
            }}
          >
            <nav 
              style={{
                color: 'rgba(34,34,34,1)',
                textTransform: 'uppercase',
                lineHeight: '1.8',
                letterSpacing: '0.1em',
                textAlign: 'justify',
                fontFamily: 'Montserrat',
                fontWeight: 'normal',
                fontSize: getResponsiveValue('10px', '11px', '13px')
              }}
            >
              about
            </nav>
          </a>

          {/* home Link */}
          <a
            href="#/"
            target="_self"
            style={{
              position: 'absolute',
              left: getResponsiveValue('5px', '90px', '108px'),
              top: getResponsiveValue('141px', '123px', '132px'),
              width: getResponsiveValue('48px', '70px', '97px'),
              height: getResponsiveValue('18px', '18px', '18px'),
              transform: getResponsiveValue('scale(1.20312,1.20312) translate(10.8052px,25.3247px)', 'scale(1,1) translate(0px,0px)', 'scale(1,1) translate(0px,0px)')
            }}
          >
            <nav 
              style={{
                color: 'rgba(34,34,34,1)',
                textTransform: 'uppercase',
                lineHeight: '1.8',
                letterSpacing: '0.1em',
                textAlign: 'justify',
                fontFamily: 'Montserrat',
                fontWeight: 'normal',
                fontSize: getResponsiveValue('10px', '11px', '13px')
              }}
            >
              home
            </nav>
          </a>

          {/* Hidden Menu Text */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('35px', '96px', '96px'),
              top: getResponsiveValue('140px', '78px', '78px'),
              width: getResponsiveValue('251px', '251px', '251px'),
              height: getResponsiveValue('25px', '17px', '17px'),
              display: getResponsiveValue('none', 'block', 'block'),
              transform: 'scale(1,1) translate(0px,0px)'
            }}
          >
            <p 
              style={{
                color: getResponsiveValue('rgba(249,242,236,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                lineHeight: getResponsiveValue('1.2', '0.7', '0.7'),
                letterSpacing: getResponsiveValue('0em', '-0.1em', '-0.1em'),
                fontSize: getResponsiveValue('24px', '42px', '42px'),
                textAlign: 'center',
                fontFamily: getResponsiveValue('Playfair Display', 'Noiretblanc', 'Noiretblanc'),
                fontWeight: 'normal'
              }}
            >
              Menu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}