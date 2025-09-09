import { AboutPageData } from "@/lib/sanity.types";
import { client } from "@/sanity/lib/client";

export async function getAboutPageData(): Promise<AboutPageData> {
  const query = `{
    "about": *[_type == "aboutPage"][0],
    "teamMembers": *[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      position,
      bio,
      image,
      socialLinks
    }
  }`

  try {
    const data = await client.fetch(query, {}, { next: { revalidate: 600 } });
    return data;
  } catch (error) {
    console.error("Error fetching about page data:", error)
    return {} as AboutPageData
  }
}
