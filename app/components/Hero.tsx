export default function Hero() {
  return (
    <section className="relative z-[2] flex min-h-screen flex-col justify-center pt-0">
      <div className="mb-6 flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-full border-[1.5px] border-ink-500 bg-ink-700">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle
            cx="24"
            cy="18"
            r="9"
            stroke="var(--color-ink-500)"
            strokeWidth="1.2"
          />
          <path
            d="M8 44 Q24 30 40 44"
            stroke="var(--color-ink-500)"
            strokeWidth="1.2"
            fill="none"
          />
          <text
            x="24"
            y="54"
            textAnchor="middle"
            fontSize="7"
            className="font-mono"
            fill="var(--color-ink-400)"
          >
            photo
          </text>
        </svg>
      </div>

      <h1 className="mb-4 font-display text-[clamp(52px,8vw,96px)] leading-[0.9] tracking-[0.02em] text-ink-100">
        THOMAS
        <br />
        PETERSEN
      </h1>

      <div className="mb-4 h-0.5 w-12 bg-accent" />

      <p className="mb-8 text-sm leading-[1.7] tracking-[0.05em] text-ink-400">
        CS Student · University of Oklahoma
        <br />
        Incoming IT Intern · ConocoPhillips
      </p>

      <div className="flex gap-3">
        <a
          href="#projects"
          className="border border-accent bg-accent/10 px-5 py-2 font-mono text-[10px] tracking-[0.15em] text-accent no-underline transition-colors hover:bg-accent/20"
        >
          VIEW WORK
        </a>
        <a
          href="#contact"
          className="border border-ink-600 px-5 py-2 font-mono text-[10px] tracking-[0.15em] text-ink-400 no-underline transition-colors hover:text-ink-100"
        >
          CONTACT
        </a>
      </div>

      <div className="absolute bottom-10 left-0 flex items-center gap-2.5">
        <div className="h-9 w-px bg-[linear-gradient(to_bottom,transparent,#7a7a85)]" />
        <span className="font-mono text-[8px] tracking-[0.15em] text-ink-500">
          SCROLL
        </span>
      </div>
    </section>
  );
}
