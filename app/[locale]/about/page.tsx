import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { SkeletonCard } from "@/components/ui/skeleton";
import { ChevronRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/types/i18n";

type Props = {
  params: { locale: Locale };
};

export default async function AboutPage({ params }: Props) {
  // Get dictionary
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const aboutDict = dict.about;
  const valuesDict = aboutDict?.values;

  // Default portfolio items
  const defaultPortfolioItems = [
    {
      title: "Experience",
      description: "Bloom & Bond",
      image: "/Portifolio 1.jpg",
      content:
        "Floral arrangement & connection workshop for women. A beautiful, intentional experience that brings together creativity and healing through the art of flower arranging while fostering meaningful connections among participants.",
    },
    {
      title: "Experience",
      description: "Paint a Shirt (upcoming)",
      image: "/Portifolio 2.jpg",
      content:
        "Creative, fun, and expressive event where participants paint inspirational T-shirts to take home. This upcoming experience combines artistic expression with personal reflection, allowing guests to create wearable art that carries meaning.",
    },
    {
      title: "Experience",
      description: "Retreats & Intimate Gatherings",
      image: "/Portifolio 3.jpg",
      content:
        "Events designed around healing, creativity, and soulful connection. Our retreats provide a space for participants to step away from daily routines and engage in activities that promote wellness, creativity, and community bonding.",
    },
    {
      title: "Experience",
      description: "Corporate & Holiday Gifting",
      image: "/Portifolio 4.jpg",
      content:
        "Customized gift solutions for clients and staff (e.g., Women's Day, Valentine's Day). We create thoughtful, elegant gifting packages that help businesses celebrate important moments and show appreciation with style and intention.",
    },
    {
      title: "Experience",
      description: "Visit Rwanda Cultural Activities",
      image: "/Portifolio 5.jpg",
      content:
        "Cultural, creative, and bonding experiences for visitors looking to explore Kigali beyond the ordinary. These activities contribute to Rwanda's growing tourism story by offering soulful, authentic experiences that connect visitors with local culture.",
    },
    {
      title: "Experience",
      description: "Creative Workshops & Community Events",
      image: "/Portifolio 6.jpg",
      content:
        "Intentional spaces where people connect, heal, and celebrate through various creative activities. From art workshops to community gatherings, these events are designed to be soulful, playful, and memorable for all participants.",
    },
  ];

  // Get portfolio items from dictionary or use defaults
  const portfolioItems =
    (aboutDict?.portfolio as any)?.items || defaultPortfolioItems;

  // Gallery images from public folder
  const galleryImages = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery8.jpg",
    "/gallery9.jpg",
    "/gallery10.jpg",
    "/gallery11.jpg",
    "/gallery12.jpg",
    "/gallery13.jpg",
  ];

  // Values data
  const values = [
    {
      title: valuesDict?.items?.purpose?.title || "Purpose Before Trends",
      description:
        valuesDict?.items?.purpose?.description ||
        "We create with intention. Every strategy and piece of content is aligned with the brand's mission, not just what's trending.",
    },
    {
      title: valuesDict?.items?.clarity?.title || "Clarity in Communication",
      description:
        valuesDict?.items?.clarity?.description ||
        "We believe in honest, simple, and effective messaging both in how we work and how we help brands show up online.",
    },
    {
      title: valuesDict?.items?.community?.title || "Community-Centered Growth",
      description:
        valuesDict?.items?.community?.description ||
        "We build more than followings — we help brands grow loyal, engaged communities that last beyond algorithms.",
    },
    {
      title: valuesDict?.items?.excellence?.title || "Excellence in Execution",
      description:
        valuesDict?.items?.excellence?.description ||
        "From design to delivery, we hold a high standard for everything we produce. We value precision, consistency, and quality.",
    },
    {
      title: valuesDict?.items?.impact?.title || "Impact Over Hype",
      description:
        valuesDict?.items?.impact?.description ||
        "We prioritize results that matter — engagement, visibility, connection — over vanity metrics and short-term noise.",
    },
    {
      title: valuesDict?.items?.collaboration?.title || "Collaboration First",
      description:
        valuesDict?.items?.collaboration?.description ||
        "We work closely with our clients, treating each project as a partnership built on trust, transparency, and shared goals.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-burgundy py-16 md:py-24 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              {aboutDict?.hero?.title || "About Elev8 Rwanda"}
            </h1>
            <p className="text-lg md:text-xl mb-6">
              {aboutDict?.hero?.subtitle ||
                "Elevating brands and creating memorable experiences in Rwanda and beyond."}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {aboutDict?.mission?.title || "Our Mission & Vision"}
              </h2>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  {
                    "Elev8 Moments is a lifestyle and events brand that curates intentional experiences and gifts. We bring people together through creativity, celebration, and meaningful connection — whether in intimate gatherings, community events, or curated gifting."
                  }
                </p>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Vision</h3>
                  <p className="text-muted-foreground">
                    {aboutDict?.mission?.vision ||
                      "To become a leading creative agency known for elevating meaningful voices, transforming purpose-driven brands, and producing impactful digital stories across Africa and beyond."}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mission</h3>
                  <p className="text-muted-foreground">
                    {aboutDict?.mission?.mission ||
                      "To empower brands through strategic digital marketing and podcast production that fosters meaningful engagement, builds loyal communities, and drives measurable growth."}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl flex items-center justify-center">
              <Image
                src="/elev8-moments-logo-black.png"
                alt="Elev8 Moments Logo"
                width={600}
                height={600}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-cream dark:bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {aboutDict?.values?.title || "Our Values"}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 px-4 md:px-0">
              {values.map((value, index) => (
                <div key={index} className="relative group mb-4">
                  <div className="absolute -inset-1 bg-gradient-to-r from-burgundy to-burgundy/60 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-burgundy/10 dark:bg-burgundy/20 rounded-full flex items-center justify-center text-burgundy dark:text-cream text-sm font-bold mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-burgundy dark:text-cream">
                          {value.title}
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-cream dark:bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {aboutDict?.story?.title || "Our Brand Story"}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-center px-4 md:px-8">
              {aboutDict?.story?.content ? (
                aboutDict.story.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>
                    Elev8 Media was created to help brands cut through digital
                    noise with clear strategy, smart storytelling, and
                    consistent execution.
                  </p>
                  <p>
                    We saw a pattern. Brands had great ideas, powerful missions,
                    or quality products, but lacked the communication systems to
                    grow online. Too often, they were posting without purpose,
                    creating content without connection, or simply not showing
                    up at all.
                  </p>
                  <p>
                    Elev8 Media exists to solve that. Through strategic
                    branding, content, podcast production, and communications
                    consulting, we help purpose-driven brands build visibility,
                    grow with intention, and connect meaningfully with their
                    audiences.
                  </p>
                  <p>
                    We're not here to chase trends, we're here to build brands
                    that last.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {aboutDict?.founder?.title || "Meet the Founder"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Sandra Profile.jpg"
                alt="Sandra Mushambokazi - Founder & Creative Director"
                width={600}
                height={800}
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
            <div className="space-y-6">
              {aboutDict?.founder?.content ? (
                aboutDict.founder.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>
                    Sandra Mushambokazi is a digital strategist, creative
                    director, and entrepreneur who turned a personal passion
                    into a purpose-led agency. Her journey into digital
                    marketing began four years ago while working as a sales
                    manager, where she naturally gravitated toward content
                    creation and audience engagement.
                  </p>
                  <p>
                    What started as a side interest quickly evolved into
                    consulting for startups, and eventually, the founding of
                    Elev8 Media, an agency built to help brands scale through
                    strategy, storytelling, and consistent digital presence.
                    Over the past two years, Sandra has partnered with clients
                    across various industries, providing tailored solutions in
                    digital marketing and podcast production.
                  </p>
                  <p>
                    With a strong foundation in communication and project
                    management, she leads Elev8 Media with a focus on clarity,
                    execution, and impact. Her goal is simple: to help brands
                    grow with intention and show up meaningfully in the digital
                    space.
                  </p>
                </>
              )}
              <div className="mt-8">
                <Button asChild className="bg-burgundy hover:bg-burgundy/90">
                  <Link
                    href="https://www.linkedin.com/in/sandra-mushambokazi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {aboutDict?.founder?.connect || "Connect on LinkedIn"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-cream dark:bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {aboutDict?.portfolio?.title || "Our Portfolio"}
            </h2>
            <p className="text-muted-foreground">
              {aboutDict?.portfolio?.subtitle ||
                "A showcase of our recent work and successful client projects."}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioItems.map((item: any, index: number) => (
              <Suspense
                key={index}
                fallback={
                  <div className="aspect-[3/2] bg-gray-200 rounded-lg animate-pulse"></div>
                }
              >
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark-red/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center p-4">
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-sm mb-2">{item.description}</p>
                      <p className="text-xs">{item.content}</p>
                    </div>
                  </div>
                </div>
              </Suspense>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-burgundy/10 dark:bg-burgundy/20 rounded-full text-burgundy dark:text-cream text-sm font-medium">
              {aboutDict?.gallery?.title || "Our Gallery"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {aboutDict?.gallery?.subtitle || "Creative work from the ground"}
            </h2>
            <p className="text-muted-foreground">
              {aboutDict?.gallery?.description ||
                "Work captured by our in-house photographer & videographer, now serving clients in Dubai"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <Image
                  src={image}
                  alt={
                    (aboutDict?.gallery as any)?.altText?.[index] ||
                    `Gallery image ${index + 1}`
                  }
                  width={600}
                  height={400}
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-burgundy text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
              {aboutDict?.cta?.title || "Ready to Elevate Your Brand?"}
            </h2>
            <p className="text-lg mb-8">
              {aboutDict?.cta?.subtitle ||
                "Let's work together to create exceptional experiences and powerful marketing strategies."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-cream text-burgundy hover:bg-cream/90 glow-effect"
              >
                <Link href={`/${locale}/contact`}>
                  {dict.common.cta.freeConsultation}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream text-burgundy hover:bg-cream/10"
              >
                <Link href={`/${locale}/services`}>
                  {dict.common.cta.learnMore}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
