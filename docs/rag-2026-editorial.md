# RAG 두 편 편집 기록

2026-09-09, 지정 Notion 「Rag 2026」에 직접 연결된 「RAG 기술 정리 (2026 업데이트 관점)」와 「알기쉽게 정리」를 로그인된 Aside 브라우저로 읽었다. 원문은 수정하지 않았다.

## 중복 판단과 등록

두 원문은 준비·검색·후처리, Hybrid, Agentic/Graph/Modular RAG 설명이 상당히 겹친다. 두 번째 문서에는 서비스 계층, LangGraph 흐름, 대규모 운영 설명이 추가되어 완전 중복은 아니다.

- `content/posts/rag-search-pipeline-explained.md`: 두 원문의 공통 개념을 통합. 청킹·검색·재정렬·인용에 집중.
- `content/posts/rag-quality-and-operations.md`: 평가와 서비스 운영 내용을 중심으로 추가 검색·관계 검색·확장 기준을 설명.

기존 `rag-fastapi-langchain-design-notes.md`는 저장 구조 회고, `llm-context-engineering.md`는 입력 구성과 기억, `llm-judge-evaluation-guardrails.md`는 일반 AI 평가를 다룬다. 주제는 연결되지만 새 글과 동일 본문은 아니며 관련 글 링크로 연결했다. 기존 글은 수정하지 않았다.

## 보완

- Hybrid·rerank·압축·계층형 청킹이 언제나 필수라는 단정을 적용 조건과 평가 기준으로 바꿨다.
- 문서 건수만으로 ANN·샤딩을 강제하는 기준, 구체 용량·지연의 검증되지 않은 수치는 제외했다.
- 전체 재색인은 필요할 수 있음을 설명했다. 캐시의 권한·버전·삭제 반영을 추가했다.
- LangGraph의 작업 그래프와 GraphRAG의 지식 관계를 구분했다.
- 원문의 미완성 코드는 실행 가능한 예제로 복제하지 않았다. 예시 비율은 가상임을 명시했다.
- 원문 참고 논문과 Pinecone 설명, Microsoft GraphRAG·LangGraph·pgvector 공식 문서를 확인하고 본문에 연결했다.

## 이미지

`public/blog/rag-2026/`에 생성 일러스트 1개와 한국어 SVG 개념도 3개를 저장했다. 도표는 실측 통계가 아니다.

이미지 생성 최종 프롬프트:

> Create a wide 16:9 editorial illustration for a Korean beginner blog explaining retrieval augmented generation. Warm ivory paper, navy ink, restrained teal and amber, hand-drawn sophisticated magazine style. Left: organized library shelves and indexed document cards. Center: a human librarian using a magnifying glass to select a few relevant pages, with two small streams of cards merging. Right: an open answer notebook with small colored source tabs connected visually to selected pages. Clear visual progression from stored documents to selecting evidence to writing a grounded answer. Generous negative space, balanced composition. No text, no letters, no numbers, no logos, no watermark. This is a conceptual metaphor, not a statistical chart.

## 검증 결과

- 공백 오류 검사, ESLint, TypeScript 검사, 프로덕션 빌드 통과(정적 페이지 56개).
- 새 글 2편의 메타데이터, 표 4개, 이미지 참조 4개, 내부 글 링크 검사 통과. SVG 3개 XML 검증 통과.
- 새 글 2편 HTTP 200, 블로그 목록 노출, 이미지 4개 HTTP 200 확인.
- Aside 1440px 브라우저에서 운영 편 도표 로딩, 표 개수, 가로 넘침 없음 확인. 모바일 실화면은 검증하지 않았다.
- 로컬 콘텐츠 등록이며 커밋·푸시·공개 배포는 수행하지 않았다.
