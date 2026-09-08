"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

export function QuoteForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);
  const src = `https://form.jotform.com/${site.jotformId}?isIframeEmbed=1`;

  useEffect(() => {
    const fallback = window.setTimeout(() => setLoaded(true), 8000);

    function onMessage(event: MessageEvent) {
      if (typeof event.data !== "string") return;

      const args = event.data.split(":");
      if (args[2] !== site.jotformId) return;

      const iframe = iframeRef.current;
      if (!iframe) return;

      switch (args[0]) {
        case "setHeight":
          iframe.style.height = `${args[1]}px`;
          setLoaded(true);
          break;
        case "setMinHeight":
          iframe.style.minHeight = `${args[1]}px`;
          setLoaded(true);
          break;
        case "scrollIntoView":
          iframe.scrollIntoView({ behavior: "smooth", block: "start" });
          break;
        case "collapseErrorPage":
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = `${window.innerHeight}px`;
          }
          break;
        default:
          break;
      }
    }

    window.addEventListener("message", onMessage);
    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    <div className="relative min-h-[28rem] w-full">
      {!loaded ? (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black">
          <span
            className="h-11 w-11 animate-spin rounded-full border-[3px] border-white/15 border-t-brand-bright"
            aria-hidden="true"
          />
          <p className="font-display text-sm tracking-[0.28em] text-white/55 uppercase">
            Chargement
          </p>
        </div>
      ) : null}
      <iframe
        ref={iframeRef}
        id={site.jotformId}
        title="MB Carrosserie Star — formulaire de devis"
        allow="geolocation; microphone; camera; fullscreen; payment"
        src={src}
        onLoad={() => setLoaded(true)}
        className={`block w-full max-w-full border-0 bg-transparent transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ height: 539 }}
        scrolling="no"
      />
    </div>
  );
}
