"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Field } from "@/components/sigil"
import { portals } from "@/lib/links"
import { cn } from "@/lib/utils"

export type AgeState = "locked" | "open" | "refused"

function remember(value: "yes" | "no") {
  document.cookie = `freckles-age=${value}; Path=/; Max-Age=31536000; SameSite=Lax`
}

function Subtitle() {
  return (
    <p className="text-center font-blackletter text-[clamp(1.55rem,4.8vw,2.65rem)] leading-[1.05] text-balance text-bone">
      Diary of a Wimpy <span className="text-blood">bitch</span>
    </p>
  )
}

export function Landing({ initialAge }: { initialAge: AgeState }) {
  const [age, setAge] = useState<AgeState>(initialAge)

  function choose(value: "yes" | "no") {
    remember(value)
    setAge(value === "yes" ? "open" : "refused")
  }

  return (
    <div className="relative min-h-svh">
      <Field />
      <div className="grain pointer-events-none fixed inset-0 z-20" />
      <div className="vignette pointer-events-none fixed inset-0 z-20" />

      {age === "open" ? <Site /> : <Gate age={age} onChoose={choose} />}
    </div>
  )
}

function Gate({
  age,
  onChoose,
}: {
  age: Exclude<AgeState, "open">
  onChoose: (value: "yes" | "no") => void
}) {
  return (
    <div className="relative z-10 flex min-h-svh items-center justify-center px-6">
      <div className="sigil-copy-veil absolute top-1/2 left-1/2 -z-10 h-[560px] w-[min(94vw,640px)] -translate-x-1/2 -translate-y-1/2" />
      <div className="flex w-full max-w-md flex-col items-center text-center">
        <p className="font-mono text-[10px] tracking-[0.5em] text-blood">18+</p>
        <h1 className="sigil-wordmark mt-4 font-sigil text-[clamp(4.2rem,17vw,8.5rem)] leading-[0.72]">
          Freckles
        </h1>
        <div className="mt-4">
          <Subtitle />
        </div>
        {age === "refused" ? (
          <Button type="button" className="seal mt-8" onClick={() => onChoose("yes")}>
            I am 18
          </Button>
        ) : (
          <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
            <Button type="button" className="seal w-full" onClick={() => onChoose("yes")}>
              Enter
            </Button>
            <Button
              type="button"
              className="seal seal-ghost w-full"
              onClick={() => onChoose("no")}
            >
              Leave
            </Button>
            <noscript>
              <div className="mt-6 flex flex-col gap-2">
                {portals.map((portal) => (
                  <a
                    key={portal.key}
                    href={portal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-bone/30 px-4 py-3 font-mono text-[11px] tracking-[0.28em] text-bone uppercase"
                  >
                    {portal.label}
                  </a>
                ))}
              </div>
            </noscript>
          </div>
        )}
      </div>
    </div>
  )
}

function Site() {
  return (
    <main className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 py-16">
      <div className="sigil-copy-veil absolute top-1/2 left-1/2 -z-10 h-[620px] w-[min(94vw,700px)] -translate-x-1/2 -translate-y-1/2" />
      <h1 className="sigil-wordmark text-center font-sigil text-[clamp(4.4rem,18vw,10rem)] leading-[0.7]">
        Freckles
      </h1>
      <div className="mt-4 text-center">
        <Subtitle />
      </div>
      <nav className="mt-10 w-full max-w-sm">
        {portals.map((portal) => (
          <a
            key={portal.key}
            href={portal.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "flex h-14 w-full items-center justify-between rounded-none border-t border-bone/20 px-1 font-mono text-[12px] tracking-[0.34em] text-bone uppercase last:border-b hover:bg-transparent hover:text-blood",
            )}
          >
            {portal.label}
            <ArrowUpRight className="size-4" />
          </a>
        ))}
      </nav>
    </main>
  )
}
