/* eslint-disable @next/next/no-img-element */

import ScrollingText from './ScrollingText';

/**
 * Fruit & Specialty Boards Section Component
 * 
 * Pixel-perfect recreation of the fruit boards section featuring:
 * - Full-width layout with no padding
 * - Image touching left and top edges
 * - Typography hierarchy with Playfair Display and Inter
 * - Animated scrolling text banner
 * - Responsive: scales proportionally on tablet/laptop, stacks vertically on mobile
 */
export default function FruitSpecialtyBoards() {
    return (
        <>
            <section className="bg-[#f9f2ec]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center pl-0 pr-0 md:pr-4 pt-0 pb-0">
                    <div className="relative">
                        <img 
                            alt="Fruit boards" 
                            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-br-[150px] sm:rounded-br-[250px] md:rounded-br-[300px] lg:rounded-br-[366px] shadow-lg border-2 md:border-4" 
                            src="/images/16.jpg" 
                        />
                    </div>
                    <div className="px-4 md:px-0 md:pr-10 lg:pr-20 pb-8 md:pb-0">
                        <h3 className="text-[28px] sm:text-[35px] md:text-[42px] lg:text-[49px] font-['Noiretblanc'] leading-tight mb-4 md:mb-6">
                            VISIT RWANDA EXPERIENCES
                        </h3>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-['Raleway'] leading-relaxed mb-6 md:mb-8">
                            Treat your guests to our beautifully curated cultural and creative experiences, perfect for any visit! Each experience is thoughtfully designed to offer a vibrant mix of local culture and unique activities that will impress and delight. Whether it&apos;s a creative workshop or a bonding retreat, we&apos;ve got the perfect experience to elevate your Kigali journey!
                        </p>
                        <a 
                            href="#"
                            className="inline-block bg-[#1e1e1e] text-white px-6 py-3 md:px-8 md:py-4 text-[12px] md:text-[14px] font-['Raleway'] tracking-[1.4px] uppercase hover:opacity-80 transition-opacity"
                        >
                            LEARN MORE
                        </a>
                    </div>
                </div>
                
                <ScrollingText text="Elev8 Moments -" />
                
                <div className="py-6 md:py-8 flex flex-wrap justify-center gap-2 md:gap-4 px-2 md:px-4">
                    <img alt="Sample 1" className="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[201px] object-cover rounded shrink-0" src="/images/11.JPG" />
                    <img alt="Sample 2" className="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[201px] object-cover rounded shrink-0" src="/images/13.JPG" />
                    <img alt="Sample 3" className="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[201px] object-cover rounded shrink-0" src="/images/15.JPG" />
                </div>
            </section>
        </>
    );
}