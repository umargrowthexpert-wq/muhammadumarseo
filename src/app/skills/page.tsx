import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import { coreExpertise, notableSkills, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Skills | " + site.name,
  description:
    "Strategic, technical and AI-search skills behind a guaranteed 3x local-pack growth system — from business strategy to GEO, GMB and technical SEO.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHero
        eyebrow="Skills"
        title="The Skill Set Behind the Results"
        description="A mix of business strategy, leadership and hands-on technical SEO — the combination that turns audits into rankings, calls and bookings."
      />

      {/* Notable Skills */}
      <section className="container-page py-16 md:py-24">
        <SectionLabel
          number="01"
          title="Notable Skills"
          description="The strategic and operational skills that sit behind every local SEO engagement — planning the work, leading the team and tying it back to revenue."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notableSkills.map((skill, i) => (
            <div key={skill.title} className="rounded-2xl border border-line bg-white p-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dark text-lime font-display text-sm font-bold mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display font-bold text-lg mb-2">{skill.title}</h3>
              <p className="text-sm text-dark/60">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Expertise */}
      <section className="bg-dark text-white">
        <div className="container-page py-16 md:py-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-6 bg-lime" />
            <span className="text-xs font-semibold uppercase tracking-widest text-lime/80">
              Technical Expertise
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-2xl mb-12">
            One playbook for Google, Maps and <span className="text-lime">AI search</span>.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreExpertise.map((group) => (
              <div
                key={group.number}
                className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-lime/40 hover:bg-white/[0.03]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-dark font-display text-sm font-bold">
                    {group.number}
                  </span>
                  <h3 className="font-display text-lg font-bold">{group.title}</h3>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="mt-2 h-1 w-1 rounded-full bg-lime shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime">
        <div className="container-page py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark max-w-2xl mx-auto">
            Strategy and execution, in one local SEO partner.
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
