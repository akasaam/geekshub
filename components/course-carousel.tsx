"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useDraggable } from "@/hooks/use-draggable"

export function CourseCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { isDragging } = useDraggable(scrollContainerRef)

  const courses = [
    {
      id: 1,
      title: "Computer Fundamentals",
      description: "Master the basics of computing and digital literacy",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      duration: "4 weeks",
      level: "Beginner",
      price: "₹3,999",
    },
    {
      id: 2,
      title: "Microsoft Office Suite",
      description: "Excel, Word, PowerPoint, and more for professional work",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      duration: "6 weeks",
      level: "Beginner to Intermediate",
      price: "₹5,999",
    },
    {
      id: 3,
      title: "Internet & Cyber Safety",
      description: "Learn to navigate the internet safely and protect your digital identity",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop",
      duration: "3 weeks",
      level: "All Levels",
      price: "₹2,999",
    },
    {
      id: 4,
      title: "Accounting Software",
      description: "Master popular accounting software for business",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
      duration: "8 weeks",
      level: "Intermediate",
      price: "₹7,999",
    },
    {
      id: 5,
      title: "Web Development",
      description: "Build modern websites and web applications",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop",
      duration: "12 weeks",
      level: "Intermediate to Advanced",
      price: "₹12,999",
    },
    {
      id: 6,
      title: "Application Development",
      description: "Create mobile and desktop applications",
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070&auto=format&fit=crop",
      duration: "16 weeks",
      level: "Advanced",
      price: "₹15,999",
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
        className="flex w-full space-x-4 overflow-x-auto pb-4 pt-1 scrollbar-hide"
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {courses.map((course) => (
          <Card key={course.id} className="min-w-[300px] max-w-[300px] flex-none">
            <div className="p-4">
              <div className="relative h-[160px] w-full overflow-hidden rounded-lg bg-card">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
            <CardContent className="p-4 pt-0">
              <Badge variant="outline" className="mb-2">
                {course.level}
              </Badge>
              <h3 className="text-lg font-bold">{course.title}</h3>
              <p className="text-sm text-muted-foreground">{course.description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4 pt-0">
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                {course.duration}
              </div>
              <div className="font-medium">{course.price}</div>
            </CardFooter>
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
  )
}

