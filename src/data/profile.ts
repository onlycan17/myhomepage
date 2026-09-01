import type { Certificate, SkillGroup, Strength } from "@/types/content";

export const profile = {
  name: "오진석",
  englishName: "Oh Jin-Seok",
  headline: "13년차 풀스택 개발자",
  taglineKr: "어느새 풀스택 개발자가 되어버린...",
  taglineEn: "I somehow became a full-stack developer...",
  intro:
    "공공 시스템의 견고한 백엔드부터 Flutter 앱, AI RAG 서비스까지 문제를 푸는 재미로 13년을 달려온 개발자입니다.",
  location: "대한민국",
  status: "새로운 도전을 모색 중",
  email: "onlycan17@gmail.com",
  github: "https://github.com/onlycan17",
  notion: "https://www.notion.so/8b414daeb98540b8bccd1dbbe2a6bcf7?pvs=4",
  about: [
    "저는 Java와 Spring 기반 백엔드로 커리어를 시작해 공공·교육 시스템에서 데이터 모델링, 대량 데이터 처리, SQL과 프로시저 중심의 문제 해결을 오래 다뤄 왔습니다.",
    "이후 운영 서비스 환경에서 AWS 인프라와 Node.js, React, Next.js를 경험했고, Flutter로 멀티 디바이스 앱을 전면 개편하며 사용자 화면과 개발 생산성 사이의 균형을 익혔습니다.",
    "최근에는 FastAPI, LangChain, OpenAI API를 활용한 RAG 서비스 구축에 참여하며 AI 기능을 실제 제품 문맥에 안전하게 녹여내는 방법을 탐구하고 있습니다.",
    "기술 스택이 바뀌어도 핵심은 같다고 생각합니다. 시스템의 구조를 이해하고, 팀과 소통하며, 결국 서비스가 오래 버티는 방향으로 구현하는 개발자입니다.",
  ],
  audienceSummary:
    "백엔드의 안정성과 프론트엔드의 전달력, 모바일의 사용성을 한 흐름으로 연결하는 개발자입니다.",
  hiringPreferences: [
    "고용형태 정규직·프리랜서",
    "희망근무지 서울·대전",
    "지원분야 웹·앱 개발",
  ],
};

export const strengths: Strength[] = [
  {
    title: "폭넓은 풀스택 스펙트럼",
    description:
      "Java·Spring 백엔드부터 React·Next 프론트엔드, Flutter 앱까지 하나의 제품 흐름으로 설계하고 구현합니다.",
  },
  {
    title: "데이터를 아는 개발자",
    description:
      "Oracle, Tibero, DB2 환경에서 설계·프로시저·이관을 경험해 데이터 구조와 운영 제약을 함께 고려합니다.",
  },
  {
    title: "서비스 운영 감각",
    description:
      "AWS EB·S3·SQS 기반 운영 경험과 실제 서비스 유지보수 경험으로 개발 이후의 안정성까지 챙깁니다.",
  },
  {
    title: "AI 실무 전환기",
    description:
      "FastAPI, LangChain, OpenAI API를 바탕으로 RAG 서비스를 설계하며 제품에 맞는 AI 활용법을 구현해 왔습니다.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Spring Framework",
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "GraphQL",
      "Prisma",
      "JPA",
      "MyBatis",
      "REST API",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Mobile / Desktop",
    items: ["Flutter", "Dart", "Electron(준비 중)"],
  },
  {
    title: "AI",
    items: [
      "RAG",
      "LangChain",
      "OpenAI API",
      "LLM 파인튜닝",
      "프롬프트 엔지니어링",
      "Claude Code",
      "Codex",
    ],
  },
  {
    title: "Data / Infra",
    items: [
      "Oracle",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Tibero",
      "DB2",
      "AWS (EB·S3·SQS)",
      "Docker",
      "Linux",
    ],
  },
  {
    title: "컬래버레이션",
    items: ["Jira", "Slack"],
  },
];

export const certificates: Certificate[] = [
  {
    name: "OCJP",
    issuer: "Oracle Certified Professional Java Programmer",
    acquiredAt: "2010.10",
  },
];

export const education = {
  school: "계명대학교(성서)",
  major: "컴퓨터공학과",
  period: "2004 ~ 2012",
};
