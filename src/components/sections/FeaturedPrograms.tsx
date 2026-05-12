import { programs } from "@/lib/data";
import { ProgramCard } from "@/components/shared/ProgramCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedPrograms() {
  const featured = programs.slice(0, 3);

  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl space-y-5">
            <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Our Active Impact</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Programs needing your <br />
              <span className="text-primary italic">immediate</span> support.
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              We focus on high-impact projects where every dollar directly contributes to measurable change in the community.
            </p>
          </div>
          <Link href="/programs">
            <Button variant="outline" size="lg" className="rounded-2xl group border-slate-300 text-slate-700 hover:border-primary">
              View All Programs
              <ArrowRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featured.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
