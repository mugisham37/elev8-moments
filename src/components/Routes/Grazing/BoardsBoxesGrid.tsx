import Image from 'next/image';

export default function BoardsBoxesGrid() {
  return (
  <section className="bg-[#1e1e1e] py-20">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-[60px] leading-24 text-[#f9f2ec] mb-4" style={{ fontFamily: 'Strings' }}>Check
                            Out Our</p>
                        <h2 className="text-[55px] leading-[88px] text-[#f9f2ec]" style={{ fontFamily: 'Noiretblanc' }}>BOARDS +
                            BOXES</h2>
                        <div className="w-[315px] h-px bg-[#f9f2ec] mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="flex flex-col items-center"><Image alt="Traditional Board"
                                className="w-[248px] h-[157px] object-cover mb-6"
                                src="https://static.showit.co/400/ek_yOtCCRrCwzZcX3B8hrA/shared/img_0802.jpg" width={248} height={157} /><a
                                href="#" className="flex items-center gap-2 mb-4 hover:opacity-70"><span
                                    className="text-[18px] leading-[19.8px] tracking-[1.8px] text-[#f9f2ec] font-medium"
                                    style={{ fontFamily: 'Montserrat' }}>TRADITIONAL<br />BOARDS + BOXES</span><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-chevron-right w-8 h-24 text-[#f9f2ec]"
                                    aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg></a>
                            <div className="w-full h-px bg-[#f9f2ec] mb-4"></div>
                            <p className="text-[16px] leading-[27.2px] text-[#f9f2ec] text-center"
                                style={{ fontFamily: 'Raleway' }}>Our traditional boards include an assortment of cheeses,
                                meats, spreads/dips, crackers, fruit (dried &amp; fresh), nuts, sweet treats, etc.</p>
                        </div>
                        <div className="flex flex-col items-center"><Image alt="Custom Board"
                                className="w-[248px] h-[157px] object-cover mb-6"
                                src="https://static.showit.co/400/6k3FCCemTp-xrzN4PMeBeg/shared/img_4994.jpg"
                                style={{ objectPosition: '40% 40%' }} width={248} height={157} /><a href="#"
                                className="flex items-center gap-2 mb-4 hover:opacity-70"><span
                                    className="text-[18px] leading-[19.8px] tracking-[1.8px] text-[#f9f2ec] font-medium"
                                    style={{ fontFamily: 'Montserrat' }}>CUSTOM &amp; SPECIALTY<br />BOARDS + BOXES</span><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-chevron-right w-8 h-24 text-[#f9f2ec]"
                                    aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg></a>
                            <div className="w-full h-px bg-[#f9f2ec] mb-4"></div>
                            <p className="text-[16px] leading-[27.2px] text-[#f9f2ec] text-center"
                                style={{ fontFamily: 'Raleway' }}>Our custom charcuterie boards are thoughtfully curated to
                                suit your unique style and occasion.</p>
                        </div>
                        <div className="flex flex-col items-center"><Image alt="Men's Board"
                                className="w-[248px] h-[157px] object-cover mb-6"
                                src="https://static.showit.co/400/hqWzUdGwFdXKDrQY7iafkA/shared/img_8304.jpg"
                                style={{ objectPosition: '60% 60%' }} width={248} height={157} /><a href="#"
                                className="flex items-center gap-2 mb-4 hover:opacity-70"><span
                                    className="text-[18px] leading-[19.8px] tracking-[1.8px] text-[#f9f2ec] font-medium"
                                    style={{ fontFamily: 'Montserrat' }}>MANLY<br />BOARDS + BOXES</span><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-chevron-right w-8 h-24 text-[#f9f2ec]"
                                    aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg></a>
                            <div className="w-full h-px bg-[#f9f2ec] mb-4"></div>
                            <p className="text-[16px] leading-[27.2px] text-[#f9f2ec] text-center"
                                style={{ fontFamily: 'Raleway' }}>Curated for hearty appetites, featuring a robust selection
                                of meats, cheeses, pickled items, candied bacon, stuffed peppers, and optional add-ons.
                            </p>
                        </div>
                    </div>
                    <div className="mt-16 flex justify-center">
                        <div className="flex flex-col items-center max-w-[400px]"><Image alt="Holiday Board"
                                className="w-[248px] h-[157px] object-cover mb-6"
                                src="https://static.showit.co/400/OKtA2rtNySGQIGp01FMk_g/shared/img_5588.jpg" width={248} height={157} /><a
                                href="#" className="flex items-center gap-2 mb-4 hover:opacity-70"><span
                                    className="text-[18px] leading-[19.8px] tracking-[1.8px] text-[#f9f2ec] font-medium"
                                    style={{ fontFamily: 'Montserrat' }}>HOLIDAY BOARDS</span><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide lucide-chevron-right w-8 h-24 text-[#f9f2ec]"
                                    aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg></a>
                            <div className="w-full h-px bg-[#f9f2ec] mb-4"></div>
                            <p className="text-[16px] leading-[27.2px] text-[#f9f2ec] text-center"
                                style={{ fontFamily: 'Raleway' }}>The perfect centerpiece for festive entertaining, offering
                                a delightful selection of meats, cheeses, and seasonal flavors to elevate any holiday
                                gathering.</p>
                        </div>
                    </div>
                    <div className="text-center mt-12"><a href="#"
                            className="inline-block border border-[#f9f2ec] px-8 py-4 hover:bg-[#f9f2ec] hover:text-[#1e1e1e] transition-colors"><span
                                className="text-[14px] leading-[30.8px] tracking-[1.4px] text-[#f9f2ec] uppercase"
                                style={{ fontFamily: 'Raleway' }}>ORDER NOW</span></a></div>
                </div>
            </section>
  );
}