import Link from "next/link";
import { navLinks, partners } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--line)] bg-[var(--card)]">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <Link href="/" className="flex items-center gap-3 font-black tracking-tight">
            <span className="grid size-10 place-items-center rounded-2xl bg-[var(--brand)] text-white">LG</span>
            <span>Lumora Global</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-6 text-[var(--muted)]">
            Funding locally led programs that help children learn, women lead, families access care, and communities recover with dignity.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {partners.slice(0, 3).map((partner) => (
              <span key={partner} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-bold text-[var(--muted)]">
                {partner}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.14em]">Navigate</h2>
          <div className="mt-4 grid gap-3 text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-[var(--muted)] hover:text-[var(--brand-strong)]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.14em]">Connect</h2>
          <div className="mt-4 grid gap-3 text-sm">
            {["Instagram", "LinkedIn", "YouTube", "Annual Report"].map((item) => (
              <a key={item} href="#" className="text-[var(--muted)] hover:text-[var(--brand-strong)]">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container-shell border-t border-[var(--line)] py-5 text-xs text-[var(--muted)]">
        © 2026 Lumora Global. Demo nonprofit template with mock content.
      </div>
    </footer>
  );
}
