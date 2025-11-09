import Image from 'next/image';

export default function GalleryShowcase() {
  return (
  <section className="bg-[#1e1e1e] py-20">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-[85px] leading-[119px] text-[#f9f2ec] mb-2"
                            style={{ fontFamily: 'Strings', transform: 'rotate(-5deg)', display: 'inline-block' }}>Glam Haus</p>
                        <h2 className="text-[94px] leading-[131.6px] text-[#f9f2ec]" style={{ fontFamily: 'Noiretblanc' }}>
                            GRAZING</h2>
                        <div className="w-[108px] h-px bg-[#f9f2ec] mx-auto mb-8"></div>
                        <p className="text-[14px] leading-[25.2px] tracking-[1.4px] text-[#f9f2ec] uppercase font-medium"
                            style={{ fontFamily: 'Montserrat' }}>STARTING AT $19 PER PERSON</p>
                    </div>
                    <div className="grid grid-cols-2 gap-16 items-start">
                        <div className="relative">
                            <div className="bg-[#efd8c9] w-[406px] h-[556px] -ml-8"></div><Image alt="Charcuterie detail"
                                className="absolute top-4 left-0 w-[381px] h-[525px] object-cover"
                                src="https://static.showit.co/800/peKFPz8JPAsMUdVl1gUrwg/shared/rebecca-t4mhp-kcgjq-unsplash.jpg"
                                style={{ backgroundSize: '130%', backgroundPosition: '90% 40%' }} width={381} height={525} />
                        </div>
                        <div>
                            <ul className="text-[16px] leading-[28.8px] text-[#f9f2ec] mb-12 space-y-2"
                                style={{ fontFamily: 'Raleway' }}>
                                <li className="flex items-start"><span className="mr-2">•</span><span>Breath-takingly designed
                                        and expertly crafted</span></li>
                                <li className="flex items-start"><span className="mr-2">•</span><span>Overflowing with gourmet
                                        cheeses, hand-sliced charcuterie, fresh fruit, artisanal breads</span></li>
                                <li className="flex items-start"><span className="mr-2">•</span><span>An array of dips, spreads
                                        &amp; jams</span></li>
                                <li className="flex items-start"><span className="mr-2">•</span><span>Meticulous attention to
                                        detail with layers of textures, colors &amp; flavors</span></li>
                                <li className="flex items-start"><span className="mr-2">•</span><span>Complemented with seasonal
                                        garnishes, fresh floral &amp; premium decor</span></li>
                                <li className="flex items-start"><span className="mr-2">•</span><span>Perfect for weddings,
                                        corporate events and private parties</span></li>
                            </ul>
                            <p className="text-[16px] leading-[25.6px] text-[#f9f2ec] mb-8" style={{ fontFamily: 'Raleway' }}>
                                For those seeking a <em>touch more indulgence</em>, our light meal options include
                                exquisite favorites like pineapple chicken salad sandwiches, a vibrant strawberry pecan
                                feta or goat cheese salad, and decadent red pepper pistachio hummus.</p>
                            <p className="text-[16px] leading-[25.6px] text-[#f9f2ec]" style={{ fontFamily: 'Raleway' }}>Plus,
                                we offer a range of fabulous add-ons—think lush greenery, chic rental display pieces to
                                elevate the table, stylish decor, and more—to make your spread <em>truly
                                    spectacular!</em></p><a href="#"
                                className="inline-block border border-[#f9f2ec] px-8 py-4 mt-8 hover:bg-[#f9f2ec] hover:text-[#1e1e1e] transition-colors"><span
                                    className="text-[14px] leading-[30.8px] tracking-[1.4px] uppercase"
                                    style={{ fontFamily: 'Raleway' }}>place an order</span></a>
                        </div>
                    </div>
                </div>
            </section>
  );
}