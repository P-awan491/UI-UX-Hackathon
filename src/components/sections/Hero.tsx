"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Heart } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-6 inline-block">
              Making a Difference Together
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Providing <span className="text-primary italic">Sustainable</span> Solutions for Global Impact
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            We empower remote communities through clean water, renewable energy, and digital education. Join us in building a more equitable world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/donate">
              <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-lg group">
                Support Our Mission
                <Heart size={20} className="ml-2 fill-current animate-pulse" />
              </Button>
            </Link>
            <Link href="/programs">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-16 px-10 text-lg group">
                Explore Programs
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200/60 mt-12"
          >
            {[
              { label: "Success Rate", value: "94%" },
              { label: "Global Presence", value: "24 Countries" },
              { label: "Community First", value: "100% Local" },
              { label: "Transparency", value: "Ranked A+" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
