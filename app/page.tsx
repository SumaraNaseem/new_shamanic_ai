import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import CenterStage from "@/components/CenterStage";
import {
  ActiveRituals,
  KnowledgeStream,
  VisionFeed,
} from "@/components/SideCards";
import {
  UpgradeCard,
  ConsciousnessOverview,
  EnergyCenter,
  ShamanicMusic,
  WorldConnection,
} from "@/components/RightPanel";

export default function Home() {
  return (
    <div className="relative flex h-dvh w-full overflow-hidden">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url(https://dw0klemfhjkst.cloudfront.net/Shaman%20eye%20gif.gif)" }}
      />

      <Sidebar />

      <div className="relative z-10 flex min-h-0 min-w-0 flex-1 flex-col">
        <TopBar />

        {/*
          Fixed-height shell under the top bar so the center input can stay
          pinned at the bottom while side columns scroll independently.
        */}
        <div className="mx-auto grid min-h-0 w-full max-w-[1800px] flex-1 grid-cols-1 gap-3 p-3 pb-2 md:gap-4 md:p-4 md:pb-2 lg:grid-cols-[220px_minmax(0,1fr)_270px] xl:grid-cols-[240px_minmax(0,1fr)_300px] 2xl:grid-cols-[260px_minmax(0,1fr)_320px]">
          {/* Mid-left widgets */}
          <aside className="hidden min-h-0 flex-col justify-end gap-3 overflow-y-auto overscroll-contain lg:flex">
            <ActiveRituals />
            <KnowledgeStream />
            <VisionFeed />
          </aside>

          {/* Center: hero + conditional chat + always-visible input */}
          <CenterStage />

          {/* Right widgets */}
          <aside className="flex min-h-0 flex-col gap-3 overflow-y-auto overscroll-contain">
            <div className="flex flex-col gap-3">
              <UpgradeCard />
              <ConsciousnessOverview />
              <EnergyCenter />
              <ShamanicMusic />
              <WorldConnection />
            </div>

            {/* Mobile mid-left widgets */}
            <div className="mt-3 flex flex-col gap-3 lg:hidden">
              <ActiveRituals />
              <KnowledgeStream />
              <VisionFeed />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
