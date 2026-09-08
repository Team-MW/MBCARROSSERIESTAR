"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

const PLAYER_ORIGIN = "https://www.tiktok.com";

function playerSrc(id: string) {
  const params = new URLSearchParams({
    autoplay: "1",
    loop: "1",
    muted: "1",
    rel: "0",
    music_info: "0",
    description: "0",
    volume_control: "1",
  });
  return `${PLAYER_ORIGIN}/player/v1/${id}?${params.toString()}`;
}

export function TikToks() {
  const frameRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== PLAYER_ORIGIN) return;
      const data = event.data as { "x-tiktok-player"?: boolean; type?: string };
      if (!data?.["x-tiktok-player"] || data.type !== "onPlayerReady") return;

      const iframe = frameRefs.current.find(
        (frame) => frame?.contentWindow === event.source,
      );
      iframe?.contentWindow?.postMessage(
        { type: "play", "x-tiktok-player": true },
        PLAYER_ORIGIN,
      );
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section className="border-t border-white/10 py-20 sm:py-24">
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
          Lecture automatique (son coupé au départ — cliquez pour activer le
          volume).
        </p>

        <div className="tiktok-track mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:mt-10 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0">
          {site.tiktok.videos.map((id, index) => (
            <div
              key={id}
              className="w-[min(78vw,320px)] shrink-0 snap-start overflow-hidden border border-white/10 bg-black sm:w-auto sm:max-w-none sm:shrink"
            >
              <div className="relative aspect-[9/16]">
                <iframe
                  ref={(el) => {
                    frameRefs.current[index] = el;
                  }}
                  src={playerSrc(id)}
                  title={`TikTok MB Carrosserie Star ${index + 1}`}
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen; encrypted-media; clipboard-write"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
