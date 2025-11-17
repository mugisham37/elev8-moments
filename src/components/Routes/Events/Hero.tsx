"use client";

export default function Hero() {
  return (
    <div className="relative h-[659px] bg-[#EDCAB3]">
                <div className="absolute inset-0 opacity-10 bg-cover bg-center"
                    style={{backgroundImage: 'url("https://static.showit.co/1600/vwQLH4XDLdvk00GNBtFBuQ/shared/img_3172.jpg")'}}>
                </div>
                <div className="max-w-[1200px] mx-auto h-full relative px-4 flex items-center">
                    <div className="flex-1 text-right pr-12">
                        <h1 className="text-[56px] font-normal text-[#1E1E1E] font-['Noiretblanc'] mb-4">EVENT DESIGN</h1>
                        <p className="text-[15px] text-[#1E1E1E] font-['Raleway'] tracking-[1.6px] mb-6 uppercase">YOUR DREAM EXPERIENCE...DESIGNED WITH INTENTION</p>
                        <p className="text-[16px] text-black font-['Raleway'] leading-relaxed mb-8">Imagine stepping into a space that&apos;s intentionally curated just for your gathering. Whether you&apos;re hosting a soulful retreat, a creative workshop, or a meaningful community celebration, we&apos;re here to turn your vision into something memorable with our creativity and attention to detail.</p><a href="#"
                            className="inline-block px-8 py-4 border border-[#1E1E1E] text-[14px] text-[#1E1E1E] uppercase tracking-[1.4px] font-['Raleway'] hover:bg-[#1E1E1E] hover:text-[#F9F2EC] transition-colors no-underline">CONTACT
                            US</a>
                    </div>
                    <div className="flex-1 flex items-center justify-center gap-8">
                        <div className="w-[486px] h-[541px] bg-gray-200 rounded overflow-hidden shadow-lg">
                            <img src="/images/33.jpg" alt="Event showcase" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative">
                            <div className="w-[303px] h-[446px] bg-[#1E1E1E] rounded"></div>
                            <div className="absolute top-5 left-5 w-[268px] h-[407px] bg-gray-200 rounded overflow-hidden">
                                <img src="/images/34.jpg" alt="Event detail" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  );
}