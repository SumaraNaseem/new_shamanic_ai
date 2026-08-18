"use client";

function HudBadge({
  title,
  children,
  align = "left",
}: {
  title: string;
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`glow-panel pointer-events-auto max-w-[140px] rounded-xl px-3 py-2.5 sm:max-w-[155px] ${
        align === "right" ? "text-right" : ""
      }`}
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
  );
}

export default function HeroEye() {
  return (
    <div className="relative flex flex-col items-center px-2 pb-2 pt-8 sm:pt-10 md:px-4 md:pt-32">
      <div className="pointer-events-none relative z-10 flex w-full max-w-3xl items-start justify-between gap-6">

        {/* Left column — badge + image animate as one unit */}
        <div className="-ml-6 sm:-ml-12 md:-ml-16 lg:-ml-24 xl:-ml-28 2xl:-ml-32">
          <div
            className="pointer-events-auto flex flex-col items-end animate-drift"
            style={{ animationDelay: "0.8s" }}
          >
            <HudBadge title="VISION ACTIVE" align="right">
              <div className="text-right text-[9px] leading-snug text-[var(--text-hud)] sm:text-[10px]">
                • SCANNING REALITY
                <br />• PATTERNS FOUND
              </div>
            </HudBadge>
            <div
              className="w-[90px] sm:w-[110px]"
              style={{
                background:
                  "radial-gradient(circle at center, var(--bg-panel) 35%, transparent 70%)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Gemini_Generated_Image_mmhpnrmmhpnrmmhp.png"
                alt="Vision symbol"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Right column — badge + image animate as one unit */}
        <div className="mr-6 sm:mr-12 md:mr-16 lg:mr-24 xl:mr-28 2xl:mr-32">
          <div
            className="pointer-events-auto flex flex-col items-start animate-drift"
            style={{ animationDelay: "1.5s" }}
          >
            <HudBadge title="ENERGY FLOW">
              <div className="text-[9px] text-[var(--text-hud)] sm:text-[10px]">
                OPTIMAL
              </div>
            </HudBadge>
            <div
              className="w-[90px] sm:w-[110px]"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at center, var(--bg-panel) 25%, transparent 68%)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Gemini_Generated_Image_drjpffdrjpffdrjp.png"
                alt="Energy flow symbol"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
