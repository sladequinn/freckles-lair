import { cn } from "@/lib/utils"

function round(value: number) {
  return Math.round(value * 100) / 100
}

const SPIKES = [0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
  const a = (deg * Math.PI) / 180
  const cos = Math.cos(a)
  const sin = Math.sin(a)
  const px = -sin
  const py = cos
  const r1 = 92
  const r2 = 162
  const w = 5
  const x1 = 200 + cos * r1
  const y1 = 200 + sin * r1
  const tipX = 200 + cos * r2
  const tipY = 200 + sin * r2
  return `M ${round(x1 + px * w)} ${round(y1 + py * w)} L ${round(tipX)} ${round(tipY)} L ${round(x1 - px * w)} ${round(y1 - py * w)} Z`
})

const TICKS = Array.from({ length: 60 }, (_, index) => {
  const a = (index / 60) * Math.PI * 2 - Math.PI / 2
  const major = index % 5 === 0
  const inner = major ? 168 : 174
  const outer = 184
  return {
    x1: round(200 + Math.cos(a) * inner),
    y1: round(200 + Math.sin(a) * inner),
    x2: round(200 + Math.cos(a) * outer),
    y2: round(200 + Math.sin(a) * outer),
    width: major ? 1.15 : 0.45,
  }
})

export function Sigil({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("text-bone", className)}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.4" />
      <circle cx="200" cy="200" r="184" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.45" />
      <circle
        cx="200"
        cy="200"
        r="112"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeDasharray="1.2 7"
      />
      {TICKS.map((tick) => (
        <line
          key={`${tick.x1}-${tick.y1}`}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          stroke="currentColor"
          strokeWidth={tick.width}
        />
      ))}
      {SPIKES.map((d) => (
        <path key={d} d={d} stroke="currentColor" strokeWidth="0.7" />
      ))}
      <path d="M200 118 L272 242 H128 Z" stroke="currentColor" strokeWidth="0.8" />
      <path d="M200 282 L272 158 H128 Z" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="200" cy="200" r="46" stroke="currentColor" strokeWidth="0.6" />
      <path
        d="M168 200 C168 184 182 174 200 174 C218 174 232 184 232 200 C232 216 218 226 200 226 C182 226 168 216 168 200 Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle cx="200" cy="200" r="7" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="200" cy="200" r="2.2" fill="currentColor" />
      <path d="M200 154 V174 M200 226 V246 M154 200 H174 M226 200 H246" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="200" cy="16" r="2" fill="currentColor" />
      <circle cx="200" cy="384" r="2" fill="currentColor" />
      <circle cx="16" cy="200" r="2" fill="currentColor" />
      <circle cx="384" cy="200" r="2" fill="currentColor" />
    </svg>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="11.5" stroke="currentColor" strokeWidth="0.8" />
      <path d="M16 1.5 V7.5 M16 24.5 V30.5 M1.5 16 H7.5 M24.5 16 H30.5" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="16" cy="16" r="1.7" fill="currentColor" />
    </svg>
  )
}

export function FreckleCluster({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 88 32" className={className} aria-hidden="true">
      <circle cx="6" cy="14" r="1.3" className="fill-bone" />
      <circle cx="20" cy="22" r="2.1" className="fill-blood" />
      <circle cx="34" cy="9" r="1" className="fill-bone" opacity="0.65" />
      <circle cx="49" cy="18" r="1.5" className="fill-bone" />
      <circle cx="64" cy="8" r="1" className="fill-bone" opacity="0.8" />
      <circle cx="78" cy="20" r="1.35" className="fill-blood" />
    </svg>
  )
}

export function Rule({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4 text-bone/45", className)} aria-hidden="true">
      <span className="h-px flex-1 bg-current" />
      <svg viewBox="0 0 24 24" className="size-2.5 shrink-0">
        <path d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z" fill="currentColor" />
      </svg>
      <span className="h-px flex-1 bg-current" />
    </div>
  )
}
