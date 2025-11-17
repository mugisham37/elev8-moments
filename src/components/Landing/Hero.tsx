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
                <div className="max-w-[1200px] mx-auto px-4 py-16 relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="bg-[#1e1e1e] text-white p-12 rounded">
                        <p className="text-[14px] font-raleway font-light tracking-[2.8px] uppercase mb-4">KIGALI, RWANDA</p>
                        <h2 className="text-[44px] font-noiretblanc uppercase leading-tight mb-6">intentionally curated EXPERIENCES, gifts &amp; celebrations</h2>
                        <p className="text-[15px] font-raleway leading-relaxed mb-8">At Elev8 Moments, we specialize in curating intentional experiences, events &amp; thoughtful gifts that elevate any occasion. Whether you&apos;re hosting a soulful gathering, looking for the perfect corporate gift, or planning a creative retreat for yourself, our carefully designed offerings are created to inspire lasting memories.</p><a href="#"
                            className="inline-block bg-[#f9f2ec] text-[#1e1e1e] px-8 py-4 text-[14px] font-raleway tracking-[1.4px] uppercase hover:opacity-80 transition-opacity">BOOK YOUR EXPERIENCE</a>
                    </div>
                    <div className="relative h-[600px]">
                      <Image 
                        alt="Charcuterie board" 
                        className="w-full h-auto rounded-lg shadow-lg"
                        src="/images/1.JPG"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                </div>
            </section>
  )
}