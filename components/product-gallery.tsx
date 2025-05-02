"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProductGalleryProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index)
  }

  // Navigate to previous image
  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  // Navigate to next image
  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrevious()
    } else if (e.key === "ArrowRight") {
      handleNext()
    }
  }

  return (
    <div
      className="flex w-full flex-col space-y-4 md:space-y-6"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Product image gallery"
    >
      {/* Main Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-white">
        {/* Navigation Arrows for Mobile and Desktop */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-md hover:bg-white md:h-10 md:w-10"
          onClick={handlePrevious}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-md hover:bg-white md:h-10 md:w-10"
          onClick={handleNext}
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Main Image with Transition */}
        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 h-full w-full transition-opacity duration-300",
                index === currentImageIndex ? "opacity-100" : "opacity-0 pointer-events-none",
              )}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="h-full w-full object-cover object-center"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative aspect-square min-w-[70px] max-w-[80px] cursor-pointer overflow-hidden rounded-md border-2 transition-all",
              index === currentImageIndex
                ? "border-emerald-700 opacity-100"
                : "border-transparent opacity-70 hover:opacity-100",
            )}
            onClick={() => handleThumbnailClick(index)}
            aria-label={`View ${image.alt}`}
            aria-current={index === currentImageIndex}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={`Thumbnail for ${image.alt}`}
              className="h-full w-full object-cover object-center"
              width={100}
              height={100}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

