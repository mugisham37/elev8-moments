import HeroSection from '@/components/Layout/about/HeroSection';
import CharcuterieOfferings from '@/components/Layout/about/CharcuterieOfferings';
import LoveNotesSection from '@/components/sections/testimonials/LoveNotesSection';

export default function AboutPage() {
  return (
    <div>
      <HeroSection />
      <CharcuterieOfferings />
      <LoveNotesSection />
    </div>
  );
}