import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="border-y border-white/10 bg-black py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
        <div className="min-w-0">
          <p className="font-display text-2xl tracking-wide sm:text-4xl">
            Un choc, une rayure, un devis ?
          </p>
          <p className="mt-2 text-white/60">
            Passez à l’atelier à Cornebarrieu ou envoyez-nous les photos.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          {site.phones.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              className="red-glow inline-flex items-center justify-center bg-brand px-6 py-3.5 font-semibold tracking-wide text-white hover:bg-brand-bright"
            >
              {phone.display}
            </a>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-white/20 px-6 py-3.5 font-semibold tracking-wide text-white hover:bg-white/10"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}
