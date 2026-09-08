import type { Metadata } from "next";
import { About } from "@/components/About";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { Loaner } from "@/components/Loaner";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { TikToks } from "@/components/TikToks";
import { pageMeta, pages } from "@/lib/seo";

export const metadata: Metadata = pageMeta(pages.home);

export default function Home() {
  return (
    <>
      <Hero />
      <section className="border-y border-white/10 bg-black/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
          <div>
            <p className="font-display text-3xl text-brand-bright">5★</p>
            <p className="mt-1 text-sm text-white/55">Avis clients Google</p>
          </div>
          <div>
            <p className="font-display text-3xl text-white">4 métiers</p>
            <p className="mt-1 text-sm text-white/55">
              Carrosserie, peinture, tôlerie, mécanique
            </p>
          </div>
          <div>
            <p className="font-display text-3xl text-white">Cornebarrieu</p>
            <p className="mt-1 text-sm text-white/55">Toulouse Nord · Lun–Sam</p>
          </div>
        </div>
      </section>
      <Loaner />
      <TikToks />
      <Services preview />
      <About preview />
      <Reviews />
      <CtaBand />
    </>
  );
}
