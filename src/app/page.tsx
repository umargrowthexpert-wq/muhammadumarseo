import Image from "next/image";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import CaseStudyCard from "@/components/CaseStudyCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionLabel from "@/components/SectionLabel";
import {
  caseStudies,
  coreExpertise,
  featuredCaseStudySlugs,
  heroStats,
  methodology,
  services,
  site,
  testimonials,
} from "@/lib/site-data";

export default function Home() {
  const featured = caseStudies.filter((c) => featuredCaseStudySlugs.includes(c.slug));

  return (
    <>
      {/* Hero */}
      <section className="bg-lime">
        <div className="container-page py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <Badge variant="dark">● Available for New Clients</Badge>
              </div>

              <h1 className="font-display text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
                Become the Brand Found by{" "}
                <span className="inline-block rounded-lg bg-dark px-2 text-lime">Google</span>{" "}
                and Recommended by{" "}
                <span className="inline-block rounded-lg bg-dark px-2 text-lime">AI</span>
              </h1>

              <div className="mt-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-dark px-4 py-1.5 text-sm font-semibold text-white">
                  <span className="text-lime">(</span>
                  ChatGPT, Gemini, Claude, Perplexity, AI Overviews
                  <span className="text-lime">)</span>
                </span>
              </div>

              <p className="mt-6 max-w-2xl text-base md:text-lg text-dark/70">
                I&apos;m {site.name}, a Local SEO Specialist focused on both classic SEO and AEO
                &amp; GEO — combining advanced GMB optimization, citation building, geo-targeted
                SEO and AI-ready content strategy engineered for a guaranteed 3x growth pattern.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {site.titles.map((title) => (
                  <Badge key={title} variant="outline" className="bg-white/40">
                    {title}
                  </Badge>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/case-studies" variant="dark">
                  {site.ctaSecondary}
                </Button>
                <Button href="/contact" variant="outline" className="bg-white">
                  {site.ctaPrimary}
                </Button>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative h-60 w-60 md:h-96 md:w-96">
                {/* Decorative blob shapes */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-6 rounded-[2.5rem] bg-dark md:translate-x-6 md:translate-y-6" />
                <div className="absolute inset-0 -translate-x-3 -translate-y-3 -rotate-6 rounded-[2.5rem] bg-white/40 md:-translate-x-5 md:-translate-y-5" />

                {/* Decorative dots */}
                <span className="absolute -top-4 left-10 hidden h-2.5 w-2.5 rounded-full bg-dark md:block" />
                <span className="absolute top-12 -right-6 hidden h-2 w-2 rounded-full bg-dark/50 md:block" />
                <span className="absolute -bottom-3 right-12 hidden h-2.5 w-2.5 rounded-full bg-dark md:block" />

                {/* Connecting line */}
                <svg
                  className="absolute -top-10 -left-10 hidden h-20 w-20 md:block"
                  viewBox="0 0 100 100"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 90 C 10 40, 60 10, 95 10"
                    stroke="#0F0F0F"
                    strokeWidth="1.5"
                    strokeDasharray="2 5"
                  />
                  <circle cx="95" cy="10" r="3" fill="#0F0F0F" />
                </svg>

                {/* Main photo */}
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-dark shadow-xl">
                  <Image
                    src="/images/umar-headshot.jpg"
                    alt={`${site.name} — Local SEO Specialist`}
                    fill
                    priority
                    sizes="(min-width: 768px) 384px, 240px"
                    className="object-cover"
                  />
                </div>

                {/* Floating name card */}
                <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-line bg-white px-4 py-2.5 shadow-xl md:left-auto md:right-2 md:translate-x-0">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-line">
                    <Image
                      src="/images/umar-headshot.jpg"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="whitespace-nowrap">
                    <p className="font-display text-sm font-bold leading-tight text-dark">
                      {site.name}
                    </p>
                    <p className="text-xs text-dark/50">Local SEO Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <Badge variant="outline" className="mb-6">
              About Me
            </Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-xl">
              Local SEO Strategy &amp; GMB Growth, Engineered for Hypergrowth
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-dark/70">
              <p>
                I&apos;m {site.name}, a Local SEO Specialist helping local businesses dominate
                Google Maps, Google Business Profile and AI-generated search results —
                combining technical audits, citation building and geo-targeted content for
                measurable growth.
              </p>
              <p>
                From HVAC and appliance repair to dentistry, sports therapy and real estate —
                I&apos;ve helped 50+ clients grow calls, bookings and map-pack visibility by up
                to 10x, with strategies engineered for both traditional SERPs and AI
                Overviews.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="primary">
                More About Me
              </Button>
            </div>
          </div>

          {/* Right: visual card */}
          <div className="rounded-3xl bg-dark p-6 md:p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime text-dark">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <p className="font-display font-bold text-sm text-white/70">Local SEO Specialist</p>
                <p className="font-display font-bold text-lime text-lg">GMB &amp; AEO Expert</p>
              </div>
            </div>

            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/umar-headshot.jpg"
                alt={`${site.name} — Local SEO Specialist`}
                fill
                sizes="(min-width: 768px) 480px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/20">
                <Image src="/images/umar-headshot.jpg" alt="" fill className="object-cover" />
              </div>
              <div>
                <p className="font-display text-sm font-bold leading-tight">{site.name}</p>
                <p className="text-xs text-lime">● Available for New Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Strategy */}
      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-6 bg-lime" />
              <span className="text-xs font-semibold uppercase tracking-widest text-dark/50">
                About
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-xl">
              Search changed. The strategy did too.
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-dark/70">
              <p>
                Results-driven{" "}
                <strong className="text-dark">Local SEO Specialist with 5+ years of experience</strong>{" "}
                helping local businesses increase Map Pack visibility, qualified leads and
                revenue through Google Business Profile optimization, technical SEO, citation
                building and review-growth strategies.
              </p>
              <p>
                Specialized in ranking businesses across{" "}
                <strong className="text-dark">
                  Google Maps, Google Search, AI Overviews, ChatGPT, Gemini and Perplexity
                </strong>{" "}
                through GMB optimization, entity-based local SEO, geo-targeted content and
                review velocity — engineered for both traditional SERPs and AI search.
              </p>
              <p>
                Successfully delivered growth campaigns for{" "}
                <strong className="text-dark">
                  50+ clients across HVAC, dental, sports therapy, tree services, real estate
                  and home services
                </strong>{" "}
                — generating up to 10x keyword visibility, 300% map-pack growth and a
                guaranteed 3x local-pack growth pattern.
              </p>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="space-y-5">
            <div className="rounded-2xl bg-dark p-6 md:p-8">
              <p className="font-display text-3xl md:text-4xl font-bold text-lime">163K</p>
              <p className="mt-2 text-xs md:text-sm uppercase tracking-widest text-white/50">
                Impressions · 6-Month Window
              </p>
            </div>
            <div className="rounded-2xl bg-dark p-6 md:p-8">
              <p className="font-display text-3xl md:text-4xl font-bold text-lime">+182%</p>
              <p className="mt-2 text-xs md:text-sm uppercase tracking-widest text-white/50">
                GBP Calls vs Last Year
              </p>
            </div>
            <div className="rounded-2xl bg-dark p-6 md:p-8">
              <p className="font-display text-3xl md:text-4xl font-bold text-lime">5.4%</p>
              <p className="mt-2 text-xs md:text-sm uppercase tracking-widest text-white/50">
                Avg. Click-Through Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="bg-dark text-white">
        <div className="container-page py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-4xl font-bold text-lime">{stat.value}</p>
              <p className="text-xs md:text-sm uppercase tracking-wide text-white/60 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Results / Proof */}
      <section className="container-page py-16 md:py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-6 bg-lime" />
          <span className="text-xs font-semibold uppercase tracking-widest text-dark/50">
            Results
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-xl">
          Proof, not promises.
        </h2>
        <p className="mt-4 max-w-xl text-dark/60">
          Live client dashboards from Google Search Console, Google Business Profile and
          Local Falcon grid scans — real numbers, real accounts, no mockups.
        </p>

        {/* Featured: Local Falcon grid scan */}
        <div className="mt-10 rounded-2xl border border-line bg-white overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-line">
            <span className="text-xs font-semibold uppercase tracking-widest text-dark/40">
              Local Falcon · Map Pack Grid Scan
            </span>
            <span className="font-display text-lg md:text-xl font-bold">
              Page 2{" "}
              <span className="text-dark/30 mx-1">→</span>{" "}
              <span className="rounded-md bg-lime px-2 py-0.5 text-dark">Top 3 Map Pack</span>
            </span>
          </div>
          <div className="relative aspect-[21/10] w-full bg-cream">
            <Image
              src="/images/results/before-after.jpg"
              alt="Local Falcon grid scan showing Map Pack ranking improvement across the full service area"
              fill
              sizes="(min-width: 768px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
          <p className="px-6 py-4 text-sm text-dark/60">
            Full-area grid scan across every search point in the service area — from buried
            on page two to dominating the top 3, in under 6 months.
          </p>
        </div>

        {/* Detail cards */}
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-line bg-white overflow-hidden flex flex-col">
            <div className="px-5 py-4 border-b border-line">
              <span className="text-xs font-semibold uppercase tracking-widest text-dark/40">
                Search Console · 6-Month Compare
              </span>
              <p className="mt-1 font-display text-lg font-bold">
                <span className="rounded-md bg-lime px-1.5 py-0.5 text-dark">1.31M</span>{" "}
                Impressions · 9.72K Clicks
              </p>
            </div>
            <div className="relative aspect-[16/10] w-full bg-cream">
              <Image
                src="/images/results/gsc-2.jpg"
                alt="Google Search Console 6-month comparison: 1.31M impressions, 9.72K clicks"
                fill
                sizes="(min-width: 768px) 400px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <p className="px-5 py-4 text-sm text-dark/60">
              Impressions and clicks climbing month over month, with average position
              improving from 35.3 to 7.5.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-white overflow-hidden flex flex-col">
            <div className="px-5 py-4 border-b border-line">
              <span className="text-xs font-semibold uppercase tracking-widest text-dark/40">
                Search Console · Growth
              </span>
              <p className="mt-1 font-display text-lg font-bold">
                <span className="rounded-md bg-lime px-1.5 py-0.5 text-dark">5.8%</span> CTR ·
                128K Impressions
              </p>
            </div>
            <div className="relative aspect-[16/10] w-full bg-cream">
              <Image
                src="/images/results/gsc-1.jpg"
                alt="Google Search Console growth: 128K impressions, 7.37K clicks, 5.8% CTR"
                fill
                sizes="(min-width: 768px) 400px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <p className="px-5 py-4 text-sm text-dark/60">
              7.37K clicks from a standing start — steady organic compounding.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-white overflow-hidden flex flex-col">
            <div className="px-5 py-4 border-b border-line">
              <span className="text-xs font-semibold uppercase tracking-widest text-dark/40">
                Google Business Profile · Calls
              </span>
              <p className="mt-1 font-display text-lg font-bold">
                <span className="rounded-md bg-lime px-1.5 py-0.5 text-dark">236</span> Calls ·
                +17.4% YoY
              </p>
            </div>
            <div className="relative aspect-[16/10] w-full bg-cream">
              <Image
                src="/images/results/gbp-calls.jpg"
                alt="Google Business Profile calls: 236 calls, up 17.4% year over year"
                fill
                sizes="(min-width: 768px) 400px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <p className="px-5 py-4 text-sm text-dark/60">
              Calls made directly from the Business Profile, up 17.4% versus last year.
            </p>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="bg-dark text-white">
        <div className="container-page py-16 md:py-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-6 bg-lime" />
            <span className="text-xs font-semibold uppercase tracking-widest text-lime/80">
              Core Expertise
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
              One playbook for Google, Maps and <span className="text-lime">AI search</span>.
            </h2>
            <p className="max-w-md text-white/60">
              From classic technical SEO to ranking inside ChatGPT, Gemini and AI Overviews — a
              full stack engineered for how people search today, and how they&apos;ll search
              next.
            </p>
          </div>

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

      {/* Services Snapshot */}
      <section className="container-page py-16 md:py-24">
        <SectionLabel
          number="01"
          title="Services Snapshot"
          description="A full local SEO system — from technical audits to GMB optimization, citations, content and reviews."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <div key={service.title} className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-display font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-dark/60">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/services" variant="dark">
            View All Services
          </Button>
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

      {/* Featured Case Studies */}
      <section className="container-page py-16 md:py-24">
        <SectionLabel
          number="03"
          title="Featured Case Studies"
          description="Real clients, real numbers — proof that hyperlocal visibility drives hypergrowth."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/case-studies" variant="dark">
            View All Case Studies
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-16 md:py-24">
        <SectionLabel number="04" title="What Clients Say" />
        <div className="grid md:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-lime">
        <div className="container-page py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark max-w-2xl mx-auto">
            {site.ctaBanner}
          </h2>
          <p className="mt-4 text-dark/70">{site.tagline}</p>
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
