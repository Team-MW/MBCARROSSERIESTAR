import Link from "next/link";
import { services, site } from "@/lib/site";

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-brand-bright" aria-hidden="true">
      <path d="M12 1.8 14.7 8.2 21.6 8.9 16.4 13.5 18 20.6 12 17.2 6 20.6 7.6 13.5 2.4 8.9 9.3 8.2 12 1.8z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="bg-carbon relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:min-h-[80vh] lg:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-full w-1 bg-brand sm:w-1.5" />
        <div className="absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-brand/10 blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pl-5 sm:px-6 sm:pl-8">
        <p className="animate-rise font-display inline-flex max-w-full items-center gap-2 text-[10px] tracking-[0.18em] text-white/70 uppercase sm:text-xs sm:tracking-[0.32em]">
          <Star />
          <span className="min-w-0">Atelier carrosserie · Toulouse Nord</span>
        </p>

        <h1 className="animate-rise-delay font-display mt-4 text-[clamp(2.15rem,11vw,6.4rem)] leading-[0.9] font-semibold tracking-[0.02em] sm:mt-5 sm:tracking-[0.04em]">
          <span className="text-white">MB</span>
          <span className="block text-brand-bright">CARROSSERIE</span>
          <span className="text-white">STAR</span>
        </h1>

        <p className="animate-rise-delay mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
          Chocs, peinture, tôlerie et mécanique à Cornebarrieu. Devis clair,
          délais tenus, finition comme neuf.
        </p>

        <ul className="animate-rise-late mt-6 flex flex-wrap gap-2 sm:mt-7">
          {services.map((service) => (
            <li key={service.id}>
              <Link
                href={`/prestations#${service.id}`}
                className="inline-flex border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] tracking-[0.12em] text-white/80 uppercase transition hover:border-brand hover:text-white sm:text-xs sm:tracking-[0.16em]"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>

        <p className="animate-rise-late mt-5 text-sm break-words text-white/55 sm:mt-6">
          {site.address.full}
        </p>

        <div className="animate-rise-late mt-2 flex flex-col gap-1 font-display text-lg tracking-wide text-brand-bright sm:flex-row sm:gap-5 sm:text-xl">
          {site.phones.map((phone) => (
            <a key={phone.href} href={phone.href} className="hover:text-white">
              {phone.display}
            </a>
          ))}
        </div>

        <div className="animate-rise-late mt-7 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row">
          <a
            href={site.phones[0].href}
            className="red-glow inline-flex items-center justify-center bg-brand px-7 py-3.5 font-semibold tracking-wide text-white transition hover:bg-brand-bright"
          >
            Appeler maintenant
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-white/20 bg-black/30 px-7 py-3.5 font-semibold tracking-wide text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}
