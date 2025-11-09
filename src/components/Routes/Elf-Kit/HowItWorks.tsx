
import { ImageWithFallback } from '../../imageWithFallBack/ImageWithFallback';
import { FeatureItem } from './How it works/FeatureItem';

interface HowItWorksProps {
  heroImage?: string;
  galleryImages?: string[];
  sidebarImages?: string[];
}

export function HowItWorks({ 
 

  return (
     <div class="bg-[#F9F2EC] py-16">
                <div class="max-w-[1200px] mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div class="relative">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="w-full h-[229px] bg-cover bg-center"
                                    style="background-image: url(&quot;https://static.showit.co/400/B2FspXDjC2V2Of-J6Osbuw/shared/screenshot_2024-09-24_092354.png&quot;); background-position: 90% 90%;">
                                </div>
                                <div class="w-full h-[229px] bg-cover bg-center"
                                    style="background-image: url(&quot;https://static.showit.co/400/kuKtFG-7-tnrmoKEbrzKWg/shared/img_6224.jpg&quot;); background-position: 20% 20%;">
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="w-full h-[229px] bg-cover bg-center"
                                    style="background-image: url(&quot;https://static.showit.co/400/TcTIDi5dz4O4L5vIpn76qA/shared/screenshot_2024-09-23_153834.png&quot;); background-position: 20% 20%;">
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 class="text-[#1E1E1E] text-[56px] font-[Noiretblanc] leading-tight mb-4">HOW IT WORKS
                            </h2>
                            <p class="text-[#1E1E1E] text-[15px] font-[Raleway] uppercase leading-relaxed mb-6">Take the
                                "what is my elf going to do tonight" question off your holiday to-do list with our
                                convenient KITS!</p>
                            <div class="space-y-6">
                                <div class="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-chevron-right w-4 h-4 text-[#CD0808] flex-shrink-0 mt-1"
                                        aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                    <p class="text-[#1E1E1E] text-[16px] font-[Raleway] leading-relaxed">Each kit comes
                                        with a personalized hello and goodbye letter that will be customized to your
                                        family whether you have a new or returning elf or elves.</p>
                                </div>
                                <div class="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-chevron-right w-4 h-4 text-[#CD0808] flex-shrink-0 mt-1"
                                        aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                    <p class="text-[#1E1E1E] text-[16px] font-[Raleway] leading-relaxed">Each day's
                                        theme will come individually bagged and contain instructions for set-up and
                                        props. Just unpack that day's materials, follow directions, and you're all set
                                        for the night.</p>
                                </div>
                                <div class="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-chevron-right w-4 h-4 text-[#CD0808] flex-shrink-0 mt-1"
                                        aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                    <p class="text-[#1E1E1E] text-[16px] font-[Raleway] leading-relaxed">Our kits
                                        accomodates one elf and activities for up to 2 children with themes that are
                                        suitable for ages 2-12</p>
                                </div>
                            </div>
                            <p class="text-[#1E1E1E] text-[10px] font-[Raleway] mt-6">*Elf Not Included</p>
                        </div>
                    </div>
                </div>
            </div>
   
  );
}
