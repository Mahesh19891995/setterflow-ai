export default function StatsCard() {
  const stats = [
    {
      label: "Leads",
      value: "1,248",
      change: "+14%",
      description: "New leads this month",
    },
    {
      label: "Meetings",
      value: "86",
      change: "+9%",
      description: "Scheduled appointments",
    },
    {
      label: "Conversions",
      value: "34",
      change: "+6%",
      description: "Closed deals",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-sm shadow-cyan-950/10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">{stat.label}</p>
              <p className="mt-3 text-3xl font-bold text-white">{stat.value}</p>
            </div>
            <span className="rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-emerald-400">
              {stat.change}
            </span>
          </div>
          <p className="mt-4 text-sm text-slate-400">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}
