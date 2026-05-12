import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "EcoImpact | Sustainable Solutions for Global Change",
  description: "Join EcoImpact in providing clean water, healthcare, and education to remote communities worldwide through transparent, data-driven action.",
  keywords: ["NGO", "charity", "clean water", "sustainability", "impact", "donation"],
};

import { StickyDonateCTA } from "@/components/shared/StickyDonateCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <StickyDonateCTA />
      </body>
    </html>
  );
}
