import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceItemProps {
  title: string;
  description: string;
}

export function ServiceItem({ title, description }: ServiceItemProps) {
  return (
    <article>
      <div className="flex items-center gap-3 mb-4 cursor-pointer group transition-colors duration-300">
        <h2 
          className="uppercase tracking-[0.15em] text-[18px] text-[#1a1a1a] group-hover:text-[#c8102e] transition-colors duration-300 leading-[1.33]"
          style={{ fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif", fontWeight: 600 }}
        >
          {title}
        </h2>
        <ArrowRight 
          size={18} 
          strokeWidth={2.5} 
          className="text-[#1a1a1a] group-hover:text-[#c8102e] group-hover:translate-x-1 transition-all duration-300" 
        />
      </div>
      <p 
        className="text-[16px] leading-[1.75] tracking-[0.01em] text-[#4a4a4a] max-w-[420px] mt-4"
        style={{ fontFamily: "'Lato', 'Open Sans', sans-serif", fontWeight: 400 }}
      >
        {description}
      </p>
    </article>
  );
}
