import { SectionShell } from "@/components/common/SectionShell";
import { Reveal } from "@/components/common/Reveal";
import { certificates, education, skillGroups } from "@/data/profile";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      label="// skills"
      title="도메인과 스택이 바뀌어도 빠르게 적응하는 기술 기반"
      description="백엔드, 프론트엔드, 모바일, AI, 데이터·인프라를 실제 업무 맥락에서 연결해 왔습니다."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.04} className="surface-card p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tech-chip">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal className="surface-card p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">자격증</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            {certificates.map((certificate) => (
              <li key={certificate.name}>
                <span className="text-slate-950">{certificate.name}</span>
                <span className="text-slate-600"> · {certificate.issuer} · {certificate.acquiredAt}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="surface-card p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">학력</h3>
          <p className="mt-4 text-base text-slate-950">{education.school}</p>
          <p className="mt-2 text-sm text-slate-700">{education.major}</p>
          <p className="mt-1 text-sm text-slate-600">{education.period}</p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
