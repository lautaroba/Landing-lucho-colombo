import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"

interface WhatsAppMessage {
  id: number
  name: string
  message: string
  rating: number
}

interface WhatsAppTestimonialsProps {
  Messages: WhatsAppMessage[]
}

export default function WhatsAppCarousel( { Messages } : WhatsAppTestimonialsProps) {

  return (
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {Messages.map((message) => (
            <CarouselItem key={message.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Customer info and rating */}
                    <div className="p-6 pt-12">
                      {/* WhatsApp overlay indicator */}
                      <div className=" absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        WhatsApp
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">{message.name}</h3>
                        <div className="flex items-center gap-1">
                          {[...Array(message.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm italic">"{message.message}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center mt-8 gap-4">
          <CarouselPrevious className="relative inset-0 translate-y-0 h-12 w-12 rounded-full border-2 border-gray-200 hover:border-gray-300" />
          <CarouselNext className="relative inset-0 translate-y-0 h-12 w-12 rounded-full border-2 border-gray-200 hover:border-gray-300" />
        </div>
      </Carousel>

  )
}
