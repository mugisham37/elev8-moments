/* eslint-disable @next/next/no-img-element */

export default function Testimonials() {
  return (
    <section className="bg-[#1e1e1e] py-8 sm:py-12 md:py-14 lg:py-16 xl:py-20">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                    <div className="bg-[#f9f2ec] border border-[#1e1e1e] p-6 sm:p-8 md:p-10 lg:p-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                        <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-6 sm:gap-8 items-center">
                            <img alt="Customer"
                                className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-full md:h-[200px] lg:h-[238px] object-cover rounded-full mx-auto md:mx-0" src="/images/31.jpg" />
                            <div>
                                <h4 className="text-[22px] sm:text-[26px] md:text-[29px] lg:text-[33px] font-['Noiretblanc'] mb-3 sm:mb-4 leading-tight">&quot;Unlike anything I&apos;ve ever attended&quot;</h4>
                                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-['Raleway'] leading-relaxed mb-3 sm:mb-4">Bloom &amp; Bond was not only beautiful but truly intentional, with soulful activities, healing moments and creative experiences! I love supporting women owned businesses and Elev8 Moments is definitely highly recommended to all of my friends and family. You&apos;ll love Sandra, her attention to detail, creative vision and the meaningful experiences she creates!</p>
                                <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-['Raleway'] tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] uppercase">EVENT PARTICIPANT</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#f9f2ec] border border-[#1e1e1e] p-6 sm:p-8 md:p-10 lg:p-12">
                        <div className="grid md:grid-cols-[1fr_200px] lg:grid-cols-[1fr_240px] gap-6 sm:gap-8 items-center">
                            <div className="order-2 md:order-1">
                                <h4 className="text-[22px] sm:text-[26px] md:text-[29px] lg:text-[33px] font-['Noiretblanc'] mb-3 sm:mb-4 leading-tight">&quot;Stress-free and unforgettable&quot;</h4>
                                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-['Raleway'] leading-relaxed mb-3 sm:mb-4">We have booked gifting packages on multiple occasions from Elev8 Moments and they are always elegant, thoughtful and unforgettable! I&apos;ve worked with other companies in the past and definitely prefer Elev8 Moments. You can tell that she takes a lot of care and pride in creating meaningful experiences.</p>
                                <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-['Raleway'] tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] uppercase">CORPORATE CLIENT</p>
                            </div>
                            <img alt="Customer" className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-full md:h-[200px] lg:h-[238px] object-cover rounded-full mx-auto md:mx-0 order-1 md:order-2"
                                src="/images/32.jpg" />
                        </div>
                    </div>
                </div>
            </section>
  );
}