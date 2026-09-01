"use client";

import { useMemo, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/common/Reveal";
import { SectionShell } from "@/components/common/SectionShell";
import {
  featuredProjects,
  learningArchive,
  projectCategories,
} from "@/data/projects";
import { formatIsoDate, joinClasses } from "@/lib/utils";
import type { ProjectCategoryKey } from "@/types/content";

type FilterKey = "all" | ProjectCategoryKey;

export function ProjectsSection() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const visibleProjects = useMemo(() => {
    if (filter === "all") {
      return featuredProjects;
    }

    return featuredProjects.filter((project) => project.category === filter);
  }, [filter]);

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
            className={joinClasses(
              "filter-button",
              filter === category.key && "filter-button-active",
            )}
          >
            {category.label}
          </button>
        ))}
      </Reveal>
      <div className="grid gap-4 xl:grid-cols-2">
        {visibleProjects.map((project, index) => {
          const category = projectCategories.find(
            (item) => item.key === project.category,
          );

          return (
            <Reveal
              key={project.name}
              delay={index * 0.03}
              className="surface-card p-5 sm:p-6"
            >
              {project.image ? (
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={-1}
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} 실행 화면`}
                    width={1200}
                    height={750}
                    priority={index < 4}
                    className="aspect-[8/5] w-full rounded-xl border border-black/8 object-cover"
                  />
                </Link>
              ) : null}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="monolabel">{category?.label ?? "프로젝트"}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950">
                    {project.name}
                  </h3>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="chip-link"
                >
                  GitHub
                </a>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                {project.description}
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-700 sm:grid-cols-3">
                <div>
                  <dt className="text-slate-600">언어</dt>
                  <dd className="mt-1 text-slate-900">{project.language}</dd>
                </div>
                <div>
                  <dt className="text-slate-600">업데이트</dt>
                  <dd className="mt-1 text-slate-900">
                    {formatIsoDate(project.updatedAt)}
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-600">Stars</dt>
                  <dd className="mt-1 text-slate-900">{project.stars}</dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.topics.map((topic) => (
                  <span key={topic} className="tech-chip">
                    {topic}
                  </span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
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
