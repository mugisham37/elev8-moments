
import { ImageWithFallback } from '../../imageWithFallBack/ImageWithFallback';

export default function GlamHausGrazing() {
  return (
    <section className="flex flex-row items-center justify-center w-full min-h-[700px] bg-[#2B2B2B] px-[120px] py-20 gap-[120px]">
      
      {/* Left Column - Image with Frame */}
      <div className="flex items-center justify-center flex-none">
        <div className="w-[412px] h-[532px] border-16 border-[#E8DCC8] bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.35)] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1653559251018-f59d60ab3223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF6aW5nJTIwYm9hcmQlMjBjaGFyY3V0ZXJpZXxlbnwxfHx8fDE3NjIyNTkzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxurious grazing board with artisanal cheeses, fresh fruits, charcuterie, and gourmet accompaniments elegantly displayed on rustic wooden table"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </div>
      
      {/* Right Column - Content */}
      <div className="flex flex-col items-start max-w-[620px] flex-1">
        
        {/* Brand Name - Script Font */}
        <h2 className="font-['Dancing_Script'] text-[72px] font-normal leading-[86px] text-white tracking-[0.02em] mb-2">
          Glam Haus
        </h2>
        
        {/* Main Heading - Serif Font */}
        <h1 className="font-['Playfair_Display'] text-[120px] font-normal leading-[130px] text-white tracking-[0.05em] uppercase mb-0">
          GRAZING
        </h1>
        
        {/* Decorative Line */}
        <div className="w-[100px] h-[2px] bg-white mt-4 mb-6 ml-auto" />
        
        {/* Pricing Text */}
        <p className="font-['Montserrat'] text-sm font-normal leading-5 text-white tracking-[0.15em] uppercase mb-8">
          STARTING AT $19 PER PERSON
        </p>
        
        {/* Bullet List */}
        <ul className="list-disc pl-5 mb-10 space-y-3 marker:text-white">
          <li className="font-['Montserrat'] text-base font-light leading-7 text-white tracking-[0.01em]">
            Breath-takingly designed and expertly crafted
          </li>
          <li className="font-['Montserrat'] text-base font-light leading-7 text-white tracking-[0.01em]">
            Overflowing with gourmet cheeses, hand-sliced charcuterie, fresh fruit, artisanal breads
          </li>
          <li className="font-['Montserrat'] text-base font-light leading-7 text-white tracking-[0.01em]">
            An array of dips, spreads & jams
          </li>
          <li className="font-['Montserrat'] text-base font-light leading-7 text-white tracking-[0.01em]">
            Meticulous attention to detail with layers of textures, colors & flavors
          </li>
          <li className="font-['Montserrat'] text-base font-light leading-7 text-white tracking-[0.01em]">
            Complemented with seasonal garnishes, fresh floral & premium decor
          </li>
          <li className="font-['Montserrat'] text-base font-light leading-7 text-white tracking-[0.01em]">
            Perfect for weddings, corporate events and private parties
          </li>
        </ul>
        
        {/* Paragraph 1 with Italic Emphasis */}
        <p className="font-['Montserrat'] text-base font-light leading-7 text-white tracking-[0.01em] text-justify mb-6 max-w-[520px]">
          For those seeking a <em>touch more indulgence</em>, our light meal options include exquisite favorites like pineapple chicken salad sandwiches, a vibrant strawberry pecan feta or goat cheese salad, and decadent red pepper pistachio hummus.
        </p>
        
        {/* Paragraph 2 with Italic Emphasis */}
        <p className="font-['Montserrat'] text-base font-light leading-7 text-white tracking-[0.01em] text-justify mb-6 max-w-[520px]">
          Plus, we offer a range of fabulous add-ons—think lush greenery, chic rental display pieces to elevate the table, stylish decor, and more—to make your spread <em>truly spectacular!</em>
        </p>
        
        {/* CTA Button */}
        <button 
          className="w-[225px] h-[52px] px-10 py-4 bg-transparent border-2 border-white text-white font-['Montserrat'] text-sm font-medium tracking-[0.12em] uppercase cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-[0px_4px_12px_rgba(255,255,255,0.15)] active:bg-white/20 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-4 focus:ring-offset-[#2B2B2B] mt-12"
          aria-label="Place an order for grazing services"
        >
          PLACE AN ORDER
        </button>
        
      </div>
      
    </section>
  );
}