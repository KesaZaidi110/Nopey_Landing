"use client";

import { useEffect, useRef } from "react";

/* ── Mini-UI: Upload step ── */
function UploadMiniUI() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-[#12372A]/25 bg-[#FFF4D6] p-5 flex flex-col items-center gap-2 text-center mt-4">
      <div className="w-10 h-10 rounded-2xl bg-[#C8F560] flex items-center justify-center text-xl">
        📂
      </div>
      <p className="text-xs font-semibold text-[#12372A]">
        Drop your CSV here
      </p>
      <p className="text-[10px] text-[#12372A]/50">or click to browse files</p>
      <div className="mt-1 rounded-full bg-[#12372A] px-4 py-1.5 text-[10px] font-bold text-[#C8F560] uppercase tracking-wider cursor-default">
        Choose file
      </div>
    </div>
  );
}

/* ── Mini-UI: Recurring charges list ── */
function ChargesMiniUI() {
  const charges = [
    { name: "Streaming Plus", amount: "$15.99/mo", flag: "⬆️" },
    { name: "Cloud Storage", amount: "$9.99/mo", flag: null },
    { name: "Gym App", amount: "$6.99/mo", flag: "⚠️" },
    { name: "News Premium", amount: "$4.99/mo", flag: null },
  ];

  return (
    <div className="mt-4 flex flex-col gap-2">
      {charges.map(({ name, amount, flag }) => (
        <div
          key={name}
          className="flex items-center justify-between rounded-xl bg-[#FFF4D6] px-3 py-2.5 border border-[#12372A]/10"
        >
          <div className="flex items-center gap-2">
            {flag && (
              <span className="text-sm" aria-hidden="true">
                {flag}
              </span>
            )}
            <p className="text-xs font-semibold text-[#12372A]">{name}</p>
          </div>
          <span className="text-xs font-bold text-[#12372A]">{amount}</span>
        </div>
      ))}
      <div className="flex items-center justify-between rounded-xl bg-[#12372A] px-3 py-2.5 mt-1">
        <p className="text-[10px] font-bold text-[#C8F560] uppercase tracking-wide">Total / year</p>
        <span className="text-sm font-black text-[#C8F560]">$451.44</span>
      </div>
    </div>
  );
}

/* ── Mini-UI: Cancel guide ── */
function CancelMiniUI() {
  const steps = [
    "Open the service's account settings",
    "Find \"Billing\" or \"Subscription\"",
    "Click \"Cancel plan\" and confirm",
  ];

  return (
    <div className="mt-4 flex flex-col gap-2">
      <div className="rounded-xl bg-[#FF6B4A]/10 border border-[#FF6B4A]/25 px-3 py-2 flex items-center gap-2">
        <span className="text-sm" aria-hidden="true">🚨</span>
        <p className="text-[10px] font-semibold text-[#FF6B4A]">
          Streaming Plus - 3 steps to cancel
        </p>
      </div>
      {steps.map((step, i) => (
        <div key={i} className="flex items-start gap-3">
          <span className="w-5 h-5 rounded-full bg-[#C8F560] shrink-0 flex items-center justify-center text-[10px] font-black text-[#12372A] mt-0.5">
            {i + 1}
          </span>
          <p className="text-xs text-[#12372A]/80 font-inter">{step}</p>
        </div>
      ))}
      <button
        className="mt-1 rounded-full bg-[#12372A] text-[#C8F560] text-[10px] font-bold uppercase tracking-wide px-4 py-2 text-center cursor-default"
        tabIndex={-1}
        aria-hidden="true"
      >
        Mark as cancelled ✓
      </button>
    </div>
  );
}

/* ── Steps data ── */
const steps = [
  {
    number: "01",
    title: "Upload your statement",
    description:
      "Export a CSV from your bank  and drop it into Nopey. No account needed.",
    MiniUI: UploadMiniUI,
  },
  {
    number: "02",
    title: "See every recurring charge",
    description:
      "Nopey spots the patterns - monthly, annual, quarterly - and shows you the real yearly cost of each one.",
    MiniUI: ChargesMiniUI,
  },
  {
    number: "03",
    title: "Cancel with a guide",
    description:
      "For the ones you want to cut, get step-by-step instructions built specifically for each type of service.",
    MiniUI: CancelMiniUI,
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target
            .querySelectorAll(".scroll-fade")
            .forEach((el, i) => {
              if (entry.isIntersecting) {
                setTimeout(() => el.classList.add("visible"), i * 120);
              }
            });
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-24 px-4"
      aria-labelledby="how-heading"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="scroll-fade flex justify-center mb-4">
          <span className="text-[#12372A]/50 text-xs font-bold uppercase tracking-[0.2em]">
            How it works
          </span>
        </div>
        <h2
          id="how-heading"
          className="scroll-fade font-bricolage font-extrabold text-[#12372A] text-3xl sm:text-4xl lg:text-5xl text-center leading-tight tracking-tight mb-16"
        >
          Three steps. No surprises.
        </h2>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ number, title, description, MiniUI }) => (
            <article
              key={number}
              className="scroll-fade rounded-3xl bg-white border border-[#12372A]/10 p-6 shadow-[0_8px_32px_-8px_rgba(18,55,42,0.1)] flex flex-col"
              aria-label={`Step ${number}: ${title}`}
            >
              {/* Number */}
              <span className="font-bricolage font-black text-5xl text-[#C8F560] leading-none mb-3">
                {number}
              </span>

              {/* Title */}
              <h3 className="font-bricolage font-bold text-[#12372A] text-lg leading-snug mb-2">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm font-inter text-[#12372A]/65 leading-relaxed">
                {description}
              </p>

              {/* Mini UI */}
              <MiniUI />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
