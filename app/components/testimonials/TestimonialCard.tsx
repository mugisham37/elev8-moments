import Image from 'next/image';
import { Testimonial } from './types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { quote, testimonial: testimonialText, author, imageSrc, imagePosition } = testimonial;

  const imageElement = (
    <div className="flex justify-center items-center">
      <div className="w-[425px] h-[425px] relative">
        <Image
          src={imageSrc}
          alt="Colorful charcuterie board with meats, cheeses, and fruits"
          fill
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );

  const textElement = (
    <div className="flex flex-col justify-center px-[70px] max-w-[540px]">
      <h3 className="text-[41px] font-light text-[#2B2B2B] leading-[1.35] tracking-[0.015em] mb-[30px] font-cormorant">
        {quote}
      </h3>
      <p className="text-[15.5px] font-normal text-[#4A4A4A] leading-[1.7] mb-[26px] font-inter">
        {testimonialText}
      </p>
      <p className="text-[12.5px] font-normal text-[#4A4A4A] uppercase tracking-[0.12em] font-inter">
        {author}
      </p>
    </div>
  );

  const divider = (
    <div className="w-px bg-[#333333] h-full"></div>
  );

  return (
    <section className="bg-[#F5F3EF] px-[90px] py-[70px]">
      <div className="grid grid-cols-2 gap-0 h-full items-center">
        {imagePosition === 'left' ? (
          <>
            <div className="pr-[50px]">
              {imageElement}
            </div>
            {divider}
            <div className="pl-[50px]">
              {textElement}
            </div>
          </>
        ) : (
          <>
            <div className="pr-[50px]">
              {textElement}
            </div>
            {divider}
            <div className="pl-[50px]">
              {imageElement}
            </div>
          </>
        )}
      </div>
    </section>
  );
}