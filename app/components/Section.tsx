import type { ReactNode } from "react";

type Props = {
  id?: string;
  label?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, label, children, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`relative z-[2] pt-16 pb-8 ${className}`}
    >
      {label && (
        <div className="mb-7 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-accent">
          <span>{label}</span>
          <div className="h-px flex-1 bg-[linear-gradient(to_right,rgba(255,32,32,0.27),transparent)]" />
        </div>
      )}
      {children}
    </section>
  );
}
