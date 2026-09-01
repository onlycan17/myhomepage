"use client";

import { useEffect, useState } from "react";

import { motion, useSpring } from "framer-motion";

function clamp(value: number): number {
  return Math.min(Math.max(value, 0), 1);
}

type BlogReadingProgressProps = {
  targetId: string;
};

export function BlogReadingProgress({ targetId }: BlogReadingProgressProps) {
  const [progress, setProgress] = useState(0);
  const smoothProgress = useSpring(progress, {
    damping: 24,
    stiffness: 180,
    mass: 0.25,
  });

  useEffect(() => {
    const article = document.getElementById(targetId);

    if (!article) {
      return;
    }

    const updateProgress = () => {
      const rect = article.getBoundingClientRect();
      const total = Math.max(rect.height - window.innerHeight, 1);
      const consumed = clamp((window.innerHeight - rect.top) / total);
      setProgress(consumed);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [targetId]);

  return (
    <div className="sticky top-[72px] z-40 -mb-10 px-5 sm:top-[81px] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-full border border-cyan-700/12 bg-white/75 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
        <motion.div
          aria-hidden="true"
          className="h-1.5 origin-left bg-[linear-gradient(90deg,#0891b2_0%,#6d28d9_100%)]"
          style={{ scaleX: smoothProgress }}
        />
      </div>
    </div>
  );
}
