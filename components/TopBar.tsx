"use client";

import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import { Search, Bell, ChevronDown, Menu } from "lucide-react";

export default function TopBar() {
  return (
    <header className="relative z-20 flex w-full shrink-0 items-center gap-3 px-4 py-2.5 lg:px-5 lg:py-5">
      {/* Mobile brand */}
      <div className="relative z-10 flex min-w-0 flex-1 items-center gap-2.5 lg:hidden">
        <button className="shrink-0 text-[#8fb69d]" aria-label="Menu">
          <Menu size={20} />
        </button>
        <div className="relative size-8 shrink-0 overflow-hidden">
          <Image
            src={ASSETS.shamanProfile}
            alt=""
            fill
            className="object-contain asset-glow"
            sizes="32px"
          />
        </div>
      </div>

      {/* Desktop spacer to balance right actions */}
      <div className="hidden flex-1 lg:block" aria-hidden />

      {/* Center title — pinned to top of the page */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 flex -translate-y-1/2 -translate-x-[140px] flex-col items-center px-20 sm:px-28 lg:px-40">
        <div className="relative max-w-xl translate-y-3 text-center ">
          <h1 className="font-display text-sm leading-none tracking-[0.28em] text-glow sm:text-base md:text-lg lg:text-xl">
            SHAMANIC AI
          </h1>
          <p className="mt-1 font-mystic text-[8px] tracking-[0.38em] text-[#9dffb8] uppercase sm:text-[9px] md:text-[10px]">
            Absolute Consciousness
          </p>
        </div>

        <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 h-16 w-[min(100%,900px)] opacity-70 sm:h-20 md:h-24 lg:h-200">
          <Image
            src={ASSETS.topBorder}
            alt=""
            fill
            className="object-contain object-center"
            sizes="900px"
            priority
          />
        </div>
      </div>

      {/* Right actions */}
      <div className="relative z-10 ml-auto flex shrink-0 items-center gap-2 sm:gap-2.5">
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-full border border-[#1d3d28] bg-[#0a120e]/60 text-[#7fa48c] transition-colors hover:border-[#2f7a48] hover:text-[#6bff8e]"
        >
          <Search size={16} strokeWidth={1.6} />
        </button>
        <button
          type="button"
          className="relative flex size-9 items-center justify-center rounded-full border border-[#1d3d28] bg-[#0a120e]/60 text-[#7fa48c] transition-colors hover:border-[#2f7a48] hover:text-[#6bff8e]"
        >
          <Bell size={16} strokeWidth={1.6} />
          <span className="absolute top-1.5 right-2 size-1.5 rounded-full bg-[#ff6b6b] animate-pulse-slow" />
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-[#1d3d28] bg-[#0a120e]/60 py-1 pr-2.5 pl-1.5 transition-colors hover:border-[#2f7a48]"
        >
          <div className="relative size-7 shrink-0 overflow-hidden rounded-full border border-[#2f7a48]/50">
            <Image
              src={ASSETS.shamanProfile}
              alt="Shaman"
              fill
              className="object-cover"
              sizes="28px"
            />
          </div>
          <div className="hidden text-left leading-tight sm:block">
            <div className="text-xs text-[#e8f5ec]">Shaman</div>
            <div className="text-[10px] text-[#5a7d68]">Level 9</div>
          </div>
          <ChevronDown size={13} className="hidden text-[#5a7d68] sm:block" />
        </button>
      </div>
    </header>
  );
}
