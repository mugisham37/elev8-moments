import HeroSection from '@/components/Landing/Hero'
import WelcomeSection from '@/components/Landing/WelcomeSection'
import FruitSpecialtyBoards from '@/components/Landing/FruitSpecialtyBoards'
import Marquee from '@/components/Landing/Marquee'
import BoardBestiesBanner from '@/components/Landing/BoardBestiesBanner'
import TestimonialsSection from '@/components/Layout/Testimonials'
import Offering from '@/components/Landing/offering/offering'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <Offering/>
      <FruitSpecialtyBoards />
      <Marquee text="Glam Haus Design Co." />
      <BoardBestiesBanner />
      <TestimonialsSection />
    </div>
  );
}