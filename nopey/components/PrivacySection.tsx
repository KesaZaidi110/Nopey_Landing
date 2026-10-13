const principles = [
  {
    icon: "🏠",
    title: "Processed locally by design",
    text: "Our goal is to process your statement in your browser session - not ship it to a server. We'll be transparent about exactly how this works at launch.",
  },
  {
    icon: "🗑️",
    title: "Delete anytime",
    text: "Any data associated with your session can be wiped on demand. You stay in control.",
  },
  {
    icon: "🚫",
    title: "Never sold, never shared",
    text: "Your financial data is not our product. We will not sell it, rent it, or share it with advertisers - period.",
  },
];

export default function PrivacySection() {
  return (
    <section
      id="privacy"
      className="py-24 px-4"
      aria-labelledby="privacy-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl bg-[#12372A] p-8 sm:p-12 overflow-hidden relative">

          {/* Background decoration */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#C8F560]/10 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"
            aria-hidden="true"
          />

          {/* Overline */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl" aria-hidden="true">🔒</span>
            <span className="text-[#C8F560] text-xs font-bold uppercase tracking-[0.2em]">
              Our design principles
            </span>
          </div>

          {/* Heading */}
          <h2
            id="privacy-heading"
            className="font-bricolage font-extrabold text-[#FFF4D6] text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-6 max-w-2xl"
          >
            Your bank statement isn&apos;t ours to keep.
          </h2>

          {/* Intro */}
          <p className="text-[#FFF4D6]/70 text-base leading-relaxed max-w-xl mb-10 font-inter">
            We designed Nopey around one belief: the most sensitive file you can
            share with an app is your bank statement. Here&apos;s how we think
            about protecting it.
          </p>

          {/* Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {principles.map(({ icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl bg-[#FFF4D6]/6 border border-[#FFF4D6]/10 p-5"
              >
                <span className="text-2xl mb-3 block" aria-hidden="true">
                  {icon}
                </span>
                <h3 className="font-bricolage font-bold text-[#FFF4D6] text-sm mb-2">
                  {title}
                </h3>
                <p className="text-[#FFF4D6]/60 text-xs font-inter leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Fine print */}
          <p className="mt-8 text-[#FFF4D6]/40 text-xs font-inter leading-relaxed max-w-lg">
            These are our design intentions as of this early concept stage. We&apos;ll
            publish a plain-language privacy policy before any data is collected.
            Nothing here is a legal guarantee - just our honest commitments.
          </p>
        </div>
      </div>
    </section>
  );
}
