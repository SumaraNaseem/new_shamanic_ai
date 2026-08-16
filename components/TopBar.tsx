"use client";

import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import { Search, Bell, ChevronDown, Menu } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function TopBar() {
  return (
    <header className="relative z-20 flex w-full shrink-0 items-center gap-3 px-4 py-2.5 lg:px-5 lg:py-5">
      <div className="relative z-10 flex min-w-0 flex-1 items-center gap-2.5 lg:hidden">
        <button className="shrink-0 text-fg-muted" aria-label="Menu">
          <Menu size={20} />
        </button>
        <div className="relative size-8 shrink-0 overflow-hidden">
          <Image
            src={ASSETS.shamanProfile}
            alt=""
            fill
            unoptimized
            className="object-contain asset-glow"
            sizes="32px"
          />
        </div>
      </div>

      <div className="hidden flex-1 lg:block" aria-hidden />

      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 flex -translate-y-1/2 -translate-x-[140px] flex-col items-center px-20 sm:px-28 lg:px-40">
        <div className="relative max-w-xl translate-y-3 text-center ">
          <h1 className="font-display text-sm leading-none tracking-[0.28em] text-glow sm:text-base md:text-lg lg:text-xl">
            SHAMANIC AI
          </h1>
          <p className="mt-1 font-mystic text-[8px] tracking-[0.38em] text-accent-bright uppercase sm:text-[9px] md:text-[10px]">
            Absolute Consciousness
          </p>
        </div>

        <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 h-16 w-[min(100%,900px)] opacity-70 sm:h-20 md:h-24 lg:h-200">
          <Image
            src={ASSETS.topBorder}
            alt=""
            fill
            unoptimized
            className="object-contain object-center"
            sizes="900px"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 ml-auto flex shrink-0 items-center gap-2 sm:gap-2.5 ">
        <ThemeToggle />
        <button
          type="button"
          className="theme-icon-btn flex size-9 items-center justify-center rounded-full border transition-colors"
        >
          <Search size={16} strokeWidth={1.6} />
        </button>
        <button
          type="button"
          className="theme-icon-btn relative flex size-9 items-center justify-center rounded-full border transition-colors"
        >
          <Bell size={16} strokeWidth={1.6} />
          <span className="absolute top-1.5 right-2 size-1.5 rounded-full bg-danger animate-pulse-slow" />
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-border bg-[var(--bg-button)] py-1 pr-2.5 pl-1.5 transition-colors hover:border-border-accent"
        >
          <div className="relative size-7 shrink-0 overflow-hidden rounded-full border border-border-accent">
            <Image
              src="https://res.cloudinary.com/djlpb1ld5/image/upload/v1786501890/shaman_profile_vl0xmt.png"
              alt="Shaman"
              fill
              unoptimized
              className="object-cover"
              sizes="28px"
            />
          </div>
          <div className="hidden text-left leading-tight sm:block">
            <div className="text-xs text-fg">Shaman</div>
            <div className="text-[10px] text-fg-dim">Level 9</div>
          </div>
          <ChevronDown size={13} className="hidden text-fg-dim sm:block" />
        </button>
      </div>
    </header>
  );
}
