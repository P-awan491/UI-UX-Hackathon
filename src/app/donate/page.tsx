"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShieldCheck, Zap, Calendar, ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const AMOUNTS = [25, 50, 100, 250, 500];

const IMPACT_PREVIEWS: Record<number, string> = {
  25: "Can provide clean drinking water for a family of 5 for one month.",
  50: "Covers the cost of primary vaccinations for 10 children in remote villages.",
  100: "Equips a student with a full solar-powered digital learning kit.",
  250: "Funds a mobile health clinic visit to an underserved rural community.",
  500: "Supports the planting of 100 indigenous trees and 2 years of maintenance."
};

export default function DonatePage() {
  const [frequency, setFrequency] = React.useState<"one-time" | "monthly">("monthly");
  const [selectedAmount, setSelectedAmount] = React.useState<number | null>(100);
  const [customAmount, setCustomAmount] = React.useState("");

  const displayAmount = customAmount ? parseFloat(customAmount) : selectedAmount;
  const impactText = displayAmount && IMPACT_PREVIEWS[displayAmount as keyof typeof IMPACT_PREVIEWS] 
    ? IMPACT_PREVIEWS[displayAmount as keyof typeof IMPACT_PREVIEWS] 
    : "Your contribution helps us provide critical resources to communities in need.";

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column: Context & Trust */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Transform a Life</span>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1]">
                Your support <br />
                <span className="text-primary italic">saves lives</span>.
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                100% of your donation goes directly to field programs. Every dollar counts towards bringing clean water, health, and education to those who need it most.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "Highly Secure", desc: "Industry-standard SSL encryption for all transactions." },
                { icon: Zap, title: "Immediate Deployment", desc: "Funds are deployed to the field within 48 hours." },
                { icon: Heart, title: "Tax Deductible", desc: "We are a registered 501(c)(3) nonprofit organization." },
                { icon: Lock, title: "Privacy Guaranteed", desc: "Your personal data is never shared or sold." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-8 bg-white rounded-3xl border border-slate-100 shadow-soft">
                  <div className="bg-primary/5 p-3 rounded-2xl text-primary h-fit">
                    <item.icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 bg-primary/5 rounded-[2.5rem] border border-primary/10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10 space-y-4">
                <p className="italic text-primary font-bold text-xl leading-relaxed">
                  &quot;Your contribution isn&apos;t just a donation; it&apos;s a partnership in human progress. Together, we are building a more equitable world.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/100?u=director" alt="Director" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                  <div>
                    <p className="font-black text-slate-900 text-sm">Marcus V.</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Executive Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Donation Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[3rem] p-10 md:p-14 shadow-premium border border-slate-100 sticky top-32"
          >
            <div className="space-y-12">
              {/* Frequency Toggle */}
              <div className="flex p-2 bg-slate-50 rounded-2xl border border-slate-100">
                {(["one-time", "monthly"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    className={cn(
                      "flex-1 py-4 text-sm font-black rounded-xl transition-all capitalize tracking-widest",
                      frequency === f 
                        ? "bg-white text-primary shadow-premium" 
                        : "text-slate-400 hover:text-slate-600"
                    )}
                  >
                    {f === "monthly" ? "Give Monthly" : "One-Time"}
                  </button>
                ))}
              </div>

              {/* Amount Selector */}
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <h3 className="text-xl font-black text-slate-900">Choose an amount</h3>
                  {frequency === "monthly" && (
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">Most Impactful</span>
                  )}
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount("");
                      }}
                      className={cn(
                        "py-6 rounded-3xl font-black text-2xl border-2 transition-all relative overflow-hidden",
                        selectedAmount === amt && !customAmount
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-slate-50 bg-slate-50 hover:border-primary/30 text-slate-500"
                      )}
                    >
                      ${amt}
                      {selectedAmount === amt && !customAmount && (
                        <motion.div layoutId="check" className="absolute top-2 right-2 text-primary">
                          <CheckCircle2 size={16} />
                        </motion.div>
                      )}
                    </button>
                  ))}
                  <div className="relative col-span-3">
                    <span className="absolute left-8 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-400">$</span>
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full h-24 pl-14 pr-8 rounded-[2rem] border-2 border-slate-50 bg-slate-50 text-2xl font-black focus:border-primary focus:bg-white outline-none transition-all placeholder:text-slate-300"
                    />
                  </div>
                </div>
              </div>

              {/* Impact Preview */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={displayAmount}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-8 bg-secondary/5 rounded-3xl border border-secondary/10 flex gap-4 items-start"
                >
                  <div className="p-2 bg-secondary/10 rounded-xl text-secondary mt-1">
                    <Heart size={20} fill="currentColor" />
                  </div>
                  <p className="text-slate-700 font-bold leading-relaxed italic">
                    {impactText}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Summary & Action */}
              <div className="space-y-8 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center px-2">
                  <div>
                    <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">Your Contribution</p>
                    <p className="text-4xl font-black text-slate-900">${displayAmount || 0}<span className="text-lg text-slate-300 ml-1">/ {frequency === "monthly" ? "mo" : "once"}</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">Processing</p>
                    <p className="text-lg font-bold text-slate-900">Encrypted</p>
                  </div>
                </div>
                
                <Button size="lg" className="w-full h-20 rounded-[2rem] text-2xl font-black group shadow-primary/20">
                  Complete Donation
                  <ArrowRight size={28} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>

                <div className="flex items-center justify-center gap-6">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6 opacity-30 grayscale hover:grayscale-0 transition-all cursor-pointer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-30 grayscale hover:grayscale-0 transition-all cursor-pointer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8 opacity-30 grayscale hover:grayscale-0 transition-all cursor-pointer" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
