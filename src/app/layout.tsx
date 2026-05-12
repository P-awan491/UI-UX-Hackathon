import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "EcoImpact International | Sustainable Solutions for Global Change",
  description: "Join EcoImpact International in providing clean water, renewable energy, and digital education to remote communities worldwide.",
  keywords: ["NGO", "charity", "clean water", "sustainability", "impact", "donation"],
};

import { StickyDonateCTA } from "@/components/shared/StickyDonateCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <StickyDonateCTA />
      </body>
    </html>
  );
}
