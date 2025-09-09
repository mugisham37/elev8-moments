import { Testimonial } from "@/lib/sanity.types";
import { client } from "@/sanity/lib/client";

export async function getAllTestimonials(): Promise<Testimonial[]> {
  const query = `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    position,
    company,
    quote,
    image,
    rating
  }`

  try {
    const data = await client.fetch(query, {}, { next: { revalidate: 600 } });
    return data;
  } catch (error) {
    console.error("Error fetching all testimonials:", error)
    return []
  }
}
