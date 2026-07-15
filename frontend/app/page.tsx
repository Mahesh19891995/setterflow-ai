export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-cyan-400">
          SetterFlow AI
        </h1>

        <div className="flex gap-8">
          <a href="#" className="hover:text-cyan-400 transition">
            Features
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            Pricing
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            Login
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-6xl font-extrabold mb-6">
          AI Appointment Setter CRM
        </h2>

        <p className="max-w-3xl text-xl text-slate-300 mb-10">
          Manage leads, qualify prospects, schedule appointments, automate
          follow-ups, and close more deals with AI.
        </p>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition">
          Start Free Trial
        </button>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          Features
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h4 className="text-xl font-semibold mb-3">Lead Management</h4>
            <p className="text-slate-400">
              Organize and manage all your sales leads in one place.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h4 className="text-xl font-semibold mb-3">
              Appointment Scheduling
            </h4>
            <p className="text-slate-400">
              Schedule meetings with prospects quickly and efficiently.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h4 className="text-xl font-semibold mb-3">
              AI Follow-ups
            </h4>
            <p className="text-slate-400">
              Generate personalized follow-up messages using AI.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}