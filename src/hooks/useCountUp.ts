"use client";

import { useEffect, useState } from "react";

import { animate, useReducedMotion } from "framer-motion";

export function useCountUp(targetValue: number, shouldStart: boolean): number {
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart || reducedMotion) {
      return;
    }

    const controls = animate(0, targetValue, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setValue(Math.round(latest));
      },
    });

    return () => {
      controls.stop();
    };
  }, [reducedMotion, shouldStart, targetValue]);

  if (!shouldStart) {
    return 0;
  }

  if (reducedMotion) {
    return targetValue;
  }

  return value;
}
