import { SectionShell } from "@/components/common/SectionShell";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      label="// contact"
      title="새로운 팀과 문제를 만날 준비가 되어 있습니다"
      description="정규직과 협업 기회를 모두 열어 두고 있습니다. 연락은 이메일, GitHub, Notion 포트폴리오만 공개합니다."
    >
      <div className="flex flex-wrap gap-2">
        {profile.hiringPreferences.map((item) => (
          <span key={item} className="tech-chip">
            {item}
          </span>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <a href={`mailto:${profile.email}`} className="surface-card block p-6 transition hover:border-cyan-700/30">
          <p className="monolabel">{"// email"}</p>
          <p className="mt-4 text-xl font-semibold text-slate-950">{profile.email}</p>
          <p className="mt-3 text-sm leading-7 text-slate-700">가장 빠른 연락 채널입니다.</p>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="surface-card block p-6 transition hover:border-cyan-700/30">
          <p className="monolabel">{"// github"}</p>
          <p className="mt-4 text-xl font-semibold text-slate-950">onlycan17</p>
          <p className="mt-3 text-sm leading-7 text-slate-700">공개 저장소와 실험 기록을 확인할 수 있습니다.</p>
        </a>
        <a href={profile.notion} target="_blank" rel="noreferrer" className="surface-card block p-6 transition hover:border-cyan-700/30">
          <p className="monolabel">{"// notion"}</p>
          <p className="mt-4 text-xl font-semibold text-slate-950">Notion 포트폴리오</p>
          <p className="mt-3 text-sm leading-7 text-slate-700">프로젝트 설명과 이력 정리를 더 자세히 볼 수 있습니다.</p>
        </a>
      </div>
    </SectionShell>
  );
}
