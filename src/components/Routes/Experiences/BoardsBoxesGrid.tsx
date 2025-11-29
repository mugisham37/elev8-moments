import Image from 'next/image';

export default function BoardsBoxesGrid() {
  return (
  <section className="bg-[#1e1e1e] py-12 sm:py-16 md:py-20">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <p className="text-[32px] sm:text-[45px] md:text-[60px] leading-tight text-[#f9f2ec] mb-2 sm:mb-4" style={{ fontFamily: 'Strings' }}>Explore Our</p>
                        <h2 className="text-[28px] sm:text-[40px] md:text-[55px] leading-tight sm:leading-[1.3] md:leading-[88px] text-[#f9f2ec] px-4" style={{ fontFamily: 'Noiretblanc' }}>SIGNATURE EXPERIENCES</h2>
                        <div className="w-[200px] sm:w-[260px] md:w-[315px] h-px bg-[#f9f2ec] mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8">
                        <div className="flex flex-col items-center max-w-[400px] mx-auto lg:max-w-none">
                            <div className="w-full max-w-[248px] mb-4 sm:mb-6">
                                <Image alt="Traditional Board"
                                    className="w-full h-auto aspect-[248/157] object-cover"
                                    src="https://static.showit.co/400/ek_yOtCCRrCwzZcX3B8hrA/shared/img_0802.jpg" 
                                    width={248} 
                                    height={157} />
                            </div>
                            <a href="#" className="flex items-center justify-center gap-2 mb-3 sm:mb-4 hover:opacity-70">
                                <span className="text-[16px] sm:text-[18px] leading-tight tracking-[1.4px] sm:tracking-[1.8px] text-[#f9f2ec] font-medium text-center"
                                    style={{ fontFamily: 'Montserrat' }}>CREATIVE WORKSHOPS</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-chevron-right w-6 h-6 sm:w-8 sm:h-8 text-[#f9f2ec] flex-shrink-0"
                                    aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </a>
                            <div className="w-full h-px bg-[#f9f2ec] mb-3 sm:mb-4"></div>
                            <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-[27.2px] text-[#f9f2ec] text-center px-2"
                                style={{ fontFamily: 'Raleway' }}>Our creative workshops include hands-on activities like Bloom &amp; Bond floral design, Paint a Shirt expressive art, and other soulful, interactive experiences.</p>
                        </div>
                        <div className="flex flex-col items-center max-w-[400px] mx-auto lg:max-w-none">
                            <div className="w-full max-w-[248px] mb-4 sm:mb-6">
                                <Image alt="Custom Board"
                                    className="w-full h-auto aspect-[248/157] object-cover"
                                    src="https://static.showit.co/400/6k3FCCemTp-xrzN4PMeBeg/shared/img_4994.jpg"
                                    style={{ objectPosition: '40% 40%' }} 
                                    width={248} 
                                    height={157} />
                            </div>
                            <a href="#" className="flex items-center justify-center gap-2 mb-3 sm:mb-4 hover:opacity-70">
                                <span className="text-[16px] sm:text-[18px] leading-tight tracking-[1.4px] sm:tracking-[1.8px] text-[#f9f2ec] font-medium text-center"
                                    style={{ fontFamily: 'Montserrat' }}>HEALING & BONDING RETREATS</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-chevron-right w-6 h-6 sm:w-8 sm:h-8 text-[#f9f2ec] flex-shrink-0"
                                    aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </a>
                            <div className="w-full h-px bg-[#f9f2ec] mb-3 sm:mb-4"></div>
                            <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-[27.2px] text-[#f9f2ec] text-center px-2"
                                style={{ fontFamily: 'Raleway' }}>Our healing retreats are thoughtfully designed to suit your community&apos;s unique needs and intentions.</p>
                        </div>
                        <div className="flex flex-col items-center max-w-[400px] mx-auto lg:max-w-none md:col-span-2 lg:col-span-1">
                            <div className="w-full max-w-[248px] mb-4 sm:mb-6">
                                <Image alt="Corporate Experiences"
                                    className="w-full h-auto aspect-[248/157] object-cover"
                                    src="/images/10.JPG"
                                    style={{ objectPosition: 'center' }} 
                                    width={248} 
                                    height={157} />
                            </div>
                            <a href="#" className="flex items-center justify-center gap-2 mb-3 sm:mb-4 hover:opacity-70">
                                <span className="text-[16px] sm:text-[18px] leading-tight tracking-[1.4px] sm:tracking-[1.8px] text-[#f9f2ec] font-medium text-center"
                                    style={{ fontFamily: 'Montserrat' }}>CORPORATE TEAM EXPERIENCES</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-chevron-right w-6 h-6 sm:w-8 sm:h-8 text-[#f9f2ec] flex-shrink-0"
                                    aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </a>
                            <div className="w-full h-px bg-[#f9f2ec] mb-3 sm:mb-4"></div>
                            <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-[27.2px] text-[#f9f2ec] text-center px-2"
                                style={{ fontFamily: 'Raleway' }}>Curated for professional teams, featuring engaging creative activities, bonding experiences, meaningful workshops, inspiring sessions, and customizable add-ons.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 sm:mt-12 md:mt-16 flex justify-center">
                        <div className="flex flex-col items-center max-w-[400px] mx-auto">
                            <div className="w-full max-w-[248px] mb-4 sm:mb-6">
                                <Image alt="Holiday Board"
                                    className="w-full h-auto aspect-[248/157] object-cover"
                                    src="https://static.showit.co/400/OKtA2rtNySGQIGp01FMk_g/shared/img_5588.jpg" 
                                    width={248} 
                                    height={157} />
                            </div>
                            <a href="#" className="flex items-center justify-center gap-2 mb-3 sm:mb-4 hover:opacity-70">
                                <span className="text-[16px] sm:text-[18px] leading-tight tracking-[1.4px] sm:tracking-[1.8px] text-[#f9f2ec] font-medium text-center"
                                    style={{ fontFamily: 'Montserrat' }}>VISIT RWANDA TOURISM PACKAGES</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-chevron-right w-6 h-6 sm:w-8 sm:h-8 text-[#f9f2ec] flex-shrink-0"
                                    aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </a>
                            <div className="w-full h-px bg-[#f9f2ec] mb-3 sm:mb-4"></div>
                            <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-[27.2px] text-[#f9f2ec] text-center px-2"
                                style={{ fontFamily: 'Raleway' }}>The perfect introduction to Kigali culture, offering a curated selection of workshops, creative activities, and cultural experiences to elevate any visitor&apos;s journey.</p>
                        </div>
                    </div>
                    <div className="text-center mt-8 sm:mt-10 md:mt-12">
                        <a href="#" className="inline-block border border-[#f9f2ec] px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#f9f2ec] hover:text-[#1e1e1e] transition-colors">
                            <span className="text-[13px] sm:text-[14px] leading-tight sm:leading-[30.8px] tracking-[1.4px] text-[#f9f2ec] uppercase"
                                style={{ fontFamily: 'Raleway' }}>BOOK NOW</span>
                        </a>
                    </div>
                </div>
            </section>
  );
}