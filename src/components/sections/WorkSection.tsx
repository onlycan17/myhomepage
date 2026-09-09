import { SectionShell } from "@/components/common/SectionShell";
import { Reveal } from "@/components/common/Reveal";
import { workProjects } from "@/data/workProjects";

export function WorkSection() {
  return (
    <SectionShell
      id="work"
      label="// work"
      title="기술을 적용해 실제 업무와 서비스에 만든 변화"
      description="한 달 넘게 반복하던 계산의 자동화부터 앱 사용성 개선, 교육 현장의 AI 활용까지. 현장의 문제와 제가 맡은 해결 과정, 그 결과를 소개합니다."
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
            {project.caseStudy && (
              <dl className="mt-5 space-y-4 border-t border-slate-200 pt-5 text-sm leading-7">
                <div>
                  <dt className="font-semibold text-slate-950">업무 문제</dt>
                  <dd className="mt-1 text-slate-700">{project.caseStudy.problem}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-950">직접 기여한 부분</dt>
                  <dd className="mt-1 text-slate-700">{project.caseStudy.contribution}</dd>
                </div>
                <div className="rounded-xl bg-teal-50 p-4">
                  <dt className="font-semibold text-teal-900">현장에 만든 변화</dt>
                  <dd className="mt-1 text-slate-800">{project.caseStudy.outcome}</dd>
                </div>
              </dl>
            )}
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
