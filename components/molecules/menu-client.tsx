"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/molecules/theme-toggle"

export default function MenuClient() {
  return (
    <div className="flex items-center gap-3">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Home */}
      <Button asChild variant="ghost" className="h-10 px-3">
        <Link href="/">Home</Link>
      </Button>

      {/* Book Appointment */}
      <Button asChild variant="brand" className="h-10 px-6">
        <Link href="/book-appointment">Book Appointment</Link>
      </Button>

      {/* Sign In */}
      <Button asChild variant="secondary" className="h-10 px-6">
        <Link href="/sign-in">Sign in</Link>
      </Button>
    </div>
  )
}
