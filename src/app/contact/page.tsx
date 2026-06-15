import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | " + site.name,
  description:
    "Book a free local SEO consultation or request a free audit. Get in touch via email, WhatsApp, LinkedIn or the contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book Your Free Local SEO Consultation"
        description="Tell me about your business and goals — I'll review your current local search presence and follow up with a free audit."
      />

      <section className="container-page py-16 md:py-24">
        <div className="mb-10 rounded-2xl border border-line bg-dark p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-lime/70 mb-1">Prefer to talk?</p>
            <h3 className="font-display text-xl md:text-2xl font-bold text-white">
              Book a Free Consultation Call Directly
            </h3>
          </div>
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-dark hover:bg-lime/90 transition-colors whitespace-nowrap"
          >
            Schedule on Calendly
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <SectionLabel number="01" title="Send a Message" />
            <ContactForm />
          </div>

          <div className="order-1 lg:order-2">
            <SectionLabel number="02" title="Direct Contact" />
            <div className="rounded-2xl border border-line bg-white p-6 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wide text-dark/50 mb-1">Email</p>
                <a href={`mailto:${site.email}`} className="font-display font-bold hover:underline">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-dark/50 mb-1">Phone / WhatsApp</p>
                <a
                  href={`https://wa.me/${site.phone.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-bold hover:underline"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-dark/50 mb-1">Location</p>
                <p className="font-display font-bold">{site.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-dark/50 mb-1">Connect</p>
                <div className="flex flex-col gap-1">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-bold hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-bold hover:underline"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
