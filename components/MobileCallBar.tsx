import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/95 px-3 pt-2 backdrop-blur-md lg:hidden" style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}>
      <div className="grid grid-cols-2 gap-2">
        {site.phones.map((phone) => (
          <a
            key={phone.href}
            href={phone.href}
            className="bg-brand px-1 py-2.5 text-center text-[11px] font-semibold tracking-normal whitespace-nowrap text-white sm:text-sm"
          >
            {phone.display}
          </a>
        ))}
      </div>
    </div>
  );
}
