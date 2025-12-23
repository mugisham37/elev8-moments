'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const EventDesignHeader: React.FC = () => {
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
    <div 
      style={{ 
        position: 'relative',
        width: '100%',
        zIndex: 2,
        height: getResponsiveValue('659px', '559px', '659px')
      }}
    >
      {/* Background container */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#edcab3'
      }}>
        {/* Background image with opacity */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0.1
        }}>
          <Image
            src="/images/34.jpg"
            alt=""
            fill
            style={{
              objectFit: 'cover',
              objectPosition: '50% 50%'
            }}
          />
        </div>

        {/* Content container */}
        <div 
          style={{ 
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: getResponsiveValue('320px', '768px', '1200px'), 
            maxWidth: '100%' 
          }}
        >
          
          {/* Description paragraph */}
          <div 
            style={{
              position: 'absolute',
              animation: getResponsiveValue('none', 'fadeIn 1s ease-in', 'fadeIn 1s ease-in'),
              left: getResponsiveValue('-10px', '121.6px', '190px'),
              top: getResponsiveValue('350px', '241.28px', '377px'),
              width: getResponsiveValue('180px', '318.08px', '497px'),
              height: getResponsiveValue('auto', '79px', '79px'),
              padding: getResponsiveValue('0 10px', '0', '0')
            }}
          >
            <div 
              style={{ 
                transform: getResponsiveValue('none', 'scale(0.709167, 0.709167) translate(-81.496px, -85.696px)', 'scale(0.709167, 0.709167) translate(-127.338px, -133.9px)') 
              }}
            >
              <p 
                style={{ 
                  color: '#1e1e1e',
                  lineHeight: 1.5,
                  letterSpacing: '0em',
                  textAlign: getResponsiveValue('right', 'right', 'right'),
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  fontSize: getResponsiveValue('12px', '14.72px', '23px'),
                  margin: 0
                }}
              >
                Imagine walking into a space that&apos;s beautifully designed just for your celebration. Whether you&apos;re hosting a cozy get-together, a grand wedding, or a fun holiday party, we&apos;re here to turn your ideas into something magical with our creativity and attention to detail.
              </p>
            </div>
          </div>

          {/* Hidden title element */}
          <div 
            style={{
              position: 'absolute',
              animation: getResponsiveValue('none', 'fadeIn 1s ease-in', 'fadeIn 1s ease-in'),
              left: getResponsiveValue('0px', '46px', '46px'),
              top: getResponsiveValue('0px', '289px', '289px'),
              width: getResponsiveValue('0px', '479px', '479px'),
              height: getResponsiveValue('0px', '61px', '61px'),
              display: 'none'
            }}
          >
            <div>
              <h1 
                style={{ 
                  color: '#f9f2ec',
                  lineHeight: 1.2,
                  letterSpacing: '0em',
                  textAlign: 'center',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  fontSize: getResponsiveValue('0px', '30px', '30px'),
                  margin: 0
                }}
              >
                <b>YOUR DREAM EVENT...DESIGNED TO PERFECTION</b>
                <br />
              </h1>
            </div>
          </div>

          {/* Title text */}
          <div 
            style={{
              position: 'absolute',
              animation: getResponsiveValue('none', 'fadeIn 1s ease-in', 'fadeIn 1s ease-in'),
              left: getResponsiveValue('0px', '73.6px', '115px'),
              top: getResponsiveValue('320px', '221.44px', '346px'),
              width: getResponsiveValue('330px', '370.56px', '579px'),
              height: getResponsiveValue('50px', '61px', '61px'),
              transform: getResponsiveValue('none', 'scale(0.709167, 0.709167) translate(-74.672px, -72.572px)', 'scale(0.709167, 0.709167) translate(-116.675px, -113.394px)')
            }}
          >
            <p 
              style={{ 
                color: '#1e1e1e',
                lineHeight: 1.2,
                letterSpacing: '0.1em',
                textAlign: getResponsiveValue('center', 'right', 'right'),
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 'normal',
                fontStyle: 'normal',
                fontSize: getResponsiveValue('11px', '12.8px', '20px'),
                margin: 0
              }}
            >
              YOUR DREAM EVENT...DESIGNED TO PERFECTION
              <br />
            </p>
          </div>

          {/* Background image */}
          <div 
            style={{
              position: 'absolute',
              right: getResponsiveValue('-30px', '-101.76px', '-159px'),
              top: getResponsiveValue('0px', '26.24px', '41px'),
              width: getResponsiveValue('380px', '439.04px', '686px'),
              height: getResponsiveValue('250px', '506.24px', '791px'),
              transform: getResponsiveValue('none', 'scale(0.709167, 0.709167) translate(-207.875px, -81.759px)', 'scale(0.709167, 0.709167) translate(-324.804px, -127.748px)')
            }}
          >
            <Image
              src="/images/35.jpg"
              alt="Event design background"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>

          {/* Dark gray card container with centered image */}
          <div 
            style={{
              position: 'absolute',
              right: getResponsiveValue('10px', '-204.8px', '-320px'),
              top: getResponsiveValue('350px', '243.2px', '380px'),
              width: getResponsiveValue('130px', '257.92px', '403px'),
              height: getResponsiveValue('180px', '381.44px', '596px'),
              transform: getResponsiveValue('none', 'scale(0.709167, 0.709167) translate(-263.386px, -132.021px)', 'scale(0.709167, 0.709167) translate(-411.541px, -206.283px)'),
              backgroundColor: '#1e1e1e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: getResponsiveValue('10px', '20px', '20px')
            }}
          >
            {/* Image inside the card - no absolute positioning */}
            <div 
              style={{
                position: 'relative',
                width: '100%',
                height: '100%'
              }}
            >
              <Image
                src="/images/34.jpg"
                alt="Event design detail"
                fill
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center'
                }}
              />
            </div>
          </div>

          {/* Button container */}
          <div 
            style={{
              position: 'absolute',
              animation: getResponsiveValue('none', 'fadeIn 1s ease-in', 'fadeIn 1s ease-in'),
              left: getResponsiveValue('60px', '257.92px', '403px'),
              top: getResponsiveValue('550px', '395.52px', '618px'),
              width: getResponsiveValue('200px', '173.44px', '271px'),
              height: getResponsiveValue('50px', '39.04px', '61px'),
              transform: getResponsiveValue('none', 'scale(0.709167, 0.709167) translate(-105.906px, -126.903px)', 'scale(0.709167, 0.709167) translate(-165.478px, -198.286px)'),
              border: '1px solid #1e1e1e',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Contact Us link */}
            <a
              href="mailto:glamhausdesignco@gmail.com"
              target="_self"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <nav 
                style={{ 
                  color: '#1e1e1e',
                  textTransform: 'uppercase',
                  lineHeight: 2.2,
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  fontSize: getResponsiveValue('12px', '12.16px', '19px')
                }}
              >
                CONTACT US
              </nav>
            </a>
          </div>

          {/* EVENT DESIGN title */}
          <div 
            style={{
              position: 'absolute',
              animation: getResponsiveValue('none', 'fadeIn 1s ease-in', 'fadeIn 1s ease-in'),
              left: getResponsiveValue('-60px', '70.4px', '110px'),
              top: getResponsiveValue('270px', '162.56px', '254px'),
              width: getResponsiveValue('380px', '379.52px', '593px'),
              height: getResponsiveValue('0px', '62px', '62px'),
              transform: getResponsiveValue('none', 'scale(0.709167, 0.709167) translate(-75.459px, -56.431px)', 'scale(0.709167, 0.709167) translate(-117.905px, -88.1727px)')
            }}
          >
            <h1 
              style={{ 
                color: '#1e1e1e',
                lineHeight: getResponsiveValue(1.2, 1.2, 1.2),
                letterSpacing: getResponsiveValue('0em', '0em', '0em'),
                fontFamily: getResponsiveValue('Noiretblanc', 'Noiretblanc', 'Noiretblanc'),
                fontWeight: getResponsiveValue(500, 400, 400),
                textTransform: getResponsiveValue('none', 'none', 'none'),
                fontStyle: getResponsiveValue('normal', 'normal', 'normal'),
                fontSize: getResponsiveValue('45px', '54.4px', '85px'),
                textAlign: getResponsiveValue('right', 'center', 'center')
              }}
            >
              EVENT DESIGN
            </h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventDesignHeader;
