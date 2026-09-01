import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CareerSection } from "@/components/sections/CareerSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { getAllPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = await getAllPosts();
  const commandPalettePosts = posts.map(({ slug, title }) => ({ slug, title }));

  return (
    <>
      <a href="#main-content" className="skip-link">
        본문으로 건너뛰기
      </a>
      <SiteHeader commandPalettePosts={commandPalettePosts} />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CareerSection />
        <ProjectsSection />
        <WorkSection />
        <BlogSection posts={posts.slice(0, 2)} />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
