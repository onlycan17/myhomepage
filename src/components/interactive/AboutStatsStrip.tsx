"use client";

import { useMemo, useRef } from "react";

import { useInView } from "framer-motion";

import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { label: "년 경력", value: 13, suffix: "+" },
  { label: "공개 저장소", value: 47, suffix: "" },
  { label: "블로그 글", value: 36, suffix: "" },
  { label: "큐레이션 프로젝트", value: 22, suffix: "" },
] as const;

function CountUpCard({ label, suffix, value }: (typeof stats)[number]) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });
  const displayValue = useCountUp(value, isInView);

  return (
    <div ref={cardRef} className="rounded-[1.4rem] border border-black/8 bg-white/88 px-5 py-5">
      <p className="font-mono text-[0.72rem] tracking-[0.16em] text-slate-500 uppercase">Signal</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </div>
  );
}

export function AboutStatsStrip() {
  const items = useMemo(() => stats, []);

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <CountUpCard key={item.label} {...item} />
      ))}
    </div>
  );
}
