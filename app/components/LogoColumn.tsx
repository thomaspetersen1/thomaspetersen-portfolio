import type { Logo } from "../data/logos";
import LogoItem from "./LogoItem";

type Props = {
  side: "left" | "right";
  items: Logo[];
  scrollY: number;
  parallax: number;
  topOffset: number;
};

export default function LogoColumn({
  side,
  items,
  scrollY,
  parallax,
  topOffset,
}: Props) {
  return (
    <div
      data-logo-col
      className={`fixed top-0 z-[1] flex flex-col gap-7 opacity-55 will-change-transform ${
        side === "left" ? "left-10" : "right-10"
      }`}
      style={{
        paddingTop: topOffset,
        transform: `translateY(${-scrollY * parallax}px)`,
      }}
    >
      {items.map((item, i) => (
        <LogoItem key={i} label={item.label} cat={item.cat} />
      ))}
    </div>
  );
}
