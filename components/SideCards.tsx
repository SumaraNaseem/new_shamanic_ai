"use client";

import { Flame, Plus, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const rituals = [
  { name: "Clarity of Mind", time: "24:32" },
  { name: "Energy Protection", time: "15:48" },
  { name: "Manifestation", time: "33:12" },
];

const knowledge = [
  { name: "Sacred Geometry", pct: 94 },
  { name: "Ancient Wisdom", pct: 88 },
  { name: "Universal Laws", pct: 79 },
  { name: "Consciousness", pct: 91 },
];

export function ActiveRituals() {
  return (
    <div className="glow-panel rounded-xl p-4">
      <div className="mb-3 text-[11px] tracking-[0.2em] text-[#4c7a5c]">
        ACTIVE RITUALS
      </div>
      <div className="space-y-2.5">
        {rituals.map((r) => (
          <div key={r.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-[#c9f5d6]">
              <Flame size={14} className="text-[#6bff8e]" strokeWidth={1.6} />
              {r.name}
            </div>
            <span className="font-body text-xs tabular-nums text-[#5a7d68]">
              {r.time}
            </span>
          </div>
        ))}
      </div>
      <button className="mt-3 flex items-center gap-2 text-xs text-[#6bff8e] transition-colors hover:text-[#a6ffb8]">
        <Plus size={13} /> Create Ritual
      </button>
    </div>
  );
}

export function KnowledgeStream() {
  return (
    <div className="glow-panel rounded-xl p-4">
      <div className="mb-3 text-[11px] tracking-[0.2em] text-[#4c7a5c]">
        KNOWLEDGE STREAM
      </div>
      <div className="space-y-3">
        {knowledge.map((k) => (
          <div key={k.name}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-[#c9f5d6]">
                <span className="flex size-2.5 items-center justify-center rounded-full border border-[#6bff8e]">
                  <span className="size-1 rounded-full bg-[#6bff8e]" />
                </span>
                {k.name}
              </div>
              <span className="text-xs font-medium text-[#6bff8e]">{k.pct}%</span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-[#0f1e14]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#2f7a48] to-[#6bff8e] shadow-[0_0_8px_rgba(107,255,142,0.5)]"
                style={{ width: `${k.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <button className="mt-3 flex items-center gap-2 text-xs text-[#6bff8e] transition-colors hover:text-[#a6ffb8]">
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
        <span className="text-[11px] tracking-[0.2em] text-[#4c7a5c]">
          VISION FEED
        </span>
        <ChevronRight size={13} className="text-[#4c7a5c]" />
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#123c22]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/Vision_feed.gif"
          alt="Vision feed"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,_rgba(107,255,142,0.06),_transparent_70%)]" />
      </div>
      <div className="mt-3 flex items-center justify-center gap-3">
        <button
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
          className="text-[#4c7a5c] hover:text-[#6bff8e]"
        >
          <ChevronLeft size={14} />
        </button>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`size-1.5 rounded-full ${
              i === idx ? "bg-[#6bff8e]" : "bg-[#2f4a37]"
            }`}
          />
        ))}
        <button
          onClick={() => setIdx((i) => Math.min(2, i + 1))}
          className="text-[#4c7a5c] hover:text-[#6bff8e]"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
