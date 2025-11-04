import React from 'react';
import Image from 'next/image';

const GrazingTablesHero = () => {
  return (
    <section className="relative w-full max-w-[1440px] h-[705px] md:h-[600px] sm:h-[500px] mx-auto bg-[#E8DDD4] overflow-hidden">
      
      {/* Decorative Images - Desktop */}
      <Image
        src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=240&h=150&fit=crop&crop=center"
        alt="Gourmet charcuterie board with grapes and cheese"
        width={240}
        height={150}
        className="absolute top-0 left-0 w-[240px] h-[150px] object-cover z-1 hidden lg:block"
        priority
      />
      <Image
        src="https://images.unsplash.com/photo-1571197119282-7c4e2b2d7b4a?w=240&h=340&fit=crop&crop=center"
        alt="Colorful grazing table with fruits, meats, and flowers"
        width={240}
        height={340}
        className="absolute top-[168px] left-0 w-[240px] h-[340px] object-cover z-1 hidden lg:block"
        priority
      />
      <Image
        src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=240&h=200&fit=crop&crop=center"
        alt="Fresh strawberries and blueberries on wooden board"
        width={240}
        height={200}
        className="absolute bottom-[70px] left-0 w-[240px] h-[200px] object-cover z-1 hidden lg:block"
        loading="lazy"
      />
      <Image
        src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=560&h=150&fit=crop&crop=center"
        alt="Elegant appetizer platter with decorative presentation"
        width={560}
        height={150}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[150px] object-cover z-1 hidden md:block md:w-[400px] lg:w-[560px]"
        priority
      />
      <Image
        src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=360&h=330&fit=crop&crop=center"
        alt="Artisan chocolate desserts and treats"
        width={360}
        height={330}
        className="absolute top-0 right-0 w-[360px] h-[330px] object-cover z-1 hidden lg:block"
        priority
      />
      <Image
        src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=360&h=350&fit=crop&crop=center"
        alt="Cheese board with green grapes and gourmet selections"
        width={360}
        height={350}
        className="absolute bottom-[70px] right-0 w-[360px] h-[350px] object-cover z-1 hidden lg:block"
        priority
      />
      
      {/* Mobile/Tablet Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1571197119282-7c4e2b2d7b4a?w=800&h=600&fit=crop&crop=center"
        alt="Grazing table background"
        width={800}
        height={600}
        className="absolute inset-0 w-full h-full object-cover z-1 opacity-30 md:hidden"
        priority
      />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-[580px] mx-auto py-20 px-10 md:py-16 md:px-8 sm:py-10 sm:px-6 flex flex-col items-center text-center">
        
        {/* Heading */}
        <h1 className="font-playfair text-[72px] font-light leading-[84px] tracking-[0.08em] uppercase text-[#3D3127] mb-4 md:text-[56px] md:leading-[64px] sm:text-[40px] sm:leading-[48px] sm:tracking-[0.04em]">
          Grazing Tables
        </h1>
        
        {/* Tagline */}
        <p className="font-montserrat text-sm font-normal leading-5 tracking-[0.15em] uppercase text-[#5A4A3F] mb-8 sm:text-xs">
          Elevate your event to the next level
        </p>
        
        {/* Body Text */}
        <p className="font-sans text-base font-normal leading-7 tracking-wide text-[#5A4A3F] mb-10 max-w-[580px] md:text-[15px] sm:text-sm sm:leading-6 sm:mb-8">
          At Glam Haus, we go beyond simply arranging meats and cheeses – we craft stunning, delicious grazing tables that will leave a lasting impression on your guests. Whether you&apos;re hosting a cozy gathering or making a big business pitch, our team is here to bring your vision to life with creative, mouthwatering presentations. Let us handle the details while you enjoy the wow factor!
        </p>
        
        {/* CTA Button */}
        <a
          href="#order"
          className="inline-block py-4 px-12 border-2 border-[#3D3127] bg-transparent text-[#3D3127] text-[13px] font-medium tracking-[0.12em] uppercase no-underline cursor-pointer transition-all duration-300 hover:bg-[#3D3127] hover:text-white hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3D3127] focus:ring-offset-4 sm:w-full sm:mx-4"
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
};

export default GrazingTablesHero;