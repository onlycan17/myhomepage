import Image from "next/image";

import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-black/8">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-glow absolute inset-x-0 top-0 h-64" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-18 sm:px-8 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-28">
        <div className="relative z-10 space-y-8">
          <div className="sm:hidden">
            <div className="mx-auto w-36 overflow-hidden rounded-[1.75rem] border border-cyan-700/18 bg-white p-1 shadow-[0_18px_42px_rgba(15,23,42,0.12)]">
              <Image
                src="/profile.jpg"
                alt="오진석 프로필 사진"
                width={314}
                height={400}
                className="h-auto w-full rounded-[1.4rem] object-cover"
                priority
              />
            </div>
          </div>
          <p className="monolabel">{"// hero"}</p>
          <div className="terminal-frame">
            <div className="terminal-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              <p>
                <span className="text-cyan-300">$</span> whoami
              </p>
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                {profile.name}
              </p>
              <p>
                <span className="text-cyan-300">$</span> cat profile.txt
              </p>
              <p>{profile.headline}</p>
              <p>{profile.taglineKr}</p>
              <p className="text-slate-500">{profile.taglineEn}</p>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              백엔드의 안정성에서 시작해
              <span className="gradient-text block">AI 서비스의 전달력까지 연결합니다.</span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              {profile.intro}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${profile.email}`} className="primary-link">
              이메일로 연락하기
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="secondary-link">
              GitHub 포트폴리오
            </a>
          </div>
        </div>
        <aside className="relative z-10 space-y-4">
          <div className="hidden overflow-hidden rounded-[1.9rem] border border-cyan-700/15 bg-white p-1 shadow-[0_20px_50px_rgba(15,23,42,0.12)] sm:block">
            <Image
              src="/profile.jpg"
              alt="오진석 프로필 사진"
              width={314}
              height={400}
              className="h-auto w-full rounded-[1.55rem] object-cover"
              priority
            />
          </div>
          <div className="surface-card p-6">
            <p className="monolabel">{"// summary"}</p>
            <dl className="mt-5 space-y-4 text-base text-slate-700">
              <div>
                <dt className="text-slate-600">이름</dt>
                <dd className="mt-1 text-base text-slate-950">{profile.name}</dd>
              </div>
              <div>
                <dt className="text-slate-600">경력</dt>
                <dd className="mt-1 text-base text-slate-950">{profile.headline}</dd>
              </div>
              <div>
                <dt className="text-slate-600">기반</dt>
                <dd className="mt-1 text-base text-slate-950">Java / Spring → Flutter → React / Next → AI RAG</dd>
              </div>
              <div>
                <dt className="text-slate-600">상태</dt>
                <dd className="mt-1 text-base text-slate-950">{profile.status}</dd>
              </div>
            </dl>
          </div>
          <div className="surface-card p-6">
            <p className="monolabel">{"// current focus"}</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              <li>· 운영 가능한 제품 구조를 먼저 생각합니다.</li>
              <li>· 데이터 흐름과 사용자 화면을 함께 설계합니다.</li>
              <li>· AI 기능도 실제 서비스 문맥 안에서 검증합니다.</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
