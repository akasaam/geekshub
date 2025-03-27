import { Clock, BarChart } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface CourseCardProps {
  course: {
    id: number
    title: string
    description: string
    image: string
    duration: string
    level: string
    price: string
  }
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div
      className="animate-fade-in hover-float transition-all duration-300"
      style={{ animationDelay: `${course.id * 0.1}s` }}
    >
      <Card className="overflow-hidden h-full">
        <div className="p-4">
          <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-card">
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
        </div>
        <CardContent className="p-4 pt-0">
          <Badge variant="outline" className="mb-2 bg-gradient-to-r from-primary/10 to-purple-400/10 text-primary">
            {course.level}
          </Badge>
          <h3 className="text-xl font-bold">{course.title}</h3>
          <p className="mt-2 text-muted-foreground">{course.description}</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {course.duration}
            </div>
            <div className="flex items-center">
              <BarChart className="mr-1 h-4 w-4" />
              {course.level}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-4">
          <div className="text-lg font-bold">{course.price}</div>
          <Button className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90">
            Enroll Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

