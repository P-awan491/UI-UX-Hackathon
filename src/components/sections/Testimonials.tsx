"use client";

import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-white -skew-y-3 translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <span className="text-secondary font-black tracking-[0.2em] uppercase text-xs">Stories from the Field</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            The lives behind <br />
            the <span className="text-secondary italic">statistics</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 md:p-16 rounded-[3rem] shadow-premium border border-slate-100 flex flex-col gap-8 relative overflow-hidden"
            >
              <Quote size={80} className="absolute -top-4 -right-4 text-slate-50 -z-10" />
              <p className="text-xl md:text-2xl text-slate-600 font-medium italic leading-relaxed">
                &quot;{item.quote}&quot;
              </p>
              <div className="flex items-center gap-5 pt-4 border-t border-slate-50">
                <img 
                  src={item.avatar} 
                  alt={item.author} 
                  className="w-16 h-16 rounded-2xl object-cover border-4 border-slate-50 shadow-sm"
                />
                <div>
                  <h4 className="text-xl font-black text-slate-900">{item.author}</h4>
                  <p className="text-sm font-bold text-secondary uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
