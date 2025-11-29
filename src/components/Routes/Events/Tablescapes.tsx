import React from 'react'

export const Tablescapes = () => {
  return (
    <div className="relative min-h-[807px] bg-[#F9F2EC] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto h-full relative px-4 sm:px-6 lg:px-8">
        {/* Mobile & Tablet Layout */}
        <div className="flex flex-col lg:hidden gap-8 md:gap-10">
          {/* Left Image - Mobile/Tablet */}
          <div className="w-full max-w-[400px] mx-auto">
            <div className="w-full aspect-[247/417] bg-gray-200 rounded overflow-hidden">
              <img src="/images/12.JPG" alt="Workshop setup" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Text Content - Mobile/Tablet */}
          <div className="text-center md:text-left max-w-[600px] mx-auto md:mx-0">
            <p className="text-[40px] sm:text-[50px] md:text-[58px] font-normal text-[#1E1E1E] font-['Strings'] leading-tight mb-2">
              Soulful
            </p>
            <p className="text-[36px] sm:text-[44px] md:text-[50px] font-normal text-[#1E1E1E] font-['Noiretblanc'] mb-4">
              WORKSHOPS
            </p>
            <div className="w-[117px] h-px bg-[#1E1E1E] mb-6 mx-auto md:mx-0"></div>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#1E1E1E] font-['Raleway'] leading-relaxed px-4 sm:px-0">
              Take your gathering to the next level with our soulful workshops! We know creativity is the centerpiece of any celebration, and our team designs meaningful experiences that reflect your unique vision. From Bloom &amp; Bond floral sessions to Paint a Shirt creative activities, every detail is carefully chosen to make your event a true experience. Imagine spaces filled with creative materials, inspiring ambiance, and intentional moments, welcoming your guests to enjoy an unforgettable experience.
            </p>
          </div>

          {/* Right Images Grid - Mobile/Tablet */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-[600px] mx-auto">
            <div className="w-full aspect-[247/229] bg-gray-200 rounded overflow-hidden">
              <img src="/images/13.JPG" alt="Workshop detail" className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[234/229] bg-gray-200 rounded overflow-hidden">
              <img src="/images/14.JPG" alt="Workshop materials" className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[161/229] bg-gray-200 rounded overflow-hidden col-span-2 sm:col-span-1 max-w-[250px] mx-auto sm:mx-0">
              <img src="/images/15.JPG" alt="Workshop space" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Desktop Layout (1024px+) */}
        <div className="hidden lg:flex items-center h-full min-h-[807px]">
          {/* Left Image - Desktop */}
          <div className="flex-1">
            <div className="w-[247px] h-[417px] bg-gray-200 rounded overflow-hidden">
              <img src="/images/12.JPG" alt="Workshop setup" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Text Content - Desktop */}
          <div className="flex-1 text-left pl-12">
            <p className="text-[65px] font-normal text-[#1E1E1E] font-['Strings'] leading-tight mb-2">
              Soulful
            </p>
            <p className="text-[56px] font-normal text-[#1E1E1E] font-['Noiretblanc'] mb-4">
              WORKSHOPS
            </p>
            <div className="w-[117px] h-px bg-[#1E1E1E] mb-6"></div>
            <p className="text-[16px] text-[#1E1E1E] font-['Raleway'] leading-relaxed max-w-[404px]">
              Take your gathering to the next level with our soulful workshops! We know creativity is the centerpiece of any celebration, and our team designs meaningful experiences that reflect your unique vision. From Bloom &amp; Bond floral sessions to Paint a Shirt creative activities, every detail is carefully chosen to make your event a true experience. Imagine spaces filled with creative materials, inspiring ambiance, and intentional moments, welcoming your guests to enjoy an unforgettable experience.
            </p>
          </div>

          {/* Right Images - Desktop */}
          <div className="flex flex-col gap-4">
            <div className="w-[247px] h-[229px] bg-gray-200 rounded overflow-hidden">
              <img src="/images/13.JPG" alt="Workshop detail" className="w-full h-full object-cover" />
            </div>
            <div className="w-[234px] h-[229px] bg-gray-200 rounded overflow-hidden">
              <img src="/images/14.JPG" alt="Workshop materials" className="w-full h-full object-cover" />
            </div>
            <div className="w-[161px] h-[229px] bg-gray-200 rounded overflow-hidden">
              <img src="/images/15.JPG" alt="Workshop space" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
