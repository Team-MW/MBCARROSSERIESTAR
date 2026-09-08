import type { Metadata } from "next";
import { AddressLink } from "@/components/AddressLink";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Devis et rendez-vous chez MB Carrosserie Star à Cornebarrieu. 14 Chem. Saint-Roch, 07 66 57 39 76. Lun–Ven 9h–18h, samedi 9h–17h.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Devis, rendez-vous, atelier"
        text={
          <>
            Envoyez-nous votre demande, appelez, ou passez au{" "}
            <AddressLink className="text-white underline-offset-4 hover:text-brand-bright hover:underline">
              14 Chem. Saint-Roch
            </AddressLink>
            .
          </>
        }
      />
      <Contact />
    </>
  );
}
