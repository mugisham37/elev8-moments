'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
     <section className="relative w-full h-[1024px]">
                <div className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: 'url("https://static.showit.co/1600/5VmE5o1m-IlMcKbabpu1EQ/shared/wedding-1854074_1920.jpg")' }}>
                </div>
                <div className="relative max-w-[1200px] mx-auto px-4 h-full flex items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                        <div className="flex justify-center"><Image alt="Megan"
                                className="w-full max-w-[392px] h-auto object-cover"
                                src="https://static.showit.co/400/nvEk6w_xn3JjXMj4ZxxEQw/shared/unnamed.jpg"
                                style={{ objectPosition: '50% 90%' }} width={392} height={400} /></div>
                        <div className="bg-[#f9f2ec] p-8">
                            <p className="font-['Noiretblanc'] text-[28px] leading-tight text-[#1e1e1e] mb-2">ABOUT US</p>
                            <div className="border-t border-[#1e1e1e] w-[141px] mb-4"></div>
                            <p className="font-['Strings'] text-[65px] leading-tight text-[#1e1e1e] mb-4">Meet Megan</p>
                            <p className="font-['Raleway'] text-[15px] leading-relaxed text-[#1e1e1e] mb-4">OWNER OF GLAM
                                HAUS DESIGN CO.</p>
                            <p className="font-['Raleway'] text-[16px] leading-relaxed text-[#1e1e1e] text-justify">I&apos;m so
                                glad you&apos;re here! About three years ago, I swapped my 7+ years in the medical field as a
                                Regional Operations Director for something a bit more <em>glittery</em>. After feeling
                                burnt out, I decided to dive into my true passion: entertaining, decor, and making
                                <strong>everything beautiful</strong>!</p>
                            <p className="font-['Raleway'] text-[16px] leading-relaxed text-[#1e1e1e] text-justify mt-4">I&apos;m
                                blessed with an amazing husband who&apos;s my biggest supporter and two beautiful daughters
                                who make up our fabulous little girl tribe. We&apos;re all about spreading joy—whether that&apos;s
                                through our love of Jesus, exploring new places, making unforgettable memories with
                                friends and family, hanging out with our adorable dogs, or savoring a glass of wine with
                                a GH charcuterie board, of course!</p>
                            <p className="font-['Raleway'] text-[16px] leading-relaxed text-[#1e1e1e] text-justify mt-4">
                                Starting Glam Haus has been a dream come true and a way to show my daughters the power
                                of hard work. A huge thank you to everyone who&apos;s supported us with orders and glowing
                                reviews. I&apos;m excited for all the fun and fabulous adventures ahead and can&apos;t wait to
                                share them with you!</p>
                        </div>
                    </div>
                </div>
            </section>
  );
}