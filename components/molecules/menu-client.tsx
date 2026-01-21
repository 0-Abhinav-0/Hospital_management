"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/molecules/theme-toggle"

interface MenuClientProps {
  desktopAvatar: React.ReactNode;
}

export default function MenuClient({ desktopAvatar }: MenuClientProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Home */}

      <Link href="/" className="body-regular text-text-body hover:text-primary">Home</Link>


      {/* Book Appointment */}
      <Button asChild variant="default" className="h-10 px-6" size="lg">
        <Link href="/">Book Appointment</Link>
      </Button>

      {/* Sign In */}
      {desktopAvatar}
    </div>
  )
}
