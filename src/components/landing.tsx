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

function Y() {
  return (
    <span className="mr-[0.08em] inline-block translate-y-[0.04em] font-display text-[0.82em] leading-none font-medium tracking-[-0.04em] italic">
      y
    </span>
  )
}

function Subtitle() {
  return (
    <p className="font-blackletter text-[clamp(1.85rem,5.4vw,3rem)] leading-[1.05] text-bone">
      Diar<Y /> of a Wimp<Y />{" "}
      <span className="text-blood">bitch</span>
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
      <div className="pointer-events-none fixed inset-3 z-30 border border-bone/15 md:inset-4" />

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
      <div className="flex w-full max-w-md flex-col items-center text-center">
        <p className="font-mono text-[10px] tracking-[0.5em] text-blood">18+</p>
        <h1 className="chrome mt-4 font-display text-[clamp(3.4rem,14vw,7rem)] leading-[0.8] font-medium tracking-[-0.045em]">
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
      <h1 className="chrome text-center font-display text-[clamp(3.5rem,15vw,8.5rem)] leading-[0.78] font-medium tracking-[-0.045em]">
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
