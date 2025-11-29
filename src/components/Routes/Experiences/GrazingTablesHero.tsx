import Image from 'next/image';

export default function GrazingTablesHero() {
  return (
    <section className="bg-[#efd8c9] py-8 sm:py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative">
              {/* Decorative background - hidden on mobile, visible on tablet+ */}
              <div className="hidden sm:block absolute inset-0 bg-[#efd8c9] -left-3 sm:-left-4 -top-3 sm:-top-4 w-full h-full"></div>
              <Image
                alt="Grazing table"
                className="relative w-full max-w-[259px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[259px] h-auto object-cover shadow-lg"
                src="/images/7.JPG"
                style={{ objectPosition: 'center' }}
                width={259}
                height={346}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="relative order-2 lg:order-2">
            {/* Decorative background - adjusted for responsiveness */}
            <div className="hidden lg:block absolute inset-0 bg-[#efd8c9] -right-4 -top-4 w-full h-full"></div>
            <div className="relative bg-[#efd8c9] p-6 sm:p-8 lg:p-10">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[49px] leading-tight lg:leading-[58.8px] text-[#1e1e1e] uppercase mb-3 sm:mb-4"
                style={{ fontFamily: 'Noiretblanc' }}
              >
                experiences
              </h2>
              <p
                className="text-xs sm:text-sm md:text-[14px] leading-relaxed sm:leading-[25.2px] tracking-[1.2px] sm:tracking-[1.4px] text-[#1e1e1e] uppercase mb-4 sm:mb-6 font-medium"
                style={{ fontFamily: 'Montserrat' }}
              >
                ELEVATE YOUR MOMENTS TO THE NEXT LEVEL
              </p>
              <p
                className="text-sm sm:text-base md:text-[16px] leading-relaxed sm:leading-[25.6px] text-[#1e1e1e] mb-6 sm:mb-8"
                style={{ fontFamily: 'Raleway' }}
              >
                At Elev8 Moments, we go beyond simply planning activities – we curate intentional, meaningful experiences that will leave a lasting impression on your guests. Whether you&apos;re hosting a soulful retreat or organizing a creative team gathering, our team is here to bring your vision to life with thoughtful, memorable presentations. Let us handle the details while you enjoy the connection factor!
              </p>
              <a
                href="#"
                className="inline-block border border-[#1e1e1e] px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#1e1e1e] hover:text-[#f9f2ec] transition-colors w-full sm:w-auto text-center"
              >
                <span
                  className="text-xs sm:text-sm md:text-[14px] leading-relaxed sm:leading-[30.8px] tracking-[1.2px] sm:tracking-[1.4px] text-[#1e1e1e] uppercase hover:text-[#f9f2ec]"
                  style={{ fontFamily: 'Raleway' }}
                >
                  BOOK AN EXPERIENCE
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}