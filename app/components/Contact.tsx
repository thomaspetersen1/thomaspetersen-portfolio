import Section from "./Section";

const LINKS: [string, string][] = [
  ["EMAIL", "thomas@ou.edu"],
  ["GITHUB", "github.com/thomas"],
  ["LINKEDIN", "linkedin.com/in/thomas"],
];

export default function Contact() {
  return (
    <Section id="contact" label="/ CONTACT" className="pb-20">
      <h2 className="mb-3 font-display text-5xl leading-none tracking-[0.04em] text-ink-100">
        LET&apos;S BUILD
        <br />
        SOMETHING.
      </h2>
      <p className="mb-8 text-[13px] leading-[1.7] text-ink-400">
        Open to opportunities, collabs, and good conversations.
      </p>
      <div className="mb-9 flex flex-col gap-2.5">
        {LINKS.map(([k, v]) => (
          <div key={k} className="flex items-baseline gap-5">
            <span className="min-w-[72px] font-mono text-[8px] tracking-[0.15em] text-accent">
              {k}
            </span>
            <span className="text-[13px] text-ink-300">{v}</span>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="inline-block border border-accent bg-accent/10 px-7 py-2.5 font-mono text-[10px] tracking-[0.15em] text-accent no-underline transition-colors hover:bg-accent/20"
      >
        DOWNLOAD RESUME
      </a>

      <div className="mt-20 flex items-center justify-between border-t border-ink-600 pt-6">
        <span className="font-mono text-[8px] tracking-[0.1em] text-ink-500">
          THOMAS PETERSEN © 2026
        </span>
        <span className="font-mono text-[8px] tracking-[0.06em] text-ink-500">
          CS · OU · OKLAHOMA CITY
        </span>
      </div>
    </Section>
  );
}
