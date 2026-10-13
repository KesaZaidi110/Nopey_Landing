"use client";

import { useEffect, useRef } from "react";
import { FEATURES } from "@/lib/constants";

const accentMap: Record<string, string> = {
  coral: "bg-[#FF6B4A]/10 text-[#FF6B4A] border-[#FF6B4A]/20",
  lime: "bg-[#C8F560]/30 text-[#12372A] border-[#C8F560]/40",
  green: "bg-[#12372A]/8 text-[#12372A] border-[#12372A]/15",
};

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target
            .querySelectorAll(".scroll-fade")
            .forEach((el, i) => {
              if (entry.isIntersecting) {
                setTimeout(() => el.classList.add("visible"), i * 80);
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
      id="features"
      ref={ref}
      className="py-24 px-4 bg-[#12372A]/4"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="scroll-fade flex justify-center mb-4">
          <span className="text-[#12372A]/50 text-xs font-bold uppercase tracking-[0.2em]">
            Features
          </span>
        </div>
        <h2
          id="features-heading"
          className="scroll-fade font-bricolage font-extrabold text-[#12372A] text-3xl sm:text-4xl lg:text-5xl text-center leading-tight tracking-tight mb-4"
        >
          Everything you need to take back control.
        </h2>
        <p className="scroll-fade text-center text-[#12372A]/60 text-base max-w-lg mx-auto mb-16 font-inter">
          Built specifically for the subscriptions designed to stay invisible.
        </p>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon, title, description, accent }) => (
            <article
              key={title}
              className="scroll-fade rounded-3xl bg-white p-6 border border-[#12372A]/8 shadow-[0_4px_24px_-6px_rgba(18,55,42,0.08)] hover:shadow-[0_8px_32px_-6px_rgba(18,55,42,0.14)] hover:-translate-y-1 transition-all duration-200 group"
              aria-label={title}
            >
              {/* Icon badge */}
              <div
                className={`inline-flex w-12 h-12 rounded-2xl items-center justify-center text-2xl mb-4 border ${accentMap[accent]}`}
                aria-hidden="true"
              >
                {icon}
              </div>

              <h3 className="font-bricolage font-bold text-[#12372A] text-base mb-2">
                {title}
              </h3>
              <p className="text-sm font-inter text-[#12372A]/60 leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
