'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const MainMenu: React.FC = () => {
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

  // Helper function to get responsive values
  const getResponsiveValue = <T,>(mobile: T, tablet: T, desktop: T): T => {
    if (screenSize === 'mobile') return mobile
    if (screenSize === 'tablet') return tablet
    return desktop
  }

  const isMobile = screenSize === 'mobile'
  const isTablet = screenSize === 'tablet'
  const isDesktop = screenSize === 'desktop'

  return (
    <div 
      style={{
        position: 'relative',
        zIndex: 17,
        height: getResponsiveValue('65px', '100px', '165px')
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: getResponsiveValue('rgba(30,30,30,1)', 'rgba(249,242,236,1)', 'rgba(249,242,236,1)')
        }}
      >
        <div 
          style={{
            position: 'relative',
            height: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: getResponsiveValue('320px', '768px', '1200px')
          }}
        >
          
          {/* Element 0: Decorative Line - Tablet and Desktop */}
          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: 'absolute',
                top: 0,
                height: getResponsiveValue('0px', '1px', '1px'),
                left: getResponsiveValue('0px', '-20px', '-30px'),
                width: getResponsiveValue('0px', '808px', '1242px')
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(99,99,99,1)'
              }}></div>
            </div>
          )}

          {/* Element 1: Link - "view our GIFTS" - Tablet and Desktop */}
          {(isTablet || isDesktop) && (
            <Link 
              href="/gifting" 
              target="_self"
              style={{
                position: 'absolute',
                height: getResponsiveValue('0px', '18px', '18px'),
                right: getResponsiveValue('0px', '-60px', '-90px'),
                top: getResponsiveValue('0px', '62px', '102px'),
                width: getResponsiveValue('0px', '140px', '152px')
              }}
            >
              <nav style={{
                color: 'rgba(30,30,30,1)',
                textTransform: 'uppercase',
                lineHeight: 1,
                letterSpacing: '0.2em',
                fontSize: '11px',
                textAlign: 'center',
                fontFamily: 'Raleway',
                fontWeight: 'normal'
              }}>
                <b>view our GIFTS</b>
              </nav>
            </Link>
          )}

          {/* Element 2: Text - "Looking for the perfect gift..." - Tablet and Desktop */}
          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: 'absolute',
                right: getResponsiveValue('0px', '-80px', '-125px'),
                top: getResponsiveValue('0px', '28px', '44px'),
                width: getResponsiveValue('0px', '200px', '226px'),
                height: getResponsiveValue('0px', '38px', '42px')
              }}
            >
              <p 
                style={{
                  color: 'rgba(30,30,30,1)',
                  lineHeight: 1,
                  textAlign: 'center',
                  fontFamily: 'Noiretblanc',
                  fontWeight: 'normal',
                  fontSize: getResponsiveValue('0px', '18px', '20px')
                }}
              >
                Looking for the perfect gift for someone special?
              </p>
            </div>
          )}

          {/* Element 3: SVG Line - Left Vertical - Tablet and Desktop */}
          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: 'absolute',
                width: getResponsiveValue('0px', '154px', '154px'),
                height: getResponsiveValue('0px', '1px', '1px'),
                left: getResponsiveValue('0px', '100px', '135px'),
                top: getResponsiveValue('0px', '4px', '6px')
              }}
            >
              <svg 
                style={{
                  verticalAlign: 'top',
                  overflow: 'visible',
                  pointerEvents: 'none',
                  boxSizing: 'content-box',
                  stroke: 'rgba(99,99,99,1)',
                  transform: 'scaleX(1)',
                  padding: '0.5px',
                  height: '154px',
                  width: 0
                }}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100%"
                  style={{
                    pointerEvents: 'auto',
                    strokeWidth: 1
                  }}
                  strokeLinecap="butt"
                  strokeDasharray="none"
                />
              </svg>
            </div>
          )}

          {/* Element 4: SVG Line - Right Vertical - Tablet and Desktop */}
          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: 'absolute',
                height: getResponsiveValue('0px', '1px', '1px'),
                right: getResponsiveValue('0px', '110px', '150px'),
                top: getResponsiveValue('0px', '4px', '6px')
              }}
            >
              <svg 
                style={{
                  verticalAlign: 'top',
                  overflow: 'visible',
                  pointerEvents: 'none',
                  boxSizing: 'content-box',
                  stroke: 'rgba(99,99,99,1)',
                  transform: 'scaleX(1)',
                  padding: '0.5px',
                  height: '154px',
                  width: 0
                }}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100%"
                  style={{
                    pointerEvents: 'auto',
                    strokeWidth: 1
                  }}
                  strokeLinecap="butt"
                  strokeDasharray="none"
                />
              </svg>
            </div>
          )}

          {/* Element 5: Link - "view our experiences" - Tablet and Desktop */}
          {(isTablet || isDesktop) && (
            <Link 
              href="/experiences" 
              target="_self"
              style={{
                position: 'absolute',
                height: getResponsiveValue('0px', '18px', '18px'),
                left: getResponsiveValue('0px', '-75px', '-120px'),
                top: getResponsiveValue('0px', '61px', '101px'),
                width: getResponsiveValue('0px', '200px', '227px')
              }}
            >
              <nav style={{
                color: 'rgba(30,30,30,1)',
                textTransform: 'uppercase',
                lineHeight: 1,
                letterSpacing: '0.2em',
                fontSize: '11px',
                textAlign: 'center',
                fontFamily: 'Raleway',
                fontWeight: 'normal'
              }}>
                <b>view our experiences</b>
                <br />
              </nav>
            </Link>
          )}

          {/* Element 6: Text - "Need an experience?" - Tablet and Desktop */}
          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('0px', '-70px', '-110px'),
                top: getResponsiveValue('0px', '35px', '53px'),
                width: getResponsiveValue('0px', '185px', '207px'),
                height: getResponsiveValue('0px', '19px', '21px')
              }}
            >
              <p 
                style={{
                  color: 'rgba(30,30,30,1)',
                  lineHeight: 1,
                  textAlign: 'center',
                  fontFamily: 'Noiretblanc',
                  fontWeight: 'normal',
                  fontSize: getResponsiveValue('0px', '18px', '20px')
                }}
              >
                Need an experience?
                <br />
              </p>
            </div>
          )}

          {/* Element 7: Main Heading - Center Text */}
          <div 
            style={{ 
              position: 'absolute',
              left: getResponsiveValue('-70px', '180px', '374px'),
              top: getResponsiveValue('48px', '63px', '101px'),
              width: getResponsiveValue('466px', '410px', '453px'),
              height: getResponsiveValue('31px', '35px', '39px'),
              transform: 'scale(1.20312, 1.20312) translate(-40px, 10.7208px)',
              transformOrigin: 'top left'
            }}
          >
            <h2 
              style={{
                lineHeight: 1.2,
                textAlign: 'center',
                fontFamily: 'Raleway',
                fontWeight: 'normal',
                color: getResponsiveValue('rgba(249,242,236,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                fontSize: getResponsiveValue('13px', '15px', '17px')
              }}
            >
              Curated Experiences + Thoughtful Gifting + Events
            </h2>
          </div>

          {/* Element 8: SVG Line - Horizontal - Tablet and Desktop */}
          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: 'absolute',
                height: getResponsiveValue('0px', '10px', '10px'),
                left: getResponsiveValue('0px', '235px', '353px'),
                top: getResponsiveValue('0px', '58px', '91px'),
                width: getResponsiveValue('0px', '298px', '495px')
              }}
            >
              <svg 
                style={{
                  width: getResponsiveValue('0px', '298px', '495px'),
                  verticalAlign: 'top',
                  overflow: 'visible',
                  pointerEvents: 'none',
                  boxSizing: 'content-box',
                  stroke: 'rgba(30,30,30,1)',
                  transform: 'scaleX(1)',
                  padding: '0.5px',
                  height: '1px'
                }}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  style={{
                    pointerEvents: 'auto',
                    strokeWidth: 1
                  }}
                  strokeLinecap="butt"
                  strokeDasharray="none"
                />
              </svg>
            </div>
          )}

          {/* Element 9: Link - "ELEV8 MOMENTS" - Tablet and Desktop */}
          {(isTablet || isDesktop) && (
            <Link 
              href="#/" 
              target="_self"
              style={{
                position: 'absolute',
                left: getResponsiveValue('0px', '135px', '275px'),
                top: getResponsiveValue('0px', '10px', '42px'),
                width: getResponsiveValue('0px', '500px', '651px'),
                height: getResponsiveValue('0px', '38px', '50px')
              }}
            >
              <p 
                style={{
                  color: 'rgba(30,30,30,1)',
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                  textAlign: 'center',
                  fontFamily: 'Noiretblanc',
                  fontWeight: 'normal',
                  fontSize: getResponsiveValue('0px', '38px', '50px')
                }}
              >
                ELEV8 MOMENTS
              </p>
            </Link>
          )}

          {/* Element 10: Link - "ELEV8 MOMENTS" - Mobile Only */}
          {isMobile && (
            <Link 
              href="#/" 
              target="_self"
              style={{ 
                position: 'absolute',
                display: 'block',
                left: getResponsiveValue('-85px', '0px', '0px'),
                top: getResponsiveValue('10px', '0px', '0px'),
                width: getResponsiveValue('363px', '0px', '0px'),
                height: getResponsiveValue('41px', '0px', '0px'),
                transform: 'scale(1.20312, 1.20312) translate(27.0974px, 5.14935px)',
                transformOrigin: 'top left'
              }}
            >
              <p style={{
                color: getResponsiveValue('rgba(249,242,236,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                textTransform: 'uppercase',
                lineHeight: 1.2,
                fontSize: getResponsiveValue('35px', '0px', '0px'),
                textAlign: 'center',
                fontFamily: 'Noiretblanc',
                fontWeight: 'normal'
              }}>
                ELEV8 MOMENTS
              </p>
            </Link>
          )}

        </div>
      </div>
    </div>
  );
};

export default MainMenu;
