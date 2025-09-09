import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-data"
import { Locale } from "@/types/i18n"

interface BlogPreviewProps {
  limit?: number;
  locale?: Locale;
  dict?: {
    preview?: {
      label?: string;
      title?: string;
      subtitle?: string;
      viewAll?: string;
    };
    readMore?: string;
  };
}

export default function BlogPreview({ limit = 3, locale = "en", dict }: BlogPreviewProps) {
  const displayPosts = blogPosts.slice(0, limit);

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-burgundy/10 dark:bg-burgundy/20 rounded-full text-burgundy dark:text-cream text-sm font-medium">
            {dict?.preview?.label || "Our Blog"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
            {dict?.preview?.title || "Latest Insights"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {dict?.preview?.subtitle || "Stay updated with the latest trends, tips, and success stories from our blog."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayPosts.map((post) => {
            // Use locale-specific date formatting when available
            const publishedDate = new Date(post.publishedAt).toLocaleDateString(
              locale === "en" ? "en-US" : locale === "fr" ? "fr-FR" : "ar-SA", 
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );

            return (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="h-48 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    {publishedDate}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="text-dark-red font-medium hover:underline flex items-center"
                  >
                    {dict?.readMore || "Read More"} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="group">
            <Link href={`/${locale}/blog`} className="flex items-center">
              {dict?.preview?.viewAll || "View All Posts"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
