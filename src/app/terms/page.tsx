import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms & Conditions | " + site.name,
  description: "Terms and conditions for " + site.name + "'s website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />

      <section className="container-page py-16 md:py-24">
        <div className="max-w-2xl mx-auto space-y-6 text-dark/70">
          <p>
            These terms govern your use of this website and any inquiries submitted through it.
            By using this site, you agree to the terms below.
          </p>

          <h2 className="font-display text-xl font-bold text-dark">Services</h2>
          <p>
            Information on this site — including case studies, results and statistics — describes
            past client engagements and is provided for informational purposes. Results vary by
            business, industry, location and competitive landscape. Any specific service
            engagement is governed by a separate agreement between {site.name} and the client.
          </p>

          <h2 className="font-display text-xl font-bold text-dark">No Ranking Guarantees</h2>
          <p>
            While I work toward a guaranteed local-pack growth pattern as outlined in client
            agreements, no ethical SEO provider can guarantee specific #1 rankings for any
            keyword, as search engine algorithms are outside of any provider&apos;s direct
            control.
          </p>

          <h2 className="font-display text-xl font-bold text-dark">Intellectual Property</h2>
          <p>
            All content on this site, including text, branding and design, is the property of{" "}
            {site.name} unless otherwise noted, and may not be reproduced without permission.
          </p>

          <h2 className="font-display text-xl font-bold text-dark">Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
