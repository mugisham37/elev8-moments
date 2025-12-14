'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Instagram = () => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')
  const [isHovering, setIsHovering] = useState<{ [key: string]: boolean }>({})

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

  const images = [
    { src: "/images/1.JPG", alt: "IMG_0802", title: "IMG_0802" },
    { src: "/images/2.JPG", alt: "IMG_0962", title: "IMG_0962" },
    { src: "/images/3.JPG", alt: "IMG_1587", title: "IMG_1587" },
    { src: "/images/4.JPG", alt: "IMG_1592", title: "IMG_1592" },
    { src: "/images/6.JPG", alt: "IMG_1645_jpg", title: "IMG_1645_jpg" },
    { src: "/images/7.JPG", alt: "IMG_2636", title: "IMG_2636" },
    { src: "/images/8.JPG", alt: "IMG_3168", title: "IMG_3168" },
    { src: "/images/9.JPG", alt: "IMG_3240_jpg", title: "IMG_3240_jpg" },
    { src: "/images/10.JPG", alt: "IMG_3635_jpg", title: "IMG_3635_jpg" },
    { src: "/images/11.JPG", alt: "IMG_4105_jpg", title: "IMG_4105_jpg" },
    { src: "/images/12.JPG", alt: "IMG_4401", title: "IMG_4401" },
    { src: "/images/13.JPG", alt: "IMG_4728", title: "IMG_4728" },
    { src: "/images/14.JPG", alt: "IMG_7457", title: "IMG_7457" },
    { src: "/images/15.JPG", alt: "IMG_8064", title: "IMG_8064" },
    { src: "/images/16.jpg", alt: "IMG_8880", title: "IMG_8880" }
  ];

  return (
    <div 
      style={{
        position: getResponsiveValue('relative', 'relative', 'relative'),
        background: getResponsiveValue('#F9F2EC', '#F9F2EC', '#F9F2EC'),
        height: getResponsiveValue('475px', '420px', '497px')
      }}
    >
      <div style={{
        position: getResponsiveValue('relative', 'relative', 'relative'),
        width: getResponsiveValue('100%', '100%', '100%'),
        height: getResponsiveValue('100%', '100%', '100%')
      }}>
        <div 
          style={{
            position: getResponsiveValue('relative', 'relative', 'relative'),
            marginLeft: getResponsiveValue('auto', 'auto', 'auto'),
            marginRight: getResponsiveValue('auto', 'auto', 'auto'),
            height: getResponsiveValue('100%', '100%', '100%'),
            width: getResponsiveValue('320px', '768px', '1200px')
          }}
        >
          
          {/* Facebook Icon (instagram_0) - Right side on desktop, bottom right on mobile */}
          <div 
            onMouseEnter={() => setIsHovering({ ...isHovering, facebook: true })}
            onMouseLeave={() => setIsHovering({ ...isHovering, facebook: false })}
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('286px', '710px', '1037px'),
              top: getResponsiveValue('449px', '380px', '356px'),
              width: getResponsiveValue('25px', '24px', '24px'),
              height: getResponsiveValue('25px', '20px', '19px'),
              transition: getResponsiveValue('opacity 500ms', 'opacity 500ms', 'opacity 500ms'),
              opacity: isHovering.facebook ? getResponsiveValue(0.3, 0.3, 0.3) : getResponsiveValue(1, 1, 1)
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"
              style={{
                width: getResponsiveValue('100%', '100%', '100%'),
                height: getResponsiveValue('100%', '100%', '100%'),
                fill: getResponsiveValue('#1E1E1E', 'white', 'white')
              }}
            >
              <path d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64zm42.2 48H272v192h-51V240h-45v-32h45v-58.7c0-24.5 5.4-41.2 15.5-51.8 11.2-12 31.1-17.5 59.6-17.5H336v32h-17.5c-12 0-27.5 1.1-37.1 11.7-8.1 9-9.4 20.1-9.4 30.1V208h62l-3.8 32z"></path>
            </svg>
          </div>

          {/* Line 1 (instagram_1) - Horizontal on mobile (bottom), Vertical on desktop (right) */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('18px', '40px', '57px'),
              top: getResponsiveValue('462px', '340px', '260px'),
              width: getResponsiveValue('254px', '180px', '189px'),
              height: getResponsiveValue('1px', '1px', '1px')
            }}
          >
            <svg 
              style={{ 
                overflow: 'visible',
                width: getResponsiveValue('254px', '0', '0'),
                height: getResponsiveValue('1px', '180px', '189px')
              }}
            >
              <line 
                x1="0" 
                y1="0" 
                x2="100%" 
                y2="0"
                strokeWidth="1"
                strokeLinecap="butt"
                style={{
                  stroke: getResponsiveValue('#1E1E1E', 'white', 'white')
                }}
              />
            </svg>
          </div>

          {/* Image Grid (instagram_2) */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              overflow: getResponsiveValue('hidden', 'hidden', 'hidden'),
              left: getResponsiveValue('10px', '105px', '164px'),
              top: getResponsiveValue('147px', '115px', '135px'),
              width: getResponsiveValue('300px', '558px', '873px'),
              height: getResponsiveValue('291px', '240px', '240px')
            }}
          >
            <div 
              id="instagram_2"
              data-account="042a30ba-cec1-4702-937b-19c24428271c"
              data-allow-video="1"
              data-allow-carousel="1"
              data-allow-image="1"
              data-allow-caption="1"
              data-has-fallback="true"
              data-m-gap="5"
              data-d-gap="5"
              data-m-rows="2"
              data-d-rows="2"
              data-m-calc-height="143"
              data-d-calc-height="117.5"
              style={{
                overflow: getResponsiveValue('hidden', 'hidden', 'hidden')
              }}
            >
              <div 
                style={{
                  display: getResponsiveValue('grid', 'grid', 'grid'),
                  justifyContent: getResponsiveValue('center', 'center', 'center'),
                  gridTemplateColumns: getResponsiveValue('repeat(auto-fit,143px)', 'repeat(auto-fit,93px)', 'repeat(auto-fit,117.5px)'),
                  gap: getResponsiveValue('5px', '5px', '5px')
                }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      position: 'relative',
                      height: getResponsiveValue('143px', '93px', '117.5px'),
                      width: getResponsiveValue('143px', '93px', '117.5px')
                    }}
                  >
                    <Image
                      src={image.src.replace('//', 'https://')}
                      alt={image.alt}
                      fill
                      loading="lazy"
                      style={{
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hidden element 3 (instagram_3) */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              display: getResponsiveValue('none', 'block', 'block'),
              left: getResponsiveValue('50px', '295px', '295px'),
              top: getResponsiveValue('200px', '327px', '327px'),
              width: getResponsiveValue('224px', '612px', '612px'),
              height: getResponsiveValue('56px', '85px', '95px')
            }}
          >
            <div style={{
              background: getResponsiveValue('#1E1E1E', '#1E1E1E', '#1E1E1E'),
              width: getResponsiveValue('100%', '100%', '100%'),
              height: getResponsiveValue('100%', '100%', '100%')
            }}></div>
          </div>

          {/* "Social" text (instagram_4) */}
          <a 
            href="https://www.instagram.com/glamhausdesignco/" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('20px', '320px', '554px'),
              top: getResponsiveValue('43px', '335px', '336px'),
              width: getResponsiveValue('217px', '260px', '338px'),
              height: getResponsiveValue('67px', '75px', '87px'),
              transform: getResponsiveValue('scale(1.20312, 1.20312) translate(27.0974px, 12.9156px)', 'scale(1.20312, 1.20312) translate(27.0974px, 12.9156px)', 'scale(1.20312, 1.20312) translate(27.0974px, 12.9156px)')
            }}
          >
            <p 
              style={{ 
                fontFamily: getResponsiveValue('Strings', 'Strings', 'Strings'), 
                fontWeight: getResponsiveValue(400, 400, 400), 
                fontStyle: getResponsiveValue('normal', 'normal', 'normal'),
                color: getResponsiveValue('#1E1E1E', 'white', 'white'),
                fontSize: getResponsiveValue('75px', '70px', '73px'),
                textAlign: getResponsiveValue('center', 'center', 'center'),
                lineHeight: getResponsiveValue(0.9, 0.9, 0.9),
                letterSpacing: getResponsiveValue('0em', '0em', '0em')
              }}
            >
              Social
            </p>
          </a>

          {/* Line 5 (instagram_5) - Horizontal on mobile (top), Vertical on desktop (left) */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('42px', '588px', '955px'),
              top: getResponsiveValue('128px', '340px', '255px'),
              width: getResponsiveValue('257px', '180px', '189px'),
              height: getResponsiveValue('1px', '1px', '1px')
            }}
          >
            <svg 
              style={{ 
                overflow: 'visible',
                width: getResponsiveValue('257px', '0', '0'),
                height: getResponsiveValue('1px', '180px', '189px')
              }}
            >
              <line 
                x1="0" 
                y1="0" 
                x2="100%" 
                y2="0"
                strokeWidth="1"
                strokeLinecap="butt"
                style={{
                  stroke: getResponsiveValue('#1E1E1E', 'white', 'white')
                }}
              />
            </svg>
          </div>

          {/* Instagram Icon (instagram_6) - Left side on desktop, top left on mobile */}
          <div 
            onMouseEnter={() => setIsHovering({ ...isHovering, instagram: true })}
            onMouseLeave={() => setIsHovering({ ...isHovering, instagram: false })}
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('9px', '80px', '140px'),
              top: getResponsiveValue('116px', '115px', '135px'),
              width: getResponsiveValue('25px', '24px', '24px'),
              height: getResponsiveValue('25px', '20px', '19px'),
              transition: getResponsiveValue('opacity 500ms', 'opacity 500ms', 'opacity 500ms'),
              opacity: isHovering.instagram ? getResponsiveValue(0.3, 0.3, 0.3) : getResponsiveValue(1, 1, 1)
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"
              style={{
                width: getResponsiveValue('100%', '100%', '100%'),
                height: getResponsiveValue('100%', '100%', '100%'),
                fill: getResponsiveValue('#1E1E1E', 'white', 'white')
              }}
            >
              <path d="M338,54.63H174c-62.72,0-114,51.32-114,114V343.33c0,62.72,51.32,114,114,114H338c62.72,0,114-51.32,114-114V168.67C452,105.94,400.68,54.63,338,54.63Zm83.91,288.71A84.24,84.24,0,0,1,338,427.24H174a84.24,84.24,0,0,1-83.91-83.91V168.67A84.24,84.24,0,0,1,174,84.76H338a84.24,84.24,0,0,1,83.91,83.91Z"></path>
              <path d="M255.77,148.18A107.94,107.94,0,1,0,363.71,256.13,107.94,107.94,0,0,0,255.77,148.18Zm-.52,178.71a70.68,70.68,0,1,1,70.68-70.68A70.68,70.68,0,0,1,255.25,326.9Z"></path>
              <circle cx="365.44" cy="146.5" r="25.56"></circle>
            </svg>
          </div>

          {/* "Let's Get" text (instagram_7) */}
          <a 
            href="https://www.instagram.com/glamhausdesignco/" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('43px', '190px', '299px'),
              top: getResponsiveValue('40px', '350px', '350px'),
              width: getResponsiveValue('217px', '310px', '406px'),
              height: getResponsiveValue('67px', '75px', '87px'),
              transform: getResponsiveValue('scale(1.20312, 1.20312) translate(32.3312px, 12.4091px)', 'scale(1.20312, 1.20312) translate(32.3312px, 12.4091px)', 'scale(1.20312, 1.20312) translate(32.3312px, 12.4091px)')
            }}
          >
            <p 
              style={{ 
                fontFamily: getResponsiveValue('Noiretblanc', 'Noiretblanc', 'Noiretblanc'), 
                fontWeight: getResponsiveValue(400, 400, 400), 
                fontStyle: getResponsiveValue('normal', 'normal', 'normal'),
                color: getResponsiveValue('#1E1E1E', 'white', 'white'),
                letterSpacing: getResponsiveValue('-0.05em', '-0.05em', '-0.05em'),
                fontSize: getResponsiveValue('20px', '40px', '54px'),
                textTransform: isMobile ? getResponsiveValue('uppercase', 'none', 'none') : getResponsiveValue('uppercase', 'none', 'none'),
                textAlign: getResponsiveValue('center', 'center', 'center'),
                lineHeight: getResponsiveValue(0.9, 0.9, 0.9)
              }}
            >
              Let&apos;s Get
            </p>
          </a>

          {/* Hidden "Follow Us On Instagram!" text (instagram_8) */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              display: getResponsiveValue('none', 'none', 'none'),
              left: getResponsiveValue('117px', '45px', '45px'),
              top: getResponsiveValue('223px', '51px', '51px'),
              width: getResponsiveValue('87px', '1110px', '1110px'),
              height: getResponsiveValue('29px', '64px', '64px')
            }}
          >
            <p 
              style={{ 
                fontFamily: getResponsiveValue('Strings', 'Strings', 'Strings'), 
                fontWeight: getResponsiveValue(400, 400, 400), 
                fontStyle: getResponsiveValue('normal', 'normal', 'normal'),
                color: getResponsiveValue('#1E1E1E', '#1E1E1E', '#1E1E1E'),
                fontSize: getResponsiveValue('24px', '56px', '56px')
              }}
            >
              Follow Us On Instagram!
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Instagram