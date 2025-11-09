/* eslint-disable @next/next/no-img-element */

export default function Testimonials() {
  return (
    <section className="bg-[#1e1e1e] py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="bg-[#f9f2ec] border border-[#1e1e1e] p-12 mb-12">
                        <div className="grid md:grid-cols-[240px_1fr] gap-8 items-center"><img alt="Customer"
                                className="w-full h-[238px] object-cover rounded-full" src="https://picsum.photos/240/240" />
                            <div>
                                <h4 className="text-[33px] font-['Noiretblanc'] mb-4">&quot;Highly recommend to all my family
                                    &amp; friends&quot;</h4>
                                <p className="text-[16px] font-['Raleway'] leading-relaxed mb-4">Megan&apos;s work is not only
                                    stunning but she uses the best ingredients, safe flowers for decor and offers gluten
                                    free options! I love supporting women owned businesses and she&apos;s definitely highly
                                    recommended to all of my friends and family. You&apos;ll love Megan, her customer
                                    service, attention to detail and delicious boards and design offers as well!</p>
                                <p className="text-[15px] font-['Raleway'] tracking-[3px] uppercase">KARLA S.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#f9f2ec] border border-[#1e1e1e] p-12">
                        <div className="grid md:grid-cols-[1fr_240px] gap-8 items-center">
                            <div>
                                <h4 className="text-[33px] font-['Noiretblanc'] mb-4">&quot;Always beautiful, fresh &amp;
                                    delicious&quot;</h4>
                                <p className="text-[16px] font-['Raleway'] leading-relaxed mb-4">We have ordered charcuterie
                                    platters on multiple occasions from Glam Haus and they are always beautiful, fresh
                                    and delicious! I&apos;ve ordered from other companies in the past and definitely prefer
                                    Glam Haus. You can tell that she takes a lot of care and pride in creating the best
                                    boards.</p>
                                <p className="text-[15px] font-['Raleway'] tracking-[3px] uppercase">CHERYL B.</p>
                            </div><img alt="Customer" className="w-full h-[238px] object-cover rounded-full"
                                src="https://picsum.photos/240/240" />
                        </div>
                    </div>
                </div>
            </section>
  );
}