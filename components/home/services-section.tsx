import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SanityImage from "@/components/sanity-image";

interface Service {
  _id: string;
  title: string;
  description: string;
  slug: { current: string };
  icon?: string;
  image?: any;
}

interface ServicesSectionProps {
  services?: Service[];
  dict?: {
    title?: string;
    subtitle?: string;
    expertise?: string;
    mediaServices?: string;
    viewAll?: string;
    premiumServices?: string;
    discoverServices?: string;
    altText?: {
      digitalMarketing?: string;
      podcastProduction?: string;
      communications?: string;
    };
    srOnly?: {
      instagram?: string;
      tiktok?: string;
      linkedin?: string;
    };
    digitalMarketing?: {
      title?: string;
      description?: string;
    };
    podcastProduction?: {
      title?: string;
      description?: string;
    };
    communications?: {
      title?: string;
      description?: string;
    };
    learnMore?: string;
    bookConsultation?: string;
  };
}

export default function ServicesSection({ services, dict }: ServicesSectionProps) {
  // Define our specific services that should always be displayed
  const ourMediaServices = [
    {
      _id: "media1",
      title: dict?.digitalMarketing?.title || "Digital Marketing",
      description: dict?.digitalMarketing?.description || 
        "We help brands build an organic and trustworthy online presence through strategic content, consistent engagement, and community-centered growth.",
      slug: { current: "digital-marketing" },
      icon: "users",
      image: "/digital marketing.jpg",
    },
    {
      _id: "media2",
      title: dict?.podcastProduction?.title || "Podcast Production",
      description: dict?.podcastProduction?.description || 
        "We support impact-driven organizations in using podcasts as an additional platform to showcase their work, spark conversations, and reach new audiences.",
      slug: { current: "podcast-production" },
      icon: "mic",
      image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=2070&auto=format&fit=crop",
    },
    {
      _id: "media3",
      title: dict?.communications?.title || "Communications Consultancy",
      description: dict?.communications?.description || 
        "We advise brands on how to improve their messaging across platforms, from social media to websites for clearer, more effective communication.",
      slug: { current: "communications-consulting" },
      icon: "image",
      image: "/communication.jpg",
    },
  ];

  // Comment out or remove the filtering logic
  // const mediaServices = services?.filter(...) || [];

  // Always use our specific services
  const displayMediaServices = ourMediaServices;

  // const defaultMomentsServices = [
  //   {
  //     _id: "moments1",
  //     title: "Event Planning",
  //     description:
  //       "Comprehensive event planning services for corporate and private events of all sizes.",
  //     slug: { current: "event-planning" },
  //     icon: "calendar",
  //     image:
  //       "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
  //   },
  //   {
  //     _id: "moments2",
  //     title: "Corporate Events",
  //     description:
  //       "Professional planning and execution of corporate events, conferences, and team-building activities.",
  //     slug: { current: "corporate-events" },
  //     icon: "briefcase",
  //     image:
  //       "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop",
  //   },
  //   {
  //     _id: "moments3",
  //     title: "Personalized Gifting",
  //     description:
  //       "Thoughtful, customized gifts for corporate clients, employees, and special occasions.",
  //     slug: { current: "personalized-gifting" },
  //     icon: "gift",
  //     image:
  //       "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop",
  //   },
  // ];

  // const displayMomentsServices =
  //   momentsServices.length > 0 ? momentsServices : defaultMomentsServices;

  return (
    <section className="py-20 md:py-28 bg-cream/30 dark:bg-gray-900/40">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-burgundy/10 dark:bg-burgundy/20 rounded-full text-burgundy dark:text-cream text-sm font-medium">
            {dict?.expertise || "Our Expertise"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
            {dict?.title || "Our Premium Services"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {dict?.subtitle || "Discover our specialized services designed to elevate your brand presence and create memorable experiences."}
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl font-bold relative">
              <span className="relative z-10">{dict?.mediaServices || "Elev8 Media Services"}</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-burgundy/20 -z-10"></span>
            </h3>
            <Link
              href="/brands/elev8-media"
              className="text-burgundy hover:text-burgundy-light flex items-center gap-1 text-sm md:text-base font-medium"
            >
              {dict?.viewAll || "View All"} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {displayMediaServices.map((service) => (
              <div
                key={service._id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-burgundy to-black relative overflow-hidden">
                  {service.image ? (
                    typeof service.image === "string" ? (
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={
                          service._id === "media1" 
                            ? dict?.altText?.digitalMarketing || "Digital Marketing"
                            : service._id === "media2"
                            ? dict?.altText?.podcastProduction || "Podcast Production"
                            : service._id === "media3"
                            ? dict?.altText?.communications || "Communications Consultancy"
                            : service.title
                        }
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <SanityImage
                        image={service.image}
                        alt={
                          service._id === "media1" 
                            ? dict?.altText?.digitalMarketing || "Digital Marketing"
                            : service._id === "media2"
                            ? dict?.altText?.podcastProduction || "Podcast Production"
                            : service._id === "media3"
                            ? dict?.altText?.communications || "Communications Consultancy"
                            : service.title
                        }
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                      />
                    )
                  ) : (
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt={
                        service._id === "media1" 
                          ? dict?.altText?.digitalMarketing || "Digital Marketing"
                          : service._id === "media2"
                          ? dict?.altText?.podcastProduction || "Podcast Production"
                          : service._id === "media3"
                          ? dict?.altText?.communications || "Communications Consultancy"
                          : service.title
                      }
                      fill
                      className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {service.icon && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white/80"
                      >
                        {service.icon === "users" && (
                          <>
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </>
                        )}
                        {service.icon === "mic" && (
                          <>
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                            <line x1="12" y1="19" x2="12" y2="23"></line>
                            <line x1="8" y1="23" x2="16" y2="23"></line>
                          </>
                        )}
                        {service.icon === "image" && (
                          <>
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                            ></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                          </>
                        )}
                        {!["users", "mic", "image"].includes(service.icon) && (
                          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                        )}
                      </svg>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-burgundy dark:group-hover:text-cream transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={`/brands/elev8-media`}
                    className="text-burgundy dark:text-cream font-medium hover:underline flex items-center group-hover:font-semibold transition-all"
                  >
                    {dict?.learnMore || "Learn More"}{" "}
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl font-bold relative">
              <span className="relative z-10">Elev8 Moments Services</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-burgundy/20 -z-10"></span>
            </h3>
            <Link
              href="/brands/elev8-moments"
              className="text-burgundy hover:text-burgundy-light flex items-center gap-1 text-sm md:text-base font-medium"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {displayMomentsServices.map((service) => (
              <div
                key={service._id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-burgundy to-black relative overflow-hidden">
                  {service.image ? (
                    typeof service.image === "string" ? (
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <SanityImage
                        image={service.image}
                        alt={service.title}
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                      />
                    )
                  ) : (
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt={service.title}
                      fill
                      className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {service.icon && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white/80"
                      >
                        {service.icon === "calendar" && (
                          <>
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
                          </>
                        )}
                        {service.icon === "briefcase" && (
                          <>
                            <rect
                              x="2"
                              y="7"
                              width="20"
                              height="14"
                              rx="2"
                              ry="2"
                            ></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                          </>
                        )}
                        {service.icon === "gift" && (
                          <>
                            <polyline points="20 12 20 22 4 22 4 12"></polyline>
                            <rect x="2" y="7" width="20" height="5"></rect>
                            <line x1="12" y1="22" x2="12" y2="7"></line>
                            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                          </>
                        )}
                        {!["calendar", "briefcase", "gift"].includes(
                          service.icon
                        ) && (
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          ></rect>
                        )}
                      </svg>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-burgundy dark:group-hover:text-cream transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={`/brands/elev8-moments`}
                    className="text-burgundy dark:text-cream font-medium hover:underline flex items-center group-hover:font-semibold transition-all"
                  >
                    Learn More{" "}
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="group">
            <Link href="/contact" className="flex items-center">
              {dict?.bookConsultation || "Book a Consultation"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
