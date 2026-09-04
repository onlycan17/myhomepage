"use client";

import { useEffect, useMemo, useRef } from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

import { useCommandPalette } from "@/hooks/useCommandPalette";
import { getLenisInstance } from "@/lib/lenis";
import {
  buildCommandPaletteItems,
  type CommandPaletteGroup,
  type CommandPalettePost,
  type CommandPaletteItem,
} from "@/lib/navigation";
import { joinClasses } from "@/lib/utils";

type CommandPaletteProps = {
  posts: CommandPalettePost[];
};

const groupOrder: CommandPaletteGroup[] = ["섹션", "블로그", "외부 링크"];

function focusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute("disabled"));
}

export function CommandPalette({ posts }: CommandPaletteProps) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion() ?? false;
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const items = useMemo(() => buildCommandPaletteItems(posts), [posts]);

  const handleSelect = (item: CommandPaletteItem) => {
    if (item.kind === "external") {
      if (item.href.startsWith("mailto:")) {
        window.location.assign(item.href);
      } else {
        window.open(item.href, "_blank", "noopener,noreferrer");
      }

      closePalette();
      return;
    }

    if (item.kind === "section" && item.hash && pathname === "/") {
      window.history.replaceState({}, "", item.hash);
      const lenis = getLenisInstance();

      if (lenis) {
        lenis.scrollTo(item.hash, { immediate: reducedMotion });
      } else {
        document.querySelector(item.hash)?.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }

      closePalette();
      return;
    }

    router.push(item.href);
    closePalette();
  };

  const {
    activeIndex,
    closePalette,
    filteredItems,
    handleListKeyDown,
    isOpen,
    openPalette,
    query,
    setActiveIndex,
    setQuery,
  } = useCommandPalette({ items, onSelect: handleSelect });

  useEffect(() => {
    if (!isOpen) {
      previousFocusRef.current?.focus();
      return;
    }

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const activeOption = document.getElementById(
      `command-palette-option-${activeIndex}`,
    );
    activeOption?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, isOpen]);

  const handleDialogKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") {
      return;
    }

    const container = dialogRef.current;

    if (!container) {
      return;
    }

    const elements = focusableElements(container);

    if (elements.length === 0) {
      event.preventDefault();
      return;
    }

    const first = elements[0];
    const last = elements[elements.length - 1];
    const activeElement = document.activeElement;

    if (event.shiftKey && activeElement === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const groupedEntries = groupOrder.map((group) => ({
    group,
    items: filteredItems
      .map((item, index) => ({ item, index }))
      .filter((entry) => entry.item.group === group),
  }));

  return (
    <>
      <button
        type="button"
        onClick={openPalette}
        className="secondary-link inline-flex items-center justify-between gap-2 px-3 py-2 text-sm sm:min-w-[8.5rem] sm:gap-3 sm:px-4 sm:py-3"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="command-palette-dialog"
        aria-label="빠른 이동 열기"
      >
        <span>빠른 이동</span>
        <span className="hidden font-mono text-[0.72rem] tracking-[0.16em] text-slate-500 sm:inline">
          ⌘K
        </span>
      </button>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-24 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              aria-label="커맨드 팔레트 닫기"
              className="absolute inset-0 bg-slate-950/45 backdrop-blur-lg"
              onClick={closePalette}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              id="command-palette-dialog"
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="command-palette-title"
              className="relative z-10 flex w-full max-w-2xl flex-col overflow-hidden rounded-[1.75rem] border border-cyan-700/14 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.3)] ring-1 ring-slate-900/5 backdrop-blur-2xl"
              initial={
                reducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.96, y: 16 }
              }
              animate={
                reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }
              }
              exit={
                reducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.98, y: 10 }
              }
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              onKeyDown={handleDialogKeyDown}
            >
              <div className="border-b border-black/8 px-5 py-4 sm:px-6">
                <div className="flex items-center justify-between gap-4">
                  <p id="command-palette-title" className="monolabel">
                    {"// command palette"}
                  </p>
                  <button
                    type="button"
                    onClick={closePalette}
                    className="secondary-link px-3 py-2 text-sm"
                  >
                    닫기
                  </button>
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={handleListKeyDown}
                  placeholder="섹션, 블로그 글, GitHub, Notion, 이메일"
                  className="mt-3 w-full border-0 bg-transparent text-lg font-medium text-slate-950 outline-none placeholder:text-slate-400"
                  role="combobox"
                  aria-expanded={isOpen}
                  aria-autocomplete="list"
                  aria-controls="command-palette-list"
                  aria-activedescendant={
                    filteredItems[activeIndex]
                      ? `command-palette-option-${activeIndex}`
                      : undefined
                  }
                />
              </div>
              <div
                id="command-palette-list"
                className="max-h-[24rem] overflow-y-auto px-3 py-3"
                role="listbox"
                aria-label="빠른 이동 결과"
              >
                {filteredItems.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-black/8 px-4 py-8 text-center text-sm text-slate-500">
                    검색 결과가 없습니다.
                  </div>
                ) : (
                  groupedEntries.map(({ group, items: groupItems }) => {
                    if (groupItems.length === 0) {
                      return null;
                    }

                    return (
                      <div key={group} className="mb-3 last:mb-0">
                        <p className="px-3 pb-2 font-mono text-[0.7rem] tracking-[0.18em] text-slate-500 uppercase">
                          {group}
                        </p>
                        <div className="space-y-1">
                          {groupItems.map(({ item, index }) => {
                            const isActive = index === activeIndex;

                            return (
                              <button
                                key={item.id}
                                id={`command-palette-option-${index}`}
                                type="button"
                                role="option"
                                aria-selected={isActive}
                                tabIndex={-1}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => handleSelect(item)}
                                className={joinClasses(
                                  "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition",
                                  isActive
                                    ? "bg-[linear-gradient(90deg,rgba(8,145,178,0.2),rgba(109,40,217,0.18))] text-slate-950 shadow-sm ring-1 ring-cyan-700/30"
                                    : "text-slate-700 hover:bg-slate-100/90",
                                )}
                              >
                                <span className="min-w-0">
                                  <span className="block truncate text-sm font-semibold">
                                    {item.label}
                                  </span>
                                  <span className="mt-1 block truncate text-xs text-slate-500">
                                    {item.href}
                                  </span>
                                </span>
                                <span className="ml-4 font-mono text-[0.68rem] tracking-[0.16em] text-slate-400 uppercase">
                                  {item.kind}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
