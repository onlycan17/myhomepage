"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { hash: "#about", label: "About" },
  { hash: "#skills", label: "Skills" },
  { hash: "#career", label: "Career" },
  { hash: "#projects", label: "Projects" },
  { hash: "#work", label: "Work" },
  { hash: "#blog", label: "Blog" },
  { hash: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-[rgba(246,248,252,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.24em] text-slate-950 uppercase"
        >
          OJINSEOK.dev
        </Link>
        <nav aria-label="주요 섹션" className="hidden gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.hash}
              href={pathname === "/" ? item.hash : `/${item.hash}`}
              className="text-sm text-slate-700 transition hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f8fc]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Link href="/blog" className="chip-link hidden sm:inline-flex">
          블로그 보기
        </Link>
      </div>
    </header>
  );
}
