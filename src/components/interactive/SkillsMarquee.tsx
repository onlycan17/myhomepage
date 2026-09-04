"use client";

import { useState } from "react";

type SkillsMarqueeProps = {
  items: string[];
};

export function SkillsMarquee({ items }: SkillsMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className="skills-marquee-mask relative overflow-hidden rounded-full border border-black/8 bg-white/80 px-3 py-3 pr-28"
      onFocusCapture={(event) => {
        if (
          event.target !== event.currentTarget &&
          !(event.target instanceof HTMLButtonElement)
        ) {
          setIsPaused(true);
        }
      }}
    >
      <div
        className="skills-marquee-track flex min-w-max items-center gap-3"
        data-paused={isPaused}
      >
        {duplicatedItems.map((item, index) => (
          <span key={`${item}-${index}`} className="skills-marquee-chip">
            {item}
          </span>
        ))}
      </div>
      <button
        type="button"
        className="secondary-link absolute right-3 top-1/2 min-h-11 -translate-y-1/2 px-3 py-2 text-xs"
        aria-pressed={isPaused}
        onClick={() => setIsPaused((paused) => !paused)}
      >
        {isPaused ? "재생" : "정지"}
      </button>
    </div>
  );
}
