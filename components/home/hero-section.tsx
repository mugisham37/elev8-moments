"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

type HeroSectionProps = {
  dict: {
    title: string;
    subtitle: string;
    storytelling: string;
    bookFreeCall: string;
    featuredService: string;
    strategicBrand: string;
    premiumServices: string;
    brandStory: string;
    closeModal: string;
    altText?: string;
  }
}

export default function HeroSection({ dict }: HeroSectionProps) {
  const [showVideo, setShowVideo] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const carouselImages = [
    "/hero1.png",
    "/hero2.png",
    "/hero3.jpg",
  ]

  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (videoRef.current && !videoRef.current.contains(event.target as Node)) {
        setShowVideo(false)
      }
    }

    if (showVideo) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showVideo])

  
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy via-burgundy to-burgundy-dark"></div>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px] opacity-30"></div>
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-burgundy/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-burgundy/20 blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight animate-fade-in text-glow">
              {dict.title} <span className="text-cream">{dict.storytelling}.</span>
            </h1>
            <p className="text-base md:text-lg mb-7 text-cream/90 animate-fade-in-delay">
              {dict.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <Button
                asChild
                size="lg"
                className="bg-cream text-burgundy hover:bg-cream/90 group transition-all duration-300 glow-effect relative overflow-hidden"
              >
                <Link href="/contact" className="flex items-center">
                  <span className="relative z-10">{dict.bookFreeCall}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                  <span className="absolute inset-0 bg-burgundy/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src={carouselImages[currentImageIndex] || "/placeholder.svg"}
                alt={dict.altText || "Elev8 Rwanda Services"}
                width={600}
                height={650}
                className="w-full h-auto transition-opacity duration-1000"
              />
              <div className="absolute inset-0 gradient-overlay-burgundy opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs font-medium mb-1">{dict.featuredService}</p>
                <h3 className="text-lg font-bold">{dict.strategicBrand}</h3>
              </div>
            </div>
            <div className="absolute top-8 -right-8 w-40 h-40 bg-cream rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-cream rounded-full opacity-20 blur-2xl"></div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 rotate-3 animate-pulse-slow z-20">
              <p className="text-burgundy dark:text-cream font-bold text-sm">{dict.premiumServices}</p>
            </div>

            {/* Carousel indicators */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  title={`Carousel indicator ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index ? "bg-cream w-6" : "bg-cream/50"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div ref={videoRef} className="bg-white rounded-lg overflow-hidden max-w-4xl w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold">{dict.brandStory}</h3>
              <button onClick={() => setShowVideo(false)} className="text-gray-500 hover:text-gray-700" title={dict.closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="aspect-video">
              {/* Replace with your actual video */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title={dict.brandStory}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
