import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  testimonial: {
    id: number
    name: string
    role: string
    content: string
    image: string
    rating: number
  }
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      className="animate-fade-in hover-float transition-all duration-300"
      style={{ animationDelay: `${testimonial.id * 0.1}s` }}
    >
      <Card className="overflow-hidden h-full">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="h-14 w-14 rounded-full overflow-hidden bg-card">
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
          <p className="mt-4">{testimonial.content}</p>
        </CardContent>
      </Card>
    </div>
  )
}

