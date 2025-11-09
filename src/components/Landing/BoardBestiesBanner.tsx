/* eslint-disable @next/next/no-img-element */
export default function BoardBestiesBanner() {
  return (
    <>
    <section className="bg-[#f9f2ec] py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-[50px] font-['Noiretblanc'] uppercase leading-tight mb-4">EVENT DESIGN</h3>
                            <p
                                className="text-[16px] font-['Montserrat'] font-medium tracking-[1.6px] uppercase leading-relaxed mb-6">
                                IMAGINE WALKING INTO A BEAUTIFULLY DESIGNED SPACE, WHERE THE AMBIANCE IS PERFECTLY
                                TAILORED TO YOUR CELEBRATION</p>
                            <p className="text-[16px] font-['Raleway'] leading-relaxed mb-8">At Glam Haus, our passion for
                                event design shines through in every detail, from seasonal holiday décor to stunning
                                tablescapes, ensuring your event is nothing short of spectacular. Whether you&apos;re hosting
                                an intimate gathering, a lavish wedding, or a festive holiday party, we are here to
                                bring your vision to life with our creative flair and meticulous attention to detail.
                            </p><a href="#"
                                className="inline-block bg-[#1e1e1e] text-white px-8 py-4 text-[14px] font-['Raleway'] tracking-[1.4px] uppercase hover:opacity-80 transition-opacity">Learn
                                more</a>
                        </div>
                        <div className="relative"><img alt="Event design" className="w-full h-auto rounded shadow-lg"
                                src="https://picsum.photos/500/600" />
                            <div
                                className="absolute bottom-0 right-0 w-[407px] h-[338px] bg-[#f9f2ec] rounded -mb-8 -mr-8 -z-10">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#f9f2ec] py-16">
                <div className="max-w-[1400px] mx-auto px-4">
                    <div className="border border-black p-4 relative">
                        <div className="overflow-hidden">
                            <div className="flex gap-1"><img alt="Event 1" className="h-[641px] object-cover"
                                    src="https://picsum.photos/600/700" /><img alt="Event 2"
                                    className="h-[641px] object-cover" src="https://picsum.photos/600/700" /><img
                                    alt="Event 3" className="h-[641px] object-cover" src="https://picsum.photos/600/700" />
                            </div>
                        </div><button className="absolute right-8 bottom-8 hover:opacity-70"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-chevron-right w-12 h-12 text-[#95aa9b]"
                                aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg></button>
                    </div>
                </div>
            </section>
            <section className="bg-[#1e1e1e] relative py-16">
                <div className="absolute inset-0 opacity-30"><img alt="Background" className="w-full h-full object-cover"
                        src="https://picsum.photos/1600/400" /></div>
                <div className="max-w-[1200px] mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-[54px] font-['Noiretblanc'] text-white mb-2">Join our</h2>
                    <h3 className="text-[66px] font-['Strings'] text-white mb-4">Board Besties</h3>
                    <p className="text-[16px] font-['Raleway'] text-white mb-6">Follow us on Instagram to keep up with our
                        latest releases and specials!</p><a href="#"
                        className="inline-block bg-[#1e1e1e] text-white border border-white px-8 py-4 text-[14px] font-['Montserrat'] tracking-[1.4px] uppercase hover:bg-white hover:text-[#1e1e1e] transition-colors">TAKE
                        ME THERE</a>
                </div>
            </section>
    </>
  )
}