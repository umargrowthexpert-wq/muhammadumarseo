import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site, siteUrl } from "@/lib/site-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Umar | Local SEO Specialist & GMB Expert",
  description:
    "Local SEO Specialist helping local businesses rank higher on Google Maps and generate more leads. Guaranteed 3x growth through GMB optimization, citations, local SEO audits and AEO/GEO strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: site.name,
        jobTitle: site.titles,
        email: site.email,
        telephone: site.phone,
        url: siteUrl,
        sameAs: [site.linkedin, site.facebook],
        worksFor: { "@id": `${siteUrl}/#business` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: `${site.name} | Local SEO`,
        description: site.tagline,
        url: siteUrl,
        email: site.email,
        telephone: site.phone,
        founder: { "@id": `${siteUrl}/#person` },
        areaServed: "Worldwide",
        sameAs: [site.linkedin, site.facebook],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
