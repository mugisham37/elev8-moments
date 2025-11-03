import HeroSection from './components/hero/HeroSection'
import WelcomeSection from './components/sections/WelcomeSection'
import FruitSpecialtyBoards from './components/sections/FruitSpecialtyBoards'
import Marquee from './components/ui/Marquee'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <FruitSpecialtyBoards />
      <Marquee text="Glam Haus Design Co." />
    </div>
  );
}