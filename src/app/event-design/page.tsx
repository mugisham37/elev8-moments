import Hero from '@/components/Routes/Events/Hero';
import EventSetup from '@/components/Routes/Events/EventSetup';
import FloralDesign from '@/components/Routes/Events/FloralDesign';
import { Tablescapes } from '@/components/Routes/Events/Tablescapes';
import { SeasonalDecor } from '@/components/Routes/Events/SeasonalDecor';
import Gallery from '@/components/Layout/Gallery';

export default function App() {
  return (
    <>
    <Hero />
    <EventSetup />
    <Tablescapes/>
    <FloralDesign/>
    <SeasonalDecor/>
    <Gallery/>
    </>
  );
}
