import { Playfair_Display, Montserrat } from 'next/font/google'
import Image from 'next/image'
import { Button } from '../ui/Button'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-montserrat',
  display: 'swap',
})

export default function UnifiedHeroSection() {
  return (
    <section className={`relative h-[700px] overflow-hidden ${playfairDisplay.variable} ${montserrat.variable}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-1 bg-cover bg-center opacity-35"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          filter: 'saturate(0.7) brightness(1.1)',
        }}
      />
      
      {/* Content Grid */}
      <div className="relative z-10 grid grid-cols-[58%_42%] h-full lg:grid-cols-[58%_42%] md:grid-cols-1 sm:grid-cols-1">
        {/* Left Column - Text Content */}
        <div className="bg-[#0a0a0a] flex flex-col justify-center z-2 px-[55px] py-[65px] md:px-[30px] md:py-[40px] sm:px-[20px] sm:py-[30px]">
          {/* Location Text */}
          <div className="font-montserrat font-normal text-[13px] text-white uppercase tracking-[0.23em] mb-[18px] sm:text-[12px]">
            NEW BRAUNFELS, TEXAS
          </div>
          
          {/* Main Heading */}
          <h1 className="font-playfair font-normal text-[60px] leading-[1.13] text-white uppercase max-w-[680px] mb-[28px] md:text-[48px] sm:text-[36px]">
            PERFECTLY CRAFTED CHARCUTERIE BOARDS, BOXES & GRAZING TABLES
          </h1>
          
          {/* Body Text */}
          <p className="font-montserrat font-normal text-[15.5px] leading-[1.65] text-white max-w-[600px] mb-[38px] sm:text-[14px]">
            At Glam Haus, we specialize in crafting custom boards, boxes & grazing tables that elevate any occasion. Whether you&apos;re hosting a grand event, looking for the perfect hostess gift, or simply indulging in a treat for yourself, our carefully curated selections are designed to impress.
          </p>
          
          {/* Call to Action Button */}
          <Button variant="outline" className="w-fit text-white border-white hover:bg-white hover:text-black">
            VIEW OUR SERVICES
          </Button>
        </div>
        
        {/* Right Column - Image */}
        <div className="relative md:flex md:justify-center md:items-center">
          <div className="absolute top-1/2 -translate-y-1/2 right-[-25px] z-3 md:relative md:top-auto md:right-auto md:transform-none md:w-[90%] md:mx-auto sm:w-full">
            <Image
              src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
              alt="Beautifully arranged charcuterie board with cheeses, meats, fruits, and flowers"
              width={525}
              height={545}
              priority
              className="object-cover shadow-[0px_15px_40px_rgba(0,0,0,0.2)]"
              style={{
                width: '525px',
                height: '545px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}