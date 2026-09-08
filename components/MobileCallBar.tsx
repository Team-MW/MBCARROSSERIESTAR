import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/95 px-3 pt-2 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={site.phone.href}
        className="red-glow flex items-center justify-center bg-brand px-3 py-3 text-center font-display text-lg font-semibold tracking-wide text-white"
      >
        {site.phone.display}
      </a>
    </div>
  );
}
