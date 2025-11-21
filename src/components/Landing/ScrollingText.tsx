'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollingTextProps {
  text: string;
  className?: string;
}

export default function ScrollingText({ text, className = '' }: ScrollingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Transform scroll position to animation speed multiplier
  const scrollVelocity = useTransform(scrollY, (latest) => {
    return latest;
  });

  // Create repeated text for seamless loop
  const repeatedText = `${text} `.repeat(20);

  return (
    <div 
      ref={containerRef}
      className={`overflow-hidden border-t border-b border-black ${className}`}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -2000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        style={{
          willChange: 'transform',
        }}
      >
        <p className="text-[27px] font-['Noiretblanc'] py-4">
          {repeatedText}
        </p>
      </motion.div>
    </div>
  );
}
