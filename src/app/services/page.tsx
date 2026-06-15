import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import { methodology, services, site, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services | " + site.name,
  description:
    "Google Business Profile optimization, local SEO audits, citation building, local keyword research, on-page SEO, local link building, review management and multi-location SEO.",
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, i) => ({
      "@type": "Service",
      position: i + 1,
      name: service.title,
      description: service.description,
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: "Worldwide",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Services"
        title="A Complete Local SEO System"
        description="From technical audits to GMB optimization, citations, content and reviews — everything your business needs to win the Map Pack and convert local search traffic."
      />

      {/* Services grid */}
      <section className="container-page py-16 md:py-24">
        <SectionLabel
          number="01"
          title="What I Offer"
          description="Each service is designed to compound — together they build the entity authority and conversion systems that drive guaranteed local growth."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={service.title} className="rounded-2xl border border-line bg-white p-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-dark text-lime font-display text-sm font-bold mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-dark/60">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-dark text-white">
        <div className="container-page py-16 md:py-24">
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-dark font-display text-sm font-bold">
                02
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                My 5-Step Local SEO Method
              </h2>
            </div>
            <p className="mt-3 text-white/60 max-w-2xl">
              Every engagement follows this framework — from market intelligence to a compounding
              conversion and revenue system.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {methodology.map((step) => (
              <div key={step.step} className="rounded-2xl border border-white/10 p-5">
                <p className="font-display text-lime text-2xl font-bold mb-3">{step.step}</p>
                <h3 className="font-display font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime">
        <div className="container-page py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark max-w-2xl mx-auto">
            Ready to find out what&apos;s holding your rankings back?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="dark">
              Request a Free Audit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
