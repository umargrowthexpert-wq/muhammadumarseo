import Link from "next/link";
import { navLinks, services, site } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-24">
      <div className="container-page py-12 grid gap-10 md:grid-cols-4">
        <div>
          <p className="font-display font-bold text-xl">
            {site.name}
            <span className="ml-1 inline-block rounded-md bg-lime px-2 py-0.5 text-dark text-sm align-middle">
              SEO
            </span>
          </p>
          <p className="mt-3 text-sm text-white/60 max-w-xs">{site.location}</p>
          <p className="mt-4 text-sm text-white/80 max-w-xs">{site.tagline}</p>
        </div>

        <div>
          <p className="font-display font-semibold text-sm uppercase tracking-wide text-lime">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-semibold text-sm uppercase tracking-wide text-lime">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.title} className="text-white/70">
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-semibold text-sm uppercase tracking-wide text-lime">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${site.phone.replace(/[^\d]/g, "")}`} className="hover:text-white">
                {site.phone} (WhatsApp)
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
