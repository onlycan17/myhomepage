import { Reveal } from "@/components/common/Reveal";

type SectionShellProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function SectionShell({
  id,
  label,
  title,
  description,
  children,
}: SectionShellProps) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-24 border-t border-black/8 py-16 sm:py-20"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 sm:px-8 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="monolabel">{label}</p>
          <h2
            id={headingId}
            className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">{description}</p>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
