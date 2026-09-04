"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { CommandPalette } from "@/components/interactive/CommandPalette";
import { useActiveSection } from "@/hooks/useActiveSection";
import { sectionNavItems, type CommandPalettePost } from "@/lib/navigation";
import { joinClasses } from "@/lib/utils";

type SiteHeaderProps = {
  commandPalettePosts?: CommandPalettePost[];
};

export function SiteHeader({ commandPalettePosts = [] }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome = pathname === "/";
  const activeSection = useActiveSection(
    sectionNavItems.map((item) => item.id),
    isHome,
  );

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative sticky top-0 z-50 border-b border-black/8 bg-[rgba(246,248,252,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          onClick={handleMobileNavClick}
          className="text-sm font-semibold tracking-[0.24em] text-slate-950 uppercase"
        >
          OJINSEOK.dev
        </Link>
        <nav aria-label="주요 섹션" className="hidden gap-5 md:flex">
          {sectionNavItems.map((item) => {
            const isActive = isHome && activeSection === item.id;

            return (
              <a
                key={item.hash}
                href={pathname === "/" ? item.hash : item.href}
                className={joinClasses(
                  "relative text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f8fc]",
                  isActive ? "text-cyan-800" : "text-slate-700 hover:text-slate-950",
                )}
                aria-current={isActive ? "location" : undefined}
              >
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className={joinClasses(
                    "absolute inset-x-0 -bottom-2 mx-auto h-1.5 w-1.5 rounded-full bg-[linear-gradient(90deg,#0891b2_0%,#6d28d9_100%)] transition",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                />
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <CommandPalette posts={commandPalettePosts} />
          <button
            type="button"
            className="mobile-menu-trigger secondary-link px-3 py-2 text-sm md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-section-menu"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            메뉴
          </button>
          <Link href="/blog" className="desktop-blog-link chip-link">
            블로그 보기
          </Link>
        </div>
      </div>
      {isMobileMenuOpen ? (
        <nav
          id="mobile-section-menu"
          aria-label="모바일 주요 섹션"
          className="mobile-menu-panel absolute inset-x-0 top-full border-b border-black/8 bg-[rgba(246,248,252,0.96)] px-5 py-3 shadow-lg backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto grid max-w-6xl gap-1 sm:grid-cols-2">
            {sectionNavItems.map((item) => (
              <a
                key={item.hash}
                href={pathname === "/" ? item.hash : item.href}
                onClick={handleMobileNavClick}
                className={joinClasses(
                  "rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-cyan-700/8",
                  isHome && activeSection === item.id
                    ? "text-cyan-800"
                    : "text-slate-700",
                )}
                aria-current={isHome && activeSection === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
