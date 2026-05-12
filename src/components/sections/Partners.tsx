import { partners } from "@/lib/data";

export function PartnersSection() {
  return (
    <section className="py-20 bg-white border-y border-slate-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-black uppercase tracking-[0.3em] text-slate-300 mb-12">
          Trusted by Global Organizations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <img 
              key={partner.name} 
              src={partner.logo} 
              alt={partner.name} 
              className="h-8 md:h-10 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
