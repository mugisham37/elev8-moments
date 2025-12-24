'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
        zIndex: 3,
        backgroundColor: '#1e1e1e',
        height: getResponsiveValue('900px', '757px', '1182px')
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <div 
          style={{
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '100%',
            width: getResponsiveValue('320px', '768px', '1200px')
          }}
        >
          
          {/* Image Element 0 - First Traditional Board Image */}
          <div 
            style={{
              position: 'absolute',
              opacity: 1,
              left: getResponsiveValue('-66px', '129px', '202px'),
              top: getResponsiveValue('166px', '147px', '230px'),
              width: getResponsiveValue('185px', '159px', '248px'),
              height: getResponsiveValue('110px', '100px', '157px')
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative'
            }}>
              <Image 
                src="/images/19.jpg"
                alt="IMG_0802"
                fill
                style={{
                  objectFit: getResponsiveValue<'contain' | 'cover'>('contain', 'cover', 'cover')
                }}
              />
            </div>
          </div>

          {/* Image Element 1 - Hidden Mobile Image */}
          <div style={{ display: 'none' }}>
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative'
            }}>
              <Image 
                src="/images/30.jpg"
                alt="IMG_5588"
                fill
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Image Element 2 - Second Image (Holiday Boards) */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('-73px', '129px', '202px'),
              top: getResponsiveValue('635px', '562px', '878px'),
              width: getResponsiveValue('185px', '159px', '248px'),
              height: getResponsiveValue('110px', '100px', '157px')
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative'
            }}>
              <Image 
                src="/images/30.jpg"
                alt="IMG_5588"
                fill
                style={{
                  objectFit: getResponsiveValue<'contain' | 'cover'>('contain', 'cover', 'cover')
                }}
              />
            </div>
          </div>

          {/* Text Element 3 - BLOOM & BOND WORKSHOPS */}
          <a 
            href="mailto:hello@elev8moments.com" 
            style={{
              position: 'absolute',
              left: getResponsiveValue('91px', '305px', '477px'),
              top: getResponsiveValue('166px', '150px', '234px'),
              width: getResponsiveValue('202px', '165px', '258px'),
              height: getResponsiveValue('22px', '26px', '41px')
            }}
          >
            <p 
              style={{
                color: '#f9f2ec',
                textTransform: 'none',
                lineHeight: 1.1,
                letterSpacing: '0.1em',
                textAlign: 'left',
                fontFamily: 'Montserrat',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: getResponsiveValue('14px', '12px', '18px')
              }}
            >
              BLOOM & BOND<br />WORKSHOPS<br />
            </p>
          </a>

          {/* Divider Line Element 4 */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('27px', '304px', '475px'),
              top: getResponsiveValue('293px', '237px', '370px'),
              width: getResponsiveValue('266px', '313px', '489px'),
              height: '1px'
            }}
          >
            <div style={{
              backgroundColor: '#f9f2ec',
              width: '100%',
              height: '100%'
            }}></div>
          </div>

          {/* Text Element 5 - Explore Our */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('-66px', '49px', '76px'),
              top: getResponsiveValue('46px', '29px', '46px'),
              width: getResponsiveValue('398px', '454px', '710px'),
              height: getResponsiveValue('56px', '47px', '73px')
            }}
          >
            <p 
              style={{
                color: '#f9f2ec',
                textTransform: 'none',
                letterSpacing: '0em',
                textAlign: 'center',
                fontFamily: 'Strings',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: getResponsiveValue(1.2, 1.6, 1.6),
                fontSize: getResponsiveValue('39px', '38px', '60px')
              }}
            >
              Explore Our<br />
            </p>
          </div>

          {/* Icon Element 6 - Arrow Icon */}
          <a 
            href="/experience" 
            style={{
              position: 'absolute',
              left: getResponsiveValue('251px', '442px', '690px'),
              top: getResponsiveValue('158px', '138px', '215px'),
              width: getResponsiveValue('30px', '22px', '34px'),
              height: getResponsiveValue('29px', '61px', '96px')
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: '#f9f2ec' }}>
                <polygon points="399.22 206.93 391.04 215.72 427.91 250 60 250 60 262 427.94 262 391.04 296.29 399.22 305.08 452 256.01 399.22 206.93"></polygon>
              </svg>
            </div>
          </a>

          {/* Text Element 7 - Description Text */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('90px', '305px', '477px'),
              top: getResponsiveValue('206px', '187px', '292px'),
              width: getResponsiveValue('210px', '334px', '522px'),
              height: getResponsiveValue('78px', '49px', '76px')
            }}
          >
            <p 
              style={{
                color: '#f9f2ec',
                textTransform: 'none',
                letterSpacing: '0em',
                textAlign: 'justify',
                fontFamily: 'Raleway',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: getResponsiveValue(1.4, 1.7, 1.7),
                fontSize: getResponsiveValue('13px', '10px', '16px')
              }}
            >
              Floral arrangement and connection workshops for women. Beautiful, intentional, and healing experiences that combine creativity with meaningful bonding and soulful activities.<br />
            </p>
          </div>

          {/* Icon Element 8 - Arrow Icon */}
          <a 
            href="/experience" 
            style={{
              position: 'absolute',
              left: getResponsiveValue('252px', '454px', '709px'),
              top: getResponsiveValue('624px', '548px', '856px'),
              width: getResponsiveValue('30px', '22px', '34px'),
              height: getResponsiveValue('36px', '61px', '96px')
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: '#f9f2ec' }}>
                <polygon points="399.22 206.93 391.04 215.72 427.91 250 60 250 60 262 427.94 262 391.04 296.29 399.22 305.08 452 256.01 399.22 206.93"></polygon>
              </svg>
            </div>
          </a>

          {/* Text Element 9 - VISIT RWANDA EXPERIENCES */}
          <a 
            href="mailto:hello@elev8moments.com" 
            style={{
              position: 'absolute',
              left: getResponsiveValue('91px', '307px', '480px'),
              top: getResponsiveValue('635px', '561px', '877px'),
              width: getResponsiveValue('302px', '221px', '345px'),
              height: getResponsiveValue('22px', '26px', '41px')
            }}
          >
            <p 
              style={{
                color: '#f9f2ec',
                textTransform: 'none',
                lineHeight: 1.1,
                letterSpacing: '0.1em',
                textAlign: 'left',
                fontFamily: 'Montserrat',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: getResponsiveValue('14px', '12px', '18px')
              }}
            >
              VISIT RWANDA<br />EXPERIENCES<br />
            </p>
          </a>

          {/* Text Element 10 - Visit Rwanda Description */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('91px', '309px', '483px'),
              top: getResponsiveValue('659px', '595px', '930px'),
              width: getResponsiveValue('210px', '354px', '553px'),
              height: getResponsiveValue('94px', '49px', '76px')
            }}
          >
            <p 
              style={{
                color: '#f9f2ec',
                textTransform: 'none',
                letterSpacing: '0em',
                textAlign: 'justify',
                fontFamily: 'Raleway',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: getResponsiveValue(1.4, 1.7, 1.7),
                fontSize: getResponsiveValue('13px', '10px', '16px')
              }}
            >
              Cultural, creative, and bonding experiences for visitors looking to explore Kigali beyond the ordinary. Contributing to Rwanda&apos;s tourism story through meaningful activities.<br />
            </p>
          </div>

          {/* Text Element 11 - EXPERIENCE OFFERINGS */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('-39px', '57px', '89px'),
              top: getResponsiveValue('102px', '76px', '119px'),
              width: getResponsiveValue('398px', '655px', '1023px'),
              height: getResponsiveValue('56px', '44px', '69px')
            }}
          >
            <p 
              style={{
                color: '#f9f2ec',
                textTransform: 'none',
                letterSpacing: '0em',
                textAlign: 'center',
                fontFamily: 'Noiretblanc',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: getResponsiveValue(1.2, 1.6, 1.6),
                fontSize: getResponsiveValue('32px', '35px', '55px')
              }}
            >
              EXPERIENCE OFFERINGS<br />
            </p>
          </div>

          {/* Line Element 12 - Horizontal Decorative Line */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('230px', '380px', '593px'),
              top: getResponsiveValue('71px', '62px', '97px'),
              width: getResponsiveValue('42px', '202px', '315px'),
              height: '1px'
            }}
          >
            <svg 
              style={{ 
                width: getResponsiveValue('42px', '143px', '223px'), 
                height: '1px' 
              }}
            >
              <line 
                x1="0" 
                y1="0" 
                x2="100%" 
                y2="0"
                style={{ 
                  stroke: '#f9f2ec',
                  strokeWidth: '1px', 
                  strokeDasharray: '0px',
                  strokeLinecap: 'butt'
                }}
              />
            </svg>
          </div>

          {/* Image Element 13 - Hidden */}
          <div style={{ display: 'none' }}>
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative'
            }}>
              <Image 
                src="/images/16.jpg"
                alt="AEE7A816-268F-4680-8C40-2BA82B22664B"
                fill
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Image Element 14 - Third Image (Custom & Specialty) */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('-66px', '129px', '202px'),
              top: getResponsiveValue('311px', '287px', '449px'),
              width: getResponsiveValue('185px', '159px', '248px'),
              height: getResponsiveValue('110px', '100px', '157px')
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative'
            }}>
              <Image 
                src="/images/31.jpg"
                alt="IMG_4994"
                fill
                style={{
                  objectFit: getResponsiveValue<'contain' | 'cover'>('contain', 'cover', 'cover'),
                  objectPosition: '40% 40%'
                }}
              />
            </div>
          </div>

          {/* Divider Line Element 15 */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('27px', '307px', '479px'),
              top: getResponsiveValue('459px', '385px', '602px'),
              width: getResponsiveValue('266px', '313px', '489px'),
              height: '1px'
            }}
          >
            <div style={{
              backgroundColor: '#f9f2ec',
              width: '100%',
              height: '100%'
            }}></div>
          </div>

          {/* Icon Element 16 - Arrow Icon */}
          <a 
            href="/experience" 
            style={{
              position: 'absolute',
              left: getResponsiveValue('251px', '463px', '723px'),
              top: getResponsiveValue('316px', '284px', '443px'),
              width: getResponsiveValue('30px', '22px', '34px'),
              height: getResponsiveValue('36px', '61px', '96px')
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: '#f9f2ec' }}>
                <polygon points="399.22 206.93 391.04 215.72 427.91 250 60 250 60 262 427.94 262 391.04 296.29 399.22 305.08 452 256.01 399.22 206.93"></polygon>
              </svg>
            </div>
          </a>

          {/* Text Element 17 - PAINT A SHIRT */}
          <a 
            href="mailto:hello@elev8moments.com" 
            style={{
              position: 'absolute',
              left: getResponsiveValue('90px', '305px', '477px'),
              top: getResponsiveValue('311px', '295px', '461px'),
              width: getResponsiveValue('202px', '285px', '445px'),
              height: getResponsiveValue('22px', '26px', '41px')
            }}
          >
            <p 
              style={{
                color: '#f9f2ec',
                textTransform: 'none',
                lineHeight: 1.1,
                letterSpacing: '0.1em',
                textAlign: 'left',
                fontFamily: 'Montserrat',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: getResponsiveValue('14px', '12px', '18px')
              }}
            >
              PAINT A SHIRT<br />CREATIVE GATHERINGS<br />
            </p>
          </a>

          {/* Text Element 18 - Paint a Shirt Description */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('90px', '305px', '477px'),
              top: getResponsiveValue('350px', '331px', '517px'),
              width: getResponsiveValue('210px', '354px', '553px'),
              height: getResponsiveValue('94px', '49px', '76px')
            }}
          >
            <p 
              style={{
                color: '#f9f2ec',
                textTransform: 'none',
                letterSpacing: '0em',
                textAlign: 'justify',
                fontFamily: 'Raleway',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: getResponsiveValue(1.4, 1.7, 1.7),
                fontSize: getResponsiveValue('13px', '10px', '16px')
              }}
            >
              Creative, fun, and expressive events where participants paint inspirational T-shirts to take home. Playful community gatherings that celebrate creativity and self-expression.<br />
            </p>
          </div>

          {/* Image Element 19 - Hidden */}
          <div style={{ display: 'none' }}>
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative'
            }}>
              <Image 
                src="/images/32.jpg"
                alt="IMG_8304"
                fill
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Image Element 20 - Fourth Image (Manly Boards) */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('-76px', '129px', '202px'),
              top: getResponsiveValue('468px', '426px', '665px'),
              width: getResponsiveValue('185px', '159px', '248px'),
              height: getResponsiveValue('110px', '100px', '157px')
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative'
            }}>
              <Image 
                src="/images/32.jpg"
                alt="IMG_8304"
                fill
                style={{
                  objectFit: getResponsiveValue<'contain' | 'cover'>('contain', 'cover', 'cover'),
                  objectPosition: '60% 60%'
                }}
              />
            </div>
          </div>

          {/* Divider Line Element 21 */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('28px', '307px', '480px'),
              top: getResponsiveValue('609px', '520px', '812px'),
              width: getResponsiveValue('266px', '313px', '489px'),
              height: '1px'
            }}
          >
            <div style={{
              backgroundColor: '#f9f2ec',
              width: '100%',
              height: '100%'
            }}></div>
          </div>

          {/* Icon Element 22 - Arrow Icon */}
          <a 
            href="/experience" 
            style={{
              position: 'absolute',
              left: getResponsiveValue('252px', '444px', '694px'),
              top: getResponsiveValue('472px', '420px', '656px'),
              width: getResponsiveValue('30px', '22px', '34px'),
              height: getResponsiveValue('36px', '61px', '96px')
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: '#f9f2ec' }}>
                <polygon points="399.22 206.93 391.04 215.72 427.91 250 60 250 60 262 427.94 262 391.04 296.29 399.22 305.08 452 256.01 399.22 206.93"></polygon>
              </svg>
            </div>
          </a>

          {/* Text Element 23 - RETREATS & GATHERINGS */}
          <a 
            href="mailto:hello@elev8moments.com" 
            style={{
              position: 'absolute',
              left: getResponsiveValue('91px', '305px', '477px'),
              top: getResponsiveValue('468px', '432px', '675px'),
              width: getResponsiveValue('202px', '285px', '445px'),
              height: getResponsiveValue('22px', '26px', '41px')
            }}
          >
            <p 
              style={{
                color: '#f9f2ec',
                textTransform: 'none',
                lineHeight: 1.1,
                letterSpacing: '0.1em',
                textAlign: 'left',
                fontFamily: 'Montserrat',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: getResponsiveValue('14px', '12px', '18px')
              }}
            >
              RETREATS &<br />INTIMATE GATHERINGS<br />
            </p>
          </a>

          {/* Text Element 24 - Retreats Description */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('91px', '305px', '477px'),
              top: getResponsiveValue('507px', '465px', '727px'),
              width: getResponsiveValue('210px', '358px', '560px'),
              height: getResponsiveValue('94px', '49px', '76px')
            }}
          >
            <p 
              style={{
                color: '#f9f2ec',
                textTransform: 'none',
                letterSpacing: '0em',
                textAlign: 'justify',
                fontFamily: 'Raleway',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: getResponsiveValue(1.4, 1.7, 1.7),
                fontSize: getResponsiveValue('13px', '10px', '16px')
              }}
            >
              Events designed around healing, creativity, and soulful connection. Intimate gatherings that create meaningful spaces for personal growth and community bonding.<br />
            </p>
          </div>

          {/* Button Element 25 - ORDER NOW Container */}
          <div 
            style={{
              position: 'absolute',
              left: getResponsiveValue('48px', '307px', '480px'),
              top: getResponsiveValue('800px', '703px', '1098px'),
              width: getResponsiveValue('224px', '154px', '241px'),
              height: getResponsiveValue('48px', '33px', '51px')
            }}
          >
            <div style={{
              border: '1px solid #f9f2ec',
              backgroundColor: '#1e1e1e',
              width: '100%',
              height: '100%',
              borderRadius: 'inherit'
            }}></div>
          </div>

          {/* Button Element 26 - BOOK EXPERIENCE Text */}
          <a 
            href="mailto:hello@elev8moments.com"
            target="_self"
            style={{
              position: 'absolute',
              left: getResponsiveValue('48px', '316px', '494px'),
              top: getResponsiveValue('813px', '709px', '1108px'),
              width: getResponsiveValue('224px', '136px', '213px'),
              height: getResponsiveValue('21px', '19px', '29px')
            }}
          >
            <nav 
              style={{
                color: '#f9f2ec',
                textTransform: 'uppercase',
                lineHeight: 2.2,
                letterSpacing: '0.1em',
                textAlign: 'center',
                fontFamily: 'Raleway',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: getResponsiveValue('11px', '9px', '14px')
              }}
            >
              BOOK EXPERIENCE
            </nav>
          </a>

        </div>
      </div>
    </div>
  );
};

export default CharcuterieOfferings;