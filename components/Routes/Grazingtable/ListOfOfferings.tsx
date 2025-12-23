'use client'

import React, { useState, useEffect } from 'react';

const ListOfOfferings: React.FC = () => {
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
    <>
      <style jsx>{`
        @font-face {
          font-family: Noiretblanc;
          src: url('//static.showit.co/file/-2eCp0_jSgW6z2q5bKVLgA/shared/noiretblanc-webfont.woff');
        }
        @font-face {
          font-family: Strings;
          src: url('//static.showit.co/file/lbBSknNrRtmaP384hN7Xnw/shared/strings.woff');
        }
      `}</style>

      <div
        style={{ 
          position: 'relative',
          width: '100%',
          height: getResponsiveValue('1084px', '640px', '840px'),
          zIndex: 1 
        }}
      >
        <div
          style={{ 
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'rgba(30, 30, 30, 1)' 
          }}
        >
          <div
            style={{ 
              position: 'relative',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: getResponsiveValue('320px', '768px', '1200px')
            }}
          >
            {/* Element 0: Background Rectangle */}
            <div
              style={{
                position: 'absolute',
                left: getResponsiveValue('47px', '65px', '-14px'),
                top: getResponsiveValue('179px', '125px', '195px'),
                width: getResponsiveValue('226px', '260px', '406px'),
                height: getResponsiveValue('222px', '356px', '556px')
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(239, 216, 201, 1)',
                }}
              />
            </div>

            {/* Element 1: Main Image */}
            <div
              style={{
                position: 'absolute',
                left: getResponsiveValue('61px', '71px', '-1px'),
                top: getResponsiveValue('192px', '134px', '209px'),
                width: getResponsiveValue('199px', '244px', '381px'),
                height: getResponsiveValue('196px', '336px', '525px')
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                  backgroundImage: "url('/images/33.jpg')",
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '130%',
                  backgroundPosition: getResponsiveValue('100% 60%', '90% 40%', '90% 40%'),
                  borderRadius: 'inherit',
                }}
              />
            </div>

            {/* Element 2: Button Border Container */}
            <div
              style={{
                position: 'absolute',
                left: getResponsiveValue('33px', '351px', '439px'),
                top: getResponsiveValue('971px', '461px', '720px'),
                width: getResponsiveValue('255px', '154px', '241px'),
                height: getResponsiveValue('54px', '31px', '49px')
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderColor: 'rgba(249, 242, 236, 1)',
                  borderWidth: '1px',
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  borderStyle: 'solid',
                  borderRadius: 'inherit',
                }}
              />
            </div>

            {/* Element 3: Button Link */}
            <a
              href="https://www.honeybook.com/widget/glam_haus_event_charcuterie_co_229113/cf_id/62f168cacd6a040d96949f20"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                left: getResponsiveValue('41px', '361px', '453px'),
                top: getResponsiveValue('985px', '467px', '730px'),
                width: getResponsiveValue('239px', '136px', '213px'),
                height: getResponsiveValue('27px', '19px', '29px')
              }}
            >
              <nav
                style={{
                  color: 'rgba(249, 242, 236, 1)',
                  textTransform: 'uppercase',
                  lineHeight: '2.2',
                  letterSpacing: '0.1em',
                  fontSize: getResponsiveValue('12px', '9px', '14px'),
                  textAlign: 'center',
                  fontFamily: 'Raleway',
                  fontWeight: 400,
                  fontStyle: 'normal',
                }}
              >
                place an order
              </nav>
            </a>

            {/* Element 4: Bulleted List */}
            <div
              style={{
                position: 'absolute',
                left: getResponsiveValue('15px', '351px', '436px'),
                top: getResponsiveValue('422px', '193px', '302px'),
                width: getResponsiveValue('314px', '408px', '685px'),
                height: getResponsiveValue('241px', '102px', '160px')
              }}
            >
              <div
                style={{
                  color: 'rgba(249, 242, 236, 1)',
                  textTransform: 'none',
                  lineHeight: getResponsiveValue('2', '1.8', '1.8'),
                  letterSpacing: '0em',
                  fontSize: getResponsiveValue('13px', '10px', '16px'),
                  textAlign: 'left',
                  fontFamily: 'Raleway',
                  fontWeight: 400,
                  fontStyle: 'normal',
                }}
              >
                <ul style={{
                  listStyleType: 'disc',
                  listStylePosition: 'outside',
                  paddingLeft: '20px',
                  margin: 0,
                }}>
                  <li>Breath-takingly designed and expertly crafted&nbsp;</li>
                  <li>Overflowing with gourmet cheeses, hand-sliced charcuterie, fresh fruit, artisanal breads</li>
                  <li>An array of dips, spreads &amp; jams</li>
                  <li>Meticulous attention to detail with layers of textures, colors &amp; flavors</li>
                  <li>Complemented with seasonal garnishes, fresh floral &amp; premium decor</li>
                  <li>Perfect for weddings, corporate events and private parties</li>
                </ul>
              </div>
            </div>

            {/* Element 5: GRAZING Text */}
            <div
              style={{
                position: 'absolute',
                left: getResponsiveValue('88px', '351px', '327px'),
                top: getResponsiveValue('62px', '93px', '145px'),
                width: getResponsiveValue('211px', '377px', '589px'),
                height: getResponsiveValue('62px', '57px', '89px')
              }}
            >
              <p
                style={{
                  color: 'rgba(249, 242, 236, 1)',
                  fontSize: getResponsiveValue('45px', '60px', '94px'),
                  textAlign: getResponsiveValue('justify', 'center', 'center'),
                  fontFamily: 'Noiretblanc',
                  fontWeight: 400,
                  fontStyle: 'normal',
                }}
              >
                GRAZING
              </p>
            </div>

            {/* Element 6: Glam Haus Text */}
            <div
              style={{
                position: 'absolute',
                left: getResponsiveValue('38px', '351px', '361px'),
                top: getResponsiveValue('11px', '37px', '58px'),
                width: getResponsiveValue('284px', '263px', '411px'),
                height: getResponsiveValue('69px', '57px', '89px'),
                transform: 'rotate(355deg)'
              }}
            >
              <p
                style={{
                  color: 'rgba(249, 242, 236, 1)',
                  fontSize: getResponsiveValue('49px', '54px', '85px'),
                  fontFamily: 'Strings',
                  fontWeight: 400,
                  fontStyle: 'normal',
                }}
              >
                Glam Haus
              </p>
            </div>

            {/* Element 7: Decorative Line */}
            <div
              style={{
                position: 'absolute',
                left: getResponsiveValue('38px', '537px', '682px'),
                top: getResponsiveValue('98px', '72px', '113px'),
                width: getResponsiveValue('44px', '69px', '108px'),
                height: '1px'
              }}
            >
              <svg
                style={{
                  width: getResponsiveValue('44px', '69px', '108px'),
                  height: '1px',
                  stroke: 'rgba(249, 242, 236, 1)',
                  transform: 'scaleX(1)',
                  padding: '0.5px',
                  verticalAlign: 'top',
                  overflow: 'visible',
                  pointerEvents: 'none',
                  boxSizing: 'content-box',
                }}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  style={{
                    strokeLinecap: 'butt',
                    strokeWidth: '1',
                    strokeDasharray: 'none',
                    pointerEvents: 'all',
                  }}
                />
              </svg>
            </div>

            {/* Element 8: STARTING AT Text */}
            <div
              style={{
                position: 'absolute',
                left: getResponsiveValue('-186px', '351px', '473px'),
                top: getResponsiveValue('132px', '166px', '259px'),
                width: getResponsiveValue('692px', '189px', '296px'),
                height: getResponsiveValue('17px', '12px', '19px')
              }}
            >
              <p
                style={{
                  color: 'rgba(249, 242, 236, 1)',
                  textTransform: 'uppercase',
                  lineHeight: '1.8',
                  letterSpacing: '0.1em',
                  fontSize: getResponsiveValue('12px', '9px', '14px'),
                  textAlign: 'center',
                  fontFamily: 'Montserrat',
                  fontWeight: 500,
                  fontStyle: 'normal',
                }}
              >
                STARTING AT $19 PER PERSON
              </p>
            </div>

            {/* Element 9: Bottom Paragraph */}
            <div
              style={{
                position: 'absolute',
                left: getResponsiveValue('20px', '351px', '439px'),
                top: getResponsiveValue('709px', '323px', '505px'),
                width: getResponsiveValue('281px', '380px', '594px'),
                height: getResponsiveValue('205px', '102px', '160px')
              }}
            >
              <p
                style={{
                  color: 'rgba(249, 242, 236, 1)',
                  textTransform: 'none',
                  lineHeight: '1.6',
                  letterSpacing: '0em',
                  fontSize: getResponsiveValue('13px', '10px', '16px'),
                  textAlign: 'justify',
                  fontFamily: 'Raleway',
                  fontWeight: 400,
                  fontStyle: 'normal',
                }}
              >
                For those seeking a <i>touch more indulgence</i>, our light meal options include exquisite favorites like pineapple chicken salad sandwiches, a vibrant strawberry pecan feta or goat cheese salad, and decadent red pepper pistachio hummus.<br /><br />Plus, we offer a range of fabulous add-ons—think lush greenery, chic rental display pieces to elevate the table, stylish decor, and more—to make your spread <i>truly spectacular!</i><br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListOfOfferings;