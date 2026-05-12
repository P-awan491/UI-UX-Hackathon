"use client";

import { impactStats } from "@/lib/data";
import { motion } from "framer-motion";

export function ImpactStats() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {impactStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-2"
            >
              <div className="text-4xl md:text-6xl font-black flex justify-center items-baseline">
                <span>{stat.value}</span>
                {stat.valueSuffix && <span className="text-2xl md:text-3xl ml-1">{stat.valueSuffix}</span>}
              </div>
              <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
