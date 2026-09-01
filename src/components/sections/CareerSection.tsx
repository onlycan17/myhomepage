import { SectionShell } from "@/components/common/SectionShell";
import { Reveal } from "@/components/common/Reveal";
import { careerTimeline } from "@/data/career";

export function CareerSection() {
  return (
    <SectionShell
      id="career"
      label="// career"
      title="공공 시스템에서 서비스 운영, 그리고 AI 실무까지 이어진 흐름"
      description="7개 조직에서 백엔드, 프론트엔드, 모바일, 운영을 모두 경험하며 기술 선택보다 문제 해결을 우선해 왔습니다."
    >
      <ol className="relative space-y-4 border-l-2 border-cyan-700/35 pl-6">
        {careerTimeline.map((item, index) => (
          <Reveal key={`${item.company}-${item.period}`} delay={index * 0.05}>
            <li className="relative surface-card p-5 sm:p-6">
              <span className="absolute top-5 -left-[2.05rem] h-4 w-4 rounded-full border-2 border-cyan-700/70 bg-white shadow-[0_0_24px_rgba(8,145,178,0.22)]" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{item.company}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.role}</p>
                </div>
                <p className="text-base font-medium text-cyan-800">{item.period}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                {item.summary.map((line) => (
                  <li key={line}>· {line}</li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}
