'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const BoardBoxesMenuOpen = () => {
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
        zIndex: 6,
        height: getResponsiveValue('200px', '320px', '400px'),
        display: getResponsiveValue('none', 'none', 'none')
      }}
    >
      {/* Background container */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgb(249,242,236)'
      }}>
        <div 
          style={{
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: getResponsiveValue('320px', '768px', '1200px')
          }}
        >
          
          {/* Element 0 - Title Text */}
          <div 
            style={{ 
              position: 'absolute',
              left: getResponsiveValue('114px', '230px', '298px'),
              top: getResponsiveValue('259px', '45px', '57px'),
              width: getResponsiveValue('92px', '550px', '891px'),
              height: getResponsiveValue('17px', '35px', '50px')
            }}
          >
            <p 
              style={{
                color: 'rgb(30,30,30)',
                textAlign: getResponsiveValue('left', 'center', 'center') as 'left' | 'center',
                fontFamily: "'Noiretblanc',serif",
                fontWeight: 'normal',
                letterSpacing: 0,
                fontSize: getResponsiveValue('12px', '28px', '41px'),
                lineHeight: getResponsiveValue('1.8', '1.6', '1.4'),
                display: 'flex',
                justifyContent: getResponsiveValue('flex-start', 'center', 'center') as 'flex-start' | 'center'
              }}
            >
              CHARCUTERIE BOARDS + BOXES
            </p>
          </div>

          {/* Element 1 - Men's Boards Link */}
          <a 
            href="/experience" 
            target="_self" 
            style={{ 
              position: 'absolute',
              left: getResponsiveValue('114px', '400px', '550px'),
              top: getResponsiveValue('259px', '180px', '229px'),
              width: getResponsiveValue('92px', '180px', '248px'),
              height: getResponsiveValue('17px', '18px', '19px')
            }}
          >
            <nav 
              style={{
                color: 'rgb(30,30,30)',
                fontFamily: "'Raleway',sans-serif",
                fontWeight: 'normal',
                letterSpacing: 0,
                fontSize: getResponsiveValue('12px', '14px', '17px'),
                lineHeight: getResponsiveValue('1.8', '1.6', '1.4'),
                display: 'flex',
                justifyContent: getResponsiveValue('flex-start', 'center', 'center') as 'flex-start' | 'center'
              }}
            >
              <b>Men&apos;s Boards</b>
              <br />
            </nav>
          </a>

          {/* Element 2 - Traditional Boards Link */}
          <a 
            href="/experience" 
            target="_self" 
            style={{ 
              position: 'absolute',
              left: getResponsiveValue('114px', '400px', '550px'),
              top: getResponsiveValue('259px', '110px', '138px'),
              width: getResponsiveValue('92px', '170px', '233px'),
              height: getResponsiveValue('17px', '18px', '19px')
            }}
          >
            <nav 
              style={{
                color: 'rgb(30,30,30)',
                fontFamily: "'Raleway',sans-serif",
                fontWeight: 'normal',
                letterSpacing: 0,
                fontSize: getResponsiveValue('12px', '14px', '17px'),
                lineHeight: getResponsiveValue('1.8', '1.6', '1.4'),
                display: 'flex',
                justifyContent: getResponsiveValue('flex-start', 'center', 'center') as 'flex-start' | 'center'
              }}
            >
              <b>Traditional Boards + Boxes</b>
            </nav>
          </a>

          {/* Element 3 - Custom Boards Link */}
          <a 
            href="/experience" 
            target="_self" 
            style={{ 
              position: 'absolute',
              left: getResponsiveValue('114px', '400px', '550px'),
              top: getResponsiveValue('259px', '145px', '185px'),
              width: getResponsiveValue('92px', '215px', '298px'),
              height: getResponsiveValue('17px', '18px', '19px')
            }}
          >
            <nav 
              style={{
                color: 'rgb(30,30,30)',
                fontFamily: "'Raleway',sans-serif",
                fontWeight: 'normal',
                letterSpacing: 0,
                fontSize: getResponsiveValue('12px', '14px', '17px'),
                lineHeight: getResponsiveValue('1.8', '1.6', '1.4'),
                display: 'flex',
                justifyContent: getResponsiveValue('flex-start', 'center', 'center') as 'flex-start' | 'center'
              }}
            >
              <b>Custom Boards + Cheese Cakes</b>
            </nav>
          </a>

          {/* Element 4 - Holiday Boards Link */}
          <a 
            href="/experience" 
            target="_self" 
            style={{ 
              position: 'absolute',
              left: getResponsiveValue('114px', '400px', '550px'),
              top: getResponsiveValue('259px', '215px', '272px'),
              width: getResponsiveValue('92px', '205px', '284px'),
              height: getResponsiveValue('17px', '18px', '19px')
            }}
          >
            <nav 
              style={{
                color: 'rgb(30,30,30)',
                fontFamily: "'Raleway',sans-serif",
                fontWeight: 'normal',
                letterSpacing: 0,
                fontSize: getResponsiveValue('12px', '14px', '17px'),
                lineHeight: getResponsiveValue('1.8', '1.6', '1.4'),
                display: 'flex',
                justifyContent: getResponsiveValue('flex-start', 'center', 'center') as 'flex-start' | 'center'
              }}
            >
              <b>Holiday Boards</b>
              <br />
            </nav>
          </a>

          {/* Element 5 - Close Button Icon */}
          <div 
            style={{ 
              position: 'absolute',
              cursor: 'pointer',
              left: getResponsiveValue('135px', '680px', '1145px'),
              top: getResponsiveValue('243px', '8px', '12px'),
              width: getResponsiveValue('50px', '40px', '33px'),
              height: getResponsiveValue('50px', '45px', '41px')
            }}
          >
            <div style={{
              width: '100%',
              height: '100%'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{
                fill: 'rgb(30,30,30)',
                width: '100%',
                height: '100%'
              }}>
                <polygon points="405 121.8 390.2 107 256 241.2 121.8 107 107 121.8 241.2 256 107 390.2 121.8 405 256 270.8 390.2 405 405 390.2 270.8 256 405 121.8"></polygon>
              </svg>
            </div>
          </div>

          {/* Element 6 - Image 1 */}
          <div 
            style={{ 
              position: 'absolute',
              left: getResponsiveValue('351px', '110px', '147px'),
              top: getResponsiveValue('77px', '15px', '20px'),
              width: getResponsiveValue('224px', '245px', '263px'),
              height: getResponsiveValue('159px', '220px', '286px')
            }}
          >
            <Image 
              src="/images/31.jpg" 
              alt="A568477E-71C4-4007-9C1C-74B765112E53" 
              fill
              style={{
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Element 7 - Background Overlay */}
          <div 
            style={{ 
              position: 'absolute',
              left: getResponsiveValue('327px', '275px', '319px'),
              top: getResponsiveValue('-46px', '85px', '177px'),
              width: getResponsiveValue('224px', '200px', '180px'),
              height: getResponsiveValue('375px', '280px', '197px')
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgb(249,242,236)'
            }}></div>
          </div>

          {/* Element 8 - Image 2 */}
          <div 
            style={{ 
              position: 'absolute',
              left: getResponsiveValue('362px', '268px', '291px'),
              top: getResponsiveValue('9px', '100px', '186px'),
              width: getResponsiveValue('224px', '232px', '236px'),
              height: getResponsiveValue('278px', '225px', '179px')
            }}
          >
            <Image 
              src="/images/32.jpg" 
              alt="IMG_3225" 
              fill
              style={{
                objectFit: 'contain'
              }}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default BoardBoxesMenuOpen