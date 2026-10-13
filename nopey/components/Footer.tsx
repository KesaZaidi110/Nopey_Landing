const CURRENT_YEAR = 2025;

export default function Footer() {
  const year = CURRENT_YEAR;

  return (
    <footer className="bg-[#12372A] border-t border-[#FFF4D6]/8 px-4 py-10" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Wordmark */}
          <div className="flex flex-col gap-1">
            <span className="font-bricolage font-bold text-[#FFF4D6] text-lg">
              Nopey
            </span>
            <span className="text-[#FFF4D6]/40 text-xs font-inter">
              An early concept. Not yet live.
            </span>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2" role="list">
              {[
                { label: "How it works", href: "#how-it-works" },
                { label: "Features", href: "#features" },
                { label: "FAQ", href: "#faq" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs font-inter text-[#FFF4D6]/50 hover:text-[#FFF4D6]/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F560] rounded"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-[#FFF4D6]/8" />

        {/* Disclaimers */}
        <div className="flex flex-col gap-2">
          <p className="text-[#FFF4D6]/35 text-xs font-inter leading-relaxed max-w-3xl">
            <strong className="text-[#FFF4D6]/50 font-semibold">Not financial advice.</strong>{" "}
            Nopey is a subscription tracking tool, not a financial advisor. Nothing
            on this site constitutes investment, legal, or financial advice of any kind.
          </p>
          <p className="text-[#FFF4D6]/35 text-xs font-inter leading-relaxed max-w-3xl">
            <strong className="text-[#FFF4D6]/50 font-semibold">Early concept.</strong>{" "}
            This is a pre-launch product. Joining the waitlist is not a purchase and
            does not create any contractual obligation between you and Nopey. Features
            and pricing are subject to change.
          </p>
          <p className="text-[#FFF4D6]/25 text-xs font-inter mt-2">
            © {year} Nopey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
