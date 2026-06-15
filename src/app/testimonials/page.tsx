import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import TestimonialCard from "@/components/TestimonialCard";
import StatCard from "@/components/StatCard";
import Button from "@/components/Button";
import { atAGlance, site, siteUrl, testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Testimonials | " + site.name,
  description:
    "What clients say about working with Muhammad Umar - Map Pack rankings, call volume, bookings and review growth across local SEO engagements.",
};

export default function TestimonialsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: `${site.name} | Local SEO`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      reviewBody: t.feedback,
      itemReviewed: { "@type": "Organization", name: t.business },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Testimonials"
        title="What Clients Say"
        description="Feedback from business owners across sports therapy, dentistry, tree services and HVAC after local SEO engagements."
      />

      <section className="container-page py-16 md:py-24">
        <SectionLabel number="01" title="Client Feedback" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <SectionLabel
          number="02"
          title="Backed by the Numbers"
          description="Portfolio-wide performance over the last 6 months - sourced from Google Search Console, GBP Insights and Local Falcon."
        />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {atAGlance.map((stat, i) => (
            <StatCard key={stat.label} {...stat} highlight={i === atAGlance.length - 1} />
          ))}
        </div>
      </section>

      <section className="bg-lime">
        <div className="container-page py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark max-w-2xl mx-auto">
            Ready to become the next success story?
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
