import HeroSection from '@/components/Landing/Hero'
import WelcomeSection from '@/components/Landing/WelcomeSection'
import FruitSpecialtyBoards from '@/components/Landing/FruitSpecialtyBoards'
import EventDesign from '@/components/Landing/EventDesign'
import TestimonialsSection from '@/components/Layout/Testimonials'
import CharcuterieOfferings from '@/components/Landing/CharcuterieOfferings'
import Gallery from '@/components/Layout/Gallery'
import BoardBestiesCTA from '@/components/Landing/BoardBestiesCTA'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <CharcuterieOfferings/>
      <Gallery/>
      <FruitSpecialtyBoards />
      <EventDesign/>
      <BoardBestiesCTA/>
      <Gallery/>
      <TestimonialsSection />
    </div>
  );
}