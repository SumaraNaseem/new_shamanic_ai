"use client";

import { useTheme } from "@/lib/theme";

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="size-[18px]"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M4.5 12H2.3M21.7 12H19.5M5.8 5.8 4.2 4.2M19.8 19.8l-1.6-1.6M18.2 5.8l1.6-1.6M4.2 19.8l1.6-1.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="size-[18px]"
      aria-hidden
    >
      <path
        d="M15.8 4.2a7.8 7.8 0 1 0 4 13.6A6.8 6.8 0 0 1 15.8 4.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
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
