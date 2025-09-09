"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { LoadingScreen } from "./loading-screen"

interface LoadingContextType {
  isLoading: boolean
  startLoading: () => void
  stopLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider")
  }
  return context
}

interface LoadingProviderProps {
  children: ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Initial page load
  useEffect(() => {
    // Check if document is fully loaded
    if (document.readyState === "complete") {
      setIsLoading(false)
    } else {
      const handleLoad = () => {
        setTimeout(() => {
          setIsLoading(false)
        }, 800) // Add a small delay to ensure smooth transition
      }

      window.addEventListener("load", handleLoad)
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [])

  const startLoading = () => setIsLoading(true)
  const stopLoading = () => setIsLoading(false)

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {isLoading && <LoadingScreen />}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>{children}</div>
    </LoadingContext.Provider>
  )
}

