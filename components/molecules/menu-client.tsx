"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";

interface MenuClientProps {
  desktopAvatar: React.ReactNode;
}

export default function MenuClient({ desktopAvatar }: MenuClientProps) {
  return (
    <div>
      {/* Desktop & Tablet Nav */}
      <nav className="hidden items-center gap-3 md:flex">
        <ThemeToggle />

        <Link
          href="/"
          className="body-regular text-text-body hover:text-primary"
        >
          Home
        </Link>

        <Button asChild variant="brand" size="lg">
          <Link href="/#our-doctors" className="text-text-caption-2">
            Book Appointment
          </Link>
        </Button>

        {desktopAvatar}
      </nav>

      {/* Mobile Nav (no Sheet, no Sign-in) */}
      <nav className="flex items-center gap-3 md:hidden">
        <ThemeToggle />

        <Link
          href="/"
          className="body-regular text-text-body hover:text-primary"
        >
          Home
        </Link>

        <Button asChild variant="brand" size="sm">
          <Link href="/#our-doctors" className="text-text-caption-2">
            Book Appointment
          </Link>
        </Button>

        {/* Optional menu icon if you want future expansion */}
        <EllipsisVertical className="opacity-50" />
      </nav>
    </div>
  );
}
