import WaitlistForm from "./WaitlistForm";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-[100px] md:pt-[112px] lg:pt-[120px] pb-20 px-4 flex items-center"
      aria-labelledby="hero-headline"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* ── Left: copy + form ── */}
        <div className="flex flex-col gap-6">

          {/* Overline label */}
          <div className="inline-flex">
            <span className="rounded-full bg-[#12372A] px-4 py-1.5 text-xs font-bold text-[#C8F560] uppercase tracking-[0.15em]">
              For the forgetful
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-headline"
            className="font-bricolage font-extrabold text-[#12372A] text-4xl sm:text-5xl xl:text-7xl leading-[1.05] tracking-tight"
          >
            Say nope to subscriptions you forgot you had.
          </h1>

          {/* Subheadline */}
          <p className="text-[#12372A]/70 text-base sm:text-lg leading-relaxed max-w-lg font-inter">
            Upload a bank statement. Nopey finds every recurring charge, shows
            what it really costs per year, and tells you what to cancel.
          </p>

          {/* Form */}
          <div id="waitlist-hero" className="w-full max-w-lg">
            <WaitlistForm id="hero-waitlist" />
          </div>

          {/* Trust line */}
          <p className="flex items-center gap-2 text-sm text-[#12372A]/55 font-inter">
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

          {/* Social proof chips (no fake numbers) */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["No credit card", "Early access"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#12372A]/20 bg-white/60 px-3 py-1 text-xs font-medium text-[#12372A]/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: phone mockup ── */}
        <div className="relative flex justify-center lg:justify-end items-center pt-16 pb-10 lg:py-0 overflow-visible">
          {/* Background blob */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#C8F560]/30 blur-3xl" />
          </div>

          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
