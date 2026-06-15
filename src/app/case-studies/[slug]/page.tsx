import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { caseStudies, site } from "@/lib/site-data";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return { title: "Case Study | " + site.name };
  }

  return {
    title: `${caseStudy.client} | Case Study | ${site.name}`,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={caseStudy.industry}
        title={caseStudy.client}
        description={caseStudy.summary}
      />

      {/* Client Overview */}
      <section className="container-page py-16 md:py-24">
        <SectionLabel number="01" title="Client Overview" />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-line bg-white p-6">
            <p className="text-xs uppercase tracking-wide text-dark/50 mb-2">Industry</p>
            <Badge variant="dark">{caseStudy.industry}</Badge>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6">
            <p className="text-xs uppercase tracking-wide text-dark/50 mb-2">Website</p>
            <p className="font-display font-bold">{caseStudy.website}</p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6">
            <p className="text-xs uppercase tracking-wide text-dark/50 mb-2">Goal</p>
            <p className="text-sm text-dark/70">
              Increase Map Pack visibility, calls and bookings through local SEO.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-dark text-white">
        <div className="container-page py-16 md:py-24">
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-dark font-display text-sm font-bold">
                02
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold">The Challenges</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudy.challenges.map((challenge) => (
              <div key={challenge} className="rounded-2xl border border-white/10 p-6">
                <p className="text-sm text-white/70">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Did */}
      <section className="container-page py-16 md:py-24">
        <SectionLabel number="03" title="What I Did" />
        <div className="grid md:grid-cols-2 gap-4">
          {caseStudy.whatIDid.map((item) => (
            <div key={item} className="rounded-2xl border border-line bg-white p-6 flex gap-3">
              <span className="text-lime text-lg leading-none">◆</span>
              <p className="text-sm text-dark/70">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="container-page py-16 md:py-24">
        <SectionLabel number="04" title="The Results" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {caseStudy.results.map((result, i) => (
            <div
              key={result.label}
              className={`rounded-2xl border p-6 ${
                i === 0 ? "bg-lime border-lime text-dark" : "bg-white border-line text-dark"
              }`}
            >
              <p className="font-display text-3xl md:text-4xl font-bold">{result.value}</p>
              <p className="text-xs md:text-sm uppercase tracking-wide text-dark/60 mt-1">
                {result.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime">
        <div className="container-page py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark max-w-2xl mx-auto">
            Want results like this for your business?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="dark">
              Request a Free Audit
            </Button>
            <Button href="/case-studies" variant="outline" className="bg-white">
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
