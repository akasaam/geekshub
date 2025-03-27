"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { CourseCarousel } from "@/components/course-carousel"
import { TestimonialSection } from "@/components/testimonial-section"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <LoadingScreen />
      <HeroSection />

      <section className="container py-12 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Popular Courses
              </span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Explore our most sought-after courses to kickstart your tech journey
            </p>
          </div>
          <Link href="/courses">
            <Button variant="outline" className="gap-1 border-primary hover:bg-primary/5">
              View All Courses <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <CourseCarousel />
      </section>

      <StatsSection />
      <TestimonialSection />
      <CTASection />
    </div>
  )
}

