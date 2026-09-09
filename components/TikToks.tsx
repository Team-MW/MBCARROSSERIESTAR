"use client";

import Image from "next/image";
import { useState } from "react";
import { site, workPhotos } from "@/lib/site";

const PLAYER_ORIGIN = "https://www.tiktok.com";

function playerSrc(id: string) {
  const params = new URLSearchParams({
    autoplay: "1",
    loop: "1",
    muted: "0",
    rel: "0",
    music_info: "0",
    description: "0",
    volume_control: "1",
  });
  return `${PLAYER_ORIGIN}/player/v1/${id}?${params.toString()}`;
}

function TikTokEmbed({
  id,
  index,
  poster,
}: {
  id: string;
  index: number;
  poster: (typeof workPhotos)[number];
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative aspect-[9/16] bg-black">
      {active ? (
        <iframe
          src={playerSrc(id)}
          title={`TikTok MB Carrosserie Star ${index + 1}`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; encrypted-media; clipboard-write"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="absolute inset-0"
          aria-label={`Lire la vidéo ${index + 1}`}
        >
          <Image
            src={poster.src}
            alt={poster.alt}
            fill
            sizes="(max-width: 640px) 78vw, 33vw"
            className="object-cover opacity-80"
          />
          <span className="absolute inset-0 bg-black/35" />
          <span className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white">
            <span className="ml-0.5 border-y-8 border-l-[14px] border-y-transparent border-l-white" />
          </span>
        </button>
      )}
    </div>
  );
}

export function TikToks() {
  return (
    <section className="cv-auto border-t border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-sm tracking-[0.35em] text-brand-bright uppercase">
          TikTok
        </p>
        <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
          <h2 className="font-display text-3xl tracking-wide sm:text-5xl">
            L’atelier en vidéo
          </h2>
          <a
            href={site.tiktok.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/70 underline-offset-4 hover:text-white hover:underline"
          >
            @{site.tiktok.handle}
          </a>
        </div>
        <p className="mt-3 max-w-xl text-sm text-white/55">
          Cliquez pour lancer la vidéo (son activé).
        </p>

        <div className="tiktok-track mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:mt-10 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0">
          {site.tiktok.videos.map((id, index) => (
            <div
              key={id}
              className="w-[min(78vw,320px)] shrink-0 snap-start overflow-hidden border border-white/10 bg-black sm:w-auto sm:max-w-none sm:shrink"
            >
              <TikTokEmbed
                id={id}
                index={index}
                poster={workPhotos[index % workPhotos.length]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
