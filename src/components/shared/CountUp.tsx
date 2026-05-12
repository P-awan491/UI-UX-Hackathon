"use client";

import * as React from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
}

export function CountUp({ value, duration = 2 }: CountUpProps) {
  // Parse numeric value from string (e.g., "250" from "250k")
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  React.useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        // If it was a float, keep one decimal (e.g. 4.5)
        if (value.includes(".")) {
          ref.current.textContent = latest.toFixed(1);
        } else {
          ref.current.textContent = Math.floor(latest).toString();
        }
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>0</span>;
}
