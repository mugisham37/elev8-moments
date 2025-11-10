/* eslint-disable @next/next/no-img-element */

/**
 * Fruit & Specialty Boards Section Component
 * 
 * Pixel-perfect recreation of the fruit boards section featuring:
 * - Two-column asymmetric layout (60/40 split)
 * - Circular fruit board image on the left
 * - Typography hierarchy with Playfair Display and Inter
 * - Exact color matching and spacing
 */
export default function FruitSpecialtyBoards() {
    return (
        <>
            <section className="bg-[#f9f2ec] py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div><img alt="Fruit boards" className="w-full h-auto rounded-br-[366px] shadow-lg"
                            src="https://picsum.photos/700/500" /></div>
                        <div>
                            <h3 className="text-[49px] font-['Noiretblanc'] leading-tight mb-6">VISIT RWANDA EXPERIENCES
                            </h3>
                            <p className="text-[16px] font-['Raleway'] leading-relaxed mb-8">Treat your guests to our beautifully curated cultural and creative experiences, perfect for any visit! Each experience is thoughtfully designed to offer a vibrant mix of local culture and unique activities that will impress and delight. Whether it&apos;s a creative workshop or a bonding retreat, we&apos;ve got the perfect experience to elevate your Kigali journey!</p><a href="#"
                                    className="inline-block bg-[#1e1e1e] text-white px-8 py-4 text-[14px] font-['Raleway'] tracking-[1.4px] uppercase hover:opacity-80 transition-opacity">LEARN MORE</a>
                        </div>
                    </div>
                    <div className="mt-8 border border-black">
                        <p className="text-[27px] font-['Noiretblanc'] text-center py-4">Elev8 Moments - Elev8 Moments - Elev8 Moments</p>
                    </div>
                    <div className="mt-8 flex justify-center gap-4"><img alt="Sample 1"
                        className="h-[201px] object-cover rounded" src="https://picsum.photos/250/200" /><img
                            alt="Sample 2" className="h-[201px] object-cover rounded"
                            src="https://picsum.photos/250/200" /><img alt="Sample 3"
                                className="h-[201px] object-cover rounded" src="https://picsum.photos/250/200" /></div>
                </div>
            </section>
        </>
    );
}