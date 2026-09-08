import Image from "next/image";
import Link from "next/link";
import { strengths } from "@/lib/site";

type AboutProps = {
  preview?: boolean;
  showIntro?: boolean;
};

export function About({ preview = false, showIntro = true }: AboutProps) {
  return (
    <section className="bg-carbon border-y border-white/10 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          {showIntro ? (
            <>
              <p className="font-display text-sm tracking-[0.35em] text-brand-bright uppercase">
                L’atelier
              </p>
              <h2 className="font-display mt-3 text-4xl tracking-wide sm:text-5xl">
                Un travail de carrossier, pas un passage à la chaîne
              </h2>
            </>
          ) : (
            <h2 className="font-display text-4xl tracking-wide sm:text-5xl">
              Un travail de carrossier, pas un passage à la chaîne
            </h2>
          )}
          <p className="mt-5 leading-relaxed text-white/70">
            MB Carrosserie Star est un atelier de proximité à Cornebarrieu,
            aux portes de Toulouse. Monday, Menaouer et l’équipe reprennent
            les véhicules accidentés, rayés ou fatigués avec la même exigence :
            un rendu propre, des délais tenus, un prix expliqué avant de
            commencer.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {(preview ? strengths.slice(0, 2) : strengths).map((item) => (
              <div key={item.title} className="border-l-2 border-brand pl-4">
                <h3 className="font-display text-lg tracking-wide">{item.title}</h3>
                <p className="mt-1 text-sm text-white/60">{item.text}</p>
              </div>
            ))}
          </div>

          {preview ? (
            <Link
              href="/atelier"
              className="mt-8 inline-flex text-sm font-medium text-brand-bright underline-offset-4 hover:underline"
            >
              Découvrir l’atelier
            </Link>
          ) : null}
        </div>

        <div className="space-y-4">
          <div className="overflow-hidden border border-white/10 bg-black">
            <Image
              src="/brand/logo-hero.png"
              alt="Identité visuelle MB Carrosserie Star"
              width={1600}
              height={900}
              className="h-auto w-full"
            />
          </div>
          {!preview ? (
            <div className="overflow-hidden border border-white/10 bg-black">
              <Image
                src="/logo.png"
                alt="Carte de visite MB Carrosserie Star"
                width={1200}
                height={750}
                className="h-auto w-full"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
