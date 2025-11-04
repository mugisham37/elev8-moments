import React from 'react';
import { ImageWithFallback } from '../../imageWithFallBack/ImageWithFallback';

export default function Testimonials() {
  return (
    <section className="bg-[#2B2B2B] py-20 px-[60px] flex flex-col items-center gap-[78px]" aria-label="Customer testimonials">
      
      {/* Testimonial Card 1 - Image Left */}
      <article className="flex flex-row items-center w-[832px] min-h-[274px] bg-[#F5F1EB] p-12 relative" aria-label="Testimonial from Karla S.">
        
        {/* Image Container */}
        <div className="w-[280px] h-[280px] rounded-full overflow-hidden shrink-0 shadow-[0px_8px_24px_rgba(0,0,0,0.12)]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1567729769245-b6b7dfcf506f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyY3V0ZXJpZSUyMGJvYXJkJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYyMjYwOTExfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Colorful charcuterie board with assorted meats, cheeses, fruits, and garnishes arranged in circular pattern"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        {/* Content Container */}
        <div className="flex-1 pl-[72px] relative">
          
          {/* Vertical Divider Line */}
          <div className="absolute w-px h-[180px] bg-[#2D2D2D] left-[48px] top-1/2 -translate-y-1/2" aria-hidden="true" />
          
          {/* Quote Headline */}
          <blockquote>
            <h3 className="font-['Lora'] text-[42px] font-light leading-[52px] tracking-[-0.02em] text-[#2D2D2D] mb-5">
              &ldquo;Highly recommend to all my family &amp; friends&rdquo;
            </h3>
            
            {/* Testimonial Body */}
            <p className="font-['Lora'] text-base font-light leading-[26px] tracking-[0.01em] text-[#2D2D2D] mb-4 max-w-[520px]">
              Megan&apos;s work is not only stunning but she uses the best ingredients, safe flowers for decor and offers gluten free options! I love supporting women owned businesses so I have and will highly recommended to all of my friends and family. You&apos;ll love Megan, her customer service, attention to detail and delicious boards and design offers as well!
            </p>
          </blockquote>
          
          {/* Attribution */}
          <cite className="not-italic font-['Montserrat'] text-[11px] font-medium leading-[14px] tracking-[0.15em] uppercase text-[#2D2D2D]">
            KARLA S.
          </cite>
          
        </div>
        
      </article>
      
      {/* Testimonial Card 2 - Image Right (Reversed Layout) */}
      <article className="flex flex-row-reverse items-center w-[832px] min-h-[274px] bg-[#F5F1EB] p-12 relative" aria-label="Testimonial from Cheryl B.">
        
        {/* Image Container */}
        <div className="w-[280px] h-[280px] rounded-full overflow-hidden shrink-0 shadow-[0px_8px_24px_rgba(0,0,0,0.12)]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1743895046508-49fe949198ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF6aW5nJTIwYm9hcmQlMjBmbG93ZXJzJTIwdmlicmFudHxlbnwxfHx8fDE3NjIyNjA5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Vibrant charcuterie board featuring cured meats, artisanal cheeses, fresh berries, and edible flowers"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        {/* Content Container */}
        <div className="flex-1 pr-[72px] relative">
          
          {/* Vertical Divider Line */}
          <div className="absolute w-px h-[180px] bg-[#2D2D2D] right-[48px] top-1/2 -translate-y-1/2" aria-hidden="true" />
          
          {/* Quote Headline */}
          <blockquote>
            <h3 className="font-['Lora'] text-[42px] font-light leading-[52px] tracking-[-0.02em] text-[#2D2D2D] mb-5">
              &ldquo;Always beautiful, fresh &amp; delicious&rdquo;
            </h3>
            
            {/* Testimonial Body */}
            <p className="font-['Lora'] text-base font-light leading-[26px] tracking-[0.01em] text-[#2D2D2D] mb-4 max-w-[520px]">
              We have ordered charcuterie platters on multiple occasions from Glam Haus and they are always beautiful, fresh and delicious! I&apos;ve ordered from other companies in the past and definitely prefer Glam Haus. You can tell that she takes a lot of care and pride in creating the best boards.
            </p>
          </blockquote>
          
          {/* Attribution */}
          <cite className="not-italic font-['Montserrat'] text-[11px] font-medium leading-[14px] tracking-[0.15em] uppercase text-[#2D2D2D]">
            CHERYL B.
          </cite>
          
        </div>
        
      </article>
      
    </section>
  );
}