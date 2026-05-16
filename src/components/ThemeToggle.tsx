"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("speakup-theme");
    const shouldDark = stored === "dark";
    setDark(shouldDark);
    document.documentElement.classList.toggle("dark", shouldDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("speakup-theme", next ? "dark" : "light");
  };

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-academy-blue/15 bg-white text-academy-navy shadow-sm transition hover:border-academy-gold hover:text-academy-blue dark:border-white/15 dark:bg-white/10 dark:text-white"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
