import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface InstructorCardProps {
  instructor: {
    id: number
    name: string
    role: string
    bio: string
    image: string
    courses: string[]
  }
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <div
      className="animate-fade-in hover-float transition-all duration-300"
      style={{ animationDelay: `${instructor.id * 0.1}s` }}
    >
      <Card className="overflow-hidden h-full">
        <div className="p-4">
          <div className="relative h-[250px] w-full overflow-hidden rounded-lg bg-card">
            <img
              src={instructor.image || "/placeholder.svg"}
              alt={instructor.name}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
        </div>
        <CardContent className="p-4 pt-0">
          <h3 className="text-xl font-bold">{instructor.name}</h3>
          <p className="text-sm font-medium bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            {instructor.role}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{instructor.bio}</p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 border-t p-4">
          {instructor.courses.map((course, index) => (
            <Badge key={index} variant="secondary" className="bg-gradient-to-r from-primary/10 to-purple-400/10">
              {course}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </div>
  )
}

