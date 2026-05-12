import Link from "next/link";
import { Heart, MessageSquare, Globe, Camera, Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="bg-primary p-3 rounded-2xl text-white shadow-xl group-hover:rotate-6 transition-transform">
                <Heart size={28} fill="currentColor" />
              </div>
              <span className="text-3xl font-black tracking-tighter">
                Eco<span className="text-primary">Impact</span>
              </span>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-sm">
              We empower remote communities through sustainable clean water, healthcare, and digital education. Join us in building a more equitable world for future generations.
            </p>
            <div className="flex gap-4">
              {[MessageSquare, Globe, Camera].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Quick Links</h3>
            <ul className="space-y-4">
              {["Our Mission", "Active Programs", "Impact Reports", "Success Stories", "Transparency"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-white font-bold transition-colors flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Get in Touch</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="p-2 bg-slate-800 rounded-xl text-primary h-fit">
                  <Mail size={18} />
                </div>
                <span className="text-slate-400 font-bold text-sm">hello@ecoimpact.org</span>
              </li>
              <li className="flex gap-4">
                <div className="p-2 bg-slate-800 rounded-xl text-primary h-fit">
                  <Phone size={18} />
                </div>
                <span className="text-slate-400 font-bold text-sm">+1 (800) 234-5678</span>
              </li>
              <li className="flex gap-4">
                <div className="p-2 bg-slate-800 rounded-xl text-primary h-fit">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-400 font-bold text-sm leading-relaxed">
                  123 Impact Blvd,<br />
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Stay Updated</h3>
            <p className="text-slate-400 font-medium">Join 5,000+ subscribers for monthly impact reports and heartwarming stories.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full h-16 bg-slate-800 border-none rounded-2xl px-6 text-white outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-500 font-bold"
              />
              <button className="absolute right-2 top-2 h-12 w-12 bg-primary rounded-xl flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                <Send size={20} />
              </button>
            </div>
            <div className="pt-4">
              <Link href="/donate">
                <Button variant="accent" className="w-full h-16 rounded-2xl text-lg font-black group">
                  Support Our Mission
                  <Heart size={20} className="ml-2 fill-current animate-pulse" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-bold text-sm">
            © {new Date().getFullYear()} EcoImpact Foundation. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-slate-600">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
