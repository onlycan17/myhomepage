# 오진석 개발자 개인 홈페이지

개발자 이력서 + GitHub 포트폴리오 + 마크다운 블로그를 한 곳에 모은 개인 사이트입니다.

## 기술 스택

- Next.js 16 (App Router) + TypeScript strict
- Tailwind CSS 4 — 라이트 테마 (히어로 터미널 카드만 다크 포인트)
- framer-motion 스크롤 리빌, Pretendard + JetBrains Mono
- 블로그: `content/posts/*.md` + gray-matter + marked → 정적 생성(SSG)

## 페이지 구성

| 경로 | 내용 |
| --- | --- |
| `/` | 히어로 · 소개 · 스킬 · 경력 타임라인 · GitHub 포트폴리오 · 대표 프로젝트 · 블로그 미리보기 · 연락처 |
| `/blog` | 전체 글 목록 (컴팩트 행 리스트) |
| `/blog/[slug]` | 글 상세 |

## 실행

```bash
npm install
npm run dev    # 개발 서버 (http://localhost:3000)
npm run build  # 프로덕션 빌드
npm run start  # 프로덕션 미리보기
```

## 콘텐츠 관리

- 프로필·경력·프로젝트 데이터: `src/data/*.ts`
- 블로그 글: `content/posts/` 에 front-matter(`title`, `date`, `tags`, `description`) 포함 마크다운 파일 추가 → 빌드 시 자동 반영
- `tistory-*` 슬러그 글은 기존 Tistory 블로그에서 이월한 글이며, 각 글 끝에 원문 링크가 있습니다. 이미지는 `public/blog/` 에 로컬 저장되어 있습니다.
- 공개 금지 정보(연봉·주소·전화번호 등)는 어떤 파일에도 포함하지 않습니다.

## 배포

Vercel 프로젝트 연결 시 push 자동 배포됩니다. (`npm run build` 검증 후 배포 권장)
