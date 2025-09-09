import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts, BlogPost } from "@/lib/blog-data";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/types/i18n";

type Props = {
  params: { locale: Locale }
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const dict = await getDictionary(locale);
  
  return {
    title: `${dict.blog?.hero?.title || "Blog"} | Elev8 Rwanda`,
    description: dict.blog?.hero?.subtitle || 
      "Insights, tips, and success stories from the world of marketing, events, and gifting.",
  };
}

export default async function BlogPage({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);
  const posts = getAllBlogPosts();
  
  return (
    <>
      <section className="bg-burgundy py-16 md:py-24 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {dict.blog?.hero?.title || "Our Blog"}
            </h1>
            <p className="text-lg md:text-xl mb-6">
              {dict.blog?.hero?.subtitle || 
                "Insights, tips, and success stories from the world of marketing, events, and gifting."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

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
                      {dict.blog?.readMore || "Read More"} <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="sm" disabled>
                {dict.blog?.previous || "Previous"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-dark-red text-white hover:bg-dark-red/90"
              >
                1
              </Button>
              <Button variant="outline" size="sm">
                {dict.blog?.next || "Next"}
              </Button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-cream dark:bg-[#18150f]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dict.blog?.newsletter?.title || "Subscribe to Our Newsletter"}
            </h2>
            <p className="mb-8">
              {dict.blog?.newsletter?.subtitle || 
                "Stay updated with our latest articles, tips, and industry insights delivered directly to your inbox."}
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={dict.blog?.newsletter?.placeholder || "Your email address"}
                className="flex-1 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-dark-red"
                required
              />
              <Button
                type="submit"
                className="bg-dark-red hover:bg-dark-red/90 px-6"
              >
                {dict.blog?.newsletter?.button || "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
