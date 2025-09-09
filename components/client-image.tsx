"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface ClientImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
}

export function ClientImage({ src, alt, fallbackSrc = "/placeholder.svg", ...props }: ClientImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(typeof src === "string" ? src : "/placeholder.svg")

  return (
    <Image
      {...props}
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      onError={() => {
        const width = typeof props.width === "number" ? props.width : 300
        const height = typeof props.height === "number" ? props.height : 300
        setImgSrc(`${fallbackSrc}?height=${height}&width=${width}&text=${encodeURIComponent(alt)}`)
      }}
    />
  )
}

