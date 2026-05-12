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
      // Show after scrolling 600px
      if (window.scrollY > 600) {
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
          className="fixed bottom-6 left-4 right-4 z-40 md:hidden"
        >
          <Link href="/donate">
            <Button size="lg" className="w-full h-16 rounded-2xl shadow-2xl shadow-primary/40 font-bold text-lg flex items-center justify-center gap-3">
              <Heart size={20} className="fill-current" />
              Support Our Mission
            </Button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
