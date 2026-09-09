import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/Services";
import { Works } from "@/components/Works";
import { WorkshopGallery } from "@/components/WorkshopGallery";

import { pageMeta, pages } from "@/lib/seo";

export const metadata: Metadata = pageMeta(pages.prestations);

export default function PrestationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Prestations"
        title="Carrosserie, peinture, tôlerie, mécanique"
        text="Un seul atelier pour remettre votre véhicule en état — du petit choc du parking au sinistre plus lourd."
      />
      <Works />
      <WorkshopGallery />
      <Services showIntro={false} />
      <CtaBand />
    </>
  );
}
