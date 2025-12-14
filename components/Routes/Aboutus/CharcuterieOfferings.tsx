'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CharcuterieOfferings: React.FC = () => {
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
        background: '#fae7e2',
        width: getResponsiveValue('420px', '768px', '1700px'),
        height: getResponsiveValue('864px', '0px', '1182px')
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div 
          style={{
            position: 'relative',
            height: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: getResponsiveValue('320px', '768px', '966px')
          }}
        >
          
          {/* Image 1 - Traditional Boards */}
          <div 
            style={{ 
              position: 'absolute',
              opacity: 1,
              left: getResponsiveValue('-66px', '0px', '8.51386368px'),
              top: getResponsiveValue('188px', '0px', '230px'),
              width: getResponsiveValue('185px', '0px', '248px'),
              height: getResponsiveValue('110px', '0px', '157px'),
              transform: 'scale(0.805)'
            }}
          >
            <div 
              style={{ 
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(/images/19.jpg)`
              }}
            />
          </div>

          {/* Image 2 - Holiday Boards (Mobile Only) */}
          {screenSize === 'mobile' && (
            <div 
              style={{
                position: 'absolute',
                left: '-70px',
                top: '657px',
                width: '185px',
                height: '110px'
              }}
            >
              <div 
                style={{ 
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(/images/30.jpg)`
                }}
              />
            </div>
          )}

          {/* Image 3 - Holiday Boards (Desktop) */}
          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('0px', '0px', '8.51386368px'),
                top: getResponsiveValue('0px', '0px', '878px'),
                width: getResponsiveValue('0px', '0px', '248px'),
                height: getResponsiveValue('0px', '0px', '157px'),
                transform: 'scale(0.805)'
              }}
            >
              <div 
                style={{ 
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(/images/30.jpg)`
                }}
              />
            </div>
          )}

          {/* Traditional Boards Link */}
          <Link 
            href="/traditional-boards"
            style={{
              position: 'absolute',
              left: getResponsiveValue('91px', '0px', '213.696px'),
              top: getResponsiveValue('188px', '0px', '234px'),
              width: getResponsiveValue('202px', '0px', '258px'),
              height: getResponsiveValue('22px', '0px', '41px'),
              transform: 'scale(0.805)'
            }}
          >
            <p 
              style={{
                fontFamily: 'Montserrat',
                fontWeight: 500,
                color: '#1e1e1e',
                textAlign: 'left',
                textTransform: 'uppercase',
                fontSize: getResponsiveValue('14px', '0px', '18px'),
                lineHeight: '1.1',
                letterSpacing: '0.1em'
              }}
            >
              TRADITIONAL&nbsp;<br />BOARDS + BOXES<br />
            </p>
          </Link>

          {/* Divider Line 1 */}
          <div 
            style={{
              position: 'absolute',
              background: '#1e1e1e',
              left: getResponsiveValue('27px', '0px', '212.8px'),
              top: getResponsiveValue('315px', '0px', '370px'),
              width: getResponsiveValue('266px', '0px', '489px'),
              height: getResponsiveValue('1px', '0px', '1px'),
              transform: 'scale(0.805)'
            }}
          />

          {/* Title - Elev8 Moments */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('-70px', '0px', '64.512px'),
              top: getResponsiveValue('24px', '0px', '46px'),
              width: getResponsiveValue('398px', '0px', '710px'),
              height: getResponsiveValue('56px', '0px', '78px'),
              transform: 'scale(0.805)'
            }}
          >
            <p 
              style={{
                fontFamily: 'Strings',
                color: '#1e1e1e',
                textAlign: 'center',
                fontSize: getResponsiveValue('38px', '0px', '60px'),
                lineHeight: getResponsiveValue('1.2', '0', '1.6')
              }}
            >
              Elev8 Moments<br />
            </p>
          </div>

          {/* Arrow Icon 1 */}
          <Link 
            href="/traditional-boards"
            style={{
              position: 'absolute',
              left: getResponsiveValue('251px', '0px', '309.12px'),
              top: getResponsiveValue('180px', '0px', '215px'),
              width: getResponsiveValue('30px', '0px', '34px'),
              height: getResponsiveValue('29px', '0px', '96px'),
              transform: 'scale(0.805)'
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '100%', height: '100%', fill: '#1e1e1e' }}>
                <polygon points="399.22 206.93 391.04 215.72 427.91 250 60 250 60 262 427.94 262 391.04 296.29 399.22 305.08 452 256.01 399.22 206.93" />
              </svg>
            </div>
          </Link>

          {/* Traditional Boards Description */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('90px', '0px', '213.696px'),
              top: getResponsiveValue('228px', '0px', '292px'),
              width: getResponsiveValue('210px', '0px', '522px'),
              height: getResponsiveValue('78px', '0px', '76px'),
              transform: 'scale(0.805)'
            }}
          >
            <p 
              style={{
                fontFamily: 'Raleway',
                color: '#1e1e1e',
                textAlign: 'justify',
                fontSize: getResponsiveValue('13px', '0px', '16px'),
                lineHeight: getResponsiveValue('1.4', '0', '1.7')
              }}
            >
              Our traditional boards include an assortment of cheeses, meats, spreads/dips, crackers, fruit (dried &amp; fresh), nuts, sweet treats, etc.<br />
            </p>
          </div>

          {/* Arrow Icon 2 */}
          <Link 
            href="/grazing-tables"
            style={{
              position: 'absolute',
              left: getResponsiveValue('252px', '0px', '317.632px'),
              top: getResponsiveValue('646px', '0px', '856px'),
              width: getResponsiveValue('30px', '0px', '34px'),
              height: getResponsiveValue('36px', '0px', '96px'),
              transform: 'scale(0.805)'
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '100%', height: '100%', fill: '#1e1e1e' }}>
                <polygon points="399.22 206.93 391.04 215.72 427.91 250 60 250 60 262 427.94 262 391.04 296.29 399.22 305.08 452 256.01 399.22 206.93" />
              </svg>
            </div>
          </Link>

          {/* Holiday Boards Link */}
          <Link 
            href="/grazing-tables"
            style={{
              position: 'absolute',
              left: getResponsiveValue('91px', '0px', '215.04px'),
              top: getResponsiveValue('657px', '0px', '897px'),
              width: getResponsiveValue('202px', '0px', '245px'),
              height: getResponsiveValue('22px', '0px', '41px'),
              transform: 'scale(0.805)'
            }}
          >
            <p 
              style={{
                fontFamily: 'Montserrat',
                fontWeight: 500,
                color: '#1e1e1e',
                textAlign: 'left',
                textTransform: 'uppercase',
                fontSize: getResponsiveValue('14px', '0px', '18px'),
                lineHeight: '1.1',
                letterSpacing: '0.1em'
              }}
            >
              HOLIDAY BOARDS<br />
            </p>
          </Link>

          {/* Holiday Boards Description */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('91px', '0px', '216.384px'),
              top: getResponsiveValue('681px', '0px', '930px'),
              width: getResponsiveValue('210px', '0px', '553px'),
              height: getResponsiveValue('94px', '0px', '76px'),
              transform: 'scale(0.805)'
            }}
          >
            <p 
              style={{
                fontFamily: 'Raleway',
                color: '#1e1e1e',
                textAlign: 'justify',
                fontSize: getResponsiveValue('13px', '0px', '16px'),
                lineHeight: getResponsiveValue('1.4', '0', '1.7')
              }}
            >
              The perfect centerpiece for festive entertaining, offering a delightful selection of meats, cheeses, and seasonal flavors to elevate any holiday gathering.<br />
            </p>
          </div>

          {/* Main Heading - OUR STORY */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('-39px', '0px', '39.872px'),
              top: getResponsiveValue('72px', '0px', '119px'),
              width: getResponsiveValue('398px', '0px', '1023px'),
              height: getResponsiveValue('56px', '0px', '43px'),
              transform: 'scale(0.805)'
            }}
          >
            <p 
              style={{
                fontFamily: 'Noiretblanc',
                color: '#1e1e1e',
                textAlign: 'center',
                fontSize: getResponsiveValue('32px', '0px', '55px'),
                lineHeight: getResponsiveValue('1.2', '0', '1.6')
              }}
            >
              OUR STORY<br />
            </p>
          </div>

          {/* Decorative Line */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('202px', '0px', '275.968px'),
              top: getResponsiveValue('47px', '0px', '95px'),
              width: getResponsiveValue('58px', '0px', '189px'),
              height: getResponsiveValue('1px', '0px', '1px')
            }}
          >
            <svg style={{ width: '100%', height: '100%', strokeWidth: '0.805px' }}>
              <line 
                x1="0" y1="0" x2="100%" y2="0" 
                style={{ stroke: '#1e1e1e' }}
                strokeLinecap="butt"
                strokeDasharray="none"
              />
            </svg>
          </div>

          {/* Image 4 - Brunch Boards (Mobile Only) */}
          {screenSize === 'mobile' && (
            <div 
              style={{
                position: 'absolute',
                left: '-76px',
                top: '340px',
                width: '185px',
                height: '110px'
              }}
            >
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(/images/16.jpg)`
                }}
              />
            </div>
          )}

          {/* Image 5 - Brunch Boards (Desktop) */}
          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('0px', '0px', '8.51386368px'),
                top: getResponsiveValue('0px', '0px', '449px'),
                width: getResponsiveValue('0px', '0px', '248px'),
                height: getResponsiveValue('0px', '0px', '157px'),
                transform: 'scale(0.805)'
              }}
            >
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(/images/16.jpg)`
                }}
              />
            </div>
          )}

          {/* Divider Line 2 */}
          <div 
            style={{
              position: 'absolute',
              background: '#1e1e1e',
              left: getResponsiveValue('27px', '0px', '214.592px'),
              top: getResponsiveValue('474px', '0px', '592px'),
              width: getResponsiveValue('266px', '0px', '489px'),
              height: getResponsiveValue('1px', '0px', '1px'),
              transform: 'scale(0.805)'
            }}
          />

          {/* Arrow Icon 3 */}
          <Link 
            href="/grazing-tables"
            style={{
              position: 'absolute',
              left: getResponsiveValue('251px', '0px', '310.912px'),
              top: getResponsiveValue('326px', '0px', '443px'),
              width: getResponsiveValue('30px', '0px', '34px'),
              height: getResponsiveValue('36px', '0px', '96px'),
              transform: 'scale(0.805)'
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '100%', height: '100%', fill: '#1e1e1e' }}>
                <polygon points="399.22 206.93 391.04 215.72 427.91 250 60 250 60 262 427.94 262 391.04 296.29 399.22 305.08 452 256.01 399.22 206.93" />
              </svg>
            </div>
          </Link>

          {/* Brunch Boards Link */}
          <Link 
            href="/grazing-tables"
            style={{
              position: 'absolute',
              left: getResponsiveValue('90px', '0px', '213.696px'),
              top: getResponsiveValue('333px', '0px', '461px'),
              width: getResponsiveValue('202px', '0px', '245px'),
              height: getResponsiveValue('22px', '0px', '41px'),
              transform: 'scale(0.805)'
            }}
          >
            <p 
              style={{
                fontFamily: 'Montserrat',
                fontWeight: 500,
                color: '#1e1e1e',
                textAlign: 'left',
                textTransform: 'uppercase',
                fontSize: getResponsiveValue('14px', '0px', '18px'),
                lineHeight: '1.1',
                letterSpacing: '0.1em'
              }}
            >
              BRUNCH-STYLE<br />BOARDS + BOXES<br />
            </p>
          </Link>

          {/* Brunch Boards Description */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('90px', '0px', '213.696px'),
              top: getResponsiveValue('372px', '0px', '517px'),
              width: getResponsiveValue('210px', '0px', '553px'),
              height: getResponsiveValue('94px', '0px', '76px'),
              transform: 'scale(0.805)'
            }}
          >
            <p 
              style={{
                fontFamily: 'Raleway',
                color: '#1e1e1e',
                textAlign: 'justify',
                fontSize: getResponsiveValue('13px', '0px', '16px'),
                lineHeight: getResponsiveValue('1.4', '0', '1.7')
              }}
            >
              Discover our brunch-inspired charcuterie boards, thoughtfully prepared with a selection of light, brunch-friendly meats and cheeses.&nbsp;<br />
            </p>
          </div>

          {/* Image 6 - Manly Boards (Mobile Only) */}
          {screenSize === 'mobile' && (
            <div 
              style={{
                position: 'absolute',
                left: '-63px',
                top: '498px',
                width: '185px',
                height: '110px'
              }}
            >
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(/images/32.jpg)`
                }}
              />
            </div>
          )}

          {/* Image 7 - Manly Boards (Desktop) */}
          {(isTablet || isDesktop) && (
            <div 
              style={{
                position: 'absolute',
                left: getResponsiveValue('0px', '0px', '8.51386368px'),
                top: getResponsiveValue('0px', '0px', '665px'),
                width: getResponsiveValue('0px', '0px', '248px'),
                height: getResponsiveValue('0px', '0px', '157px'),
                transform: 'scale(0.805)'
              }}
            >
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(/images/32.jpg)`
                }}
              />
            </div>
          )}

          {/* Divider Line 3 */}
          <div 
            style={{
              position: 'absolute',
              background: '#1e1e1e',
              left: getResponsiveValue('28px', '0px', '215.04px'),
              top: getResponsiveValue('631px', '0px', '802px'),
              width: getResponsiveValue('266px', '0px', '489px'),
              height: getResponsiveValue('1px', '0px', '1px'),
              transform: 'scale(0.805)'
            }}
          />

          {/* Arrow Icon 4 */}
          <Link 
            href="/grazing-tables"
            style={{
              position: 'absolute',
              left: getResponsiveValue('252px', '0px', '310.912px'),
              top: getResponsiveValue('483px', '0px', '656px'),
              width: getResponsiveValue('30px', '0px', '34px'),
              height: getResponsiveValue('36px', '0px', '96px'),
              transform: 'scale(0.805)'
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '100%', height: '100%', fill: '#1e1e1e' }}>
                <polygon points="399.22 206.93 391.04 215.72 427.91 250 60 250 60 262 427.94 262 391.04 296.29 399.22 305.08 452 256.01 399.22 206.93" />
              </svg>
            </div>
          </Link>

          {/* Manly Boards Link */}
          <Link 
            href="/mens-boards"
            style={{
              position: 'absolute',
              left: getResponsiveValue('91px', '0px', '213.696px'),
              top: getResponsiveValue('490px', '0px', '675px'),
              width: getResponsiveValue('202px', '0px', '245px'),
              height: getResponsiveValue('22px', '0px', '41px'),
              transform: 'scale(0.805)'
            }}
          >
            <p 
              style={{
                fontFamily: 'Montserrat',
                fontWeight: 500,
                color: '#1e1e1e',
                textAlign: 'left',
                textTransform: 'uppercase',
                fontSize: getResponsiveValue('14px', '0px', '18px'),
                lineHeight: '1.1',
                letterSpacing: '0.1em'
              }}
            >
              MANLY<br />BOARDS + BOXES<br />
            </p>
          </Link>

          {/* Manly Boards Description */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('91px', '0px', '213.696px'),
              top: getResponsiveValue('529px', '0px', '727px'),
              width: getResponsiveValue('210px', '0px', '560px'),
              height: getResponsiveValue('94px', '0px', '76px'),
              transform: 'scale(0.805)'
            }}
          >
            <p 
              style={{
                fontFamily: 'Raleway',
                color: '#1e1e1e',
                textAlign: 'justify',
                fontSize: getResponsiveValue('13px', '0px', '16px'),
                lineHeight: getResponsiveValue('1.4', '0', '1.7')
              }}
            >
              Curated for hearty appetites, featuring a robust selection of meats, cheeses, pickled items, candied bacon, stuffed peppers, and optional add-ons.<br />
            </p>
          </div>

          {/* Button Container */}
          <div 
            style={{
              position: 'absolute',
              border: '1px solid #1e1e1e',
              background: 'transparent',
              left: getResponsiveValue('48px', '0px', '215.04px'),
              top: getResponsiveValue('812px', '0px', '1098px'),
              width: getResponsiveValue('224px', '0px', '241px'),
              height: getResponsiveValue('48px', '0px', '51px'),
              transform: 'scale(0.805)'
            }}
          />

          {/* Button Text */}
          <a 
            href="https://www.honeybook.com/widget/glam_haus_event_charcuterie_co_229113/cf_id/62f168cacd6a040d96949f20"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              left: getResponsiveValue('48px', '0px', '221.312px'),
              top: getResponsiveValue('825px', '0px', '1108px'),
              width: getResponsiveValue('224px', '0px', '213px'),
              height: getResponsiveValue('21px', '0px', '29px'),
              transform: 'scale(0.805)'
            }}
          >
            <nav 
              style={{
                fontFamily: 'Raleway',
                color: '#1e1e1e',
                textAlign: 'center',
                textTransform: 'uppercase',
                fontSize: getResponsiveValue('11px', '0px', '14px'),
                lineHeight: '2.2',
                letterSpacing: '0.1em'
              }}
            >
              PLACE AN ORDER
            </nav>
          </a>

        </div>
      </div>
    </div>
  );
};

export default CharcuterieOfferings;