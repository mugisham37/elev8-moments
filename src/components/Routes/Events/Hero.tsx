"use client";

import { ImageWithFallback } from '../../imageWithFallBack/ImageWithFallback';

export default function Hero() {
  return (
    <div class="relative h-[659px] bg-[#EDCAB3]">
                <div class="absolute inset-0 opacity-10 bg-cover bg-center"
                    style="background-image: url(&quot;https://static.showit.co/1600/vwQLH4XDLdvk00GNBtFBuQ/shared/img_3172.jpg&quot;);">
                </div>
                <div class="max-w-[1200px] mx-auto h-full relative px-4 flex items-center">
                    <div class="flex-1 text-right pr-12">
                        <h1 class="text-[56px] font-normal text-[#1E1E1E] font-['Noiretblanc'] mb-4">EVENT DESIGN</h1>
                        <p class="text-[15px] text-[#1E1E1E] font-['Raleway'] tracking-[1.6px] mb-6 uppercase">YOUR
                            DREAM EVENT...DESIGNED TO PERFECTION</p>
                        <p class="text-[16px] text-black font-['Raleway'] leading-relaxed mb-8">Imagine walking into a
                            space that's beautifully designed just for your celebration. Whether you're hosting a cozy
                            get-together, a grand wedding, or a fun holiday party, we're here to turn your ideas into
                            something magical with our creativity and attention to detail.</p><a href="#"
                            class="inline-block px-8 py-4 border border-[#1E1E1E] text-[14px] text-[#1E1E1E] uppercase tracking-[1.4px] font-['Raleway'] hover:bg-[#1E1E1E] hover:text-[#F9F2EC] transition-colors no-underline">CONTACT
                            US</a>
                    </div>
                    <div class="flex-1 flex items-center justify-center gap-8">
                        <div class="w-[486px] h-[541px] bg-gray-200 rounded overflow-hidden shadow-lg"></div>
                        <div class="relative">
                            <div class="w-[303px] h-[446px] bg-[#1E1E1E] rounded"></div>
                            <div class="absolute top-5 left-5 w-[268px] h-[407px] bg-gray-200 rounded overflow-hidden">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  );
}