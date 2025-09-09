import { Button } from "@/components/ui/button"
import { SkeletonCard } from "@/components/ui/skeleton"
import type { Service } from "@/lib/sanity.types"
import { CheckCircle } from "lucide-react"
import { Suspense } from "react"

interface MediaServicesProps {
  services?: Service[]
}

export default function Mediaservices({ services }: MediaServicesProps) {

  // Default services if not provided as props
  const serviceItems: Service[] = services || [
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

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            Comprehensive digital marketing solutions to help your brand stand out in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceItems.map((service: Service, index: number) => (
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
  )
}