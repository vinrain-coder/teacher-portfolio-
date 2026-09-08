"use client";

import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSyncExternalStore } from "react";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const toggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground transition-all hover:bg-foreground/10",
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun
        className={cn(
          "absolute size-4 transition-all",
          mounted && resolvedTheme === "dark"
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        )}
      />
      <Moon
        className={cn(
          "absolute size-4 transition-all",
          mounted && resolvedTheme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        )}
      />
    </button>
  );
}
