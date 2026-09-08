import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/95 p-3 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        {site.phones.map((phone) => (
          <a
            key={phone.href}
            href={phone.href}
            className="bg-brand py-3 text-center text-sm font-semibold tracking-wide text-white"
          >
            {phone.display}
          </a>
        ))}
      </div>
    </div>
  );
}
