import Image from "next/image";
import Link from "next/link";
import type { Program } from "@/data/site";
import { Button } from "@/components/ui/button";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--card)] shadow-sm">
      <Link href={`/programs/${program.slug}`} className="block overflow-hidden">
        <Image
          src={program.image}
          alt=""
          width={900}
          height={620}
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </Link>
      <div className="p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#7a4c00] dark:text-[var(--accent)]">
            {program.category}
          </span>
          <span className="text-xs font-bold text-[var(--muted)]">{program.region}</span>
        </div>
        <h3 className="text-xl font-black tracking-tight">{program.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--muted)]">{program.summary}</p>
        <p className="mt-5 border-t border-[var(--line)] pt-4 text-sm font-black text-[var(--brand-strong)]">
          {program.metric}
        </p>
        <Button href={`/programs/${program.slug}`} variant="secondary" className="mt-5 w-full">
          Learn More
        </Button>
      </div>
    </article>
  );
}
