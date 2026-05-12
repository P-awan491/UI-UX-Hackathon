import Image from "next/image";
import Link from "next/link";
import { partners, programs, testimonials } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ProgramCard } from "@/components/program-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatsBand } from "@/components/stats-band";

export default function HomePage() {
  const featured = programs.slice(0, 3);

  return (
    <>
      <section className="container-shell grid items-center gap-10 pb-14 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20 lg:pt-16">
        <div className="fade-up">
          <p className="mb-5 inline-flex rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--brand)]">
            Local leadership. Global solidarity.
          </p>
          <h1 className="text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Fund a brighter, fairer future for communities worldwide.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Lumora Global backs locally led programs in education, healthcare, women-led livelihoods, clean water, and disaster response with transparent funding and measurable results.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/donate" className="sm:min-w-40">
              Donate Now
            </Button>
            <Button href="/programs" variant="secondary" className="sm:min-w-40">
              Explore Programs
            </Button>
          </div>
          <div className="mt-9 grid grid-cols-3 gap-3 max-sm:text-center">
            {[
              ["91%", "to programs"],
              ["1.8M", "people reached"],
              ["42", "countries"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-[22px] border border-[var(--line)] bg-[var(--card)] p-4">
                <p className="text-2xl font-black">{value}</p>
                <p className="mt-1 text-xs font-bold text-[var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-[var(--brand)]/20 via-[var(--accent)]/24 to-[var(--rose)]/16 blur-2xl" />
          <div className="glass-panel relative overflow-hidden rounded-[34px] p-3">
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80"
              alt="Community volunteers planning programs together"
              width={1100}
              height={980}
              priority
              className="aspect-[4/4.4] w-full rounded-[26px] object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute bottom-7 left-7 right-7 rounded-[24px] bg-white/92 p-5 text-[#17211d] shadow-2xl backdrop-blur">
              <p className="text-sm font-black">This month’s match fund</p>
              <p className="mt-2 text-3xl font-black">$124,000</p>
              <p className="mt-1 text-sm text-[#4a5a53]">unlocked for education and clean water grants</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="container-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Mission"
            title="We move resources to communities closest to the work."
            text="Every Lumora program is co-designed with local partners, measured against public goals, and funded for long-term resilience, not one-off charity."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Community-led", "Local organizations define priorities, staffing, and culturally relevant support."],
              ["Radically transparent", "Donors see funding goals, progress, impact metrics, and annual financials."],
              ["Built for continuity", "Programs include training, maintenance funds, and leadership pathways."],
              ["Fast when urgent", "Pre-positioned response grants help partners act before crises deepen."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-[26px] border border-[var(--line)] bg-[var(--card)] p-6">
                <h3 className="font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-4">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured programs"
            title="Choose the kind of impact you want to make."
          />
          <Button href="/programs" variant="secondary">
            View All Programs
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="overflow-hidden rounded-[34px] bg-[#10251f] text-white">
          <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-12">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--accent)]">Donation ready</p>
              <h2 className="mt-4 text-balance text-3xl font-black tracking-tight sm:text-5xl">
                Give once, monthly, or fund a full program milestone.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-white/74">
                A streamlined donation flow helps supporters choose an amount, understand the impact, and give with confidence.
              </p>
              <Button href="/donate" variant="light" className="mt-7">
                Start Donation
              </Button>
            </div>
            <div className="grid gap-3">
              {["$35 funds school meals for a week", "$80 equips a clinic visit kit", "$250 repairs a family water point"].map((item) => (
                <div key={item} className="rounded-[22px] border border-white/10 bg-white/8 p-5 font-bold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell grid gap-6 py-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Supporter voices"
          title="Trusted by donors who care about evidence and dignity."
        />
        <div className="grid gap-4">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-[26px] border border-[var(--line)] bg-[var(--card)] p-6">
              <p className="text-lg font-bold leading-8">“{item.quote}”</p>
              <footer className="mt-4 text-sm text-[var(--muted)]">
                <span className="font-black text-[var(--foreground)]">{item.name}</span> · {item.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <p className="mb-5 text-center text-xs font-black uppercase tracking-[0.18em] text-[var(--muted)]">
          Partner and trust network
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {partners.map((partner) => (
            <Link
              href="/impact"
              key={partner}
              className="grid min-h-20 place-items-center rounded-[22px] border border-[var(--line)] bg-[var(--card)] px-3 text-center text-sm font-black text-[var(--muted)] hover:border-[var(--brand)] hover:text-[var(--brand-strong)]"
            >
              {partner}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
