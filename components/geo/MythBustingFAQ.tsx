"use client";

import { useState } from "react";
import Script from "next/script";

export interface FAQItem {
  question: string;
  answer: string;
  myth?: string;
  reality?: string;
}

interface MythBustingFAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  schemaId?: string;
}

export default function MythBustingFAQ({
  faqs,
  title = "Myth-Busting FAQ",
  subtitle = "Separating fact from fiction about professional auto detailing",
  schemaId = "faq-mythbusting",
}: MythBustingFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.myth
          ? `Myth: ${faq.myth}. Reality: ${faq.reality}. ${faq.answer}`
          : faq.answer,
      },
    })),
  };

  return (
    <section className="py-12">
      <Script
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-400 mb-8">{subtitle}</p>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-gray-700/50 transition-colors"
              aria-expanded={openIndex === idx}
            >
              <span className="text-white font-medium pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-[#d6781c] shrink-0 transition-transform duration-200 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openIndex === idx && (
              <div className="px-5 pb-5 space-y-3">
                {faq.myth && (
                  <div className="flex items-start gap-3 bg-red-900/20 rounded-lg p-3 border border-red-800/30">
                    <span className="text-red-400 font-bold text-sm uppercase shrink-0 mt-0.5">
                      Myth
                    </span>
                    <p className="text-gray-300 text-sm">{faq.myth}</p>
                  </div>
                )}
                {faq.reality && (
                  <div className="flex items-start gap-3 bg-green-900/20 rounded-lg p-3 border border-green-800/30">
                    <span className="text-green-400 font-bold text-sm uppercase shrink-0 mt-0.5">
                      Fact
                    </span>
                    <p className="text-gray-300 text-sm">{faq.reality}</p>
                  </div>
                )}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
