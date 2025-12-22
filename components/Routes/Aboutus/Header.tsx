'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
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

  const isTablet = screenSize === 'tablet'
  const isDesktop = screenSize === 'desktop'

  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#fae7e2',
        overflow: 'hidden',
        zIndex: 2,
        height: getResponsiveValue('855px', '0px', '1024px')
      }}
    >
      {/* Background layer with image and overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }}>
        <div 
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: getResponsiveValue('0.5', '0', '0.5')
          }}
        >
          <Image
            src="/images/24.jpg"
            alt=""
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      {/* Content container */}
      <div 
        style={{
          position: 'relative',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '100%',
          width: getResponsiveValue('320px', '0px', '966px')
        }}
      >
        
        {/* header_0 - Desktop only background element */}
        {(isTablet || isDesktop) && (
          <div 
            style={{
              position: 'absolute',
              backgroundColor: '#f9f2ec',
              left: getResponsiveValue('0px', '0px', '434px'),
              top: getResponsiveValue('0px', '0px', '126px'),
              width: getResponsiveValue('0px', '0px', '910px'),
              height: getResponsiveValue('0px', '0px', '992px'),
              transform: 'scale(0.805, 0.805) translate(-185.916px, -126.447px)'
            }}
          />
        )}

        {/* header_1 - Decorative line */}
        {(isTablet || isDesktop) && (
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('0px', '0px', '747px'),
              top: getResponsiveValue('0px', '0px', '210px'),
              width: getResponsiveValue('0px', '0px', '32px'),
              height: getResponsiveValue('0px', '0px', '1px')
            }}
          >
            <svg style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="rgba(249, 242, 236, 1)"
                strokeWidth="1"
                strokeLinecap="butt"
              />
            </svg>
          </div>
        )}

        {/* header_2 - Mobile only background element */}
        {screenSize === 'mobile' && (
          <div 
            style={{
              position: 'absolute',
              left: '13px',
              top: '16px',
              width: '295px',
              height: '792px',
              backgroundColor: 'rgba(239, 216, 201, 0.76)'
            }}
          />
        )}

        {/* header_3 - "Meet Sandra" text */}
        <div 
          style={{
            position: 'absolute',
            left: getResponsiveValue('-32px', '0px', '556px'),
            top: getResponsiveValue('60px', '0px', '195px'),
            width: getResponsiveValue('385px', '0px', '402px'),
            height: getResponsiveValue('71px', '0px', '57px')
          }}
        >
          <p 
            style={{ 
              color: '#1e1e1e',
              textAlign: getResponsiveValue('center', 'center', 'left'),
              fontWeight: 'normal',
              lineHeight: 1.2,
              fontFamily: 'Strings, cursive',
              fontSize: getResponsiveValue('57px', '0px', '65px')
            }}
          >
            Meet Sandra
          </p>
        </div>

        {/* header_4 - Decorative line */}
        {(isTablet || isDesktop) && (
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('0px', '0px', '702px'),
              top: getResponsiveValue('0px', '0px', '183px'),
              width: getResponsiveValue('0px', '0px', '141px'),
              height: getResponsiveValue('0px', '0px', '1px')
            }}
          >
            <svg style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="rgba(30, 30, 30, 1)"
                strokeWidth="1"
                strokeLinecap="butt"
              />
            </svg>
          </div>
        )}

        {/* header_5 - "ABOUT US" text */}
        <div 
          style={{
            position: 'absolute',
            left: getResponsiveValue('109px', '0px', '556px'),
            top: getResponsiveValue('58px', '0px', '173px'),
            width: getResponsiveValue('102px', '0px', '473px'),
            height: getResponsiveValue('42px', '0px', '22px')
          }}
        >
          <p 
            style={{ 
              color: '#1e1e1e',
              fontWeight: 'normal',
              lineHeight: 1,
              fontFamily: 'Noiretblanc, sans-serif',
              fontSize: getResponsiveValue('19px', '0px', '28px'),
              textAlign: getResponsiveValue('center', 'center', 'left')
            }}
          >
            ABOUT US
          </p>
        </div>

        {/* header_6 - Mobile only paragraph */}
        {screenSize === 'mobile' && (
          <div 
            style={{
              position: 'absolute',
              left: '145px',
              top: '175px',
              width: '154px',
              height: '200px'
            }}
          >
            <p 
              style={{
                color: '#1e1e1e',
                fontSize: '13px',
                textAlign: 'left',
                fontWeight: 'normal',
                lineHeight: 1.4,
                fontFamily: 'Raleway, sans-serif'
              }}
            >
              I&apos;m Sandra Mushambokazi, an entrepreneur and creative visionary dedicated to building spaces of <i>growth, connection, and celebration</i>. Through Elev8 Moments, I create <b>intentional experiences</b> that bring people together and contribute to Rwanda&apos;s cultural story!
            </p>
          </div>
        )}

        {/* header_7 - Mobile only full paragraph */}
        {screenSize === 'mobile' && (
          <div 
            style={{
              position: 'absolute',
              left: '29px',
              top: '405px',
              width: '263px',
              height: '335px'
            }}
          >
            <p 
              style={{
                color: '#1e1e1e',
                fontSize: '13px',
                textAlign: 'justify',
                fontWeight: 'normal',
                lineHeight: 1.4,
                fontFamily: 'Raleway, sans-serif'
              }}
            >
              My mission is to design intentional events and thoughtful gifting solutions that bring joy, healing, and lasting memories to both locals and visitors. From creative workshops like Bloom & Bond to meaningful corporate gifting, every detail is crafted with purpose. <br /><br />Elev8 Moments began with a simple idea: to create spaces where people can pause, connect, and celebrate life with intention. I&apos;m proud to contribute to Rwanda&apos;s tourism story by offering soulful, creative experiences that showcase Kigali as a hub for meaningful connection. Thank you for being part of this beautiful journey!
            </p>
          </div>
        )}

        {/* header_8 - Desktop only full paragraph */}
        {(isTablet || isDesktop) && (
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('0px', '0px', '555px'),
              top: getResponsiveValue('0px', '0px', '338px'),
              width: getResponsiveValue('0px', '0px', '503px'),
              height: getResponsiveValue('0px', '0px', '492px')
            }}
          >
            <p 
              style={{
                color: '#1e1e1e',
                fontSize: '16px',
                textAlign: 'justify',
                fontWeight: 'normal',
                lineHeight: 1.5,
                fontFamily: 'Raleway, sans-serif'
              }}
            >
              I&apos;m Sandra Mushambokazi, an entrepreneur and creative visionary dedicated to building spaces of <i>growth, connection, and celebration</i>. Through Elev8 Moments, I create intentional experiences that bring people together and contribute to Rwanda&apos;s cultural story.<br /><br />My mission is to design intentional events and thoughtful gifting solutions that bring joy, healing, and lasting memories to both locals and visitors. From creative workshops like Bloom & Bond to corporate retreats and meaningful gifting packages, every detail is crafted with <b>purpose and intention</b>.<br /><br />Elev8 Moments began with a simple idea: to create spaces where people can pause, connect, and celebrate life with intention. I&apos;m proud to contribute to the Visit Rwanda initiative by offering soulful, creative experiences that showcase Kigali as a hub for meaningful tourism and connection.<br /><br /><b>Let&apos;s Elev8 Your Moments!</b>
            </p>
          </div>
        )}

        {/* header_9 - Main profile image */}
        <div 
          style={{
            position: 'absolute',
            left: getResponsiveValue('-6px', '0px', '68px'),
            top: getResponsiveValue('177px', '0px', '173px'),
            width: getResponsiveValue('142px', '0px', '392px'),
            height: getResponsiveValue('212px', '0px', '479px')
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundImage: 'url(/images/11.jpg)',
              backgroundSize: '130%',
              backgroundPosition: '50% 90%'
            }}
          />
        </div>

        {/* header_10 - Desktop only background element */}
        {(isTablet || isDesktop) && (
          <div 
            style={{
              position: 'absolute',
              backgroundColor: '#f9f2ec',
              left: getResponsiveValue('0px', '0px', '184px'),
              top: getResponsiveValue('0px', '0px', '560px'),
              width: getResponsiveValue('0px', '0px', '332px'),
              height: getResponsiveValue('0px', '0px', '92px')
            }}
          />
        )}

        {/* header_11 - Desktop only secondary image */}
        {(isTablet || isDesktop) && (
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('0px', '0px', '199px'),
              top: getResponsiveValue('0px', '0px', '576px'),
              width: getResponsiveValue('0px', '0px', '300px'),
              height: getResponsiveValue('0px', '0px', '255px')
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'url(/images/1.jpg)',
                backgroundSize: '160%',
                backgroundPosition: '50% 50%'
              }}
            />
          </div>
        )}

        {/* header_12 - "Sandra" signature text */}
        <div 
          style={{
            position: 'absolute',
            left: getResponsiveValue('138px', '0px', '620px'),
            top: getResponsiveValue('722px', '0px', '798px'),
            width: getResponsiveValue('224px', '0px', '302px'),
            height: getResponsiveValue('59px', '0px', '57px'),
            transform: getResponsiveValue('rotate(0deg)', 'rotate(0deg)', 'rotate(354deg)')
          }}
        >
          <p 
            style={{ 
              color: '#1e1e1e',
              textAlign: 'center',
              fontWeight: 'normal',
              fontFamily: 'Strings, cursive',
              fontSize: getResponsiveValue('36px', '0px', '40px')
            }}
          >
            Sandra
          </p>
        </div>

        {/* header_13 - "xoxo ." text */}
        <div 
          style={{
            position: 'absolute',
            left: getResponsiveValue('98px', '0px', '531px'),
            top: getResponsiveValue('739px', '0px', '816px'),
            width: getResponsiveValue('106px', '0px', '96px'),
            height: getResponsiveValue('42px', '0px', '66px')
          }}
        >
          <p 
            style={{ 
              color: '#1e1e1e',
              fontWeight: 'normal',
              fontFamily: 'Strings, cursive',
              fontSize: getResponsiveValue('25px', '0px', '33px'),
              textAlign: getResponsiveValue('left', 'left', 'center')
            }}
          >
            xoxo .
          </p>
        </div>

        {/* header_14 - "FOUNDER OF ELEV8 MOMENTS" text */}
        <div 
          style={{
            position: 'absolute',
            left: getResponsiveValue('-156px', '0px', '555px'),
            top: getResponsiveValue('147px', '0px', '288px'),
            width: getResponsiveValue('632px', '0px', '347px'),
            height: getResponsiveValue('41px', '0px', '27px')
          }}
        >
          <p 
            style={{ 
              color: '#1e1e1e',
              fontWeight: 300,
              lineHeight: 1.2,
              fontFamily: 'Raleway, sans-serif',
              fontSize: getResponsiveValue('12px', '0px', '15px'),
              textAlign: getResponsiveValue('center', 'center', 'left')
            }}
          >
            FOUNDER OF ELEV8 MOMENTS
          </p>
        </div>

      </div>
    </div>
  );
};

export default Header;
