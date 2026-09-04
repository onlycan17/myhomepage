"use client";

import { useMemo, useState } from "react";

import { Reveal } from "@/components/common/Reveal";
import { SectionShell } from "@/components/common/SectionShell";
import { ProjectShowcaseList } from "@/components/interactive/ProjectShowcaseList";
import {
  featuredProjects,
  learningArchive,
  projectCategories,
} from "@/data/projects";
import { joinClasses } from "@/lib/utils";
import type { ProjectCategoryKey } from "@/types/content";

type FilterKey = "all" | ProjectCategoryKey;

export function ProjectsSection() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = useMemo(() => {
    const sourceProjects =
      filter === "all" && !showAllProjects
        ? featuredProjects.slice(0, 6)
        : featuredProjects;

    if (filter === "all") {
      return sourceProjects;
    }

    return sourceProjects.filter((project) => project.category === filter);
  }, [filter, showAllProjects]);

  return (
    <SectionShell
      id="projects"
      label="// projects"
      title="GitHub에서 확인할 수 있는 공개 포트폴리오"
      description="GitHub API 메타데이터와 직접 큐레이션한 설명을 합쳐, 지금 보여드릴 만한 저장소만 메인 카드로 추렸습니다."
    >
      <Reveal className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          aria-pressed={filter === "all"}
          className={joinClasses(
            "filter-button",
            filter === "all" && "filter-button-active",
          )}
        >
          전체
        </button>
        {projectCategories.map((category) => (
          <button
            key={category.key}
            type="button"
            onClick={() => setFilter(category.key)}
            aria-pressed={filter === category.key}
            className={joinClasses(
              "filter-button",
              filter === category.key && "filter-button-active",
            )}
          >
            {category.label}
          </button>
        ))}
      </Reveal>
      <Reveal>
        <ProjectShowcaseList projects={visibleProjects} />
      </Reveal>
      {!showAllProjects && filter === "all" ? (
        <Reveal>
          <button
            type="button"
            className="secondary-link"
            onClick={() => setShowAllProjects(true)}
          >
            전체 프로젝트 {featuredProjects.length}개 보기
          </button>
        </Reveal>
      ) : null}
      <Reveal>
        <details className="surface-card group p-5 sm:p-6">
          <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 marker:hidden">
            학습 아카이브 열기
            <span className="ml-3 text-sm font-normal text-slate-600 group-open:hidden">
              기초 학습과 클론 코딩 기록
            </span>
          </summary>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {learningArchive.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-black/8 px-4 py-3 text-sm text-slate-700 transition hover:border-cyan-700/30 hover:text-slate-950"
              >
                {project.name}
              </a>
            ))}
          </div>
        </details>
      </Reveal>
    </SectionShell>
  );
}
