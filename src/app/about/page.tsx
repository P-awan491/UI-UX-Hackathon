import Image from "next/image";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ShieldCheck, Users, Globe, Heart, Target, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[80%] bg-slate-900 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <span className="text-primary font-black tracking-[0.4em] uppercase text-xs">Our Mission</span>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
              Driven by <span className="text-primary italic">Compassion</span>, <br />
              Guided by <span className="text-secondary">Data</span>.
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto">
              EcoImpact is a global nonprofit organization dedicated to bridging the inequality gap through sustainable clean water, healthcare, and digital literacy.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <div className="-mt-16 relative z-20">
        <ImpactStats />
      </div>

      {/* Philosophy Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative border-8 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Our Work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full -z-10 blur-3xl" />
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">How we work</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                  A new model for <br />
                  <span className="text-primary italic text-5xl md:text-7xl">Human Aid</span>.
                </h2>
              </div>
              <div className="space-y-8 text-xl text-slate-500 font-medium leading-relaxed">
                <p>
                  Founded in 2014, EcoImpact started with a single solar-powered well in a remote village. We quickly realized that aid without education is temporary, but empowerment is permanent.
                </p>
                <p>
                  Today, we operate in 24 countries, using a data-driven approach to identify where resources can do the most good. We partner with local leaders, not just to build hardware, but to build sustainable communities.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                <div className="space-y-2">
                  <p className="text-4xl font-black text-primary">100%</p>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Public Donation Model</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-black text-secondary">Zero</p>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Waste Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
            <span className="text-primary font-black tracking-[0.2em] uppercase text-xs">Our Core Values</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              The principles that <br />
              <span className="text-primary italic">guide</span> us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: ShieldCheck, 
                title: "Absolute Transparency", 
                desc: "We track every dollar and publish quarterly impact reports. Accountability is our most important value.",
                color: "text-primary",
                bg: "bg-primary/5"
              },
              { 
                icon: Users, 
                title: "Local Ownership", 
                desc: "We co-design projects with local leaders. The community owns the systems, we just provide the tools.",
                color: "text-secondary",
                bg: "bg-secondary/5"
              },
              { 
                icon: Globe, 
                title: "Scalable Solutions", 
                desc: "We focus on high-impact, repeatable models that can be adapted to remote regions worldwide.",
                color: "text-accent",
                bg: "bg-accent/5"
              }
            ].map((value, i) => (
              <div key={i} className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-premium space-y-8 hover:-translate-y-2 transition-all duration-500">
                <div className={`w-20 h-20 ${value.bg} rounded-[2rem] flex items-center justify-center ${value.color}`}>
                  <value.icon size={40} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">{value.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-12 bg-primary p-16 md:p-24 rounded-[4rem] relative overflow-hidden shadow-2xl shadow-primary/30">
             {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 space-y-10">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Be part of the <br />
                <span className="italic underline decoration-secondary decoration-wavy">change</span>.
              </h2>
              <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto">
                Join a global community of impact makers who are dedicated to solving some of the world&apos;s most pressing challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/donate" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-white text-primary hover:bg-slate-100 w-full sm:w-auto h-20 px-12 text-2xl font-black rounded-[2rem] shadow-xl">
                    Donate Now
                  </Button>
                </Link>
                <Link href="/programs" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto h-20 px-12 text-2xl font-black rounded-[2rem]">
                    Explore Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
