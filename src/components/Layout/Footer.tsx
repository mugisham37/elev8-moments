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
      <section className="bg-[#f9f2ec] py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 
            className="text-[56px] leading-[67.2px] text-center text-[#1e1e1e] mb-12"
            style={{ fontFamily: 'Strings' }}
          >
            Follow Us On Instagram!
          </h2>
          <div className="relative mb-8">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[189px] w-px bg-[#ffffff]"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[189px] w-px bg-[#ffffff]"></div>
            <div className="grid grid-cols-7 gap-[5px] overflow-hidden h-60">
              {instagramImages.map((image) => (
                <Image 
                  key={image.id}
                  alt={image.alt}
                  className="w-full h-[117.6px] object-cover"
                  src={image.src}
                  width={200}
                  height={118}
                />
              ))}
            </div>
          </div>
          <div className="bg-[#1e1e1e] py-8 relative -mx-4 px-4">
            <a href="#" className="flex items-center justify-center gap-4 hover:opacity-70">
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
                className="lucide lucide-instagram w-6 h-5 text-[#ffffff]"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span 
                className="text-[54px] leading-[48.6px] tracking-[-2.6px] text-[#ffffff]"
                style={{ fontFamily: 'Noiretblanc' }}
              >
                Let&apos;s Get
              </span>
              <span
                className="text-[73px] leading-[65.8px] text-[#ffffff]"
                style={{ fontFamily: 'Strings' }}
              >
                Social
              </span>
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
                className="lucide lucide-facebook w-6 h-5 text-[#ffffff]" 
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      <footer className="bg-[#f9f2ec] py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h3 
                className="text-[42px] leading-[29.4px] tracking-[-4.2px] text-[#1e1e1e] mb-8"
                style={{ fontFamily: 'Noiretblanc' }}
              >
                Menu
              </h3>
              <nav className="space-y-4">
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
            <div className="border-l border-[#000000] pl-8">
              <nav className="space-y-4 pt-12">
                <a 
                  href="#"
                  className="block text-[13px] leading-[23.4px] tracking-[1.4px] text-[#222222] uppercase hover:opacity-70"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  BOARDS + BOXES
                </a>
                <a 
                  href="#"
                  className="block text-[13px] leading-[23.4px] tracking-[1.4px] text-[#222222] uppercase hover:opacity-70"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  GRAZING TABLES
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
            <div className="border-l border-[#000000] pl-8">
              <p 
                className="text-[45px] leading-[40.6px] text-[#000000]" 
                style={{ fontFamily: 'Noiretblanc' }}
              >
                Glam<br />Haus<br />Design Co.
              </p>
            </div>
            <div className="border-l border-[#000000] pl-8 flex flex-col justify-between">
              <div>
                <p 
                  className="text-[30px] leading-[27px] text-[#1e1e1e] mb-6"
                  style={{ fontFamily: 'Noiretblanc' }}
                >
                  Perfect for gifting or hosting any occasion!
                </p>
              </div>
              <a 
                href="#"
                className="bg-[#1e1e1e] text-center py-4 px-8 hover:opacity-90 transition-opacity"
              >
                <span
                  className="text-[13px] leading-[23.4px] tracking-[1.4px] text-[#f9f2ec] uppercase"
                  style={{ fontFamily: 'Raleway' }}
                >
                  place an order
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      <div className="bg-[#f9f2ec] border-t border-[#e5e7eb] py-4">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
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
              GLAM HAUS DESIGN CO 2024 | ALL RIGHTS RESERVED
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
      </div>
    </>
  );
}
