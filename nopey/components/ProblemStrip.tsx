"use client";

import { useEffect, useRef } from "react";

const painPoints = [
  {
    icon: "🎣",
    title: "Free trials that hook you",
    description:
      "Fourteen days of \"free\" that quietly flip to $9.99 a month. Most people don't notice until months later.",
  },
  {
    icon: "📉",
    title: "Silent price hikes",
    description:
      "Services raise prices by a few dollars and bury the notice in fine print. Your bill grows while you sleep.",
  },
  {
    icon: "🔄",
    title: "Cancelled-but-still-charging",
    description:
      "You thought you cancelled it. The charges kept coming. Classic subscription dark pattern.",
  },
];

export default function ProblemStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target
            .querySelectorAll(".scroll-fade")
            .forEach((el, i) => {
              if (entry.isIntersecting) {
                setTimeout(() => el.classList.add("visible"), i * 100);
              }
            });
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="problem"
      ref={ref}
      className="py-20 px-4 bg-[#12372A]"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section overline */}
        <div className="scroll-fade flex justify-center mb-6">
          <span className="text-[#C8F560] text-xs font-bold uppercase tracking-[0.2em]">
            The problem
          </span>
        </div>

        {/* Big callout */}
        <h2
          id="problem-heading"
          className="scroll-fade font-bricolage font-extrabold text-[#FFF4D6] text-3xl sm:text-4xl lg:text-5xl text-center leading-tight tracking-tight max-w-3xl mx-auto mb-16"
        >
          Subscriptions are designed to be forgotten.
        </h2>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {painPoints.map(({ icon, title, description }) => (
            <div
              key={title}
              className="scroll-fade rounded-3xl bg-[#FFF4D6]/8 border border-[#FFF4D6]/12 p-6 flex flex-col gap-3 hover:bg-[#FFF4D6]/12 transition-colors"
            >
              <span className="text-3xl" role="img" aria-label={title}>
                {icon}
              </span>
              <h3 className="font-bricolage font-bold text-[#FFF4D6] text-lg">
                {title}
              </h3>
              <p className="text-[#FFF4D6]/65 text-sm font-inter leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
