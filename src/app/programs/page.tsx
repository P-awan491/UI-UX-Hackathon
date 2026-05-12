import { programs } from "@/lib/data";
import { ProgramCard } from "@/components/shared/ProgramCard";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20 space-y-6">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Portfolio</span>
          <h1 className="text-5xl md:text-6xl font-black text-foreground">Global <span className="text-primary italic">Impact</span> Programs</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore our diverse initiatives across water, health, education, and the environment. Every program is co-designed with local communities to ensure lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </main>
  );
}
