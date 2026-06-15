"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/lib/site-data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-line">
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display font-bold text-lg md:text-xl tracking-tight">
            {site.name}
            <span className="ml-1 inline-block rounded-md bg-dark px-2 py-0.5 text-lime text-sm align-middle">
              SEO
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dark/80 hover:text-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-dark px-5 py-2.5 text-sm font-semibold text-lime hover:bg-dark/90 transition-colors"
          >
            {site.ctaPrimary}
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex items-center justify-center rounded-full border border-dark/10 w-10 h-10"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-dark" />
            <span className="block h-0.5 w-5 bg-dark" />
            <span className="block h-0.5 w-5 bg-dark" />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-cream">
          <div className="container-page py-4 flex flex-col gap-3">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-dark/80 hover:text-dark py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-dark px-5 py-2.5 text-sm font-semibold text-lime"
              onClick={() => setOpen(false)}
            >
              {site.ctaPrimary}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
