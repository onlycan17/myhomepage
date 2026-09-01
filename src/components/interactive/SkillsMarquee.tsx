type SkillsMarqueeProps = {
  items: string[];
};

export function SkillsMarquee({ items }: SkillsMarqueeProps) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="skills-marquee-mask overflow-hidden rounded-full border border-black/8 bg-white/80 px-3 py-3">
      <div className="skills-marquee-track flex min-w-max items-center gap-3">
        {duplicatedItems.map((item, index) => (
          <span key={`${item}-${index}`} className="skills-marquee-chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
