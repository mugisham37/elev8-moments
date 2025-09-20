import { Button } from "@/components/ui/button";
import { SkeletonCard } from "@/components/ui/skeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type {
  BrandData,
  Package,
  PortfolioItem,
  Service,
  Testimonial,
} from "@/lib/sanity.types";
import { getElev8MediaData } from "@/services/elev8.service";
import { CheckCircle, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/types/i18n";

type Props = {
  params: { locale: Locale };
};

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  // Fetch data from Sanity if available
  let mediaData: BrandData | null = null;
  try {
    mediaData = await getElev8MediaData();
  } catch (error) {
    console.error("Error fetching Elev8 Media data:", error);
    // Continue with default data if Sanity fetch fails
  }

  // Default services if not available from Sanity or dictionary
  const services: Service[] = (mediaData?.services as Service[]) || [
    {
      _id: "default1",
      title: "🌸 CURATED EVENTS & EXPERIENCES",
      description:
        "We create intentional spaces where people connect, heal, and celebrate. From floral design workshops like Bloom & Bond to creative gatherings like Paint a Shirt, our events are soulful, playful, and memorable.",
      features: [
        "Floral arrangement workshops",
        "Creative painting experiences",
        "Wellness and healing retreats",
        "Community bonding events",
        "Cultural and artistic gatherings",
        "Intimate celebration planning",
        "Workshop facilitation",
        "Event photography & memories",
      ],
      icon: "calendar",
      slug: { current: "curated-events" },
    },
    {
      _id: "default2",
      title: "🎁 THOUGHTFUL GIFTING",
      description:
        "We craft elegant gifting solutions for individuals and corporates, designed to celebrate moments that matter with style and intention.",
      features: [
        "Custom gift curation",
        "Corporate holiday packages",
        "Special occasion gifts",
        "Branded gift solutions",
        "Elegant packaging design",
        "Personal gift consultation",
        "Seasonal gift collections",
        "Gift delivery services",
      ],
      icon: "gift",
      slug: { current: "thoughtful-gifting" },
    },
    {
      _id: "default3",
      title: "🌍 VISIT RWANDA EXPERIENCES",
      description:
        "Our events aren't just for locals — they're part of Rwanda's growing tourism story. We curate cultural, creative, and bonding experiences for visitors looking to explore Kigali beyond the ordinary.",
      features: [
        "Cultural immersion workshops",
        "Creative tourism activities",
        "Local artisan collaborations",
        "Kigali exploration experiences",
        "Tourist-friendly events",
        "Cultural storytelling sessions",
        "Photography experiences",
        "Local community connections",
      ],
      icon: "message-square",
      slug: { current: "communications-consultancy" },
    },
  ];

  // Default packages if not available from Sanity
  const packages: Package[] = (mediaData?.packages as Package[]) || [
    {
      title: "Starter",
      price: "$499/month",
      features: [
        "Perfect for small businesses and entrepreneurs",
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
        "Ideal for growing businesses",
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
        "Comprehensive solution for established brands",
        "All social media platforms",
        "Custom content schedule",
        "Premium content creation",
        "Weekly performance reports",
        "Dedicated account manager",
      ],
      isPopular: false,
    },
  ];

  // Get process steps from dictionary
  const processSteps = dict.services?.process?.steps;

  // Get FAQ questions from dictionary
  const faqQuestions = dict.services?.faq?.questions;

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {dict.services?.hero?.title || "Services we offer."}
              </h1>
              <p className="text-lg mb-6">
                {dict.services?.hero?.subtitle ||
                  mediaData?.description ||
                  "Ready to stand out in the digital landscape? Let's create something exceptional together."}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-cream text-burgundy hover:bg-cream/90"
              >
                <Link href={`/${locale}/contact`}>
                  {dict.common.cta.freeConsultation}
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <Suspense
                fallback={
                  <div className="w-[300px] h-[300px] rounded-full bg-burgundy-light/20 animate-pulse"></div>
                }
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dict.services?.services?.title || "Our Services"}
            </h2>
            <p className="text-muted-foreground">
              {dict.services?.services?.subtitle ||
                "Comprehensive solutions to help your brand stand out in the digital landscape."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service: Service, index: number) => (
              <Suspense key={index} fallback={<SkeletonCard />}>
                <div className="bg-white dark:bg-[#4a2a2a] rounded-lg shadow-lg p-5 border border-gray-200 dark:border-dark-red hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-dark-red/10 rounded-full flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-dark-red"
                      >
                        {service.icon === "mic" && (
                          <>
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                            <line x1="12" y1="19" x2="12" y2="23"></line>
                            <line x1="8" y1="23" x2="16" y2="23"></line>
                          </>
                        )}
                        {service.icon === "bar-chart" && (
                          <>
                            <line x1="12" y1="20" x2="12" y2="10"></line>
                            <line x1="18" y1="20" x2="18" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="16"></line>
                          </>
                        )}
                        {service.icon === "globe" && (
                          <>
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </>
                        )}
                        {service.icon === "message-square" && (
                          <>
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </>
                        )}
                        {![
                          "mic",
                          "bar-chart",
                          "globe",
                          "message-square",
                        ].includes(service.icon || "") && (
                          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                        )}
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="border-t border-gray-200 dark:border-dark-red/20 pt-3">
                    <h4 className="font-semibold text-xs uppercase mb-2 text-dark-red">
                      {dict.services?.services?.includes || "Services Include:"}
                    </h4>
                    <ul className="grid grid-cols-1 gap-y-1">
                      {service.features?.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-dark-red mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Suspense>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px] dark:opacity-20"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-burgundy/10 dark:bg-burgundy/20 rounded-full text-burgundy dark:text-cream text-sm font-medium">
              {dict.services?.process?.title || "Our Process"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
              {dict.services?.process?.subtitle || "How We Work"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {dict.services?.process?.description ||
                "Our process is simple, strategic, and designed to deliver results that align with your brand's goals."}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-burgundy to-burgundy/60 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-burgundy/10 dark:bg-burgundy/20 rounded-full flex items-center justify-center text-burgundy dark:text-cream text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {processSteps?.discovery?.title || "Discovery & Onboarding"}
                </h3>
                <p className="text-muted-foreground">
                  {processSteps?.discovery?.description ||
                    "We kick things off by understanding your brand, goals, and audience. We gather key assets, align expectations, and set the foundation for a smooth, successful collaboration."}
                </p>
                <div className="mt-auto pt-4">
                  <ChevronRight className="h-6 w-6 text-burgundy dark:text-cream mx-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-burgundy to-burgundy/60 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-burgundy/10 dark:bg-burgundy/20 rounded-full flex items-center justify-center text-burgundy dark:text-cream text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {processSteps?.audit?.title || "Audit & Strategy Development"}
                </h3>
                <p className="text-muted-foreground">
                  {processSteps?.audit?.description ||
                    "We review your current platforms and performance, then develop a tailored strategy—whether it's content planning, campaign direction, or communication refinement."}
                </p>
                <div className="mt-auto pt-4">
                  <ChevronRight className="h-6 w-6 text-burgundy dark:text-cream mx-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-burgundy to-burgundy/60 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-burgundy/10 dark:bg-burgundy/20 rounded-full flex items-center justify-center text-burgundy dark:text-cream text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {processSteps?.execution?.title ||
                    "Execution & Content Delivery"}
                </h3>
                <p className="text-muted-foreground">
                  {processSteps?.execution?.description ||
                    "We roll out content, campaigns, or podcast episodes based on the approved strategy. From visuals to copy, everything is created intentionally to engage and grow your audience."}
                </p>
                <div className="mt-auto pt-4">
                  <ChevronRight className="h-6 w-6 text-burgundy dark:text-cream mx-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-burgundy to-burgundy/60 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-burgundy/10 dark:bg-burgundy/20 rounded-full flex items-center justify-center text-burgundy dark:text-cream text-2xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {processSteps?.reporting?.title || "Reporting & Optimization"}
                </h3>
                <p className="text-muted-foreground">
                  {processSteps?.reporting?.description ||
                    "At the end of each month, we share clear reports highlighting wins, growth metrics, and lessons. We use data to refine the approach and make your brand even stronger."}
                </p>
                <div className="mt-auto pt-4">
                  <ChevronRight className="h-6 w-6 text-burgundy dark:text-cream mx-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-cream dark:bg-[#18150f]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dict.services?.faq?.title || "Frequently Asked Questions"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {dict.services?.faq?.subtitle ||
                "Find answers to common questions about our services and how we can help your brand grow."}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-[#4a2a2a]/80 p-8 rounded-lg shadow-md border border-gray-200 dark:border-dark-red/30">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="item-1"
                  className="border-b border-gray-200 dark:border-dark-red/20"
                >
                  <AccordionTrigger className="text-lg font-semibold">
                    {faqQuestions?.services?.question ||
                      "What services does Elev8 Media offer?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faqQuestions?.services?.answer ||
                      "We specialize in digital marketing, podcast production, and communications consultancy. From content creation and social media management to full podcast strategy and brand messaging support, we help brands grow with clarity and consistency."}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border-b border-gray-200 dark:border-dark-red/20"
                >
                  <AccordionTrigger className="text-lg font-semibold">
                    {faqQuestions?.clients?.question ||
                      "Do you work with clients outside of Rwanda?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faqQuestions?.clients?.answer ||
                      "Yes. While we're based in Rwanda, we also operate in Dubai through our content partner. We support clients remotely with strategy and execution, and capture content on the ground in the UAE as needed."}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border-b border-gray-200 dark:border-dark-red/20"
                >
                  <AccordionTrigger className="text-lg font-semibold">
                    {faqQuestions?.packages?.question ||
                      "Can I book one service or do I need a full package?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faqQuestions?.packages?.answer ||
                      "You can book individual services or request a custom package based on your needs. Whether you need a one-time audit, ongoing content management, or podcast production, we'll tailor our support to your goals."}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border-b border-gray-200 dark:border-dark-red/20"
                >
                  <AccordionTrigger className="text-lg font-semibold">
                    {faqQuestions?.results?.question ||
                      "How do you measure results?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faqQuestions?.results?.answer ||
                      "We track key metrics like engagement, reach, audience growth, and content performance. For most clients, we provide monthly reports and regular strategy check-ins to ensure we're moving toward measurable outcomes."}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b-0">
                  <AccordionTrigger className="text-lg font-semibold">
                    {faqQuestions?.client_types?.question ||
                      "What types of clients do you usually work with?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faqQuestions?.client_types?.answer ||
                      "We work with purpose-driven brands including NGOs, service providers, creatives, coaches, and small businesses. If you care about showing up online with strategy and intention, we're a good fit."}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-burgundy text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dict.services?.cta?.title || "Ready to Amplify Your Brand?"}
            </h2>
            <p className="text-lg mb-8">
              {dict.services?.cta?.subtitle ||
                "Let's work together to create a powerful digital presence for your brand."}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-cream text-burgundy hover:bg-cream/90"
            >
              <Link href={`/${locale}/contact`}>
                {dict.common.cta.freeConsultation}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
