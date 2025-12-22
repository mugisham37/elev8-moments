'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

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

  return (
    <div 
      style={{
        position: getResponsiveValue('relative', 'relative', 'relative'),
        zIndex: getResponsiveValue(2, 2, 2),
        height: getResponsiveValue('632px', '659px', '659px')
      }}
    >
      <div 
        style={{
          position: getResponsiveValue('relative', 'relative', 'relative'),
          backgroundColor: getResponsiveValue('#314f39', '#314f39', '#314f39')
        }}
      >
        {/* Background image with opacity */}
        <div 
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute'),
            top: getResponsiveValue(0, 0, 0),
            right: getResponsiveValue(0, 0, 0),
            bottom: getResponsiveValue(0, 0, 0),
            left: getResponsiveValue(0, 0, 0),
            zIndex: getResponsiveValue(1, 1, 1)
          }}
        >
          <Image 
            src="/images/17.jpg"
            alt=""
            fill
            style={{ 
              objectFit: 'cover',
              opacity: 0.1
            }}
          />
        </div>

        {/* Content container */}
        <div 
          style={{ 
            position: getResponsiveValue('relative', 'relative', 'relative'),
            width: getResponsiveValue('320px', '768px', '966px'),
            zIndex: getResponsiveValue(2, 2, 2)
          }}
        >
          {/* header_0: Description paragraph */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              animation: getResponsiveValue('fadeIn 0.5s', 'fadeIn 0.5s', 'fadeIn 0.5s'),
              left: getResponsiveValue('144px', '569px', '703px'),
              top: getResponsiveValue('397px', '322px', '322px'),
              width: getResponsiveValue('405px', '503px', '643px'),
              height: getResponsiveValue('400px', '98px', '98px'),
              transform: getResponsiveValue('scale(0.805, 0.805) translate(-198.755px, -89.8696px)', '0px', '0px')
            }}
          >
            <p 
              style={{ 
                color: getResponsiveValue('#000000', '#000000', '#000000'),
                lineHeight: getResponsiveValue(1.8, 1.6, 1.6),
                textAlign: getResponsiveValue('justify', 'justify', 'justify'),
                fontWeight: getResponsiveValue('normal', 'normal', 'normal'),
                fontFamily: 'Raleway',
                fontSize: getResponsiveValue('17px', '16px', '21px')
              }}
            >
              We craft elegant gifting solutions for individuals and corporates, designed to celebrate moments that matter with style and intention. From curated corporate packages to personalized celebration gifts, each offering includes thoughtful touches, premium packaging, and meaningful elements that create lasting impressions and strengthen connections.
            </p>
          </div>

          {/* header_1: Tagline */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              animation: getResponsiveValue('fadeIn 0.5s', 'fadeIn 0.5s', 'fadeIn 0.5s'),
              left: getResponsiveValue('134px', '569px', '703px'),
              top: getResponsiveValue('356px', '269px', '265px'),
              width: getResponsiveValue('300px', '322px', '522px'),
              height: getResponsiveValue('41px', '61px', '61px'),
              transform: getResponsiveValue('scale(0.805, 0.805) translate(-176.832px, -72.5497px)', '0px', '0px')
            }}
          >
            <p 
              style={{ 
                color: getResponsiveValue('#000000', '#000000', '#000000'),
                lineHeight: getResponsiveValue(1.2, 1.2, 1.2),
                letterSpacing: getResponsiveValue('0.1em', '0.1em', '0.1em'),
                textAlign: getResponsiveValue('left', 'left', 'left'),
                fontWeight: getResponsiveValue('normal', 'normal', 'normal'),
                fontFamily: 'Raleway',
                fontSize: getResponsiveValue('17px', '15px', '19px')
              }}
            >
              ELEGANT SOLUTIONS FOR MEANINGFUL MOMENTS<br />
            </p>
          </div>

          {/* header_2: Background image element */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('20px', '155px', '274px'),
              top: getResponsiveValue('34px', '75px', '115px'),
              width: getResponsiveValue('470px', '392px', '410px'),
              height: getResponsiveValue('272px', '479px', '499px'),
              transform: getResponsiveValue('scale(0.805, 0.805) translate(-85.0248px, -76.1832px)', '0px', '0px')
            }}
          >
            <div 
              style={{ 
                width: getResponsiveValue('100%', '100%', '100%'),
                height: getResponsiveValue('100%', '100%', '100%'),
                position: getResponsiveValue('absolute', 'absolute', 'absolute'),
                top: getResponsiveValue(0, 0, 0),
                left: getResponsiveValue(0, 0, 0),
                backgroundRepeat: getResponsiveValue('no-repeat', 'no-repeat', 'no-repeat'),
                backgroundSize: getResponsiveValue('cover', 'cover', 'cover'),
                backgroundPosition: getResponsiveValue('center', 'center', 'center'),
                backgroundImage: "url('/images/18.jpg')" 
              }}
            />
          </div>

          {/* header_3_4: CTA button - Combined with proper flex layout */}
          <a 
            href="mailto:hello@elev8moments.com"
            target="_self"
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('208px', '569px', '703px'),
              top: getResponsiveValue('675px', '503px', '543px'),
              width: getResponsiveValue('224px', '241px', '241px'),
              height: getResponsiveValue('48px', '51px', '51px'),
              display: getResponsiveValue('flex', 'flex', 'flex'),
              justifyContent: getResponsiveValue('center', 'center', 'center'),
              alignItems: getResponsiveValue('center', 'center', 'center'),
              borderWidth: getResponsiveValue('1px', '1px', '1px'),
              borderStyle: getResponsiveValue('solid', 'solid', 'solid'),
              borderColor: getResponsiveValue('#000000', '#000000', '#000000'),
              backgroundColor: getResponsiveValue('transparent', 'transparent', 'transparent'),
              textDecoration: getResponsiveValue('none', 'none', 'none'),
              cursor: getResponsiveValue('pointer', 'pointer', 'pointer'),
              transform: getResponsiveValue('scale(0.805, 0.805) translate(-167.022px, -128.022px)', '0px', '0px')
            }}
          >
            <span 
              style={{ 
                color: getResponsiveValue('#000000', '#000000', '#000000'),
                textTransform: getResponsiveValue('uppercase', 'uppercase', 'uppercase'),
                letterSpacing: getResponsiveValue('0.1em', '0.1em', '0.1em'),
                fontWeight: getResponsiveValue('normal', 'normal', 'normal'),
                fontFamily: 'Raleway',
                fontSize: getResponsiveValue('12px', '14px', '14px')
              }}
            >
              EXPLORE GIFTING OPTIONS
            </span>
          </a>

          {/* header_5: Main heading "THOUGHTFUL GIFTING" */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              animation: getResponsiveValue('fadeIn 0.5s', 'fadeIn 0.5s', 'fadeIn 0.5s'),
              left: getResponsiveValue('114px', '569px', '703px'),
              top: getResponsiveValue('312px', '211px', '211px'),
              width: getResponsiveValue('536px', '473px', '773px'),
              height: getResponsiveValue('42px', '62px', '62px'),
              transform: getResponsiveValue('scale(0.805, 0.805) translate(-195.121px, -58.6211px)', '0px', '0px')
            }}
          >
            <h1 
              style={{ 
                color: getResponsiveValue('#000000', '#000000', '#000000'),
                textAlign: getResponsiveValue('left', 'left', 'left'),
                fontWeight: getResponsiveValue('normal', 'normal', 'normal'),
                fontFamily: 'Noiretblanc',
                fontSize: getResponsiveValue('40px', '56px', '56px')
              }}
            >
              THOUGHTFUL GIFTING
            </h1>
          </div>

          {/* header_6: Brand name "Elev8 Moments" */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              animation: getResponsiveValue('fadeIn 0.5s', 'fadeIn 0.5s', 'fadeIn 0.5s'),
              left: getResponsiveValue('157px', '569px', '703px'),
              top: getResponsiveValue('267px', '154px', '150px'),
              width: getResponsiveValue('224px', '508px', '508px'),
              height: getResponsiveValue('17px', '57px', '57px'),
              transform: getResponsiveValue('scale(0.805, 0.805) translate(-199.36px, -44.2081px)', '0px', '0px')
            }}
          >
            <p 
              style={{ 
                color: getResponsiveValue('#000000', '#000000', '#000000'),
                fontWeight: getResponsiveValue('normal', 'normal', 'normal'),
                fontFamily: 'Strings',
                fontSize: getResponsiveValue('28px', '50px', '50px')
              }}
            >
              Elev8 Moments
            </p>
          </div>

          {/* header_7: Decorative line */}
          <div 
            style={{ 
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              width: getResponsiveValue('1px', '1px', '1px'),
              height: getResponsiveValue('1px', '1px', '1px'),
              transform: 'scale(1, 1) translate(-0.0975px, 0px)',
              top: getResponsiveValue('0px', '154.56px', '154.56px'),
              left: getResponsiveValue('120px', '610.8px', '850.8px')
            }}
          >
            <svg 
              style={{ 
                width: getResponsiveValue('0px', '25.76px', '25.76px'),
                height: getResponsiveValue('1px', '1px', '1px'),
                verticalAlign: getResponsiveValue('top', 'top', 'top'),
                overflow: getResponsiveValue('visible', 'visible', 'visible'),
                pointerEvents: getResponsiveValue('none', 'none', 'none'),
                boxSizing: getResponsiveValue('content-box', 'content-box', 'content-box')
              }}
            >
              <line 
                x1="0" 
                y1="0" 
                x2="100%" 
                y2="0"
                style={{ 
                  stroke: getResponsiveValue('#000000', '#000000', '#000000'),
                  strokeWidth: getResponsiveValue('0.805px', '0.805px', '0.805px'),
                  strokeLinecap: getResponsiveValue('butt', 'butt', 'butt'),
                  strokeDasharray: getResponsiveValue('none', 'none', 'none')
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header