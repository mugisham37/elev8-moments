'use client'

import { useState, useEffect } from 'react'

const Florals: React.FC = () => {
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
        backgroundColor: 'rgba(30,30,30,1)',
        overflow: 'hidden',
        width: '100%',
        height: getResponsiveValue('649px', '754px', '754px')
      }}
    >
      <div 
        style={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}
      >
        <div 
          style={{ 
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: getResponsiveValue('320px', '768px', '851px'), 
            maxWidth: '100%' 
          }}
        >
          
          {/* florals_0_1 - Button Container with Link */}
          <div 
            style={{
              position: 'absolute',
              border: '1px solid rgba(249,242,236,1)',
              backgroundColor: 'transparent',
              left: getResponsiveValue('48px', '480px', '350px'),
              top: getResponsiveValue('547px', '644px', '644px'),
              width: getResponsiveValue('224px', '241px', '241px'),
              height: getResponsiveValue('48px', '51px', '51px'),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Button Link */}
            <a
              href="mailto:glamhausdesignco@gmail.com"
              target="_self"
              style={{
                transition: 'opacity 500ms',
                textDecoration: 'none',
                display: 'block'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.3'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <nav 
                style={{
                  color: 'rgba(249,242,236,1)',
                  textTransform: 'uppercase',
                  lineHeight: '3',
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                  fontFamily: 'raleway',
                  fontWeight: 'normal',
                  fontSize: getResponsiveValue('11px', '14px', '14px')
                }}
              >
                REQUEST A QUOTE
              </nav>
            </a>
          </div>

          {/* florals_2 - Description Paragraph */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('0px', '398px', '308px'),
              top: getResponsiveValue('328px', '131px', '101px'),
              width: getResponsiveValue('335px', '644px', '644px'),
              height: getResponsiveValue('110px', '76px', '76px'),
              transform: getResponsiveValue('0px', '0px', '0px')
            }}
          >
            <p 
              style={{
                color: 'rgba(249,242,236,1)',
                lineHeight: '1.6',
                textAlign: 'left',
                fontFamily: 'raleway',
                fontWeight: 'normal',
                fontSize: getResponsiveValue('16px', '16px', '16px'),
                margin: getResponsiveValue('0px', '0px', '0px')
              }}
            >
              Welcome to a world where blossoms tell a story! At Glam Haus Design Co. we specialize in crafting stunning floral arrangements perfect for any occasion. Whether you&apos;re celebrating a wedding, hosting a glamorous event, or simply wanting to brighten your space, our exquisite designs are tailored to bring joy and beauty to your life.
            </p>
          </div>

          {/* florals_3 - Title "Floral" */}
          <div 
            style={{
              position: 'absolute',
              transition: 'opacity 500ms',
              left: getResponsiveValue('223px', '174px', '274px'),
              top: getResponsiveValue('57px', '93px', '123px'),
              width: getResponsiveValue('171px', '208px', '208px'),
              height: getResponsiveValue('67px', '53px', '53px'),
              transform: getResponsiveValue('0px', '0px', '0px')
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.2'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <h3 
              style={{
                color: 'rgba(249,242,236,1)',
                textAlign: 'left',
                fontFamily: 'strings',
                fontWeight: 'normal',
                margin: getResponsiveValue('0px', '0px', '0px'),
                lineHeight: getResponsiveValue('1', '1.2', '1.2'),
                fontSize: getResponsiveValue('92px', '85px', '125px')
              }}
            >
              Floral
            </h3>
          </div>

          {/* florals_4_5_6 - Images Container with Flexbox */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('0px', '115px', '115px'),
              top: getResponsiveValue('127px', '264px', '264px'),
              width: getResponsiveValue('320px', '736px', '736px'),
              height: getResponsiveValue('148px', '339px', '339px'),
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: getResponsiveValue('3px', '6px', '25px')
            }}
          >
            {/* Image 1 */}
            <div 
              style={{
                opacity: getResponsiveValue('1', '1', '1'),
                width: getResponsiveValue('109px', '339px', '339px'),
                height: getResponsiveValue('148px', '336px', '336px'),
                flexShrink: 0
              }}
            >
              <div 
                style={{ 
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url(/images/34.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '120%',
                  backgroundPosition: '50% 30%'
                }}
              />
            </div>
            {/* Image 2 */}
            <div 
              style={{
                opacity: getResponsiveValue('0.9', '0.9', '0.9'),
                width: getResponsiveValue('114px', '236px', '236px'),
                height: getResponsiveValue('148px', '289px', '289px'),
                flexShrink: 0
              }}
            >
              <div 
                style={{ 
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url(/images/35.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '50% 50%'
                }}
              />
            </div>

            {/* Image 3 */}
            <div 
              style={{
                opacity: getResponsiveValue('0.9', '0.9', '0.9'),
                width: getResponsiveValue('111px', '155px', '305px'),
                height: getResponsiveValue('148px', '333px', '333px'),
                flexShrink: 0
              }}
            >
              <div 
                style={{ 
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url(/images/16.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '50% 50%'
                }}
              />
            </div>
          </div>

          {/* florals_7 - Text "DESIGN" */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('73px', '230px', '140px'),
              top: getResponsiveValue('85px', '176px', '176px'),
              width: getResponsiveValue('175px', '90px', '90px'),
              height: getResponsiveValue('44px', '22px', '22px'),
              transform: getResponsiveValue('0px', '0px', '0px')
            }}
          >
            <p 
              style={{
                color: 'rgba(249,242,236,1)',
                lineHeight: '1.2',
                letterSpacing: '0.1em',
                fontFamily: 'noiretblanc',
                fontWeight: 'normal',
                margin: getResponsiveValue('0px', '0px', '0px'),
                fontSize: getResponsiveValue('30px', '20px', '30px'),
                textAlign: getResponsiveValue('center', 'left', 'left') as 'center' | 'left'
              }}
            >
              DESIGN<br />
            </p>
          </div>

          {/* florals_8 - Tagline */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('190px', '398px', '488px'),
              top: getResponsiveValue('420px', '97px', '197px'),
              width: getResponsiveValue('475px', '581px', '581px'),
              height: getResponsiveValue('36px', '22px', '22px'),
              transform: getResponsiveValue('0px', '0px', '0px')
            }}
          >
            <p 
              style={{
                color: 'rgba(249,242,236,1)',
                lineHeight: '1.2',
                letterSpacing: '0.1em',
                textAlign: 'left',
                fontFamily: 'raleway',
                fontWeight: 'normal',
                margin: getResponsiveValue('0px', '0px', '0px'),
                fontSize: getResponsiveValue('18px', '16px', '22px')
              }}
            >
              ELEVATE YOUR SPACE. ONE BLOOM AT A TIME.<br />
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Florals;
