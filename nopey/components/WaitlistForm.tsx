"use client";

import { useState, useCallback, useRef } from "react";
import { WAITLIST_URL } from "@/lib/constants";

interface WaitlistFormProps {
  id?: string;
  size?: "default" | "large";
  /** "light" = cream background (hero), "dark" = forest-green background (final CTA) */
  variant?: "light" | "dark";
}

export default function WaitlistForm({
  id = "waitlist-form",
  size = "default",
  variant = "light",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const honeypotRef = useRef<HTMLInputElement>(null);

  const validate = useCallback((value: string) => {
    if (!value) return "Please enter your email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Please enter a valid email address.";
    return "";
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot — bot filled it: silently pretend success
    if (honeypotRef.current?.value) {
      setSuccess(true);
      return;
    }

    const err = validate(email);
    if (err) {
      setError(err);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const data = new FormData();
      data.append("email", email);
      if (price) data.append("price", price);
      data.append("_subject", `Nopey Waitlist Signup: ${email}`);
      data.append(
        "message",
        price ? `Willing to pay: $${price}/month` : "Joined Nopey waitlist"
      );

      const res = await fetch(WAITLIST_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const json = await res.json().catch(() => ({}));
        const msg =
          (json as { error?: string }).error ||
          "Something went wrong. Please try again.";
        setError(msg);
      }
    } catch {
      setError("Could not reach the server. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const isLarge = size === "large";
  const isDark = variant === "dark";

  /* ── Success ─────────────────────────────────────────────────────────── */
  if (success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`flex flex-col items-center justify-center gap-3 rounded-3xl px-8 text-center ${
          isDark ? "bg-[#FFF4D6]/10 border border-[#FFF4D6]/20" : "bg-[#12372A]"
        } ${isLarge ? "py-10" : "py-8"}`}
      >
        <span className="text-4xl" aria-hidden="true">🎉</span>
        <p className={`font-bricolage font-bold text-[#C8F560] ${isLarge ? "text-3xl" : "text-2xl"}`}>
          You&apos;re on the list!
        </p>
        <p className={`text-sm max-w-xs ${isDark ? "text-[#FFF4D6]/70" : "text-[#FFF4D6]/80"}`}>
          We&apos;ll be in touch as soon as Nopey is ready.
        </p>
      </div>
    );
  }

  /* ── Form ────────────────────────────────────────────────────────────── */
  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      action={WAITLIST_URL}
      method="POST"
      aria-label="Join the Nopey waitlist"
      noValidate
      className="flex flex-col gap-3 w-full"
    >
      {/* Honeypot — hidden from real users with display:none so autofill ignores it */}
      <input
        ref={honeypotRef}
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="new-password"
        aria-hidden="true"
        style={{ display: "none" }}
      />
      <input
        type="hidden"
        name="_subject"
        value="New Nopey Waitlist Signup!"
      />

      {/* ── Row 1: email + button ─────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        {/* Email field */}
        <div className="flex-1 min-w-0 flex flex-col gap-1">
          <label htmlFor={`${id}-email`} className="sr-only">
            Email address
          </label>
          <input
            id={`${id}-email`}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            className={[
              "w-full rounded-full border-2 bg-white px-5 font-inter text-[#12372A] placeholder:text-[#12372A]/40",
              "focus:outline-none focus:ring-2 focus:ring-[#C8F560] focus:ring-offset-2 transition-shadow",
              isDark ? "focus:ring-offset-[#12372A]" : "focus:ring-offset-[#FFF4D6]",
              isLarge ? "h-14 text-base" : "h-12 text-sm",
              error ? "border-[#FF6B4A]" : "border-[#12372A]",
            ].join(" ")}
          />
          {error && (
            <p
              id={`${id}-error`}
              role="alert"
              className="text-xs text-[#FF6B4A] font-medium pl-4"
            >
              {error}
            </p>
          )}
        </div>

        {/* Submit button — fixed width so it never shrinks or stretches oddly */}
        <button
          type="submit"
          disabled={loading}
          className={[
            "shrink-0 rounded-full bg-[#12372A] font-bricolage font-bold text-[#FFF4D6]",
            "transition-all duration-200",
            "hover:bg-[#0d2920] hover:scale-[1.02]",
            "active:scale-[0.98] active:shadow-none active:translate-y-[2px]",
            "focus:outline-none focus:ring-2 focus:ring-[#C8F560] focus:ring-offset-2",
            isDark ? "focus:ring-offset-[#12372A] shadow-[0_4px_0_#060f08]" : "focus:ring-offset-[#FFF4D6] shadow-[0_4px_0_#0a1f15]",
            "hover:shadow-[0_2px_0_#0a1f15]",
            "disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100",
            isLarge ? "h-14 px-8 text-base w-full sm:w-auto" : "h-12 px-7 text-sm w-full sm:w-auto",
          ].join(" ")}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Joining…
            </span>
          ) : (
            "Join the waitlist"
          )}
        </button>
      </div>

      {/* ── Row 2: optional price dropdown ───────────────────────────── */}
      <div className="flex flex-col xs:flex-row items-start xs:items-center gap-1.5 xs:gap-3 pl-1">
        <label
          htmlFor={`${id}-price`}
          className={`text-xs font-medium whitespace-nowrap shrink-0 ${
            isDark ? "text-[#FFF4D6]/50" : "text-[#12372A]/55"
          }`}
        >
          What would you pay/mo?
        </label>
        <select
          id={`${id}-price`}
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={[
            "rounded-full border px-4 py-1.5 text-xs font-inter",
            "focus:outline-none focus:ring-2 focus:ring-[#C8F560] focus:ring-offset-1",
            isDark
              ? "bg-[#FFF4D6]/10 border-[#FFF4D6]/20 text-[#FFF4D6] focus:ring-offset-[#12372A]"
              : "bg-white/70 border-[#12372A]/20 text-[#12372A] focus:ring-offset-[#FFF4D6]",
          ].join(" ")}
        >
          <option value="">Select one (optional)</option>
          <option value="5">$5 / month</option>
          <option value="8">$8 / month</option>
          <option value="12+">$12+ / month</option>
        </select>
      </div>
    </form>
  );
}
