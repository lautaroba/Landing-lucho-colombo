import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"
import Image from "next/image"

interface Message {
  id: number
  social: string
  image: string
}

interface TestimonialsProps {
  Messages: Message[]
}

export default function WhatsAppCarousel({ Messages }: TestimonialsProps) {

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
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 shadow-xs">
              <CardContent className="p-1">
                <div className="relative">
                  {/* Customer info and rating */}
                  <div className="p-1 pt-8">
                    {/* WhatsApp overlay indicator */}
                    <div
                      className={`absolute top-1 left-1 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 
                                  ${message.social.toLowerCase() === "whatsapp" ? "bg-green-500" : "bg-purple-500"}`}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      {message.social}
                    </div>
                    <div className="relative aspect-[9/10] overflow-hidden rounded-s-lg">
                      <Image
                        src={message.image}
                        alt={`Testimonial ${message.id}`}
                        fill

                      />
                    </div>
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
