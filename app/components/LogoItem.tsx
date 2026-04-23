import type { Logo } from "../data/logos";

export default function LogoItem({ label }: Logo) {
  return (
    <div className="flex h-[88px] w-[88px] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-ink-600 bg-ink-800 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.015)_4px,rgba(255,255,255,0.015)_8px)] transition-all duration-200 hover:border-ink-500 hover:bg-ink-700 hover:bg-none">
      <div className="font-mono text-[9px] tracking-[0.1em] text-ink-400">
        {label}
      </div>
    </div>
  );
}
