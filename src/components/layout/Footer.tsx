import Link from "next/link";
import { Droplets, Users, Globe, Camera, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-xl text-primary-foreground">
                <Droplets size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Eco<span className="text-primary">Impact</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Empowering communities through sustainable clean water and renewable energy solutions worldwide.
            </p>
            <div className="flex gap-4">
              {[Users, Globe, Camera].map((Icon, i) => (
                <Link key={i} href="#" className="p-2 rounded-full bg-background border hover:border-primary hover:text-primary transition-all">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Programs</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/programs" className="hover:text-primary transition-colors">Clean Water</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">Digital Literacy</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">Rural Health</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">Environment</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Organization</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Impact Reports</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Transparency</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3"><Mail size={18} className="text-primary" /> contact@ecoimpact.org</li>
              <li className="flex gap-3"><Phone size={18} className="text-primary" /> +1 (555) 000-1234</li>
              <li className="flex gap-3"><MapPin size={18} className="text-primary" /> 123 Impact Way, CA, USA</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} EcoImpact International. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
