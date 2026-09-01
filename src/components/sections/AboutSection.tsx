import Image from "next/image";

import { SectionShell } from "@/components/common/SectionShell";
import { Reveal } from "@/components/common/Reveal";
import { AboutStatsStrip } from "@/components/interactive/AboutStatsStrip";
import { profile, strengths } from "@/data/profile";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      label="// about"
      title="기술보다 먼저 문제의 구조를 읽는 개발자"
      description={profile.audienceSummary}
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="surface-card p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-4">
            <div className="w-16 overflow-hidden rounded-2xl border border-black/8 bg-white p-1">
              <Image
                src="/profile.jpg"
                alt="오진석 프로필 사진"
                width={314}
                height={400}
                className="h-auto w-full rounded-[0.9rem] object-cover"
              />
            </div>
            <a
              href={profile.notion}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-cyan-700 underline decoration-cyan-300/80 underline-offset-4 transition hover:text-violet-700"
            >
              Notion 포트폴리오에서 더 자세히 보기
            </a>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-700">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <div className="grid gap-4">
          {strengths.map((strength, index) => (
            <Reveal key={strength.title} delay={index * 0.06} className="surface-card p-5">
              <h3 className="text-lg font-semibold text-slate-950">{strength.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{strength.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal>
        <AboutStatsStrip />
      </Reveal>
    </SectionShell>
  );
}
