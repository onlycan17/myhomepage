import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import { marked } from "marked";

import type { PostDetail, PostMeta } from "@/types/content";

const postsDirectory = path.join(process.cwd(), "content/posts");
const POST_LEAD_COMPARISON_LENGTH = 60;

marked.setOptions({
  gfm: true,
  breaks: true,
});

type FrontMatter = {
  title: string;
  date: string;
  tags: string[];
  description: string;
};

export function normalizePostLeadText(text: string): string {
  return text.replace(/\s+/g, "").slice(0, POST_LEAD_COMPARISON_LENGTH);
}

export function shouldRenderPostLead(description: string, content: string): boolean {
  const normalizedDescription = normalizePostLeadText(description);

  if (!normalizedDescription) {
    return false;
  }

  const normalizedContentStart = normalizePostLeadText(content);

  if (!normalizedContentStart) {
    return true;
  }

  return normalizedDescription !== normalizedContentStart;
}

async function readPostFile(slug: string): Promise<PostDetail> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const file = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(file);
  const frontMatter = data as FrontMatter;
  const html = await marked.parse(content);

  return {
    slug,
    title: frontMatter.title,
    date: frontMatter.date,
    tags: frontMatter.tags,
    description: frontMatter.description,
    content,
    html,
  };
}

export async function getAllPostSlugs(): Promise<string[]> {
  const fileNames = await fs.readdir(postsDirectory);

  return fileNames.filter((fileName) => fileName.endsWith(".md")).map((fileName) => fileName.replace(/\.md$/, ""));
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = await getAllPostSlugs();
  const posts = await Promise.all(slugs.map(readPostFile));

  return posts
    .map(({ slug, title, date, tags, description }) => ({
      slug,
      title,
      date,
      tags,
      description,
    }))
    .sort((left, right) => right.date.localeCompare(left.date));
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  try {
    return await readPostFile(slug);
  } catch {
    return null;
  }
}
