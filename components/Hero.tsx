import Image from "next/image";
import Link from "next/link";
import { AddressLink } from "@/components/AddressLink";
import { services, site } from "@/lib/site";

export function Hero() {
  return (
    <section id="accueil" className="bg-carbon relative flex min-h-[70vh] items-center overflow-hidden pt-24 pb-14 sm:min-h-[80vh] sm:pt-28 sm:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero/fond.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_55%]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />
        <div className="absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
        <h1 className="animate-rise-delay font-display font-semibold">
          <span className="block text-[clamp(3.4rem,18vw,7.2rem)] leading-[0.85] tracking-[0.02em] text-white">
            MB
          </span>
          <span className="mt-2 block text-[clamp(1.4rem,6.2vw,2.5rem)] leading-none tracking-[0.1em] whitespace-nowrap">
            <span className="text-brand-bright">CARROSSERIE</span>{" "}
            <span className="text-white">STAR</span>
          </span>
        </h1>

        <p className="animate-rise-delay mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
          Chocs, peinture, tôlerie et mécanique à Cornebarrieu. Devis clair,
          délais tenus, finition comme neuf.
        </p>

        <ul className="animate-rise-late mt-6 flex flex-wrap justify-center gap-2 sm:mt-7">
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

        <div className="animate-rise-late mt-6 flex flex-col items-center gap-4 sm:mt-8 sm:gap-6">
          <AddressLink className="text-sm break-words text-white/55 underline-offset-4 transition hover:text-brand-bright hover:underline">
            {site.address.full}
          </AddressLink>
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            {site.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="font-display text-[clamp(1.85rem,7vw,3.25rem)] leading-none tracking-wide text-brand-bright transition hover:text-white"
              >
                {phone.display}
              </a>
            ))}
          </div>
        </div>

        <div className="animate-rise-late mx-auto mt-7 flex w-full max-w-md flex-col justify-center gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap">
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
