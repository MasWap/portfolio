"use client"

import { useEffect } from "react"

export default function ScrollAnimations() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal")

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = reveals[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Trigger once on load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}

