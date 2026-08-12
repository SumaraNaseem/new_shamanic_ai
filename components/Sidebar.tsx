"use client";

import {
  Plus,
  Home,
  MessageSquare,
  BookOpen,
  Eye,
  Sparkles,
  FlaskConical,
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
import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import { useState } from "react";

const mainNav = [
  { icon: Home, label: "Home" },
  { icon: MessageSquare, label: "Conversations" },
  { icon: BookOpen, label: "Knowledge" },
  { icon: Eye, label: "Vision" },
  { icon: Sparkles, label: "Meditations" },
  { icon: FlaskConical, label: "Alchemy" },
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
        stroke="#4c8a5e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.2"
      />
      <path
        d={energyWaveLine}
        fill="none"
        stroke="#6fa882"
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
      className={`group relative flex w-full items-center gap-3 px-3.5 py-[11px] text-left text-[13px] ${
        active
          ? "nav-active font-medium text-[#f2fff6]"
          : "rounded-lg text-[#8fb69d] hover:bg-white/[0.03]"
      }`}
    >
      <Icon
        size={16}
        className={`shrink-0 ${
          active ? "text-[#f2fff6]" : "text-[#6ecf8a]"
        }`}
        strokeWidth={1.6}
      />
      <span
        className={`flex-1 tracking-wide ${
          !active ? "group-hover:text-[#d8ffe6]" : ""
        }`}
      >
        {label}
      </span>
      {!active && (
        <ChevronRight
          size={13}
          className="text-current opacity-40 group-hover:opacity-70"
          strokeWidth={1.8}
        />
      )}
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3.5 pb-1.5 pt-3 text-[10px] font-medium tracking-[0.22em] text-[#3f6650]">
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
        <div className="mx-3 my-1 h-px bg-gradient-to-r from-transparent via-[#1d3d28] to-transparent" />
      )}
      <SectionLabel>{label}</SectionLabel>
      <div className="space-y-1.5 px-3">
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
      {/* Top panel: logo + nav */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[#1d3d28]/80 bg-[#070d0a]/92 shadow-[0_0_0_1px_rgba(107,255,142,0.04)_inset] backdrop-blur-md">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-[#1d3d28]/70 px-4 py-4">
          <div className="relative size-10 shrink-0 overflow-hidden">
            <Image
              src={ASSETS.shamanProfile}
              alt="Shamanic AI"
              fill
              className="object-contain asset-glow"
              sizes="40px"
              priority
            />
          </div>
          <div className="min-w-0">
            <div className="text-[13px] font-semibold tracking-[0.12em] text-[#e8f5ec]">
              SHAMANIC AI
            </div>
            <div className="mt-0.5 text-[8px] tracking-[0.2em] text-[#5a7d68]">
              CONSCIOUSNESS INTERFACE
            </div>
          </div>
        </div>

        {/* New Conversation */}
        <div className="px-3 pt-3.5 pb-1">
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-lg border border-[#2f7a48]/70 bg-[#0c1812] px-3.5 py-2.5 text-[13px] text-[#6bff8e] transition-colors hover:border-[#6bff8e]/60 hover:bg-[#102018] hover:shadow-[0_0_18px_-6px_rgba(107,255,142,0.55)]"
          >
            <Plus size={15} strokeWidth={2} />
            <span className="flex-1 text-left font-medium tracking-wide">
              New Conversation
            </span>
            <ChevronRight size={14} strokeWidth={1.8} className="opacity-70" />
          </button>
        </div>

        {/* Nav */}
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

      {/* Bottom panel: Shamanic Core */}
      <div className="shrink-0 rounded-2xl border border-[#1d3d28]/80 bg-[#070d0a]/92 p-4 shadow-[0_0_0_1px_rgba(107,255,142,0.04)_inset] backdrop-blur-md">
        <div className="mb-3 text-[10px] font-medium tracking-[0.2em] text-[#5a7d68]">
          SHAMANIC CORE
        </div>

        <div className="mb-1.5 flex items-center justify-between text-[12px]">
          <span className="text-[#8fb69d]">Consciousness Level</span>
          <span className="font-semibold text-[#6bff8e]">{consciousness}%</span>
        </div>
        <div className="mb-4 h-[6px] w-full overflow-hidden rounded-full bg-[#0c1812]">
          <div
            className="h-full rounded-full bg-[#6bff8e] shadow-[0_0_10px_2px_rgba(107,255,142,0.65),0_0_22px_4px_rgba(107,255,142,0.35)]"
            style={{ width: `${consciousness}%` }}
          />
        </div>

        <div className="mb-2 flex items-center justify-between text-[12px]">
          <span className="text-[#8fb69d]">Energy Flow</span>
          <span className="font-semibold text-[#6bff8e]">High</span>
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
                <stop offset="0%" stopColor="#6bff8e" stopOpacity="0.22" />
                <stop offset="50%" stopColor="#6bff8e" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#6bff8e" stopOpacity="0" />
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
