"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"

export function useDraggable(ref: React.RefObject<HTMLElement>) {
  const [isDragging, setIsDragging] = useState(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const onMouseDown = (e: MouseEvent) => {
      setIsDragging(true)
      startX.current = e.pageX - element.offsetLeft
      scrollLeft.current = element.scrollLeft
      element.style.cursor = "grabbing"
      element.style.userSelect = "none"
    }

    const onMouseUp = () => {
      setIsDragging(false)
      element.style.cursor = "grab"
      element.style.removeProperty("user-select")
    }

    const onMouseLeave = () => {
      setIsDragging(false)
      element.style.cursor = "grab"
      element.style.removeProperty("user-select")
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      e.preventDefault()
      const x = e.pageX - element.offsetLeft
      const walk = (x - startX.current) * 2
      element.scrollLeft = scrollLeft.current - walk
    }

    element.addEventListener("mousedown", onMouseDown)
    element.addEventListener("mouseup", onMouseUp)
    element.addEventListener("mouseleave", onMouseLeave)
    element.addEventListener("mousemove", onMouseMove)

    return () => {
      element.removeEventListener("mousedown", onMouseDown)
      element.removeEventListener("mouseup", onMouseUp)
      element.removeEventListener("mouseleave", onMouseLeave)
      element.removeEventListener("mousemove", onMouseMove)
    }
  }, [ref, isDragging])

  return { isDragging }
}

