import React from 'react';

interface TopNavProps {
  className?: string;
}

export const TopNav: React.FC<TopNavProps> = ({ className = '' }) => {
  return (
    <div className={`relative bg-[#F9F2EC] border-b border-[#636363] ${className}`}>
      {/* Desktop Layout (1200px+) */}
      <div className="hidden xl:block h-[165px]">
        <div className="max-w-[1200px] mx-auto h-full relative px-4">
          <a 
            href="#" 
            className="absolute left-1/2 top-[42px] -translate-x-1/2 no-underline"
          >
            <h1 className="text-[43px] font-normal text-[#1E1E1E] text-center uppercase font-['Noiretblanc']">
              ELEV8 MOMENTS
            </h1>
          </a>
          
          <div className="absolute left-0 top-[53px] text-center">
            <p className="text-[20px] font-normal text-[#1E1E1E] font-['Noiretblanc'] mb-4">
              Need an experience?
            </p>
            <a 
              href="#" 
              className="inline-block text-[11px] font-bold text-[#1E1E1E] uppercase tracking-[2.2px] font-['Raleway'] no-underline hover:opacity-70 transition-opacity"
            >
              view our experiences
            </a>
          </div>
          
          <div className="absolute left-[306px] top-[5px] w-px h-[154px] bg-[#636363]"></div>
          
          <div className="absolute left-1/2 top-[101px] -translate-x-1/2 w-[453px]">
            <h2 className="text-[17px] font-normal text-[#1E1E1E] text-center font-['Raleway']">
              Curated Experiences + Thoughtful Gifting + Events
            </h2>
            <div className="w-full h-px bg-[#1E1E1E] mt-2"></div>
          </div>
          
          <div className="absolute right-0 top-11 text-center">
            <p className="text-[20px] font-normal text-[#1E1E1E] font-['Noiretblanc'] mb-4">
              Looking for the perfect gift for someone special?
            </p>
            <a 
              href="#" 
              className="inline-block text-[11px] font-bold text-[#1E1E1E] uppercase tracking-[2.2px] font-['Raleway'] no-underline hover:opacity-70 transition-opacity"
            >
              view our GIFTS
            </a>
          </div>
          
          <div className="absolute right-[307px] top-[5px] w-px h-[154px] bg-[#636363]"></div>
        </div>
      </div>

      {/* Tablet Layout (768px - 1199px) */}
      <div className="hidden md:block xl:hidden py-8 px-6">
        <div className="max-w-[768px] mx-auto">
          {/* Logo */}
          <a 
            href="#" 
            className="block text-center mb-6 no-underline"
          >
            <h1 className="text-[36px] font-normal text-[#1E1E1E] uppercase font-['Noiretblanc']">
              ELEV8 MOMENTS
            </h1>
          </a>
          
          {/* Subtitle */}
          <div className="mb-6 px-4">
            <h2 className="text-[15px] font-normal text-[#1E1E1E] text-center font-['Raleway']">
              Curated Experiences + Thoughtful Gifting + Events
            </h2>
            <div className="w-full h-px bg-[#1E1E1E] mt-2"></div>
          </div>
          
          {/* Two Column CTAs */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="text-center border-r border-[#636363] pr-6">
              <p className="text-[18px] font-normal text-[#1E1E1E] font-['Noiretblanc'] mb-3">
                Need an experience?
              </p>
              <a 
                href="#" 
                className="inline-block text-[11px] font-bold text-[#1E1E1E] uppercase tracking-[2.2px] font-['Raleway'] no-underline hover:opacity-70 transition-opacity"
              >
                view our experiences
              </a>
            </div>
            
            <div className="text-center pl-6">
              <p className="text-[18px] font-normal text-[#1E1E1E] font-['Noiretblanc'] mb-3">
                Looking for the perfect gift?
              </p>
              <a 
                href="#" 
                className="inline-block text-[11px] font-bold text-[#1E1E1E] uppercase tracking-[2.2px] font-['Raleway'] no-underline hover:opacity-70 transition-opacity"
              >
                view our GIFTS
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (<768px) */}
      <div className="block md:hidden py-6 px-4">
        <div className="max-w-[480px] mx-auto">
          {/* Logo */}
          <a 
            href="#" 
            className="block text-center mb-4 no-underline"
          >
            <h1 className="text-[28px] sm:text-[32px] font-normal text-[#1E1E1E] uppercase font-['Noiretblanc'] leading-tight">
              ELEV8 MOMENTS
            </h1>
          </a>
          
          {/* Subtitle */}
          <div className="mb-6 px-2">
            <h2 className="text-[13px] sm:text-[14px] font-normal text-[#1E1E1E] text-center font-['Raleway'] leading-relaxed">
              Curated Experiences + Thoughtful Gifting + Events
            </h2>
            <div className="w-full h-px bg-[#1E1E1E] mt-2"></div>
          </div>
          
          {/* Stacked CTAs */}
          <div className="space-y-5">
            <div className="text-center pb-5 border-b border-[#636363]">
              <p className="text-[16px] font-normal text-[#1E1E1E] font-['Noiretblanc'] mb-2">
                Need an experience?
              </p>
              <a 
                href="#" 
                className="inline-block text-[10px] font-bold text-[#1E1E1E] uppercase tracking-[2px] font-['Raleway'] no-underline hover:opacity-70 transition-opacity"
              >
                view our experiences
              </a>
            </div>
            
            <div className="text-center pt-1">
              <p className="text-[16px] font-normal text-[#1E1E1E] font-['Noiretblanc'] mb-2">
                Looking for the perfect gift?
              </p>
              <a 
                href="#" 
                className="inline-block text-[10px] font-bold text-[#1E1E1E] uppercase tracking-[2px] font-['Raleway'] no-underline hover:opacity-70 transition-opacity"
              >
                view our GIFTS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
