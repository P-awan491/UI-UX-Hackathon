"use client";

import * as React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export function StickyDonateCTA() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-4 right-4 z-40 md:hidden"
        >
          <Link href="/donate">
            <Button size="lg" className="w-full h-18 rounded-[2rem] shadow-2xl shadow-primary/40 font-black text-xl flex items-center justify-center gap-4 py-6">
              <Heart size={24} className="fill-current animate-pulse" />
              Change a Life Today
            </Button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
