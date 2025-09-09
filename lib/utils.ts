
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { SanityImage } from "./sanity.types"
import imageUrlBuilder from "@sanity/image-url"
import { client } from "@/sanity/lib/client"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
// Helper function to handle missing images
export function getSanityImageUrl(image: SanityImage | string | null | undefined): string {
  if (!image) return "/placeholder.svg?height=600&width=400"

  if (typeof image === "string") {
    return image
  }

  try {
    return urlFor(image).url()
  } catch (error) {
    console.error("Error generating Sanity image URL:", error)
    return "/placeholder.svg?height=600&width=400"
  }
}