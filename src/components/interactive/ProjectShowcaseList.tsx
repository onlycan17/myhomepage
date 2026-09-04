"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";

import { formatIsoDate } from "@/lib/utils";
import type { ProjectItem } from "@/types/content";

type ProjectShowcaseListProps = {
  projects: ProjectItem[];
};

type PreviewPosition = {
  left: number;
  top: number;
};

const INITIAL_PREVIEW_POSITION = { left: 0, top: 0 };

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function getPreviewPosition(event: React.PointerEvent<HTMLAnchorElement>): PreviewPosition {
  const previewWidth = Math.min(288, window.innerWidth - 32);
  const previewHeight = 196;

  return {
    left: clamp(event.clientX + 24, 16, window.innerWidth - previewWidth - 16),
    top: clamp(event.clientY - previewHeight - 20, 16, window.innerHeight - previewHeight - 16),
  };
}

export function ProjectShowcaseList({ projects }: ProjectShowcaseListProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [previewPosition, setPreviewPosition] = useState<PreviewPosition>(
    INITIAL_PREVIEW_POSITION,
  );

  const handlePointerEnter = (project: ProjectItem) => {
    if (!reducedMotion) {
      setActiveProject(project);
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (!reducedMotion && event.pointerType !== "touch") {
      setPreviewPosition(getPreviewPosition(event));
    }
  };

  const handleFocus = (project: ProjectItem) => {
    if (!reducedMotion) {
      setActiveProject(project);
      setPreviewPosition({
        left: clamp(window.innerWidth - 320, 16, window.innerWidth - 304),
        top: window.innerHeight / 2 - 98,
      });
    }
  };

  return (
    <div className="project-showcase-list">
      <div className="project-showcase-heading" aria-hidden="true">
        <span>대표 프로젝트</span>
        <span>최근 업데이트 · 기술</span>
      </div>
      <div className="project-showcase-rows">
        {projects.map((project, index) => (
          <Link
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="project-showcase-row"
            onPointerEnter={() => handlePointerEnter(project)}
            onPointerMove={handlePointerMove}
            onPointerLeave={() => setActiveProject(null)}
            onFocus={() => handleFocus(project)}
            onBlur={() => setActiveProject(null)}
          >
            <span className="project-showcase-main">
              <span className="project-showcase-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="project-showcase-title">{project.name}</span>
                <span className="project-showcase-description">
                  {project.description}
                </span>
              </span>
            </span>
            <span className="project-showcase-meta">
              <span>{formatIsoDate(project.updatedAt)}</span>
              <span>{project.language}</span>
              <span className="project-showcase-open">열기</span>
            </span>
          </Link>
        ))}
      </div>
      {!reducedMotion && activeProject ? (
        <div
          className="project-showcase-preview"
          aria-hidden="true"
          style={{ left: previewPosition.left, top: previewPosition.top }}
        >
          {activeProject.image ? (
            <Image
              src={activeProject.image}
              alt=""
              width={1200}
              height={750}
              sizes="288px"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="project-showcase-preview-fallback">
              <span className="monolabel">{activeProject.language}</span>
              <strong>{activeProject.name}</strong>
              <span>{activeProject.topics.join(" · ")}</span>
            </div>
          )}
          <span className="project-showcase-preview-caption">
            {activeProject.name}
          </span>
        </div>
      ) : null}
    </div>
  );
}
