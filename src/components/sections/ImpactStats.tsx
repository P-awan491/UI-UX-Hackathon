"use client";

import { impactStats } from "@/lib/data";
import { motion } from "framer-motion";

export function ImpactStats() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center space-y-4 hover:bg-white hover:shadow-premium hover:-translate-y-2 transition-all duration-500"
            >
              <div className="text-5xl md:text-6xl font-black text-primary flex justify-center items-baseline group-hover:scale-110 transition-transform duration-500">
                <span>{stat.value}</span>
                {stat.valueSuffix && <span className="text-2xl md:text-3xl ml-1">{stat.valueSuffix}</span>}
              </div>
              <div className="h-1 w-12 bg-secondary/30 rounded-full mx-auto group-hover:w-20 transition-all duration-500" />
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
