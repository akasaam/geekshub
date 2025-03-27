"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background animate-fade-in">
      <div className="relative">
        <div className="mb-8 text-4xl font-bold animate-slide-up">
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">GeeksHub</span>
        </div>

        <div className="relative h-2 w-64 overflow-hidden rounded-full bg-muted">
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-purple-400 animate-gradient"
            style={{
              animation: "progressBar 1.8s ease-in-out forwards",
              width: "0%",
            }}
          />
        </div>

        <p className="mt-4 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Loading your tech education journey...
        </p>
      </div>
    </div>
  )
}

