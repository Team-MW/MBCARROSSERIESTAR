import Image from "next/image";
import { atelierPhotos } from "@/lib/site";

export function WorkshopGallery() {
  return (
    <section className="border-t border-white/10 bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-sm tracking-[0.35em] text-brand-bright uppercase">
          L’atelier
        </p>
        <h2 className="font-display mt-3 text-3xl tracking-wide sm:text-5xl">
          Carrosserie, préparation, peinture
        </h2>
        <p className="mt-4 max-w-2xl text-white/65">
          Ponçage, masquage, mise en teinte et finition : le travail à la main,
          pièce par pièce.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {atelierPhotos.map((shot) => (
            <figure
              key={shot.src}
              className="relative overflow-hidden border border-white/10 bg-black"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                  className="object-cover"
                />
              </div>
              <figcaption className="absolute top-2 left-2 bg-brand px-2 py-0.5 font-display text-[10px] tracking-[0.18em] text-white uppercase sm:text-xs">
                {shot.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
