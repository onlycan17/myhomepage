"use client";

import { useEffect, useState } from "react";

import type { SectionId } from "@/lib/navigation";

export function useActiveSection(sectionIds: SectionId[], enabled: boolean): SectionId | null {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") {
      return;
    }

    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (sections.length === 0) {
      return;
    }

    const visibleSections = new Set<SectionId>();

    const updateActiveSection = () => {
      const nextActive = sectionIds.find((sectionId) => visibleSections.has(sectionId)) ?? null;
      setActiveSection(nextActive);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const sectionId = entry.target.id as SectionId;

          if (entry.isIntersecting) {
            visibleSections.add(sectionId);
          } else {
            visibleSections.delete(sectionId);
          }
        }

        updateActiveSection();
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0.1, 0.3, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [enabled, sectionIds]);

  if (!enabled) {
    return null;
  }

  return activeSection;
}
