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
              className="flex items-start gap-2.5 text-sm leading-relaxed text-fg-body"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_6px_var(--shadow-glow)]" />
              <span>{bullet[1]}</span>
            </div>
          );
        }
        if (!line.trim()) return <div key={i} className="h-1" />;
        return (
          <p key={i} className="text-sm leading-relaxed text-fg-body">
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
    <div className="glow-panel flex max-h-[260px] min-h-[200px] flex-col overflow-hidden rounded-2xl border border-border-bright shadow-[0_0_28px_-10px_var(--shadow-glow)] md:max-h-[300px] md:min-h-[530px]">
      <div className="flex items-center justify-between border-b border-border px-4 py-3 md:px-5">
        <div className="flex items-center gap-2.5">
          <div className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border-bright bg-[var(--bg-chat-header)] shadow-[0_0_14px_-2px_var(--shadow-glow)]">
            <Image
              src={ASSETS.element10}
              alt=""
              width={30}
              height={30}
              unoptimized
              className="object-contain drop-shadow-[0_0_8px_var(--shadow-glow)]"
            />
          </div>
          <span className="text-sm font-semibold tracking-[0.12em] text-fg-bright">
            SHAMANIC AI
          </span>
          <span className="rounded-md border border-border-bright px-2 py-0.5 text-[9px] font-medium tracking-[0.16em] text-accent">
            CONSCIOUS
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-fg-faint transition-colors hover:text-accent"
          aria-label="Close"
        >
          <X size={20} strokeWidth={1.6} />
        </button>
      </div>

      <div className="relative flex-1 space-y-4 overflow-y-auto px-4 py-3 md:px-5 md:py-4">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 size-[220px] -translate-x-1/2 -translate-y-1/2 opacity-[0.12] sm:size-[280px]"
        >
          <Image
            src={ASSETS.element10}
            alt=""
            fill
            unoptimized
            className="object-contain"
            sizes="280px"
          />
        </div>

        <div className="relative z-10 text-center text-[11px] text-fg-dim">
          Today
        </div>

        {messages.map((m) =>
          m.role === "assistant" ? (
            <div key={m.id} className="relative z-10 flex w-full items-start justify-start gap-3">
              <div className="relative mt-0.5 size-11 shrink-0 overflow-hidden rounded-full border border-border-bright shadow-[0_0_16px_-2px_var(--shadow-glow)]">
                <Image
                  src="https://res.cloudinary.com/djlpb1ld5/image/upload/w_88,h_88,c_fill,f_auto,q_auto/v1786501890/shaman_profile_vl0xmt.png"
                  alt=""
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="44px"
                />
              </div>

              <div className="relative min-w-0 max-w-[min(100%,520px)] overflow-hidden rounded-xl border border-border-accent bg-[var(--bg-message)] px-4 py-3.5 backdrop-blur-sm">
                <div className="mb-2.5 flex items-baseline gap-2">
                  <span className="text-sm font-medium text-fg-soft">
                    Shamanic AI
                  </span>
                  <span className="text-[11px] text-fg-label">{m.time}</span>
                </div>
                <div className="relative z-10 pr-10">
                  <MessageBody text={m.text} />
                </div>

                <div className="pointer-events-none absolute right-1 bottom-1 size-16 opacity-45 sm:size-[72px]">
                  <Image
                    src={ASSETS.element10}
                    alt=""
                    fill
                    unoptimized
                    className="object-contain drop-shadow-[0_0_12px_var(--shadow-glow)]"
                    sizes="72px"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div key={m.id} className="relative z-10 flex w-full items-start justify-end gap-3">
              <div className="relative mt-0.5 size-10 shrink-0 overflow-hidden rounded-full border border-border-accent">
                <Image
                  src={ASSETS.shamanManSm}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover object-top"
                  sizes="40px"
                />
              </div>

              <div className="min-w-0 max-w-[min(100%,440px)]">
                <div className="mb-1.5 flex items-baseline gap-2">
                  <span className="text-sm font-medium text-fg">You</span>
                  <span className="text-[11px] text-fg-label">{m.time}</span>
                </div>
                <div className="rounded-xl border border-border-accent bg-[var(--bg-message-user)] px-4 py-3 backdrop-blur-sm">
                  <p className="text-sm leading-relaxed text-fg-body">
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
