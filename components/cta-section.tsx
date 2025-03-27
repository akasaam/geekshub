import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-purple-500 text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Skills?
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
              Join GeeksHub today and take the first step towards a brighter future in technology.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link href="/courses">
              <Button size="lg" variant="secondary" className="gap-1">
                Browse Courses <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

