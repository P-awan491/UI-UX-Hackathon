"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { programs } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Target, Users, TrendingUp, Calendar, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function ProgramDetailPage() {
  const params = useParams();
  const program = programs.find((p) => p.id === params.id);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Program not found</h1>
          <Link href="/programs">
            <Button>Back to Programs</Button>
          </Link>
        </div>
      </div>
    );
  }

  const progress = (program.raised / program.goal) * 100;

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto">
            <Link href="/programs" className="inline-flex items-center text-primary-foreground font-bold mb-8 hover:opacity-80 transition-opacity">
              <ArrowLeft size={20} className="mr-2" />
              All Programs
            </Link>
            <div className="space-y-4 max-w-4xl">
              <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest">
                {program.category}
              </span >
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                {program.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6">About the Program</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {program.fullDescription}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  Our approach is built on three pillars: community engagement, technical excellence, and long-term maintenance. We don&apos;t just build systems; we build the capacity of communities to thrive independently.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Target, title: "Our Goal", desc: `Equip ${program.impactMetric} within the first 12 months.` },
                  { icon: Users, title: "Beneficiaries", desc: "Over 12,000 community members per project site." },
                  { icon: TrendingUp, title: "Efficiency", desc: "94% of funds go directly to on-ground implementation." },
                  { icon: Calendar, title: "Duration", desc: "2-year implementation followed by 5-year monitoring." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm text-primary h-fit">
                      <item.icon size={28} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <aside className="lg:col-span-1">
              <div className="bg-card border border-slate-200/60 p-10 rounded-[2.5rem] shadow-xl shadow-primary/5 sticky top-32">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Funding Progress</h3>
                    <div className="space-y-4">
                      <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-primary" 
                        />
                      </div>
                      <div className="flex justify-between font-bold">
                        <span className="text-primary">${program.raised.toLocaleString()}</span>
                        <span className="text-muted-foreground">Target: ${program.goal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t">
                    <Link href="/donate">
                      <Button size="lg" className="w-full h-16 rounded-2xl text-xl font-bold group">
                        Donate to this Project
                        <Heart size={20} className="ml-2 group-hover:scale-110 transition-transform" />
                      </Button>
                    </Link>
                    <p className="text-center text-sm text-muted-foreground">
                      Your contribution is 100% tax-deductible.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
