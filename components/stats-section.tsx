import { Users, BookOpen, Award, Clock } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "5,000+",
      label: "Students Trained",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      value: "20+",
      label: "Courses Offered",
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "15+",
      label: "Expert Instructors",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: "10+ Years",
      label: "Industry Experience",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-400/10"></div>
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary/20 to-purple-400/20 text-primary">
                {stat.icon}
              </div>
              <h3
                className="mt-4 text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {stat.value}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

