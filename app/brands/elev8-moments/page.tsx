import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import {
  SkeletonCard,
  SkeletonImage,
  SkeletonHero,
} from "@/components/ui/skeleton";
import type {
  BrandData,
  EventType,
  PortfolioItem,
  Testimonial,
} from "@/lib/sanity.types";
import { getElev8MomentsData } from "@/services/elev8.service";

export default async function Elev8MomentsPage() {
  let momentsData: BrandData | null = null;
  try {
    momentsData = await getElev8MomentsData();
  } catch (error) {
    console.error("Error fetching Elev8 Moments data:", error);
  }
  const eventTypes: EventType[] = momentsData?.eventTypes || [
    {
      title: "Corporate Events",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    },
    {
      title: "Product Launches",
      image:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Team Building",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Private Celebrations",
      image:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const portfolioItems: PortfolioItem[] = momentsData?.portfolio || [
    {
      title: "Corporate Gala",
      description: "Annual corporate event",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    },
    {
      title: "Product Launch",
      description: "Tech product launch event",
      image:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Team Building Retreat",
      description: "Corporate team building",
      image:
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop",
    },
    {
      title: "Wedding Planning",
      description: "Luxury wedding event",
      image:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Corporate Gift Packages",
      description: "Custom corporate gifts",
      image:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop",
    },
    {
      title: "Anniversary Celebration",
      description: "Company anniversary event",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      _id: "1",
      name: "Michael Kagame",
      position: "CEO",
      company: "Kigali Innovations",
      quote:
        "Elev8 Moments planned our corporate event flawlessly. The attention to detail and personalized touches made it an unforgettable experience for our team and clients.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    },
    {
      _id: "2",
      name: "Alice Mutoni",
      position: "Marketing Manager",
      company: "Rwanda Finance",
      quote:
        "The personalized corporate gifts prepared by Elev8 Moments for our clients were exceptional. The quality and attention to detail impressed everyone who received them.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Suspense fallback={<SkeletonHero />}>
        <section className="bg-burgundy py-16 md:py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px] opacity-30"></div>

          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
              alt="Background"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-burgundy via-burgundy/90 to-burgundy-dark"></div>
          </div>

          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Elev8 Moments
                </h1>
                <p className="text-lg mb-6">
                  {momentsData?.description ||
                    "Exceptional event planning and personalized gifting services to create unforgettable experiences."}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-cream text-burgundy hover:bg-cream/90"
                >
                  <Link href="/contact">Book an Event or Inquiry</Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/elev8-moments-logo-burgundy.png"
                  alt="Elev8 Moments Logo"
                  width={300}
                  height={300}
                  className="h-auto drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </Suspense>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              Comprehensive event planning and gifting solutions to create
              memorable experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Suspense fallback={<SkeletonCard />}>
              {/* Service 1 */}
              <div className="bg-white dark:bg-gray-900/40 rounded-lg shadow-md p-6 border border-gray-200 dark:border-dark-red/50">
                <div className="w-12 h-12 bg-dark-red/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-dark-red"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Event Planning</h3>
                <p className="text-muted-foreground mb-4">
                  End-to-end event planning services for corporate and private
                  events of all sizes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dark-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Corporate events and conferences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dark-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Product launches</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dark-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Team building activities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dark-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Private celebrations</span>
                  </li>
                </ul>
              </div>
            </Suspense>

            <Suspense fallback={<SkeletonCard />}>
              {/* Service 2 */}
              <div className="bg-white dark:bg-gray-900/40 rounded-lg shadow-md p-6 border border-gray-200 dark:border-dark-red/50">
                <div className="w-12 h-12 bg-dark-red/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-dark-red"
                  >
                    <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                    <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                    <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Gifting</h3>
                <p className="text-muted-foreground mb-4">
                  Thoughtful, customized gifts for corporate clients, employees,
                  and special occasions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dark-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Corporate gift packages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dark-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Employee appreciation gifts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dark-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Custom gift baskets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dark-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>Branded merchandise</span>
                  </li>
                </ul>
              </div>
            </Suspense>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream dark:bg-[#18150f]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Events We Plan
            </h2>
            <p className="text-muted-foreground">
              From intimate gatherings to large-scale corporate events, we
              handle it all with precision and creativity.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {eventTypes.map((event: EventType, index: number) => (
              <Suspense
                key={index}
                fallback={
                  <div className="h-40 bg-gray-200 rounded-lg animate-pulse"></div>
                }
              >
                <div className="bg-white dark:bg-gray-900/60 rounded-lg shadow-md overflow-hidden text-center">
                  <div className="h-40 relative">
                    <Image
                      src={
                        typeof event.image === "string"
                          ? event.image
                          : "/placeholder.svg"
                      }
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{event.title}</h3>
                  </div>
                </div>
              </Suspense>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground">
              A streamlined approach to ensure your event or gifting experience
              exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-dark-red rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-muted-foreground">
                We begin with a detailed consultation to understand your vision,
                objectives, and requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-dark-red rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Planning</h3>
              <p className="text-muted-foreground">
                Our team develops a comprehensive plan tailored to your specific
                needs and budget.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-dark-red rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Execution</h3>
              <p className="text-muted-foreground">
                We handle all aspects of implementation, ensuring every detail
                is perfect.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-dark-red rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Follow-up</h3>
              <p className="text-muted-foreground">
                After the event or delivery, we gather feedback to ensure
                complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-cream dark:bg-[#18150f]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Portfolio
            </h2>
            <p className="text-muted-foreground">
              A showcase of our recent events and gifting projects.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioItems.map((item: PortfolioItem, index: number) => (
              <Suspense
                key={index}
                fallback={<SkeletonImage className="aspect-[3/2]" />}
              >
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={
                      typeof item.image === "string"
                        ? item.image
                        : "/placeholder.svg"
                    }
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark-red/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center p-4">
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Suspense>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-muted-foreground">
              What our clients say about working with Elev8 Moments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <Suspense key={index} fallback={<SkeletonCard />}>
                <div className="bg-white dark:bg-gray-900/40 p-6 rounded-lg shadow-md">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star: number) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-yellow-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                      <Image
                        src={
                          typeof testimonial.image === "string"
                            ? testimonial.image
                            : "/placeholder.svg"
                        }
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                        {testimonial.company ? `, ${testimonial.company}` : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </Suspense>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-burgundy text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Memorable Experiences?
            </h2>
            <p className="text-lg mb-8">
              Let's work together to plan your next event or create personalized
              gifts that leave a lasting impression.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-cream text-burgundy hover:bg-cream/90"
            >
              <Link href="/contact">Book an Event or Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
