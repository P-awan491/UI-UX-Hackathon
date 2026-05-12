import { DonationForm } from "@/components/donation-form";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Donate",
  description: "Support Lumora Global programs through a clear, accessible donation flow."
};

export default function DonatePage() {
  return (
    <section className="container-shell py-12 sm:py-16">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionHeading
          eyebrow="Donate"
          title="A simple giving experience built for trust."
          text="Choose an amount, direct your gift to a program, and review the full summary before continuing."
        />
        <div className="grid gap-3 sm:grid-cols-3">
          {["Encrypted form pattern", "Transparent costs", "Quarterly impact updates"].map((item) => (
            <div key={item} className="rounded-[22px] border border-[var(--line)] bg-[var(--card)] p-4 text-sm font-black">
              {item}
            </div>
          ))}
        </div>
      </div>
      <DonationForm />
    </section>
  );
}
