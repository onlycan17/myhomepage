"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import type { KeyboardEvent as ReactKeyboardEvent } from "react";

import type { CommandPaletteItem } from "@/lib/navigation";

function normalizeKeyword(value: string): string {
  return value.trim().toLowerCase();
}

type UseCommandPaletteOptions = {
  items: CommandPaletteItem[];
  onSelect: (item: CommandPaletteItem) => void;
};

export function useCommandPalette({ items, onSelect }: UseCommandPaletteOptions) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQueryValue] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredItems = useMemo(() => {
    const normalizedQuery = normalizeKeyword(query);

    if (!normalizedQuery) {
      return items;
    }

    return items.filter((item) => {
      const haystack = [item.label, ...item.keywords].map(normalizeKeyword);
      return haystack.some((value) => value.includes(normalizedQuery));
    });
  }, [items, query]);

  const safeActiveIndex = Math.min(activeIndex, Math.max(filteredItems.length - 1, 0));

  const closePalette = useCallback(() => {
    setIsOpen(false);
    setQueryValue("");
    setActiveIndex(0);
  }, []);

  const openPalette = useCallback(() => {
    setIsOpen(true);
  }, []);

  const setQuery = useCallback((value: string) => {
    setQueryValue(value);
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    const handleWindowKeydown = (event: KeyboardEvent) => {
      const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

      if (isShortcut) {
        event.preventDefault();
        setIsOpen(true);
        return;
      }

      if (event.key === "Escape") {
        closePalette();
      }
    };

    window.addEventListener("keydown", handleWindowKeydown);

    return () => {
      window.removeEventListener("keydown", handleWindowKeydown);
    };
  }, [closePalette]);

  const handleListKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLInputElement>) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        if (filteredItems.length === 0) {
          return;
        }

        setActiveIndex((currentIndex) => (currentIndex + 1) % filteredItems.length);
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        if (filteredItems.length === 0) {
          return;
        }

        setActiveIndex((currentIndex) =>
          currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1,
        );
      }

      if (event.key === "Enter") {
        const selectedItem = filteredItems[safeActiveIndex];

        if (!selectedItem) {
          return;
        }

        event.preventDefault();
        onSelect(selectedItem);
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closePalette();
      }
    },
    [closePalette, filteredItems, onSelect, safeActiveIndex],
  );

  return {
    activeIndex: safeActiveIndex,
    closePalette,
    filteredItems,
    handleListKeyDown,
    isOpen,
    openPalette,
    query,
    setActiveIndex,
    setQuery,
  };
}
