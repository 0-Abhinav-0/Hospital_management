"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme =
    theme === "system" ? systemTheme : theme

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() =>
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }
      aria-label="Toggle theme"
    >
      {currentTheme === "dark" ? <Sun /> : <Moon />}
    </Button>
  )
}
