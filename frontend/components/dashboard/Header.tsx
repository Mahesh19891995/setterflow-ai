export default function Header({ title = "Dashboard" }: { title?: string }) {
  return (
    <header className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-xl shadow-cyan-950/10">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Welcome back</p>
          <h1 className="mt-3 text-3xl font-bold text-white">{title}</h1>
          <p className="mt-2 text-slate-400">Welcome back, Mahesh! Here’s what’s happening with your business.</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex w-full items-center rounded-3xl border border-slate-800 bg-slate-900/95 px-4 py-3 text-slate-300 sm:w-[320px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-3 h-5 w-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
              type="search"
              placeholder="Search..."
              className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
            />
          </div>

          <button className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-200 transition hover:border-cyan-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          <button className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-4 py-3 text-sm text-white transition hover:bg-slate-800">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-cyan-400">MM</span>
            <span className="hidden sm:block">Mahesh Mamidi</span>
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Total Leads</p>
          <p className="mt-3 text-3xl font-bold text-white">120</p>
          <p className="mt-2 text-sm text-emerald-400">+12% from last month</p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">Appointments</p>
          <p className="mt-3 text-3xl font-bold text-white">34</p>
          <p className="mt-2 text-sm text-emerald-400">+8% from last month</p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Conversion Rate</p>
          <p className="mt-3 text-3xl font-bold text-white">28%</p>
          <p className="mt-2 text-sm text-emerald-400">+5% from last month</p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">Revenue</p>
          <p className="mt-3 text-3xl font-bold text-white">$24,500</p>
          <p className="mt-2 text-sm text-emerald-400">+18% from last month</p>
        </div>
      </div>
    </header>
  );
}
