import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Heart } from "lucide-react";
import { Program } from "@/lib/data";
import { Button } from "@/components/ui/Button";

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const progress = (program.raised / program.goal) * 100;

  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-1000"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-6 left-6 flex gap-2">
          <span className="px-5 py-2 rounded-2xl bg-white/95 backdrop-blur-md text-xs font-black text-primary shadow-sm uppercase tracking-widest">
            {program.category}
          </span>
          <button className="p-2 rounded-2xl bg-white/95 backdrop-blur-md text-slate-400 hover:text-red-500 transition-colors shadow-sm">
            <Heart size={20} />
          </button>
        </div>
      </div>
      
      <div className="p-10 space-y-8">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
            {program.title}
          </h3>
          <p className="text-slate-500 line-clamp-2 leading-relaxed font-medium">
            {program.shortDescription}
          </p>
        </div>
        
        <div className="space-y-5">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Funding Progress</span>
              <div className="flex items-center gap-2">
                <p className="font-black text-2xl text-slate-900">${(program.raised / 1000).toFixed(1)}k</p>
                <span className="text-slate-300 font-bold">/</span>
                <p className="font-bold text-slate-400 text-sm">${(program.goal / 1000).toFixed(1)}k</p>
              </div>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 rounded-xl bg-primary/5 text-primary text-sm font-black">{Math.round(progress)}%</span>
            </div>
          </div>
          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Link href={`/programs/${program.id}`}>
          <Button variant="outline" className="w-full h-14 rounded-2xl group/btn border-slate-200 text-slate-700 hover:border-primary hover:text-primary">
            Support this Program
            <ArrowRight size={20} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
