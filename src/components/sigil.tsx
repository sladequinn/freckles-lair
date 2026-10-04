// The artwork is a vector trace of the supplied cybersigilism reference,
// mirrored across the spine so both halves match exactly. It lives at
// public/sigil.svg and is applied as a CSS mask so the lines can be lit
// by a slow-moving gradient without re-rendering any geometry.
export function Field() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="sigil-frame absolute top-1/2 left-1/2 h-[min(94svh,calc(100vw*1.72))] -translate-x-1/2 -translate-y-1/2">
        <div className="sigil-glow absolute inset-0" />
        <div className="sigil-ink absolute inset-0" />
        <div className="sigil-curtain absolute inset-x-0 -top-[12%] h-[124%]" />
      </div>
    </div>
  )
}
