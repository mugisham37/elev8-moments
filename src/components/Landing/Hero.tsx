import Image from 'next/image'

export default function UnifiedHeroSection() {
  return (
    <section className="bg-[#efd8c9] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          alt="Background"
          className="w-full h-full object-cover"
          src="/images/28.jpg"
          fill
          sizes="100vw"
        />
      </div>
      <div className="max-w-[1200px] mx-auto px-4 md:py-22 py-2 relative z-10">
        {/* Mobile Image - Centered on top */}
        <div className="md:hidden relative w-[280px] h-80 mx-auto mb-6 z-20 top-[18px]">
          <Image
            alt="Charcuterie board"
            className="w-full h-full shadow-lg rounded-sm"
            src="/images/1.JPG"
            fill
            sizes="280px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className="bg-[#1e1e1e] text-white md:p-12 sm:p-12 p-6 w-full md:max-w-[53%] relative z-10 md:left-[70px] left-0 md:min-h-[650px] min-h-0 flex flex-col md:justify-center justify-start top-[-25px]">
          <p className="md:text-[14px] text-[12px] font-raleway font-light md:tracking-[2.8px] tracking-[2px] uppercase mb-3">KIGALI, RWANDA</p>
          <h2 className="md:text-[44px] sm:text-[32px] text-[28px] font-noiretblanc uppercase leading-tight md:mb-6 mb-4">intentionally curated EXPERIENCES, gifts &amp; celebrations</h2>
          <p className="text-[15px] font-raleway leading-relaxed md:mb-8 mb-6">At Elev8 Moments, we specialize in curating intentional experiences, events &amp; thoughtful gifts that elevate any occasion. Whether you&apos;re hosting a soulful gathering, looking for the perfect corporate gift, or planning a creative retreat for yourself, our carefully designed offerings are created to inspire lasting memories.
            </p>
            <a href="#"className="inline-block bg-[#f9f2ec] text-[#1e1e1e] md:px-4 px-6 md:py-4 py-3 text-[14px] font-raleway md:tracking-[1.4px] tracking-[1.2px] uppercase hover:opacity-80 transition-opacity md:w-auto w-auto">BOOK YOUR EXPERIENCE</a>
        </div>
        
        {/* Desktop Image - Positioned on the right */}
        <div className="hidden md:block absolute xl:top-34 md:top-24 top-20 xl:left-[670px] md:left-[55%] right-4 xl:w-[500px] md:w-[420px] w-[300px] xl:h-[550px] md:h-[480px] h-[350px] z-20">
          <Image
            alt="Charcuterie board"
            className="w-full h-auto shadow-lg"
            src="/images/1.JPG"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  )
}