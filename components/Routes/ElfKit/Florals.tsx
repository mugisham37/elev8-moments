'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Florals() {
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
        width: getResponsiveValue('100%', '100%', '100%'),
        backgroundColor: getResponsiveValue('#314f39', '#314f39', '#314f39'),
        height: getResponsiveValue('616px', '619px', '967px')
      }}
    >
      <div 
        style={{
          position: getResponsiveValue('relative', 'relative', 'relative'),
          marginLeft: getResponsiveValue('auto', 'auto', 'auto'),
          marginRight: getResponsiveValue('auto', 'auto', 'auto'),
          height: getResponsiveValue('100%', '100%', '100%'),
          width: getResponsiveValue('320px', '768px', '1200px')
        }}
      >
        {/* Button background */}
        <div 
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute'),
            left: getResponsiveValue('48px', '270px', '422px'),
            top: getResponsiveValue('514px', '463px', '723px'),
            width: getResponsiveValue('224px', '154px', '241px'),
            height: getResponsiveValue('48px', '33px', '51px')
          }}
        >
          <div 
            style={{
              width: getResponsiveValue('100%', '100%', '100%'),
              height: getResponsiveValue('100%', '100%', '100%'),
              borderWidth: getResponsiveValue('1px', '1px', '1px'),
              borderColor: getResponsiveValue('#f9f2ec', '#f9f2ec', '#f9f2ec'),
              borderStyle: getResponsiveValue('solid', 'solid', 'solid'),
              backgroundColor: getResponsiveValue('transparent', '#f9f2ec', '#f9f2ec')
            }}
          ></div>
        </div>

        {/* ORDER NOW link */}
        <a
          href="https://www.instagram.com/elev8moments/" 
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute'),
            transition: getResponsiveValue('opacity', 'opacity', 'opacity'),
            transitionDuration: getResponsiveValue('500ms', '500ms', '500ms'),
            left: getResponsiveValue('71px', '263px', '411px'),
            top: getResponsiveValue('519px', '466px', '728px'),
            width: getResponsiveValue('160px', '151px', '236px'),
            height: getResponsiveValue('32px', '26px', '41px')
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.3'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <p 
            style={{
              textTransform: getResponsiveValue('uppercase', 'uppercase', 'uppercase'),
              lineHeight: getResponsiveValue('3', '3', '3'),
              letterSpacing: getResponsiveValue('0.1em', '0.1em', '0.1em'),
              textAlign: getResponsiveValue('center', 'center', 'center'),
              fontFamily: getResponsiveValue('Raleway', 'Raleway', 'Raleway'),
              fontWeight: getResponsiveValue('normal', 'normal', 'normal'),
              color: getResponsiveValue('#f9f2ec', '#1e1e1e', '#1e1e1e'),
              fontSize: getResponsiveValue('12px', '14px', '14px')
            }}
          >
            ORDER NOW
          </p>
        </a>

        {/* Past Themes title */}
        <div 
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute'),
            transition: getResponsiveValue('opacity', 'opacity', 'opacity'),
            transitionDuration: getResponsiveValue('500ms', '500ms', '500ms'),
            left: getResponsiveValue('34px', '27px', '42px'),
            top: getResponsiveValue('42px', '38px', '60px'),
            width: getResponsiveValue('171px', '133px', '208px'),
            height: getResponsiveValue('67px', '34px', '53px')
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.2'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <p 
            style={{
              color: getResponsiveValue('#f9f2ec', '#f9f2ec', '#f9f2ec'),
              textTransform: getResponsiveValue('none', 'none', 'none'),
              letterSpacing: getResponsiveValue('0em', '0em', '0em'),
              textAlign: getResponsiveValue('left', 'left', 'left'),
              fontFamily: getResponsiveValue('Strings', 'Strings', 'Strings'),
              fontWeight: getResponsiveValue('normal', 'normal', 'normal'),
              lineHeight: getResponsiveValue('1', '1.2', '1.2'),
              fontSize: getResponsiveValue('27px', '30px', '30px')
            }}
          >
            Past Themes
          </p>
        </div>

        {/* Image 1 */}
        <div 
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute'),
            opacity: getResponsiveValue(0.9, 0.9, 0.9),
            left: getResponsiveValue('179px', '97px', '152px'),
            top: getResponsiveValue('374px', '367px', '573px'),
            width: getResponsiveValue('79px', '151px', '236px'),
            height: getResponsiveValue('112px', '185px', '289px')
          }}
        >
          <Image
            src="/images/25.jpg"
            alt="Past theme example"
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Background Rectangle (hidden on mobile) */}
        {(screenSize === 'tablet' || screenSize === 'desktop') && (
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('0px', '214px', '335px'),
              top: getResponsiveValue('0px', '208px', '325px'),
              width: getResponsiveValue('0px', '224px', '350px'),
              height: getResponsiveValue('0px', '248px', '387px')
            }}
          >
            <div 
              style={{
                width: getResponsiveValue('100%', '100%', '100%'),
                height: getResponsiveValue('100%', '100%', '100%'),
                backgroundColor: getResponsiveValue('#314f39', '#314f39', '#314f39')
              }}
            ></div>
          </div>
        )}

        {/* Image 2 */}
        <div 
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute'),
            left: getResponsiveValue('30px', '223px', '348px'),
            top: getResponsiveValue('288px', '164px', '256px'),
            width: getResponsiveValue('129px', '202px', '315px'),
            height: getResponsiveValue('172px', '283px', '442px')
          }}
        >
          <Image
            src="/images/26.jpg"
            alt="Past theme example"
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Background Rectangle (visible on mobile only) */}
        {screenSize === 'mobile' && (
          <div 
            style={{
              position: getResponsiveValue('absolute', 'absolute', 'absolute'),
              left: getResponsiveValue('50px', '0px', '0px'),
              top: getResponsiveValue('109px', '0px', '0px'),
              width: getResponsiveValue('175px', '0px', '0px'),
              height: getResponsiveValue('224px', '0px', '0px')
            }}
          >
            <div 
              style={{
                width: getResponsiveValue('100%', '100%', '100%'),
                height: getResponsiveValue('100%', '100%', '100%'),
                backgroundColor: getResponsiveValue('#314f39', '#314f39', '#314f39')
              }}
            ></div>
          </div>
        )}

        {/* Image 3 */}
        <div 
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute'),
            left: getResponsiveValue('56px', '461px', '721px'),
            top: getResponsiveValue('120px', '282px', '441px'),
            width: getResponsiveValue('162px', '208px', '325px'),
            height: getResponsiveValue('205px', '284px', '444px')
          }}
        >
          <Image
            src="/images/27.jpg"
            alt="Past theme example"
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Background Rectangle */}
        <div 
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute'),
            left: getResponsiveValue('193px', '408px', '638px'),
            top: getResponsiveValue('53px', '46px', '72px'),
            width: getResponsiveValue('115px', '149px', '233px'),
            height: getResponsiveValue('150px', '199px', '311px')
          }}
        >
          <div 
            style={{
              width: getResponsiveValue('100%', '100%', '100%'),
              height: getResponsiveValue('100%', '100%', '100%'),
              backgroundColor: getResponsiveValue('#314f39', '#314f39', '#314f39')
            }}
          ></div>
        </div>

        {/* Image 4 */}
        <div 
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute'),
            left: getResponsiveValue('196px', '414px', '647px'),
            top: getResponsiveValue('59px', '64px', '100px'),
            width: getResponsiveValue('104px', '125px', '195px'),
            height: getResponsiveValue('139px', '173px', '271px')
          }}
        >
          <Image
            src="/images/28.jpg"
            alt="Past theme example"
            fill
            style={{
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Background Rectangle */}
        <div 
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute'),
            left: getResponsiveValue('226px', '20px', '31px'),
            top: getResponsiveValue('263px', '70px', '110px'),
            width: getResponsiveValue('121px', '217px', '339px'),
            height: getResponsiveValue('148px', '235px', '367px')
          }}
        >
          <div 
            style={{
              width: getResponsiveValue('100%', '100%', '100%'),
              height: getResponsiveValue('100%', '100%', '100%'),
              backgroundColor: getResponsiveValue('#314f39', '#314f39', '#314f39')
            }}
          ></div>
        </div>

        {/* Image 5 */}
        <div 
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute'),
            left: getResponsiveValue('232px', '35px', '55px'),
            top: getResponsiveValue('263px', '83px', '129px'),
            width: getResponsiveValue('109px', '217px', '339px'),
            height: getResponsiveValue('148px', '215px', '336px')
          }}
        >
          <Image
            src="/images/29.jpg"
            alt="Past theme example"
            fill
            style={{
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Background Rectangle */}
        <div 
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute'),
            left: getResponsiveValue('-2px', '612px', '957px'),
            top: getResponsiveValue('82px', '214px', '335px'),
            width: getResponsiveValue('117px', '136px', '213px'),
            height: getResponsiveValue('133px', '153px', '239px')
          }}
        >
          <div 
            style={{
              width: getResponsiveValue('100%', '100%', '100%'),
              height: getResponsiveValue('100%', '100%', '100%'),
              backgroundColor: getResponsiveValue('#314f39', '#314f39', '#314f39')
            }}
          ></div>
        </div>

        {/* Image 6 */}
        <div 
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute'),
            left: getResponsiveValue('3px', '620px', '968px'),
            top: getResponsiveValue('84px', '197px', '308px'),
            width: getResponsiveValue('106px', '122px', '190px'),
            height: getResponsiveValue('127px', '187px', '292px')
          }}
        >
          <Image
            src="/images/30.jpg"
            alt="Past theme example"
            fill
            style={{
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Arrow Icon */}
        <div 
          style={{
            position: getResponsiveValue('absolute', 'absolute', 'absolute'),
            left: getResponsiveValue('197px', '374px', '585px'),
            top: getResponsiveValue('530px', '474px', '741px'),
            width: getResponsiveValue('15px', '15px', '15px'),
            height: getResponsiveValue('15px', '15px', '15px')
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512" 
            style={{
              fill: getResponsiveValue('#f9f2ec', '#314f39', '#314f39')
            }}
          >
            <path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}