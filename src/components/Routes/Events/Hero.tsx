"use client";

export default function Hero() {
  return (
    <div className="relative min-h-[500px] md:min-h-[600px] lg:h-[659px] bg-[#EDCAB3] py-8 md:py-12 lg:py-0">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{backgroundImage: 'url("https://static.showit.co/1600/vwQLH4XDLdvk00GNBtFBuQ/shared/img_3172.jpg")'}}
      />
      
      <div className="max-w-[1200px] mx-auto h-full relative px-4 sm:px-6 lg:px-4 flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-0">
        
        {/* Images Section - First on mobile, second on desktop */}
        <div className="w-full lg:flex-1 flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 order-1 lg:order-2">
          {/* Main large image */}
          <div className="w-[45%] sm:w-[280px] md:w-[340px] lg:w-[380px] xl:w-[486px] aspect-[486/541] bg-gray-200 rounded overflow-hidden shadow-lg flex-shrink-0">
            <img 
              src="/images/33.jpg" 
              alt="Event showcase" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Overlapping smaller image */}
          <div className="relative w-[35%] sm:w-[180px] md:w-[220px] lg:w-[240px] xl:w-[303px] flex-shrink-0">
            <div className="w-full aspect-[303/446] bg-[#1E1E1E] rounded" />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-5 lg:left-5 w-[calc(100%-24px)] sm:w-[calc(100%-32px)] lg:w-[268px] aspect-[268/407] bg-gray-200 rounded overflow-hidden">
              <img 
                src="/images/34.jpg" 
                alt="Event detail" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>

        {/* Text Content - Second on mobile, first on desktop */}
        <div className="w-full lg:flex-1 text-center lg:text-right lg:pr-8 xl:pr-12 order-2 lg:order-1">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[56px] font-normal text-[#1E1E1E] font-['Noiretblanc'] mb-3 md:mb-4 leading-tight">
            EVENT DESIGN
          </h1>
          
          <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-[#1E1E1E] font-['Raleway'] tracking-[1.2px] sm:tracking-[1.4px] lg:tracking-[1.6px] mb-4 md:mb-5 lg:mb-6 uppercase">
            YOUR DREAM EXPERIENCE...DESIGNED WITH INTENTION
          </p>
          
          <p className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] text-black font-['Raleway'] leading-relaxed mb-6 md:mb-7 lg:mb-8 max-w-[600px] mx-auto lg:mx-0 lg:ml-auto">
            Imagine stepping into a space that&apos;s intentionally curated just for your gathering. Whether you&apos;re hosting a soulful retreat, a creative workshop, or a meaningful community celebration, we&apos;re here to turn your vision into something memorable with our creativity and attention to detail.
          </p>
          
          <a 
            href="#" 
            className="inline-block px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 border border-[#1E1E1E] text-[12px] sm:text-[13px] lg:text-[14px] text-[#1E1E1E] uppercase tracking-[1.2px] sm:tracking-[1.3px] lg:tracking-[1.4px] font-['Raleway'] hover:bg-[#1E1E1E] hover:text-[#F9F2EC] transition-colors no-underline"
          >
            CONTACT US
          </a>
        </div>

      </div>
    </div>
  );
}