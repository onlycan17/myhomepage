"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

import { useCanUseMotion } from "@/hooks/useCanUseMotion";
import { joinClasses } from "@/lib/utils";

const MAX_ROTATION = 4;

type ProjectTiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function ProjectTiltCard({ children, className }: ProjectTiltCardProps) {
  const canUseMotion = useCanUseMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { damping: 20, stiffness: 180, mass: 0.7 });
  const smoothRotateY = useSpring(rotateY, { damping: 20, stiffness: 180, mass: 0.7 });

  if (!canUseMotion) {
    return <div className={joinClasses("surface-card h-full", className)}>{children}</div>;
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;
    const nextRotateY = (relativeX - 0.5) * (MAX_ROTATION * 2);
    const nextRotateX = (0.5 - relativeY) * (MAX_ROTATION * 2);

    rotateX.set(nextRotateX);
    rotateY.set(nextRotateY);
  };

  const resetRotation = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className={joinClasses("surface-card h-full transform-gpu", className)}
      style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: "preserve-3d" }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      onPointerLeave={resetRotation}
      onPointerMove={handlePointerMove}
    >
      {children}
    </motion.div>
  );
}
