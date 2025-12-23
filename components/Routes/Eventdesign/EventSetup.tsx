'use client'

import { useState, useEffect } from 'react'

export default function EventSetup() {
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
        position: getResponsiveValue('relative', 'relative', 'relative'),
        height: getResponsiveValue('589px', '477px', '746px')
      }}
    >
      {/* Background */}
      <div 
        style={{
          position: getResponsiveValue('absolute', 'absolute', 'absolute'),
          top: getResponsiveValue(0, 0, 0),
          right: getResponsiveValue(0, 0, 0),
          bottom: getResponsiveValue(0, 0, 0),
          left: getResponsiveValue(0, 0, 0),
          backgroundColor: getResponsiveValue('#1e1e1e', '#1e1e1e', '#1e1e1e')
        }}
      >
        <div 
          style={{
            position: getResponsiveValue('relative', 'relative', 'relative'),
            width: getResponsiveValue('100%', '100%', '100%'),
            height: getResponsiveValue('100%', '100%', '100%'),
            marginLeft: getResponsiveValue('auto', 'auto', 'auto'),
            marginRight: getResponsiveValue('auto', 'auto', 'auto'),
            maxWidth: getResponsiveValue('320px', '768px', '1200px')
          }}
        >
          
          {/* Main Description Text */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('17px', '98px', '153px'),
              top: getResponsiveValue('352px', '131px', '205px'),
              width: getResponsiveValue('286px', '572px', '894px'),
              height: getResponsiveValue('155px', '49px', '76px')
            }}
          >
            <p 
              style={{ 
                color: getResponsiveValue('#f9f2ec', '#f9f2ec', '#f9f2ec'),
                lineHeight: getResponsiveValue(1.6, 1.6, 1.6),
                letterSpacing: getResponsiveValue('0em', '0em', '0em'),
                fontFamily: getResponsiveValue('Raleway', 'Raleway', 'Raleway'),
                fontWeight: getResponsiveValue(300, 300, 300),
                textTransform: getResponsiveValue('none', 'none', 'none'),
                fontStyle: getResponsiveValue('normal', 'normal', 'normal'),
                fontSize: getResponsiveValue('13px', '12px', '16px'),
                textAlign: getResponsiveValue('justify', 'center', 'center')
              }}
            >
              Our dedicated team specializes in event setup and décor, ensuring every aspect is perfectly executed. From the initial planning stages to the final touches, we work closely with you to bring your ideas to fruition. We&apos;ll transform any venue into a glamorous backdrop that captures the essence of your event, creating an atmosphere that leaves a lasting impression.<br/><br/>
            </p>
          </div>

          {/* First Image */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              opacity: getResponsiveValue(0.9, 0.9, 0.9),
              left: getResponsiveValue('134px', '309px', '482px'),
              top: getResponsiveValue('202px', '225px', '351px'),
              width: getResponsiveValue('169px', '151px', '236px'),
              height: getResponsiveValue('132px', '185px', '289px')
            }}
          >
            <div 
              style={{ 
                position: getResponsiveValue('absolute', 'absolute', 'absolute'),
                top: getResponsiveValue(0, 0, 0),
                left: getResponsiveValue(0, 0, 0),
                width: getResponsiveValue('100%', '100%', '100%'),
                height: getResponsiveValue('100%', '100%', '100%'),
                backgroundRepeat: getResponsiveValue('no-repeat', 'no-repeat', 'no-repeat'),
                backgroundSize: getResponsiveValue('cover', 'cover', 'cover'),
                backgroundImage: 'url(/images/17.jpg)',
                backgroundPosition: '50% 50%'
              }}
            ></div>
          </div>

          {/* Second Image */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              opacity: getResponsiveValue(0.9, 0.9, 0.9),
              left: getResponsiveValue('-17px', '74px', '115px'),
              top: getResponsiveValue('117px', '209px', '327px'),
              width: getResponsiveValue('133px', '217px', '339px'),
              height: getResponsiveValue('217px', '213px', '333px')
            }}
          >
            <div 
              style={{ 
                position: getResponsiveValue('absolute', 'absolute', 'absolute'),
                top: getResponsiveValue(0, 0, 0),
                left: getResponsiveValue(0, 0, 0),
                width: getResponsiveValue('100%', '100%', '100%'),
                height: getResponsiveValue('100%', '100%', '100%'),
                backgroundRepeat: getResponsiveValue('no-repeat', 'no-repeat', 'no-repeat'),
                backgroundSize: getResponsiveValue('cover', 'cover', 'cover'),
                backgroundImage: 'url(/images/18.jpg)',
                backgroundPosition: '70% 70%'
              }}
            ></div>
          </div>

          {/* Third Image (Tablet/Desktop Only) */}
          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: getResponsiveValue('absolute', 'absolute', 'absolute'),
                left: getResponsiveValue('0px', '478px', '747px'),
                top: getResponsiveValue('0px', '207px', '324px'),
                width: getResponsiveValue('0px', '217px', '339px'),
                height: getResponsiveValue('0px', '215px', '336px')
              }}
            >
              <div 
                style={{ 
                  position: getResponsiveValue('absolute', 'absolute', 'absolute'),
                  top: getResponsiveValue(0, 0, 0),
                  left: getResponsiveValue(0, 0, 0),
                  width: getResponsiveValue('100%', '100%', '100%'),
                  height: getResponsiveValue('100%', '100%', '100%'),
                  backgroundRepeat: getResponsiveValue('no-repeat', 'no-repeat', 'no-repeat'),
                  backgroundSize: getResponsiveValue('cover', 'cover', 'cover'),
                  backgroundImage: 'url(/images/19.jpg)',
                  backgroundPosition: '80% 80%'
                }}
              ></div>
            </div>
          )}

          {/* Main Title */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('17px', '67px', '104px'),
              top: getResponsiveValue('57px', '65px', '101px'),
              width: getResponsiveValue('286px', '635px', '993px'),
              height: getResponsiveValue('85px', '32px', '50px')
            }}
          >
            <h2 
              style={{ 
                color: getResponsiveValue('#f9f2ec', '#f9f2ec', '#f9f2ec'),
                lineHeight: getResponsiveValue(1.2, 1.2, 1.2),
                letterSpacing: getResponsiveValue('0em', '0em', '0em'),
                fontFamily: getResponsiveValue('Noiretblanc', 'Noiretblanc', 'Noiretblanc'),
                fontWeight: getResponsiveValue(400, 400, 400),
                textTransform: getResponsiveValue('none', 'none', 'none'),
                fontStyle: getResponsiveValue('normal', 'normal', 'normal'),
                fontSize: getResponsiveValue('40px', '35px', '55px'),
                textAlign: getResponsiveValue('right', 'center', 'center')
              }}
            >
              EVENT SET-UP &amp; DECOR<br/>
            </h2>
          </div>

          {/* Subtitle */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('141px', '96px', '150px'),
              top: getResponsiveValue('154px', '105px', '164px'),
              width: getResponsiveValue('162px', '576px', '900px'),
              height: getResponsiveValue('32px', '14px', '22px')
            }}
          >
            <p 
              style={{ 
                color: getResponsiveValue('#f9f2ec', '#f9f2ec', '#f9f2ec'),
                lineHeight: getResponsiveValue(1.2, 1.2, 1.2),
                letterSpacing: getResponsiveValue('0.1em', '0.1em', '0.1em'),
                fontFamily: getResponsiveValue('Raleway', 'Raleway', 'Raleway'),
                fontWeight: getResponsiveValue(400, 400, 400),
                textTransform: getResponsiveValue('none', 'none', 'none'),
                fontStyle: getResponsiveValue('normal', 'normal', 'normal'),
                fontSize: getResponsiveValue('11px', '12px', '16px'),
                textAlign: getResponsiveValue('right', 'center', 'center')
              }}
            >
              WE HANDLE THE DETAILS, YOU ENJOY YOUR CELEBRATION<br/>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}