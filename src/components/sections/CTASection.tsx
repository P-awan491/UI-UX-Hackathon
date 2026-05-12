"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Heart, Globe } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative bg-slate-900 rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-primary font-black tracking-[0.3em] uppercase text-sm">Join the Movement</span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Ready to make a <br />
                <span className="text-primary italic">lasting</span> difference?
              </h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed">
                Your contribution, no matter the size, helps us build sustainable systems that transform entire communities for generations to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link href="/donate" className="w-full sm:w-auto">
                  <Button size="lg" variant="primary" className="w-full sm:w-auto h-20 px-12 text-xl font-black rounded-[2rem] shadow-primary/20 group">
                    Donate Now
                    <Heart size={24} className="ml-3 group-hover:scale-110 transition-transform fill-current" />
                  </Button>
                </Link>
                <Link href="/about" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-20 px-12 text-xl font-black rounded-[2rem] border-white/20 text-white hover:bg-white/10 group">
                    Our Impact
                    <Globe size={24} className="ml-3 group-hover:rotate-12 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 space-y-8">
                <p className="text-2xl font-bold text-white leading-relaxed italic">
                  &quot;We don&apos;t just provide aid; we provide the foundation for human potential.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-primary rounded-full" />
                  <p className="font-black text-primary uppercase tracking-[0.2em] text-sm">Our Philosophy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
