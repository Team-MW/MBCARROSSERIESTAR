import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallBar } from "@/components/MobileCallBar";
import { SiteFaq } from "@/components/SiteFaq";
import { pageMeta, pages } from "@/lib/seo";
import { reviews, site } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover" as const,
  themeColor: "#070707",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  ...pageMeta(pages.home),
  title: {
    default: pages.home.title,
    template: `%s | ${site.name}`,
  },
  keywords: [
    "carrosserie Cornebarrieu",
    "carrosserie Toulouse Nord",
    "peinture automobile Cornebarrieu",
    "tôlerie auto 31700",
    "mécanique automobile Cornebarrieu",
    "MB Carrosserie Star",
    "devis carrosserie",
    "véhicule de prêt carrosserie",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.legal.legalName,
  category: "automotive",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  "@id": `${site.url}/#entreprise`,
  name: site.name,
  legalName: site.legal.legalName,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phones.map((phone) => phone.href.replace("tel:", "")),
  image: [`${site.url}/brand/logo-hero.avif`, `${site.url}/brand/app-icon.png`],
  logo: `${site.url}/brand/logo-mark.avif`,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: "Occitanie",
    addressCountry: "FR",
  },
  hasMap: site.address.mapsUrl,
  areaServed: [
    { "@type": "City", name: "Cornebarrieu" },
    { "@type": "City", name: "Toulouse" },
    { "@type": "City", name: "Blagnac" },
    { "@type": "City", name: "Colomiers" },
  ],
  sameAs: [site.tiktok.profileUrl],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    reviewCount: String(reviews.length),
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="bg-carbon flex min-h-full flex-col overflow-x-hidden font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <SiteFaq />
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
