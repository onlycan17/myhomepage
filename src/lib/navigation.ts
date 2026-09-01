import type { PostMeta } from "@/types/content";

export type SectionId =
  | "about"
  | "skills"
  | "career"
  | "projects"
  | "work"
  | "blog"
  | "contact";

export type CommandPaletteGroup = "섹션" | "블로그" | "외부 링크";

export type SectionNavItem = {
  id: SectionId;
  hash: `#${SectionId}`;
  href: `/#${SectionId}`;
  label: string;
};

export type CommandPaletteItem = {
  id: string;
  label: string;
  href: string;
  group: CommandPaletteGroup;
  keywords: string[];
  kind: "section" | "post" | "external";
  hash?: `#${SectionId}`;
};

export type CommandPalettePost = Pick<PostMeta, "slug" | "title">;

export const sectionNavItems: SectionNavItem[] = [
  { id: "about", hash: "#about", href: "/#about", label: "About" },
  { id: "skills", hash: "#skills", href: "/#skills", label: "Skills" },
  { id: "career", hash: "#career", href: "/#career", label: "Career" },
  { id: "projects", hash: "#projects", href: "/#projects", label: "Projects" },
  { id: "work", hash: "#work", href: "/#work", label: "Work" },
  { id: "blog", hash: "#blog", href: "/#blog", label: "Blog" },
  { id: "contact", hash: "#contact", href: "/#contact", label: "Contact" },
];

export const externalCommandLinks: CommandPaletteItem[] = [
  {
    id: "external-github",
    label: "GitHub",
    href: "https://github.com/onlycan17",
    group: "외부 링크",
    keywords: ["github", "깃허브", "저장소", "repo"],
    kind: "external",
  },
  {
    id: "external-notion",
    label: "Notion",
    href: "https://www.notion.so/8b414daeb98540b8bccd1dbbe2a6bcf7?pvs=4",
    group: "외부 링크",
    keywords: ["notion", "노션", "포트폴리오"],
    kind: "external",
  },
  {
    id: "external-email",
    label: "이메일 보내기",
    href: "mailto:onlycan17@gmail.com",
    group: "외부 링크",
    keywords: ["email", "mail", "이메일", "연락"],
    kind: "external",
  },
];

export function buildCommandPaletteItems(posts: CommandPalettePost[]): CommandPaletteItem[] {
  const sectionItems: CommandPaletteItem[] = sectionNavItems.map((item) => ({
    id: `section-${item.id}`,
    label: item.label,
    href: item.href,
    group: "섹션",
    keywords: [item.id, item.label.toLowerCase(), item.hash],
    kind: "section",
    hash: item.hash,
  }));

  const postItems: CommandPaletteItem[] = posts.map((post) => ({
    id: `post-${post.slug}`,
    label: post.title,
    href: `/blog/${post.slug}`,
    group: "블로그",
    keywords: [post.slug, post.title.toLowerCase(), "blog", "post", "블로그"],
    kind: "post",
  }));

  return [...sectionItems, ...postItems, ...externalCommandLinks];
}
