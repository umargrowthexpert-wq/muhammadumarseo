import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy | " + site.name,
  description: "Privacy policy for " + site.name + "'s website and contact form.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />

      <section className="container-page py-16 md:py-24">
        <div className="max-w-2xl mx-auto space-y-6 text-dark/70">
          <p>
            This privacy policy explains how {site.name} (&ldquo;I&rdquo;, &ldquo;me&rdquo;) collects,
            uses and protects information submitted through this website.
          </p>

          <h2 className="font-display text-xl font-bold text-dark">Information I Collect</h2>
          <p>
            When you submit the contact form, I collect the information you provide - name, email
            address, business name, website URL, services needed and your message. I do not
            collect any information automatically beyond standard hosting and analytics logs.
          </p>

          <h2 className="font-display text-xl font-bold text-dark">How I Use Your Information</h2>
          <p>
            Information submitted via the contact form is used solely to respond to your inquiry,
            provide the requested audit or consultation, and follow up about potential SEO
            services. I do not sell or share your information with third parties.
          </p>

          <h2 className="font-display text-xl font-bold text-dark">Cookies & Analytics</h2>
          <p>
            This site may use basic analytics tools (such as Google Analytics) to understand
            aggregate traffic patterns. These tools may use cookies in accordance with their own
            privacy policies.
          </p>

          <h2 className="font-display text-xl font-bold text-dark">Contact</h2>
          <p>
            If you have questions about this privacy policy or want your information removed,
            contact me at{" "}
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
