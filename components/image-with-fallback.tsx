"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { Skeleton } from "@/components/ui/skeleton"

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  width,
  height,
  ...rest
}: ImageWithFallbackProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [imgSrc, setImgSrc] = useState(src)

  const handleError = () => {
    setImgSrc(`${fallbackSrc}?height=${height}&width=${width}&text=${encodeURIComponent(alt)}`)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="relative">
      {isLoading && (
        <Skeleton
          className={`absolute inset-0 z-10 ${typeof width === "number" ? `w-[${width}px]` : `w-${width}`} ${
            typeof height === "number" ? `h-[${height}px]` : `h-${height}`
          }`}
        />
      )}
      <Image
        {...rest}
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        onError={handleError}
        onLoad={handleLoad}
        className={`${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"} ${rest.className || ""}`}
      />
    </div>
  )
}

