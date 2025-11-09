import HeroSection from '@/components/Landing/Hero'
import WelcomeSection from '@/components/Landing/WelcomeSection'
import FruitSpecialtyBoards from '@/components/Landing/FruitSpecialtyBoards'
import EventDesign from '@/components/Landing/EventDesign'
import TestimonialsSection from '@/components/Layout/Testimonials'
import CharcuterieOfferings from '@/components/Landing/CharcuterieOfferings'
import Gallery1 from '@/components/Landing/Gallery1'
import BoardBestiesCTA from '@/components/Landing/BoardBestiesCTA'
import Gallery2 from '@/components/Landing/Gallery2'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <CharcuterieOfferings/>
      <Gallery1/>
      <FruitSpecialtyBoards />
      <EventDesign/>
      <Gallery2/>
      <BoardBestiesCTA/>
      <TestimonialsSection />
    </div>
  );
}