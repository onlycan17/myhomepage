# 개인 홈페이지 구축 계획 (PLAN)

## 1. 목표
오진석 개발자를 알리는 개인 홈페이지. 개발자 이력서 형태 + GitHub 포트폴리오 + 마크다운 블로그.

## 2. 기술 스택 (확정)
- Next.js (App Router, 최신 안정판) + TypeScript strict
- Tailwind CSS
- 블로그: `content/posts/*.md` + front-matter(title/date/tags/description), `gray-matter` + `remark`(또는 `marked`) 렌더링, `generateStaticParams`로 정적 생성
- 애니메이션: framer-motion (스크롤 리빌)
- 폰트: Pretendard(국문) + JetBrains Mono(코드 감성) — `next/font` 또는 CDN
- 배포: Vercel (push 시 자동 배포), 한국어 단일

## 3. 페이지/섹션 구조
```
/  한 장 스크롤 랜딩
├─ Hero          터미널 스타일 자기소개 ($ whoami → 오진석), 태그라인, CTA(이메일/GitHub/Notion), 프로필 사진
├─ About         요약 소개 + 핵심 강점 3~4장 카드 + Notion 텍스트 링크
├─ Skills        도메인별 그룹 칩 (백엔드/프론트/모바일/AI/데이터·인프라/컬래버레이션), 자격증
├─ Career        수직 타임라인 7개 회사 (기간·직급·핵심성과)
├─ Projects      GitHub 포트폴리오: 카테고리 필터 + 카드(설명/언어/링크), 하위에 "학습 아카이브" 접이식 목록
├─ Work          경력기술서 기반 대표 프로젝트 8건 (업무 프로젝트는 비공개라 GitHub와 별개로 정리)
├─ Blog          /blog 목록 + /blog/[slug] 상세 (마크다운 게시물)
└─ Contact       이메일 + GitHub + Notion + 채용 조건 스트립. 푸터.
```

## 4. 디자인 방향
- 라이트 테마 우선: 배경은 #f6f8fc 계열의 밝은 회색빛 흰자, 카드 배경은 흰색, 전경은 짙은 slate 계열
- 액센트는 시안(#0891b2) ~ 바이올렛(#6d28d9) 그라디언트로 유지하되, 흰 배경에서도 대비가 충분하도록 더 짙게 사용
- 모노스페이스 라벨/주석으로 "코드 같은 이력서" 감성 (예: 섹션 제목 위에 `// career` 주석)
- 히어로: 전체 페이지는 라이트이지만, 터미널 프롬프트 카드만 예외적으로 다크 스타일 유지 가능
- 카드: 얇은 보더 + 호버 시 은은한 액센트 글로우. 과도한 그림자 금지
- 반응형(모바일 퍼스트), 스크롤 리빌, 접근성 기본(시맨틱 마크, focus-visible)
- SEO: metadata, OG 태그
- 추가 인터랙션 목록
  - ⌘K / Ctrl+K 커맨드 팔레트: 섹션, 블로그 글 제목, 외부 링크 빠른 이동
  - Lenis 기반 전역 부드러운 스크롤과 경로 변경 시 스크롤 위치 초기화
  - 상단 전역 스크롤 진행률 바와 블로그 상세 전용 읽기 진행률 바
  - 홈 데스크톱 내비 스크롤 스파이로 현재 섹션 강조
  - 히어로 커서 추적 글로우와 이미지 포함 프로젝트 카드 3D 틸트
  - 스킬 스택 무한 마퀴와 About 지표 카운트업 스트립
  - 블로그 코드 블록 복사 버튼과 reduced-motion 대응

## 5. 개인정보 제약 (절대 준수)
- **금지**: 연봉 이력, 자택 주소, 휴대폰 번호, 학점, 희망연봉
- **허용**: 이름, 이메일(onlycan17@gmail.com), GitHub 링크, 대략적 지역(대한민국), 경력/학력(학교·전공·기간)

## 6. 데이터 파일 구성
- `src/data/profile.ts` — 인적사항/소개/스킬/연락처 링크 (docs/CONTENT.md §1~3, §8)
- `src/data/career.ts` — 경력 타임라인 (§4)
- `src/data/workProjects.ts` — 대표 업무 프로젝트 8건 (§5)
- `src/data/projects.ts` — GitHub 저장소 큐레이션 (§6, API 메타데이터 병합)

## 7. 하네스 / 검증 체크리스트 (HARNESS_CHECKLIST)
- [ ] `npm run build` 성공 (exit 0)
- [ ] `npm run lint`(또는 `next lint`) 통과
- [ ] `npm run dev` 기동 후 데스크톱(1440px)/모바일(390px) 스냅샷 확인 — 깨진 레이아웃 없음
- [ ] /blog/[slug] 상세 페이지 정적 생성 확인 (샘플 포스트 2편 렌더링)
- [ ] 금지 개인정보(연봉/주소/전화) 문자열 grep 결과 0건
- [ ] 모든 섹션 앵커 내비 이동 동작

## 8. 회귀 기록
- (없음 — 초기 구축. 이후 변경 시 실패 케이스 추가)
