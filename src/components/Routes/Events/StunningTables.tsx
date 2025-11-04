import { ImageWithFallback } from '../../imageWithFallBack/ImageWithFallback';

export default function StunningTables() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <section 
        className="grid grid-cols-1 lg:grid-cols-[55%_45%] max-w-[1440px] min-h-[700px] mx-auto bg-[#F5F1E8] relative overflow-hidden"
        aria-label="Tablescape Design Services"
      >
        {/* Image Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[220px_350px_220px] lg:grid-rows-[auto_auto_200px] gap-3 relative"
          role="img" 
          aria-label="Gallery of elegant table settings"
        >
          {/* Hero Peonies - Top Left */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1646035343414-9843a57cbb57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcGVvbmllcyUyMHZhc2UlMjBjZW50ZXJwaWVjZXxlbnwxfHx8fDE3NjIyODU2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Pink and white peonies in glass vases as table centerpiece"
            width={220}
            height={280}
            className="w-full h-[280px] lg:w-[220px] lg:h-[280px] object-cover lg:col-start-1 lg:row-span-2 transition-transform duration-400 ease-in-out hover:scale-[1.02]"
          />

          {/* Rustic Dining Table - Center */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758810742274-fa5b3ab2e11f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBkaW5pbmclMjB0YWJsZSUyMHNldHRpbmclMjB3ZWRkaW5nfGVufDF8fHx8MTc2MjI4NTYwNXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Elegant rustic dining table with candles and floral arrangements"
            width={350}
            height={380}
            className="w-full h-[380px] lg:w-[350px] lg:h-[380px] object-cover object-[center_30%] lg:col-start-2 lg:row-span-2 transition-transform duration-400 ease-in-out hover:scale-[1.02]"
          />

          {/* Place Setting - Bottom Left */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1734705797834-a356d77e4140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHBsYXRlcyUyMGdyZWVuZXJ5JTIwdGFibGUlMjBzZXR0aW5nfGVufDF8fHx8MTc2MjI4NTYwNXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="White plates with greenery garland table decoration"
            width={220}
            height={200}
            className="w-full h-[200px] lg:w-[220px] lg:h-[200px] object-cover lg:col-start-1 lg:row-start-3 transition-transform duration-400 ease-in-out hover:scale-[1.02]"
          />

          {/* Floral Menu - Bottom Center */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1642336325943-fa39a11e8787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZsb3dlcnMlMjBtZW51JTIwY2FyZCUyMHRhYmxlfGVufDF8fHx8MTc2MjI4NTYwNnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Colorful floral arrangement with menu card on table"
            width={220}
            height={200}
            className="w-full h-[200px] lg:w-[220px] lg:h-[200px] object-cover lg:col-start-2 lg:row-start-3 transition-transform duration-400 ease-in-out hover:scale-[1.02]"
          />

          {/* Elegant Setting - Bottom Right of Grid */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761110787206-2cc164e4913c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGVsZWdhbnQlMjB0YWJsZSUyMHNldHRpbmclMjBjYW5kbGVzfGVufDF8fHx8MTc2MjI4NTYwNnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="White linen table setting with candles and flowers"
            width={220}
            height={200}
            className="w-full h-[200px] lg:w-[220px] lg:h-[200px] object-cover lg:col-start-3 lg:row-start-3 transition-transform duration-400 ease-in-out hover:scale-[1.02]"
          />

          {/* Outdoor Dining - Right Side (Absolute positioned on large screens) */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758810743287-e3a0ab989714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwd29vZGVuJTIwdGFibGUlMjBkaW5pbmclMjBlbGVnYW50JTIwZmxvd2Vyc3xlbnwxfHx8fDE3NjIyODU2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Outdoor wooden dining table with elegant place settings and floral centerpiece"
            width={400}
            height={400}
            className="w-full h-[400px] lg:absolute lg:right-0 lg:top-0 lg:w-[400px] lg:h-full object-cover lg:z-1 transition-transform duration-400 ease-in-out hover:scale-[1.02]"
          />
        </div>

        {/* Content Area */}
        <div className="flex flex-col justify-center items-start px-5 py-8 sm:px-10 sm:py-12 lg:px-20 lg:py-20 lg:pl-20 lg:pr-[60px] max-w-[648px] relative z-2">
          <h1 className="mb-8">
            <span className="font-['Allura',cursive] text-[42px] sm:text-[56px] lg:text-[72px] leading-[48px] sm:leading-[64px] lg:leading-[80px] text-[#2B2B2B] inline-flex items-center relative after:content-[''] after:inline-block after:w-[80px] sm:after:w-[95px] lg:after:w-[110px] after:h-px after:bg-[#2B2B2B] after:ml-3 sm:after:ml-4 lg:after:ml-5">
              Stunning
            </span>
            <span className="font-['Playfair_Display',serif] text-[48px] sm:text-[64px] lg:text-[84px] leading-[56px] sm:leading-[72px] lg:leading-[88px] tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] text-[#2B2B2B] uppercase block">
              TABLESCAPES
            </span>
          </h1>
          <p className="font-['Lato',sans-serif] text-[15px] sm:text-base leading-[26px] sm:leading-7 tracking-[0.3px] text-[#4A4A4A] max-w-[480px] m-0">
            Take your dining experience to the next level with our stunning tablescapes! We know the table is the centerpiece of any celebration, and our team creates beautiful setups that show off your personal style. From chic place settings to eye-catching centerpieces, every detail is carefully chosen to make your table a true showstopper. Imagine tables decked out with gorgeous flowers, shimmering glassware, and luxurious linens, welcoming your guests to enjoy an unforgettable meal.
          </p>
        </div>
      </section>
    </div>
  );
}
