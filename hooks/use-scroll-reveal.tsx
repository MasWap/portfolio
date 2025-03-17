"use client"

import { useEffect, useRef } from "react"

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  staggered?: boolean
  staggerDelay?: number
}

export function useScrollReveal({
  threshold = 0.1,
  rootMargin = "0px",
  staggered = false,
  staggerDelay = 100,
}: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (staggered && ref.current) {
              const children = Array.from(ref.current.querySelectorAll(".staggered-item"))
              children.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add("active")
                }, index * staggerDelay)
              })
            } else {
              entry.target.classList.add("active")
            }
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      if (staggered) {
        observer.observe(currentRef)
      } else {
        const elements = currentRef.querySelectorAll(".reveal")
        elements.forEach((el) => observer.observe(el))
      }
    }

    return () => {
      if (currentRef) {
        if (staggered) {
          observer.unobserve(currentRef)
        } else {
          const elements = currentRef.querySelectorAll(".reveal")
          elements.forEach((el) => observer.unobserve(el))
        }
      }
    }
  }, [threshold, rootMargin, staggered, staggerDelay])

  return ref
}

