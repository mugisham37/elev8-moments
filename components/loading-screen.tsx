"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="relative w-40 h-40 mb-8 animate-pulse">
        <Image src="/elev8-logo-dark.svg" alt="Elev8 Rwanda Logo" fill className="object-contain dark:hidden" />
        <Image src="/Elev8-logo-light.svg" alt="Elev8 Rwanda Logo" fill className="object-contain hidden dark:block" />
      </div>

      <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-burgundy transition-all duration-700 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <p className="mt-4 text-muted-foreground text-sm font-medium">Elevating your experience...</p>
    </div>
  )
}

