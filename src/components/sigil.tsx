import { cn } from "@/lib/utils"

function CornerMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 360" className={cn("h-auto w-full", className)} aria-hidden="true">
      <g fill="currentColor">
        <path d="M18 168 L18 34 L34 18 L168 18 L168 34 L34 34 L34 168 Z" />
        <path d="M18 78 L0 64 L18 58 Z" />
        <path d="M18 112 L0 112 L10 124 Z" />
        <path d="M18 148 L2 162 L22 156 Z" />
        <path d="M78 18 L64 0 L58 18 Z" />
        <path d="M112 18 L112 0 L124 10 Z" />
        <path d="M148 18 L162 2 L156 22 Z" />
        <path d="M52 188 C36 96 92 36 176 28 C150 52 96 78 78 150 C70 184 60 200 52 188 Z" />
        <path d="M86 214 C70 150 130 78 210 58 C188 86 140 112 118 176 C108 206 94 222 86 214 Z" />
        <path d="M128 236 C118 180 168 112 248 96 C226 124 180 146 158 200 C148 226 136 246 128 236 Z" />
        <path d="M168 250 C210 210 248 168 292 150 C270 176 230 196 196 230 C182 246 172 258 168 250 Z" />
        <path d="M96 96 L104 52 L128 96 L172 104 L128 112 L104 156 L96 112 L52 104 Z" />
        <path d="M188 48 L214 28 L206 56 Z" />
        <path d="M48 188 L28 214 L56 206 Z" />
        <path d="M210 86 L248 70 L236 104 Z" />
        <path d="M86 210 L70 248 L104 236 Z" />
        <path d="M176 176 L230 150 L242 172 L196 198 Z" />
        <path d="M228 188 L268 160 L280 184 L246 206 Z" />
        <path d="M160 228 L196 268 L176 276 L148 240 Z" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1.4" className="glint">
        <path d="M46 150 C28 78 78 28 156 42" />
        <path d="M78 196 L168 62" />
      </g>
    </svg>
  )
}

function SideMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 640" className={cn("h-full w-full", className)} aria-hidden="true">
      <g fill="currentColor">
        <path d="M28 16 H40 V624 H28 Z" />
        <path d="M40 78 C36 48 70 28 108 36 C86 48 62 62 52 90 C46 104 42 96 40 78 Z" />
        <path d="M40 168 C34 128 78 108 124 122 C100 136 70 148 58 180 C50 196 44 186 40 168 Z" />
        <path d="M40 268 C36 228 82 206 128 222 C104 236 72 250 58 282 C50 298 44 286 40 268 Z" />
        <path d="M40 368 C34 328 80 308 126 324 C102 338 70 352 56 384 C48 400 42 388 40 368 Z" />
        <path d="M40 470 C36 432 76 412 118 428 C96 442 68 454 56 486 C48 502 42 490 40 470 Z" />
        <path d="M40 560 C38 530 70 514 104 528 C86 540 64 550 54 574 C48 588 42 576 40 560 Z" />
        <path d="M18 150 L0 138 L18 166 Z" />
        <path d="M18 330 L0 318 L18 346 Z" />
        <path d="M18 510 L0 498 L18 526 Z" />
        <path d="M78 118 L86 90 L100 118 L128 126 L100 134 L86 162 L78 134 L50 126 Z" />
        <path d="M86 400 L94 372 L108 400 L136 408 L108 416 L94 444 L86 416 L58 408 Z" />
      </g>
    </svg>
  )
}

function Crest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 720 110" className={cn("h-auto w-full", className)} aria-hidden="true">
      <g fill="currentColor">
        <path d="M8 62 H250 V70 H8 Z" />
        <path d="M470 62 H712 V70 H470 Z" />
        <path d="M250 66 L300 28 L318 40 L286 70 Z" />
        <path d="M470 66 L420 28 L402 40 L434 70 Z" />
        <path d="M318 40 L360 8 L402 40 L360 52 Z" />
        <path d="M360 8 L368 28 L388 34 L368 40 L360 60 L352 40 L332 34 L352 28 Z" />
        <path d="M150 62 L162 36 L174 62 Z" />
        <path d="M546 62 L558 36 L570 62 Z" />
        <path d="M80 62 L88 42 L100 62 Z" />
        <path d="M620 62 L628 42 L640 62 Z" />
        <path d="M210 62 L224 40 L236 62 Z" />
        <path d="M484 62 L496 40 L508 62 Z" />
      </g>
    </svg>
  )
}

export function Field() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden text-bone/90" aria-hidden="true">
      <CornerMark className="absolute top-1 left-1 w-[46vw] max-w-[320px] md:top-2 md:left-2 md:w-[280px]" />
      <CornerMark className="absolute top-1 right-1 w-[46vw] max-w-[320px] -scale-x-100 md:top-2 md:right-2 md:w-[280px]" />
      <CornerMark className="absolute bottom-1 left-1 w-[46vw] max-w-[320px] -scale-y-100 md:bottom-2 md:left-2 md:w-[280px]" />
      <CornerMark className="absolute right-1 bottom-1 w-[46vw] max-w-[320px] [transform:scale(-1,-1)] md:right-2 md:bottom-2 md:w-[280px]" />
      <SideMark className="absolute top-1/2 left-1 hidden h-[58vh] w-[88px] -translate-y-1/2 lg:block" />
      <SideMark className="absolute top-1/2 right-1 hidden h-[58vh] w-[88px] -translate-y-1/2 -scale-x-100 lg:block" />
      <Crest className="absolute top-2 left-1/2 w-[min(86vw,640px)] -translate-x-1/2 md:top-4" />
      <Crest className="absolute bottom-2 left-1/2 w-[min(86vw,640px)] -translate-x-1/2 rotate-180 md:bottom-4" />
    </div>
  )
}
