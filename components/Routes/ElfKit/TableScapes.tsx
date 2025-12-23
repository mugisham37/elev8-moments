'use client'

import { useState, useEffect } from 'react'

const TableScapes = () => {
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

  // List items data
  const listItems = [
    {
      text: "Corporate gifting packages designed to strengthen business relationships and celebrate team achievements with elegant, customized solutions."
    },
    {
      text: "Personal celebration gifts for special occasions including birthdays, anniversaries, holidays, and milestone moments with thoughtful, curated touches."
    },
    {
      text: "Custom gift packages tailored to your specific needs, branding, and occasion with premium packaging and meaningful elements that create lasting impressions."
    }
  ]

  // Star SVG component
  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: 'rgba(205,8,8,1)', width: '100%', height: '100%' }}>
      <path d="M256,75.51l45.16,137.61,144.84.43L329.08,299l44.35,137.88L256,352.12,138.57,436.91,182.92,299,66,213.55l144.84-.43L256,75.51m0-26A26,26,0,0,0,231.3,67.4L192,187.18l-126.07.37a26,26,0,0,0-15.26,47l101.76,74.4-38.6,120a26,26,0,0,0,40,29L256,384.19,358.21,458a26,26,0,0,0,40-29l-38.6-120,101.76-74.4a26,26,0,0,0-15.26-47L320,187.18,280.7,67.4A26,26,0,0,0,256,49.51Z"></path>
    </svg>
  )

  return (
    <div 
      style={{
        position: 'relative',
        zIndex: 2,
        height: getResponsiveValue('700px', '653px', '653px')
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: getResponsiveValue('rgba(250,231,226,1)', 'rgba(249,242,236,1)', 'rgba(249,242,236,1)')
        }}
      >
        <div 
          style={{
            position: 'relative',
            height: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: getResponsiveValue('320px', '768px', '966px')
          }}
        >
          {/* tablescapes_0 - Image */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('17px', '-86.7px', '-109px'),
              top: getResponsiveValue('622px', '147.9px', '186px'),
              width: getResponsiveValue('89px', '256.8px', '323px'),
              height: getResponsiveValue('117px', '327.5px', '412px'),
              transform: getResponsiveValue('scale(0.805, 0.805) translate(-12.7174px, -94.9565px)', '0px', '0px')
            }}
          >
            <div 
              style={{ 
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage: "url('/images/19.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: getResponsiveValue('contain', 'cover', 'cover'),
                backgroundPosition: getResponsiveValue('center', '70% 70%', '70% 70%')
              }}
            />
          </div>

          {/* tablescapes_1 - Image */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('-2px', '756px', '951px'),
              top: getResponsiveValue('-16px', '-16.7px', '-21px'),
              width: getResponsiveValue('87px', '241.7px', '304px'),
              height: getResponsiveValue('77px', '270.3px', '340px'),
              transform: getResponsiveValue('scale(0.805, 0.805) translate(-267.186px, -36.0932px)', '0px', '0px')
            }}
          >
            <div 
              style={{ 
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage: "url('/images/20.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>

          {/* tablescapes_2 - Image (Desktop Only) */}
          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: 'absolute',
                transition: 'opacity 500ms',
                left: getResponsiveValue('0px', '596.3px', '750px'),
                top: getResponsiveValue('0px', '361.7px', '455px'),
                width: getResponsiveValue('0px', '128px', '161px'),
                height: getResponsiveValue('0px', '182.1px', '229px'),
                transform: getResponsiveValue('0px', 'scale(0.805, 0.805) translate(-201.177px, -137.953px)', 'scale(0.805, 0.805) translate(-201.177px, -137.953px)')
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.2'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <div 
                style={{ 
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundImage: "url('/images/21.jpg')",
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '20% 20%'
                }}
              />
            </div>
          )}

          {/* tablescapes_3 - Image */}
          <div 
            style={{
              position: 'absolute',
              transition: 'opacity 500ms',
              left: getResponsiveValue('15px', '398.3px', '501px'),
              top: getResponsiveValue('192px', '361.7px', '455px'),
              width: getResponsiveValue('89px', '186px', '234px'),
              height: getResponsiveValue('117px', '182.1px', '229px'),
              transform: getResponsiveValue('scale(0.805, 0.805) translate(-149.702px, -137.953px)', '0px', '0px')
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.2'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <div 
              style={{ 
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage: "url('/images/22.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '20% 20%'
              }}
            />
          </div>

          {/* tablescapes_4 - Image */}
          <div 
            style={{
              position: 'absolute',
              transition: 'opacity 500ms',
              left: getResponsiveValue('208px', '191.6px', '241px'),
              top: getResponsiveValue('616px', '361.7px', '455px'),
              width: getResponsiveValue('114px', '196.4px', '247px'),
              height: getResponsiveValue('111px', '182.1px', '229px'),
              transform: getResponsiveValue('scale(0.805, 0.805) translate(-88.295px, -137.953px)', '0px', '0px')
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.2'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <div 
              style={{ 
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage: "url('/images/23.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '90% 90%'
              }}
            />
          </div>

          {/* tablescapes_5 - Image */}
          <div 
            style={{
              position: 'absolute',
              transition: 'opacity 500ms',
              left: getResponsiveValue('116px', '756px', '951px'),
              top: getResponsiveValue('192px', '266.3px', '335px'),
              width: getResponsiveValue('89px', '196.4px', '247px'),
              height: getResponsiveValue('117px', '292.6px', '368px'),
              transform: getResponsiveValue('scale(0.805, 0.805) translate(-260.283px, -125.72px)', '0px', '0px')
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.2'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <div 
              style={{ 
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage: "url('/images/24.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>

          {/* tablescapes_6 - Text "GIFTING OPTIONS" */}
          <div>
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('52px', '238.8px', '250px'),
                top: getResponsiveValue('61px', '26.2px', '33px'),
                width: getResponsiveValue('424px', '410.2px', '516px'),
                height: getResponsiveValue('41px', '58px', '73px'),
                transform: getResponsiveValue('scale(0.805, 0.805) translate(-132.261px, -16.8354px)', '0px', '0px')
              }}
            >
              <p 
                style={{
                  lineHeight: '1.4',
                  letterSpacing: '0em',
                  fontFamily: 'Noiretblanc',
                  fontWeight: 'normal',
                  color: 'rgba(0,0,0,1)',
                  fontSize: getResponsiveValue('40px', '44.5px', '56px'),
                  textAlign: getResponsiveValue('center', 'justify', 'justify') as 'center' | 'justify'
                }}
              >
                GIFTING OPTIONS
              </p>
            </div>
          </div>

          {/* tablescapes_7 - Text Description */}
          <div>
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('54px', '229.2px', '238px'),
                top: getResponsiveValue('120px', '78.7px', '99px'),
                width: getResponsiveValue('391px', '449.2px', '565px'),
                height: getResponsiveValue('59px', '37.4px', '47px'),
                transform: getResponsiveValue('scale(0.805, 0.805) translate(-126.084px, -31.3696px)', '0px', '0px')
              }}
            >
              <p 
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0em',
                  fontFamily: 'Raleway',
                  fontWeight: 'normal',
                  color: 'rgba(0,0,0,1)',
                  fontSize: getResponsiveValue('16px', '11.9px', '15px'),
                  textAlign: getResponsiveValue('center', 'left', 'left') as 'center' | 'left',
                  lineHeight: getResponsiveValue('1.6', '1.4', '1.4')
                }}
              >
                Celebrate moments that matter with our thoughtful gifting solutions designed for style, intention, and lasting impact.
              </p>
            </div>
          </div>

          {/* List Items Container - Absolutely positioned parent */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('13px', '205px', '220px'),
              top: getResponsiveValue('182px', '119.3px', '150px'),
              width: getResponsiveValue('280px', '409.4px', '515px')
            }}
          >
            {listItems.map((item, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: getResponsiveValue('10px', '4px', '5px'),
                  marginBottom: getResponsiveValue('20px', '15.9px', '20px')
                }}
              >
                {/* Star Icon */}
                <div 
                  style={{
                    flexShrink: 0,
                    width: getResponsiveValue('15px', '14.3px', '18px'),
                    height: getResponsiveValue('15px', '14.3px', '18px'),
                    marginTop: getResponsiveValue('2px', '4px', '4px')
                  }}
                >
                  <StarIcon />
                </div>
                
                {/* Text Content */}
                <p 
                  style={{
                    flex: 1,
                    textAlign: 'justify',
                    letterSpacing: '0em',
                    fontFamily: 'Raleway',
                    fontWeight: 'normal',
                    color: 'rgba(0,0,0,1)',
                    fontSize: getResponsiveValue('13px', '10.3px', '13px'),
                    lineHeight: getResponsiveValue('1.5', '1.4', '1.4'),
                    margin: 0
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Disclaimer - Text "*Custom options available" */}
          <div>
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('66px', '226.6px', '285px'),
                top: getResponsiveValue('572px', '320.4px', '403px'),
                width: getResponsiveValue('200px', '89.9px', '113px'),
                height: getResponsiveValue('17px', '16.7px', '21px'),
                transform: getResponsiveValue('scale(0.805, 0.805) translate(-82.7236px, -100.165px)', '0px', '0px')
              }}
            >
              <p 
                style={{
                  textAlign: 'justify',
                  letterSpacing: '0em',
                  fontFamily: 'Raleway',
                  fontWeight: 'normal',
                  color: 'rgba(0,0,0,1)',
                  fontSize: getResponsiveValue('12px', '8px', '10px'),
                  lineHeight: getResponsiveValue('1.8', '1.4', '1.4')
                }}
              >
                *Custom options available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableScapes;
