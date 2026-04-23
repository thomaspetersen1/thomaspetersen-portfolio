export default function Sphere() {
  const flecks: [number, number][] = [
    [310, 120],
    [268, 195],
    [330, 310],
    [390, 160],
    [220, 170],
  ];
  return (
    <div className="pointer-events-none fixed top-1/2 left-1/2 z-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2">
      <div className="absolute -inset-[60px] rounded-full [background:radial-gradient(circle,rgba(80,80,90,0.18)_0%,transparent_70%)]" />
      <div
        className="absolute inset-0 rounded-full blur-[18px]"
        style={{
          background:
            "radial-gradient(circle at 40% 38%, rgba(200,200,210,0.13) 0%, rgba(120,120,135,0.09) 30%, rgba(60,60,70,0.07) 55%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 rounded-full border border-[rgba(150,150,165,0.18)] shadow-[inset_0_0_80px_rgba(255,32,32,0.04),inset_0_0_40px_rgba(200,200,220,0.04)]" />
      <svg
        viewBox="0 0 560 560"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <path
          d="M280 0 L310 120 L268 195 L330 310 L295 440 L280 560"
          fill="none"
          className="stroke-accent"
          strokeWidth="1.2"
          opacity="0.55"
        />
        <path
          d="M310 120 L390 160 L350 230"
          fill="none"
          className="stroke-accent"
          strokeWidth="0.8"
          opacity="0.4"
        />
        <path
          d="M140 80 L220 170 L195 260 L160 380"
          fill="none"
          className="stroke-accent"
          strokeWidth="0.9"
          opacity="0.35"
        />
        <path
          d="M268 195 L195 260"
          fill="none"
          className="stroke-accent"
          strokeWidth="0.6"
          opacity="0.3"
        />
        {flecks.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={2.5}
            className="fill-accent"
            opacity="0.5"
          />
        ))}
        <circle
          cx={280}
          cy={280}
          r={180}
          fill="none"
          stroke="rgba(150,150,165,0.08)"
          strokeWidth="1"
          strokeDasharray="6 8"
        />
        <circle
          cx={280}
          cy={280}
          r={240}
          fill="none"
          stroke="rgba(150,150,165,0.05)"
          strokeWidth="1"
          strokeDasharray="3 10"
        />
      </svg>
    </div>
  );
}
