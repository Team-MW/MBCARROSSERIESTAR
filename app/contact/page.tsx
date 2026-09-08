import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Demander un devis ou appeler MB Carrosserie Star à Cornebarrieu. 14 Chem. Saint-Roch.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Devis, rendez-vous, atelier"
        text="Envoyez-nous votre demande, appelez, ou passez au 14 Chem. Saint-Roch."
      />
      <Contact />
    </>
  );
}
