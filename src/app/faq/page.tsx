import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import FaqAccordion from "@/components/FaqAccordion";
import Button from "@/components/Button";
import { faqs, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ | " + site.name,
  description:
    "Frequently asked questions about local SEO - timelines, multi-location strategy, ranking guarantees, tools and how results are measured.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about how local SEO works, timelines and how I measure results."
      />

      <section className="container-page py-16 md:py-24">
        <SectionLabel number="01" title="Common Questions" />
        <div className="max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="bg-lime">
        <div className="container-page py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark max-w-2xl mx-auto">
            Still have questions?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="dark">
              {site.ctaPrimary}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
