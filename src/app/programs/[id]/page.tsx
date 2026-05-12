"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { programs } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Target, Users, TrendingUp, Calendar, Heart, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function ProgramDetailPage() {
  const params = useParams();
  const program = programs.find((p) => p.id === params.id);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-black text-slate-900">Program not found</h1>
          <Link href="/programs">
            <Button size="lg">Back to Programs</Button>
          </Link>
        </div>
      </div>
    );
  }

  const progress = (program.raised / program.goal) * 100;

  return (
    <main className="min-h-screen bg-white">
      {/* Dynamic Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-20">
          <div className="container mx-auto">
            <Link href="/programs" className="inline-flex items-center text-white/80 font-bold mb-10 hover:text-white transition-colors group">
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Programs
            </Link>
            <div className="space-y-6 max-w-4xl">
              <span className="px-6 py-2 rounded-2xl bg-primary text-white text-xs font-black uppercase tracking-[0.2em] shadow-xl">
                {program.category}
              </span >
              <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
                {program.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Main Content (Left) */}
            <div className="lg:col-span-7 space-y-20">
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-primary rounded-full" />
                  <h2 className="text-3xl font-black text-slate-900">Program Overview</h2>
                </div>
                <div className="prose prose-xl prose-slate max-w-none">
                  <p className="text-2xl text-slate-600 font-medium leading-relaxed italic">
                    {program.fullDescription}
                  </p>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed mt-10">
                    Our strategy is rooted in deep community collaboration. We don&apos;t just install hardware; we invest in human capital. By training local leaders and establishing community-managed maintenance funds, we ensure that every dollar you donate creates a legacy of self-sufficiency.
                  </p>
                </div>
              </div>

              {/* Impact Pillar Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Target, title: "Mission Goal", desc: `Directly impact ${program.impactMetric} by year-end.` },
                  { icon: Users, title: "Beneficiaries", desc: "Focusing on women, children, and marginalized groups." },
                  { icon: TrendingUp, title: "Efficiency", desc: "Minimal overhead means 94% of funds go to the field." },
                  { icon: ShieldCheck, title: "Verification", desc: "Third-party auditing of all project milestones." }
                ].map((item, i) => (
                  <div key={i} className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-premium transition-all duration-500">
                    <div className="bg-white p-4 rounded-2xl shadow-sm text-primary w-fit mb-8 group-hover:scale-110 transition-transform">
                      <item.icon size={32} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-black text-xl text-slate-900">{item.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky Sidebar CTA (Right) */}
            <aside className="lg:col-span-5">
              <div className="bg-white border border-slate-100 p-12 rounded-[3rem] shadow-premium sticky top-32 space-y-12">
                <div className="space-y-8">
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">Funding Pulse</h3>
                    <span className="px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-black tracking-widest">{Math.round(progress)}%</span>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-full bg-slate-50 rounded-full overflow-hidden p-1 border border-slate-100">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" 
                      />
                    </div>
                    <div className="flex justify-between font-black text-lg pt-2">
                      <span className="text-primary">${program.raised.toLocaleString()}</span>
                      <span className="text-slate-300">Goal: ${program.goal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-10 border-t border-slate-50">
                  <Link href="/donate">
                    <Button size="lg" className="w-full h-20 rounded-[2rem] text-2xl font-black group shadow-primary/20">
                      Support Program
                      <Heart size={24} className="ml-3 group-hover:scale-110 transition-transform fill-current" />
                    </Button>
                  </Link>
                  <div className="flex items-center justify-center gap-3 text-sm font-bold text-slate-400">
                    <ShieldCheck size={18} className="text-secondary" />
                    100% Secure, Tax-Deductible
                  </div>
                </div>

                {/* Micro Stat */}
                <div className="bg-slate-50 rounded-3xl p-8 flex items-center gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-300 shadow-sm">
                    <Calendar size={32} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Estimated Completion</p>
                    <p className="text-xl font-black text-slate-900">December 2026</p>
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
