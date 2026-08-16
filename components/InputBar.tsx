"use client";

import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import {
  Plus,
  AudioLines,
  ChevronRight,
} from "lucide-react";
import { FaImage } from "react-icons/fa6";

type InputBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
};

export default function InputBar({ value, onChange, onSend }: InputBarProps) {
  return (
    <div className="relative w-full pb-6 sm:pb-7">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[6px] z-50 h-10 bg-bottom bg-no-repeat sm:h-12"
        style={{
          backgroundImage: `url(${ASSETS.bottomBorder})`,
          backgroundSize: "53% 100%",
        }}
      />

      <div className="glow-panel relative z-10 rounded-2xl border border-border-bright px-3.5 pt-3 pb-2.5 shadow-[0_0_24px_-8px_var(--shadow-glow)]">
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
            className="font-body w-full bg-[var(--bg-input)] py-1 text-[15px] text-fg outline-none placeholder:text-fg-dim"
            aria-label="Message"
          />
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border-accent text-accent shadow-[0_0_12px_-4px_var(--shadow-glow)] transition-colors hover:border-accent hover:bg-[color-mix(in_srgb,var(--green-core)_10%,transparent)]"
              aria-label="Add"
            >
              <Plus size={16} strokeWidth={2} />
            </button>

            <button
              type="button"
              className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border transition-colors hover:border-border-accent"
              aria-label="Ritual seal"
            >
              <Image
                src="https://res.cloudinary.com/djlpb1ld5/image/upload/w_44,h_44,c_fit,f_auto,q_auto/v1786831371/asserts_bjyiew.png"
                alt=""
                width={42}
                height={42}
                unoptimized
                className="object-contain opacity-90"
              />
            </button>

            <button
              type="button"
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-accent/85 transition-colors hover:border-border-accent hover:text-accent"
              aria-label="Attach image"
            >
              <FaImage size={15} strokeWidth={1.9} />
            </button>

            <button
              type="button"
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-accent/85 transition-colors hover:border-border-accent hover:text-accent"
              aria-label="Voice"
            >
              <AudioLines size={15} strokeWidth={1.9} />
            </button>
          </div>

          <button
            type="button"
            onClick={onSend}
            disabled={!value.trim()}
            className="flex shrink-0 items-center gap-1.5 rounded-xl border border-border-bright bg-[var(--bg-message-user)] px-5 py-2 text-sm font-semibold tracking-[0.14em] text-accent-bright shadow-[0_0_18px_-4px_var(--shadow-glow),inset_0_0_12px_var(--shadow-inset)] transition-all hover:border-accent hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:brightness-100"
          >
            SEND
            <ChevronRight size={17} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </div>
  );
}
