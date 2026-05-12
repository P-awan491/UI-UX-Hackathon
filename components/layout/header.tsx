"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--background)]/86 backdrop-blur-xl">
      <div className="container-shell flex h-18 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 font-black tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-2xl bg-[var(--brand)] text-white">LG</span>
          <span>Lumora Global</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-bold text-[var(--muted)] hover:bg-black/5 hover:text-[var(--foreground)] dark:hover:bg-white/10",
                pathname === link.href && "bg-black/5 text-[var(--foreground)] dark:bg-white/10"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="/donate">Donate Now</Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-[var(--line)] md:hidden"
        >
          <span className="text-lg font-black">{open ? "X" : "="}</span>
        </button>
      </div>

      {open ? (
        <div className="container-shell pb-4 md:hidden">
          <nav aria-label="Mobile navigation" className="glass-panel grid gap-2 rounded-[24px] p-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-black hover:bg-black/5 dark:hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 px-1 py-2">
              <ThemeToggle />
              <Button href="/donate" className="flex-1" onClick={() => setOpen(false)}>
                Donate Now
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
