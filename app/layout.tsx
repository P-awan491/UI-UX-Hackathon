import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyDonateCta } from "@/components/layout/sticky-donate-cta";

export const metadata: Metadata = {
  title: {
    default: "Lumora Global | Fund dignity, education, and care",
    template: "%s | Lumora Global"
  },
  description:
    "A modern international NGO fundraising platform for education, healthcare, women-led livelihoods, clean water, and disaster response.",
  metadataBase: new URL("https://lumora-global.example"),
  openGraph: {
    title: "Lumora Global",
    description: "Fund dignity, education, and care across communities worldwide.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <StickyDonateCta />
        <Footer />
      </body>
    </html>
  );
}
