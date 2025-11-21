import Image from 'next/image';

export default function CharcuterieOfferings() {
  return (
    <>
      {/* Mobile Layout - Each offering with its own image */}
      <section className="bg-[#f9f2ec] py-12 md:hidden">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Section Title */}
          <h3 className="text-[28px] font-noiretblanc mb-8">SIGNATURE OFFERINGS</h3>
          
          {/* Offering 1: Events + Experiences */}
          <div className="relative overflow-hidden min-h-60">
            {/* Background Image - Right Side */}
            <div className="absolute right-0 top-0 w-[55%] h-full z-0">
              <Image 
                alt="Events and experiences" 
                className="w-full h-[210px] object-cover rounded-tl-[60px] opacity-90"
                src="/images/3.JPG" 
                width={400} 
                height={500}
                style={{ objectPosition: 'center' }}
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-linear-to-r from-[#f9f2ec] via-[#f9f2ec]/60 to-transparent"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 pr-[10%] py-6">
              <div className="flex items-start justify-between mb-3 gap-2">
                <h4 className="text-[16px] font-montserrat font-medium tracking-[1.5px] leading-tight">
                  EVENTS + EXPERIENCES
                </h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-chevron-right w-6 h-6 shrink-0 mt-1" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
              <p className="text-[13px] font-raleway leading-relaxed">
                Curated, intentional experiences designed for connection and celebration. From Bloom &amp; Bond floral workshops to Paint a Shirt creative gatherings.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-black/20 my-10"></div>

          {/* Offering 2: Thoughtful Gifting */}
          <div className="relative overflow-hidden min-h-60">
            {/* Background Image - Right Side */}
            <div className="absolute right-0 top-0 w-[55%] h-full z-0">
              <Image 
                alt="Thoughtful gifting" 
                className="w-full h-[210px] object-cover rounded-tl-[60px] opacity-90"
                src="/images/7.JPG" 
                width={400} 
                height={500}
                style={{ objectPosition: 'center left' }}
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-linear-to-r from-[#f9f2ec] via-[#f9f2ec]/60 to-transparent"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 pr-[10%] py-6">
              <div className="flex items-start justify-between mb-3 gap-2">
                <h4 className="text-[16px] font-montserrat font-medium tracking-[1.5px] leading-tight">
                  THOUGHTFULGIFTING
                </h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-chevron-right w-6 h-6 shrink-0 mt-1" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
              <p className="text-[13px] font-raleway leading-relaxed">
                Add a wow factor to your celebration with our elegant gifting solutions! Choose from curated corporate packages or personalized gifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tablet & Desktop Layout - Original design */}
      <section className="bg-[#f9f2ec] py-14 lg:py-16 hidden md:block">
        <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-60 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-[32px] md:text-[34px] lg:text-[38px] font-noiretblanc mb-7 lg:mb-8">SIGNATURE OFFERINGS</h3>
              <div className="mb-7 lg:mb-8 pb-7 lg:pb-8 border-b border-black">
                <div className="flex items-center justify-between mb-4 gap-3">
                  <h4 className="text-[17px] md:text-[18px] lg:text-[20px] font-montserrat font-medium tracking-[1.5px] md:tracking-[2px]">EVENTS + EXPERIENCES</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-chevron-right w-7 md:h-7 lg:w-8 lg:h-8 shrink-0" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
                <p className="text-[15px] lg:text-[16px] font-raleway leading-relaxed">Curated, intentional experiences designed for connection and celebration. From Bloom &amp; Bond floral workshops to Paint a Shirt creative gatherings, each event includes soulful activities, meaningful moments, community bonding, healing spaces, and joyful memories.</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-4 gap-3">
                  <h4 className="text-[17px] md:text-[18px] lg:text-[20px] font-montserrat font-medium tracking-[1.5px] md:tracking-[2px]">THOUGHTFUL GIFTING</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-chevron-right w-7 md:h-7 lg:w-8 lg:h-8 shrink-0" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
                <p className="text-[15px] lg:text-[16px] font-raleway leading-relaxed">Add a wow factor to your celebration with our elegant gifting solutions! Choose from curated corporate packages or indulge in personalized gifts, plus plenty of customizable add-ons to make your gesture truly unforgettable!</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image alt="Charcuterie board" className="w-full h-auto rounded-tl-[120px] md:rounded-tl-[200px] lg:rounded-tl-[280px] xl:rounded-tl-[366px] shadow-lg"
                src="/images/3.JPG" width={700} height={900} />
            </div>
          </div>
        </div>
      </section>
    </>
  )}