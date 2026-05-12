import Image from "next/image";
import { impactStats, team, timeline } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Impact & About",
  description: "Learn about Lumora Global's mission, transparency model, team, and measurable impact."
};

export default function ImpactPage() {
  return (
    <>
      <section className="container-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About Lumora"
            title="A nonprofit built for dignity, transparency, and local ownership."
            text="Lumora Global began as a coalition of community organizers and donors who believed aid should strengthen local leadership. Today, our platform funds practical programs with public goals, clear reporting, and long-term accountability."
          />
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/programs">Explore Work</Button>
            <Button href="/donate" variant="secondary">
              Fund Impact
            </Button>
          </div>
        </div>
        <div className="glass-panel overflow-hidden rounded-[34px] p-3">
          <Image
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=80"
            alt="Volunteers preparing supplies at a community center"
            width={1100}
            height={800}
            className="aspect-[4/3] rounded-[26px] object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[30px] border border-[var(--line)] bg-[var(--card)] p-7">
            <h2 className="text-2xl font-black">Mission</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Move flexible funding, expertise, and visibility to locally led organizations solving urgent social challenges.
            </p>
          </div>
          <div className="rounded-[30px] border border-[var(--line)] bg-[var(--card)] p-7">
            <h2 className="text-2xl font-black">Vision</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              A world where every community can access education, health, income, clean water, and rapid support when crisis strikes.
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-12">
        <SectionHeading
          eyebrow="Measured impact"
          title="Numbers that connect fundraising to real progress."
          align="center"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label} className="rounded-[28px] border border-[var(--line)] bg-[var(--card)] p-6 text-center">
              <p className="text-4xl font-black text-[var(--brand-strong)]">{stat.value}</p>
              <p className="mt-3 text-sm font-bold leading-6 text-[var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Transparency"
          title="Trust is designed into the operating model."
          text="Lumora publishes audited financials, program progress, partner criteria, and grant reporting windows so supporters can understand both outcomes and limitations."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["91%", "Program services"],
            ["6%", "Fundraising"],
            ["3%", "Administration"]
          ].map(([value, label]) => (
            <div key={label} className="rounded-[26px] bg-[#10251f] p-6 text-white">
              <p className="text-4xl font-black text-[var(--accent)]">{value}</p>
              <p className="mt-3 text-sm font-bold text-white/72">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-12">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Team" title="A global staff with local partner roots." />
          <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
            Staff and volunteer advisors support programs across strategy, finance, safeguarding, and measurement.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--card)]">
              <Image
                src={member.image}
                alt=""
                width={720}
                height={720}
                className="aspect-[4/3] w-full object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="p-6">
                <h3 className="text-xl font-black">{member.name}</h3>
                <p className="mt-2 text-sm font-bold text-[var(--muted)]">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-12">
        <SectionHeading eyebrow="Milestones" title="A decade of practical progress." />
        <div className="mt-8 grid gap-4">
          {timeline.map((item) => (
            <article key={item.year} className="grid gap-4 rounded-[28px] border border-[var(--line)] bg-[var(--card)] p-5 sm:grid-cols-[120px_1fr] sm:p-6">
              <p className="text-3xl font-black text-[var(--brand-strong)]">{item.year}</p>
              <div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-7 text-[var(--muted)]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
