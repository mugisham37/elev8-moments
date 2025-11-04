
import { ImageWithFallback } from '../../imageWithFallBack/ImageWithFallback';

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1440px] h-[705px] mx-auto bg-[#E8DDD4] overflow-hidden">
      
      {/* Decorative Food Images */}
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1633981744930-15bb79ca2c41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyY3V0ZXJpZSUyMGNoZWVzZSUyMGJvYXJkfGVufDF8fHx8MTc2MjI1ODM4MHww&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Gourmet charcuterie board with grapes and cheese"
        width={240}
        height={150}
        className="absolute top-0 left-0 w-[240px] h-[150px] object-cover z-1"
      />
      
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1738596680872-00c626e6fbfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF6aW5nJTIwdGFibGUlMjBhZXJpYWx8ZW58MXx8fHwxNzYyMjU4MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Colorful grazing table with fruits, meats, and flowers"
        width={240}
        height={340}
        className="absolute top-[168px] left-0 w-[240px] h-[340px] object-cover z-1"
      />
      
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1710528184650-fc75ae862c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJlcnJpZXMlMjBzdHJhd2JlcnJpZXN8ZW58MXx8fHwxNzYyMjM4MTM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Fresh strawberries and blueberries on wooden board"
        width={240}
        height={200}
        className="absolute bottom-[70px] left-0 w-[240px] h-[200px] object-cover z-1"
        loading="lazy"
      />
      
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1761110429384-0678d7015545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBldGl6ZXIlMjBwbGF0dGVyfGVufDF8fHx8MTc2MjE3MTcxNHww&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Elegant appetizer platter with decorative presentation"
        width={560}
        height={150}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[150px] object-cover z-1"
      />
      
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1555744038-d0bf77748106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0c3xlbnwxfHx8fDE3NjIxOTQxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Artisan chocolate desserts and treats"
        width={360}
        height={330}
        className="absolute top-0 right-0 w-[360px] h-[330px] object-cover z-1"
      />
      
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1659991689791-db84493f8544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjBncmFwZXN8ZW58MXx8fHwxNzYyMjU4MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Cheese board with green grapes and gourmet selections"
        width={360}
        height={350}
        className="absolute bottom-[70px] right-0 w-[360px] h-[350px] object-cover z-1"
      />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-[580px] mx-auto py-20 px-10 flex flex-col items-center text-center">
        
        {/* Heading */}
        <h1 className="font-serif text-[72px] font-light leading-[84px] tracking-[0.08em] uppercase text-[#3D3127] mb-4">
          Grazing Tables
        </h1>
        
        {/* Tagline */}
        <p className="font-sans text-sm leading-5 tracking-[0.15em] uppercase text-[#5A4A3F] mb-8">
          Elevate your event to the next level
        </p>
        
        {/* Body Text */}
        <p className="font-sans text-base leading-7 tracking-wide text-[#5A4A3F] mb-10 max-w-[580px]">
          At Glam Haus, we go beyond simply arranging meats and cheeses – we craft stunning, delicious grazing tables that will leave a lasting impression on your guests. Whether you&apos;re hosting a cozy gathering or making a big business pitch, our team is here to bring your vision to life with creative, mouthwatering presentations. Let us handle the details while you enjoy the wow factor!
        </p>
        
        {/* CTA Button */}
        <a 
          href="#order" 
          className="inline-block py-4 px-12 border-2 border-[#3D3127] bg-transparent text-[#3D3127] text-[13px] font-medium tracking-[0.12em] uppercase no-underline cursor-pointer transition-all duration-300 hover:bg-[#3D3127] hover:text-white hover:-translate-y-0.5 hover:shadow-lg"
          role="button"
          aria-label="Request a custom grazing table order"
        >
          Request an Order
        </a>
        
      </div>
      
      {/* Footer Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[70px] bg-[#1A1410] z-5" />
      
    </section>
  );
}