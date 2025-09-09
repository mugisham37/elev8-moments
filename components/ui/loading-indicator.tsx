"use client"

import { useEffect, useState } from "react"

interface LoadingIndicatorProps {
  size?: "sm" | "md" | "lg"
  color?: "primary" | "white" | "burgundy"
}

export function LoadingIndicator({ size = "md", color = "primary" }: LoadingIndicatorProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  }

  const colorClasses = {
    primary: "border-t-burgundy",
    white: "border-t-white",
    burgundy: "border-t-burgundy",
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full border-gray-300 dark:border-gray-600 ${colorClasses[color]} animate-spin`}
    />
  )
}

export function PageLoadingIndicator() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <LoadingIndicator size="lg" color="burgundy" />
        <p className="mt-4 text-burgundy font-medium">Loading...</p>
      </div>
    </div>
  )
}

export function SectionLoadingIndicator() {
  return (
    <div className="w-full py-12 flex justify-center">
      <LoadingIndicator size="md" color="burgundy" />
    </div>
  )
}

