import { SectionShell } from "@/components/common/SectionShell";
import { CareerTimeline } from "@/components/interactive/CareerTimeline";
import { careerTimeline } from "@/data/career";

export function CareerSection() {
  return (
    <SectionShell
      id="career"
      label="// career"
      title="공공 시스템에서 서비스 운영, 그리고 AI 실무까지 이어진 흐름"
      description="7개 조직에서 백엔드, 프론트엔드, 모바일, 운영을 모두 경험하며 기술 선택보다 문제 해결을 우선해 왔습니다."
    >
      <CareerTimeline items={careerTimeline} />
    </SectionShell>
  );
}
