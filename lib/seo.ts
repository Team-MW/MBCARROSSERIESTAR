import type { Metadata } from "next";
import { site } from "@/lib/site";

export const pages = {
  home: {
    path: "/",
    title: "MB Carrosserie Star | Carrosserie à Cornebarrieu",
    description: site.description,
  },
  prestations: {
    path: "/prestations",
    title: "Prestations",
    description:
      "Carrosserie, peinture, tôlerie et mécanique à Cornebarrieu. Chocs, mise en teinte, réalisations avant/après. Devis MB Carrosserie Star — 07 66 57 39 76 · 07 80 24 68 73.",
  },
  atelier: {
    path: "/atelier",
    title: "L’atelier",
    description:
      "Atelier MB Carrosserie Star à Cornebarrieu : équipe de proximité, véhicule de prêt, horaires Lun–Sam. 14 Chem. Saint-Roch, Toulouse Nord — 07 66 57 39 76 · 07 80 24 68 73.",
  },
  avis: {
    path: "/avis",
    title: "Avis clients",
    description:
      "Avis Google 5/5 pour MB Carrosserie Star à Cornebarrieu. Peinture soignée, délais tenus, accueil de proximité. 14 Chem. Saint-Roch, Toulouse Nord.",
  },
  contact: {
    path: "/contact",
    title: "Contact",
    description:
      "Devis carrosserie à Cornebarrieu : formulaire en ligne, appel ou passage à l’atelier. 07 66 57 39 76 · 07 80 24 68 73 — 14 Chem. Saint-Roch. Lun–Ven 9h–18h, samedi 9h–17h.",
  },
  mentions: {
    path: "/mentions-legales",
    title: "Mentions légales",
    description:
      "Mentions légales MB Carrosserie Star, SARL à Cornebarrieu : SIREN 994 016 715, SIRET 994 016 715 00017, RCS Toulouse, TVA, gérant Onyeka Monday.",
  },
} as const;

export function pageMeta({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const ogTitle =
    path === "/" ? title : `${title} | ${site.name}`;

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url,
      locale: "fr_FR",
      type: "website",
      siteName: site.name,
      images: [
        {
          url: "/brand/app-icon.png",
          width: 512,
          height: 512,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: ogTitle,
      description,
      images: ["/brand/app-icon.png"],
    },
  };
}
