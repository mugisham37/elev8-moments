import HeroSection from './components/hero/HeroSection'
import WelcomeSection from './components/sections/WelcomeSection'
import FruitSpecialtyBoards from './components/sections/FruitSpecialtyBoards'
import Marquee from './components/ui/Marquee'
import BoardBestiesBanner from './components/sections/BoardBestiesBanner'
import TestimonialsSection from './components/testimonials/TestimonialsSection'
import InstagramSection from './components/InstagramSection'
import MenuSection from './components/MenuSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <FruitSpecialtyBoards />
      <Marquee text="Glam Haus Design Co." />
      <BoardBestiesBanner />
      <TestimonialsSection />
      <InstagramSection />
      <MenuSection />
    </div>
  );
}