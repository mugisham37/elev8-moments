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
        height: getResponsiveValue('1492px', '586.85px', '782.46px')
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
            width: getResponsiveValue('320px', '772.8px', '966px')
          }}
        >
          
          {/* First Review Container */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              border: getResponsiveValue('1px solid rgba(30,30,30,1)', '1px solid rgba(30,30,30,1)', '1px solid rgba(30,30,30,1)'),
              backgroundColor: getResponsiveValue('rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)'),
              left: getResponsiveValue('131px', '48.8px', '61px'),
              top: getResponsiveValue('849px', '444.75px', '593px'),
              width: getResponsiveValue('283px', '862.4px', '1078px'),
              height: getResponsiveValue('616px', '286.4px', '358px'),
              transform: 'scale(0.805, 0.805) translate(-145.342px, -187.006px)'
            }}
          />

          {/* CHERYL B. Name */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('115px', '109.6px', '137px'),
              top: getResponsiveValue('1390px', '636px', '848px'),
              width: getResponsiveValue('194px', '219.2px', '274px'),
              height: getResponsiveValue('27px', '15.2px', '19px'),
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
                fontSize: getResponsiveValue('12px', '12px', '15px'),
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
              left: getResponsiveValue('133px', '109.6px', '137px'),
              top: getResponsiveValue('1190px', '550.5px', '734px'),
              width: getResponsiveValue('220px', '488.8px', '611px'),
              height: getResponsiveValue('215px', '78.4px', '98px'),
              transform: 'scale(0.805, 0.805) translate(-107.189px, -189.671px)'
            }}
          >
            <p 
              style={{
                fontFamily: getResponsiveValue('Raleway, sans-serif', 'Raleway, sans-serif', 'Raleway, sans-serif'),
                color: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                lineHeight: '1.5',
                letterSpacing: '0em',
                fontSize: getResponsiveValue('14px', '12.8px', '16px'),
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
              backgroundColor: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(249,242,236,1)'),
              left: getResponsiveValue('229px', '656.8px', '821px'),
              top: getResponsiveValue('1172px', '463.5px', '618px'),
              width: getResponsiveValue('168px', '1px', '1px'),
              height: getResponsiveValue('1px', '247.2px', '309px'),
              transform: 'scale(0.805, 0.805) translate(-198.997px, -187.127px)'
            }}
          />

          {/* First Image */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              borderRadius: getResponsiveValue('50%', '50%', '50%'),
              overflow: getResponsiveValue('hidden', 'hidden', 'hidden'),
              left: getResponsiveValue('264px', '690.4px', '863px'),
              top: getResponsiveValue('1000px', '489.75px', '653px'),
              width: getResponsiveValue('178px', '188.8px', '236px'),
              height: getResponsiveValue('169px', '190.4px', '238px'),
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
                backgroundSize: getResponsiveValue('cover', '110%', '110%'),
                backgroundPosition: '50% 50%'
              }}
            />
          </div>

          {/* First Quote Heading */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('103px', '109.6px', '137px'),
              top: getResponsiveValue('907px', '506.25px', '675px'),
              width: getResponsiveValue('267px', '437.6px', '547px'),
              height: getResponsiveValue('71px', '32.8px', '41px'),
              transform: 'scale(0.805, 0.805) translate(-99.4379px, -168.475px)'
            }}
          >
            <p 
              style={{
                fontFamily: getResponsiveValue('Noire et Blanc, serif', 'Noire et Blanc, serif', 'Noire et Blanc, serif'),
                color: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                lineHeight: '1.2',
                letterSpacing: '0em',
                fontSize: getResponsiveValue('29px', '26.4px', '33px'),
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
              left: getResponsiveValue('131px', '48.8px', '61px'),
              top: getResponsiveValue('171px', '142.5px', '190px'),
              width: getResponsiveValue('283px', '862.4px', '1078px'),
              height: getResponsiveValue('644px', '286.4px', '358px'),
              transform: 'scale(0.805, 0.805) translate(-145.342px, -89.3851px)'
            }}
          />

          {/* KARLA S. Name */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('185px', '375.2px', '469px'),
              top: getResponsiveValue('732px', '346.5px', '462px'),
              width: getResponsiveValue('194px', '219.2px', '274px'),
              height: getResponsiveValue('27px', '15.2px', '19px'),
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
                fontSize: getResponsiveValue('12px', '12px', '15px'),
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
              left: getResponsiveValue('193px', '374.4px', '468px'),
              top: getResponsiveValue('492px', '245.25px', '327px'),
              width: getResponsiveValue('220px', '488.8px', '611px'),
              height: getResponsiveValue('245px', '100px', '125px'),
              transform: 'scale(0.805, 0.805) translate(-187.37px, -94.3509px)'
            }}
          >
            <p 
              style={{
                fontFamily: getResponsiveValue('Raleway, sans-serif', 'Raleway, sans-serif', 'Raleway, sans-serif'),
                color: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                lineHeight: '1.5',
                letterSpacing: '0em',
                fontSize: getResponsiveValue('14px', '12.8px', '16px'),
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
              left: getResponsiveValue('150px', '326.4px', '408px'),
              top: getResponsiveValue('495px', '161.25px', '215px'),
              width: getResponsiveValue('168px', '1px', '1px'),
              height: getResponsiveValue('1px', '247.2px', '309px'),
              transform: 'scale(0.805, 0.805) translate(-98.9534px, -89.5062px)'
            }}
          />

          {/* Second Image */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              borderRadius: getResponsiveValue('50%', '50%', '50%'),
              overflow: getResponsiveValue('hidden', 'hidden', 'hidden'),
              left: getResponsiveValue('114px', '102.4px', '128px'),
              top: getResponsiveValue('325px', '190.5px', '254px'),
              width: getResponsiveValue('178px', '188.8px', '236px'),
              height: getResponsiveValue('169px', '190.4px', '238px'),
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
                backgroundSize: getResponsiveValue('cover', '110%', '110%'),
                backgroundPosition: '50% 50%'
              }}
            />
          </div>

          {/* Second Quote Heading */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('172px', '373.6px', '467px'),
              top: getResponsiveValue('232px', '198px', '264px'),
              width: getResponsiveValue('281px', '546.4px', '683px'),
              height: getResponsiveValue('71px', '32.8px', '41px'),
              transform: 'scale(0.805, 0.805) translate(-195.848px, -68.9161px)'
            }}
          >
            <p 
              style={{
                fontFamily: getResponsiveValue('Noire et Blanc, serif', 'Noire et Blanc, serif', 'Noire et Blanc, serif'),
                color: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                lineHeight: '1.2',
                letterSpacing: '0em',
                fontSize: getResponsiveValue('27px', '26.4px', '33px'),
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
              left: getResponsiveValue('239px', '409.6px', '512px'),
              top: getResponsiveValue('57px', '15px', '20px'),
              width: getResponsiveValue('126px', '247.2px', '309px'),
              height: getResponsiveValue('126px', '112px', '140px'),
              transform: 'scale(0.805, 0.805) translate(-161.45px, -21.8012px)'
            }}
          >
            <p 
              style={{
                fontFamily: getResponsiveValue('Strings, cursive', 'Strings, cursive', 'Strings, cursive'),
                color: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                fontSize: getResponsiveValue('59px', '91.2px', '114px'),
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
              left: getResponsiveValue('145px', '267.2px', '334px'),
              top: getResponsiveValue('57px', '15px', '20px'),
              width: getResponsiveValue('104px', '247.2px', '309px'),
              height: getResponsiveValue('83px', '112px', '140px'),
              transform: 'scale(0.805, 0.805) translate(-118.332px, -21.8012px)'
            }}
          >
            <p 
              style={{
                fontFamily: getResponsiveValue('Strings, cursive', 'Strings, cursive', 'Strings, cursive'),
                color: getResponsiveValue('rgba(30,30,30,1)', 'rgba(30,30,30,1)', 'rgba(30,30,30,1)'),
                fontSize: getResponsiveValue('71px', '91.2px', '114px'),
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
              width: getResponsiveValue('10px', '30.91px', '1px'),
              transform: getResponsiveValue('scale(1, 1) translate(0px, 0px)', 'scale(1, 1) translate(0px, 0px)', 'scale(1, 1) translate(-0.0975px, 0px)'),
              top: getResponsiveValue('102px', '60.98px', '81.305px'),
              left: getResponsiveValue('73px', '236.84px', '296.045px'),
              height: '1px'
            }}
          >
            <svg 
              style={{ 
                display: getResponsiveValue('inline-block', 'inline-block', 'inline-block'),
                width: getResponsiveValue('10px', '30.91px', '38.64px'), 
                height: '1px' 
              }}
            >
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="rgba(30, 30, 30, 1)"
                strokeWidth={getResponsiveValue('1', '0.644', '0.805')}
                strokeLinecap="butt"
                strokeDasharray="none"
              />
            </svg>
          </div>

          {/* Decorative Line Right */}
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              width: getResponsiveValue('10px', '30.91px', '1px'),
              transform: getResponsiveValue('scale(1, 1) translate(0px, 0px)', 'scale(1, 1) translate(0px, 0px)', 'scale(1, 1) translate(-0.0975px, 0px)'),
              top: getResponsiveValue('101px', '60.38px', '80.5px'),
              left: getResponsiveValue('263px', '514.4px', '643px'),
              height: '1px'
            }}
          >
            <svg 
              style={{ 
                display: getResponsiveValue('inline-block', 'inline-block', 'inline-block'),
                width: getResponsiveValue('10px', '30.91px', '38.64px'), 
                height: '1px' 
              }}
            >
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="rgba(30, 30, 30, 1)"
                strokeWidth={getResponsiveValue('1', '0.644', '0.805')}
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
