import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="py-24 px-4 bg-[#12372A]"
      aria-labelledby="final-cta-heading"
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* Lime accent blob */}
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-96 h-40 bg-[#C8F560]/15 blur-3xl rounded-full" />
          </div>

          {/* Overline */}
          <div className="flex justify-center mb-6">
            <span className="rounded-full bg-[#C8F560]/20 border border-[#C8F560]/30 px-4 py-1.5 text-xs font-bold text-[#C8F560] uppercase tracking-[0.15em]">
              Join the waitlist
            </span>
          </div>

          {/* Headline */}
          <h2
            id="final-cta-heading"
            className="font-bricolage font-extrabold text-[#FFF4D6] text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-6"
          >
            Ready to say nope?
          </h2>

          {/* Subtext */}
          <p className="text-[#FFF4D6]/65 text-base sm:text-lg font-inter leading-relaxed mb-10 max-w-lg mx-auto">
            We&apos;re building Nopey and want you in the room when it launches.
            Join the waitlist. It&apos;s free, and you&apos;ll be first.
          </p>

          {/* Form — inverted theme */}
          <div className="max-w-lg mx-auto" id="waitlist-final">
          <WaitlistForm id="final-waitlist" size="large" variant="dark" />
          </div>

          {/* Trust line */}
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-[#FFF4D6]/45 font-inter">
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 1.5L2 4v4c0 3.3 2.5 6.4 6 7 3.5-.6 6-3.7 6-7V4L8 1.5z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 8l1.5 1.5 3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Free to join. We never sell your data.
          </p>
        </div>
      </div>
    </section>
  );
}
