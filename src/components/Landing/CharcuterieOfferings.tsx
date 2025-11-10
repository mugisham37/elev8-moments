import Image from 'next/image';

export default function CharcuterieOfferings() {
  return (
    <>
    <section className="bg-[#f9f2ec] py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-[38px] font-noiretblanc mb-8">SIGNATURE OFFERINGS</h3>
                            <div className="mb-8 pb-8 border-b border-black">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-[20px] font-montserrat font-medium tracking-[2px]">EVENTS + EXPERIENCES</h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-chevron-right w-8 h-8" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                </div>
                                <p className="text-[16px] font-raleway leading-relaxed">Curated, intentional experiences designed for connection and celebration. From Bloom &amp; Bond floral workshops to Paint a Shirt creative gatherings, each event includes soulful activities, meaningful moments, community bonding, healing spaces, and joyful memories.</p>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-[20px] font-montserrat font-medium tracking-[2px]">THOUGHTFUL GIFTING</h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        className="lucide lucide-chevron-right w-8 h-8" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                </div>
                                <p className="text-[16px] font-raleway leading-relaxed">Add a wow factor to your celebration with our elegant gifting solutions! Choose from curated corporate packages or indulge in personalized gifts, plus plenty of customizable add-ons to make your gesture truly unforgettable!</p>
                            </div>
                        </div>
                        <div><Image alt="Charcuterie board" className="w-full h-auto rounded-tl-[366px] shadow-lg"
                                src="https://picsum.photos/700/900" width={700} height={900} /></div>
                    </div>
                </div>
            </section>
    </>
  )}