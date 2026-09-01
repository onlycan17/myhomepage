import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogCodeCopyEnhancer } from "@/components/interactive/BlogCodeCopyEnhancer";
import { BlogReadingProgress } from "@/components/interactive/BlogReadingProgress";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getAllPosts, getAllPostSlugs, getPostBySlug, shouldRenderPostLead } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const slugs = await getAllPostSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "글을 찾을 수 없습니다" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "ko_KR",
      url: `https://onlycan17.vercel.app/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const [post, posts] = await Promise.all([getPostBySlug(slug), getAllPosts()]);

  if (!post) {
    notFound();
  }

  const shouldShowLead = shouldRenderPostLead(post.description, post.content);
  const commandPalettePosts = posts.map(({ slug: postSlug, title }) => ({ slug: postSlug, title }));

  return (
    <>
      <SiteHeader commandPalettePosts={commandPalettePosts} />
      <BlogReadingProgress targetId="blog-post-article" />
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-5 py-16 sm:px-8 lg:px-10">
        <article id="blog-post-article" className="surface-card p-6 sm:p-8 lg:p-10">
          <p className="monolabel">{"// post"}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-cyan-800">{formatDate(post.date)}</p>
          {shouldShowLead ? <p className="mt-6 text-base leading-8 text-slate-700">{post.description}</p> : null}
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="tech-chip">
                {tag}
              </span>
            ))}
          </div>
          <div className="prose-markdown mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </main>
      <BlogCodeCopyEnhancer selector="#blog-post-article .prose-markdown" />
      <SiteFooter />
    </>
  );
}
