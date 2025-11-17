/* eslint-disable @next/next/no-img-element */

export default function Testimonials() {
  return (
    <section className="bg-[#1e1e1e] py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="bg-[#f9f2ec] border border-[#1e1e1e] p-12 mb-12">
                        <div className="grid md:grid-cols-[240px_1fr] gap-8 items-center"><img alt="Customer"
                                className="w-full h-[238px] object-cover rounded-full" src="/images/31.jpg" />
                            <div>
                                <h4 className="text-[33px] font-['Noiretblanc'] mb-4">&quot;Unlike anything I&apos;ve ever attended&quot;</h4>
                                <p className="text-[16px] font-['Raleway'] leading-relaxed mb-4">Bloom &amp; Bond was not only beautiful but truly intentional, with soulful activities, healing moments and creative experiences! I love supporting women owned businesses and Elev8 Moments is definitely highly recommended to all of my friends and family. You&apos;ll love Sandra, her attention to detail, creative vision and the meaningful experiences she creates!</p>
                                <p className="text-[15px] font-['Raleway'] tracking-[3px] uppercase">EVENT PARTICIPANT</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#f9f2ec] border border-[#1e1e1e] p-12">
                        <div className="grid md:grid-cols-[1fr_240px] gap-8 items-center">
                            <div>
                                <h4 className="text-[33px] font-['Noiretblanc'] mb-4">&quot;Stress-free and unforgettable&quot;</h4>
                                <p className="text-[16px] font-['Raleway'] leading-relaxed mb-4">We have booked gifting packages on multiple occasions from Elev8 Moments and they are always elegant, thoughtful and unforgettable! I&apos;ve worked with other companies in the past and definitely prefer Elev8 Moments. You can tell that she takes a lot of care and pride in creating meaningful experiences.</p>
                                <p className="text-[15px] font-['Raleway'] tracking-[3px] uppercase">CORPORATE CLIENT</p>
                            </div><img alt="Customer" className="w-full h-[238px] object-cover rounded-full"
                                src="/images/32.jpg" />
                        </div>
                    </div>
                </div>
            </section>
  );
}