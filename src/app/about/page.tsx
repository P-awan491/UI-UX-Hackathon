import Image from "next/image";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ShieldCheck, Users, Globe, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* About Hero */}
      <section className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Mission</span>
            <h1 className="text-5xl md:text-7xl font-black text-foreground leading-[1.1]">
              Driven by <span className="text-primary italic">Compassion</span>, Guided by Data.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2014, EcoImpact International has been at the forefront of sustainable development, focusing on the most remote and underserved regions of the globe.
            </p>
          </div>
        </div>
      </section>

      <ImpactStats />

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide every decision we make and every project we undertake.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Transparency", desc: "We provide detailed financial reporting and project updates so you know exactly where your money goes." },
              { icon: Users, title: "Local Ownership", desc: "Our projects are led by the communities they serve, ensuring cultural relevance and long-term viability." },
              { icon: Globe, title: "Sustainability", desc: "We focus on solutions that use renewable resources and can be maintained with local expertise." }
            ].map((value, i) => (
              <div key={i} className="space-y-6 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto">
                  <value.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                <Image 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Team in the field"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-full -z-10 blur-3xl opacity-20" />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold">A Decade of <span className="text-primary italic">Transformation</span></h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  EcoImpact started with a single solar-powered well in a remote village in Ethiopia. Seeing the ripple effect of clean water on health, education, and the local economy, we knew we had to scale.
                </p>
                <p>
                  Today, we operate in 24 countries, partnering with over 150 local NGOs to deliver holistic solutions that address the root causes of poverty and environmental degradation.
                </p>
              </div>
              <div className="pt-6 border-t flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <p className="text-3xl font-black text-primary">100%</p>
                  <p className="text-sm font-bold uppercase tracking-wider">Public Donation Model</p>
                </div>
                <div className="flex-1">
                  <p className="text-3xl font-black text-primary">Zero</p>
                  <p className="text-sm font-bold uppercase tracking-wider">Waste Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="bg-primary/5 p-12 rounded-[3rem] border border-primary/10">
              <Heart size={48} className="text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Join the Mission?</h2>
              <p className="text-xl text-muted-foreground mb-10">
                Whether you&apos;re a donor, volunteer, or potential partner, there&apos;s a place for you in our community of impact makers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/donate">
                  <Button size="lg" className="px-10 h-14 rounded-2xl">Become a Partner</Button>
                </Link>
                <Link href="/programs">
                  <Button variant="outline" size="lg" className="px-10 h-14 rounded-2xl">View Our Projects</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
