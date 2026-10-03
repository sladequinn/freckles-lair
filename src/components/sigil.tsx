export function Field() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full text-bone/15" viewBox="0 0 1200 800" fill="none">
        <path d="M-40 140 H520" stroke="currentColor" strokeWidth="0.7" className="trace" />
        <path d="M760 640 H1260" stroke="currentColor" strokeWidth="0.7" className="trace" />
        <path d="M80 -20 L210 840" stroke="currentColor" strokeWidth="0.55" />
        <path d="M1040 -20 L900 840" stroke="currentColor" strokeWidth="0.55" />
        <path d="M180 90 C280 40 360 120 340 210" stroke="currentColor" strokeWidth="0.8" />
        <path d="M860 560 C980 500 1100 620 1040 720" stroke="currentColor" strokeWidth="0.8" />
        <path d="M70 620 L150 560 L120 690 Z" stroke="currentColor" strokeWidth="0.6" />
        <path d="M1080 150 L1140 210" stroke="currentColor" strokeWidth="0.7" />
        <path d="M1120 120 L1160 190" stroke="currentColor" strokeWidth="0.5" />
        <path d="M40 300 L90 300" stroke="currentColor" strokeWidth="0.7" />
        <path d="M48 276 L48 324" stroke="currentColor" strokeWidth="0.7" />
      </svg>

      <div className="absolute -top-24 -left-24 w-[420px] text-bone/25 md:w-[520px]">
        <div className="orbit">
          <svg viewBox="0 0 400 400" className="h-auto w-full" fill="none">
            <path d="M40 220 C90 80 250 40 340 130" stroke="currentColor" strokeWidth="0.8" />
            <path d="M300 40 L318 90" stroke="currentColor" strokeWidth="0.7" />
            <path d="M60 250 C140 300 200 280 240 220" stroke="currentColor" strokeWidth="0.6" className="trace" />
            <path d="M180 70 L196 108 L176 100 Z" stroke="currentColor" strokeWidth="0.6" />
            <circle cx="250" cy="180" r="46" stroke="currentColor" strokeWidth="0.45" />
          </svg>
        </div>
      </div>

      <div className="absolute -right-16 -bottom-20 w-[380px] text-bone/20 md:w-[480px]">
        <div className="orbit-reverse">
          <svg viewBox="0 0 400 400" className="h-auto w-full" fill="none">
            <path d="M40 160 C120 40 280 80 340 190" stroke="currentColor" strokeWidth="0.75" />
            <path d="M80 240 C160 320 260 300 320 220" stroke="currentColor" strokeWidth="0.55" className="trace" />
            <path d="M300 80 L330 130" stroke="currentColor" strokeWidth="0.7" />
            <path d="M90 300 L140 270" stroke="currentColor" strokeWidth="0.6" />
            <path d="M200 40 L206 78 L200 70 L194 78 Z" stroke="currentColor" strokeWidth="0.55" />
            <circle cx="150" cy="150" r="28" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}
