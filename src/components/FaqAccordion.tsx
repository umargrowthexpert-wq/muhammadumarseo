"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question} className="rounded-2xl border border-line bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
            >
              <span className="font-display font-bold">{faq.question}</span>
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-dark text-lime font-display text-lg">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm text-dark/70">{faq.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
