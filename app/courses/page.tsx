import { CourseCard } from "@/components/course-card"
import { PageHeader } from "@/components/page-header"

export default function CoursesPage() {
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

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader title="Our Courses" description="Comprehensive training programs to help you master technology" />

      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  )
}

