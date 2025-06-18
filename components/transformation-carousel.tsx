"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface TransformationItem {
  id: number
  name: string
  beforeImage: string
  afterImage: string
  weeks: number
}

interface TransformationCarouselProps {
  items: TransformationItem[]
}

export function TransformationCarousel({ items }: TransformationCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % items.length)
  }

  const prev = () => {
    setCurrent((current - 1 + items.length) % items.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {/* Desktop: Keep original 4:5 aspect ratio, Mobile: Use phone dimensions 9:16 */}
            <div className="grid grid-cols-2 gap-1 md:gap-1 max-w-md md:max-w-2xl mx-auto">
              <div className="relative aspect-[9/16] overflow-hidden rounded-s-lg">
                <div className="absolute top-2 left-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                  ANTES
                </div>
                <Image
                  src={items[current].beforeImage}
                  alt={`${items[current].name} antes`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[9/16] overflow-hidden shadow-lg rounded-e-lg">
                <div className="absolute top-2 left-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                  DESPUÉS
                </div>
                <Image
                  src={items[current].afterImage}
                  alt={`${items[current].name} después`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    {/* TEXTO DESCIPTIVO DE LOS CAMBIOS DE LOS CLIENTES*/}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-4 max-w-md md:max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{items[current].name}</h3>
          <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
            {items[current].weeks} semanas
          </span>
        </div>
        {/* <p className="text-gray-700">{items[current].description}</p>*/}
      </div> 
    

      <div className="absolute top-1/3 transform -translate-y-1/2 left-4">
        <button
          onClick={(e) => {
            e.preventDefault()
            setAutoplay(false)
            prev()
          }}
          className="bg-white/80 hover:bg-white rounded-full p-2 backdrop-blur-sm transition-colors shadow-lg"
          aria-label="Previous transformation"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
      </div>

      <div className="absolute top-1/3 transform -translate-y-1/2 right-4">
        <button
          onClick={(e) => {
            e.preventDefault()
            setAutoplay(false)
            next()
          }}
          className="bg-white/80 hover:bg-white rounded-full p-2 backdrop-blur-sm transition-colors shadow-lg"
          aria-label="Next transformation"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              current === index ? "bg-emerald-500" : "bg-gray-300"
            }`}
            aria-label={`Go to transformation ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
