import type { Metadata } from "next";
import { About } from "@/components/About";
import { AddressLink } from "@/components/AddressLink";
import { CtaBand } from "@/components/CtaBand";
import { Loaner } from "@/components/Loaner";
import { PageHero } from "@/components/PageHero";
import { WorkshopGallery } from "@/components/WorkshopGallery";
import { pageMeta, pages } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta(pages.atelier);

export default function AtelierPage() {
  return (
    <>
      <PageHero
        eyebrow="L’atelier"
        title="À Cornebarrieu, aux portes de Toulouse"
        text={
          <>
            <AddressLink className="text-white underline-offset-4 hover:text-brand-bright hover:underline">
              {site.address.full}
            </AddressLink>
            . Lun–Ven 9h–18h, samedi 9h–17h.
          </>
        }
      />
      <About showIntro={false} />
      <WorkshopGallery />
      <Loaner />
      <CtaBand />
    </>
  );
}
