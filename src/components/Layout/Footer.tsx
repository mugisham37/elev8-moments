import React from 'react';
import Image from 'next/image';

const instagramImages = [
  { id: 1, src: "https://static.showit.co/117.5/ek_yOtCCRrCwzZcX3B8hrA/shared/img_0802.jpg", alt: "Instagram post 1" },
  { id: 2, src: "https://static.showit.co/117.5/VFXEeWQySl-eFSQkSy3EDA/shared/img_0962.jpg", alt: "Instagram post 2" },
  { id: 3, src: "https://static.showit.co/117.5/18wlK5fxSz2wq1_HP6g-Gg/shared/img_1587.jpg", alt: "Instagram post 3" },
  { id: 4, src: "https://static.showit.co/117.5/PHNHGyJiS9qMRD52Pu_o-Q/shared/img_1592.jpg", alt: "Instagram post 4" },
  { id: 5, src: "https://static.showit.co/117.5/YDahN39YQDOLF0eu_JOg0w/shared/img_1645_jpg.jpg", alt: "Instagram post 5" },
  { id: 6, src: "https://static.showit.co/117.5/WFGrz4XoQ9G_-5QSggqn1Q/shared/img_2636.jpg", alt: "Instagram post 6" },
  { id: 7, src: "https://static.showit.co/117.5/KIXcsr-vThudYVi-huUw0w/shared/img_3168.jpg", alt: "Instagram post 7" },
  { id: 8, src: "https://static.showit.co/117.5/hKBfQC9LTXe7Gq_jz02aCw/shared/img_3240_jpg.jpg", alt: "Instagram post 8" },
  { id: 9, src: "https://static.showit.co/117.5/6P0EnfuySHizWk6aXhFzVg/shared/img_3635_jpg.jpg", alt: "Instagram post 9" },
  { id: 10, src: "https://static.showit.co/117.5/Cr0kdpoORgKhOism4Tl3Nw/shared/img_4105_jpg.jpg", alt: "Instagram post 10" },
  { id: 11, src: "https://static.showit.co/117.5/zT0rI6zbRJ-ALo2E0c6lDA/shared/img_4401.jpg", alt: "Instagram post 11" },
  { id: 12, src: "https://static.showit.co/117.5/CnTWRvHoR2CRLLnDFgNTMQ/shared/img_4728.jpg", alt: "Instagram post 12" },
  { id: 13, src: "https://static.showit.co/117.5/7_lCnuRJRPCnE6AbXAEuPQ/shared/img_7457.jpg", alt: "Instagram post 13" },
  { id: 14, src: "https://static.showit.co/117.5/AFFJfD75SpWou1DbGU598g/shared/img_8064.jpg", alt: "Instagram post 14" },
];

export default function Footer() {
  return (
    <>
      {/* Instagram Section */}
      <section className="bg-[#f9f2ec] py-8 md:py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 
            className="text-[32px] leading-[38px] sm:text-[42px] sm:leading-[50px] md:text-[48px] md:leading-[58px] lg:text-[56px] lg:leading-[67.2px] text-center text-[#1e1e1e] mb-6 md:mb-8 lg:mb-12"
            style={{ fontFamily: 'Strings' }}
          >
            Follow Us On Instagram!
          </h2>
          <div className="relative mb-6 md:mb-8">
            {/* Side borders - hidden on mobile */}
            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-[189px] w-px bg-[#ffffff]"></div>
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[189px] w-px bg-[#ffffff]"></div>
            
            {/* Instagram Grid - responsive columns */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-[3px] sm:gap-[4px] md:gap-[5px] overflow-hidden">
              {instagramImages.map((image) => (
                <Image 
                  key={image.id}
                  alt={image.alt}
                  className="w-full h-[100px] sm:h-[110px] md:h-[117.6px] object-cover"
                  src={image.src}
                  width={200}
                  height={118}
                />
              ))}
            </div>
          </div>
          
          {/* Social CTA */}
          <div className="bg-[#1e1e1e] py-6 md:py-8 relative -mx-4 px-4">
            <a href="#" className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeLinejoin="round" 
                className="lucide lucide-instagram w-5 h-5 sm:w-6 sm:h-5 text-[#ffffff] hidden sm:block"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4">
                <span 
                  className="text-[28px] leading-[32px] sm:text-[36px] sm:leading-[38px] md:text-[44px] md:leading-[42px] lg:text-[54px] lg:leading-[48.6px] tracking-[-1.5px] md:tracking-[-2.6px] text-[#ffffff]"
                  style={{ fontFamily: 'Noiretblanc' }}
                >
                  Let&apos;s Get
                </span>
                <span
                  className="text-[38px] leading-[42px] sm:text-[48px] sm:leading-[50px] md:text-[58px] md:leading-[58px] lg:text-[73px] lg:leading-[65.8px] text-[#ffffff]"
                  style={{ fontFamily: 'Strings' }}
                >
                  Social
                </span>
              </div>
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="lucide lucide-facebook w-5 h-5 sm:w-6 sm:h-5 text-[#ffffff] hidden sm:block" 
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              
              {/* Mobile social icons */}
              <div className="flex sm:hidden items-center gap-4 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round" 
                  className="text-[#ffffff]"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-[#ffffff]" 
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      {/* Main Footer */}
      <footer className="bg-[#f9f2ec] py-8 md:py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 mb-8">
            {/* Menu Column */}
            <div className="sm:border-b sm:pb-6 lg:border-b-0 lg:pb-0">
              <h3 
                className="text-[32px] leading-[28px] md:text-[38px] md:leading-[29.4px] lg:text-[42px] tracking-[-3px] md:tracking-[-4.2px] text-[#1e1e1e] mb-6 md:mb-8"
                style={{ fontFamily: 'Noiretblanc' }}
              >
                Menu
              </h3>
              <nav className="space-y-3 md:space-y-4">
                <a 
                  href="#"
                  className="block text-[13px] leading-[23.4px] tracking-[1.4px] text-[#222222] uppercase hover:opacity-70"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  home
                </a>
                <a 
                  href="#"
                  className="block text-[13px] leading-[23.4px] tracking-[1.4px] text-[#222222] uppercase hover:opacity-70"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  about
                </a>
                <a 
                  href="#"
                  className="block text-[13px] leading-[23.4px] tracking-[1.4px] text-[#222222] uppercase hover:opacity-70"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  contact
                </a>
              </nav>
            </div>
            
            {/* Services Column */}
            <div className="sm:border-b sm:pb-6 lg:border-b-0 lg:pb-0 lg:border-l lg:border-[#000000] lg:pl-8">
              <nav className="space-y-3 md:space-y-4 lg:pt-12">
                <a 
                  href="#"
                  className="block text-[13px] leading-[23.4px] tracking-[1.4px] text-[#222222] uppercase hover:opacity-70"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  EXPERIENCES
                </a>
                <a 
                  href="#"
                  className="block text-[13px] leading-[23.4px] tracking-[1.4px] text-[#222222] uppercase hover:opacity-70"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  GIFTING SOLUTIONS
                </a>
                <a 
                  href="#"
                  className="block text-[13px] leading-[23.4px] tracking-[1.4px] text-[#222222] uppercase hover:opacity-70"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  EVENT DESIGN
                </a>
              </nav>
            </div>
            
            {/* Brand Column */}
            <div className="sm:border-b sm:pb-6 lg:border-b-0 lg:pb-0 lg:border-l lg:border-[#000000] lg:pl-8">
              <p 
                className="text-[36px] leading-[34px] md:text-[40px] md:leading-[38px] lg:text-[45px] lg:leading-[40.6px] text-[#000000]" 
                style={{ fontFamily: 'Noiretblanc' }}
              >
                Elev8<br />Moments
              </p>
            </div>
            
            {/* CTA Column */}
            <div className="lg:border-l lg:border-[#000000] lg:pl-8 flex flex-col justify-between gap-6">
              <div>
                <p 
                  className="text-[22px] leading-[24px] md:text-[26px] md:leading-[26px] lg:text-[30px] lg:leading-[27px] text-[#1e1e1e] mb-4 md:mb-6"
                  style={{ fontFamily: 'Noiretblanc' }}
                >
                  Perfect for celebrating or gifting any occasion!
                </p>
              </div>
              <a 
                href="#"
                className="bg-[#1e1e1e] text-center py-3 md:py-4 px-6 md:px-8 hover:opacity-90 transition-opacity"
              >
                <span
                  className="text-[12px] md:text-[13px] leading-[23.4px] tracking-[1.2px] md:tracking-[1.4px] text-[#f9f2ec] uppercase"
                  style={{ fontFamily: 'Raleway' }}
                >
                  book an experience
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Bottom Bar */}
      <div className="bg-[#f9f2ec] border-t border-[#e5e7eb] py-4 md:py-4">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <p 
              className="text-[11px] leading-[15.4px] text-[#1e1e1e]" 
              style={{ fontFamily: 'Montserrat' }}
            >
              PRIVACY
            </p>
            <div className="text-center">
              <p 
                className="text-[9px] leading-[12.6px] text-[#1e1e1e] mb-1" 
                style={{ fontFamily: 'Montserrat' }}
              >
                ELEV8 MOMENTS 2024 | ALL RIGHTS RESERVED
              </p>
              <a 
                href="#"
                className="text-[14px] leading-[19.6px] tracking-[0.6px] text-[#1e1e1e] hover:opacity-70"
                style={{ fontFamily: 'Noiretblanc' }}
              >
                Website Designed With Love By Indie Haus Design Co.
              </a>
            </div>
            <p 
              className="text-[11px] leading-[15.4px] text-[#1e1e1e]" 
              style={{ fontFamily: 'Montserrat' }}
            >
              LEGAL
            </p>
          </div>
          
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-6">
              <p 
                className="text-[10px] leading-[14px] text-[#1e1e1e]" 
                style={{ fontFamily: 'Montserrat' }}
              >
                PRIVACY
              </p>
              <p 
                className="text-[10px] leading-[14px] text-[#1e1e1e]" 
                style={{ fontFamily: 'Montserrat' }}
              >
                LEGAL
              </p>
            </div>
            <p 
              className="text-[8px] leading-[11px] text-[#1e1e1e]" 
              style={{ fontFamily: 'Montserrat' }}
            >
              ELEV8 MOMENTS 2024 | ALL RIGHTS RESERVED
            </p>
            <a 
              href="#"
              className="text-[12px] leading-[16px] tracking-[0.4px] text-[#1e1e1e] hover:opacity-70"
              style={{ fontFamily: 'Noiretblanc' }}
            >
              Website Designed With Love By Indie Haus Design Co.
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
