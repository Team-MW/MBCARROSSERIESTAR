import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { pageMeta, pages } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta(pages.mentions);

const { legal } = site;

const blocks = [
  {
    title: "Éditeur du site",
    rows: [
      ["Dénomination sociale", legal.legalName],
      ["Nom commercial", legal.tradeName],
      ["Forme juridique", legal.legalForm],
      ["Capital social", legal.capital],
      ["Siège social", legal.legalAddress],
      ["SIREN", legal.siren],
      ["SIRET (siège)", legal.siret],
      ["N° TVA intracommunautaire", legal.tva],
      ["RCS", `${legal.rcs} — inscrit au greffe de ${legal.rcsGreffe} le ${legal.rcsDate}`],
      ["RNE", legal.rne],
      ["Date de création", legal.createdAt],
      ["Statut", legal.status],
      ["Effectif", legal.staff],
    ],
  },
  {
    title: "Direction de la publication",
    rows: [
      ["Directeur de la publication", `${legal.director}, ${legal.directorRole}`],
      ["Contact", site.email],
      ["Téléphone", site.phones.map((phone) => phone.display).join(" · ")],
    ],
  },
  {
    title: "Activité",
    rows: [
      ["Activité principale", legal.activity],
      ["Autres activités", legal.otherActivities],
      ["Code NAF / APE", `${legal.naf} — ${legal.nafLabel}`],
      ["Domaine d’activité", legal.domain],
      ["Convention collective", `IDCC ${legal.idcc} — ${legal.idccLabel}`],
      ["Clôture d’exercice", legal.yearEnd],
    ],
  },
  {
    title: "Hébergement",
    rows: [
      ["Hébergeur", legal.host.name],
      ["Adresse", legal.host.address],
      ["Site", legal.host.url],
    ],
  },
] as const;

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Informations juridiques"
        title="Mentions légales"
        text={`SARL au capital de ${legal.capital} — ${legal.rcs}. Informations à jour au ${legal.updatedAt}.`}
      />
      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6">
          {blocks.map((block) => (
            <div key={block.title}>
              <h2 className="font-display text-2xl tracking-wide text-brand-bright">
                {block.title}
              </h2>
              <dl className="mt-5 divide-y divide-white/10 border-y border-white/10">
                {block.rows.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-1 py-4 sm:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] sm:gap-6"
                  >
                    <dt className="text-sm text-white/45">{label}</dt>
                    <dd className="text-sm leading-relaxed break-words text-white sm:text-right">
                      {label === "Site" ? (
                        <a
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-bright hover:text-white"
                        >
                          {value}
                        </a>
                      ) : label === "Contact" ? (
                        <a href={`mailto:${value}`} className="hover:text-brand-bright">
                          {value}
                        </a>
                      ) : label === "Siège social" ? (
                        <a
                          href={site.address.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-bright"
                        >
                          {value}
                        </a>
                      ) : label === "Téléphone" ? (
                        <span className="flex flex-col gap-1 sm:items-end">
                          {site.phones.map((phone) => (
                            <a
                              key={phone.href}
                              href={phone.href}
                              className="hover:text-brand-bright"
                            >
                              {phone.display}
                            </a>
                          ))}
                        </span>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}

          <div>
            <h2 className="font-display text-2xl tracking-wide text-brand-bright">
              Données personnelles
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Les informations envoyées via le formulaire de contact (nom,
              e-mail, téléphone, prestation, message) sont destinées à{" "}
              {legal.legalName} afin de traiter votre demande de devis ou de
              rendez-vous. Elles sont collectées par l’intermédiaire de Jotform.
              Conformément au RGPD, vous pouvez demander l’accès, la
              rectification ou la suppression de vos données en écrivant à{" "}
              <a href={`mailto:${site.email}`} className="text-brand-bright hover:text-white">
                {site.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl tracking-wide text-brand-bright">
              Propriété intellectuelle
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              L’ensemble du site (textes, visuels, logo, structure) est la
              propriété de {legal.legalName}, sauf mentions contraires. Toute
              reproduction non autorisée est interdite.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
