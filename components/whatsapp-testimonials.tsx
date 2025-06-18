"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Check, CheckCheck, ChevronLeft, ChevronRight } from "lucide-react"

interface WhatsAppMessage {
  id: number
  name: string
  message: string
  timestamp: string
  isRead: boolean
}

interface WhatsAppTestimonialsProps {
  messages: WhatsAppMessage[]
}


export function WhatsAppTestimonials({ messages }: WhatsAppTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length)
  }

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + messages.length) % messages.length
    const isVisible = position < 4 // Show top 4 cards

    if (!isVisible) {
      return {
        opacity: 0,
        scale: 0.8,
        y: 60,
        zIndex: 0,
        rotate: 0,
      }
    }

    return {
      opacity: position === 0 ? 1 : 0.7 - position * 0.15,
      scale: 1 - position * 0.05,
      y: position * 8,
      zIndex: messages.length - position,
      rotate: position === 0 ? 0 : (position % 2 === 0 ? 1 : -1) * position * 2,
    }
  }

  return (
    <div className="w-full max-w-md mx-auto relative">
      {/* Navigation Buttons */}
      <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-50">
        <motion.button
          onClick={prevCard}
          className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-50">
        <motion.button
          onClick={nextCard}
          className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Stacked Cards Container */}
      <div className="relative h-[400px] w-full">
        {messages.map((message, index) => {
          const style = getCardStyle(index)
          const position = (index - currentIndex + messages.length) % messages.length

          return (
            <motion.div
              key={message.id}
              className="absolute inset-0 w-full"
              animate={style}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.6,
              }}
              style={{
                zIndex: style.zIndex,
              }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full">
                {/* WhatsApp Header 
                <div className="bg-[#075E54] text-white p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <svg className="w-6 h-6 text-[#075E54]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
                    </svg>
                  </div>
                </div>
                */}
                {/* Chat Background */}
                <div
                  className="bg-[#E5DDD5] p-4 flex-1 flex flex-col justify-end"
                  style={{
                    height: "calc(100% - 50px)",
                    backgroundImage: "url('wp-bg.png')",
                  }}
                >
                  {/* Message Bubble */}
                  <div className="flex items-end gap-2 justify-start">

                    {/* Avatar */}
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {message.name.charAt(0)}
                    </div>
                    <div className="flex flex-col items-end max-w-[85%]">
                      {/* Message Bubble */}
                      <div className="bg-[#DCF8C6] rounded-2xl rounded-br-md px-4 py-3 shadow-sm relative">
                        <p className="text-gray-800 text-sm leading-relaxed mb-2">{message.message}</p>

                        {/* Timestamp and Read Status */}
                        <div className="flex items-center justify-end gap-1 text-xs text-gray-500">
                          <span>{message.timestamp}</span>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: position === 0 ? 1 : 0.8 }}
                            transition={{ delay: 0.3, type: "spring" }}
                          >
                          </motion.div>
                        </div>
                        {/* Message Tail */}
                        <div className="absolute -bottom-0 -right-0 w-0 h-0 border-l-[8px] border-l-[#DCF8C6] border-b-[8px] border-b-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="bg-[#F0F0F0] p-3 flex items-center gap-3 border-t border-gray-200">
                  <div className="flex-1 bg-white rounded-full px-3 py-2 text-xs text-gray-400">
                    Escribe un mensaje...
                  </div>
                  <motion.div
                    className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Card Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {messages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === index ? "bg-emerald-500" : "bg-gray-300"
              }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Current Card Info */}
      <motion.div
        className="text-center mt-4"
        key={currentIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-sm text-gray-600">
          {currentIndex + 1} de {messages.length} testimonios
        </p>
      </motion.div>
    </div>
  )
}
