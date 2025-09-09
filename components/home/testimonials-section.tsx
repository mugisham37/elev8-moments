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
  const ourTestimonials = dict?.testimonials ? 
    [
      {
        _id: "1",
        name: dict.testimonials.abdullah.name,
        position: dict.testimonials.abdullah.position,
        company: dict.testimonials.abdullah.company,
        quote: dict.testimonials.abdullah.quote,
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        rating: 5,
      },
      {
        _id: "2",
        name: dict.testimonials.memory.name,
        position: dict.testimonials.memory.position,
        company: dict.testimonials.memory.company,
        quote: dict.testimonials.memory.quote,
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
        rating: 5,
      },
      {
        _id: "3",
        name: dict.testimonials.eugene.name,
        position: dict.testimonials.eugene.position,
        company: dict.testimonials.eugene.company,
        quote: dict.testimonials.eugene.quote,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
        rating: 5,
      },
    ] :
    // Fallback to default data if no dictionary is provided
    [
      {
        _id: "1",
        name: "Abdullah Hakizimana",
        position: "CEO and Founder",
        company: "Mr. Endowed Clothing",
        quote:
          "Elev8 Media has been instrumental in managing our community. They handle customer inquiries and DMs with ease, always ensuring prompt and thoughtful communication. Beyond that, their campaign ideas have helped us stay connected with our audience, and their engagement strategies have kept our brand's presence strong. Their input on content ideas has been invaluable in maintaining the voice of Mr. Endowed, and they have been an irreplaceable part of our growth.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        rating: 5,
      },
      {
        _id: "2",
        name: "Memory",
        position: "Head of Outreach",
        company: "E3 International",
        quote:
          "Working with Elev8 Media on our cancer conference was an absolute game-changer. They built our social media presence from the ground up, creating engaging content and driving our outreach efforts in ways we hadn't thought possible. Their campaign to bring healthcare providers to the event was incredibly successful, and the bi-weekly reports they provided allowed us to track progress and adapt quickly. We were thrilled with the results, and the event's online engagement was proof of her dedication and expertise.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
        rating: 5,
      },
      {
        _id: "3",
        name: "Eugene Ishimwe",
        position: "Managing Director",
        company: "MA Africa",
        quote:
          "Elev8 Media's work on events like Kigali Kulture Konnect and Tour du Rwanda was a breath of fresh air. Their campaign strategies brought our event promotions to life, and Their management of our social media channels kept the audience engaged and excited. Their ability to drive engagement and even manage ticket sales online was outstanding. Elev8 Media is an exceptional organisation who knows how to turn ideas into action, and we couldn't have asked for better results.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
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
