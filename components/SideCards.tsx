"use client";

import {
  Plus,
  ChevronRight,
  ChevronLeft,
  Brain,
  Shield,
  Sparkles,
  Hexagon,
  BookOpen,
  Scale,
  Orbit,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

const rituals: { name: string; time: string; icon: LucideIcon }[] = [
  { name: "Clarity of Mind", time: "24:32", icon: Brain },
  { name: "Energy Protection", time: "15:48", icon: Shield },
  { name: "Manifestation", time: "33:12", icon: Sparkles },
];

const knowledge: { name: string; pct: number; icon: LucideIcon }[] = [
  { name: "Sacred Geometry", pct: 94, icon: Hexagon },
  { name: "Ancient Wisdom", pct: 88, icon: BookOpen },
  { name: "Universal Laws", pct: 79, icon: Scale },
  { name: "Consciousness", pct: 91, icon: Orbit },
];

export function ActiveRituals() {
  return (
    <div className="glow-panel rounded-xl p-4">
      <div className="mb-3 text-[14px] font-[600] text-green-200">
        ACTIVE RITUALS
      </div>
      <div className="space-y-2.5">
        {rituals.map((r) => {
          const Icon = r.icon;
          return (
          <div key={r.name} className="flex items-center justify-between text-md">
            <div className="flex items-center gap-2 text-fg-soft">
              <span className="icon-glow-blur">
                <Icon size={14} strokeWidth={1.6} />
              </span>
              {r.name}
            </div>
            <span className="font-body text-xs tabular-nums text-fg-dim">
              {r.time}
            </span>
          </div>
          );
        })}
      </div>
      <button className="mt-3 flex items-center gap-2 text-xs text-accent transition-colors hover:text-accent-hover">
        <Plus size={13} /> Create Ritual
      </button>
    </div>
  );
}

export function KnowledgeStream() {
  return (
    <div className="glow-panel rounded-xl p-4">
      <div className="mb-3 mb-3 text-[14px] font-[600] text-green-200">
        KNOWLEDGE STREAM
      </div>
      <div className="space-y-3">
        {knowledge.map((k) => {
          const Icon = k.icon;
          return (
          <div key={k.name}>
            <div className="mb-1 flex items-center justify-between text-md">
              <div className="flex items-center gap-2 text-fg-soft">
                <span className="icon-glow-blur">
                  <Icon size={14} strokeWidth={1.6} />
                </span>
                {k.name}
              </div>
              <span className="text-xs font-medium text-accent">{k.pct}%</span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-surface-track">
              <div
                className="theme-bar-fill h-full rounded-full"
                style={{ width: `${k.pct}%` }}
              />
            </div>
          </div>
          );
        })}
      </div>
      <button className="mt-3 flex items-center gap-2 text-xs text-accent transition-colors hover:text-accent-hover">
        <Plus size={13} /> Expand Knowledge
      </button>
    </div>
  );
}

export function VisionFeed() {
  const [idx, setIdx] = useState(1);
  return (
    <div className="glow-panel rounded-xl p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="mb-3 text-[14px] font-[600] text-green-200">
          VISION FEED
        </span>
        <ChevronRight size={13} className="text-fg-label" />
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-surface-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/Vision_feed.gif"
          alt="Vision feed"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="mt-3 flex items-center justify-center gap-3">
        <button
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
          className="text-fg-label transition-colors hover:text-accent"
        >
          <ChevronLeft size={14} />
        </button>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`size-1.5 rounded-full ${
              i === idx ? "bg-accent" : "bg-[var(--dot-inactive)]"
            }`}
          />
        ))}
        <button
          onClick={() => setIdx((i) => Math.min(2, i + 1))}
          className="text-fg-label transition-colors hover:text-accent"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
