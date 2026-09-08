import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/95 px-3 pt-2 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-2 gap-2">
        {site.phones.map((phone) => (
          <a
            key={phone.href}
            href={phone.href}
            className="red-glow flex items-center justify-center bg-brand px-2 py-3 text-center font-display text-sm font-semibold tracking-wide text-white sm:text-lg"
          >
            {phone.display}
          </a>
        ))}
      </div>
    </div>
  );
}
