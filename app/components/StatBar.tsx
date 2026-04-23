type Props = {
  label: string;
  value: number;
  max?: number;
};

export default function StatBar({ label, value, max = 100 }: Props) {
  const pct = Math.min(value / max, 1);
  return (
    <div className="mb-[18px]">
      <div className="mb-1.5 flex justify-between">
        <span className="font-mono text-[9px] tracking-[0.12em] text-ink-300">
          {label}
        </span>
        <span className="font-mono text-[9px] text-accent">{value}</span>
      </div>
      <div className="relative h-0.5 bg-ink-700">
        <div
          className="absolute top-0 bottom-0 left-0 bg-[linear-gradient(to_right,rgba(255,32,32,0.53),var(--color-accent))] transition-[width] duration-1000 ease-linear"
          style={{ width: `${pct * 100}%` }}
        />
      </div>
    </div>
  );
}
