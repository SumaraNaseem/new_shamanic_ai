"use client";

import { useTheme } from "@/lib/theme";

function SunIcon() {
  return (
    <span className="text-2xl">☀️</span>
  );
}

function MoonIcon() {
  return (
    <span className="text-2xl">🌙</span>

  );
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-icon-btn flex size-9 items-center justify-center rounded-full border transition-colors"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
