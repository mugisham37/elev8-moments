import HeroSection from '@/components/Routes/About/HeroSection';
import CharcuterieOfferings from '@/components/Routes/About/CharcuterieOfferings';
import LoveNotesSection from '@/components/Landing/testimonials/LoveNotesSection';

export default function AboutPage() {
  return (
    <div>
      <HeroSection />
      <CharcuterieOfferings />
      <LoveNotesSection />
    </div>
  );
}