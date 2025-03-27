"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useDraggable } from "@/hooks/use-draggable"

export function TestimonialSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { isDragging } = useDraggable(scrollContainerRef)

  const testimonials = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "Web Developer",
      content:
        "The Web Development course at GeeksHub completely transformed my career. The hands-on approach and expert guidance helped me land my dream job within months of completing the program.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
      rating: 5,
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Office Administrator",
      content:
        "I was struggling with advanced Excel functions until I took the Microsoft Office Suite course. The instructors were patient and the course materials were comprehensive. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      rating: 5,
    },
    {
      id: 3,
      name: "David Kim",
      role: "Small Business Owner",
      content:
        "The Accounting Software course was exactly what my business needed. I can now manage my finances efficiently, saving time and money. The support from GeeksHub even after course completion is outstanding.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      rating: 4,
    },
    {
      id: 4,
      name: "Jennifer Wilson",
      role: "Digital Marketing Specialist",
      content:
        "As someone who works with sensitive data, the Internet & Cyber Safety course was eye-opening. I've implemented numerous security measures learned from the course both professionally and personally.",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1989&auto=format&fit=crop",
      rating: 5,
    },
  ]

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10"></div>
        <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="border-primary/5 border-[0.5px]"
              style={{
                gridColumn: `${i * 2 + 1} / span 2`,
                gridRow: "1 / -1",
              }}
            ></div>
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="border-primary/5 border-[0.5px]"
              style={{
                gridColumn: "1 / -1",
                gridRow: `${i * 2 + 1} / span 2`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="container space-y-6 px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our graduates about their learning experience at GeeksHub
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-4 top-1/2 z-10 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background shadow-sm"
              onClick={scrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Scroll left</span>
            </Button>
          </div>
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto pb-4 pt-1 scrollbar-hide"
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="min-w-[300px] max-w-[300px] flex-none">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-card">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-sm">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background shadow-sm"
              onClick={scrollRight}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

