import { programs } from "@/data/site";
import { ProgramExplorer } from "@/components/program-explorer";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Programs",
  description: "Explore Lumora Global programs across education, healthcare, women-led livelihoods, clean water, and disaster response."
};

export default function ProgramsPage() {
  return (
    <section className="container-shell py-12 sm:py-16">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionHeading
          eyebrow="Programs"
          title="Find a locally led initiative ready for your support."
          text="Filter by cause area, compare metrics, and open any program to see goals, funding progress, and related ways to help."
        />
        <div className="rounded-[26px] border border-[var(--line)] bg-[var(--card)] p-6">
          <p className="text-sm font-black text-[var(--brand-strong)]">Funding model</p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            Every card shows a current program metric and links to a detail page with the funding goal, progress, and impact breakdown.
          </p>
        </div>
      </div>
      <ProgramExplorer programs={programs} />
    </section>
  );
}
