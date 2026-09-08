import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section className="bg-carbon border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="min-w-0 overflow-hidden">
            <QuoteForm />
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-white/10 bg-black/30 p-5">
                <p className="text-xs tracking-[0.2em] text-white/45 uppercase">
                  Téléphone
                </p>
                <div className="mt-4 space-y-3">
                  {site.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="font-display block text-lg tracking-wide text-brand-bright hover:text-white sm:text-xl"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>
              <div className="border border-white/10 bg-black/30 p-5">
                <p className="text-xs tracking-[0.2em] text-white/45 uppercase">
                  Horaires
                </p>
                <ul className="mt-4 space-y-3">
                  {site.hours.map((row) => (
                    <li
                      key={row.days}
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="text-sm whitespace-nowrap text-white/60">
                        {row.days}
                      </span>
                      <span className="font-display text-base whitespace-nowrap text-white">
                        {row.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-white/10 bg-black/30 p-5">
              <p className="text-xs tracking-[0.2em] text-white/45 uppercase">
                Atelier
              </p>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-white hover:text-brand-bright"
              >
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 block text-sm break-all text-white/70 hover:text-white"
              >
                {site.email}
              </a>
            </div>

            <div className="overflow-hidden border border-white/10">
              <iframe
                title="Plan MB Carrosserie Star à Cornebarrieu"
                src={site.address.embedUrl}
                className="h-52 w-full grayscale contrast-125 sm:h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
