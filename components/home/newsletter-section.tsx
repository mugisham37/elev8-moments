import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NewsletterSectionProps {
  dict?: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
  };
}

export default function NewsletterSection({ dict }: NewsletterSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-cream/30 dark:bg-gray-800">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
            {dict?.title || "Stay Updated"}
          </h2>
          <p className="mb-8 text-muted-foreground">
            {dict?.subtitle || "Subscribe to our newsletter for the latest industry insights, tips, and exclusive offers."}
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={dict?.placeholder || "Your email address"}
              className="flex-1 px-4 py-3 rounded-md text-black dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-burgundy dark:focus:ring-cream"
              required
            />
            <Button type="submit" className="px-6 group glow-effect">
              {dict?.button || "Subscribe"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
