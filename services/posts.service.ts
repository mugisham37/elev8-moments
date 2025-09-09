import { BlogPost } from "@/lib/sanity.types";
import { client } from "@/sanity/lib/client";

export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    "categories": categories[]->title
  }`;

  try {
    const data = await client.fetch(query, {}, { next: { revalidate: 600 } });
    return data;
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string){
  const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      mainImage,
      publishedAt,
      "categories": categories[]->title,
      "author": author->{name, image, bio}
    }`;

  try {
    const data = await client.fetch(
      query,
      { slug },
      { next: { revalidate: 600 } }
    );
    return data;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}
