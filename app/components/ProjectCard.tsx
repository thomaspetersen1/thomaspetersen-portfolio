import type { Project } from "../data/projects";

export default function ProjectCard({
  title,
  desc,
  tags,
  github,
  demo,
}: Project) {
  return (
    <div className="group relative border border-ink-600 bg-ink-800 px-6 py-5 transition-all duration-200 hover:border-ink-500 hover:bg-ink-700">
      <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-accent opacity-50 transition-opacity duration-200 group-hover:opacity-100" />
      <div className="mb-2 font-display text-[22px] tracking-[0.04em] text-ink-100">
        {title}
      </div>
      <p className="mb-4 text-[13px] leading-[1.6] text-ink-400">{desc}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="border border-ink-600 bg-ink-700 px-2 py-[3px] font-mono text-[8px] tracking-[0.1em] text-ink-400"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {github && (
          <a
            href={github}
            className="border-b border-ink-600 pb-px font-mono text-[9px] tracking-[0.1em] text-ink-400 no-underline"
          >
            GITHUB →
          </a>
        )}
        {demo && (
          <a
            href={demo}
            className="border-b border-accent/30 pb-px font-mono text-[9px] tracking-[0.1em] text-accent no-underline"
          >
            DEMO →
          </a>
        )}
      </div>
    </div>
  );
}
