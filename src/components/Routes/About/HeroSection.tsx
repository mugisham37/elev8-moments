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
                            <p className="font-['Strings'] text-[65px] leading-tight text-[#1e1e1e] mb-4">Meet Sandra</p>
                            <p className="font-['Raleway'] text-[15px] leading-relaxed text-[#1e1e1e] mb-4">FOUNDER OF ELEV8 MOMENTS</p>
                            <p className="font-['Raleway'] text-[16px] leading-relaxed text-[#1e1e1e] text-justify">I&apos;m so glad you&apos;re here! As an entrepreneur and creative visionary, I decided to build something truly meaningful after years of dreaming about creating spaces where people could connect, heal, and celebrate life. After feeling called to purpose, I dove into my true passion: curating experiences, intentional gatherings, and making every moment <strong>elevated</strong>!</p>
                            <p className="font-['Raleway'] text-[16px] leading-relaxed text-[#1e1e1e] text-justify mt-4">I&apos;m blessed with incredible people who support this vision and a community that believes in the power of intentional connection. We&apos;re all about spreading joy—whether that&apos;s through creating meaningful experiences, exploring Kigali&apos;s vibrant culture, making unforgettable memories with friends and community, celebrating with thoughtful gifts, or gathering around shared moments of creativity and healing!</p>
                            <p className="font-['Raleway'] text-[16px] leading-relaxed text-[#1e1e1e] text-justify mt-4">Starting Elev8 Moments has been a dream come true and a way to contribute to Rwanda&apos;s cultural and tourism story. A huge thank you to everyone who&apos;s supported us with bookings and glowing feedback. I&apos;m excited for all the intentional and inspiring experiences ahead and can&apos;t wait to share them with you!</p>
                        </div>
                    </div>
                </div>
            </section>
  );
}