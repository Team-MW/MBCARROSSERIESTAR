"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { reviews, site } from "@/lib/site";

const avatarColors = [
  "#7B5B3A",
  "#1A73E8",
  "#E37400",
  "#188038",
  "#D93025",
  "#9334E6",
  "#00897B",
  "#5F6368",
];

function GoogleMark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function Stars({ size = "h-3.5 w-3.5" }: { size?: string }) {
  return (
    <div className="flex justify-center gap-0.5 text-[#F4B400]" aria-label="5 étoiles">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`${size} fill-current`}>
          <path d="M10 1.5 12.6 7l6 .6-4.6 4 1.4 5.9L10 14.8 4.6 17.5 6 11.6 1.4 7.6l6-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function initial(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

type ReviewsProps = {
  preview?: boolean;
  showIntro?: boolean;
};

export function Reviews({ preview = false, showIntro = true }: ReviewsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const items = preview ? reviews.slice(0, 8) : reviews;

  function scrollByCard(direction: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("blockquote");
    const width = card ? card.getBoundingClientRect().width + 16 : 340;
    const max = track.scrollWidth - track.clientWidth;
    const next = track.scrollLeft + direction * width;

    if (next >= max - 4) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (next < 0) {
      track.scrollTo({ left: max, behavior: "smooth" });
      return;
    }
    track.scrollBy({ left: direction * width, behavior: "smooth" });
  }

  useEffect(() => {
    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      scrollByCard(1);
    }, 4200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {showIntro ? (
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-sm tracking-[0.35em] text-brand-bright uppercase">
              Avis Google
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-wide sm:text-5xl">
              Ce que disent les clients
            </h2>
            <div className="mt-6 flex flex-col items-center gap-2">
              <div className="flex items-center gap-3">
                <span className="font-display text-5xl leading-none text-white">5,0</span>
                <Stars size="h-5 w-5" />
              </div>
              <p className="text-sm text-white/55">{reviews.length} avis Google</p>
            </div>
            <p className="mt-4 text-sm text-white/55">
              <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {site.address.full}
              </a>
              <span className="mx-2 text-white/25">·</span>
              <a href={site.phones[0].href} className="text-brand-bright hover:text-white">
                {site.phones[0].display}
              </a>
            </p>
            <a
              href={site.googleSearch}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/75 underline-offset-4 hover:text-white hover:underline"
            >
              <GoogleMark />
              Voir sur Google
            </a>
          </div>
        ) : (
          <div className="mb-8 text-center">
            <a
              href={site.googleSearch}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              <GoogleMark />
              Voir sur Google
            </a>
          </div>
        )}

        <div
          className="relative mt-12"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
        >
          <button
            type="button"
            aria-label="Avis précédent"
            onClick={() => scrollByCard(-1)}
            className="absolute top-1/2 left-2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/80 text-xl text-white backdrop-blur-sm transition hover:border-brand hover:bg-brand md:flex"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Avis suivant"
            onClick={() => scrollByCard(1)}
            className="absolute top-1/2 right-2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-brand text-xl text-white transition hover:bg-brand-bright md:flex"
          >
            ›
          </button>

          <div
            ref={trackRef}
            className="review-track flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 sm:px-8"
          >
            {items.map((review, index) => (
              <blockquote
                key={review.name}
                className="flex min-h-[260px] w-[min(85vw,340px)] shrink-0 snap-start flex-col border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-5 text-left sm:min-h-[280px] sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: avatarColors[index % avatarColors.length] }}
                  >
                    {initial(review.name)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-white">{review.name}</p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/50">
                      <GoogleMark className="h-3.5 w-3.5" />
                      Avis de Google
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/45">
                  <span>5/5</span>
                  <Stars />
                  <span>{review.when}</span>
                </div>
                <p className="mt-4 line-clamp-6 flex-1 text-sm leading-relaxed text-white/80">
                  {review.text}
                </p>
                <p className="mt-4 text-xs text-white/40">{review.visit}</p>
              </blockquote>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Avis précédent"
              onClick={() => scrollByCard(-1)}
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-white"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Avis suivant"
              onClick={() => scrollByCard(1)}
              className="flex h-11 w-11 items-center justify-center bg-brand text-white"
            >
              ›
            </button>
          </div>
        </div>

        {preview ? (
          <div className="mt-8 text-center">
            <Link
              href="/avis"
              className="inline-flex border border-white/20 px-5 py-3 text-sm font-semibold tracking-wide text-white hover:bg-white/10"
            >
              Tous les avis Google
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
