"use client";

export default function FloralDesign() {
  return (
    <>
      <div className="relative min-h-[754px] bg-[#1E1E1E] py-12 md:py-16 lg:py-0">
        <div className="max-w-[1200px] mx-auto h-full relative px-4 sm:px-6 lg:px-4">
          {/* Desktop Layout (lg+) - Original 3-column horizontal */}
          <div className="hidden lg:flex items-center h-[754px] gap-8">
            {/* Title Section */}
            <div className="flex-1">
              <p className="text-[85px] font-normal text-[#F9F2EC] font-['Strings'] mb-2 leading-tight">
                Retreat
              </p>
              <p className="text-[20px] font-normal text-[#F9F2EC] font-['Noiretblanc'] tracking-[2px]">
                EXPERIENCES
              </p>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-left">
              <p className="text-[16px] text-[#F9F2EC] font-['Raleway'] tracking-[1.6px] mb-4">
                ELEVATE YOUR MOMENTS. ONE EXPERIENCE AT A TIME.
              </p>
              <p className="text-[16px] text-[#F9F2EC] font-['Raleway'] leading-relaxed max-w-[644px] mb-8">
                Welcome to a world where moments tell a story! At Elev8 Moments we specialize in curating 
                intentional retreat experiences perfect for any purpose. Whether you&apos;re seeking healing, 
                hosting a creative gathering, or simply wanting to elevate your community, our thoughtful 
                experiences are tailored to bring connection and meaning to your life.
              </p>
              <a
                href="#"
                className="inline-block px-8 py-4 border border-[#F9F2EC] text-[14px] text-[#F9F2EC] uppercase tracking-[1.4px] font-['Raleway'] hover:bg-[#F9F2EC] hover:text-[#1E1E1E] transition-colors no-underline"
              >
                REQUEST A QUOTE
              </a>
            </div>

            {/* Images Section */}
            <div className="flex gap-6">
              <div className="w-[339px] h-[333px] bg-gray-200 rounded opacity-90 overflow-hidden">
                <img src="/images/9.JPG" alt="Retreat experience" className="w-full h-full object-cover" />
              </div>
              <div className="w-[236px] h-[289px] bg-gray-200 rounded opacity-90 overflow-hidden">
                <img src="/images/10.JPG" alt="Retreat detail" className="w-full h-full object-cover" />
              </div>
              <div className="w-[339px] h-[336px] bg-gray-200 rounded overflow-hidden">
                <img src="/images/11.JPG" alt="Retreat setup" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Tablet & Mobile Layout (< lg) - Stacked vertical */}
          <div className="lg:hidden space-y-8 md:space-y-12">
            {/* Title Section */}
            <div className="text-center md:text-left">
              <p className="text-[48px] sm:text-[60px] md:text-[70px] font-normal text-[#F9F2EC] font-['Strings'] mb-2 leading-tight">
                Retreat
              </p>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#F9F2EC] font-['Noiretblanc'] tracking-[2px]">
                EXPERIENCES
              </p>
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left">
              <p className="text-[13px] sm:text-[14px] md:text-[16px] text-[#F9F2EC] font-['Raleway'] tracking-[1.4px] md:tracking-[1.6px] mb-4">
                ELEVATE YOUR MOMENTS. ONE EXPERIENCE AT A TIME.
              </p>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#F9F2EC] font-['Raleway'] leading-relaxed mb-6 md:mb-8 max-w-[600px] mx-auto md:mx-0">
                Welcome to a world where moments tell a story! At Elev8 Moments we specialize in curating 
                intentional retreat experiences perfect for any purpose. Whether you&apos;re seeking healing, 
                hosting a creative gathering, or simply wanting to elevate your community, our thoughtful 
                experiences are tailored to bring connection and meaning to your life.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 border border-[#F9F2EC] text-[12px] sm:text-[14px] text-[#F9F2EC] uppercase tracking-[1.2px] sm:tracking-[1.4px] font-['Raleway'] hover:bg-[#F9F2EC] hover:text-[#1E1E1E] transition-colors no-underline"
              >
                REQUEST A QUOTE
              </a>
            </div>

            {/* Images Section - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-[600px] mx-auto md:max-w-none">
              {/* Image 1 - Full width on mobile, left on tablet */}
              <div className="w-full h-[280px] sm:h-[320px] md:h-[360px] bg-gray-200 rounded opacity-90 overflow-hidden sm:col-span-2 md:col-span-1">
                <img src="/images/9.JPG" alt="Retreat experience" className="w-full h-full object-cover" />
              </div>
              
              {/* Image 2 - Half width on tablet+ */}
              <div className="w-full h-[280px] sm:h-[320px] md:h-[360px] bg-gray-200 rounded opacity-90 overflow-hidden">
                <img src="/images/10.JPG" alt="Retreat detail" className="w-full h-full object-cover" />
              </div>
              
              {/* Image 3 - Half width on tablet+ */}
              <div className="w-full h-[280px] sm:h-[320px] md:h-[360px] bg-gray-200 rounded overflow-hidden">
                <img src="/images/11.JPG" alt="Retreat setup" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
