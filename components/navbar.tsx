"use client";

import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/data";
import { Menu, X } from "lucide-react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/magic-button";
import { ThemeToggle } from "./theme-toggle";

interface NavProps {
  navItems: NavItem[];
  className?: string;
}

const NavBar: FC<NavProps> = ({ navItems, className }) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const isHomepage = pathname === "/";

  // Track scroll position for background visibility
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section tracking
  useEffect(() => {
    if (!isHomepage) return;

    const sectionIds = navItems
      .filter((item) => item.hash.startsWith("#"))
      .map((item) => item.hash.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [navItems, isHomepage]);

  const getHref = (hash: string) => {
    // If hash is already a full path (starts with /), use it directly
    if (hash.startsWith("/")) return hash;
    return isHomepage ? hash : `/${hash}`;
  };

  const isActiveLink = (hash: string) => {
    // For full paths like /about, check if current pathname matches
    if (hash.startsWith("/")) return pathname === hash;
    if (!isHomepage) return false;
    return activeSection === hash;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-5000 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/10 shadow-md"
            : "bg-transparent",
          className,
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Brand */}
            <Link href="/" className="relative group flex items-center gap-2">
              <span className="md:text-2xl font-bold">
                <span className="text-foreground">Vincent</span>
                <span className="text-primary"> Ombogo</span>
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, idx) => (
                <Link
                  key={`nav-${idx}`}
                  href={getHref(item.hash)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                    isActiveLink(item.hash)
                      ? "text-foreground bg-foreground/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5",
                  )}
                >
                  {item.name}
                  {isActiveLink(item.hash) && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full border border-foreground/20"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA + Theme Toggle + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={isHomepage ? "#contact" : "/#contact"}
                className="hidden md:block mb-8"
              >
                <MagicButton
                  title="Let's Talk"
                  icon={<FaLocationArrow />}
                  position="right"
                  otherClasses="!rounded-full !w-full md:w-auto"
                />
              </a>

              <ThemeToggle />

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-foreground/5 border border-foreground/10 text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-5001 bg-background/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-5002 w-72 max-w-[85vw] bg-background/95 backdrop-blur-2xl border-l border-border/10 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-16 md:h-20 border-b border-foreground/5">
                <span className="text-base font-semibold text-primary">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-foreground/5 border border-foreground/10 text-muted-foreground hover:text-foreground transition-all"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navItems.map((item, idx) => (
                  <Link
                    key={`mobile-${idx}`}
                    href={getHref(item.hash)}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      isActiveLink(item.hash)
                        ? "text-foreground bg-foreground/10 border border-foreground/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/5",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="px-4 py-6 border-t border-foreground/5">
                <a href={isHomepage ? "#contact" : "/#contact"}>
                  <MagicButton
                    title="Let's Talk"
                    icon={<FaLocationArrow />}
                    position="right"
                    otherClasses="!rounded-full !w-full md:w-auto"
                  />
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
