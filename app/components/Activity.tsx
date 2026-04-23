import Section from "./Section";
import StatBar from "./StatBar";

export default function Activity() {
  return (
    <Section id="activity" label="/ ACTIVITY">
      <div className="max-w-[400px]">
        <StatBar label="GITHUB CONTRIBUTIONS" value={312} max={500} />
        <StatBar label="LEETCODE PROBLEMS" value={87} max={200} />
        <StatBar label="HACKATHONS ENTERED" value={6} max={10} />
        <StatBar label="HACKATHONS WON" value={2} max={6} />
      </div>
      <p className="mt-3 font-mono text-[9px] tracking-[0.1em] text-ink-500">
        — swap in live stats via GitHub API
      </p>
    </Section>
  );
}
