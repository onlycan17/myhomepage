import type { WorkProject } from "@/types/content";

export const workProjects: WorkProject[] = [
  {
    title: "온라인 기반 온독지수 측정 및 완독확인 지원 시스템",
    period: "2025.06 ~ 2025.10",
    company: "위드런",
    stack: ["Python", "FastAPI", "OpenAI API", "RAG", "LangChain", "Next.js", "PostgreSQL"],
    description:
      "독서 활동 데이터를 바탕으로 문서 검색과 생성형 AI를 결합한 서비스 구조를 설계하고 구축했습니다.",
  },
  {
    title: "중등 컴퓨터기반 온라인 문제은행(CBT) 시스템",
    period: "2025.06 ~ 2025.10",
    company: "위드런",
    stack: ["Spring Boot", "MyBatis", "WebSocket", "JPA", "React", "PostgreSQL"],
    description:
      "실시간 상호작용과 문제 출제 흐름을 고려해 문제은행과 평가 화면을 함께 구현했습니다.",
  },
  {
    title: "온평가 시스템 개발",
    period: "2024.07 ~ 2025.02",
    company: "위드런",
    stack: ["Spring Boot", "SES", "JPA", "React", "Supabase", "PostgreSQL"],
    description:
      "평가 운영 프로세스를 온라인으로 옮기며 메일 발송과 데이터 관리, 프론트엔드 화면까지 폭넓게 담당했습니다.",
  },
  {
    title: "팜스테이션 Flutter 리뉴얼 및 운영",
    period: "2022.04 ~ 운영 중",
    company: "에이치에스제이엘",
    stack: ["Flutter", "Dart"],
    description:
      "멀티 디바이스 환경을 고려해 앱 구조와 UI를 전면 개편하고 실제 운영까지 이어지는 안정성을 확보했습니다.",
  },
  {
    title: "한국부동산원 보상드림 시스템 운영·유지",
    period: "2023.12 ~ 2024.07",
    company: "KCC정보통신",
    stack: ["Spring Boot", "MyBatis", "JSP", "Oracle"],
    description:
      "운영 환경에서 발생하는 요구사항과 유지보수 이슈를 안정적으로 처리하며 서비스 연속성을 지켰습니다.",
  },
  {
    title: "경희대학교 차세대 통합정보시스템 구축·운영유지",
    period: "2018.06 ~ 2019.08",
    company: "시트론",
    stack: ["Nexacro", "Spring", "Tibero"],
    description:
      "일반행정과 회계예산 도메인을 중심으로 대형 공공 시스템의 화면과 업무 로직을 구현했습니다.",
  },
  {
    title: "자치구 조정교부금 자동 산출 시스템",
    period: "2016",
    company: "퓨전소프트",
    stack: ["Java", "Oracle", "통계 출력"],
    description:
      "수기 중심 업무를 자동화하는 시스템을 구축해 반복 계산과 통계 산출 과정을 디지털화했습니다.",
  },
  {
    title: "나이스 기반 중학교 입학배정시스템",
    period: "2012 ~ 2015",
    company: "퓨전소프트",
    stack: ["Java", "Spring", "Oracle"],
    description:
      "배정 알고리즘과 데이터 연계 로직 구현에 참여하며 대규모 교육 행정 흐름을 시스템으로 옮겼습니다.",
  },
];
