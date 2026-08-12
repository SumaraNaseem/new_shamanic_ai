"use client";

import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  time: string;
};

function MessageBody({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <div className="space-y-2.5">
      {lines.map((line, i) => {
        const bullet = line.match(/^[-•*]\s+(.*)$/);
        if (bullet) {
          return (
            <div
              key={i}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-[#d8efe0]"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#6bff8e] shadow-[0_0_6px_rgba(107,255,142,0.8)]" />
              <span>{bullet[1]}</span>
            </div>
          );
        }
        if (!line.trim()) return <div key={i} className="h-1" />;
        return (
          <p key={i} className="text-sm leading-relaxed text-[#d8efe0]">
            {line}
          </p>
        );
      })}
    </div>
  );
}

export default function ChatPanel({
  messages,
  onClose,
}: {
  messages: ChatMessage[];
  onClose: () => void;
}) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  return (
    <div className="glow-panel flex max-h-[260px] min-h-[200px] flex-col overflow-hidden rounded-2xl border border-[#6bff8e]/30 shadow-[0_0_28px_-10px_rgba(107,255,142,0.35)] md:max-h-[300px] md:min-h-[530px]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1d3d28]/80 px-4 py-3 md:px-5">
        <div className="flex items-center gap-2.5">
          <div className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#6bff8e]/45 bg-[#07110c] shadow-[0_0_14px_-2px_rgba(107,255,142,0.55)]">
            <Image
              src={ASSETS.element10}
              alt=""
              width={30}
              height={30}
              className="object-contain drop-shadow-[0_0_8px_rgba(107,255,142,0.7)]"
            />
          </div>
          <span className="text-sm font-semibold tracking-[0.12em] text-[#eafff0]">
            SHAMANIC AI
          </span>
          <span className="rounded-md border border-[#6bff8e]/55 px-2 py-0.5 text-[9px] font-medium tracking-[0.16em] text-[#6bff8e]">
            CONSCIOUS
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-[#3f6650] transition-colors hover:text-[#6bff8e]"
          aria-label="Close"
        >
          <X size={20} strokeWidth={1.6} />
        </button>
      </div>

      {/* Messages */}
      <div className="relative flex-1 space-y-4 overflow-y-auto px-4 py-3 md:px-5 md:py-4">
        {/* Element 10 ambient background */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 size-[220px] -translate-x-1/2 -translate-y-1/2 opacity-[0.12] sm:size-[280px]"
        >
          <Image
            src={ASSETS.element10}
            alt=""
            fill
            className="object-contain"
            sizes="280px"
          />
        </div>

        <div className="relative z-10 text-center text-[11px] text-[#5a7d68]">
          Today
        </div>

        {messages.map((m) =>
          m.role === "assistant" ? (
            <div key={m.id} className="relative z-10 flex w-full items-start justify-start gap-3">
              <div className="relative mt-0.5 size-11 shrink-0 overflow-hidden rounded-full border border-[#6bff8e]/50 shadow-[0_0_16px_-2px_rgba(107,255,142,0.55)]">
                <Image
                  src={ASSETS.shamanProfile}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>

              <div className="relative min-w-0 max-w-[min(100%,520px)] overflow-hidden rounded-xl border border-[#2f7a48]/55 bg-[#0a1610]/75 px-4 py-3.5 backdrop-blur-sm">
                <div className="mb-2.5 flex items-baseline gap-2">
                  <span className="text-sm font-medium text-[#c9f5d6]">
                    Shamanic AI
                  </span>
                  <span className="text-[11px] text-[#4c7a5c]">{m.time}</span>
                </div>
                <div className="relative z-10 pr-10">
                  <MessageBody text={m.text} />
                </div>

                <div className="pointer-events-none absolute right-1 bottom-1 size-16 opacity-45 sm:size-[72px]">
                  <Image
                    src={ASSETS.element10}
                    alt=""
                    fill
                    className="object-contain drop-shadow-[0_0_12px_rgba(107,255,142,0.5)]"
                    sizes="72px"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div key={m.id} className="relative z-10 flex w-full items-start justify-end gap-3">
              <div className="relative mt-0.5 size-10 shrink-0 overflow-hidden rounded-full border border-[#2f7a48]/60">
                <Image
                  src={ASSETS.shamanManSm}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="40px"
                />
              </div>

              <div className="min-w-0 max-w-[min(100%,440px)]">
                <div className="mb-1.5 flex items-baseline gap-2">
                  <span className="text-sm font-medium text-[#e8f5ec]">You</span>
                  <span className="text-[11px] text-[#4c7a5c]">{m.time}</span>
                </div>
                <div className="rounded-xl border border-[#2f7a48]/50 bg-[#0e1f15]/80 px-4 py-3 backdrop-blur-sm">
                  <p className="text-sm leading-relaxed text-[#d8efe0]">
                    {m.text}
                  </p>
                </div>
              </div>
            </div>
          ),
        )}
        <div ref={endRef} className="relative z-10" />
      </div>
    </div>
  );
}
