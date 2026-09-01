"use client";

import { useEffect } from "react";

type BlogCodeCopyEnhancerProps = {
  selector: string;
};

export function BlogCodeCopyEnhancer({ selector }: BlogCodeCopyEnhancerProps) {
  useEffect(() => {
    const container = document.querySelector(selector);

    if (!(container instanceof HTMLElement)) {
      return;
    }

    const cleanupList: Array<() => void> = [];
    const blocks = Array.from(container.querySelectorAll("pre"));

    blocks.forEach((block, index) => {
      if (!(block instanceof HTMLElement)) {
        return;
      }

      if (block.dataset.copyReady === "true") {
        return;
      }

      block.dataset.copyReady = "true";
      block.classList.add("code-copy-container");

      const button = document.createElement("button");
      button.type = "button";
      button.className = "code-copy-button";
      button.textContent = "복사";
      button.setAttribute("aria-label", `코드 블록 ${index + 1} 복사`);

      let timerId: number | null = null;

      const handleClick = async () => {
        const codeText = block.innerText;

        try {
          await navigator.clipboard.writeText(codeText);
          button.textContent = "복사됨";
          button.dataset.copied = "true";

          if (timerId !== null) {
            window.clearTimeout(timerId);
          }

          timerId = window.setTimeout(() => {
            button.textContent = "복사";
            button.dataset.copied = "false";
          }, 2000);
        } catch {
          button.textContent = "실패";

          if (timerId !== null) {
            window.clearTimeout(timerId);
          }

          timerId = window.setTimeout(() => {
            button.textContent = "복사";
          }, 2000);
        }
      };

      button.addEventListener("click", handleClick);
      block.appendChild(button);

      cleanupList.push(() => {
        button.removeEventListener("click", handleClick);
        button.remove();
        if (timerId !== null) {
          window.clearTimeout(timerId);
        }
        delete block.dataset.copyReady;
        block.classList.remove("code-copy-container");
      });
    });

    return () => {
      cleanupList.forEach((cleanup) => cleanup());
    };
  }, [selector]);

  return null;
}
