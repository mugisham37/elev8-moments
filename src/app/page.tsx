import HeroSection from '../../app/components/hero/HeroSection'
import WelcomeSection from '../../app/components/sections/WelcomeSection'
import FruitSpecialtyBoards from '../../app/components/sections/FruitSpecialtyBoards'
import Marquee from '../../app/components/ui/Marquee'
import BoardBestiesBanner from '../../app/components/sections/BoardBestiesBanner'
import TestimonialsSection from '../../app/components/testimonials/TestimonialsSection'
import InstagramSection from '../../app/components/InstagramSection'
import MenuSection from '../../app/components/MenuSection'

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