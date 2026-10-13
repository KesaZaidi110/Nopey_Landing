"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="py-24 px-4"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex justify-center mb-4">
          <span className="text-[#12372A]/50 text-xs font-bold uppercase tracking-[0.2em]">
            FAQ
          </span>
        </div>
        <h2
          id="faq-heading"
          className="font-bricolage font-extrabold text-[#12372A] text-3xl sm:text-4xl lg:text-5xl text-center leading-tight tracking-tight mb-14"
        >
          Questions? We have answers.
        </h2>

        {/* Accordion */}
        <dl className="flex flex-col gap-3">
          {FAQ_ITEMS.map(({ question, answer }, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const triggerId = `faq-trigger-${i}`;

            return (
              <div
                key={i}
                className={`rounded-3xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#12372A]/25 bg-white shadow-[0_4px_20px_-4px_rgba(18,55,42,0.1)]"
                    : "border-[#12372A]/12 bg-white/60 hover:bg-white hover:border-[#12372A]/20"
                }`}
              >
                <dt>
                  <button
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F560] focus-visible:ring-inset"
                  >
                    <span className="font-bricolage font-bold text-[#12372A] text-sm sm:text-base">
                      {question}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#12372A] text-[#C8F560] rotate-45"
                          : "bg-[#12372A]/8 text-[#12372A]"
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M7 1v12M1 7h12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>

                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`faq-answer ${isOpen ? "open" : ""}`}
                >
                  <p className="px-6 pb-5 text-sm font-inter text-[#12372A]/65 leading-relaxed">
                    {answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
