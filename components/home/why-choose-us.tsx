import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhyChooseUsProps {
  dict?: {
    title?: string;
    subtitle?: string;
    heading?: string;
    helpText?: string;
    features?: {
      planSmart?: {
        title?: string;
        description?: string;
      };
      createIntentionally?: {
        title?: string;
        description?: string;
      };
      measureMatters?: {
        title?: string;
        description?: string;
      };
      growCommunities?: {
        title?: string;
        description?: string;
      };
    };
    ctaText?: string;
  };
}

export default function WhyChooseUs({ dict }: WhyChooseUsProps) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px] dark:opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-burgundy/5 dark:bg-burgundy/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-burgundy/5 dark:bg-burgundy/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-1 bg-burgundy/10 dark:bg-burgundy/20 rounded-full text-burgundy dark:text-cream text-sm font-medium">
              {dict?.title || "Why Choose Us"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">
              {dict?.heading || "Elevate Your Brand with Our Expertise"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {dict?.subtitle || "At Elev8 Media, we bring strategy, creativity, and clarity to every brand we work with. Whether you're building a presence from scratch or refining an established voice, we help you show up with purpose and stand out online."}
            </p>
            
            <p className="font-medium text-lg mb-6">{dict?.helpText || "Here's how we help:"}</p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-burgundy/10 dark:bg-burgundy/20 flex items-center justify-center text-burgundy dark:text-cream">
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
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {dict?.features?.planSmart?.title || "We plan smart."}
                  </h3>
                  <p className="text-muted-foreground">
                    {dict?.features?.planSmart?.description || "Every brand needs more than just content — it needs a strategy."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-burgundy/10 dark:bg-burgundy/20 flex items-center justify-center text-burgundy dark:text-cream">
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
                  >
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                    <path d="M14.5 9.5 16 8"></path>
                    <path d="m9.5 14.5-1.5 1.5"></path>
                    <path d="M7 10.5H5.5"></path>
                    <path d="M18.5 13.5H17"></path>
                    <path d="M16 16.5 14.5 15"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {dict?.features?.createIntentionally?.title || "We create intentionally."}
                  </h3>
                  <p className="text-muted-foreground">
                    {dict?.features?.createIntentionally?.description || "From visuals to voice, everything we craft aligns with your goals."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-burgundy/10 dark:bg-burgundy/20 flex items-center justify-center text-burgundy dark:text-cream">
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
                  >
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {dict?.features?.measureMatters?.title || "We measure what matters."}
                  </h3>
                  <p className="text-muted-foreground">
                    {dict?.features?.measureMatters?.description || "With clear reports and insights, you'll always know what's working."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-burgundy/10 dark:bg-burgundy/20 flex items-center justify-center text-burgundy dark:text-cream">
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
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {dict?.features?.growCommunities?.title || "We grow communities."}
                  </h3>
                  <p className="text-muted-foreground">
                    {dict?.features?.growCommunities?.description || "Beyond followers, we focus on real engagement and loyal audiences."}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button asChild size="lg" className="group glow-effect">
                <Link href="/contact" className="flex items-center">
                  {dict?.ctaText || "Let's Elevate Your Brand"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/camera.jpg"
                alt="Our team at work"
                width={600}
                height={700}
                className="w-full h-auto"
              />
            </div>

            <div className="absolute top-4 -left-4 w-24 h-24 bg-burgundy rounded-lg rotate-6 z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-burgundy dark:border-cream rounded-lg -rotate-6 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
