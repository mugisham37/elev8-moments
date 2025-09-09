import { BrandData } from "@/lib/sanity.types";
import { client } from "@/sanity/lib/client";


// elev8-media data
export async function getElev8MediaData(): Promise<BrandData> {
  const query = `*[_type == "brand" && slug.current == "elev8-media"][0] {
    _id,
    title,
    description,
    logo,
    services[] {
      title,
      description,
      features,
      icon
    },
    packages[] {
      title,
      price,
      features,
      isPopular
    },
    portfolio[] {
      title,
      description,
      image
    }
  }`

  try {
    const data = await client.fetch(query, {}, { next: { revalidate: 600 } });
    return data;
  } catch (error) {
    console.error("Error fetching Elev8 Media data:", error)
    return {} as BrandData
  }
}

// elev8-moments data
export async function getElev8MomentsData(): Promise<BrandData> {
    const query = `*[_type == "brand" && slug.current == "elev8-moments"][0] {
      _id,
      title,
      description,
      logo,
      services[] {
        title,
        description,
        features,
        icon
      },
      eventTypes[] {
        title,
        image,
        description
      },
      portfolio[] {
        title,
        description,
        image
      }
    }`
  
    try {
      const data = await client.fetch(query, {}, { next: { revalidate: 600 } });
      return data;
    } catch (error) {
      console.error("Error fetching Elev8 Moments data:", error)
      return {} as BrandData
    }
  }
  
