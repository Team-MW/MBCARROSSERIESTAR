import Link from "next/link";
import { faqs } from "@/lib/site";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-white/10 py-20 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-sm tracking-[0.35em] text-brand-bright uppercase">
          FAQ
        </p>
        <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-display text-4xl tracking-wide sm:text-5xl">
            Questions fréquentes
          </h2>
          <Link
            href="/contact"
            className="text-sm font-medium text-white/70 underline-offset-4 hover:text-white hover:underline"
          >
            Une autre question ? Écrivez-nous
          </Link>
        </div>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg tracking-wide text-white select-none sm:text-xl">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/15 text-brand-bright transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-3xl pb-5 text-sm leading-relaxed text-white/65 sm:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
