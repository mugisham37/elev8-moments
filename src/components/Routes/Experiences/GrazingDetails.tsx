import Image from 'next/image';

export default function GrazingDetails() {
  return (
   <section className="bg-[#1e1e1e] py-12 sm:py-16 md:py-20">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <p className="text-[32px] sm:text-[45px] md:text-[55px] lg:text-[65px] leading-tight sm:leading-[50px] md:leading-[60px] lg:leading-[70px] text-[#f9f2ec]"
                            style={{ fontFamily: 'Strings', transform: 'rotate(-0deg)', display: 'inline-block' }}>Elev8 Moments</p>
                        <h2 className="text-[36px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-tight sm:leading-[60px] md:leading-[90px] lg:leading-[131.6px] text-[#f9f2ec]" style={{ fontFamily: 'Noiretblanc' }}>
                            EXPERIENCES</h2>
                        <div className="w-[80px] sm:w-[100px] md:w-[108px] h-px bg-[#f9f2ec] mx-auto mb-6 sm:mb-8"></div>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed tracking-[1.2px] sm:tracking-[1.4px] text-[#f9f2ec] uppercase font-medium px-4"
                            style={{ fontFamily: 'Montserrat' }}>STARTING AT $25 PER PERSON</p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
                        {/* Image Section */}
                        <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 lg:max-w-none">
                            <div className="relative border-2 bg-[#f9f2ec] overflow-hidden">
                                {/* Background decorative element */}
                                <div className="bg-[#efd8c9] w-full aspect-[406/556] sm:w-[90%] sm:aspect-[406/556] md:w-[406px] md:h-[556px] -ml-4 sm:-ml-6 md:-ml-8"></div>
                                {/* Main image */}
                                <Image 
                                    alt="Charcuterie detail"
                                    className="absolute top-2 sm:top-3 md:top-4 left-0 w-[85%] sm:w-[80%] md:w-[381px] h-auto aspect-[381/525] md:h-[525px] object-cover"
                                    src="/images/1.JPG"
                                    style={{ objectFit: 'cover' }} 
                                    width={381} 
                                    height={525} 
                                />
                            </div>
                        </div>

                        {/* Text Content Section */}
                        <div className="px-2 sm:px-0">
                            <ul className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed sm:leading-[20.8px] text-[#f9f2ec] mb-8 sm:mb-10 md:mb-12 space-y-2 sm:space-y-2.5"
                                style={{ fontFamily: 'Raleway' }}>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1 flex-shrink-0">•</span>
                                    <span>Intentionally designed and expertly curated</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1 flex-shrink-0">•</span>
                                    <span>Overflowing with creative activities, meaningful connection moments, soulful experiences, healing spaces</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1 flex-shrink-0">•</span>
                                    <span>An array of materials, workshops &amp; guided sessions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1 flex-shrink-0">•</span>
                                    <span>Meticulous attention to detail with layers of creativity, intention &amp; purpose</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1 flex-shrink-0">•</span>
                                    <span>Complemented with thoughtful touches, inspiring ambiance &amp; premium execution</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1 flex-shrink-0">•</span>
                                    <span>Perfect for retreats, corporate gatherings and private celebrations</span>
                                </li>
                            </ul>

                            <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed sm:leading-[24px] md:leading-[25.6px] text-[#f9f2ec] mb-6 sm:mb-8" style={{ fontFamily: 'Raleway' }}>
                                For those seeking a <em>touch more depth</em>, our extended experience options include signature favorites like Bloom &amp; Bond floral workshops, vibrant Paint a Shirt creative sessions, and meaningful retreat packages with healing circles.
                            </p>

                            <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed sm:leading-[24px] md:leading-[25.6px] text-[#f9f2ec] mb-6 sm:mb-8" style={{ fontFamily: 'Raleway' }}>
                                Plus, we offer a range of fabulous add-ons—think custom gift packages, curated welcome kits for participants, premium materials, and more—to make your experience <em>truly unforgettable!</em>
                            </p>

                            <a href="#"
                                className="inline-block border border-[#f9f2ec] px-6 sm:px-8 py-3 sm:py-4 mt-4 sm:mt-6 md:mt-8 hover:bg-[#f9f2ec] hover:text-[#1e1e1e] transition-colors w-full sm:w-auto text-center">
                                <span className="text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed sm:leading-[30.8px] tracking-[1.2px] sm:tracking-[1.4px] uppercase text-[#f9f2ec] hover:text-[#1e1e1e]"
                                    style={{ fontFamily: 'Raleway' }}>book your experience</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
  );
}