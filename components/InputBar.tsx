"use client";

import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import {
  Plus,
  Image as ImageIcon,
  AudioLines,
  ChevronRight,
} from "lucide-react";

type InputBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
};

export default function InputBar({ value, onChange, onSend }: InputBarProps) {
  return (
    <div className="relative w-full pb-6 sm:pb-7">
      {/* Bottom Border as background layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[6px] z-50 h-10 bg-bottom bg-no-repeat mix-blend-screen sm:h-12"
        style={{
          backgroundImage: `url(${ASSETS.bottomBorder})`,
          backgroundSize: "53% 100%",
        }}
      />

      <div className="glow-panel relative z-10 rounded-2xl border border-[#6bff8e]/35 px-3.5 pt-3 pb-2.5 shadow-[0_0_24px_-8px_rgba(107,255,142,0.35)]">
        {/* Text row */}
        <div className="mb-3 flex items-start gap-2.5 px-0.5">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSend();
              }
            }}
            placeholder="Ask anything, Shaman..."
            className="font-body w-full bg-transparent py-1 text-[15px] text-[#e8f5ec] outline-none placeholder:text-[#5a7d68]"
            aria-label="Message"
          />
        </div>

        {/* Actions row */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#2f7a48]/70 text-[#6bff8e] shadow-[0_0_12px_-4px_rgba(107,255,142,0.55)] transition-colors hover:border-[#6bff8e] hover:bg-[#6bff8e]/10"
              aria-label="Add"
            >
              <Plus size={16} strokeWidth={2} />
            </button>

            <button
              type="button"
              className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#1d3d28] transition-colors hover:border-[#2f7a48]"
              aria-label="Ritual seal"
            >
              <Image
                src={ASSETS.shamanProfile}
                alt=""
                width={22}
                height={22}
                className="object-contain opacity-90"
              />
            </button>

            <button
              type="button"
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#1d3d28] text-[#6bff8e]/85 transition-colors hover:border-[#2f7a48] hover:text-[#6bff8e]"
              aria-label="Attach image"
            >
              <ImageIcon size={15} strokeWidth={1.7} />
            </button>

            <button
              type="button"
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#1d3d28] text-[#6bff8e]/85 transition-colors hover:border-[#2f7a48] hover:text-[#6bff8e]"
              aria-label="Voice"
            >
              <AudioLines size={15} strokeWidth={1.7} />
            </button>
          </div>

          <button
            type="button"
            onClick={onSend}
            disabled={!value.trim()}
            className="flex shrink-0 items-center gap-1.5 rounded-xl border border-[#6bff8e]/55 bg-[#0e2218]/90 px-5 py-2 text-sm font-semibold tracking-[0.14em] text-[#9dffb8] shadow-[0_0_18px_-4px_rgba(107,255,142,0.7),inset_0_0_12px_rgba(107,255,142,0.08)] transition-all hover:border-[#6bff8e] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:brightness-100"
          >
            SEND
            <ChevronRight size={15} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </div>
  );
}
