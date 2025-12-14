'use client'

import { useState, useEffect } from 'react';

const LoveNotes: React.FC = () => {
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
    <section 
      style={{ 
        position: getResponsiveValue('relative', 'relative', 'relative'),
        backgroundColor: getResponsiveValue('rgba(249,242,236,1)', 'rgba(249,242,236,1)', 'rgba(249,242,236,1)'),
        height: getResponsiveValue('1492px', '0px', '782.46px')
      }}
    >
      <div style={{ 
        position: getResponsiveValue('relative', 'relative', 'relative'),
        width: getResponsiveValue('100%', '100%', '100%'),
        height: getResponsiveValue('100%', '100%', '100%')
      }}>
        <div 
          style={{ 
            position: getResponsiveValue('relative', 'relative', 'relative'),
            marginLeft: getResponsiveValue('auto', 'auto', 'auto'),
            marginRight: getResponsiveValue('auto', 'auto', 'auto'),
            width: getResponsiveValue('320px', '0px', '966px')
          }}
        >
          
          {/* First Review Container */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              border: getResponsiveValue('1px solid rgba(30,30,30,1)', '1px solid rgba(30,30,30,1)', '1px solid rgba(30,30,30,1)'),
              backgroundColor: getResponsiveValue('rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)'),
              left: getResponsiveValue('21px', '0px', '61px'),
              top: getResponsiveValue('849px', '0px', '593px'),
              width: getResponsiveValue('283px', '0px', '1078px'),
              height: getResponsiveValue('616px', '0px', '358px'),
              transform: 'scale(0.805, 0.805) translate(-145.342px, -187.006px)'
            }}
          />

          {/* CHERYL B. Name */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('65px', '0px', '137px'),
              top: getResponsiveValue('1410px', '0px', '848px'),
              width: getResponsiveValue('194px', '0px', '274px'),
              height: getResponsiveValue('27px', '0px', '19px'),
              transform: 'scale(0.805, 0.805) translate(-66.3727px, -207.717px)'
            }}
          >
            <p 
              style={{
                fontFamily: getResponsiveValue('Raleway, sans-serif', 'Raleway, sans-serif', 'Raleway, sans-serif'),
                color: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                textTransform: getResponsiveValue('uppercase', 'uppercase', 'uppercase'),
                lineHeight: '1.8',
                letterSpacing: '0.2em',
                fontSize: getResponsiveValue('12px', '0px', '15px'),
                textAlign: getResponsiveValue('center', 'center', 'left'),
                fontWeight: 400,
                fontStyle: 'normal'
              }}
            >
              CHERYL B.
            </p>
          </div>

          {/* First Review Text */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('53px', '0px', '137px'),
              top: getResponsiveValue('1190px', '0px', '734px'),
              width: getResponsiveValue('220px', '0px', '611px'),
              height: getResponsiveValue('215px', '0px', '98px'),
              transform: 'scale(0.805, 0.805) translate(-107.189px, -189.671px)'
            }}
          >
            <p 
              style={{
                fontFamily: getResponsiveValue('Raleway, sans-serif', 'Raleway, sans-serif', 'Raleway, sans-serif'),
                color: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                lineHeight: '1.5',
                letterSpacing: '0em',
                fontSize: getResponsiveValue('14px', '0px', '16px'),
                textAlign: getResponsiveValue('justify', 'justify', 'left'),
                fontWeight: 400,
                fontStyle: 'normal'
              }}
            >
              &quot;We have ordered charcuterie platters on multiple occasions from Glam Haus and they are always beautiful, fresh and delicious! I&apos;ve ordered from other companies in the past and definitely prefer Glam Haus. You can tell that she takes a lot of care and pride in creating the best boards.&quot;<br />
            </p>
          </div>

          {/* Divider (Vertical on Desktop, Horizontal on Mobile) */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              backgroundColor: getResponsiveValue('rgba(30,30,30,1)', 'rgba(0,0,0,0)', 'rgba(249,242,236,1)'),
              left: getResponsiveValue('79px', '0px', '821px'),
              top: getResponsiveValue('1172px', '0px', '618px'),
              width: getResponsiveValue('168px', '0px', '1px'),
              height: getResponsiveValue('1px', '0px', '309px'),
              transform: 'scale(0.805, 0.805) translate(-198.997px, -187.127px)'
            }}
          />

          {/* First Image */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              borderRadius: getResponsiveValue('50%', '50%', '50%'),
              overflow: getResponsiveValue('hidden', 'hidden', 'hidden'),
              left: getResponsiveValue('74px', '0px', '863px'),
              top: getResponsiveValue('981px', '0px', '653px'),
              width: getResponsiveValue('178px', '0px', '236px'),
              height: getResponsiveValue('169px', '0px', '238px'),
              transform: 'scale(0.805, 0.805) translate(-237.634px, -187.006px)'
            }}
          >
            <div 
              style={{
                position: getResponsiveValue('absolute', 'absolute', 'absolute'),
                top: getResponsiveValue('0', '0', '0'),
                left: getResponsiveValue('0', '0', '0'),
                width: getResponsiveValue('100%', '100%', '100%'),
                height: getResponsiveValue('100%', '100%', '100%'),
                backgroundRepeat: getResponsiveValue('no-repeat', 'no-repeat', 'no-repeat'),
                backgroundImage: 'url(/images/28.jpg)',
                backgroundSize: getResponsiveValue('cover', 'cover', '110%'),
                backgroundPosition: '50% 50%'
              }}
            />
          </div>

          {/* First Quote Heading */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('33px', '0px', '137px'),
              top: getResponsiveValue('887px', '0px', '675px'),
              width: getResponsiveValue('267px', '0px', '547px'),
              height: getResponsiveValue('71px', '0px', '41px'),
              transform: 'scale(0.805, 0.805) translate(-99.4379px, -168.475px)'
            }}
          >
            <p 
              style={{
                fontFamily: getResponsiveValue('Noire et Blanc, serif', 'Noire et Blanc, serif', 'Noire et Blanc, serif'),
                color: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                lineHeight: '1.2',
                letterSpacing: '0em',
                fontSize: getResponsiveValue('29px', '0px', '33px'),
                textAlign: getResponsiveValue('center', 'center', 'left'),
                fontWeight: 400,
                fontStyle: 'normal'
              }}
            >
              &quot;Always beautiful, fresh &amp; delicious&quot;
            </p>
          </div>

          {/* Second Review Container */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              border: getResponsiveValue('1px solid rgba(30,30,30,1)', '1px solid rgba(30,30,30,1)', '1px solid rgba(30,30,30,1)'),
              backgroundColor: getResponsiveValue('rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)'),
              left: getResponsiveValue('21px', '0px', '61px'),
              top: getResponsiveValue('171px', '0px', '190px'),
              width: getResponsiveValue('283px', '0px', '1078px'),
              height: getResponsiveValue('644px', '0px', '358px'),
              transform: 'scale(0.805, 0.805) translate(-145.342px, -89.3851px)'
            }}
          />

          {/* KARLA S. Name */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('65px', '0px', '469px'),
              top: getResponsiveValue('762px', '0px', '462px'),
              width: getResponsiveValue('194px', '0px', '274px'),
              height: getResponsiveValue('27px', '0px', '19px'),
              transform: 'scale(0.805, 0.805) translate(-146.795px, -114.214px)'
            }}
          >
            <p 
              style={{
                fontFamily: getResponsiveValue('Raleway, sans-serif', 'Raleway, sans-serif', 'Raleway, sans-serif'),
                color: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                textTransform: getResponsiveValue('uppercase', 'uppercase', 'uppercase'),
                lineHeight: '1.8',
                letterSpacing: '0.2em',
                fontSize: getResponsiveValue('12px', '0px', '15px'),
                textAlign: getResponsiveValue('center', 'center', 'left'),
                fontWeight: 400,
                fontStyle: 'normal'
              }}
            >
              KARLA S.
            </p>
          </div>

          {/* Second Review Text */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('53px', '0px', '468px'),
              top: getResponsiveValue('512px', '0px', '327px'),
              width: getResponsiveValue('220px', '0px', '611px'),
              height: getResponsiveValue('245px', '0px', '125px'),
              transform: 'scale(0.805, 0.805) translate(-187.37px, -94.3509px)'
            }}
          >
            <p 
              style={{
                fontFamily: getResponsiveValue('Raleway, sans-serif', 'Raleway, sans-serif', 'Raleway, sans-serif'),
                color: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                lineHeight: '1.5',
                letterSpacing: '0em',
                fontSize: getResponsiveValue('14px', '0px', '16px'),
                textAlign: getResponsiveValue('justify', 'justify', 'left'),
                fontWeight: 400,
                fontStyle: 'normal'
              }}
            >
              &quot;Megan&apos;s work is not only stunning but she uses the best ingredients, safe flowers for decor and offers gluten free options! I love supporting women owned businesses and she&apos;s definitely highly recommended to all of my friends and family. You&apos;ll love Megan, her customer service, attention to detail and delicious boards and design offers as well!&quot;<br />
            </p>
          </div>

          {/* Divider (Vertical on Desktop, Horizontal on Mobile) */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              backgroundColor: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
              left: getResponsiveValue('79px', '0px', '408px'),
              top: getResponsiveValue('495px', '0px', '215px'),
              width: getResponsiveValue('168px', '0px', '1px'),
              height: getResponsiveValue('1px', '0px', '309px'),
              transform: 'scale(0.805, 0.805) translate(-98.9534px, -89.5062px)'
            }}
          />

          {/* Second Image */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              borderRadius: getResponsiveValue('50%', '50%', '50%'),
              overflow: getResponsiveValue('hidden', 'hidden', 'hidden'),
              left: getResponsiveValue('74px', '0px', '128px'),
              top: getResponsiveValue('295px', '0px', '254px'),
              width: getResponsiveValue('178px', '0px', '236px'),
              height: getResponsiveValue('169px', '0px', '238px'),
              transform: 'scale(0.805, 0.805) translate(-59.5901px, -90.354px)'
            }}
          >
            <div 
              style={{
                position: getResponsiveValue('absolute', 'absolute', 'absolute'),
                top: getResponsiveValue('0', '0', '0'),
                left: getResponsiveValue('0', '0', '0'),
                width: getResponsiveValue('100%', '100%', '100%'),
                height: getResponsiveValue('100%', '100%', '100%'),
                backgroundRepeat: getResponsiveValue('no-repeat', 'no-repeat', 'no-repeat'),
                backgroundImage: 'url(/images/27.jpg)',
                backgroundSize: getResponsiveValue('cover', 'cover', '110%'),
                backgroundPosition: '50% 50%'
              }}
            />
          </div>

          {/* Second Quote Heading */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('22px', '0px', '467px'),
              top: getResponsiveValue('212px', '0px', '264px'),
              width: getResponsiveValue('281px', '0px', '683px'),
              height: getResponsiveValue('71px', '0px', '41px'),
              transform: 'scale(0.805, 0.805) translate(-195.848px, -68.9161px)'
            }}
          >
            <p 
              style={{
                fontFamily: getResponsiveValue('Noire et Blanc, serif', 'Noire et Blanc, serif', 'Noire et Blanc, serif'),
                color: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                lineHeight: '1.2',
                letterSpacing: '0em',
                fontSize: getResponsiveValue('27px', '0px', '33px'),
                textAlign: getResponsiveValue('center', 'center', 'left'),
                fontWeight: 400,
                fontStyle: 'normal'
              }}
            >
              &quot;Highly recommend to all my family &amp; friends&quot;
            </p>
          </div>

          {/* "Notes" Text (Hidden) */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              visibility: getResponsiveValue('visible', 'visible', 'visible'),
              left: getResponsiveValue('239px', '0px', '512px'),
              top: getResponsiveValue('57px', '0px', '20px'),
              width: getResponsiveValue('126px', '0px', '309px'),
              height: getResponsiveValue('126px', '0px', '140px'),
              transform: 'scale(0.805, 0.805) translate(-161.45px, -21.8012px)'
            }}
          >
            <p 
              style={{
                fontFamily: getResponsiveValue('Strings, cursive', 'Strings, cursive', 'Strings, cursive'),
                color: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                fontSize: getResponsiveValue('59px', '0px', '114px'),
                textAlign: getResponsiveValue('justify', 'justify', 'center'),
                fontWeight: 400,
                fontStyle: 'normal'
              }}
            >
              Notes
            </p>
          </div>

          {/* "Love" Text (Hidden) */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              visibility: getResponsiveValue('visible', 'visible', 'visible'),
              left: getResponsiveValue('145px', '0px', '334px'),
              top: getResponsiveValue('57px', '0px', '20px'),
              width: getResponsiveValue('104px', '0px', '309px'),
              height: getResponsiveValue('83px', '0px', '140px'),
              transform: 'scale(0.805, 0.805) translate(-118.332px, -21.8012px)'
            }}
          >
            <p 
              style={{
                fontFamily: getResponsiveValue('Strings, cursive', 'Strings, cursive', 'Strings, cursive'),
                color: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                fontSize: getResponsiveValue('71px', '0px', '114px'),
                textAlign: getResponsiveValue('justify', 'justify', 'center'),
                fontWeight: 400,
                fontStyle: 'normal'
              }}
            >
              Love
            </p>
          </div>

          {/* Decorative Line Left */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              width: getResponsiveValue('10px', '0px', '1px'),
              transform: getResponsiveValue('scale(1, 1) translate(0px, 0px)', 'scale(1, 1) translate(0px, 0px)', 'scale(1, 1) translate(-0.0975px, 0px)'),
              top: getResponsiveValue('102px', '0px', '81.305px'),
              left: getResponsiveValue('73px', '0px', '296.045px'),
              height: '1px'
            }}
          >
            <svg 
              style={{ 
                display: getResponsiveValue('inline-block', 'inline-block', 'inline-block'),
                width: getResponsiveValue('10px', '0px', '38.64px'), 
                height: '1px' 
              }}
            >
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="rgba(30, 30, 30, 1)"
                strokeWidth={getResponsiveValue('1', '0', '0.805')}
                strokeLinecap="butt"
                strokeDasharray="none"
              />
            </svg>
          </div>

          {/* Decorative Line Right */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              width: getResponsiveValue('10px', '0px', '1px'),
              transform: getResponsiveValue('scale(1, 1) translate(0px, 0px)', 'scale(1, 1) translate(0px, 0px)', 'scale(1, 1) translate(-0.0975px, 0px)'),
              top: getResponsiveValue('101px', '0px', '80.5px'),
              left: getResponsiveValue('263px', '0px', '643px'),
              height: '1px'
            }}
          >
            <svg 
              style={{ 
                display: getResponsiveValue('inline-block', 'inline-block', 'inline-block'),
                width: getResponsiveValue('10px', '0px', '38.64px'), 
                height: '1px' 
              }}
            >
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="rgba(30, 30, 30, 1)"
                strokeWidth={getResponsiveValue('1', '0', '0.805')}
                strokeLinecap="butt"
                strokeDasharray="none"
              />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LoveNotes;
