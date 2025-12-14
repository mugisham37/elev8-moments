'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const CallToAction: React.FC = () => {
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
        width: '100%',
        height: getResponsiveValue('648px', '500px', '361px')
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
          backgroundColor: 'rgba(30,30,30,1)'
        }}
      >
        {/* Background image with opacity */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: 0.3
          }}
        >
          <Image 
            src="/images/21.jpg" 
            alt="" 
            fill
            style={{ 
              objectFit: 'cover'
            }}
          />
        </div>
        
        {/* Content container */}
        <div 
          style={{ 
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: getResponsiveValue('320px', '768px', '1200px')
          }}
        >
          
          {/* Element 0 - Background box */}
          <div 
            data-tran="call-to-action-banner_0"
          >
            <div 
              data-sid="call-to-action-banner_0" 
              style={{
                position: 'absolute',
                left: getResponsiveValue('10px', '190px', '432px'),
                top: getResponsiveValue('69px', '60px', '59px'),
                width: getResponsiveValue('301px', '550px', '740px'),
                height: getResponsiveValue('374px', '300px', '243px'),
                backgroundColor: getResponsiveValue('rgba(249,242,236,1)', 'rgba(236,235,232,1)', 'rgba(236,235,232,1)')
              }}
            >
            </div>
          </div>

          {/* Element 1 - Side image */}
          <div 
            data-tran="call-to-action-banner_1"
          >
            <div 
              data-sid="call-to-action-banner_1" 
              style={{
                position: 'absolute',
                left: getResponsiveValue('48px', '580px', '1016px'),
                top: getResponsiveValue('255px', '130px', '87px'),
                width: getResponsiveValue('224px', '155px', '124px'),
                height: getResponsiveValue('258px', '220px', '188px')
              }}
            >
              <div 
                data-img="call-to-action-banner_1"
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundImage: 'url(/images/22.jpg)' 
                }}
              ></div>
              <Image 
                src="/images/22.jpg"
                alt="IMG_1250_jpg" 
                fill
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Element 2 - Button background */}
          <div 
            data-tran="call-to-action-banner_2" 
            data-tr="slideInRight"
          >
            <div 
              data-sid="call-to-action-banner_2" 
              style={{
                position: 'absolute',
                borderWidth: 0,
                borderStyle: 'solid',
                borderColor: 'black',
                left: getResponsiveValue('48px', '290px', '603px'),
                top: getResponsiveValue('544px', '380px', '217px'),
                width: getResponsiveValue('224px', '235px', '247px'),
                height: getResponsiveValue('48px', '50px', '51px'),
                backgroundColor: getResponsiveValue('rgba(249,242,236,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)')
              }}
            >
            </div>
          </div>

          {/* Element 3 - Button link */}
          <div 
            data-tran="call-to-action-banner_3" 
            data-tr="slideInRight"
          >
            <a 
              href="https://www.instagram.com/elev8moments/" 
              target="_blank"
              rel="noopener noreferrer"
              data-sid="call-to-action-banner_3"
              style={{
                position: 'absolute',
                textTransform: 'uppercase',
                lineHeight: 1.8,
                letterSpacing: '0.1em',
                fontSize: '14px',
                textAlign: 'center',
                fontFamily: 'Montserrat',
                fontWeight: 'normal',
                left: getResponsiveValue('-6px', '296px', '609px'),
                top: getResponsiveValue('556px', '391px', '228px'),
                width: getResponsiveValue('332px', '223px', '235px'),
                height: getResponsiveValue('37px', '28px', '30px'),
                color: getResponsiveValue('rgba(30,30,30,1)', 'rgba(249,242,236,1)', 'rgba(249,242,236,1)')
              }}
            >
              <nav>
                TAKE ME THERE
              </nav>
            </a>
          </div>

          {/* Element 4 - Description text */}
          <div 
            data-tran="call-to-action-banner_4"
          >
            <div 
              data-sid="call-to-action-banner_4" 
              style={{
                position: 'absolute',
                color: 'black',
                textTransform: 'none',
                lineHeight: 1.2,
                letterSpacing: '0em',
                textAlign: 'center',
                fontFamily: 'Raleway',
                fontWeight: 'normal',
                left: getResponsiveValue('24px', '210px', '457px'),
                top: getResponsiveValue('205px', '285px', '178px'),
                width: getResponsiveValue('273px', '410px', '559px'),
                height: getResponsiveValue('50px', '42px', '39px'),
                fontSize: getResponsiveValue('14px', '15px', '16px')
              }}
            >
              <p>
                Follow us on Instagram to keep up with our latest events and offerings!
              </p>
            </div>
          </div>

          {/* Element 5 - "Elev8 Community" title */}
          <div 
            data-tran="call-to-action-banner_5"
          >
            <div 
              data-sid="call-to-action-banner_5" 
              style={{
                position: 'absolute',
                color: 'black',
                textTransform: 'none',
                lineHeight: 1.2,
                letterSpacing: '0em',
                fontFamily: 'Strings',
                fontWeight: 'normal',
                left: getResponsiveValue('-31px', '340px', '645px'),
                top: getResponsiveValue('134px', '165px', '98px'),
                width: getResponsiveValue('382px', '370px', '360px'),
                height: getResponsiveValue('81px', '68px', '59px'),
                fontSize: getResponsiveValue('55px', '60px', '66px'),
                textAlign: getResponsiveValue('center', 'left', 'left')
              }}
            >
              <p>
                Elev8 Community
              </p>
            </div>
          </div>

          {/* Element 6 - Desktop background image */}
          {(screenSize === 'tablet' || screenSize === 'desktop') && (
            <div 
              data-tran="call-to-action-banner_6" 
              data-tr="slideInLeft"
            >
              <div 
                data-sid="call-to-action-banner_6" 
                style={{
                  position: 'absolute',
                  left: getResponsiveValue('0px', '18px', '24px'),
                  top: getResponsiveValue('0px', '55px', '59px'),
                  width: getResponsiveValue('0px', '300px', '380px'),
                  height: getResponsiveValue('0px', '195px', '238px')
                }}
              >
                <div 
                  data-img="call-to-action-banner_6"
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: 'url(/images/23.jpg)' 
                  }}
                ></div>
                <Image 
                  src="/images/23.jpg"
                  alt="IMG_1584" 
                  fill
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          )}

          {/* Element 7 - "Join our" text */}
          <div 
            data-tran="call-to-action-banner_7"
          >
            <div 
              data-sid="call-to-action-banner_7" 
              style={{
                position: 'absolute',
                color: 'black',
                textTransform: 'none',
                lineHeight: 1.2,
                letterSpacing: '0em',
                fontFamily: 'Noiretblanc',
                fontWeight: 'normal',
                left: getResponsiveValue('-7px', '220px', '455px'),
                top: getResponsiveValue('93px', '125px', '109px'),
                width: getResponsiveValue('335px', '250px', '190px'),
                height: getResponsiveValue('16px', '40px', '59px'),
                fontSize: getResponsiveValue('45px', '48px', '54px'),
                textAlign: getResponsiveValue('center', 'left', 'left')
              }}
            >
              <p>
                Join our
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CallToAction;
