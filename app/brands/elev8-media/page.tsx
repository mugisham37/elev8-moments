import { Button } from "@/components/ui/button"
import { SkeletonCard } from "@/components/ui/skeleton"
import type { BrandData, Package, PortfolioItem, Service, Testimonial } from "@/lib/sanity.types"
import { getElev8MediaData } from "@/services/elev8.service"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

export default async function Elev8MediaPage() {
  // Fetch data from Sanity if available
  let mediaData: BrandData | null = null
  try {
    mediaData = await getElev8MediaData()
  } catch (error) {
    console.error("Error fetching Elev8 Media data:", error)
    // Continue with default data if Sanity fetch fails
  }

  // Default services if not available from Sanity
  const services: Service[] = mediaData?.services || [
    {
      _id: "default1",
      title: "Social Media Management",
      description:
        "Comprehensive management of your social media platforms to increase engagement, followers, and conversions.",
      features: [
        "Content creation and curation",
        "Community management",
        "Performance analytics",
        "Strategic planning",
      ],
      icon: "users",
      slug: { current: "social-media-management" },
    },
    {
      _id: "default2",
      title: "Content Creation",
      description: "High-quality, engaging content tailored to your brand voice and target audience.",
      features: ["Photography and videography", "Graphic design", "Copywriting", "Content calendar planning"],
      icon: "monitor",
      slug: { current: "content-creation" },
    },
    {
      _id: "default3",
      title: "Podcast Production",
      description:
        "End-to-end podcast production services to help you share your expertise and connect with your audience.",
      features: [
        "Recording and editing",
        "Distribution strategy",
        "Audience growth strategies",
        "Monetization options",
      ],
      icon: "mic",
      slug: { current: "podcast-production" },
    },
  ]

  // Default packages if not available from Sanity
  const packages: Package[] = mediaData?.packages || [
    {
      title: "Starter",
      price: "$499/month",
      features: [
        "3 social media platforms",
        "12 posts per month",
        "Basic content creation",
        "Monthly performance report",
      ],
      isPopular: false,
    },
    {
      title: "Professional",
      price: "$899/month",
      features: [
        "5 social media platforms",
        "20 posts per month",
        "Advanced content creation",
        "Bi-weekly performance reports",
        "Community management",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        "All social media platforms",
        "Custom content schedule",
        "Premium content creation",
        "Weekly performance reports",
        "Dedicated account manager",
      ],
      isPopular: false,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-burgundy to-burgundy-dark py-16 md:py-24 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px] opacity-30"></div>

        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Services we offer.</h1>
              <p className="text-lg mb-6">
                {mediaData?.description ||
                  "Ready to stand out in the digital landscape? Let's create something exceptional together."}
              </p>
              <Button asChild size="lg" className="bg-cream text-burgundy hover:bg-cream/90">
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <Suspense
                fallback={<div className="w-[300px] h-[300px] rounded-full bg-burgundy-light/20 animate-pulse"></div>}
              >
                <Image
                  src="/elev8-media-logo.png"
                  alt="Elev8 Media Logo"
                  width={300}
                  height={300}
                  className="h-auto drop-shadow-xl"
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              Comprehensive digital marketing solutions to help your brand stand out in the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service: Service, index: number) => (
              <Suspense key={index} fallback={<SkeletonCard />}>
                <div className="bg-white dark:bg-[#4a2a2a] rounded-lg shadow-md p-6 border border-gray-200 dark:border-dark-red">
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
                      {service.icon === "monitor" && (
                        <>
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </>
                      )}
                      {!["users", "mic", "monitor"].includes(service.icon || "") && (
                        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                      )}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features?.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-dark-red mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Suspense>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-24 bg-cream dark:bg-[#18150f]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Packages</h2>
            <p className="text-muted-foreground">Flexible packages designed to meet your specific needs and budget.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg: Package, index: number) => (
              <Suspense key={index} fallback={<SkeletonCard />}>
                <div
                  className={`bg-white dark:bg-black rounded-lg shadow-md border border-gray-200 dark:border-dark-red/50 ${pkg.isPopular ? "transform scale-105" : ""}`}
                >
                  <div className="p-6 bg-dark-red dark:bg-[#4a2a2a]  text-white text-center relative rounded-t-lg">
                    {pkg.isPopular && (
                      <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2">
                        POPULAR
                      </div>
                    )}
                    <h3 className="text-xl font-bold">{pkg.title}</h3>
                    <p className="text-2xl font-bold mt-2">{pkg.price}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-dark-red dark:text-[#4a2a2a] mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full dark:bg-[#4a2a2a]">
                      <Link href="/contact">{pkg.price === "Custom" ? "Contact Us" : "Get Started"}</Link>
                    </Button>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Amplify Your Brand?</h2>
            <p className="text-lg mb-8">Let's work together to create a powerful digital presence for your brand.</p>
            <Button asChild size="lg" className="bg-cream text-burgundy hover:bg-cream/90">
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}