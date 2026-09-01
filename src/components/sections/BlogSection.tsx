import Link from "next/link";

import { Reveal } from "@/components/common/Reveal";
import { SectionShell } from "@/components/common/SectionShell";
import { formatDate } from "@/lib/utils";
import type { PostMeta } from "@/types/content";

type BlogSectionProps = {
  posts: PostMeta[];
};

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <SectionShell
      id="blog"
      label="// blog"
      title="실무에서 배운 것을 문장으로 다시 정리합니다"
      description="기술 선택의 이유, 운영에서 부딪힌 문제, 다음에 더 잘하기 위한 회고를 마크다운 글로 기록합니다."
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {posts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.06} className="surface-card p-5 sm:p-6">
            <p className="text-sm text-cyan-800">{formatDate(post.date)}</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">{post.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-700">{post.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="tech-chip">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`} className="primary-link mt-6 inline-flex">
              글 읽기
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Link href="/blog" className="secondary-link inline-flex">
          블로그 전체 보기
        </Link>
      </Reveal>
    </SectionShell>
  );
}
