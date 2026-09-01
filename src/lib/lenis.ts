import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null): void {
  lenisInstance = instance;
}

export function getLenisInstance(): Lenis | null {
  return lenisInstance;
}

export function scrollToHash(hash: string, immediate = false): boolean {
  if (typeof document === "undefined") {
    return false;
  }

  const target = document.querySelector<HTMLElement>(hash);

  if (!target) {
    return false;
  }

  if (lenisInstance) {
    lenisInstance.scrollTo(target, { immediate });
    return true;
  }

  target.scrollIntoView({ behavior: immediate ? "auto" : "smooth", block: "start" });
  return true;
}
