"use client";

import { useMemo, useState } from "react";
import { programs } from "@/data/site";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const amounts = [35, 80, 125, 250, 500];

export function DonationForm() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");
  const [amount, setAmount] = useState(80);
  const [customAmount, setCustomAmount] = useState("");
  const [program, setProgram] = useState(programs[0].slug);

  const selectedProgram = programs.find((item) => item.slug === program) ?? programs[0];
  const donationAmount = useMemo(() => {
    const custom = Number(customAmount);
    return custom > 0 ? custom : amount;
  }, [amount, customAmount]);

  const platformCovered = Math.round(donationAmount * 0.03);
  const total = donationAmount + platformCovered;

  return (
    <form className="grid gap-6 lg:grid-cols-[1fr_380px]" aria-label="Donation form">
      <div className="grid gap-6">
        <section className="rounded-[30px] border border-[var(--line)] bg-[var(--card)] p-5 sm:p-7">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-black tracking-tight">Choose your gift</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">Monthly gifts help partners plan with confidence.</p>
            </div>
            <div className="grid grid-cols-2 rounded-full border border-[var(--line)] bg-[var(--background)] p-1" role="group" aria-label="Donation frequency">
              {[
                ["monthly", "Monthly"],
                ["once", "One-time"]
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFrequency(value as "once" | "monthly")}
                  className={cn(
                    "min-h-10 rounded-full px-4 text-sm font-black",
                    frequency === value ? "bg-[var(--brand)] text-white" : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {amounts.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setAmount(item);
                  setCustomAmount("");
                }}
                className={cn(
                  "min-h-14 rounded-2xl border text-lg font-black",
                  !customAmount && amount === item
                    ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                    : "border-[var(--line)] bg-[var(--background)] hover:border-[var(--brand)]"
                )}
              >
                ${item}
              </button>
            ))}
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-black">Custom amount</span>
            <input
              type="number"
              min="1"
              inputMode="numeric"
              value={customAmount}
              onChange={(event) => setCustomAmount(event.target.value)}
              placeholder="Enter another amount"
              className="mt-2 min-h-12 w-full rounded-2xl border border-[var(--line)] bg-[var(--background)] px-4 font-bold outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-emerald-500/10"
            />
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-black">Direct my gift to</span>
            <select
              value={program}
              onChange={(event) => setProgram(event.target.value)}
              className="mt-2 min-h-12 w-full rounded-2xl border border-[var(--line)] bg-[var(--background)] px-4 font-bold outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-emerald-500/10"
            >
              {programs.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.title}
                </option>
              ))}
            </select>
          </label>
        </section>

        <section className="rounded-[30px] border border-[var(--line)] bg-[var(--card)] p-5 sm:p-7">
          <h2 className="text-2xl font-black tracking-tight">Donor information</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-black">First name</span>
              <input className="mt-2 min-h-12 w-full rounded-2xl border border-[var(--line)] bg-[var(--background)] px-4 outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-emerald-500/10" />
            </label>
            <label className="block">
              <span className="text-sm font-black">Last name</span>
              <input className="mt-2 min-h-12 w-full rounded-2xl border border-[var(--line)] bg-[var(--background)] px-4 outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-emerald-500/10" />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-black">Email address</span>
              <input type="email" className="mt-2 min-h-12 w-full rounded-2xl border border-[var(--line)] bg-[var(--background)] px-4 outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-emerald-500/10" />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-black">Message of support</span>
              <textarea rows={4} className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-[var(--background)] px-4 py-3 outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-emerald-500/10" />
            </label>
          </div>
          <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-[var(--muted)]">
            <input type="checkbox" className="mt-1 size-4 accent-[var(--brand)]" defaultChecked />
            Cover the estimated processing cost so more of my gift reaches the program.
          </label>
        </section>
      </div>

      <aside className="h-fit rounded-[30px] border border-[var(--line)] bg-[#10251f] p-6 text-white shadow-2xl shadow-emerald-950/20 lg:sticky lg:top-28">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--accent)]">Secure donation</p>
        <h2 className="mt-3 text-2xl font-black tracking-tight">Donation summary</h2>
        <div className="mt-6 space-y-4 rounded-[24px] bg-white/8 p-5">
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-white/68">Gift</span>
            <span className="font-black">{formatCurrency(donationAmount)}</span>
          </div>
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-white/68">Frequency</span>
            <span className="font-black">{frequency === "monthly" ? "Monthly" : "One-time"}</span>
          </div>
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-white/68">Processing support</span>
            <span className="font-black">{formatCurrency(platformCovered)}</span>
          </div>
          <div className="border-t border-white/12 pt-4">
            <div className="flex justify-between gap-4">
              <span className="font-black">Today’s total</span>
              <span className="text-2xl font-black text-[var(--accent)]">{formatCurrency(total)}</span>
            </div>
          </div>
        </div>
        <div className="mt-5 rounded-[22px] border border-white/12 p-4">
          <p className="font-black">{selectedProgram.title}</p>
          <p className="mt-2 text-sm leading-6 text-white/68">{selectedProgram.metric}</p>
        </div>
        <Button type="submit" variant="light" className="mt-6 w-full">
          Continue Securely
        </Button>
        <p className="mt-4 text-center text-xs leading-5 text-white/58">
          Demo checkout only. No payment is processed. Donor data remains local to this static template.
        </p>
      </aside>
    </form>
  );
}
