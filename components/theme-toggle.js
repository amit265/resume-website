"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 flex items-center justify-center rounded-full text-secondary hover:text-primary hover:bg-black/5 dark:hover:bg-white/5 hover:scale-105 transition-all duration-300 overflow-hidden group"
      aria-label="Toggle theme"
    >
      <Sun className="absolute w-[18px] h-[18px] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] scale-100 rotate-0 dark:scale-0 dark:-rotate-90 group-hover:text-amber-500" />
      <Moon className="absolute w-[18px] h-[18px] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] scale-0 rotate-90 dark:scale-100 dark:rotate-0 group-hover:text-indigo-400" />
    </button>
  );
}
