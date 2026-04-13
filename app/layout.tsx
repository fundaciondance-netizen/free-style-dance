import type { Metadata } from "next";
import { Arvo } from "next/font/google";
import "./globals.css";

const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.freestyledancecali.com"),

  title: "Academia de baile en Cali | Free Style Dance",
  description:
    "Aprende a bailar en Cali sin experiencia. Clases de danza urbana, bachata, salsa choke y kpop. Academia con ambiente familiar y horarios flexibles.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "academia de baile en Cali",
    "clases de baile en Cali",
    "clases de danza en Cali",
    "clases de baile para niños en Cali",
    "clases de baile para jóvenes en Cali",
    "clases de baile para adultos en Cali",
    "danza urbana Cali",
    "clases de bachata Cali",
    "clases de kpop Cali",
    "shows de baile en Cali",
  ],

  authors: [{ name: "Free Style Dance" }],
  creator: "Free Style Dance",
  robots: { index: true, follow: true },

  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },

  openGraph: {
    title: "Academia de baile en Cali | Aprende sin miedo y disfruta",
    description:
      "Clases de baile en Cali para todos los niveles. Vive la experiencia, mejora tu confianza y forma parte de una comunidad real.",
    url: "https://www.freestyledancecali.com",
    siteName: "Free Style Dance",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.freestyledancecali.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Free Style Dance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Academia de baile en Cali | Aprende sin miedo y disfruta",
    description:
      "Clases de baile en Cali para todos los niveles. Vive la experiencia, mejora tu confianza y forma parte de una comunidad real.",
    images: ["https://www.freestyledancecali.com/Logo.png"],
    site: "@freestyledance",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className={`${arvo.className} min-h-full flex flex-col bg-black text-white`}>
        
        {/* 🔥 SCHEMA SEO COMPLETO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DanceSchool",
              name: "Free Style Dance",
              url: "https://www.freestyledancecali.com",
              logo: "https://www.freestyledancecali.com/Logo.png",
              image: "https://www.freestyledancecali.com/Logo.png",
              description:
                "Academia de baile en Cali con clases para niños, jóvenes y adultos. Aprende danza urbana, bachata, kpop y más.",

              address: {
                "@type": "PostalAddress",
                addressLocality: "Cali",
                addressRegion: "Valle del Cauca",
                addressCountry: "CO",
              },

              areaServed: {
                "@type": "City",
                name: "Cali",
              },

              sameAs: [
                "https://instagram.com/freestyledance",
                "https://tiktok.com/@freestyledance",
              ],

              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                areaServed: "CO",
                availableLanguage: ["Spanish"],
              },

              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Clases de danza urbana",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Clases de bachata",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Clases de K-pop",
                  },
                },
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}