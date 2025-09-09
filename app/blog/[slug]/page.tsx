import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogContent from "@/components/blog-content"
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog-data"

type Props = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Elev8 Rwanda",
    }
  }

  return {
    title: `${post.title} | Elev8 Rwanda Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Get other posts for related posts section
  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts
    .filter(relatedPost => relatedPost.id !== post.id)
    .slice(0, 3)

  return (
    <>
      <section className="bg-burgundy py-16 md:py-24 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/blog" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Posts
                </Link>
              </Button>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center">
                <span>{post.author || "Elev8 Rwanda"}</span>
              </div>
              <span>•</span>
              <span>{publishedDate}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>

            <article className="prose prose-lg max-w-3xl overflow-hidden">
              <BlogContent content={post.content} />
            </article>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Related Posts
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 relative">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{relatedPost.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="text-burgundy dark:text-cream font-medium hover:underline flex items-center"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
