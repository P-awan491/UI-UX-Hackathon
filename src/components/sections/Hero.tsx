"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Heart, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 -skew-x-12 translate-x-20 pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Join 12,000+ Global Supporters
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05]">
                Changing <span className="text-primary italic">Lives</span> through <br />
                Sustainable <span className="text-secondary">Impact</span>.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                We bridge the gap between resources and remote communities. Empowering local leaders to build clean water, healthcare, and education systems that last.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              <Link href="/donate" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-16 px-12 text-xl shadow-primary/20 group">
                  Donate Now
                  <Heart size={22} className="ml-2 group-hover:scale-110 transition-transform fill-current" />
                </Button>
              </Link>
              <Link href="/programs" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-16 px-12 text-xl border-slate-300 text-slate-700 hover:border-primary group">
                  Explore Programs
                  <ArrowRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm relative">
                    <Image 
                      src={`https://i.pravatar.cc/100?u=${i + 10}`} 
                      alt="User" 
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500 italic">
                "Small acts, when multiplied by millions, can transform the world."
              </p>
            </motion.div>
          </div>

          {/* Right Content: Modern Image Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop" 
                alt="Impact" 
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Impact Cards */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-6 bg-white rounded-3xl shadow-premium border border-slate-100 flex items-center gap-4 z-20"
            >
              <div className="bg-secondary/10 p-3 rounded-2xl text-secondary">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 leading-none">100%</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Transparency</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 p-6 bg-white rounded-3xl shadow-premium border border-slate-100 flex items-center gap-4 z-20"
            >
              <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                <Users size={28} />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 leading-none">250k+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Lives Impacted</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
