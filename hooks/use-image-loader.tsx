"use client"

import { useState, useEffect } from "react"

interface UseImageLoaderProps {
  src: string
  fallbackSrc?: string
}

export function useImageLoader({ src, fallbackSrc = "/placeholder.svg" }: UseImageLoaderProps) {
  const [imageSrc, setImageSrc] = useState<string>(src)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const img = new Image()
    img.src = src

    img.onload = () => {
      setImageSrc(src)
      setIsLoading(false)
      setError(false)
    }

    img.onerror = () => {
      setImageSrc(fallbackSrc)
      setIsLoading(false)
      setError(true)
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src, fallbackSrc])

  return { imageSrc, isLoading, error }
}

