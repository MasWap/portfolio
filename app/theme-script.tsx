"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export default function ThemeScript() {
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    // Force le thème à se mettre à jour au chargement
    const currentTheme = localStorage.getItem("theme") || "light"
    setTheme(currentTheme)

    // Ajoute un écouteur d'événements pour le bouton de thème
    const handleThemeChange = () => {
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    const themeButton = document.querySelector("[data-theme-toggle]")
    if (themeButton) {
      themeButton.addEventListener("click", handleThemeChange)
    }

    return () => {
      if (themeButton) {
        themeButton.removeEventListener("click", handleThemeChange)
      }
    }
  }, [resolvedTheme, setTheme])

  return null
}

