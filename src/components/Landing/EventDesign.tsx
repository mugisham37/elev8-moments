/* eslint-disable @next/next/no-img-element */
export default function EventDesign
() {
  return (
    <>
    <section className="bg-[#f9f2ec] py-12 sm:py-16 md:py-24 lg:py-34">
                <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-4">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
                        {/* Text Content */}
                        <div className="order-2 md:order-1">
                            <h3 className="text-[32px] sm:text-[38px] lg:text-[44px] xl:text-[50px] font-['Noiretblanc'] uppercase leading-tight mb-3 sm:mb-4">
                                EVENT DESIGN
                            </h3>
                            <p className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] font-['Montserrat'] font-medium tracking-[1.3px] sm:tracking-[1.4px] lg:tracking-[1.5px] xl:tracking-[1.6px] uppercase leading-relaxed mb-4 sm:mb-5 lg:mb-6">
                                IMAGINE STEPPING INTO AN INTENTIONALLY CURATED SPACE, WHERE EVERY DETAIL IS PERFECTLY DESIGNED FOR CONNECTION AND JOY
                            </p>
                            <p className="text-[14px] sm:text-[15px] xl:text-[16px] font-['Raleway'] leading-relaxed mb-6 sm:mb-7 lg:mb-8">
                                At Elev8 Moments, our passion for event design shines through in every detail, from creative workshops to soulful retreats, ensuring your experience is nothing short of memorable. Whether you&apos;re hosting an intimate gathering, a corporate celebration, or a meaningful community event, we are here to bring your vision to life with intentionality and meticulous attention to detail.
                            </p>
                            <a href="#" className="inline-block bg-[#1e1e1e] text-white px-6 py-3 sm:px-7 sm:py-3.5 lg:px-8 lg:py-4 text-[12px] sm:text-[13px] xl:text-[14px] font-['Raleway'] tracking-[1.2px] sm:tracking-[1.3px] xl:tracking-[1.4px] uppercase hover:opacity-80 transition-opacity">
                                Learn more
                            </a>
                        </div>
                        
                        {/* Image Content */}
                        <div className="relative h-[350px] sm:h-[380px] md:h-[400px] lg:h-[425px] xl:h-[450px] order-1 md:order-2">
                            <img 
                                alt="Event design" 
                                className="w-full h-full object-cover rounded shadow-lg"
                                src="/images/7.JPG" 
                            />
                            {/* Decorative Box - Hidden on mobile, scaled on larger screens */}
                            <div className="hidden md:block absolute bottom-0 right-0 w-[280px] h-[230px] lg:w-[340px] lg:h-[280px] xl:w-[407px] xl:h-[338px] bg-[#f9f2ec] rounded -mb-6 -mr-6 lg:-mb-7 lg:-mr-7 xl:-mb-8 xl:-mr-8 -z-10">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
    </>
  )
}