# LLM 학습 연재 편집 기록

2026-09-09에 사용자가 지정한 Notion 「LLM 학습 관련」의 직접 연결 문서 17개를 읽고 새 글 9편으로 편집했다. Notion 원본은 수정하지 않았다. 기존 블로그의 RAG 회고·질문법·세션 JWT 글도 유지했다.

## 원문과 글의 대응

| Notion 원문 | 블로그 글 파일명 |
| --- | --- |
| Direct-OPD | llm-direct-opd-explained.md |
| LLM 신경망 학습부터 추론 원리 전체 정리 | llm-training-inference-basics.md |
| What Is an AI Agent? Definitions, Workflows vs Agents Explained | llm-agent-workflows-patterns.md |
| Agentic AI Design Patterns: Chaining, Routing, Orchestrator | llm-agent-workflows-patterns.md |
| Agentic AI Risks, Guardrails, Evals and Traps to Avoid | llm-judge-evaluation-guardrails.md |
| OpenAI, Claude, Gemini, Ollama, Groq | llm-api-providers-explained.md |
| Multiple LLM API Keys and Generate a Question to Ask | llm-api-providers-explained.md |
| 여러 회사의 AI 모델을 OpenAI와 거의 같은 파이썬 코드로 호출하는 방법 | llm-api-providers-explained.md |
| Install Ollama and Run Local LLMs: Llama, GPT-OSS and Gemma | llm-ollama-local-models.md |
| LLM as a Judge, Rank Multiple LLMs with an Orchestration Flow | llm-judge-evaluation-guardrails.md |
| AI가 다른 AI의 답변을 심사하기 | llm-judge-evaluation-guardrails.md |
| AI 에이전트 생태계: 프레임워크, 런타임, 도구, 빌더 | llm-agent-workflows-patterns.md |
| 도구 호출의 작동 원리와 AI 에이전트 자율성의 실체 | llm-tool-calling-loop.md |
| 내 이력서와 자기소개 자료를 AI에게 읽혀서, 나를 대신해 경력과 역량을 설명하는 작은 “커리어 디지털 트윈”을 만들기 위한 기초 강의 | llm-career-digital-twin.md |
| 내 경력 정보를 대신 설명해 주는 ‘디지털 트윈 챗봇’ 2 | llm-career-digital-twin.md |
| AI가 도구를 쓰고, 일이 끝날 때까지 반복 실행하는 구조를 직접 구현하며 “AI 에이전트가 실제로 어떻게 동작하는가” | llm-tool-calling-loop.md |
| 컨텍스트 엔지니어링 | llm-context-engineering.md |

글 경로는 `content/posts/`, 공통 이미지 경로는 `public/blog/llm-learning-series/`다. 첫 글의 ‘다음으로 읽을 글’에서 나머지 8편에 연결된다.

## 편집 시 보완한 내용

- Direct-OPD의 원 메모 수치와 논문 v2 수치가 달라 성능 수치를 단정하지 않았다. 검증하지 못한 확장 기술은 확인되지 않았다고 본문에 명시했다.
- 교사 모델이 항상 작다는 설명, 확률의 단순 차이와 로그 확률 차이, 동시 실행과 분담 구조를 구분했다.
- 호환 API가 모든 기능의 동일성을 뜻하지 않음을 명시했다. 특정 시점의 모델 순위와 가격·장치별 성능은 일반화하지 않았다.
- `.env` 파일이 자동 암호화된다는 오해, 로컬 실행이 모든 외부 통신을 막는다는 오해를 보완했다.
- 일반 요청의 추론과 재학습, 기록과 장기 기억, 도구 정의와 실제 실행을 구분했다.
- 도구 실행 한도·권한 확인·결과 불명·중복 실행, AI 심사의 순서 편향·형식 검증을 추가했다.
- 원문에서 대본을 읽지 못했다고 밝힌 두 개념 메모는 실제 강의 발언이나 실험 결과로 인용하지 않았다.
- 깨진 원본 이미지를 재사용하지 않고 개념 그림과 SVG 도표를 새로 제작했다. 가상 사례는 측정 결과로 제시하지 않았다.

## 대표 이미지 제작

내장 imagegen 도구로 생성했으며 결과 파일은 `public/blog/llm-learning-series/learning-journey.png`다. 9개 SVG 도표는 한국어 글자와 흐름을 정확하게 배치하기 위해 코드로 제작했다. 실제 데이터를 나타내는 통계 차트는 없다.

최종 이미지 프롬프트:

> Use case: illustration-story. Asset type: wide editorial cover for a Korean beginner LLM and AI agent educational blog series. Create a warm, polished hand-drawn magazine illustration on ivory paper, navy ink and restrained teal and amber accents. A human learner travels through a continuous tabletop learning scene from left to right: open study book and small connected neuron shapes, a laptop with abstract document cards, a friendly assistant assembling tools with a small loop arrow, and a human reviewing an output checklist under a desk lamp. Visually explain the journey from learning language patterns to using tools and verifying results. Four distinct but connected stations, generous spacing, calm and intelligent mood. No text, no numbers, no letters, no brands, no watermark. Wide 16:9 composition. This is an educational metaphor, no claims of human-like consciousness.

## 검증 범위

`npm run lint`, `npx tsc --noEmit`, `npm run build`와 `git diff --check`가 통과했다. 콘텐츠 검사에서 새 글 9편, 표 18개, 이미지 참조 10개, 내부 글 링크 24개를 확인했다. SVG 9개는 XML 파싱을 통과했다.

9개 상세 페이지의 HTTP 200 응답, 페이지별 표 2개와 블로그 목록의 신규 글 노출을 확인했다. Aside 브라우저의 1440px 화면에서 첫 글의 이미지 로딩과 도표 표시, 가로 넘침 없음을 확인했다. 모바일 실화면 검증은 수행하지 않았다.

외부 유료 모델 호출, 모델 다운로드, 학습 성능 재현, 공개 배포는 이 콘텐츠 편집의 검증에 포함하지 않는다.
