"use client";

import { useRef } from "react";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

import { useCanUseMotion } from "@/hooks/useCanUseMotion";

export function HeroCursorGlow({ children }: { children: React.ReactNode }) {
  const canUseMotion = useCanUseMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(-240);
  const y = useMotionValue(-240);
  const opacity = useMotionValue(0);
  const smoothX = useSpring(x, { damping: 26, stiffness: 220, mass: 0.5 });
  const smoothY = useSpring(y, { damping: 26, stiffness: 220, mass: 0.5 });
  const smoothOpacity = useSpring(opacity, { damping: 24, stiffness: 180, mass: 0.45 });
  const background = useMotionTemplate`radial-gradient(circle at center, rgba(8, 145, 178, 0.12) 0%, rgba(109, 40, 217, 0.11) 38%, rgba(109, 40, 217, 0) 72%)`;

  if (!canUseMotion) {
    return <div className="relative z-10">{children}</div>;
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = containerRef.current?.getBoundingClientRect();

    if (!bounds) {
      return;
    }

    x.set(event.clientX - bounds.left - 240);
    y.set(event.clientY - bounds.top - 240);
    opacity.set(1);
  };

  const handlePointerLeave = () => {
    opacity.set(0);
  };

  return (
    <div
      ref={containerRef}
      className="relative z-10"
      onPointerEnter={handlePointerMove}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{ background, opacity: smoothOpacity, x: smoothX, y: smoothY }}
      />
      {children}
    </div>
  );
}
