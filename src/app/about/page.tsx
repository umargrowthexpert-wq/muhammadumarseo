import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import ProgressBar from "@/components/ProgressBar";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import {
  certifications,
  coreCompetencies,
  education,
  experience,
  languages,
  methodology,
  professionalSummary,
  site,
  tools,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About | " + site.name,
  description: "Local SEO Specialist with 5+ years experience and 50+ clients delivered.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Me"
        title={`Hi, I'm ${site.name} — Local SEO Specialist`}
        description={professionalSummary}
      />

      {/* Experience */}
      <section className="container-page py-16 md:py-24">
        <SectionLabel number="01" title="Experience" />
        <div className="space-y-6">
          {experience.map((job) => (
            <div key={job.role} className="rounded-2xl border border-line bg-white p-6 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                <h3 className="font-display text-xl font-bold">{job.role}</h3>
                <span className="text-sm text-dark/50">{job.company}</span>
              </div>
              <ul className="space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-dark/70">
                    <span className="text-lime mt-1">◆</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-dark text-white">
        <div className="container-page py-16 md:py-24">
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-dark font-display text-sm font-bold">
                02
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold">My Approach</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {methodology.map((step) => (
              <div key={step.step} className="rounded-2xl border border-white/10 p-5">
                <p className="font-display text-lime text-2xl font-bold mb-3">{step.step}</p>
                <h3 className="font-display font-bold mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="container-page py-16 md:py-24">
        <SectionLabel number="03" title="Core Competencies" />
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
          {coreCompetencies.map((item) => (
            <ProgressBar key={item.skill} label={item.skill} level={item.level} />
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="container-page py-16 md:py-24">
        <SectionLabel number="04" title="Tools & Platforms" />
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <Badge key={tool} variant="outline" className="bg-white">
              {tool}
            </Badge>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="container-page py-16 md:py-24">
        <SectionLabel number="05" title="Education & Certifications" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-display font-bold text-lg">{edu.title}</h3>
                <p className="text-sm text-dark/50 mb-3">{edu.place}</p>
                <ul className="space-y-1.5">
                  {edu.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-dark/70">
                      <span className="text-lime mt-1">◆</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-line bg-white p-6">
            <h3 className="font-display font-bold text-lg mb-3">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert.title} className="flex justify-between gap-3 text-sm">
                  <span className="text-dark/80">{cert.title}</span>
                  <span className="text-dark/40 whitespace-nowrap">{cert.place}</span>
                </li>
              ))}
            </ul>
            <h3 className="font-display font-bold text-lg mt-6 mb-3">Languages</h3>
            <ul className="space-y-1.5">
              {languages.map((lang) => (
                <li key={lang.name} className="flex justify-between text-sm">
                  <span className="text-dark/80">{lang.name}</span>
                  <span className="text-dark/40">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime">
        <div className="container-page py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">
            Let&apos;s grow your local visibility.
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="dark">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
