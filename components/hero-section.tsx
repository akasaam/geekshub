import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-400/10"></div>
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
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                  Master Technology
                </span>{" "}
                at GeeksHub
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Transform your future with our comprehensive computer training programs. Learn from industry experts and
                gain practical skills.
              </p>
            </div>
            <div
              className="flex flex-col gap-2 min-[400px]:flex-row animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link href="/courses">
                <Button
                  size="lg"
                  className="gap-1 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90"
                >
                  Explore Courses <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-primary hover:bg-primary/5">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]">
              <div className="p-4 h-full">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                  alt="Students learning at GeeksHub"
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

