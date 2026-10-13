export default function PhoneMockup() {
  return (
    <div className="relative w-full flex items-center justify-center pt-10 pb-4" aria-label="Phone app mockup showing Nopey's subscription alerts" role="img">

      {/* ── Floating orbit cards ── */}
      {/* Top-left rotating card */}
      <div
        className="absolute top-0 -left-4 z-20 animate-float-delayed"
        style={{ "--rot": "-6deg" } as React.CSSProperties}
        aria-hidden="true"
      >
        <div className="bg-white rounded-2xl px-4 py-3 shadow-[0_6px_0_#12372A] border border-[#12372A]/10 w-52 rotate-[-6deg]">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#FF6B4A] shrink-0" />
            <span className="text-[10px] font-bold text-[#FF6B4A] uppercase tracking-widest">Price hike</span>
          </div>
          <p className="text-xs font-semibold text-[#12372A] leading-snug">
            Streaming Plus raised its price by 35%
          </p>
        </div>
      </div>

      {/* Bottom-right rotating card */}
      <div
        className="absolute bottom-0 -right-6 z-20 animate-float-delayed-2"
        style={{ "--rot": "5deg" } as React.CSSProperties}
        aria-hidden="true"
      >
        <div className="bg-[#C8F560] rounded-2xl px-4 py-3 shadow-[0_6px_0_#12372A] border border-[#12372A]/10 w-56 rotate-[5deg]">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#12372A] shrink-0" />
            <span className="text-[10px] font-bold text-[#12372A] uppercase tracking-widest">Example</span>
          </div>
          <p className="text-xs font-semibold text-[#12372A] leading-snug">
            Total hiding in your statement: <strong>$1,240/yr</strong>
          </p>
        </div>
      </div>

      {/* ── Phone frame ── */}
      <div
        className="relative z-10 w-[240px] sm:w-[260px] animate-float"
        aria-hidden="true"
      >
        {/* Phone shell */}
        <div className="relative bg-[#12372A] rounded-[36px] p-2 shadow-[0_24px_60px_-12px_rgba(18,55,42,0.45)]">

          {/* Speaker notch */}
          <div className="flex justify-center mb-2">
            <div className="w-20 h-5 bg-black rounded-full flex items-center justify-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#12372A] border border-[#1a4a33]" />
              <div className="w-12 h-1.5 rounded-full bg-[#1a3d28]" />
            </div>
          </div>

          {/* Screen */}
          <div className="bg-[#F9F9F7] rounded-[28px] overflow-hidden">
            {/* Status bar */}
            <div className="bg-[#12372A] px-4 pt-2 pb-3">
              <div className="flex items-center justify-between">
                <span className="text-[#FFF4D6] text-[10px] font-bold">9:41</span>
                <span className="text-[#FFF4D6]/70 text-[10px]">●●● 📶 🔋</span>
              </div>
              <div className="mt-2 flex items-center gap-1.5">
                <div className="w-6 h-6 bg-[#C8F560] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-black text-[#12372A]">N</span>
                </div>
                <p className="text-[#FFF4D6] text-xs font-bold">Nopey</p>
              </div>
            </div>

            {/* Notification cards in the phone */}
            <div className="px-3 py-3 flex flex-col gap-2.5">
              <p className="text-[10px] font-bold text-[#12372A]/50 uppercase tracking-widest">
                Alerts for you
              </p>

              {/* Notification 1 */}
              <div className="notification-1 bg-white rounded-2xl p-3 shadow-sm border-l-4 border-[#FF6B4A]">
                <div className="flex items-start gap-2">
                  <span className="text-base leading-none mt-0.5">📈</span>
                  <div>
                    <p className="text-[10px] font-bold text-[#FF6B4A] uppercase tracking-wide mb-0.5">Price hike</p>
                    <p className="text-[11px] font-semibold text-[#12372A] leading-snug">
                      Streaming Plus raised its price by 35%
                    </p>
                  </div>
                </div>
              </div>

              {/* Notification 2 */}
              <div className="notification-2 bg-white rounded-2xl p-3 shadow-sm border-l-4 border-[#FF6B4A]">
                <div className="flex items-start gap-2">
                  <span className="text-base leading-none mt-0.5">⚠️</span>
                  <div>
                    <p className="text-[10px] font-bold text-[#FF6B4A] uppercase tracking-wide mb-0.5">Trial ending</p>
                    <p className="text-[11px] font-semibold text-[#12372A] leading-snug">
                      Free trial turns into $14.99/mo tomorrow
                    </p>
                  </div>
                </div>
              </div>

              {/* Notification 3 */}
              <div className="notification-3 bg-white rounded-2xl p-3 shadow-sm border-l-4 border-[#C8F560]">
                <div className="flex items-start gap-2">
                  <span className="text-base leading-none mt-0.5">🏋️</span>
                  <div>
                    <p className="text-[10px] font-bold text-[#12372A]/50 uppercase tracking-wide mb-0.5">Recurring</p>
                    <p className="text-[11px] font-semibold text-[#12372A] leading-snug">
                      Gym membership: 26 charges this year
                    </p>
                  </div>
                </div>
              </div>

              {/* Notification 4 — total */}
              <div className="notification-4 bg-[#12372A] rounded-2xl p-3">
                <p className="text-[10px] font-bold text-[#C8F560] uppercase tracking-wide mb-0.5">
                  Your yearly total
                </p>
                <p className="text-lg font-black text-white leading-tight">$1,240<span className="text-sm font-semibold text-white/70">/yr</span></p>
                <p className="text-[9px] text-white/50 mt-0.5">Example figure — your results will vary</p>
              </div>
            </div>

            {/* Bottom home bar */}
            <div className="flex justify-center pb-3 pt-1">
              <div className="w-20 h-1 bg-[#12372A]/20 rounded-full" />
            </div>
          </div>
        </div>

        {/* Phone shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#12372A]/15 blur-xl rounded-full" />
      </div>
    </div>
  );
}
