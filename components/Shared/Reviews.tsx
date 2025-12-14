'use client'

import React, { useEffect, useState } from 'react'

const Reviews = () => {
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
        position: getResponsiveValue('relative', 'relative', 'relative') as 'relative',
        width: getResponsiveValue('100%', '100%', '100%'),
        backgroundColor: getResponsiveValue('rgb(30,30,30)', 'rgb(30,30,30)', 'rgb(30,30,30)'),
        height: getResponsiveValue('1355px', '1100px', '902px')
      }}
    >
      {/* Background container */}
      <div style={{
        position: getResponsiveValue('absolute', 'absolute', 'absolute') as 'absolute',
        top: getResponsiveValue(0, 0, 0),
        right: getResponsiveValue(0, 0, 0),
        bottom: getResponsiveValue(0, 0, 0),
        left: getResponsiveValue(0, 0, 0)
      }}>
        
        {/* Review Card 2 (Top Review - Karla S.) */}
        <div 
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute') as 'absolute',
            backgroundColor: getResponsiveValue('rgb(249,242,236)', 'rgb(249,242,236)', 'rgb(249,242,236)'),
            left: getResponsiveValue('19px', '40px', '241px'),
            top: getResponsiveValue('24px', '50px', '70px'),
            width: getResponsiveValue('339px', '688px', '1078px'),
            height: getResponsiveValue('644px', '480px', '358px'),
            border: getResponsiveValue('1px solid rgb(220,222,229)', '1px solid rgb(30,30,30)', '1px solid rgb(30,30,30)')
          }}
        >
          
          {/* Circular image - reviews_10 */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute') as 'absolute',
              borderRadius: getResponsiveValue('50%', '50%', '50%'),
              overflow: getResponsiveValue('hidden', 'hidden', 'hidden') as 'hidden',
              left: getResponsiveValue('72px', '95px', '58px'),
              top: getResponsiveValue('148px', '140px', '54px'),
              width: getResponsiveValue('178px', '205px', '236px'),
              height: getResponsiveValue('169px', '200px', '238px')
            }}
          >
            <div 
              style={{
                width: getResponsiveValue('100%', '100%', '100%'),
                height: getResponsiveValue('100%', '100%', '100%'),
                backgroundPosition: getResponsiveValue('center', 'center', 'center') as 'center',
                backgroundImage: getResponsiveValue("url('/images/27.jpg')", "url('/images/27.jpg')", "url('/images/27.jpg')"),
                backgroundSize: getResponsiveValue('100%', '110%', '110%')
              }}
            />
          </div>

          {/* Divider line - reviews_9 */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute') as 'absolute',
              backgroundColor: getResponsiveValue('rgb(30,30,30)', 'rgb(30,30,30)', 'rgb(30,30,30)'),
              left: getResponsiveValue('77px', '345px', '338px'),
              top: getResponsiveValue('348px', '85px', '25px'),
              width: getResponsiveValue('168px', '1px', '1px'),
              height: getResponsiveValue('1px', '310px', '309px')
            }}
          />

          {/* Quote heading - reviews_11 */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute') as 'absolute',
              left: getResponsiveValue('20px', '385px', '387px'),
              top: getResponsiveValue('65px', '110px', '74px'),
              width: getResponsiveValue('281px', '480px', '683px'),
              height: getResponsiveValue('71px', '50px', '41px')
            }}
          >
            <p 
              style={{
                color: getResponsiveValue('rgb(0,0,0)', 'rgb(0,0,0)', 'rgb(0,0,0)'),
                lineHeight: getResponsiveValue(1.2, 1.2, 1.2),
                fontFamily: getResponsiveValue("'Noiretblanc',serif", "'Noiretblanc',serif", "'Noiretblanc',serif"),
                fontSize: getResponsiveValue('27px', '30px', '33px'),
                textAlign: getResponsiveValue('center', 'left', 'left') as 'center' | 'left'
              }}
            >
              &ldquo;Unlike anything I&apos;ve ever attended&rdquo;
            </p>
          </div>

          {/* Review text - reviews_8 */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute') as 'absolute',
              left: getResponsiveValue('54px', '385px', '397px'),
              top: getResponsiveValue('365px', '175px', '137px'),
              width: getResponsiveValue('220px', '545px', '611px'),
              height: getResponsiveValue('245px', '165px', '125px')
            }}
          >
            <p 
              style={{
                color: 'rgb(0,0,0)',
                lineHeight: 1.5,
                fontFamily: "'Raleway',sans-serif",
                fontWeight: 400,
                fontSize: getResponsiveValue('14px', '15px', '16px'),
                textAlign: getResponsiveValue('justify', 'left', 'left') as 'justify' | 'left'
              }}
            >
              &ldquo;Bloom &amp; Bond was not only beautiful but truly intentional, with soulful activities, healing moments and creative experiences! I love supporting women owned businesses and Elev8 Moments is definitely highly recommended to all of my friends and family. You&apos;ll love Sandra, her attention to detail, creative vision and the meaningful experiences she creates!&rdquo;
            </p>
          </div>

          {/* Name - reviews_7 */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute') as 'absolute',
              left: getResponsiveValue('63px', '385px', '397px'),
              top: getResponsiveValue('615px', '355px', '272px'),
              width: getResponsiveValue('194px', '230px', '274px'),
              height: getResponsiveValue('27px', '22px', '19px')
            }}
          >
            <p 
              style={{
                color: 'rgb(0,0,0)',
                textTransform: 'uppercase',
                lineHeight: 1.8,
                letterSpacing: '0.2em',
                fontFamily: "'Raleway',sans-serif",
                fontWeight: 400,
                fontSize: getResponsiveValue('12px', '13px', '15px'),
                textAlign: getResponsiveValue('center', 'left', 'left') as 'center' | 'left'
              }}
            >
              EVENT PARTICIPANT
            </p>
          </div>
        </div>

        {/* Review Card 1 (Bottom Review - Cheryl B.) */}
        <div 
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute') as 'absolute',
            backgroundColor: getResponsiveValue('rgb(249,242,236)', 'rgb(249,242,236)', 'rgb(249,242,236)'),
            left: getResponsiveValue('19px', '40px', '241px'),
            top: getResponsiveValue('702px', '570px', '473px'),
            width: getResponsiveValue('337px', '688px', '1078px'),
            height: getResponsiveValue('616px', '480px', '358px'),
            border: getResponsiveValue('1px solid rgb(220,222,229)', '1px solid rgb(30,30,30)', '1px solid rgb(30,30,30)')
          }}
        >
          
          {/* Quote heading - reviews_5 */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute') as 'absolute',
              left: getResponsiveValue('31px', '75px', '77px'),
              top: getResponsiveValue('38px', '82px', '82px'),
              width: getResponsiveValue('267px', '420px', '547px'),
              height: getResponsiveValue('71px', '50px', '41px')
            }}
          >
            <p 
              style={{
                color: getResponsiveValue('rgb(0,0,0)', 'rgb(0,0,0)', 'rgb(0,0,0)'),
                lineHeight: getResponsiveValue(1.2, 1.2, 1.2),
                fontFamily: getResponsiveValue("'Noiretblanc',serif", "'Noiretblanc',serif", "'Noiretblanc',serif"),
                fontSize: getResponsiveValue('29px', '31px', '33px'),
                textAlign: getResponsiveValue('center', 'left', 'left') as 'center' | 'left'
              }}
            >
              &ldquo;Stress-free and unforgettable&rdquo;
            </p>
          </div>

          {/* Review text - reviews_2 */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute') as 'absolute',
              left: getResponsiveValue('51px', '75px', '87px'),
              top: getResponsiveValue('341px', '141px', '141px'),
              width: getResponsiveValue('220px', '545px', '611px'),
              height: getResponsiveValue('215px', '135px', '98px')
            }}
          >
            <p 
              style={{
                color: getResponsiveValue('rgb(0,0,0)', 'rgb(0,0,0)', 'rgb(0,0,0)'),
                lineHeight: getResponsiveValue(1.5, 1.5, 1.5),
                fontFamily: getResponsiveValue("'Raleway',sans-serif", "'Raleway',sans-serif", "'Raleway',sans-serif"),
                fontWeight: getResponsiveValue(400, 400, 400),
                fontSize: getResponsiveValue('14px', '15px', '16px'),
                textAlign: getResponsiveValue('justify', 'left', 'left') as 'justify' | 'left'
              }}
            >
              &ldquo;We have booked gifting packages on multiple occasions from Elev8 Moments and they are always elegant, thoughtful and unforgettable! I&apos;ve worked with other companies in the past and definitely prefer Elev8 Moments. You can tell that she takes a lot of care and pride in creating meaningful experiences.&rdquo;
            </p>
          </div>

          {/* Name - reviews_1 */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute') as 'absolute',
              left: getResponsiveValue('63px', '75px', '87px'),
              top: getResponsiveValue('561px', '291px', '255px'),
              width: getResponsiveValue('194px', '230px', '274px'),
              height: getResponsiveValue('27px', '22px', '19px')
            }}
          >
            <p 
              style={{
                color: getResponsiveValue('rgb(0,0,0)', 'rgb(0,0,0)', 'rgb(0,0,0)'),
                textTransform: getResponsiveValue('uppercase', 'uppercase', 'uppercase') as 'uppercase',
                lineHeight: getResponsiveValue(1.8, 1.8, 1.8),
                letterSpacing: getResponsiveValue('0.2em', '0.2em', '0.2em'),
                fontFamily: getResponsiveValue("'Raleway',sans-serif", "'Raleway',sans-serif", "'Raleway',sans-serif"),
                fontWeight: getResponsiveValue(400, 400, 400),
                fontSize: getResponsiveValue('12px', '13px', '15px'),
                textAlign: getResponsiveValue('center', 'left', 'left') as 'center' | 'left'
              }}
            >
              CHERYL B.
            </p>
          </div>

          {/* Divider line - reviews_3 */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute') as 'absolute',
              backgroundColor: getResponsiveValue('rgb(30,30,30)', 'rgb(30,30,30)', 'rgb(30,30,30)'),
              left: getResponsiveValue('77px', '658px', '721px'),
              top: getResponsiveValue('323px', '25px', '25px'),
              width: getResponsiveValue('168px', '1px', '1px'),
              height: getResponsiveValue('1px', '310px', '309px')
            }}
          />

          {/* Circular image - reviews_4 */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute') as 'absolute',
              borderRadius: getResponsiveValue('50%', '50%', '50%'),
              overflow: getResponsiveValue('hidden', 'hidden', 'hidden') as 'hidden',
              left: getResponsiveValue('72px', '440px', '783px'),
              top: getResponsiveValue('132px', '60px', '60px'),
              width: getResponsiveValue('178px', '205px', '236px'),
              height: getResponsiveValue('169px', '200px', '238px')
            }}
          >
            <div 
              style={{
                width: getResponsiveValue('100%', '100%', '100%'),
                height: getResponsiveValue('100%', '100%', '100%'),
                backgroundPosition: getResponsiveValue('center', 'center', 'center') as 'center',
                backgroundImage: getResponsiveValue("url('/images/28.jpg')", "url('/images/28.jpg')", "url('/images/28.jpg')"),
                backgroundSize: getResponsiveValue('100%', '110%', '110%')
              }}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Reviews