"use client";

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
          className={`mb-1 flex items-center gap-1.5 text-[10px] font-medium tracking-wide text-accent sm:text-[11px] ${
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
        <div className="mt-[10px] -ml-6 flex flex-col items-end gap-0 sm:-ml-12 md:-ml-16 lg:-ml-24 xl:-ml-28 2xl:-ml-32">
          <HudBadge title="VISION ACTIVE" align="right">
            <div className="text-right text-[9px] leading-snug text-[var(--text-hud)] sm:text-[10px]">
              • SCANNING REALITY
              <br />• PATTERNS FOUND
            </div>
          </HudBadge>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Gemini_Generated_Image_mmhpnrmmhpnrmmhp.jpg"
            alt="Vision symbol"
            className="pointer-events-auto size-[90px] animate-drift rounded-xl object-cover sm:size-[110px]"
            style={{ animationDelay: "0.8s" }}
          />
        </div>
        <div className="mt-[10px] mr-6 flex flex-col items-start gap-0 sm:mr-12 md:mr-16 lg:mr-24 xl:mr-28 2xl:mr-32">
          <HudBadge title="ENERGY FLOW" delay="1.5s">
            <div className="text-[9px] text-[var(--text-hud)] sm:text-[10px]">
              OPTIMAL
            </div>
          </HudBadge>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Gemini_Generated_Image_drjpffdrjpffdrjp.jpg"
            alt="Energy flow symbol"
            className="pointer-events-auto size-[90px] animate-drift rounded-xl object-cover sm:size-[110px]"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
      </div>
    </div>
  );
}
