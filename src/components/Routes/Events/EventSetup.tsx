export default function EventSetup() {
  

  return (
    <div className="relative min-h-[746px] bg-[#1E1E1E] py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="max-w-[1200px] mx-auto h-full relative px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-normal text-[#F9F2EC] font-['Noiretblanc'] text-center mb-3 sm:mb-4 leading-tight">
                        EVENT SETUP &amp; EXPERIENCE
                    </h2>
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#F9F2EC] font-['Raleway'] tracking-[1.2px] sm:tracking-[1.4px] md:tracking-[1.6px] text-center mb-6 sm:mb-7 md:mb-8">
                        WE HANDLE THE DETAILS, YOU ENJOY THE CONNECTION
                    </p>
                    <p className="text-[12px] sm:text-[13px] text-[#F9F2EC] font-['Raleway'] font-light text-center max-w-[340px] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[894px] mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2">
                        Our dedicated team specializes in event design and curation, ensuring every aspect is perfectly executed. From the discovery and planning stages to the final touches, we work closely with you to bring your vision to life. We&apos;ll transform any venue into an intentional space that captures the essence of your gathering, creating an atmosphere that leaves lasting memories.
                    </p>
                    
                    {/* Mobile Layout: Stacked vertically */}
                    <div className="flex flex-col sm:hidden gap-6 w-full max-w-[340px]">
                        <div className="w-full aspect-[339/333] bg-gray-200 rounded opacity-90 overflow-hidden">
                            <img src="/images/35.jpg" alt="Event setup" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full aspect-[236/289] bg-gray-200 rounded opacity-90 overflow-hidden">
                            <img src="/images/7.JPG" alt="Event detail" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full aspect-[339/336] bg-gray-200 rounded overflow-hidden">
                            <img src="/images/8.JPG" alt="Event setup" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Tablet Layout: 2 columns with third centered below */}
                    <div className="hidden sm:flex md:hidden flex-wrap gap-6 justify-center w-full max-w-[600px]">
                        <div className="w-[calc(50%-12px)] aspect-[339/333] bg-gray-200 rounded opacity-90 overflow-hidden">
                            <img src="/images/35.jpg" alt="Event setup" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[calc(50%-12px)] aspect-[236/289] bg-gray-200 rounded opacity-90 overflow-hidden">
                            <img src="/images/7.JPG" alt="Event detail" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[60%] aspect-[339/336] bg-gray-200 rounded overflow-hidden mx-auto">
                            <img src="/images/8.JPG" alt="Event setup" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Medium Tablet Layout: All 3 in a row with smaller sizes */}
                    <div className="hidden md:flex lg:hidden gap-4 items-center justify-center w-full">
                        <div className="w-[28%] max-w-[250px] aspect-[339/333] bg-gray-200 rounded opacity-90 overflow-hidden">
                            <img src="/images/35.jpg" alt="Event setup" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[24%] max-w-[200px] aspect-[236/289] bg-gray-200 rounded opacity-90 overflow-hidden">
                            <img src="/images/7.JPG" alt="Event detail" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[28%] max-w-[250px] aspect-[339/336] bg-gray-200 rounded overflow-hidden">
                            <img src="/images/8.JPG" alt="Event setup" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Desktop Layout: Original 3-image horizontal layout */}
                    <div className="hidden lg:flex gap-8 items-center">
                        <div className="w-[339px] h-[333px] bg-gray-200 rounded opacity-90 overflow-hidden">
                            <img src="/images/35.jpg" alt="Event setup" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[236px] h-[289px] bg-gray-200 rounded opacity-90 overflow-hidden">
                            <img src="/images/7.JPG" alt="Event detail" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[339px] h-[336px] bg-gray-200 rounded overflow-hidden">
                            <img src="/images/8.JPG" alt="Event setup" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
  );
}
