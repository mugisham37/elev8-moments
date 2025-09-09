import Image from "next/image"
import { getSanityImageUrl } from "@/lib/utils"

interface SanityImageProps {
  image: any
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
}

export default function SanityImage({
  image,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
}: SanityImageProps) {
  const imageUrl = getSanityImageUrl(image)

  if (fill) {
    return <Image src={imageUrl || "/placeholder.svg"} alt={alt} fill className={className} priority={priority} />
  }

  return (
    <Image
      src={imageUrl || "/placeholder.svg"}
      alt={alt}
      width={width || 600}
      height={height || 530}
      className={className}
      priority={priority}
    />
  )
}

