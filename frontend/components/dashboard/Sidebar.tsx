import Link from "next/link";

const links = [
  { label: "Overview", href: "/dashboard/overview" },
  { label: "Leads", href: "/dashboard/leads" },
  { label: "Schedules", href: "/dashboard/schedules" },
  { label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar({ currentPath }: { currentPath?: string }) {
  return (
    <aside className="hidden w-72 flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-slate-300 xl:flex">
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-white">Dashboard</h2>
        <p className="mt-2 text-sm text-slate-400">Quick access to your workflow tools</p>
      </div>

      <nav className="space-y-2">
        {links.map((link) => {
          const active = currentPath === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-2xl px-4 py-3 transition hover:bg-slate-900 ${
                active ? "bg-cyan-500 text-slate-950" : "text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
