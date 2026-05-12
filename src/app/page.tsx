import { Hero } from "@/components/sections/Hero";
import { FeaturedPrograms } from "@/components/sections/FeaturedPrograms";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ImpactStats />
      <FeaturedPrograms />
      
      {/* CTA Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-primary-foreground text-center space-y-8 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-6xl font-black leading-tight">Ready to join the <span className="text-accent italic underline decoration-wavy">Impact</span> Revolution?</h2>
              <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
                Your small monthly contribution can provide a village with safe water for generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link href="/donate">
                  <Button size="lg" className="bg-white text-primary hover:bg-slate-100 h-16 px-10 text-xl font-bold rounded-2xl w-full sm:w-auto shadow-xl">
                    Donate Today
                    <Heart size={24} className="ml-2 fill-primary" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 h-16 px-10 text-xl font-bold rounded-2xl w-full sm:w-auto">
                    Learn Our Story
                    <ArrowRight size={24} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials or Partners Section could go here */}
    </main>
  );
}
