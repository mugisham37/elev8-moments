import HeroSection from '@/components/Routes/about/HeroSection';
import CharcuterieOfferings from '@/components/Routes/about/CharcuterieOfferings';
import LoveNotesSection from '@/components/Routes/about/LoveNotesSection';

export default function AboutPage() {
  return (
    <div>
      <HeroSection />
      <CharcuterieOfferings />
      <LoveNotesSection />
    </div>
  );
}