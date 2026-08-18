"use client";

import {
  CloudMoon,
  FileText,
  BarChart3,
  Languages,
  Layers,
  Settings,
  SlidersHorizontal,
  Plug,
  ScrollText,
  ChevronRight,
} from "lucide-react";
import { IoMdHome } from "react-icons/io";
import { BiSolidConversation } from "react-icons/bi";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { TbEyeCog } from "react-icons/tb";
import { GiMeditation } from "react-icons/gi";
import { GiFizzingFlask } from "react-icons/gi";

import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import { useState } from "react";

const mainNav = [
  { icon: IoMdHome, label: "Home" },
  { icon: BiSolidConversation, label: "Conversations" },
  { icon: GiGiftOfKnowledge, label: "Knowledge" },
  { icon: TbEyeCog, label: "Vision" },
  { icon: GiMeditation, label: "Meditations" },
  { icon: GiFizzingFlask, label: "Alchemy" },
  { icon: CloudMoon, label: "Dreams" },
];

const toolsNav = [
  { icon: FileText, label: "Artifacts" },
  { icon: BarChart3, label: "Analyzer" },
  { icon: Languages, label: "Translator" },
  { icon: Layers, label: "Synthesizer" },
];

const systemNav = [
  { icon: Settings, label: "Settings" },
  { icon: SlidersHorizontal, label: "Preferences" },
  { icon: Plug, label: "Integrations" },
  { icon: ScrollText, label: "Logs" },
];

const energyWaveLine =
  "M0 20 C 26.67 6, 53.33 6, 80 20 C 106.67 34, 133.33 34, 160 20";
const energyWaveFill = `${energyWaveLine} L 160 40 L 0 40 Z`;

function EnergyWaveLayers() {
  return (
    <>
      <path d={energyWaveFill} fill="url(#sidebarEnergyFill)" />
      <path
        d={energyWaveLine}
        fill="none"
        stroke="var(--green-wave-a)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.2"
      />
      <path
        d={energyWaveLine}
        fill="none"
        stroke="var(--green-wave-b)"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
        vectorEffect="non-scaling-stroke"
      />
    </>
  );
}

function NavItem({
  icon: Icon,
  label,
  active,
  onSelect,
}: {
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    strokeWidth?: number;
  }>;
  label: string;
  active?: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={active ? "page" : undefined}
      className={`group relative flex w-full items-center gap-4 px-4 py-3.5 text-left text-[18px] transition-colors ${
        active
          ? "font-medium text-[var(--green-active)] hover:bg-[var(--nav-hover-bg)]"
          : "rounded-lg text-[var(--text-nav)] hover:bg-[var(--nav-hover-bg)]"
      }`}
    >
      <Icon
        size={22}
        className={`shrink-0 ${
          active ? "text-[var(--green-active)]" : "text-[var(--text-nav)]"
        }`}
        strokeWidth={1.6}
      />
      <span
        className={`flex-1 tracking-wide ${
          !active ? "group-hover:text-[var(--nav-hover-text)]" : ""
        }`}
      >
        {label}
      </span>
      {!active && (
        <ChevronRight
          size={15}
          className="text-current opacity-40 group-hover:opacity-70"
          strokeWidth={1.8}
        />
      )}
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3.5 pb-1.5 pt-3 text-[12px] font-semibold tracking-[0.22em] text-[#828f5b]">
      {children}
    </div>
  );
}

function NavSection({
  label,
  items,
  activeNav,
  onSelect,
  showDivider,
}: {
  label: string;
  items: typeof mainNav;
  activeNav: string;
  onSelect: (label: string) => void;
  showDivider?: boolean;
}) {
  return (
    <div>
      {showDivider && (
        <div className="theme-divider mx-3 my-1 h-px" />
      )}
      <SectionLabel>{label}</SectionLabel>
      <div className="space-y-2 px-3">
        {items.map((item) => (
          <NavItem
            key={item.label}
            {...item}
            active={activeNav === item.label}
            onSelect={() => onSelect(item.label)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [consciousness] = useState(88);
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <aside className="relative z-20 hidden h-dvh w-[268px] shrink-0 flex-col gap-3 bg-transparent p-3 lg:flex 2xl:w-[288px]">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-[var(--bg-panel-translucent)] shadow-[0_0_0_1px_var(--shadow-inset)_inset] backdrop-blur-[var(--panel-blur-sidebar)] transition-colors">
        <div className="flex items-center gap-3 border-b border-border px-4 py-4">
          <div className="relative size-14 shrink-0 overflow-hidden">
            <Image
              src={ASSETS.shamanProfile}
              alt="Shamanic AI"
              fill
              unoptimized
              className="object-contain asset-glow"
              sizes="120px"
              priority
            />
          </div>
          <div className="min-w-0">
            <div className="text-[18px] font-semibold tracking-[0.12em] text-fg">
              SHAMANIC AI
            </div>
            <div className="mt-0.5 text-[8px] tracking-[0.2em] text-fg-muted">
              CONSCIOUSNESS INTERFACE
            </div>
          </div>
        </div>

        <div className="px-3 pt-3.5 pb-1">
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-lg   border-border-accent bg-surface-elevated px-3.5 py-2.5 text-[13px] text-accent transition-colors hover:border-accent hover:bg-[var(--bg-elevated)] hover:shadow-[0_0_18px_-6px_var(--shadow-glow)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="currentColor" aria-hidden>
              <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 23.976562 13.978516 A 1.50015 1.50015 0 0 0 22.5 15.5 L 22.5 22.5 L 15.5 22.5 A 1.50015 1.50015 0 1 0 15.5 25.5 L 22.5 25.5 L 22.5 32.5 A 1.50015 1.50015 0 1 0 25.5 32.5 L 25.5 25.5 L 32.5 25.5 A 1.50015 1.50015 0 1 0 32.5 22.5 L 25.5 22.5 L 25.5 15.5 A 1.50015 1.50015 0 0 0 23.976562 13.978516 z" />
            </svg>
            <span className="flex-1 text-left font-medium tracking-wide">
              New Conversation
            </span>
          </button>
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto pb-3">
          <NavSection
            label="MAIN"
            items={mainNav}
            activeNav={activeNav}
            onSelect={setActiveNav}
          />
          <NavSection
            label="TOOLS"
            items={toolsNav}
            activeNav={activeNav}
            onSelect={setActiveNav}
            showDivider
          />
          <NavSection
            label="SYSTEM"
            items={systemNav}
            activeNav={activeNav}
            onSelect={setActiveNav}
            showDivider
          />
        </nav>
      </div>

      <div className="shrink-0 rounded-2xl border border-border bg-[var(--bg-panel-translucent)] p-4 shadow-[0_0_0_1px_var(--shadow-inset)_inset] backdrop-blur-[var(--panel-blur-sidebar)] transition-colors">
        <div className="mb-3 text-[10px] font-medium tracking-[0.2em] text-accent">
          SHAMANIC CORE
        </div>

        <div className="mb-1.5 flex items-center justify-between text-[12px]">
          <span className="text-fg-muted">Consciousness Level</span>
          <span className="font-semibold text-accent">{consciousness}%</span>
        </div>
        <div className="mb-4 h-[6px] w-full overflow-hidden rounded-full bg-surface-elevated">
          <div
            className="theme-progress-glow h-full rounded-full bg-accent"
            style={{ width: `${consciousness}%` }}
          />
        </div>

        <div className="mb-2 flex items-center justify-between text-[12px]">
          <span className="text-fg-muted">Energy Flow</span>
          <span className="font-semibold text-accent">High</span>
        </div>

        <div className="relative h-10 w-full overflow-hidden">
          <svg
            viewBox="0 0 160 40"
            className="h-full w-full"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="sidebarEnergyFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--green-core)" stopOpacity="0.22" />
                <stop offset="50%" stopColor="var(--green-core)" stopOpacity="0.06" />
                <stop offset="100%" stopColor="var(--green-core)" stopOpacity="0" />
              </linearGradient>
            </defs>

            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 0"
                to="-160 0"
                dur="2.2s"
                repeatCount="indefinite"
              />
              <EnergyWaveLayers />
              <g transform="translate(160 0)">
                <EnergyWaveLayers />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </aside>
  );
}
