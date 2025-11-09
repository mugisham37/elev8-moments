import PhotoCollageCard from './PhotoCollageCard';
import AboutTextCard from './AboutTextCard';

export default function HeroSection() {
  return (
     <section class="relative w-full h-[1024px]">
                <div class="absolute inset-0 bg-cover bg-center opacity-50"
                    style="background-image: url(&quot;https://static.showit.co/1600/5VmE5o1m-IlMcKbabpu1EQ/shared/wedding-1854074_1920.jpg&quot;);">
                </div>
                <div class="relative max-w-[1200px] mx-auto px-4 h-full flex items-center">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                        <div class="flex justify-center"><img alt="Megan"
                                class="w-full max-w-[392px] h-auto object-cover"
                                src="https://static.showit.co/400/nvEk6w_xn3JjXMj4ZxxEQw/shared/unnamed.jpg"
                                style="object-position: 50% 90%;"></div>
                        <div class="bg-[#f9f2ec] p-8">
                            <p class="font-['Noiretblanc'] text-[28px] leading-tight text-[#1e1e1e] mb-2">ABOUT US</p>
                            <div class="border-t border-[#1e1e1e] w-[141px] mb-4"></div>
                            <p class="font-['Strings'] text-[65px] leading-tight text-[#1e1e1e] mb-4">Meet Megan</p>
                            <p class="font-['Raleway'] text-[15px] leading-relaxed text-[#1e1e1e] mb-4">OWNER OF GLAM
                                HAUS DESIGN CO.</p>
                            <p class="font-['Raleway'] text-[16px] leading-relaxed text-[#1e1e1e] text-justify">I'm so
                                glad you're here! About three years ago, I swapped my 7+ years in the medical field as a
                                Regional Operations Director for something a bit more <em>glittery</em>. After feeling
                                burnt out, I decided to dive into my true passion: entertaining, decor, and making
                                <strong>everything beautiful</strong>!</p>
                            <p class="font-['Raleway'] text-[16px] leading-relaxed text-[#1e1e1e] text-justify mt-4">I'm
                                blessed with an amazing husband who's my biggest supporter and two beautiful daughters
                                who make up our fabulous little girl tribe. We're all about spreading joy—whether that's
                                through our love of Jesus, exploring new places, making unforgettable memories with
                                friends and family, hanging out with our adorable dogs, or savoring a glass of wine with
                                a GH charcuterie board, of course!</p>
                            <p class="font-['Raleway'] text-[16px] leading-relaxed text-[#1e1e1e] text-justify mt-4">
                                Starting Glam Haus has been a dream come true and a way to show my daughters the power
                                of hard work. A huge thank you to everyone who's supported us with orders and glowing
                                reviews. I'm excited for all the fun and fabulous adventures ahead and can't wait to
                                share them with you!</p>
                        </div>
                    </div>
                </div>
            </section>
  );
}