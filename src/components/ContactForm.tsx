"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/site-data";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      business: data.get("business"),
      website: data.get("website"),
      services: data.get("services"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-lime";

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center">
        <h3 className="font-display text-xl font-bold mb-2">Thanks — message sent!</h3>
        <p className="text-sm text-dark/60">
          I&apos;ll get back to you within 1 business day. In the meantime, feel free to check
          out the case studies or reach me directly via WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 md:p-8 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="business" className="block text-sm font-medium mb-2">
            Business Name
          </label>
          <input id="business" name="business" type="text" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-medium mb-2">
            Website URL
          </label>
          <input id="website" name="website" type="text" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="services" className="block text-sm font-medium mb-2">
          Services Needed
        </label>
        <select id="services" name="services" defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Not Sure / Free Audit">Not Sure — Send Me a Free Audit</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClasses} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your message. Please try again or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-dark px-6 py-3 text-sm font-semibold text-lime hover:bg-dark/90 transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
