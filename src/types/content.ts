export type SkillGroup = {
  title: string;
  items: string[];
};

export type Strength = {
  title: string;
  description: string;
};

export type Certificate = {
  name: string;
  issuer: string;
  acquiredAt: string;
};

export type CareerItem = {
  company: string;
  role: string;
  period: string;
  summary: string[];
};

export type WorkProject = {
  title: string;
  period: string;
  company: string;
  stack: string[];
  description: string;
};

export type ProjectCategoryKey =
  | "ai"
  | "web"
  | "flutter"
  | "tools"
  | "java";

export type ProjectItem = {
  name: string;
  href: string;
  description: string;
  language: string;
  updatedAt: string;
  stars: number;
  topics: string[];
  category: ProjectCategoryKey;
};

export type ProjectCategory = {
  key: ProjectCategoryKey;
  label: string;
  description: string;
};

export type ArchiveProject = {
  name: string;
  href: string;
};

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
};

export type PostDetail = PostMeta & {
  content: string;
  html: string;
};
