"use client";

import { motion } from "framer-motion";
import { BookOpen, HeartPulse, ShieldAlert, PieChart } from "lucide-react";

const allocation = [
  { label: "Education & Literacy", value: "40%", icon: BookOpen, color: "bg-primary" },
  { label: "Health & Wellbeing", value: "35%", icon: HeartPulse, color: "bg-secondary" },
  { label: "Emergency Relief", value: "25%", icon: ShieldAlert, color: "bg-accent" },
];

export function TransparencySection() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Trust & Accountability</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Where your <span className="text-primary italic">money</span> goes.
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                We maintain a 100% transparent funding model. Every donation is tracked, and impact reports are published quarterly to ensure absolute accountability to our supporters.
              </p>
            </div>

            <div className="space-y-6">
              {allocation.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${item.color}/10 text-slate-900`}>
                        <item.icon size={20} className={item.color.replace('bg-', 'text-')} />
                      </div>
                      <span className="font-bold text-slate-700">{item.label}</span>
                    </div>
                    <span className="font-black text-slate-900">{item.value}</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.value }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-slate-50 rounded-[4rem] flex items-center justify-center relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-10"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-[40px] border-dashed border-primary rounded-full" />
              </motion.div>
              
              <div className="relative z-10 text-center space-y-4 p-12">
                <div className="w-24 h-24 bg-primary rounded-[2rem] flex items-center justify-center text-white shadow-2xl mx-auto mb-8">
                  <PieChart size={48} />
                </div>
                <h3 className="text-3xl font-black text-slate-900">Highly Efficient</h3>
                <p className="text-slate-500 font-medium">
                  We maintain one of the highest efficiency ratings in the nonprofit sector, with 94% of funds going directly to field programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
