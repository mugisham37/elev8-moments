import React from 'react'

export const SeasonalDecor = () => {
  return (
    <div className="relative bg-[#95AA9B] py-12 md:py-16 lg:py-20 xl:min-h-[807px]">
      <div className="max-w-[1200px] mx-auto h-full relative px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        
        {/* Text Content */}
        <div className="w-full lg:flex-1 text-center lg:text-right lg:pr-8 xl:pr-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[56px] font-normal text-[#F9F2EC] font-['Noiretblanc'] leading-tight mb-4 md:mb-6">
            VISIT RWANDA &amp;<br />TOURISM EXPERIENCES
          </h2>
          <p className="text-sm sm:text-base lg:text-[16px] text-[#F9F2EC] font-['Raleway'] leading-relaxed max-w-2xl mx-auto lg:mx-0 lg:ml-auto">
            Embrace the culture of Kigali with our enchanting tourism experiences! From creative workshops featuring local artisans and cultural activities to soulful gatherings celebrating Rwanda&apos;s vibrant spirit and community connection, we create experiences that capture the essence of this destination. Our events are infused with intention and meaning, ensuring your visit feels memorable and inspiring.
          </p>
        </div>

        {/* Images Section */}
        <div className="w-full lg:flex-1 flex items-center justify-center">
          
          {/* Mobile & Tablet Layout (< 1024px) */}
          <div className="lg:hidden w-full max-w-md mx-auto space-y-6">
            {/* Image 1 - With offset background */}
            <div className="relative w-full">
              <div className="w-full aspect-[4/3] bg-[#95AA9B]"></div>
              <div className="absolute top-3 left-3 right-3 bottom-3 bg-gray-200 rounded overflow-hidden shadow-lg">
                <img src="/images/16.jpg" alt="Rwanda experience" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Image 2 - Full width */}
            <div className="w-full aspect-[3/4] bg-gray-200 rounded overflow-hidden shadow-lg">
              <img src="/images/17.jpg" alt="Cultural activity" className="w-full h-full object-cover" />
            </div>

            {/* Image 3 - With offset background */}
            <div className="relative w-full">
              <div className="w-full aspect-[4/3] bg-[#95AA9B]"></div>
              <div className="absolute top-3 left-3 right-3 bottom-3 bg-gray-200 rounded overflow-hidden shadow-lg">
                <img src="/images/18.jpg" alt="Tourism package" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Desktop Layout (>= 1024px) */}
          <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-8">
            {/* Left Column - Single image with offset */}
            <div className="relative flex-shrink-0">
              <div className="w-[320px] xl:w-[380px] 2xl:w-[480px] h-[224px] xl:h-[266px] 2xl:h-[334px] bg-[#95AA9B]"></div>
              <div className="absolute top-4 left-4 w-[240px] xl:w-[280px] 2xl:w-[353px] h-[200px] xl:h-[238px] 2xl:h-[298px] bg-gray-200 rounded overflow-hidden shadow-lg">
                <img src="/images/16.jpg" alt="Rwanda experience" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Column - Two stacked images */}
            <div className="flex flex-col gap-4 xl:gap-6 flex-shrink-0">
              {/* Tall image */}
              <div className="w-[300px] xl:w-[360px] 2xl:w-[429px] h-[400px] xl:h-[480px] 2xl:h-[587px] bg-gray-200 rounded overflow-hidden shadow-lg">
                <img src="/images/17.jpg" alt="Cultural activity" className="w-full h-full object-cover" />
              </div>

              {/* Small image with offset */}
              <div className="relative">
                <div className="w-[180px] xl:w-[220px] 2xl:w-[267px] h-[190px] xl:h-[230px] 2xl:h-[280px] bg-[#95AA9B]"></div>
                <div className="absolute top-4 left-4 w-[160px] xl:w-[195px] 2xl:w-[237px] h-[170px] xl:h-[205px] 2xl:h-[250px] bg-gray-200 rounded overflow-hidden shadow-lg">
                  <img src="/images/18.jpg" alt="Tourism package" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
