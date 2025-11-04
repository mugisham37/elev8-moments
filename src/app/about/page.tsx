import HeroSection from '@/components/about/HeroSection';
import CharcuterieOfferings from '@/components/about/CharcuterieOfferings';
import LoveNotesSection from '@/components/testimonials/LoveNotesSection';

export default function AboutPage() {
  return (
    <div>
      <HeroSection />
      <CharcuterieOfferings />
      <LoveNotesSection />
    </div>
  );
}