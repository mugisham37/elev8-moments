export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-burgundy to-black dark:from-black dark:to-burgundy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center transform transition-transform duration-500 hover:scale-105">
            <div className="text-4xl md:text-5xl font-bold mb-2 animate-count text-glow">100+</div>
            <p className="text-cream/80">Happy Clients</p>
          </div>
          <div className="text-center transform transition-transform duration-500 hover:scale-105">
            <div className="text-4xl md:text-5xl font-bold mb-2 animate-count text-glow">250+</div>
            <p className="text-cream/80">Projects Completed</p>
          </div>
          <div className="text-center transform transition-transform duration-500 hover:scale-105">
            <div className="text-4xl md:text-5xl font-bold mb-2 animate-count text-glow">50+</div>
            <p className="text-cream/80">Events Organized</p>
          </div>
          <div className="text-center transform transition-transform duration-500 hover:scale-105">
            <div className="text-4xl md:text-5xl font-bold mb-2 animate-count text-glow">5+</div>
            <p className="text-cream/80">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}

