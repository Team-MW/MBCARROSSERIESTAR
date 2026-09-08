import type { Metadata } from "next";
import { AddressLink } from "@/components/AddressLink";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";

import { pageMeta, pages } from "@/lib/seo";

export const metadata: Metadata = pageMeta(pages.contact);

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
