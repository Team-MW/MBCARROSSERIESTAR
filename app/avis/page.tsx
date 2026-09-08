import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reviews } from "@/components/Reviews";

export const metadata: Metadata = {
  title: "Avis clients",
  description:
    "Avis clients MB Carrosserie Star à Cornebarrieu : qualité, délais tenus, peinture impeccable.",
};

export default function AvisPage() {
  return (
    <>
      <PageHero
        eyebrow="Avis"
        title="Ce que disent les clients"
        text="Qualité du travail, respect des délais, accueil : le même fil rouge dans les retours d’atelier."
      />
      <Reviews showIntro={false} />
      <CtaBand />
    </>
  );
}
