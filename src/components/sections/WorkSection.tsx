import { SectionShell } from "@/components/common/SectionShell";
import { Reveal } from "@/components/common/Reveal";
import { workProjects } from "@/data/workProjects";

export function WorkSection() {
  return (
    <SectionShell
      id="work"
      label="// work"
      title="비공개 업무 프로젝트는 성과와 구조로 설명합니다"
      description="실제 업무 저장소를 공개할 수 없는 대신, 맡았던 시스템의 성격과 사용한 기술, 해결한 문제를 정리했습니다."
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {workProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.04} className="surface-card p-5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{project.company}</p>
              </div>
              <p className="text-sm text-cyan-800">{project.period}</p>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((stack) => (
                <span key={stack} className="tech-chip">
                  {stack}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
