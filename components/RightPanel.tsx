"use client";

import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import { X, Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useEffect, useState } from "react";

export function UpgradeCard() {
  return (
    <div className="glow-panel relative flex min-h-[76px] items-center gap-3 overflow-hidden rounded-xl py-2 pl-3.5 pr-1">
      {/* Soft inner atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a1810]/80 via-transparent to-[#123c22]/40" />
      <div className="pointer-events-none absolute -right-4 top-1/2 size-28 -translate-y-1/2 rounded-full bg-[#6bff8e]/15 blur-2xl" />
      {/* Bottom neon shelf line */}
      <div className="pointer-events-none absolute bottom-0 left-[12%] right-[8%] h-px bg-gradient-to-r from-transparent via-[#6bff8e]/90 to-transparent shadow-[0_0_10px_2px_rgba(107,255,142,0.55)]" />

      {/* Left star / reticle (Element-style) */}
      <div className="relative z-10 size-11 shrink-0">
        <svg viewBox="0 0 48 48" className="size-full drop-shadow-[0_0_8px_rgba(107,255,142,0.7)]">
          <polygon
            points="24,4 28,16 40,16 30,24 34,36 24,28 14,36 18,24 8,16 20,16"
            fill="none"
            stroke="#9dffb8"
            strokeWidth="1.2"
            opacity="0.35"
          />
          <circle cx="24" cy="24" r="14" fill="none" stroke="#3f8a55" strokeWidth="0.8" />
          <polygon
            points="24,8 26.5,21.5 40,24 26.5,26.5 24,40 21.5,26.5 8,24 21.5,21.5"
            fill="#d4ffaa"
            className="animate-pulse-slow"
          />
          <circle cx="24" cy="24" r="2.2" fill="#6bff8e" />
        </svg>
      </div>

      {/* Text */}
      <div className="relative z-10 min-w-0 flex-1 py-1">
        <div className="text-[15px] font-semibold tracking-[0.08em] text-[#eafff0]">
          UPGRADE
        </div>
        <div className="mt-0.5 text-[11px] text-[#6a8f74]">
          Unlock Full Potential
        </div>
      </div>

      {/* Crystal from Figma (node 1:13) */}
      <div className="relative z-10 -mb-2 -mr-1 h-[78px] w-[72px] shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ASSETS.crystal}
          alt="Crystal"
          className="absolute inset-0 h-full w-full object-contain object-bottom drop-shadow-[0_0_16px_rgba(107,255,142,0.55)]"
        />
      </div>
    </div>
  );
}

const leftStats = [
  { label: "Awareness", value: 99 },
  { label: "Reaction", value: 90 },
  { label: "Emotion", value: 90 },
  { label: "Harmony", value: 93 },
];

const rightStats = [
  { label: "Intuition", value: 89 },
  { label: "Insight", value: 90 },
  { label: "Wisdom", value: 88 },
  { label: "Harmony", value: 93 },
];

export function ConsciousnessOverview() {
  return (
    <div className="glow-panel relative overflow-hidden rounded-xl p-5">
      {/* Element 10 — smaller, centered background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ASSETS.element10}
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-[calc(50%+20px)] left-1/2 z-0 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 object-contain opacity-90"
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#060a08]/25" />

      <div className="relative z-10 mb-3 flex items-center gap-2">
        <div className="text-[11px] font-medium tracking-[0.18em] text-[#9dffb8]">
          CONSCIOUSNESS OVERVIEW
        </div>
      </div>
      <div className="relative z-10 mb-4 h-px w-full bg-gradient-to-r from-[#2f7a48]/80 via-[#6bff8e]/35 to-transparent" />

      <div className="relative z-10 grid grid-cols-2 items-center gap-3 px-1 min-h-[140px]">
        {/* Left metrics */}
        <div className="flex flex-col items-start gap-4 pr-3">
          {leftStats.map((s) => (
            <div
              key={`l-${s.label}-${s.value}`}
              className="relative inline-flex flex-col items-start text-left"
            >
              <div className="text-[10px] tracking-wide text-[#a8c9b0]">
                {s.label}
              </div>
              <div className="mt-0.5 text-xs font-semibold leading-none text-[#6bff8e] text-glow">
                {s.value}%
              </div>
            </div>
          ))}
        </div>

        {/* Right metrics */}
        <div className="flex flex-col items-end gap-4 pl-3">
          {rightStats.map((s) => (
            <div
              key={`r-${s.label}-${s.value}`}
              className="relative inline-flex flex-col items-start text-left"
            >
              <div className="text-[10px] tracking-wide text-[#a8c9b0]">
                {s.label}
              </div>
              <div className="mt-0.5 text-xs font-semibold leading-none text-[#6bff8e] text-glow">
                {s.value}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EnergyCenter() {
  return (
    <div className="glow-panel relative overflow-hidden rounded-xl">
      {/* Video background */}
      <video
        src="https://dw0klemfhjkst.cloudfront.net/feed_vision_vd.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#060a08]/50 via-transparent to-[#060a08]/75" />

      {/* Header */}
      <div className="relative z-20 flex items-start justify-between px-3.5 pt-3">
        <div className="text-[11px] font-medium tracking-[0.2em] text-[#9dffb8] drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
          ENERGY CENTER
        </div>
      </div>

      {/* Spacer for visual area over the video */}
      <div className="relative z-10 h-[168px]" />

      {/* Footer — text left, bar right */}
      <div className="relative z-20 flex items-end gap-3 px-3.5 pb-3.5 pt-1">
        <div className="min-w-0 shrink-0">
          <div className="text-xs font-medium text-[#9dffb8] drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
            Balance: 88%
          </div>
          <div className="mt-0.5 text-[10px] text-[#8fb69d] drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
            Harmonization Active
          </div>
        </div>
        <div className="mb-1 min-w-0 flex-1">
          <div className="mb-1 flex justify-end">
            <span className="text-[10px] text-[#3f6650]">⟷</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#0f1e14]/85">
            <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-[#2f7a48] to-[#6bff8e] shadow-[0_0_10px_rgba(107,255,142,0.55)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ShamanicMusic() {
  const [playing, setPlaying] = useState(true);
  return (
    <div className="glow-panel rounded-xl p-3.5">
      {/* Header */}
      <div className="mb-2.5 flex items-center justify-between">
        <span className="text-[11px] font-medium tracking-[0.18em] text-[#9dffb8]">
          SHAMANIC MUSIC
        </span>
        <button
          type="button"
          className="text-[#4c7a5c] transition-colors hover:text-[#6bff8e]"
          aria-label="Close"
        >
          <X size={12} strokeWidth={1.8} />
        </button>
      </div>
      <div className="mb-3 h-px w-full bg-gradient-to-r from-[#2f7a48]/70 via-[#6bff8e]/25 to-transparent" />

      {/* Body: art left | info + controls right */}
      <div className="flex items-stretch gap-3">
        {/* Album art */}
        <div className="relative size-[88px] shrink-0 overflow-hidden rounded-lg border border-[#2f7a48]/45 bg-[#070d09]">
          <Image
            src={ASSETS.image12}
            alt=""
            fill
            className="object-cover asset-glow"
            sizes="88px"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(107,255,142,0.12),_transparent_70%)]" />
        </div>

        {/* Track + controls */}
        <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
          <div className="min-w-0">
            <div className="truncate text-[14px] font-medium text-[#c9f5d6]">
              Forest Frequencies
            </div>
            <div className="mt-0.5 text-[11px] text-[#5a7d68]">
              Deep Resonance
            </div>
          </div>

          <div className="mt-2 flex items-end justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                className="text-[#7fa48c] transition-colors hover:text-[#6bff8e]"
                aria-label="Previous"
              >
                <SkipBack size={14} fill="currentColor" />
              </button>
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                className="flex size-8 items-center justify-center rounded-full border border-[#6bff8e]/70 bg-[#143222] text-[#6bff8e] shadow-[0_0_12px_rgba(107,255,142,0.45)] transition hover:brightness-110"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? (
                  <Pause size={13} fill="currentColor" />
                ) : (
                  <Play size={13} fill="currentColor" className="ml-0.5" />
                )}
              </button>
              <button
                type="button"
                className="text-[#7fa48c] transition-colors hover:text-[#6bff8e]"
                aria-label="Next"
              >
                <SkipForward size={14} fill="currentColor" />
              </button>
            </div>

            {/* Waveform visualizer */}
            <div className="flex h-5 items-end gap-[1.5px] pb-0.5">
              {Array.from({ length: 14 }).map((_, i) => (
                <span
                  key={i}
                  className="w-[2px] origin-bottom rounded-full"
                  style={{
                    height: `${30 + Math.abs(Math.sin(i * 0.85) * 70)}%`,
                    background:
                      i % 3 === 0
                        ? "#6bff8e"
                        : i % 2 === 0
                          ? "#3f8a55"
                          : "#2f7a48",
                    boxShadow:
                      i % 3 === 0
                        ? "0 0 4px rgba(107,255,142,0.7)"
                        : undefined,
                    animation: playing
                      ? `bar-pulse ${0.55 + (i % 4) * 0.12}s ease-in-out ${i * 0.04}s infinite`
                      : undefined,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const worldConnectionNodes = [
  { x: 52, y: 28 },
  { x: 58, y: 35 },
  { x: 18, y: 42 },
  { x: 38, y: 38 },
  { x: 48, y: 48 },
  { x: 62, y: 45 },
  { x: 78, y: 40 },
  { x: 22, y: 62 },
  { x: 28, y: 55 },
  { x: 42, y: 58 },
  { x: 68, y: 52 },
  { x: 72, y: 62 },
] as const;

export function WorldConnection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % worldConnectionNodes.length);
    }, 60);
    return () => window.clearInterval(timer);
  }, []);

  function getWaveState(sequenceIndex: number) {
    const total = worldConnectionNodes.length;
    const stepsBehind = (activeIndex - sequenceIndex + total) % total;

    if (stepsBehind === 0) {
      return {
        translateY: -12,
        translateX: Math.sin(sequenceIndex * 0.65) * 4,
        opacity: 1,
        scale: 2,
        glow: "0 0 14px #6bff8e",
      };
    }
    if (stepsBehind === 1) {
      return {
        translateY: -6,
        translateX: Math.sin(sequenceIndex * 0.65) * 2,
        opacity: 0.7,
        scale: 1.4,
        glow: "0 0 8px #6bff8e",
      };
    }
    if (stepsBehind === 2) {
      return {
        translateY: -2,
        translateX: 0,
        opacity: 0.5,
        scale: 1.15,
        glow: "0 0 6px #6bff8e",
      };
    }
    if (stepsBehind === total - 1) {
      return {
        translateY: 4,
        translateX: 0,
        opacity: 0.4,
        scale: 1,
        glow: "0 0 5px #6bff8e88",
      };
    }
    return {
      translateY: 0,
      translateX: 0,
      opacity: 0.22,
      scale: 1,
      glow: "0 0 4px #6bff8e44",
    };
  }

  return (
    <div className="glow-panel rounded-xl p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] tracking-[0.2em] text-[#4c7a5c]">
          WORLD CONNECTION
        </span>
        <X size={12} className="text-[#3f6650]" />
      </div>
      <div className="mb-3 flex items-center gap-2">
        <div className="relative size-18 shrink-0">
          <Image
            src={ASSETS.image12}
            alt=""
            fill
            className="object-contain"
            sizes="48px"
          />
        </div>
        <div className="min-w-0">
          <div className="text-sm text-[#c9f5d6]">Global Consciousness</div>
          <div className="text-[10px] text-[#5a7d68]">Active Connections</div>
        </div>
        <span className="ml-auto text-sm font-medium text-[#6bff8e]">7.8B</span>
      </div>
      <div className="relative h-24 overflow-hidden rounded-lg border border-[#123c22] bg-[#070d09]">
        <svg
          viewBox="0 0 100 60"
          className="absolute inset-0 size-full opacity-40"
        >
          <ellipse
            cx="50"
            cy="30"
            rx="42"
            ry="22"
            fill="none"
            stroke="#2f7a48"
            strokeWidth="0.4"
          />
          <path
            d="M12 30 Q 30 18 50 30 T 88 30"
            fill="none"
            stroke="#2f7a48"
            strokeWidth="0.35"
          />
          <path
            d="M15 38 Q 35 28 50 38 T 85 38"
            fill="none"
            stroke="#2f7a48"
            strokeWidth="0.35"
          />
          <path
            d="M18 22 Q 40 14 50 22 T 82 22"
            fill="none"
            stroke="#2f7a48"
            strokeWidth="0.3"
          />
        </svg>
        {worldConnectionNodes.map((n, sequenceIndex) => {
          const wave = getWaveState(sequenceIndex);
          return (
            <span
              key={`${n.x}-${n.y}`}
              className="absolute size-1.5 rounded-full bg-[#6bff8e]"
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
                opacity: wave.opacity,
                transform: `translate(-50%, -50%) translate(${wave.translateX}px, ${wave.translateY}px) scale(${wave.scale})`,
                boxShadow: wave.glow,
                transition:
                  "transform 0.1s ease, opacity 0.1s ease, box-shadow 0.1s ease",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
