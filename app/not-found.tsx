import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-carbon flex min-h-[70vh] flex-col items-center justify-center px-4 pt-28 text-center">
      <p className="font-display text-sm tracking-[0.35em] text-brand-bright uppercase">
        404
      </p>
      <h1 className="font-display mt-3 text-4xl tracking-wide sm:text-5xl">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-white/60">
        Cette page n’existe pas. Retour à l’accueil ou demandez un devis.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-bright"
        >
          Accueil
        </Link>
        <Link
          href="/contact"
          className="border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
