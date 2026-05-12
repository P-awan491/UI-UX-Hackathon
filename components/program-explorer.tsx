"use client";

import { useMemo, useState } from "react";
import type { Program } from "@/data/site";
import { ProgramCard } from "@/components/program-card";
import { cn } from "@/lib/utils";

export function ProgramExplorer({ programs }: { programs: Program[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(programs.map((program) => program.category)))];

  const filteredPrograms = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return programs.filter((program) => {
      const matchesCategory = category === "All" || program.category === category;
      const matchesQuery =
        !normalized ||
        `${program.title} ${program.summary} ${program.region} ${program.category}`
          .toLowerCase()
          .includes(normalized);

      return matchesCategory && matchesQuery;
    });
  }, [category, programs, query]);

  return (
    <div>
      <div className="glass-panel mb-8 grid gap-4 rounded-[28px] p-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <label className="block">
          <span className="sr-only">Search programs</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by region, issue, or program"
            className="min-h-12 w-full rounded-full border border-[var(--line)] bg-[var(--card)] px-5 text-sm font-bold outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-emerald-500/10"
          />
        </label>
        <div className="flex flex-wrap gap-2" aria-label="Program category filters">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={cn(
                "min-h-10 rounded-full border px-4 text-sm font-black",
                category === item
                  ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                  : "border-[var(--line)] bg-[var(--card)] text-[var(--muted)] hover:border-[var(--brand)] hover:text-[var(--brand-strong)]"
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPrograms.map((program) => (
          <ProgramCard key={program.slug} program={program} />
        ))}
      </div>

      {filteredPrograms.length === 0 ? (
        <div className="rounded-[28px] border border-[var(--line)] bg-[var(--card)] p-10 text-center">
          <h2 className="text-xl font-black">No programs found</h2>
          <p className="mt-2 text-[var(--muted)]">Try a different keyword or category.</p>
        </div>
      ) : null}
    </div>
  );
}
