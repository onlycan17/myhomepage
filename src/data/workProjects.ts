import type { WorkProject } from "@/types/content";

export const workProjects: WorkProject[] = [
  {
    title: "온라인 기반 온독지수 측정 및 완독확인 지원 시스템",
    period: "2025.06 ~ 2025.10",
    company: "위드런",
    stack: ["Python", "FastAPI", "OpenAI API", "RAG", "LangChain", "Next.js", "PostgreSQL"],
    description:
      "독서 활동 지원에 AI를 접목해 학교·기관으로부터 이용 편의성에 대한 긍정적인 반응을 얻었습니다.",
    caseStudy: {
      problem: "학교·기관에서 독서 활동을 지원하는 시스템을 더 편리하게 사용할 수 있도록 개선할 필요가 있었습니다.",
      contribution: "서비스 설계·구축에 참여하며 RAG(관련 자료를 찾아 답변에 활용하는 방식)와 AI 에이전트(여러 작업을 이어 수행하는 AI)를 빠르게 도입했습니다.",
      outcome: "학교·기관으로부터 시스템이 더 편리해졌다는 평가를 받았습니다. 새로운 AI 기술을 실제 교육 서비스의 사용 경험 개선으로 연결했습니다.",
    },
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
      "평가 운영의 온라인화와 AI 활용을 통해 학교·기관의 시스템 이용 편의성을 개선했습니다.",
    caseStudy: {
      problem: "학교·기관이 이용하는 평가 시스템에서 현장의 사용 편의성을 높이는 것이 필요했습니다.",
      contribution: "메일 발송·데이터 관리·화면 개발을 담당하고, RAG와 AI 에이전트를 서비스에 도입해 활용했습니다.",
      outcome: "학교·기관으로부터 이전보다 편리한 시스템이라는 긍정적인 피드백을 받았습니다.",
    },
  },
  {
    title: "팜스테이션 Flutter 리뉴얼 및 운영",
    period: "2022.04 ~ 운영 중",
    company: "에이치에스제이엘",
    stack: ["Flutter", "Dart"],
    description:
      "사용자가 만족하는 화면 경험과 Android·iOS를 함께 관리하는 운영 효율을 개선했습니다.",
    caseStudy: {
      problem: "앱의 화면과 사용 흐름을 개선해야 했고, Android와 iOS를 각각 수정하는 운영 방식에는 많은 노력이 들었습니다.",
      contribution: "구현이 까다로웠던 UI·UX(화면과 사용 흐름)를 풀어내며 앱 화면을 개선했습니다. Flutter를 채택해 두 플랫폼을 공통 코드 기반으로 개발·관리하는 방식으로 전환했습니다.",
      outcome: "개선된 사용 경험에 대해 사용자들로부터 높은 만족도의 피드백을 받았습니다. 플랫폼별로 따로 수정하던 부담을 줄여 서비스를 더 효율적으로 운영했습니다.",
    },
  },
  {
    title: "한국부동산원 보상드림 시스템 운영·유지",
    period: "2023.12 ~ 2024.07",
    company: "KCC정보통신",
    stack: ["Spring Boot", "MyBatis", "JSP", "Oracle"],
    description:
      "운영 중 드러난 버그와 미완성 기능을 지속적으로 보완하며 복잡한 업무의 개선에 집중했습니다.",
    caseStudy: {
      problem: "구축 이후에도 보완이 필요한 기능과 버그가 남아 있어, 실제 운영과 기능 개선을 함께 진행해야 했습니다.",
      contribution: "운영 과정의 버그를 수정하고 기능을 지속적으로 업데이트했습니다. 복잡한 업무도 개선할 수 있도록 처리 흐름을 살피고 보완 작업을 이어갔습니다.",
      outcome: "운영 중 확인된 문제를 수정하고 필요한 기능을 보완하는 데 기여했습니다. 단발성 수정에 그치지 않고 운영유지 기간 동안 개선을 지속했습니다.",
    },
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
      "한 달 넘게 수작업으로 찾던 교부금 조정값을, 계산 과정을 재설계해 한 번의 계산으로 산출하도록 바꿨습니다.",
    caseStudy: {
      problem: "실무자는 교부금을 적절히 분배할 조정값을 찾기 위해 한 달 넘게 값을 수동으로 대입하고 확인했습니다. 초기 구현안 역시 3중 이상의 반복문으로 후보 값을 하나씩 시험하는 방식이었습니다.",
      contribution: "모든 후보를 대입하는 방식이 비효율적이라고 판단해 계산 과정을 하나씩 역추적했습니다. 원하는 결과를 만드는 계산 관계를 찾아, 조정값을 직접 산출하는 방식으로 재설계했습니다.",
      outcome: "장기간 반복하던 수동 탐색을 한 번의 계산으로 조정값을 구하는 과정으로 전환했습니다. 반복 작업을 그대로 코드로 옮기는 대신, 실무자가 값을 찾는 방식 자체를 개선했습니다.",
    },
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
