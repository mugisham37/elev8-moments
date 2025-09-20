import Image from "next/image"
import { Star } from "lucide-react"
import SanityImage from "@/components/sanity-image"
import { Dictionary } from "@/lib/dictionary"

interface Testimonial {
  _id: string
  name: string
  position?: string
  company?: string
  quote: string
  image?: any
  rating?: number
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[]
  dict?: Dictionary['home']['testimonials']
}

export default function TestimonialsSection({ testimonials, dict }: TestimonialsSectionProps) {
  // If we have dictionary data, use it to create testimonials
  // Using type assertion to handle the mismatch between types and runtime structure
  const dictAny = dict as any;
  const ourTestimonials = dictAny?.testimonials ? 
    [
      {
        _id: "1",
        name: dictAny.testimonials.participant?.name || "Event Participant",
        position: dictAny.testimonials.participant?.position || "",
        company: dictAny.testimonials.participant?.company || "",
        quote: dictAny.testimonials.participant?.quote || "Bloom & Bond was unlike anything I've ever attended. Beautiful, intentional, and so healing.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        rating: 5,
      },
      {
        _id: "2",
        name: dictAny.testimonials.corporate?.name || "Corporate Client",
        position: dictAny.testimonials.corporate?.position || "",
        company: dictAny.testimonials.corporate?.company || "",
        quote: dictAny.testimonials.corporate?.quote || "Elev8 Moments made our corporate gifting stress-free and unforgettable. The packaging alone was an experience!",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
        rating: 5,
      },
    ] :
    // Fallback to default data if no dictionary is provided
    [
      {
        _id: "1",
        name: "Event Participant",
        position: "",
        company: "",
        quote: "Bloom & Bond was unlike anything I've ever attended. Beautiful, intentional, and so healing.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        rating: 5,
      },
      {
        _id: "2",
        name: "Corporate Client",
        position: "",
        company: "",
        quote: "Elev8 Moments made our corporate gifting stress-free and unforgettable. The packaging alone was an experience!",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
        rating: 5,
      },
    ];

  // Always use our specific testimonials
  const displayTestimonials = ourTestimonials;

  return (
    <section className="py-20 md:py-28 bg-cream/30 dark:bg-gray-900/40">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-burgundy/10 dark:bg-burgundy/20 rounded-full text-burgundy dark:text-cream text-sm font-medium">
            {dict?.testimonialLabel || "Testimonials"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
            {dict?.title || "What Our Clients Say"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {dict?.subtitle || "Don't just take our word for it. Here's what our clients have to say about working with Elev8 Media."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <div
              key={testimonial._id}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
                <div className="flex mb-4" aria-label={dict?.rating || "Rating"}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              <p className="mb-6 italic text-lg">"{testimonial.quote}"</p>
              <div className="flex items-center">
                {/* <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                  {typeof testimonial.image === "string" ? (
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                      aria-label={dict?.altText || "Client testimonial"}
                    />
                  ) : (
                    <SanityImage
                      image={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div> */}
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                    {testimonial.company ? `, ${testimonial.company}` : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
