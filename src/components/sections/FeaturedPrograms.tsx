import { programs } from "@/lib/data";
import { ProgramCard } from "@/components/shared/ProgramCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedPrograms() {
  const featured = programs.slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Active Programs</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Our Current <span className="text-primary italic">Impact</span> Initiatives
            </h2>
            <p className="text-lg text-muted-foreground">
              Directly support projects that are transforming lives through sustainable innovation and community-led action.
            </p>
          </div>
          <Link href="/programs">
            <Button variant="outline" size="lg" className="rounded-full group">
              View All Programs
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featured.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
