import { PageHeader } from "@/components/page-header"
import { TestimonialCard } from "@/components/testimonial-card"

export default function TestimonialsPage() {
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
    {
      id: 5,
      name: "Mohammed Al-Farsi",
      role: "Mobile App Developer",
      content:
        "The Application Development program provided me with the skills to create my first successful mobile app. The curriculum was up-to-date with industry standards and the mentorship was invaluable.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      rating: 5,
    },
    {
      id: 6,
      name: "Sophia Chen",
      role: "College Student",
      content:
        "Starting with the Computer Fundamentals course as a complete beginner, I was amazed at how quickly I gained confidence in using technology. The step-by-step approach made learning enjoyable.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
      rating: 4,
    },
    {
      id: 7,
      name: "Robert Johnson",
      role: "Career Changer",
      content:
        "After 15 years in retail, I decided to switch to IT. GeeksHub's comprehensive programs and career guidance made this transition possible. I'm now working as a junior developer and loving it!",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop",
      rating: 5,
    },
    {
      id: 8,
      name: "Aisha Patel",
      role: "Freelance Designer",
      content:
        "The Web Development course complemented my design skills perfectly. I can now offer full-stack services to my clients, which has significantly increased my income and project opportunities.",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop",
      rating: 4,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Student Testimonials"
        description="Hear from our graduates about their learning experience at GeeksHub"
      />

      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </div>
  )
}

