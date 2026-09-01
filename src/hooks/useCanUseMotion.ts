"use client";

import { useEffect, useState } from "react";

import { useReducedMotion } from "framer-motion";

export function useCanUseMotion(): boolean {
  const reducedMotion = useReducedMotion();
  const [canUseFinePointer, setCanUseFinePointer] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(pointer: fine) and (hover: hover)");
    const update = () => setCanUseFinePointer(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  return !reducedMotion && canUseFinePointer;
}
