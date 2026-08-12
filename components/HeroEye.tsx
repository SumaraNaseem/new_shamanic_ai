"use client";

import { ASSETS } from "@/lib/assets";
import Image from "next/image";

function HudBadge({
  title,
  children,
  align = "left",
  delay,
}: {
  title: string;
  children: React.ReactNode;
  align?: "left" | "right";
  delay?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`glow-panel pointer-events-auto max-w-[140px] animate-drift rounded-xl px-3 py-2.5 sm:max-w-[155px] ${
          align === "right" ? "text-right" : ""
        }`}
        style={delay ? { animationDelay: delay } : undefined}
      >
        <div
          className={`mb-1 flex items-center gap-1.5 text-[10px] font-medium tracking-wide text-[#6bff8e] sm:text-[11px] ${
            align === "right" ? "justify-center" : ""
          }`}
        >
          {title}
        </div>
        {children}
      </div>
    </div>
  );
}

export default function HeroEye() {
  return (
    <div className="relative flex flex-col items-center px-2 pb-2 pt-8 sm:pt-10 md:px-4 md:pt-32">
      <div className="pointer-events-none relative z-10 flex w-full max-w-3xl items-start justify-between gap-6">
        <div className="flex flex-col items-start gap-1">
          <HudBadge title="ENERGY FLOW" delay="1.5s">
            <div className="text-[9px] text-[#7fa48c] sm:text-[10px]">OPTIMAL</div>
          </HudBadge>
          <div className="h-12 w-22 opacity-90">
            <Image
              src={ASSETS.image13}
              alt="Shamanic Eye"
              width={48}
              height={48}
              className="h-full w-auto object-contain asset-glow"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col items-end gap-1">
          <HudBadge title="VISION ACTIVE" align="right">
            <div className="text-right text-[9px] leading-snug text-[#7fa48c] sm:text-[10px]">
              • SCANNING REALITY
              <br />• PATTERNS FOUND
            </div>
          </HudBadge>
          <div className="h-20 w-22 opacity-90">
            <Image
              src={ASSETS.image14}
              alt=""
              width={48}
              height={48}
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
