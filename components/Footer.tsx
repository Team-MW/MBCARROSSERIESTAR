import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pb-24 lg:pb-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Logo size={40} className="h-10 w-10" />
            <p className="font-display text-lg tracking-[0.16em] text-brand-bright">
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

        <div className="text-sm text-white/55">
          <p>{site.address.full}</p>
          <p className="mt-1">{site.email}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/35 sm:px-6">
          © {new Date().getFullYear()} {site.legal.legalName} — {site.legal.legalForm} au capital de{" "}
          {site.legal.capital} — {site.legal.rcs} — SIRET {site.legal.siret}
          {" · "}
          <Link href="/mentions-legales" className="text-white/55 hover:text-white">
            Mentions légales
          </Link>
        </p>
      </div>
    </footer>
  );
}
