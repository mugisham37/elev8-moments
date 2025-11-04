import HeroSection from '@/components/Landing/Hero/HeroSection'
import WelcomeSection from '@/components/Landing/WelcomeSection'
import FruitSpecialtyBoards from '@/components/Landing/FruitSpecialtyBoards'
import Marquee from '@/components/Landing/Marquee'
import BoardBestiesBanner from '@/components/Landing/BoardBestiesBanner'
import TestimonialsSection from '@/components/Layout/Testimonials'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <FruitSpecialtyBoards />
      <Marquee text="Glam Haus Design Co." />
      <BoardBestiesBanner />
      <TestimonialsSection />
    </div>
  );
}