"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Our Impact", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2.5 rounded-2xl text-white shadow-lg group-hover:rotate-6 transition-transform">
                <Heart size={24} fill="currentColor" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                Eco<span className="text-primary">Impact</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-all hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/donate">
              <Button size="sm" className="rounded-full px-8">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl animate-in slide-in-from-top-5 duration-300">
          <div className="space-y-1 px-4 pb-8 pt-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-4 text-lg font-bold transition-colors",
                  pathname === item.href ? "text-primary" : "text-slate-900"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-6">
              <Link href="/donate" onClick={() => setIsOpen(false)}>
                <Button className="w-full h-14 rounded-2xl text-lg">Donate Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
