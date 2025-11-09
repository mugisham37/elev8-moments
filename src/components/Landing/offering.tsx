import React from 'react';

export default function Offering() {
  return (
     <section className="bg-[#f9f2ec] py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-[38px] font-noiretblanc mb-8">CHARCUTERIE OFFERINGS</h3>
                            <div className="mb-8 pb-8 border-b border-black">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-[20px] font-montserrat font-medium tracking-[2px]">BOARDS +
                                        BOXES</h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-chevron-right w-8 h-8" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                </div>
                                <p className="text-[16px] font-raleway leading-relaxed">Fresh, made-to-order charcuterie
                                    boards that come in a variety of sizes for all occasions. Includes an assortment of
                                    cheeses, meats, spreads/dips, crackers, fruit (dried &amp; fresh), nuts, sweet
                                    treats, etc.</p>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-[20px] font-montserrat font-medium tracking-[2px]">GRAZING
                                        TABLES</h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-chevron-right w-8 h-8" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                </div>
                                <p className="text-[16px] font-raleway leading-relaxed">Add a wow factor to your event
                                    with our stunning grazing tables! Choose from a delicious spread of appetizers or
                                    indulge in light meals, plus plenty of fabulous add-ons to make your table a true
                                    showstopper!</p>
                            </div>
                        </div>
                        <div><img alt="Charcuterie board" className="w-full h-auto rounded-tl-[366px] shadow-lg"
                                src="https://picsum.photos/700/900" /></div>
                    </div>
                </div>
            </section>
  );
}
