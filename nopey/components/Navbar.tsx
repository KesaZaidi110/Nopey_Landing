"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      aria-label="Main navigation"
    >
      <nav
        className={`w-full max-w-4xl transition-all duration-300 ${
          scrolled
            ? "bg-[#FFF4D6]/90 backdrop-blur-md shadow-[0_4px_24px_-6px_rgba(18,55,42,0.15)] border border-[#12372A]/10"
            : "bg-[#FFF4D6]/70 backdrop-blur-sm border border-[#12372A]/8"
        } rounded-full px-5 py-3 flex items-center justify-between`}
        role="navigation"
      >
        {/* Wordmark */}
        <a
          href="#"
          className="font-bricolage font-bold text-[#12372A] text-xl tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F560] rounded-full px-1"
          aria-label="Nopey — go to top"
        >
          Nopey
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="px-4 py-1.5 rounded-full text-sm font-inter font-medium text-[#12372A]/70 hover:text-[#12372A] hover:bg-[#12372A]/8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F560]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#waitlist-hero"
          className="hidden md:inline-flex items-center rounded-full bg-[#12372A] px-5 py-2 text-sm font-bricolage font-bold text-[#FFF4D6] hover:bg-[#0d2920] transition-colors shadow-[0_3px_0_#0a1f15] hover:shadow-[0_1px_0_#0a1f15] hover:translate-y-[2px] active:translate-y-[3px] active:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F560] focus-visible:ring-offset-2"
        >
          Join waitlist
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-full text-[#12372A] hover:bg-[#12372A]/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F560]"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect y="4" width="20" height="2" rx="1" fill="currentColor" />
              <rect y="9" width="20" height="2" rx="1" fill="currentColor" />
              <rect y="14" width="20" height="2" rx="1" fill="currentColor" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-[72px] left-4 right-4 bg-[#FFF4D6] border border-[#12372A]/15 rounded-3xl shadow-[0_8px_32px_-8px_rgba(18,55,42,0.2)] p-4 flex flex-col gap-2 md:hidden"
          role="menu"
        >
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              role="menuitem"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-2xl text-sm font-medium text-[#12372A] hover:bg-[#12372A]/8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F560]"
            >
              {label}
            </a>
          ))}
          <a
            href="#waitlist-hero"
            role="menuitem"
            onClick={() => setMenuOpen(false)}
            className="mt-1 text-center rounded-full bg-[#12372A] px-5 py-3 text-sm font-bricolage font-bold text-[#FFF4D6] hover:bg-[#0d2920] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F560]"
          >
            Join the waitlist
          </a>
        </div>
      )}
    </header>
  );
}
