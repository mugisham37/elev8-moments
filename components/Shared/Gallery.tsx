'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import ScrollOverlayWrapper from '../Routes/Landing/ScrollOverlayWrapper'

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const images = [
    { src: "/images/1.JPG", alt: "IMG_1097" },
    { src: "/images/2.JPG", alt: "IMG_1645_jpg" },
    { src: "/images/3.JPG", alt: "IMG_3225" },
    { src: "/images/4.JPG", alt: "IMG_3657" },
    { src: "/images/6.JPG", alt: "IMG_4105_jpg" },
    { src: "/images/7.JPG", alt: "IMG_7294_jpg" },
    { src: "/images/8.JPG", alt: "IMG_7457" },
    { src: "/images/9.JPG", alt: "IMG_3702" }
  ]

  // Duplicate images for infinite loop effect
  const extendedImages = [...images, ...images, ...images]

  // Scroll tracking effect - drives carousel movement based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate scroll progress when section is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Normalize scroll progress from 0 to 1 based on section visibility
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
        const progress = Math.min(Math.max(visibleHeight / windowHeight, 0), 1)
        
        // Map scroll progress to slide index
        // As user scrolls through the section, advance through slides
        const maxScrollIndex = images.length - 1
        const targetIndex = Math.floor(progress * maxScrollIndex * 2) + images.length
        setCurrentIndex(targetIndex)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [images.length])

  // Calculate responsive dimensions based on viewport
  const [dimensions, setDimensions] = useState({
    arrowSize: 44,
    arrowPosition: 20,
    iconSize: 24,
    dotSize: 10,
    dotGap: 8,
    bottomPosition: 20,
    imagePadding: 2
  })

  // Calculate visible count and responsive dimensions
  useEffect(() => {
    const calculateResponsiveDimensions = () => {
      const width = window.innerWidth
      const zoom = window.devicePixelRatio || 1
      
      // Adjust count based on viewport width and zoom level
      if (width < 640) {
        // Mobile: 1-2 images
        setVisibleCount(zoom > 1.5 ? 1 : 2)
        setDimensions({
          arrowSize: 36,
          arrowPosition: 12,
          iconSize: 18,
          dotSize: 8,
          dotGap: 6,
          bottomPosition: 16,
          imagePadding: 1
        })
      } else if (width < 1024) {
        // Tablet: 2-3 images - Proportionally scaled from desktop
        setVisibleCount(zoom > 1.5 ? 2 : 3)
        setDimensions({
          arrowSize: 36,        // 82% of desktop (44px)
          arrowPosition: 14,    // 70% of desktop (20px)
          iconSize: 20,         // 83% of desktop (24px)
          dotSize: 8,           // 80% of desktop (10px)
          dotGap: 6,            // 75% of desktop (8px)
          bottomPosition: 16,   // 80% of desktop (20px)
          imagePadding: 1.5     // 75% of desktop (2px)
        })
      } else if (width < 1536) {
        // Desktop: 3-4 images - Base measurements
        setVisibleCount(zoom > 1.5 ? 3 : 4)
        setDimensions({
          arrowSize: 44,
          arrowPosition: 20,
          iconSize: 24,
          dotSize: 10,
          dotGap: 8,
          bottomPosition: 20,
          imagePadding: 2
        })
      } else {
        // Large desktop: 4-5 images - Slightly larger
        setVisibleCount(zoom > 1.5 ? 4 : 5)
        setDimensions({
          arrowSize: 48,
          arrowPosition: 24,
          iconSize: 26,
          dotSize: 12,
          dotGap: 10,
          bottomPosition: 24,
          imagePadding: 2.5
        })
      }
    }

    calculateResponsiveDimensions()
    window.addEventListener('resize', calculateResponsiveDimensions)
    
    // Listen for zoom changes
    const mediaQuery = window.matchMedia('(resolution: 1dppx)')
    mediaQuery.addEventListener('change', calculateResponsiveDimensions)

    return () => {
      window.removeEventListener('resize', calculateResponsiveDimensions)
      mediaQuery.removeEventListener('change', calculateResponsiveDimensions)
    }
  }, [])

  // Auto-slide functionality - independent automatic movement
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1
        // Reset to start of second set when reaching end
        if (next >= images.length * 2) {
          return images.length
        }
        return next
      })
    }, 3500) // Slide every 3.5 seconds

    return () => clearInterval(interval)
  }, [isPaused, images.length])

  // Reset position instantly when at the end of duplicated set
  useEffect(() => {
    if (currentIndex === images.length * 2) {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = 'none'
          setCurrentIndex(images.length)
          setTimeout(() => {
            if (containerRef.current) {
              containerRef.current.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }
          }, 50)
        }
      }, 800)
    }
  }, [currentIndex, images.length])

  const slideWidth = 100 / visibleCount
  const translateX = -(currentIndex * slideWidth)

  return (
    <ScrollOverlayWrapper zIndex={10}>
      <div 
        ref={sectionRef}
        style={{ 
          width: '100vw',
          height: '60vh',
          minHeight: '400px',
          maxHeight: '750px',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#F9F2EC',
          margin: 0,
          padding: 0
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
      {/* Carousel Track */}
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          transform: `translateX(${translateX}%)`,
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'transform'
        }}
      >
        {extendedImages.map((img, index) => (
          <div
            key={`${img.alt}-${index}`}
            style={{
              flex: `0 0 ${slideWidth}%`,
              height: '100%',
              position: 'relative',
              padding: `0 ${dimensions.imagePadding}px`
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden'
            }}>
              <Image
                src={img.src}
                fill
                style={{
                  objectFit: 'cover'
                }}
                alt={img.alt}
                sizes={`${100 / visibleCount}vw`}
                priority={index < visibleCount * 2}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
        style={{
          position: 'absolute',
          left: `${dimensions.arrowPosition}px`,
          top: '50%',
          transform: 'translateY(-50%) rotate(180deg)',
          width: `${dimensions.arrowSize}px`,
          height: `${dimensions.arrowSize}px`,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)'
          e.currentTarget.style.transform = 'translateY(-50%) rotate(180deg) scale(1.1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
          e.currentTarget.style.transform = 'translateY(-50%) rotate(180deg) scale(1)'
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512"
          style={{
            width: `${dimensions.iconSize}px`,
            height: `${dimensions.iconSize}px`,
            fill: '#B5AFA0'
          }}
        >
          <path d="M461.49,248.51,394,181a12,12,0,0,0-17,17l46.52,46.51H60a12,12,0,0,0,0,24H424.53L377,316a12,12,0,0,0,17,17l67.5-67.5A12,12,0,0,0,461.49,248.51Z"></path>
        </svg>
      </button>

      <button
        onClick={() => setCurrentIndex((prev) => prev + 1)}
        style={{
          position: 'absolute',
          right: `${dimensions.arrowPosition}px`,
          top: '50%',
          transform: 'translateY(-50%)',
          width: `${dimensions.arrowSize}px`,
          height: `${dimensions.arrowSize}px`,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512"
          style={{
            width: `${dimensions.iconSize}px`,
            height: `${dimensions.iconSize}px`,
            fill: '#B5AFA0'
          }}
        >
          <path d="M461.49,248.51,394,181a12,12,0,0,0-17,17l46.52,46.51H60a12,12,0,0,0,0,24H424.53L377,316a12,12,0,0,0,17,17l67.5-67.5A12,12,0,0,0,461.49,248.51Z"></path>
        </svg>
      </button>

      {/* Progress Indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: `${dimensions.bottomPosition}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: `${dimensions.dotGap}px`,
          zIndex: 10
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(images.length + index)}
            style={{
              width: `${dimensions.dotSize}px`,
              height: `${dimensions.dotSize}px`,
              borderRadius: '50%',
              border: 'none',
              backgroundColor: (currentIndex % images.length) === index 
                ? '#B5AFA0' 
                : 'rgba(181, 175, 160, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </ScrollOverlayWrapper>
  )
}

export default Gallery