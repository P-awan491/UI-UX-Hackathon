"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Zap, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const AMOUNTS = [25, 50, 100, 250, 500];

export default function DonatePage() {
  const [frequency, setFrequency] = React.useState<"one-time" | "monthly">("monthly");
  const [selectedAmount, setSelectedAmount] = React.useState<number | null>(100);
  const [customAmount, setCustomAmount] = React.useState("");

  const displayAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900/50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Context & Trust */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Make an Impact</span>
              <h1 className="text-5xl font-black text-foreground">Your support <span className="text-primary italic">saves lives</span>.</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                100% of your donation goes directly to field programs. Every dollar counts towards bringing clean water and sustainable energy to those who need it most.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "100% Transparent", desc: "View our financial reports anytime." },
                { icon: Zap, title: "Immediate Action", desc: "Funds deployed within 48 hours." },
                { icon: Heart, title: "Tax Deductible", desc: "Official receipt provided immediately." },
                { icon: Calendar, title: "Cancel Anytime", desc: "Full control over monthly gifts." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary h-fit">
                    <item.icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10">
              <p className="italic text-primary font-medium text-lg">
                &quot;We were able to install 12 new solar pumps last month thanks to recurring donors like you. This provided clean water to 3,400 people.&quot;
              </p>
              <p className="mt-4 font-bold text-sm">— Marcus V., Field Director</p>
            </div>
          </div>

          {/* Right Column: Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary/10 border border-slate-200/60 sticky top-32"
          >
            <div className="space-y-10">
              {/* Frequency Toggle */}
              <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                {(["one-time", "monthly"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    className={cn(
                      "flex-1 py-3 text-sm font-bold rounded-xl transition-all capitalize",
                      frequency === f ? "bg-white dark:bg-slate-700 text-primary shadow-md" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {f.replace("-", " ")}
                  </button>
                ))}
              </div>

              {/* Amount Selector */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold">Choose an amount</h3>
                <div className="grid grid-cols-3 gap-4">
                  {AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount("");
                      }}
                      className={cn(
                        "py-4 rounded-2xl font-black text-xl border-2 transition-all",
                        selectedAmount === amt && !customAmount
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-slate-100 dark:border-slate-800 hover:border-primary/50"
                      )}
                    >
                      ${amt}
                    </button>
                  ))}
                  <div className="relative col-span-3">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-muted-foreground">$</span>
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full h-20 pl-12 pr-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-transparent text-2xl font-bold focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="space-y-6 pt-4">
                <div className="flex justify-between items-center px-2">
                  <span className="text-muted-foreground font-medium">Your donation:</span>
                  <span className="text-3xl font-black text-primary">${displayAmount || 0}</span>
                </div>
                
                <Button size="lg" className="w-full h-16 rounded-2xl text-xl font-bold group">
                  Complete Donation
                  <ArrowRight size={24} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                  <ShieldCheck size={18} className="text-emerald-500" />
                  Secure, encrypted SSL payment
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
