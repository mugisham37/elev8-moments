import { Playfair_Display, Montserrat } from 'next/font/google'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'

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

export default function HeroSection() {
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
        <HeroContent />
        
        {/* Right Column - Image */}
        <div className="relative md:flex md:justify-center md:items-center">
          <HeroImage />
        </div>
      </div>
    </section>
  )
}