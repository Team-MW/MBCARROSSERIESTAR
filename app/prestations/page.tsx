import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Prestations",
  description:
    "Carrosserie, peinture auto, tôlerie et mécanique à Cornebarrieu. Réparations, mise en teinte, chocs et sinistres. Devis chez MB Carrosserie Star.",
};

export default function PrestationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Prestations"
        title="Carrosserie, peinture, tôlerie, mécanique"
        text="Un seul atelier pour remettre votre véhicule en état — du petit choc du parking au sinistre plus lourd."
      />
      <Services showIntro={false} />
      <CtaBand />
    </>
  );
}
