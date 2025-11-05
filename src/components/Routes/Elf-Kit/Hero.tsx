"use client";

import Image from 'next/image';

export default function Hero() {
  const handleOrderClick = () => {
    // Handle order button click
    console.log('Order button clicked');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#3D5245]">
      <section className="flex flex-row items-stretch justify-center w-full max-w-[1400px] h-[638px] mx-auto bg-[#3D5245] relative overflow-hidden">
        {/* Image Container - Left Column */}
        <div className="flex items-center justify-center flex-[0_0_53%] w-[53%] h-full p-0 m-0 bg-[#3D5245]">
          <Image 
            src="https://images.unsplash.com/photo-1759774312563-5116b1a90ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvcmFsJTIwY2VudGVycGllY2UlMjBvcmFuZ2V8ZW58MXx8fHwxNzYyMjgxNTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Smiling elf doll with red and white striped hat and red outfit for Glam Haus Elf Kits holiday activity subscription"
            width={408}
            height={552}
            className="w-[408px] h-[552px] object-cover object-center block"
            priority
          />
        </div>

        {/* Content Container - Right Column */}
        <div className="flex flex-col justify-center items-start flex-[0_0_47%] w-[47%] h-full pl-[60px] pr-[80px] pt-[120px] pb-[100px]">
          {/* Brand Script Text */}
          <h3 
            className="m-0 mb-[8px] p-0 text-left capitalize"
            style={{
              fontFamily: "'Allura', 'Pacifico', cursive",
              fontWeight: 400,
              fontSize: '48px',
              lineHeight: '56px',
              letterSpacing: '0.02em',
              color: '#E8DCC8'
            }}
          >
            Glam Haus —
          </h3>

          {/* Main Headline */}
          <h1 
            className="m-0 mb-[12px] p-0 text-left uppercase"
            style={{
              fontFamily: "'Playfair Display', 'Libre Baskerville', serif",
              fontWeight: 400,
              fontSize: '96px',
              lineHeight: '104px',
              letterSpacing: '0.01em',
              color: '#F5F1E8'
            }}
          >
            ELF KITS
          </h1>

          {/* Subheadline */}
          <h2 
            className="m-0 mb-[32px] p-0 text-left uppercase max-w-[520px]"
            style={{
              fontFamily: "'Montserrat', 'Open Sans', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '0.08em',
              color: '#D4C9B5'
            }}
          >
            BECAUSE YOUR ELF NEEDS MORE THAN JUST A SHELF THIS YEAR!
          </h2>

          {/* Body Copy */}
          <p 
            className="m-0 mb-[40px] p-0 max-w-[520px]"
            style={{
              fontFamily: "'Montserrat', 'Open Sans', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: '28px',
              letterSpacing: '0.01em',
              color: '#C8BFAD',
              textAlign: 'justify'
            }}
          >
            Imagine your littles waking up to a new holiday-themed surprise each morning—craft snowflakes, bake festive cookies, or embark on a scavenger hunt for hidden treasures! At Glam Haus, we offer a 12-day kit that is perfect for a quick burst of festive fun, while our 24-day kit transforms the entire month into a magical celebration leading all the way up to Christmas!
          </p>

          {/* CTA Button */}
          <button
            onClick={handleOrderClick}
            className="inline-block m-0 min-w-[250px] bg-transparent rounded-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[rgba(122,140,127,0.15)] hover:border-[#7A8C7F] hover:text-[#F5F1E8] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] active:bg-[rgba(122,140,127,0.25)] active:translate-y-0 active:shadow-[0_2px_4px_rgba(0,0,0,0.15)] focus:outline-2 focus:outline-[#E8DCC8] focus:outline-offset-[3px] focus:shadow-[0_0_0_4px_rgba(232,220,200,0.2)]"
            style={{
              fontFamily: "'Montserrat', 'Open Sans', sans-serif",
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '14px',
              letterSpacing: '0.12em',
              color: '#C8BFAD',
              textAlign: 'center',
              textTransform: 'uppercase',
              padding: '18px 48px',
              border: '1px solid rgba(122, 140, 127, 0.6)',
              textDecoration: 'none',
              boxShadow: 'none'
            }}
            aria-label="Order your Elf Kit - Opens order form"
          >
            ORDER YOUR KIT!
          </button>
        </div>
      </section>
    </div>
  );
}
