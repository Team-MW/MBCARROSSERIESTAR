"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

export function QuoteForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const src = `https://form.jotform.com/${site.jotformId}?isIframeEmbed=1`;

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (typeof event.data !== "string") return;

      const args = event.data.split(":");
      if (args[2] !== site.jotformId) return;

      const iframe = iframeRef.current;
      if (!iframe) return;

      switch (args[0]) {
        case "setHeight":
          iframe.style.height = `${args[1]}px`;
          break;
        case "setMinHeight":
          iframe.style.minHeight = `${args[1]}px`;
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
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      id={site.jotformId}
      title="MB Carrosserie Star — formulaire de devis"
      allow="geolocation; microphone; camera; fullscreen; payment"
      src={src}
      className="block w-full max-w-full border-0 bg-transparent"
      style={{ height: 539 }}
      scrolling="no"
    />
  );
}
