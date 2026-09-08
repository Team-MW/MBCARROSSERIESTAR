import type { Metadata } from "next";
import { About } from "@/components/About";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "L’atelier",
  description:
    "MB Carrosserie Star à Cornebarrieu : un atelier de proximité, Monday, Menaouer, devis clairs et finitions soignées.",
};

export default function AtelierPage() {
  return (
    <>
      <PageHero
        eyebrow="L’atelier"
        title="À Cornebarrieu, aux portes de Toulouse"
        text={`${site.address.full}. Lun–Ven 9h–18h, samedi 9h–17h.`}
      />
      <About showIntro={false} />
      <CtaBand />
    </>
  );
}
