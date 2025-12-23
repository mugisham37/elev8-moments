'use client'

import { useState, useEffect } from 'react'

export default function TableScapes() {
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
        backgroundColor: '#F9F2EC',
        minHeight: getResponsiveValue('600px', '832px', '700px'),
        paddingBottom: getResponsiveValue('40px', '0px', '0px')
      }}
    >
      <div style={{ 
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <div 
          style={{ 
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: getResponsiveValue('100%', '768px', '851px'),
            maxWidth: getResponsiveValue('320px', '768px', '851px'),
            padding: getResponsiveValue('0 20px', '0', '0')
          }}
        >
          {/* tablescapes_0 - Image */}
          <div
            style={{
              position: 'absolute',
              transition: 'opacity 0.5s',
              right: getResponsiveValue('-40px', '-747px', '-828px'),
              top: getResponsiveValue('450px', '366px', '406px'),
              width: getResponsiveValue('240px', '459px', '509px'),
              height: getResponsiveValue('190px', '429px', '475px'),
              transform: getResponsiveValue('none', 'none', 'scale(0.709167, 0.709167) translate(-449.271px, -241.142px)')
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0px',
                left: '0px',
                backgroundImage: 'url(/images/23.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '70% 70%'
              }}
            ></div>
          </div>

          {/* tablescapes_1 - Image */}
          <div
            style={{
              position: 'absolute',
              left: getResponsiveValue('220px', '-411px', '-455px'),
              top: getResponsiveValue('-70px', '-46px', '-51px'),
              width: getResponsiveValue('150px', '412px', '457px'),
              height: getResponsiveValue('120px', '454px', '503px'),
              transform: getResponsiveValue('none', 'none', 'scale(0.709167, 0.709167) translate(-34.859px, -61.1058px)')
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0px',
                left: '0px',
                backgroundImage: 'url(/images/24.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '180%',
                backgroundPosition: '60% 50%'
              }}
            ></div>
          </div>

          {/* tablescapes_2 - Image (hidden on mobile) */}
          {(isTablet || isDesktop) && (
            <div
              style={{
                position: 'absolute',
                transition: 'opacity 0.5s',
                left: getResponsiveValue('0px', '571px', '788px'),
                top: getResponsiveValue('0px', '502px', '556px'),
                width: getResponsiveValue('0px', '196px', '217px'),
                height: getResponsiveValue('0px', '272px', '301px'),
                transform: getResponsiveValue('0px', 'none', 'scale(0.709167, 0.709167) translate(-343.874px, -253.65px)')
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.2'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '20% 20%',
                  backgroundImage: 'url(/images/25.jpg)'
                }}
              ></div>
            </div>
          )}

          {/* tablescapes_3 - Image */}
          <div
            style={{
              position: 'absolute',
              transition: 'opacity 0.5s',
              left: getResponsiveValue('-20px', '294px', '481px'),
              top: getResponsiveValue('120px', '503px', '557px'),
              width: getResponsiveValue('100px', '270px', '299px'),
              height: getResponsiveValue('140px', '272px', '301px'),
              transform: getResponsiveValue('none', 'none', 'scale(0.709167, 0.709167) translate(-256.726px, -253.65px)')
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.2'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0px',
                left: '0px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '20% 20%',
                backgroundImage: 'url(/images/26.jpg)'
              }}
            ></div>
          </div>

          {/* tablescapes_4 - Image */}
          <div
            style={{
              position: 'absolute',
              transition: 'opacity 0.5s',
              left: getResponsiveValue('-40px', '12px', '180px'),
              top: getResponsiveValue('390px', '501px', '555px'),
              width: getResponsiveValue('120px', '269px', '298px'),
              height: getResponsiveValue('170px', '275px', '305px'),
              transform: getResponsiveValue('none', 'none', 'scale(0.709167, 0.709167) translate(-152.764px, -253.65px)')
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.2'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0px',
                left: '0px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                backgroundImage: 'url(/images/27.jpg)'
              }}
            ></div>
          </div>

          {/* tablescapes_5 - Image */}
          <div
            style={{
              position: 'absolute',
              transition: 'opacity 0.5s',
              left: getResponsiveValue('-10px', '15px', '188px'),
              top: getResponsiveValue('270px', '153px', '170px'),
              width: getResponsiveValue('90px', '226px', '250px'),
              height: getResponsiveValue('110px', '340px', '377px'),
              transform: getResponsiveValue('none', 'none', 'scale(0.709167, 0.709167) translate(-152.764px, -115.035px)')
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.2'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0px',
                left: '0px',
                backgroundImage: 'url(/images/35.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%'
              }}
            ></div>
          </div>

          {/* tablescapes_6 - Text "Stunning" */}
          <div
            style={{
              position: 'absolute',
              left: getResponsiveValue('20px', '277px', '495px'),
              top: getResponsiveValue('20px', '60px', '67px'),
              width: getResponsiveValue('auto', '142px', '157px'),
              height: getResponsiveValue('auto', '61px', '68px'),
              transform: getResponsiveValue('none', 'none', 'scale(0.709167, 0.709167) translate(-270.465px, -41.8308px)')
            }}
          >
            <p
              style={{
                fontSize: getResponsiveValue('32px', '78px', '86px'),
                fontFamily: 'Strings',
                fontWeight: 400,
                fontStyle: 'normal',
                margin: 0
              }}
            >
              Stunning
            </p>
          </div>

          {/* tablescapes_7 - Text "TABLESCAPES" */}
          <div
            style={{
              position: 'absolute',
              left: getResponsiveValue('20px', '277px', '506px'),
              top: getResponsiveValue('65px', '150px', '166px'),
              width: getResponsiveValue('auto', '292px', '324px'),
              height: getResponsiveValue('auto', '37px', '41px'),
              transform: getResponsiveValue('none', 'none', 'scale(0.709167, 0.709167) translate(-317.012px, -74.8443px)')
            }}
          >
            <p
              style={{
                fontSize: getResponsiveValue('28px', '54px', '60px'),
                fontFamily: 'Noiretblanc',
                fontWeight: 400,
                fontStyle: 'normal',
                margin: 0
              }}
            >
              TABLESCAPES
            </p>
          </div>

          {/* tablescapes_8 - SVG Line */}
          <div
            style={{
              position: 'absolute',
              width: '1px',
              transform: 'scale(1, 1) translate(-0.145417px, 0px)',
              top: getResponsiveValue('0px', '81px', '90px'),
              left: getResponsiveValue('0px', '165px', '183px'),
              height: '1px'
            }}
          >
            <svg 
              style={{ 
                width: getResponsiveValue('0px', '65px', '72px'), 
                height: '1px' 
              }}
            >
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                style={{
                  stroke: 'rgba(30, 30, 30, 1)',
                  strokeWidth: '0.709167px',
                  strokeDasharray: '0px',
                  strokeLinecap: 'butt',
                  pointerEvents: 'all'
                }}
              ></line>
            </svg>
          </div>

          {/* tablescapes_9 - Description text */}
          <div
            style={{
              position: 'absolute',
              left: getResponsiveValue('90px', '274px', '470px'),
              top: getResponsiveValue('120px', '205px', '227px'),
              width: getResponsiveValue('calc(100% - 75px)', '453px', '502px'),
              maxWidth: getResponsiveValue('280px', '453px', '502px'),
              height: getResponsiveValue('auto', '216px', '239px'),
              transform: getResponsiveValue('none', 'none', 'scale(0.709167, 0.709167) translate(-294.046px, -125.287px)')
            }}
          >
            <p
              style={{
                lineHeight: '1.4',
                fontSize: getResponsiveValue('15px', '18px', '20px'),
                textAlign: 'left',
                fontFamily: 'Raleway',
                fontWeight: 400,
                fontStyle: 'normal',
                margin: 0
              }}
            >
              Take your dining experience to the next level with our stunning tablescapes! We know the table is the
              centerpiece of any celebration, and our team creates beautiful setups that show off your personal style.
              From chic place settings to eye-catching centerpieces, every detail is carefully chosen to make your
              table a true showstopper. Imagine tables decked out with gorgeous flowers, shimmering glassware, and
              luxurious linens, welcoming your guests to enjoy an unforgettable meal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
