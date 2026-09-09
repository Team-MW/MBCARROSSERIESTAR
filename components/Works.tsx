import Image from "next/image";
import Link from "next/link";
import { works } from "@/lib/site";

function Pair({
  before,
  after,
}: {
  before: { src: string; alt: string; width: number; height: number };
  after: { src: string; alt: string; width: number; height: number };
}) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      {[
        { shot: before, tag: "Avant" },
        { shot: after, tag: "Après" },
      ].map(({ shot, tag }) => (
        <figure key={tag} className="relative overflow-hidden border border-white/10 bg-black">
          <div className="relative aspect-[4/5]">
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(max-width: 640px) 50vw, 400px"
              className="object-cover"
            />
          </div>
          <figcaption className="absolute top-2 left-2 bg-brand px-2 py-0.5 font-display text-[10px] tracking-[0.18em] text-white uppercase sm:text-xs">
            {tag}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Works({ preview = false }: { preview?: boolean }) {
  return (
    <section className="border-t border-white/10 bg-black/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-sm tracking-[0.35em] text-brand-bright uppercase">
          Réalisations
        </p>
        <h2 className="font-display mt-3 text-3xl tracking-wide sm:text-5xl">
          Avant / après
        </h2>
        <p className="mt-4 max-w-2xl text-white/65">
          Quelques chantiers de l’atelier : carrosserie, redressage et peinture,
          du choc au rendu d’origine.
        </p>
        {preview ? (
          <Link
            href="/prestations"
            className="mt-4 inline-flex text-sm font-medium text-brand-bright underline-offset-4 hover:underline"
          >
            Voir toutes les réalisations
          </Link>
        ) : null}

        <div className="mt-12 space-y-14">
          {works.map((job) => (
            <article key={job.id}>
              <div className="mb-5">
                <h3 className="font-display text-2xl tracking-wide sm:text-3xl">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm text-white/55">{job.text}</p>
              </div>
              <div
                className={`grid gap-6 ${
                  job.pairs.length > 1 ? "lg:grid-cols-2" : "max-w-3xl"
                }`}
              >
                {job.pairs.map((pair) => (
                  <div key={pair.label}>
                    <p className="mb-2 text-xs tracking-[0.2em] text-white/40 uppercase">
                      {pair.label}
                    </p>
                    <Pair before={pair.before} after={pair.after} />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
