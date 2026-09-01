import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-start justify-center gap-6 px-5 py-16 sm:px-8">
      <p className="monolabel">{"// 404"}</p>
      <h1 className="text-4xl font-semibold text-slate-950">페이지를 찾을 수 없습니다</h1>
      <p className="max-w-xl text-base leading-8 text-slate-700">
        주소가 바뀌었거나 아직 준비되지 않은 페이지입니다. 홈이나 블로그 목록으로 이동해 주세요.
      </p>
      <div className="flex gap-3">
        <Link href="/" className="primary-link">
          홈으로 이동
        </Link>
        <Link href="/blog" className="secondary-link">
          블로그 목록
        </Link>
      </div>
    </main>
  );
}
