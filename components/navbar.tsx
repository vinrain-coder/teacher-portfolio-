"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Subjects", href: "#subjects" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-2xl border border-white/40 bg-white/30 px-6 py-3 backdrop-blur-xl shadow-lg">
        {/* Brand */}
        <Link
          href="#home"
          className="text-lg font-semibold text-green-700"
        >
          Vincent Ombogo
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navItems.slice(1, -1).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-green-700 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mt-3 rounded-2xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-xl md:hidden">
          <nav className="flex flex-col divide-y">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-6 py-4 text-sm hover:bg-white/50 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
    
  );
    }
