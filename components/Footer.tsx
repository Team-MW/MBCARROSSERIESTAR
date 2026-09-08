import Link from "next/link";
import { AddressLink } from "@/components/AddressLink";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pb-[calc(5.5rem+env(safe-area-inset-bottom))] lg:pb-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <Link href="/#accueil" className="flex items-center gap-3">
            <Logo size={40} className="h-10 w-10 shrink-0" />
            <p className="font-display text-base tracking-[0.12em] text-brand-bright sm:text-lg sm:tracking-[0.16em]">
              MB CARROSSERIE STAR
            </p>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-white/55">
            Carrosserie, peinture, tôlerie et mécanique à Cornebarrieu.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
          <Link href="/mentions-legales" className="hover:text-white">
            Mentions légales
          </Link>
        </nav>

        <div className="min-w-0 text-sm break-words text-white/55">
          <a
            href={site.phone.href}
            className="font-display block text-xl tracking-wide text-brand-bright hover:text-white"
          >
            {site.phone.display}
          </a>
          <AddressLink className="mt-2 block underline-offset-4 hover:text-brand-bright hover:underline">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
          </AddressLink>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 block break-all underline-offset-4 hover:text-brand-bright hover:underline"
          >
            {site.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs leading-relaxed break-words text-white/35 sm:px-6">
          © {new Date().getFullYear()} {site.legal.legalName} — {site.legal.legalForm} au capital de{" "}
          {site.legal.capital} — {site.legal.rcs} — SIRET {site.legal.siret}
          {" · "}
          <Link href="/mentions-legales" className="text-white/55 hover:text-white">
            Mentions légales
          </Link>
          {" · "}
          Réalisé par{" "}
          <a
            href="https://microdidact.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/55 hover:text-white"
          >
            Microdidact
          </a>
        </p>
      </div>
    </footer>
  );
}
