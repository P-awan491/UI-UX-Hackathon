import { partners } from "@/lib/data";
import Image from "next/image";

export function PartnersSection() {
  return (
    <section className="py-20 bg-white border-y border-slate-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-black uppercase tracking-[0.3em] text-slate-300 mb-12">
          Trusted by Global Organizations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div key={partner.name} className="relative h-8 md:h-10 w-32 md:w-40">
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
