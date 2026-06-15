import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Case Studies | " + site.name,
  description:
    "Real local SEO results - Map Pack rankings, calls, bookings and traffic growth across sports therapy, dental, tree services and HVAC clients.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Real Clients, Real Numbers"
        description="A selection of local SEO engagements - what I did, and the measurable Map Pack, traffic and conversion results that followed."
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      </section>
    </>
  );
}
