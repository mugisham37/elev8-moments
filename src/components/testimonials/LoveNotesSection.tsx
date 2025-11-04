'use client';

import { Alex_Brush, Montserrat } from 'next/font/google';
import Image from 'next/image';

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

interface Testimonial {
  id: number;
  quote: string;
  body: string;
  author: string;
  imageSrc: string;
  imageAlt: string;
  layout: 'image-left' | 'image-right';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Highly recommend to all my family & friends",
    body: "Megan's work is not only stunning but she uses the best ingredients, safe flowers for decor and offers gluten free options! I love supporting women owned businesses and she's definitely highly recommended to all of my friends and family. You'll love Megan, her customer service, attention to detail and delicious boards and design offers as well!",
    author: "KARLA S.",
    imageSrc: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=400&h=400&fit=crop&crop=center",
    imageAlt: "Beautifully arranged charcuterie board with meats, cheeses, and garnishes",
    layout: 'image-left'
  },
  {
    id: 2,
    quote: "Always beautiful, fresh & delicious",
    body: "We have ordered charcuterie platters on multiple occasions from Glam Haus and they are always beautiful, fresh and delicious! I've ordered from other companies in the past and definitely prefer Glam Haus. You can tell that she takes a lot of care and pride in creating the best boards.",
    author: "CHERYL B.",
    imageSrc: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=400&fit=crop&crop=center",
    imageAlt: "Colorful charcuterie board with flowers, meats, cheeses, and fruits",
    layout: 'image-right'
  }
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const isImageLeft = testimonial.layout === 'image-left';

  return (
    <div 
      className="w-full max-w-[775px] mx-auto mb-[35px] last:mb-0 p-[45px] md:p-[35px] sm:p-[25px] bg-[#FEFDFB] border-[1.5px] border-[#D4C5B9] flex md:flex-col sm:flex-col items-center md:items-center sm:items-center"
      style={{ borderRadius: '0px' }}
    >
      {/* Mobile/Tablet: Always image on top, text below */}
      <div className="md:hidden sm:hidden flex items-center w-full">
        {isImageLeft ? (
          <>
            {/* Image Left - Desktop */}
            <div className="shrink-0 mr-[45px]">
              <Image
                src={testimonial.imageSrc}
                alt={testimonial.imageAlt}
                width={230}
                height={230}
                className="rounded-full object-cover"
                priority
              />
            </div>
            
            {/* Vertical Divider - Desktop */}
            <div 
              className="w-px bg-[#D4C5B9] self-stretch mx-[22px]"
              style={{ height: '100%' }}
            />
            
            {/* Text Content Right - Desktop */}
            <div className="flex-1">
              <blockquote 
                className="text-[30px] leading-[1.35] text-[#2C2420] font-normal mb-[22px]"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <p 
                className={`${montserrat.className} text-[14.5px] leading-[1.65] text-[#6B5D54] font-normal mb-[18px]`}
              >
                {testimonial.body}
              </p>
              
              <cite 
                className={`${montserrat.className} text-[11.5px] leading-none text-[#6B5D54] font-normal uppercase not-italic`}
                style={{ letterSpacing: '1.5px' }}
              >
                {testimonial.author}
              </cite>
            </div>
          </>
        ) : (
          <>
            {/* Text Content Left - Desktop */}
            <div className="flex-1">
              <blockquote 
                className="text-[30px] leading-[1.35] text-[#2C2420] font-normal mb-[22px]"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <p 
                className={`${montserrat.className} text-[14.5px] leading-[1.65] text-[#6B5D54] font-normal mb-[18px]`}
              >
                {testimonial.body}
              </p>
              
              <cite 
                className={`${montserrat.className} text-[11.5px] leading-none text-[#6B5D54] font-normal uppercase not-italic`}
                style={{ letterSpacing: '1.5px' }}
              >
                {testimonial.author}
              </cite>
            </div>
            
            {/* Vertical Divider - Desktop */}
            <div 
              className="w-px bg-[#D4C5B9] self-stretch mx-[22px]"
              style={{ height: '100%' }}
            />
            
            {/* Image Right - Desktop */}
            <div className="shrink-0 ml-[45px]">
              <Image
                src={testimonial.imageSrc}
                alt={testimonial.imageAlt}
                width={230}
                height={230}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </>
        )}
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="hidden md:flex sm:flex flex-col items-center text-center w-full">
        {/* Image on top for mobile */}
        <div className="mb-[25px]">
          <Image
            src={testimonial.imageSrc}
            alt={testimonial.imageAlt}
            width={180}
            height={180}
            className="rounded-full object-cover"
            priority
          />
        </div>
        
        {/* Text content below */}
        <div className="w-full">
          <blockquote 
            className="text-[27px] md:text-[24px] leading-[1.35] text-[#2C2420] font-normal mb-[22px]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          
          <p 
            className={`${montserrat.className} text-[13px] md:text-[12px] leading-[1.65] text-[#6B5D54] font-normal mb-[18px]`}
          >
            {testimonial.body}
          </p>
          
          <cite 
            className={`${montserrat.className} text-[10px] md:text-[9px] leading-none text-[#6B5D54] font-normal uppercase not-italic`}
            style={{ letterSpacing: '1.5px' }}
          >
            {testimonial.author}
          </cite>
        </div>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="text-center mb-[70px] md:mb-[50px] sm:mb-[40px] relative">
      {/* Left decorative line - Hidden on mobile */}
      <div 
        className="absolute left-1/2 top-1/2 transform -translate-y-1/2 bg-[#2C2420] hidden lg:block"
        style={{
          width: '125px',
          height: '1.5px',
          marginLeft: '-200px'
        }}
      />
      
      {/* Header text */}
      <h2 
        className={`${alexBrush.className} text-[68px] md:text-[56px] sm:text-[48px] text-[#2C2420] font-normal`}
      >
        Love Notes
      </h2>
      
      {/* Right decorative line - Hidden on mobile */}
      <div 
        className="absolute right-1/2 top-1/2 transform -translate-y-1/2 bg-[#2C2420] hidden lg:block"
        style={{
          width: '125px',
          height: '1.5px',
          marginRight: '-200px'
        }}
      />
    </div>
  );
}

export default function LoveNotesSection() {
  return (
    <section 
      className="w-full py-[90px] bg-[#F5EFE7]"
    >
      <div className="max-w-[1300px] mx-auto px-4">
        <SectionHeader />
        
        <div className="space-y-0">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}