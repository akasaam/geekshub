import { InstructorCard } from "@/components/instructor-card"
import { PageHeader } from "@/components/page-header"

export default function InstructorsPage() {
  const instructors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Web Development Lead",
      bio: "With over 10 years of industry experience, Dr. Johnson specializes in modern web technologies and frameworks.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      courses: ["Web Development", "JavaScript Fundamentals"],
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Computer Science Director",
      bio: "Former tech company CTO with a passion for teaching computer fundamentals and programming concepts.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      courses: ["Computer Fundamentals", "Python Programming"],
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Office Applications Specialist",
      bio: "Microsoft certified trainer with expertise in productivity software and business applications.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      courses: ["Microsoft Office Suite", "Business Productivity Tools"],
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Cybersecurity Expert",
      bio: "Former security consultant helping students understand the importance of digital safety and privacy.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      courses: ["Internet & Cyber Safety", "Network Security"],
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Mobile Development Instructor",
      bio: "App developer with multiple successful launches, teaching the latest in mobile application development.",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1989&auto=format&fit=crop",
      courses: ["Application Development", "iOS & Android Development"],
    },
    {
      id: 6,
      name: "Robert Taylor",
      role: "Financial Software Specialist",
      bio: "Accounting professional with deep knowledge of financial software and business applications.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      courses: ["Accounting Software", "Business Finance Applications"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Our Instructors"
        description="Meet our team of experienced technology professionals and educators"
      />

      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </section>
    </div>
  )
}

