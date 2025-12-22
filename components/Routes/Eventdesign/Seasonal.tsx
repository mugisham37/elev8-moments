'use client'

import { useState, useEffect } from 'react'

const Seasonal: React.FC = () => {
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
        overflow: 'hidden',
        height: getResponsiveValue('680.2px', '1398.8px', '991.98147px')
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: '#95aa9b'
        }}
      >
        <div 
          style={{ 
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: getResponsiveValue('320px', '768px', '851px')
          }}
        >
          
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('20px', '66px', '66px'),
              top: getResponsiveValue('126px', '161px', '161px'),
              width: getResponsiveValue('382px', '472px', '472px'),
              height: getResponsiveValue('106px', '152px', '152px'),
              transform: getResponsiveValue('scale(0.709167, 0.709167) translate(-123.852px, -97.1951px)', '0px', '0px')
            }}
          >
            <h2 
              style={{
                color: '#f9f2ec',
                lineHeight: '1.2',
                letterSpacing: '0em',
                fontFamily: 'Noiretblanc',
                fontWeight: 'normal',
                fontSize: getResponsiveValue('60px', '56px', '56px'),
                textAlign: getResponsiveValue('left', 'right', 'right') as 'left' | 'right'
              }}
            >
              SEASONAL &amp;<br />
              HOLIDAY DECOR<br />
            </h2>
          </div>

          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('369px', '564px', '564px'),
              top: getResponsiveValue('508px', '82px', '82px'),
              width: getResponsiveValue('221px', '429px', '429px'),
              height: getResponsiveValue('250px', '587px', '587px'),
              transform: getResponsiveValue('scale(0.709167, 0.709167) translate(-319.267px, -153.995px)', '0px', '0px')
            }}
          >
            <div 
              style={{ 
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage: 'url(/images/20.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%'
              }}
            />
          </div>

          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('0px', '867px', '867px'),
                top: getResponsiveValue('0px', '115px', '115px'),
                width: getResponsiveValue('0px', '267px', '267px'),
                height: getResponsiveValue('0px', '280px', '280px'),
                transform: getResponsiveValue('0px', 'scale(0.709167, 0.709167) translate(-410.311px, -104.577px)', 'scale(0.709167, 0.709167) translate(-410.311px, -104.577px)')
              }}
            >
              <div 
                style={{
                  backgroundColor: '#95aa9b',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          )}

          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('0px', '174px', '174px'),
                top: getResponsiveValue('0px', '473px', '473px'),
                width: getResponsiveValue('0px', '480px', '480px'),
                height: getResponsiveValue('0px', '334px', '334px'),
                transform: getResponsiveValue('0px', 'scale(0.709167, 0.709167) translate(-169.784px, -262.468px)', 'scale(0.709167, 0.709167) translate(-169.784px, -262.468px)')
              }}
            >
              <div 
                style={{
                  backgroundColor: '#95aa9b',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          )}

          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('305px', '346px', '346px'),
              top: getResponsiveValue('285px', '485px', '485px'),
              width: getResponsiveValue('251px', '353px', '353px'),
              height: getResponsiveValue('142px', '298px', '298px'),
              transform: getResponsiveValue('scale(0.709167, 0.709167) translate(-214.28px, -260.007px)', '0px', '0px')
            }}
          >
            <div 
              style={{ 
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage: 'url(/images/21.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: '50%'
              }}
            />
          </div>

          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('13px', '99px', '99px'),
              top: getResponsiveValue('316px', '280px', '280px'),
              width: getResponsiveValue('478px', '439px', '439px'),
              height: getResponsiveValue('135px', '173px', '173px'),
              transform: getResponsiveValue('scale(0.709167, 0.709167) translate(-130.619px, -150.304px)', '0px', '0px')
            }}
          >
            <p 
              style={{
                color: '#f9f2ec',
                letterSpacing: '0em',
                fontFamily: 'Raleway',
                fontWeight: 'normal',
                fontSize: getResponsiveValue('20px', '16px', '16px'),
                lineHeight: getResponsiveValue('1.4', '1.6', '1.6'),
                textAlign: getResponsiveValue('justify', 'right', 'right') as 'justify' | 'right'
              }}
            >
              Embrace the magic of each season with our enchanting holiday décor! From cozy autumn gatherings adorned with vibrant leaves and pumpkins to glamorous winter wonderlands draped in twinkling lights and evergreen accents, we create settings that capture the essence of the season. Our designs are infused with warmth and charm, ensuring your guests feel welcomed and inspired.
            </p>
          </div>

          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('270px', '883px', '883px'),
              top: getResponsiveValue('60x', '129px', '129px'),
              width: getResponsiveValue('221px', '237px', '237px'),
              height: getResponsiveValue('240px', '250px', '250px'),
              transform: getResponsiveValue('scale(0.709167, 0.709167) translate(-410.721px, -104.167px)', '0px', '0px')
            }}
          >
            <div 
              style={{ 
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage: 'url(/images/22.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '0% 0%'
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Seasonal;