import Link from "next/link";
import { services } from "@/lib/site";

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-brand-bright" aria-hidden="true">
      <path d="M12 1.8 14.7 8.2 21.6 8.9 16.4 13.5 18 20.6 12 17.2 6 20.6 7.6 13.5 2.4 8.9 9.3 8.2 12 1.8z" />
    </svg>
  );
}

export function AtelierPanel() {
  return (
    <aside className="border border-white/10 bg-black/50">
      <div className="border-b border-white/10 px-4 py-4 sm:px-6 sm:py-5">
        <p className="font-display text-sm tracking-[0.28em] text-brand-bright uppercase">
          L’atelier
        </p>
        <p className="mt-2 text-sm text-white/65">Lun–Ven 9h–18h · Sam 9h–17h</p>
      </div>
      <ol>
        {services.map((service, index) => (
          <li key={service.id} className="border-b border-white/10 last:border-b-0">
            <Link
              href={`/prestations#${service.id}`}
              className="flex items-baseline justify-between gap-4 px-4 py-4 transition hover:bg-white/5 sm:px-6 sm:py-5"
            >
              <span className="font-display text-lg tracking-wide text-white">
                {service.title}
              </span>
              <span className="font-display text-sm tracking-widest text-white/30">
                0{index + 1}
              </span>
            </Link>
          </li>
        ))}
      </ol>
      <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5">
        <p className="text-sm text-white/55">Avis clients Google</p>
        <p className="font-display flex items-center gap-1 text-brand-bright">
          <Star />
          5/5
        </p>
      </div>
    </aside>
  );
}

export function AtelierSection() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-display text-sm tracking-[0.35em] text-brand-bright uppercase">
            L’atelier
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-wide sm:text-5xl">
            Quatre métiers, un seul passage
          </h2>
          <p className="mt-4 max-w-md text-white/65">
            Horaires, prestations et avis : tout est à Cornebarrieu, sans
            multiplier les allers-retours.
          </p>
        </div>
        <AtelierPanel />
      </div>
    </section>
  );
}
