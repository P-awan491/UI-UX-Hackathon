import { Hero } from "@/components/sections/Hero";
import { PartnersSection } from "@/components/sections/Partners";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { FeaturedPrograms } from "@/components/sections/FeaturedPrograms";
import { TransparencySection } from "@/components/sections/Transparency";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PartnersSection />
      <ImpactStats />
      <FeaturedPrograms />
      <TransparencySection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
