"use client";

import Image from 'next/image';

export default function Hero() {
 

  return (
    <div class="relative bg-[#314F39] py-16 md:py-24">
                <div class="absolute inset-0 opacity-10 bg-cover bg-center"
                    style="background-image: url(&quot;https://static.showit.co/1600/5oP4HTzeiuz6Z6Cdbs0VHQ/shared/img_3527.jpg&quot;);">
                </div>
                <div class="relative max-w-[1200px] mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div class="w-full max-w-[392px] mx-auto">
                            <div class="w-full h-[479px] bg-cover bg-center"
                                style="background-image: url(&quot;https://static.showit.co/800/xVBN4FzpzPWjUxUuzSt7BQ/shared/misty-ladd-rdjb3hzvgju-unsplash.jpg&quot;);">
                            </div>
                        </div>
                        <div class="text-[#F9F2EC]">
                            <p class="text-[50px] font-[Strings] leading-tight mb-4 text-[#CFDAc7]">Glam Haus</p>
                            <div class="flex items-center gap-2 mb-4">
                                <h1 class="text-[56px] font-[Noiretblanc] leading-tight">ELF KITS</h1>
                            </div>
                            <div class="w-[32px] h-[1px] bg-[#F9F2EC] mb-4"></div>
                            <p class="text-[15px] font-[Raleway] tracking-[1.6px] leading-tight mb-6 uppercase">BECAUSE
                                YOUR ELF NEEDS MORE THAN JUST A SHELF THIS YEAR!</p>
                            <p class="text-[16px] font-[Raleway] leading-relaxed mb-8">Imagine your littles waking up to
                                a new holiday-themed surprise each morning—craft snowflakes, bake festive cookies, or
                                embark on a scavenger hunt for hidden treasures! At Glam Haus, we offer a 12-day kit
                                that is perfect for a quick burst of festive fun, while our 24-day kit transforms the
                                entire month into a magical celebration leading all the way up to Christmas!</p><a
                                href="#"
                                class="inline-block border border-[#F9F2EC] px-8 py-3 text-[14px] font-[Raleway] uppercase tracking-[1.4px] hover:bg-[#F9F2EC] hover:text-[#314F39] transition-colors">ORDER
                                YOUR KIT!</a>
                        </div>
                    </div>
                </div>
            </div>
  );
}
