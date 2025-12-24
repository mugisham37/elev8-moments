
'use client';

import React from 'react';
import Link from 'next/link';

interface MobilePopUpMenuProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const MobilePopUpMenu: React.FC<MobilePopUpMenuProps> = ({ isOpen = false, onClose }) => {
  return (
    <div
      id="mobile-pop-up-menu"
      data-bid="mobile-pop-up-menu"
      className={`fixed inset-0 z-[100] md:hidden ${isOpen ? 'block' : 'hidden'}`}
      style={{ height: '776.016px', position: 'fixed', top: '0px' }}
    >
      <div className="bg-[rgb(249,242,236)] h-screen w-screen overflow-y-auto">
        <div className="relative w-full max-w-[385px] mx-auto min-h-screen pb-8">
          {/* Close Icon - mobile-pop-up-menu_0 */}
          <div
            data-sid="mobile-pop-up-menu_0"
            className="absolute left-[284px] top-[10px] w-[32px] h-[25px] md:left-[550px] md:top-[150px] md:w-[100px] md:h-[100px] cursor-pointer"
            style={{ transform: 'scale(1.20312, 1.20312) translate(50.6494px, 3.7987px)' }}
            onClick={onClose}
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-[rgb(30,30,30)]">
                <polygon points="405 121.8 390.2 107 256 241.2 121.8 107 107 121.8 241.2 256 107 390.2 121.8 405 256 270.8 390.2 405 405 390.2 270.8 256 405 121.8"></polygon>
              </svg>
            </div>
          </div>

          {/* Navigation Text - mobile-pop-up-menu_1 */}
          <div
            data-sid="mobile-pop-up-menu_1"
            className="absolute left-[85px] top-[40px] w-[151px] h-[69px] md:left-[543px] md:top-[190px] md:w-[113.39999999999999px] md:h-[21px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(27.0974px, 12.5779px)' }}
          >
            <p className="text-[25px] text-center font-normal text-[rgb(30,30,30)] leading-[1.8] tracking-[0em] md:text-[16px] md:leading-[1.4]" style={{ fontFamily: 'Strings' }}>
              Navigation
            </p>
          </div>

          {/* ELEV8 MOMENTS Logo Link - mobile-pop-up-menu_2 */}
          <Link
            href="/"
            data-sid="mobile-pop-up-menu_2"
            className="absolute left-[45px] top-[2px] w-[231px] h-[73px] md:left-[543px] md:top-[190px] md:w-[113.39999999999999px] md:h-[21px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(27.0974px, 6.5px)' }}
          >
            <p className="text-[37px] text-center font-normal text-[rgb(30,30,30)] leading-[1.8] tracking-[0em] md:text-[16px] md:leading-[1.4]" style={{ fontFamily: 'Noiretblanc' }}>
              ELEV8 MOMENTS
            </p>
          </Link>

          {/* Decorative Line Right - mobile-pop-up-menu_3 */}
          <div
            data-sid="mobile-pop-up-menu_3"
            className="absolute left-[216px] top-[62px] w-[47px] h-[1px] md:left-[360px] md:top-[199px] md:w-[480px]"
            style={{ width: '1px', transform: 'scale(1, 1) translate(0.101562px, 0px)', top: '74.5938px', left: '258.875px', height: '1px' }}
          >
            <svg className="align-top overflow-visible pointer-events-none box-content stroke-[rgb(30,30,30)] scale-x-100 p-[0.5px] h-[1px] w-[47px] md:w-[480px]" style={{ width: '56.5469px', height: '1px' }}>
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                className="stroke-[rgb(30,30,30)] pointer-events-auto"
                style={{ strokeWidth: '1.20312px', strokeDasharray: '0px', strokeLinecap: 'butt' }}
              ></line>
            </svg>
          </div>

          {/* Decorative Line Left - mobile-pop-up-menu_4 */}
          <div
            data-sid="mobile-pop-up-menu_4"
            className="absolute left-[62px] top-[62px] w-[47px] h-[1px] md:left-[360px] md:top-[199px] md:w-[480px]"
            style={{ width: '1px', transform: 'scale(1, 1) translate(0.101562px, 0px)', top: '74.5938px', left: '73.5938px', height: '1px' }}
          >
            <svg className="align-top overflow-visible pointer-events-none box-content stroke-[rgb(30,30,30)] scale-x-100 p-[0.5px] h-[1px] w-[47px] md:w-[480px]" style={{ width: '56.5469px', height: '1px' }}>
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                className="stroke-[rgb(30,30,30)] pointer-events-auto"
                style={{ strokeWidth: '1.20312px', strokeDasharray: '0px', strokeLinecap: 'butt' }}
              ></line>
            </svg>
          </div>

          {/* Border Box - mobile-pop-up-menu_5 */}
          <div
            data-sid="mobile-pop-up-menu_5"
            className="absolute left-[170px] top-[278px] w-[121px] h-[155px] md:left-[360px] md:top-[120px] md:w-[480px] md:h-[160px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(38.9156px, 60.0195px)' }}
          >
            <div className="border border-[rgb(30,30,30)] border-solid bg-transparent"></div>
          </div>

          {/* Border Box - mobile-pop-up-menu_6 */}
          <div
            data-sid="mobile-pop-up-menu_6"
            className="absolute left-[28px] top-[81px] w-[121px] h-[155px] md:left-[360px] md:top-[120px] md:w-[480px] md:h-[160px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(14.9416px, 26.7597px)' }}
          >
            <div className="border border-[rgb(30,30,30)] border-solid bg-transparent"></div>
          </div>

          {/* Background Box - mobile-pop-up-menu_7 */}
          <div
            data-sid="mobile-pop-up-menu_7"
            className="absolute left-[193px] top-[398px] w-[75px] h-[56px] md:left-[360px] md:top-[120px] md:w-[480px] md:h-[160px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(38.9156px, 71.9221px)' }}
          >
            <div className="bg-[rgb(249,242,236)]"></div>
          </div>

          {/* Elf Kits Image - mobile-pop-up-menu_8 */}
          <Link
            href="/gifting"
            data-sid="mobile-pop-up-menu_8"
            className="absolute left-[180px] top-[286px] w-[102px] h-[140px] md:left-[475px] md:top-[60px] md:w-[250px] md:h-[280px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(39px, 60.1039px)' }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-[length:100%] bg-[position:30%_0%]"
              style={{ backgroundImage: 'url("/images/28.jpg")' }}
            ></div>
          </Link>

          {/* Background Box - mobile-pop-up-menu_9 */}
          <div
            data-sid="mobile-pop-up-menu_9"
            className="absolute left-[37px] top-[233px] w-[102px] h-[40px] md:left-[370px] md:top-[130px] md:w-[480px] md:h-[160px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(14.8571px, 42.7143px)' }}
          >
            <div className="bg-[rgb(249,242,236)]"></div>
          </div>

          {/* Charcuterie Boards Image - mobile-pop-up-menu_10 */}
          <Link
            href="/experience"
            data-sid="mobile-pop-up-menu_10"
            className="absolute left-[37px] top-[89px] w-[102px] h-[140px] md:left-[475px] md:top-[60px] md:w-[250px] md:h-[280px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(14.8571px, 26.8442px)' }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-[length:120%] bg-[position:30%_50%]"
              style={{ backgroundImage: 'url("/images/29.jpg")' }}
            ></div>
          </Link>

          {/* Charcuterie Boards Text - mobile-pop-up-menu_11 */}
          <Link
            href="/experience"
            data-sid="mobile-pop-up-menu_11"
            className="absolute left-[26px] top-[232px] w-[124px] h-[30px] md:left-[543px] md:top-[190px] md:w-[113.39999999999999px] md:h-[21px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(14.8571px, 41.7013px)' }}
          >
            <p className="text-center font-normal text-[rgb(30,30,30)] leading-[1.1] tracking-[0em] text-[12px] md:text-[16px] md:leading-[1.4]" style={{ fontFamily: 'Montserrat' }}>
              EXPERIENCES<br />+ GIFTING<br />
            </p>
          </Link>

          {/* Border Box - mobile-pop-up-menu_12 */}
          <div
            data-sid="mobile-pop-up-menu_12"
            className="absolute left-[170px] top-[82px] w-[121px] h-[155px] md:left-[360px] md:top-[120px] md:w-[480px] md:h-[160px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(38.9156px, 26.9286px)' }}
          >
            <div className="border border-[rgb(30,30,30)] border-solid bg-transparent"></div>
          </div>

          {/* Background Box - mobile-pop-up-menu_13 */}
          <div
            data-sid="mobile-pop-up-menu_13"
            className="absolute left-[190px] top-[234px] w-[81px] h-[28px] md:left-[360px] md:top-[120px] md:w-[480px] md:h-[160px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(38.9156px, 41.8701px)' }}
          >
            <div className="bg-[rgb(249,242,236)]"></div>
          </div>

          {/* Grazing Tables Image - mobile-pop-up-menu_14 */}
          <Link
            href="/experience"
            data-sid="mobile-pop-up-menu_14"
            className="absolute left-[180px] top-[90px] w-[102px] h-[140px] md:left-[475px] md:top-[60px] md:w-[250px] md:h-[280px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(39px, 27.013px)' }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-[length:140%] bg-[position:40%_90%]"
              style={{ backgroundImage: 'url("/images/30.jpg")' }}
            ></div>
          </Link>

          {/* Grazing Tables Text - mobile-pop-up-menu_15 */}
          <Link
            href="/aboutus"
            data-sid="mobile-pop-up-menu_15"
            className="absolute left-[186px] top-[232px] w-[91px] h-[30px] md:left-[543px] md:top-[190px] md:w-[113.39999999999999px] md:h-[21px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(39.0844px, 41.7013px)' }}
          >
            <p className="text-center font-normal text-[rgb(30,30,30)] leading-[1.1] tracking-[0em] text-[12px] md:text-[16px] md:leading-[1.4]" style={{ fontFamily: 'Montserrat' }}>
              ABOUT US
            </p>
          </Link>

          {/* Border Box - mobile-pop-up-menu_16 */}
          <div
            data-sid="mobile-pop-up-menu_16"
            className="absolute left-[28px] top-[278px] w-[121px] h-[155px] md:left-[360px] md:top-[120px] md:w-[480px] md:h-[160px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(14.9416px, 60.0195px)' }}
          >
            <div className="border border-[rgb(30,30,30)] border-solid bg-transparent"></div>
          </div>

          {/* Background Box - mobile-pop-up-menu_17 */}
          <Link
            href="/eventdesign"
            data-sid="mobile-pop-up-menu_17"
            className="absolute left-[37px] top-[405px] w-[102px] h-[56px] md:left-[360px] md:top-[120px] md:w-[480px] md:h-[160px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(14.8571px, 73.1039px)' }}
          >
            <div className="bg-[rgb(249,242,236)]"></div>
          </Link>

          {/* Event Design Image - mobile-pop-up-menu_18 */}
          <Link
            href="/eventdesign"
            data-sid="mobile-pop-up-menu_18"
            className="absolute left-[37px] top-[286px] w-[102px] h-[140px] md:left-[475px] md:top-[60px] md:w-[250px] md:h-[280px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(14.8571px, 60.1039px)' }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-[position:60%_60%]"
              style={{ backgroundImage: 'url("/images/31.jpg")' }}
            ></div>
          </Link>

          {/* Elf Kits Text - mobile-pop-up-menu_19 */}
          <Link
            href="/gifting"
            data-sid="mobile-pop-up-menu_19"
            className="absolute left-[177px] top-[425px] w-[109px] h-[17px] md:left-[543px] md:top-[190px] md:w-[113.39999999999999px] md:h-[21px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(39.0844px, 73.1883px)' }}
          >
            <p className="text-center font-normal text-[rgb(30,30,30)] leading-[1.8] tracking-[0em] text-[12px] md:text-[16px] md:leading-[1.4]" style={{ fontFamily: 'Montserrat' }}>
              ELF KITS
            </p>
          </Link>

          {/* Event Design Text - mobile-pop-up-menu_20 */}
          <Link
            href="/eventdesign"
            data-sid="mobile-pop-up-menu_20"
            className="absolute left-[32px] top-[426px] w-[112px] h-[17px] md:left-[543px] md:top-[190px] md:w-[113.39999999999999px] md:h-[21px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(14.8571px, 73.3571px)' }}
          >
            <p className="text-center font-normal text-[rgb(30,30,30)] leading-[1.8] tracking-[0em] text-[12px] md:text-[16px] md:leading-[1.4]" style={{ fontFamily: 'Montserrat' }}>
              EVENT DESIGN
            </p>
          </Link>

          {/* Request Order Button Border - mobile-pop-up-menu_21 */}
          <Link
            href="/experience"
            data-sid="mobile-pop-up-menu_21"
            className="absolute left-[48px] top-[512px] w-[224px] h-[38px] md:left-[360px] md:top-[120px] md:w-[480px] md:h-[160px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(27.013px, 89.6494px)' }}
          >
            <div className="border border-[rgb(30,30,30)] border-solid bg-transparent"></div>
          </Link>

          {/* Request Order Button Text - mobile-pop-up-menu_23 */}
          <Link
            href="https://www.instagram.com/elev8moments/"
            data-sid="mobile-pop-up-menu_23"
            className="absolute left-[53px] top-[520px] w-[215px] h-[17px] md:left-[543px] md:top-[190px] md:w-[113.39999999999999px] md:h-[21px]"
            style={{ transform: 'scale(1.20312, 1.20312) translate(27.0974px, 89.2273px)' }}
          >
            <p className="text-center font-normal text-[rgb(30,30,30)] leading-[1.8] tracking-[0em] text-[12px] md:text-[16px] md:leading-[1.4]" style={{ fontFamily: 'Montserrat' }}>
              REQUEST AN ORDER<br />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobilePopUpMenu;