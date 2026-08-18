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
        className="page-bg-layer pointer-events-none fixed inset-0 min-h-dvh w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/eyeimage2.png")',
          backgroundSize: "cover",
        }}
      />

      <Sidebar />

      <div className="relative z-10 flex min-h-0 min-w-0 flex-1 flex-col">
        <TopBar />

        <div className="mx-auto grid min-h-0 w-full max-w-[1800px] flex-1 grid-cols-1 gap-3 p-3 pb-2 md:gap-4 md:p-4 md:pb-2 lg:grid-cols-[220px_minmax(0,1fr)_270px] xl:grid-cols-[240px_minmax(0,1fr)_300px] 2xl:grid-cols-[260px_minmax(0,1fr)_320px]">
          <aside className="hidden min-h-0 flex-col overflow-y-auto overscroll-contain lg:flex">
            <div className="h-[20%] shrink-0" />
            <div className="flex flex-col gap-3">
              <ActiveRituals />
              <KnowledgeStream />
              <VisionFeed />
            </div>
          </aside>

          <CenterStage />

          <aside className="flex min-h-0 flex-col gap-3 overflow-y-auto overscroll-contain">
            <div className="flex flex-col gap-3">
              <UpgradeCard />
              <ConsciousnessOverview />
              <EnergyCenter />
              <ShamanicMusic />
              <WorldConnection />
            </div>

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
