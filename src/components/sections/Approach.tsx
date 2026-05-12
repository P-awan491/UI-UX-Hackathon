"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Heart, Globe, PieChart, Users } from "lucide-react";

const features = [
  {
    title: "Transparent Tracking",
    desc: "Every dollar is tracked and tied to specific milestones on the ground.",
    icon: ShieldCheck,
    className: "md:col-span-2 md:row-span-2 bg-primary text-white",
    iconColor: "text-white",
  },
  {
    title: "Solar Powered",
    desc: "We use renewable energy to fuel our pumps and labs.",
    icon: Zap,
    className: "bg-secondary/10 text-slate-900",
    iconColor: "text-secondary",
  },
  {
    title: "Local Experts",
    desc: "Projects are led by community members.",
    icon: Users,
    className: "bg-slate-50 text-slate-900",
    iconColor: "text-primary",
  },
  {
    title: "Global Reach",
    desc: "Operating in over 24 countries with verified local partners.",
    icon: Globe,
    className: "md:col-span-2 bg-slate-900 text-white",
    iconColor: "text-primary",
  },
];

export function ApproachSection() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20 space-y-5">
          <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Our Strategy</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            A modern approach to <br />
            <span className="text-primary italic">global</span> development.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[2.5rem] flex flex-col justify-between group overflow-hidden relative ${item.className}`}
            >
              <div className={`${item.iconColor} relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                <item.icon size={32} />
              </div>
              <div className="space-y-3 relative z-10">
                <h3 className="text-2xl font-black tracking-tight">{item.title}</h3>
                <p className="font-medium opacity-70 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
              {/* Subtle background decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
