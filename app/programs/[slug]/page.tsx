import Image from "next/image";
import { notFound } from "next/navigation";
import { programs } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import { ProgramCard } from "@/components/program-card";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    return {};
  }

  return {
    title: program.title,
    description: program.summary
  };
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    notFound();
  }

  const related = programs.filter((item) => item.slug !== program.slug).slice(0, 3);

  return (
    <>
      <section className="container-shell py-10">
        <div className="overflow-hidden rounded-[34px] border border-[var(--line)] bg-[var(--card)]">
          <div className="relative min-h-[420px]">
            <Image
              src={program.image}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/28 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10 lg:p-12">
              <p className="mb-3 inline-flex rounded-full bg-white/16 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] backdrop-blur">
                {program.category} · {program.region}
              </p>
              <h1 className="max-w-4xl text-balance text-4xl font-black tracking-tight sm:text-6xl">
                {program.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/82">{program.summary}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell grid gap-8 py-8 lg:grid-cols-[1fr_380px]">
        <article className="rounded-[30px] border border-[var(--line)] bg-[var(--card)] p-6 sm:p-8">
          <h2 className="text-2xl font-black tracking-tight">Program overview</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{program.description}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {program.impact.map((item) => (
              <div key={item.label} className="rounded-[24px] bg-[var(--background)] p-5">
                <p className="text-3xl font-black text-[var(--brand-strong)]">{item.value}</p>
                <p className="mt-2 text-sm font-bold text-[var(--muted)]">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[26px] bg-[var(--accent-soft)] p-6">
            <h3 className="font-black text-[#664100] dark:text-[var(--accent)]">How your support helps</h3>
            <p className="mt-3 text-sm leading-6 text-[#6c5a37] dark:text-white/78">
              Donations are pooled into milestone grants that cover local staff, supplies, transport, community training, and verified follow-up reporting.
            </p>
          </div>
        </article>

        <aside className="h-fit rounded-[30px] border border-[var(--line)] bg-[var(--card)] p-6 shadow-sm lg:sticky lg:top-28">
          <h2 className="text-xl font-black">Fund this program</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{program.metric}</p>
          <div className="mt-6">
            <ProgressBar raised={program.raised} goal={program.goal} />
          </div>
          <div className="mt-6 grid gap-3">
            <Button href={`/donate?program=${program.slug}`} className="w-full">
              Donate to this program
            </Button>
            <Button href="/programs" variant="secondary" className="w-full">
              Compare programs
            </Button>
          </div>
          <div className="mt-6 rounded-[22px] border border-[var(--line)] p-4">
            <p className="text-sm font-black">Share or rally support</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Invite a team, workplace, or faith community to co-fund the next milestone.
            </p>
          </div>
        </aside>
      </section>

      <section className="container-shell py-12">
        <div className="mb-7 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--brand)]">Related programs</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">More ways to help</h2>
          </div>
          <Button href="/donate" variant="secondary">
            Give Today
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <ProgramCard key={item.slug} program={item} />
          ))}
        </div>
      </section>
    </>
  );
}
