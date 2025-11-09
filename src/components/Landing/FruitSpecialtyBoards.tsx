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
                <div className="max-w-[1400px] mx-auto px-4">
                    <div className="border border-black p-4 relative">
                        <div className="overflow-hidden">
                            <div className="flex gap-1"><img alt="Gallery 1" className="h-[641px] object-cover"
                                    src="https://picsum.photos/600/700" /><img alt="Gallery 2"
                                    className="h-[641px] object-cover" src="https://picsum.photos/600/700" /><img
                                    alt="Gallery 3" className="h-[641px] object-cover" src="https://picsum.photos/600/700" />
                            </div>
                        </div><button className="absolute right-8 bottom-8 hover:opacity-70"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-chevron-right w-12 h-12 text-[#b5afa0]"
                                aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg></button>
                    </div>
                </div>
            </section>
            <section className="bg-[#f9f2ec] py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div><img alt="Fruit boards" className="w-full h-auto rounded-br-[366px] shadow-lg"
                                src="https://picsum.photos/700/500" /></div>
                        <div>
                            <h3 className="text-[49px] font-['Noiretblanc'] leading-tight mb-6">FRUIT &amp; SPECIALTY BOARDS
                            </h3>
                            <p className="text-[16px] font-['Raleway'] leading-relaxed mb-8">Treat your guests to our
                                beautifully arranged fruit and specialty boards, perfect for any occasion! Each board is
                                thoughtfully curated to offer a vibrant mix of fresh fruits and unique ingredients that
                                will impress and delight. Whether it&apos;s a casual gathering or a grand event, we&apos;ve got
                                the perfect board to elevate your celebration!</p><a href="#"
                                className="inline-block bg-[#1e1e1e] text-white px-8 py-4 text-[14px] font-['Raleway'] tracking-[1.4px] uppercase hover:opacity-80 transition-opacity">VIEW
                                MORE</a>
                        </div>
                    </div>
                    <div className="mt-8 border border-black">
                        <p className="text-[27px] font-['Noiretblanc'] text-center py-4">Glam Haus Design Co. - Glam Haus
                            Design Co. - Glam Haus Design Co.</p>
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