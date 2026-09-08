import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallBar } from "@/components/MobileCallBar";
import { SiteFaq } from "@/components/SiteFaq";
import { site } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MB Carrosserie Star | Carrosserie à Cornebarrieu",
    template: "%s | MB Carrosserie Star",
  },
  description:
    "Atelier de carrosserie, peinture, tôlerie et mécanique à Cornebarrieu. Devis, délais tenus, finitions soignées. 14 Chem. Saint-Roch.",
  metadataBase: new URL("https://mbcarrosseriestar.fr"),
  icons: {
    icon: "/brand/logo-mark.png",
  },
  openGraph: {
    title: "MB Carrosserie Star",
    description:
      "Carrosserie, peinture, tôlerie et mécanique à Cornebarrieu — Toulouse Nord.",
    locale: "fr_FR",
    type: "website",
    images: ["/brand/logo-hero.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: site.name,
  email: site.email,
  telephone: site.phones.map((phone) => phone.href.replace("tel:", "")),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: "Cornebarrieu",
    addressCountry: "FR",
  },
  url: "https://mbcarrosseriestar.fr",
  image: "/brand/logo-hero.png",
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
      <body className="bg-carbon flex min-h-full flex-col font-sans">
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
