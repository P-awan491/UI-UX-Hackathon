import { programs } from "@/lib/data";
import { ProgramCard } from "@/components/shared/ProgramCard";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-24 space-y-8">
          <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Our Global Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1]">
            Empowering <span className="text-primary italic text-6xl md:text-8xl block md:inline">Communities</span> <br className="hidden md:block" />
            Across the Globe.
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            Our programs are co-designed with local leaders to ensure cultural relevance, long-term sustainability, and measurable human impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </main>
  );
}
