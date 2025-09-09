import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BrandsOverview() {
  return (
    <section className="py-20 md:py-28 bg-cream/30 dark:bg-gray-900/40">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-burgundy/10 dark:bg-burgundy/20 rounded-full text-burgundy dark:text-cream text-sm font-medium">
            Our Sub-Brands
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Our Brands</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our specialized services designed to elevate your brand presence and create memorable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
            <div className="h-64 bg-black relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
              <Image
                src="/elev8-media-logo.png"
                alt="Elev8 Media"
                fill
                className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
                Digital Marketing
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-burgundy dark:group-hover:text-cream transition-colors">
                Elev8 Media
              </h3>
              <p className="text-muted-foreground mb-6">
                Professional social media marketing and podcast production services to amplify your brand's voice.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-burgundy dark:text-cream mr-3 mt-0.5 flex-shrink-0" />
                  <span>Social Media Management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-burgundy dark:text-cream mr-3 mt-0.5 flex-shrink-0" />
                  <span>Content Creation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-burgundy dark:text-cream mr-3 mt-0.5 flex-shrink-0" />
                  <span>Podcast Production</span>
                </li>
              </ul>
              <Button asChild className="w-full group glow-effect">
                <Link href="/brands/elev8-media" className="flex items-center justify-center">
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
            <div className="h-64 bg-burgundy relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
              <Image
                src="/elev8-moments-logo-burgundy.png"
                alt="Elev8 Moments"
                fill
                className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
                Events & Gifting
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-burgundy dark:group-hover:text-cream transition-colors">
                Elev8 Moments
              </h3>
              <p className="text-muted-foreground mb-6">
                Exceptional event planning and personalized gifting services to create unforgettable experiences.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-burgundy dark:text-cream mr-3 mt-0.5 flex-shrink-0" />
                  <span>Event Planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-burgundy dark:text-cream mr-3 mt-0.5 flex-shrink-0" />
                  <span>Corporate Events</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-burgundy dark:text-cream mr-3 mt-0.5 flex-shrink-0" />
                  <span>Personalized Gifting Services</span>
                </li>
              </ul>
              <Button asChild className="w-full group glow-effect">
                <Link href="/brands/elev8-moments" className="flex items-center justify-center">
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

