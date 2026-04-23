"use client";

type Props = {
  visible: boolean;
};

export default function TweaksPanel({ visible }: Props) {
  if (!visible) return null;
  return (
    <div className="fixed right-6 bottom-6 z-[9999] w-[200px] rounded border border-ink-600 bg-ink-800 p-4 font-mono text-[11px] text-ink-400">
      <div className="mb-3 text-xs font-bold text-accent">Tweaks</div>
      <label className="mb-2.5 flex items-center justify-between">
        <span>Accent color</span>
        <input
          type="color"
          defaultValue="#ff2020"
          onChange={(e) => {
            document.documentElement.style.setProperty(
              "--color-accent",
              e.target.value,
            );
            window.parent.postMessage(
              {
                type: "__edit_mode_set_keys",
                edits: { accentColor: e.target.value },
              },
              "*",
            );
          }}
          className="cursor-pointer"
        />
      </label>
      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          defaultChecked
          onChange={(e) => {
            const cols =
              document.querySelectorAll<HTMLElement>("[data-logo-col]");
            cols.forEach(
              (c) => (c.style.display = e.target.checked ? "flex" : "none"),
            );
            window.parent.postMessage(
              {
                type: "__edit_mode_set_keys",
                edits: { showLogoColumns: e.target.checked },
              },
              "*",
            );
          }}
        />
        Show logo columns
      </label>
    </div>
  );
}
