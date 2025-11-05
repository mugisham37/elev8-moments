import React from 'react';
import { ServiceItem } from './ServiceItem';
import { ImageWithFallback } from '../../imageWithFallBack/ImageWithFallback';

export default function Offering() {
  return (
    <section className="bg-[#f9f7f5]">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] lg:min-h-[709px] relative">
        {/* Text Content Container - Left Side */}
        <div className="pt-12 pb-12 pl-6 pr-6 flex flex-col md:pt-16 md:pb-16 md:pl-[60px] md:pr-[60px] lg:pt-20 lg:pb-20 lg:pl-[120px] lg:pr-20 relative">
          {/* Main Heading */}
          <h1 
            className="uppercase tracking-[0.05em] text-[#2d2d2d] mb-[30px] leading-[1.14] text-[36px] md:text-[48px] lg:text-[56px] lg:mb-[60px]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 300 }}
          >
            Charcuterie Offerings
          </h1>
          
          {/* Service Item 1 - Boards + Boxes */}
          <div className="mb-8 lg:mb-12">
            <ServiceItem 
              title="Boards + Boxes"
              description="Fresh, made-to-order charcuterie boards that come in a variety of sizes for all occasions. Includes an assortment of cheeses, meats, spreads/dips, crackers, fruit (dried & fresh), nuts, sweet treats, etc."
            />
          </div>
          
          {/* Divider 1 */}
          <hr className="w-full lg:w-[405px] h-px bg-[#d4d0cb] border-0 my-8 lg:my-10" />
          
          {/* Service Item 2 - Grazing Tables */}
          <div className="mb-8 lg:mb-[60px]">
            <ServiceItem 
              title="Grazing Tables"
              description="Add a wow factor to your event with our stunning grazing tables! Choose from a delicious spread of appetizers or indulge in light meals, plus plenty of fabulous add-ons to make your table a true showstopper!"
            />
          </div>
          
          {/* Divider 2 - Only visible on mobile */}
          <hr className="w-full h-px bg-[#d4d0cb] border-0 my-8 lg:hidden" />
          
          {/* Bottom Images Grid - Positioned absolutely on desktop, normal flow on mobile */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:pl-[120px] lg:gap-6 lg:pb-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1760322327927-eeb834067f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwY2hhcmN1dGVyaWUlMjBib2FyZCUyMGhvbGlkYXl8ZW58MXx8fHwxNzYyMzMyMzkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Festive holiday charcuterie board with crackers, cheeses, berries, and seasonal decorations on round wooden board"
              className="w-full h-[340px] object-cover block"
              loading="lazy"
            />
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1677946923587-7f13ff919ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhbWklMjByb3NlJTIwY2hhcmN1dGVyaWUlMjBib2FyZHxlbnwxfHx8fDE3NjIzMzIzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Artfully arranged charcuterie featuring folded salami roses, aged cheeses, fresh fruit, and edible flowers"
              className="w-full h-[340px] object-cover block"
              loading="lazy"
            />
          </div>
        </div>
        
        {/* Hero Image Container - Right Side on desktop */}
        <div className="relative w-full h-[400px] overflow-hidden md:h-[500px] lg:h-[709px]">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1679057658314-ca403aa4ea44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaGFyY3V0ZXJpZSUyMGJvYXJkJTIwZmxvd2VycyUyMHN0cmF3YmVycmllc3xlbnwxfHx8fDE3NjIzMzIzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxurious charcuterie board featuring fresh strawberries, grapes, artisan cheeses, cured meats, and vibrant flowers arranged on wooden serving board"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
