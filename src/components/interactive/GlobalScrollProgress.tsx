"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function GlobalScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    damping: 28,
    stiffness: 180,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-[linear-gradient(90deg,#0891b2_0%,#6d28d9_100%)]"
      style={{ scaleX }}
    />
  );
}
