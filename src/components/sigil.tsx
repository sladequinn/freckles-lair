import { cn } from "@/lib/utils"

function r(v: number) {
  return Math.round(v * 10) / 10
}

function horn(x: number, y: number, deg: number, len: number, kink: number, width: number) {
  const steps = 28
  const spine: { x: number; y: number }[] = [{ x, y }]
  let cx = x
  let cy = y
  for (let i = 1; i <= steps; i++) {
    const t = i / steps
    const hk = Math.sin(t * Math.PI) * kink
    const a = ((deg + hk) * Math.PI) / 180
    cx += Math.cos(a) * (len / steps)
    cy += Math.sin(a) * (len / steps)
    spine.push({ x: cx, y: cy })
  }

  const left: string[] = []
  const right: string[] = []
  for (let i = 0; i < spine.length; i++) {
    const t = i / (spine.length - 1)
    const p0 = spine[Math.max(0, i - 1)]
    const p1 = spine[Math.min(spine.length - 1, i + 1)]
    const dx = p1.x - p0.x
    const dy = p1.y - p0.y
    const length = Math.hypot(dx, dy) || 1
    const nx = -dy / length
    const ny = dx / length
    let profile: number
    if (t < 0.12) profile = 0.35 + 0.65 * (t / 0.12)
    else if (t < 0.28) profile = 1 - 0.62 * ((t - 0.12) / 0.16)
    else if (t < 0.46) profile = 0.38 + 0.85 * ((t - 0.28) / 0.18)
    else profile = 1.23 * (1 - (t - 0.46) / 0.54) ** 1.35
    const w = Math.max(0, (width * profile) / 2)
    left.push(`${r(spine[i].x + nx * w)} ${r(spine[i].y + ny * w)}`)
    right.push(`${r(spine[i].x - nx * w * 0.82)} ${r(spine[i].y - ny * w * 0.82)}`)
  }
  right.reverse()
  return `M ${left.join(" L ")} L ${right.join(" L ")} Z`
}

function hornSpine(x: number, y: number, deg: number, len: number, kink: number) {
  const steps = 18
  let cx = x
  let cy = y
  const pts = [`${r(cx)} ${r(cy)}`]
  for (let i = 1; i <= steps; i++) {
    const t = i / steps
    const hk = Math.sin(t * Math.PI) * kink
    const a = ((deg + hk) * Math.PI) / 180
    cx += Math.cos(a) * (len / steps)
    cy += Math.sin(a) * (len / steps)
    pts.push(`${r(cx)} ${r(cy)}`)
  }
  return `M ${pts.join(" L ")}`
}

function star4(cx: number, cy: number, radius: number) {
  const pts: string[] = []
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4 - Math.PI / 2
    const rr = i % 2 === 0 ? radius : radius * 0.3
    pts.push(`${r(cx + Math.cos(a) * rr)} ${r(cy + Math.sin(a) * rr)}`)
  }
  return `M ${pts.join(" L ")} Z`
}

function thorn(x: number, y: number, deg: number, len: number, w: number) {
  const a = (deg * Math.PI) / 180
  const px = Math.cos(a)
  const py = Math.sin(a)
  const nx = -py
  const ny = px
  return `M ${r(x + nx * w)} ${r(y + ny * w)} L ${r(x + px * len)} ${r(y + py * len)} L ${r(x - nx * w)} ${r(y - ny * w)} Z`
}

function Marks({ fills, lines }: { fills: string[]; lines: string[] }) {
  return (
    <>
      <g fill="currentColor">
        {fills.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="none" stroke="#e11d48" strokeWidth="1.35" className="sigil-comet">
        {lines.map((d) => (
          <path key={`live-${d}`} d={d} />
        ))}
      </g>
    </>
  )
}

function cornerArt() {
  return {
    fills: [
      horn(18, 72, -8, 300, 24, 20),
      horn(18, 108, 7, 210, -18, 12),
      horn(18, 142, 16, 132, 12, 8),
      horn(72, 18, 98, 300, -24, 20),
      horn(108, 18, 83, 210, 18, 12),
      horn(142, 18, 74, 132, -12, 8),
      horn(48, 48, 42, 250, 16, 14),
      horn(70, 64, 28, 156, -20, 9),
      horn(64, 70, 58, 156, 20, 9),
      thorn(176, 30, -72, 42, 5.5),
      thorn(248, 54, -42, 34, 4.5),
      thorn(30, 176, 162, 42, 5.5),
      thorn(54, 248, 132, 34, 4.5),
      thorn(138, 138, 45, 48, 5.5),
      star4(40, 40, 16),
      star4(136, 38, 10),
      star4(38, 136, 10),
      star4(196, 196, 9),
      star4(268, 78, 7),
      star4(78, 268, 7),
    ],
    lines: [
      hornSpine(18, 72, -8, 300, 24),
      hornSpine(72, 18, 98, 300, -24),
      hornSpine(48, 48, 42, 250, 16),
    ],
  }
}

function sideArt() {
  return {
    fills: [
      horn(28, 20, 92, 220, 18, 15),
      horn(58, 36, 78, 160, -16, 9),
      horn(18, 80, 104, 120, 12, 7),
      thorn(8, 70, 180, 26, 4),
      thorn(8, 150, 168, 22, 3.5),
      star4(30, 48, 9),
      star4(46, 160, 6),
    ],
    lines: [hornSpine(28, 20, 92, 220, 18)],
  }
}

const corner = cornerArt()
const side = sideArt()

export function Field() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden text-white" aria-hidden="true">
      <Corner className="top-0 left-0" />
      <Corner className="top-0 right-0 -scale-x-100" />
      <Corner className="bottom-0 left-0 -scale-y-100" />
      <Corner className="right-0 bottom-0 [transform:scale(-1,-1)]" />
      <svg viewBox="0 0 120 280" className="absolute top-1/2 left-0 hidden h-[42vh] w-[92px] -translate-y-1/2 lg:block">
        <Marks fills={side.fills} lines={side.lines} />
      </svg>
      <svg viewBox="0 0 120 280" className="absolute top-1/2 right-0 hidden h-[42vh] w-[92px] -translate-y-1/2 -scale-x-100 lg:block">
        <Marks fills={side.fills} lines={side.lines} />
      </svg>
    </div>
  )
}

function Corner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={cn("absolute h-auto w-[62vw] max-w-[300px] md:w-[340px] md:max-w-none lg:w-[420px]", className)}>
      <Marks fills={corner.fills} lines={corner.lines} />
    </svg>
  )
}
