import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reviews } from "@/components/Reviews";
import { Works } from "@/components/Works";

import { pageMeta, pages } from "@/lib/seo";

export const metadata: Metadata = pageMeta(pages.avis);

export default function AvisPage() {
  return (
    <>
      <PageHero
        eyebrow="Avis"
        title="Ce que disent les clients"
        text="Qualité du travail, respect des délais, accueil : le même fil rouge dans les retours d’atelier."
      />
      <Reviews showIntro={false} />
      <Works />
      <CtaBand />
    </>
  );
}
