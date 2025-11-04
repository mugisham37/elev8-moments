
import { ImageWithFallback } from '../../imageWithFallBack/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export default function BoardsAndBoxes() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-[120px] py-20 bg-[#1a1a1a]" aria-labelledby="boards-heading">
      
      {/* Hero Title */}
      <header className="flex flex-col items-center mb-15 text-center">
        <h1 id="boards-heading">
          <span className="font-['Dancing_Script'] text-[64px] font-normal leading-[1.2] text-white block mb-2">
            Check Out Our
          </span>
          <span className="font-['Playfair_Display'] text-[88px] font-light leading-[1.1] tracking-[4px] text-white uppercase block">
            BOARDS + BOXES
          </span>
        </h1>
      </header>
      
      {/* Cards Container */}
      <div className="flex flex-col gap-20">
        
        {/* Product Card 1 - Traditional */}
        <article 
          className="flex flex-row items-center gap-10 cursor-pointer transition-transform duration-300 hover:scale-[1.02] group"
          role="button"
          tabIndex={0}
          aria-labelledby="traditional-title"
        >
          
          {/* Image */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1567729769245-b6b7dfcf506f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyY3V0ZXJpZSUyMGJvYXJkJTIwY29sb3JmdWwlMjBmbG93ZXJzfGVufDF8fHx8MTc2MjI2MDA5NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Colorful traditional charcuterie board with flowers, berries, cheese, and gourmet treats"
            className="w-[254px] h-[160px] object-cover shrink-0 transition-all duration-300 group-hover:brightness-110"
            loading="eager"
          />
          
          {/* Content */}
          <div className="flex-1 max-w-[600px]">
            
            {/* Title Row */}
            <div className="flex justify-between items-center mb-6">
              <h3 id="traditional-title" className="font-['Montserrat'] text-[22px] font-semibold leading-[1.45] tracking-[2px] text-white uppercase m-0">
                TRADITIONAL BOARDS + BOXES
              </h3>
              <ArrowRight 
                size={24} 
                className="text-white ml-4 shrink-0 transition-transform duration-300 group-hover:translate-x-2" 
                aria-hidden="true"
              />
            </div>
            
            {/* Divider */}
            <hr className="w-full h-px bg-[#4a4a4a] border-none my-6" aria-hidden="true" />
            
            {/* Description */}
            <p className="font-['Lora'] text-[17px] font-normal leading-[1.65] tracking-[0.3px] text-[#e5e5e5] m-0">
              Our traditional boards include an assortment of cheeses, meats, spreads/dips, crackers, fruit (dried & fresh), nuts, sweet treats, etc.
            </p>
            
          </div>
        </article>
        
        {/* Product Card 2 - Custom */}
        <article 
          className="flex flex-row items-center gap-10 cursor-pointer transition-transform duration-300 hover:scale-[1.02] group"
          role="button"
          tabIndex={0}
          aria-labelledby="custom-title"
        >
          
          {/* Image */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1695229735020-e4fec302d52e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMGNoYXJjdXRlcmllJTIwYm9hcmQlMjBhcnRpc3RpY3xlbnwxfHx8fDE3NjIyNjAwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Artfully arranged custom charcuterie board with vibrant fruits and flowers"
            className="w-[254px] h-[160px] object-cover shrink-0 transition-all duration-300 group-hover:brightness-110"
            loading="eager"
          />
          
          {/* Content */}
          <div className="flex-1 max-w-[600px]">
            
            {/* Title Row */}
            <div className="flex justify-between items-center mb-6">
              <h3 id="custom-title" className="font-['Montserrat'] text-[22px] font-semibold leading-[1.45] tracking-[2px] text-white uppercase m-0">
                CUSTOM & SPECIALTY BOARDS + BOXES
              </h3>
              <ArrowRight 
                size={24} 
                className="text-white ml-4 shrink-0 transition-transform duration-300 group-hover:translate-x-2" 
                aria-hidden="true"
              />
            </div>
            
            {/* Divider */}
            <hr className="w-full h-px bg-[#4a4a4a] border-none my-6" aria-hidden="true" />
            
            {/* Description */}
            <p className="font-['Lora'] text-[17px] font-normal leading-[1.65] tracking-[0.3px] text-[#e5e5e5] m-0">
              Our custom charcuterie boards are thoughtfully curated to suit your unique style and occasion.
            </p>
            
          </div>
        </article>
        
      </div>
      
    </section>
  );
}