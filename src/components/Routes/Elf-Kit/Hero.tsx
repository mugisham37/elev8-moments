"use client";

export default function Hero() {
 

  return (
    <div className="relative bg-[#314F39] py-16 md:py-24">
                <div className="absolute inset-0 opacity-10 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://static.showit.co/1600/5oP4HTzeiuz6Z6Cdbs0VHQ/shared/img_3527.jpg")' }}>
                </div>
                <div className="relative max-w-[1200px] mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="w-full max-w-[392px] mx-auto">
                            <div className="w-full h-[479px] bg-cover bg-center"
                                style={{ backgroundImage: 'url("https://static.showit.co/800/xVBN4FzpzPWjUxUuzSt7BQ/shared/misty-ladd-rdjb3hzvgju-unsplash.jpg")' }}>
                            </div>
                        </div>
                        <div className="text-[#F9F2EC]">
                            <p className="text-[50px] font-[Strings] leading-tight mb-4 text-[#CFDAc7]">Elev8 Moments</p>
                            <div className="flex items-center gap-2 mb-4">
                                <h1 className="text-[56px] font-[Noiretblanc] leading-tight">GIFTING</h1>
                            </div>
                            <div className="w-8 h-px bg-[#F9F2EC] mb-4"></div>
                            <p className="text-[15px] font-[Raleway] tracking-[1.6px] leading-tight mb-6 uppercase">BECAUSE EVERY MOMENT DESERVES MORE THAN JUST A GIFT!</p>
                            <p className="text-[16px] font-[Raleway] leading-relaxed mb-8">Imagine your team or loved ones opening a thoughtfully curated gift—elegant packaging, meaningful contents, or personalized touches that create lasting impressions! At Elev8 Moments, we offer corporate packages that are perfect for employee appreciation and client recognition, while our personal gift options transform any occasion into a memorable celebration throughout the entire year!</p><a
                                href="#"
                                className="inline-block border border-[#F9F2EC] px-8 py-3 text-[14px] font-[Raleway] uppercase tracking-[1.4px] hover:bg-[#F9F2EC] hover:text-[#314F39] transition-colors">REQUEST A QUOTE!</a>
                        </div>
                    </div>
                </div>
            </div>
  );
}
