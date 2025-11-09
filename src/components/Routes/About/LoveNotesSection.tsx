'use client';

import Image from 'next/image';

export default function LoveNotesSection() {
  return (
    <section className="w-full bg-[#f9f2ec] py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="border border-[#1e1e1e] p-8 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            <div className="flex justify-center md:justify-start"><Image alt="Customer Review"
                                    className="w-[236px] h-[238px] object-cover rounded-full"
                                    src="https://static.showit.co/400/J_Yx7yD_QKOL1zpcOZbUdg/shared/img_1405.jpg"
                                    style={{ objectFit: 'cover', objectPosition: '50% 50%' }} width={236} height={238} /></div>
                            <div className="md:col-span-2 border-l-0 md:border-l border-[#1e1e1e] pl-0 md:pl-8">
                                <h3 className="font-['Noiretblanc'] text-[33px] leading-tight text-[#1e1e1e] mb-4">&quot;Highly
                                    recommend to all my family &amp; friends&quot;</h3>
                                <p className="font-['Raleway'] text-[16px] leading-relaxed text-[#1e1e1e] mb-4">&quot;Megan&apos;s
                                    work is not only stunning but she uses the best ingredients, safe flowers for decor
                                    and offers gluten free options! I love supporting women owned businesses and she&apos;s
                                    definitely highly recommended to all of my friends and family. You&apos;ll love Megan,
                                    her customer service, attention to detail and delicious boards and design offers as
                                    well!&quot;</p>
                                <p className="font-['Raleway'] text-[15px] uppercase tracking-[3px] text-[#1e1e1e]">KARLA S.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-[#1e1e1e] p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            <div className="flex justify-center md:justify-start"><Image alt="Customer Review"
                                    className="w-[236px] h-[238px] object-cover rounded-full"
                                    src="https://static.showit.co/400/Cr0kdpoORgKhOism4Tl3Nw/shared/img_4105_jpg.jpg"
                                    style={{ objectFit: 'cover', objectPosition: '50% 50%' }} width={236} height={238} /></div>
                            <div className="md:col-span-2 border-l-0 md:border-l border-[#f9f2ec] pl-0 md:pl-8">
                                <h3 className="font-['Noiretblanc'] text-[33px] leading-tight text-[#1e1e1e] mb-4">&quot;Always
                                    beautiful, fresh &amp; delicious&quot;</h3>
                                <p className="font-['Raleway'] text-[16px] leading-relaxed text-[#1e1e1e] mb-4">&quot;We have
                                    ordered charcuterie platters on multiple occasions from Glam Haus and they are
                                    always beautiful, fresh and delicious! I&apos;ve ordered from other companies in the past
                                    and definitely prefer Glam Haus. You can tell that she takes a lot of care and pride
                                    in creating the best boards.&quot;</p>
                                <p className="font-['Raleway'] text-[15px] uppercase tracking-[3px] text-[#1e1e1e]">CHERYL
                                    B.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  );
}