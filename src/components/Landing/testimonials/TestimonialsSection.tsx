import TestimonialCard from './TestimonialCard';
import { testimonials } from './data';

export default function TestimonialsSection() {
  return (
    <div>
      {testimonials.map((testimonial) => (
        <TestimonialCard 
          key={testimonial.id} 
          testimonial={testimonial} 
        />
      ))}
    </div>
  );
}