import type { Metadata } from "next";

import { GlobalScrollProgress } from "@/components/interactive/GlobalScrollProgress";
import { ScrollProvider } from "@/components/interactive/ScrollProvider";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://onlycan17.vercel.app"),
  title: {
    default: "오진석 | 풀스택 개발자",
    template: "%s | 오진석",
  },
  description:
    "오진석 개발자의 개인 홈페이지입니다. 이력서, GitHub 포트폴리오, 마크다운 블로그를 한국어로 정리했습니다.",
  keywords: [
    "오진석",
    "풀스택 개발자",
    "Next.js",
    "Flutter",
    "Spring Boot",
    "RAG",
    "포트폴리오",
  ],
  openGraph: {
    title: "오진석 | 풀스택 개발자",
    description:
      "백엔드의 안정성에서 시작해 Flutter, React, Next.js, AI RAG 서비스까지 이어진 경험을 한 곳에 정리했습니다.",
    url: "https://onlycan17.vercel.app",
    siteName: "오진석 개인 홈페이지",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "오진석 | 풀스택 개발자",
    description:
      "개발자 이력서, GitHub 포트폴리오, 마크다운 블로그를 한곳에 모은 개인 홈페이지입니다.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full bg-[#f6f8fc] text-slate-900 antialiased">
        <GlobalScrollProgress />
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
