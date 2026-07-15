import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import StatsCard from "@/components/dashboard/StatsCard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row">
        <Sidebar currentPath="/dashboard" />

        <div className="flex-1 space-y-8">
          <Header />
          <StatsCard />
        </div>
      </div>
    </main>
  );
}
