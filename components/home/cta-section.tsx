"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

interface CTASectionProps {
  dict?: {
    title: string;
    subtitle: string;
  };
  locale?: string;
  commonDict?: {
    cta?: {
      freeConsultation?: string;
    }
  };
}

export default function CTASection({ dict, locale = "", commonDict }: CTASectionProps) {
  const pathname = usePathname();
  const currentLocale = locale || pathname?.split('/')[1] || '';
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-burgundy to-black dark:from-black dark:to-burgundy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-burgundy/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-burgundy/20 blur-3xl"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">
            {dict?.title || "Ready to work together?"}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-cream/90">
            {dict?.subtitle || "Let's collaborate to build impactful digital experiences and marketing strategies that move your brand forward."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-cream text-burgundy hover:bg-cream/90 group transition-all duration-300 glow-effect"
            >
              <Link href={`/${currentLocale}/contact`} className="flex items-center">
                {commonDict?.cta?.freeConsultation || "Book a Free Consultation"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
              {/* <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream text-cream bg-burgundy/30 hover:bg-cream/10 group transition-all duration-300 relative overflow-hidden"
              >
                <Link href="/contact" className="flex items-center">
                  <span className="relative z-10">Book an Event or Inquiry</span>
                  <span className="absolute inset-0 bg-burgundy/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
