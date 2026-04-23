const LINKS = ["ABOUT", "PROJECTS", "ACTIVITY", "CONTACT"];

type Props = {
  scrollY: number;
};

export default function Nav({ scrollY }: Props) {
  const visible = scrollY > 80;
  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-10 flex items-center justify-between px-8 py-4 transition-all duration-300 ${
        visible
          ? "border-b border-ink-600 bg-[rgba(8,8,8,0.88)] backdrop-blur-[12px]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <span className="font-display text-lg tracking-[0.08em] text-ink-100">
        TP
      </span>
      <div className="flex gap-7">
        {LINKS.map((s) => (
          <a
            key={s}
            href={`#${s.toLowerCase()}`}
            className="font-mono text-[9px] tracking-[0.15em] text-ink-400 no-underline transition-colors hover:text-accent"
          >
            {s}
          </a>
        ))}
      </div>
    </nav>
  );
}
