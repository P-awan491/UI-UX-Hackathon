import { impactStats } from "@/data/site";

export function StatsBand() {
  return (
    <section className="container-shell">
      <div className="grid gap-3 rounded-[30px] bg-[#10251f] p-4 text-white shadow-2xl shadow-emerald-950/20 sm:grid-cols-2 lg:grid-cols-4">
        {impactStats.map((stat) => (
          <div key={stat.label} className="rounded-[22px] border border-white/10 p-5">
            <p className="text-3xl font-black text-[var(--accent)]">{stat.value}</p>
            <p className="mt-2 text-sm leading-6 text-white/72">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
