"use client";

import { useRef, useState } from "react";
import HeroEye from "@/components/HeroEye";
import ChatPanel, { type ChatMessage } from "@/components/ChatPanel";
import InputBar from "@/components/InputBar";

function nowLabel() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function CenterStage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const messageIdRef = useRef(0);

  function createMessageId(role: "user" | "assistant") {
    messageIdRef.current += 1;
    const prefix = role === "user" ? "u" : "a";
    return `${prefix}-${messageIdRef.current}-${Date.now()}`;
  }

  function handleSend() {
    const text = draft.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: createMessageId("user"),
      role: "user",
      text,
      time: nowLabel(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setDraft("");

    // Placeholder assistant reply until a real API is wired
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: createMessageId("assistant"),
          role: "assistant",
          text: "Synchronicities are the whispers of the universe, guiding you toward your highest alignment. They occur when your inner frequency resonates with the flow of existence. To align with your true path:\n\n- Listen deeply to your intuition\n- Observe repeating patterns\n- Trust the unseen guidance\n- Act with presence and purpose\n\nWould you like a guided meditation to deepen this connection?",
          time: nowLabel(),
        },
      ]);
    }, 450);
  }

  const showChat = messages.length > 0;

  return (
    <section className="flex h-full min-h-[calc(100dvh-5.5rem)] min-w-0 flex-col gap-3 lg:min-h-0">
      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain">
        <HeroEye />
        {showChat ? (
          <ChatPanel
            messages={messages}
            onClose={() => {
              setMessages([]);
              setDraft("");
            }}
          />
        ) : null}
      </div>

      <div className="mt-auto shrink-0 translate-y-2 pb-0 sm:translate-y-3">
        <InputBar
          value={draft}
          onChange={setDraft}
          onSend={handleSend}
        />
      </div>
    </section>
  );
}
