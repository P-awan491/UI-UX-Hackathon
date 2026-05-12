import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Program } from "@/lib/data";
import { Button } from "@/components/ui/Button";

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const progress = (program.raised / program.goal) * 100;

  return (
    <div className="group bg-card rounded-3xl overflow-hidden border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-primary shadow-sm uppercase tracking-wider">
            {program.category}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {program.title}
        </h3>
        <p className="text-muted-foreground line-clamp-2 mb-6 leading-relaxed">
          {program.shortDescription}
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground uppercase font-semibold">Impact Goal</span>
              <p className="font-bold text-lg text-primary">{program.impactMetric}</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold">{Math.round(progress)}%</span>
            </div>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-1000" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Link href={`/programs/${program.id}`}>
          <Button variant="outline" className="w-full group/btn">
            View Details
            <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
