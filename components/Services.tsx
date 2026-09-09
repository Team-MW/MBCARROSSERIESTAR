import Image from "next/image";
import Link from "next/link";
import { serviceIcons } from "@/components/BrandMark";
import { services } from "@/lib/site";

type ServicesProps = {
  preview?: boolean;
  showIntro?: boolean;
};

export function Services({ preview = false, showIntro = true }: ServicesProps) {
  return (
    <section className="relative border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {showIntro ? (
          <>
            <p className="font-display text-sm tracking-[0.35em] text-brand-bright uppercase">
              Prestations
            </p>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <h2 className="font-display mt-3 text-3xl tracking-wide sm:text-5xl">
                Ce que l’atelier prend en charge
              </h2>
              {preview ? (
                <Link
                  href="/prestations"
                  className="text-sm font-medium text-white/75 underline-offset-4 hover:text-white hover:underline"
                >
                  Toutes les prestations
                </Link>
              ) : null}
            </div>
            <p className="mt-4 max-w-2xl text-white/65">
              Un passage unique pour la carrosserie, la peinture, la tôlerie et la
              mécanique — du choc du quotidien à la remise en état complète.
            </p>
          </>
        ) : null}

        <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${showIntro ? "mt-12" : ""}`}>
          {services.map((service) => {
            const Icon = serviceIcons[service.id];
            const photo = "photo" in service ? service.photo : null;
            return (
              <article
                key={service.id}
                id={service.id}
                className="group scroll-mt-28 overflow-hidden border border-white/10 bg-white/[0.03] transition hover:border-brand/60 hover:bg-white/[0.05]"
              >
                {photo ? (
                  <div className="relative aspect-[4/5] bg-black">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-brand px-2 py-0.5 font-display text-[10px] tracking-[0.18em] text-white uppercase">
                      {service.id === "tolerie"
                        ? "Redressage"
                        : service.id === "peinture"
                          ? "Préparation"
                          : "Avant"}
                    </span>
                  </div>
                ) : (
                  <div className="p-6 pb-0">
                    <div className="flex h-12 w-12 items-center justify-center border border-white/15 text-white group-hover:border-brand group-hover:text-brand-bright">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display text-2xl tracking-wide">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {service.text}
                  </p>
                  {!preview ? (
                    <ul className="mt-5 space-y-2 text-sm text-white/55">
                      {service.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="text-brand-bright">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
