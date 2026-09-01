import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "블로그",
  description: "오진석 개발자의 실무 회고와 기술 설계 노트를 모은 블로그입니다.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const commandPalettePosts = posts.map(({ slug, title }) => ({ slug, title }));

  return (
    <>
      <SiteHeader commandPalettePosts={commandPalettePosts} />
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-5 py-16 sm:px-8 lg:px-10">
        <header className="space-y-4">
          <p className="monolabel">{"// blog index"}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">마크다운 블로그</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            구현 과정에서 배운 점과 다음에 더 잘하기 위한 메모를 정리합니다.
          </p>
        </header>
        <div className="overflow-hidden rounded-[1.75rem] border border-black/8 bg-white/75">
          {posts.map((post, index) => (
            <article key={post.slug} className={index === 0 ? "" : "border-t border-black/8"}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-3 px-4 py-4 transition hover:bg-slate-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700/30 focus-visible:ring-inset sm:grid-cols-[7.5rem_minmax(0,1fr)_auto] sm:items-center sm:gap-4 sm:px-5"
              >
                <p className="font-mono text-[0.72rem] tracking-[0.08em] text-slate-500">{formatDate(post.date)}</p>
                <div className="min-w-0">
                  <h2 className="truncate text-sm font-semibold text-slate-900 transition group-hover:text-cyan-800">
                    {post.title}
                  </h2>
                  {post.tags.length > 0 ? (
                    <div className="mt-2 flex flex-wrap gap-2 sm:mt-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[0.7rem] font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
                <span
                  aria-hidden="true"
                  className="justify-self-end text-sm text-slate-400 transition duration-200 group-hover:translate-x-1 group-hover:text-cyan-700"
                >
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
