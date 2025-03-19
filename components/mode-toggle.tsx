"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Hydration fix
    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Simple toggle function
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    if (!mounted) {
        return (
            <Button variant="outline" size="icon" className="rounded-full focus-visible:ring-0 border-accent/50">
                <Sun className="h-[1.2rem] w-[1.2rem] text-accent" />
                <span className="sr-only">Changer de thème</span>
            </Button>
        )
    }

    return (
        <Button
            variant="outline"
            size="icon"
            className="rounded-full focus-visible:ring-0 border-accent/50"
            onClick={toggleTheme}
        >
            {theme === "dark" ? (
                <Moon className="h-[1.2rem] w-[1.2rem] text-accent" />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] text-accent" />
            )}
            <span className="sr-only">Changer de thème</span>
        </Button>
    )
}
