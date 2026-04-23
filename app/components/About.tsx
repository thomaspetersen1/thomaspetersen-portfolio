import Section from "./Section";

const TAGS = [
  "Hackathon Winner",
  "CS @ OU",
  "ConocoPhillips",
  "Open Source",
  "Sci-fi",
];

export default function About() {
  return (
    <Section id="about" label="/ ABOUT">
      <p className="mb-7 max-w-[480px] text-base leading-[1.8] text-ink-300">
        Computer science student building at the intersection of technology and
        creativity. I care about clean systems, great interfaces, and the rare
        moments when code feels like craft.
      </p>
      <div className="flex flex-wrap gap-2">
        {TAGS.map((t) => (
          <span
            key={t}
            className="border border-ink-600 px-3 py-1.5 font-mono text-[9px] tracking-[0.12em] text-ink-400"
          >
            {t}
          </span>
        ))}
      </div>
    </Section>
  );
}
