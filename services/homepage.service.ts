
import { HomePageData } from "@/lib/sanity.types";
import { client } from "@/sanity/lib/client";

export async function getHomePageData(): Promise<HomePageData> {
  const query = `{
    "hero": *[_type == "homePage"][0].hero,
    "services": *[_type == "service"] | order(order asc) {
      _id,
      title,
      description,
      slug,
      icon,
      image
    },
    "stats": *[_type == "homePage"][0].stats,
    "testimonials": *[_type == "testimonial"] | order(_createdAt desc)[0...3] {
      _id,
      name,
      position,
      company,
      quote,
      image,
      rating
    },
    "blogPosts": *[_type == "post"] | order(_createdAt desc)[0...3] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "categories": categories[]->title
    }
  }`

  try {
    const data = await client.fetch(query, {}, { next: { revalidate: 600 } });
    return data;
  } catch (error) {
    console.error("Error fetching home page data:", error)
    return {} as HomePageData
  }
}