'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const images = [
    { src: "/images/2.JPG", alt: "Gallery 1" },
    { src: "/images/4.JPG", alt: "Gallery 2" },
    { src: "/images/6.JPG", alt: "Gallery 3" },
    { src: "/images/8.JPG", alt: "Gallery 4" },
    { src: "/images/9.JPG", alt: "Gallery 5" },
    { src: "/images/10.JPG", alt: "Gallery 6" },
  ];

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] // Starts when section enters viewport, ends when it leaves
  });

  // Transform scroll progress to horizontal movement (right to left)
  // Moves from 0% to -50% (half the container width since we duplicate images)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={sectionRef} className="bg-[#f9f2ec] py-16">
      <div className="w-full overflow-hidden">
        <motion.div 
          className="flex"
          style={{ x }}
          transition={{ ease: "linear" }}
        >
          {/* First set of images */}
          {images.map((image, index) => (
            <div 
              key={`first-${index}`} 
              className="shrink-0 w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[45vw] xl:w-[600px]"
            >
              <Image 
                alt={image.alt} 
                className="h-[400px] sm:h-[480px] md:h-[560px] lg:h-[641px] w-full object-cover"
                src={image.src} 
                width={600} 
                height={700}
                quality={90}
                priority={index < 2}
              />
            </div>
          ))}
          {/* Duplicate set for seamless scrolling */}
          {images.map((image, index) => (
            <div 
              key={`second-${index}`} 
              className="shrink-0 w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[45vw] xl:w-[600px]"
            >
              <Image 
                alt={image.alt} 
                className="h-[400px] sm:h-[480px] md:h-[560px] lg:h-[641px] w-full object-cover"
                src={image.src} 
                width={600} 
                height={700}
                quality={90}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}