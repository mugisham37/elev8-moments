import PhotoCollageCard from './PhotoCollageCard';
import AboutTextCard from './AboutTextCard';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-10 overflow-hidden">
      {/* Background with bokeh effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          filter: 'blur(8px) brightness(1.1)',
        }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(255, 245, 240, 0.3)',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Pink flowers on right side */}
      <div 
        className="absolute right-0 top-0 h-full w-1/3 bg-cover bg-left opacity-60"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
          filter: 'blur(6px)',
        }}
      />
      
      {/* Cards wrapper */}
      <div className="relative flex justify-center items-center max-w-[900px] w-full md:flex-row flex-col md:gap-0 gap-10">
        <PhotoCollageCard />
        <AboutTextCard />
      </div>
    </section>
  );
}