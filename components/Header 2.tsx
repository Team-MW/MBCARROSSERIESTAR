"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-black/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:h-[4.5rem] sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <Logo size={44} priority className="h-8 w-8 shrink-0 sm:h-11 sm:w-11" />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="font-display text-[12px] font-semibold tracking-[0.08em] text-brand-bright sm:text-base sm:tracking-[0.14em]">
              MB CARROSSERIE STAR
            </span>
            <span className="mt-1 hidden text-[10px] tracking-[0.22em] text-white/55 uppercase sm:block">
              Cornebarrieu
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  active ? "text-brand-bright" : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden bg-brand px-4 py-2 text-sm font-semibold tracking-wide text-white transition hover:bg-brand-bright lg:inline-flex"
        >
          Devis
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-white/15 lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-white transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-white transition ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-white transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-black/95 pb-28 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display py-3 text-2xl tracking-wide text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/mentions-legales"
              className="font-display py-3 text-2xl tracking-wide text-white/80"
            >
              Mentions légales
            </Link>
            <Link
              href="/contact"
              className="mt-4 bg-brand px-4 py-3 text-center font-semibold text-white"
            >
              Demander un devis
            </Link>
            <a
              href={site.phones[0].href}
              className="mt-2 border border-white/15 px-4 py-3 text-center text-white"
            >
              {site.phones[0].display}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
