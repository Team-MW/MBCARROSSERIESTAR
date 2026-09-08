import Image from "next/image";
import { site } from "@/lib/site";

export function Loaner() {
  return (
    <section className="relative overflow-x-hidden border-y border-white/10 bg-black py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-full w-1 bg-brand sm:w-1.5" />
        <div className="absolute -right-16 -bottom-20 h-64 w-64 rounded-full bg-brand/20 blur-[90px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pl-5 sm:px-6 sm:pl-8 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="font-display text-sm tracking-[0.35em] text-brand-bright uppercase">
            Service atelier
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="bg-brand px-2.5 py-1 font-display text-[11px] tracking-[0.22em] text-white uppercase">
              Disponible
            </span>
            <h2 className="font-display text-3xl tracking-wide sm:text-4xl">
              Véhicule de prêt
            </h2>
          </div>
          <p className="mt-4 max-w-md leading-relaxed text-white/70">
            Votre auto reste à l’atelier ? On vous prête une voiture pour
            continuer vos journées — selon les places du moment.
          </p>
          <p className="mt-3 text-sm text-white/50">
            À demander au devis ou par téléphone.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {site.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="inline-flex border border-white/20 px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:border-brand hover:bg-white/5"
              >
                Réserver au {phone.display}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[250px] w-full max-w-lg sm:h-[300px]">
          <div className="absolute top-2 left-0 w-[62%] -rotate-6 overflow-hidden border border-white/15 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.55)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/atelier/vehicule-pret-polo.jpeg"
                alt="Véhicule de prêt blanc MB Carrosserie Star"
                fill
                sizes="(max-width: 640px) 70vw, 320px"
                className="object-cover object-[50%_60%]"
              />
            </div>
          </div>
          <div className="red-glow absolute right-0 bottom-1 w-[62%] rotate-3 overflow-hidden border border-brand/40 bg-black">
            <div className="relative aspect-[4/5]">
              <Image
                src="/atelier/vehicule-pret-208.jpeg"
                alt="Véhicule de prêt bleu floqué MB Carrosserie Star"
                fill
                sizes="(max-width: 640px) 70vw, 320px"
                className="object-cover object-[45%_55%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
