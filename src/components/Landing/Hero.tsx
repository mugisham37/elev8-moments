import Image from 'next/image'

export default function UnifiedHeroSection() {
  return (
    <section className="bg-[#efd8c9] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <Image 
                    alt="Background" 
                    className="w-full h-full object-cover"
                    src="https://picsum.photos/1600/800"
                    fill
                    sizes="100vw"
                  />
                </div>
                <div className="max-w-[1200px] mx-auto px-4 py-16 relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="bg-[#1e1e1e] text-white p-12 rounded">
                        <p className="text-[14px] font-raleway font-light tracking-[2.8px] uppercase mb-4">NEW
                            BRAUNFELS, TEXAS</p>
                        <h2 className="text-[44px] font-noiretblanc uppercase leading-tight mb-6">perfectly crafted
                            charcuterie boards, BOXES &amp; grazing tables</h2>
                        <p className="text-[15px] font-raleway leading-relaxed mb-8">At Glam Haus, we specialize in
                            crafting custom boards, boxes &amp; grazing tables that elevate any occasion. Whether you&apos;re
                            hosting a grand event, looking for the perfect hostess gift, or simply indulging in a treat
                            for yourself, our carefully curated selections are designed to impress.</p><a href="#"
                            className="inline-block bg-[#f9f2ec] text-[#1e1e1e] px-8 py-4 text-[14px] font-raleway tracking-[1.4px] uppercase hover:opacity-80 transition-opacity">PLACE
                            AN ORDER</a>
                    </div>
                    <div className="relative h-[600px]">
                      <Image 
                        alt="Charcuterie board" 
                        className="w-full h-auto rounded-lg shadow-lg"
                        src="https://picsum.photos/600/800"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                </div>
            </section>
  )
}