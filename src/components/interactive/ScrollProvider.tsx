"use client";

import { useEffect } from "react";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";

import { getLenisInstance, scrollToHash, setLenisInstance } from "@/lib/lenis";

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      lerp: 0.1,
      respectReducedMotion: true,
      stopInertiaOnNavigate: true,
    });

    setLenisInstance(lenis);

    return () => {
      setLenisInstance(null);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncScrollPosition = () => {
      const currentHash = window.location.hash;

      if (currentHash) {
        scrollToHash(currentHash);
        return;
      }

      const lenis = getLenisInstance();

      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
        return;
      }

      window.scrollTo({ top: 0, behavior: "auto" });
    };

    const frame = window.requestAnimationFrame(syncScrollPosition);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    const handleHashChange = () => {
      scrollToHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return <>{children}</>;
}
