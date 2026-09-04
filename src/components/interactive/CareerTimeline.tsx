"use client";

import { useRef } from "react";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { Reveal } from "@/components/common/Reveal";
import type { CareerItem } from "@/types/content";

type CareerTimelineProps = {
  items: CareerItem[];
};

function getStartYear(period: string): string {
  return period.match(/\d{4}/)?.[0] ?? "—";
}

export function CareerTimeline({ items }: CareerTimelineProps) {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 20%", "end 80%"],
  });
  const beamScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={timelineRef} className="timeline-layout">
      <div className="timeline-content-column">
        <motion.div
          className="timeline-beam"
          aria-hidden="true"
          style={{ scaleY: reducedMotion ? 1 : beamScale }}
        />
        <ol className="space-y-6">
          {items.map((item, index) => (
            <li
              key={`${item.company}-${item.period}`}
              className="timeline-entry relative pl-8"
            >
              <span className="timeline-node" aria-hidden="true" />
              <Reveal delay={index * 0.05}>
                <article className="surface-card p-5 sm:p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="timeline-company-year sm:hidden">
                        {getStartYear(item.period)}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold text-slate-950 sm:mt-0">
                        {item.company}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">{item.role}</p>
                    </div>
                    <p className="text-base font-medium text-cyan-800">{item.period}</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                    {item.summary.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-700" aria-hidden="true" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
      <div className="timeline-year-column" aria-hidden="true">
        {items.map((item) => (
          <div key={`${item.company}-${item.period}-year`} className="timeline-year">
            {getStartYear(item.period)}
          </div>
        ))}
      </div>
    </div>
  );
}
