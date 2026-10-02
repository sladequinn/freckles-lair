"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { FreckleCluster, Mark, Rule, Sigil } from "@/components/sigil"
import { fansly, onlyfans, portals } from "@/lib/links"
import { cn } from "@/lib/utils"

export type AgeState = "locked" | "open" | "refused"

const ticker =
  "Freckles  /  Diary of a Wimpy bitch  /  OnlyFans  /  Fansly  /  Come closer  /  "

function remember(value: "yes" | "no") {
  document.cookie = `freckles-age=${value}; Path=/; Max-Age=31536000; SameSite=Lax`
}

function SealLink({
  href,
  children,
  ghost = false,
  className,
}: {
  href: string
  children: React.ReactNode
  ghost?: boolean
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ variant: ghost ? "outline" : "default", size: "lg" }),
        "seal",
        ghost && "seal-ghost",
        className,
      )}
    >
      {children}
    </a>
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
      <div className="grain pointer-events-none fixed inset-0 z-20" />
      <div className="vignette pointer-events-none fixed inset-0 z-20" />
      <div className="pointer-events-none fixed inset-2 z-30 border border-bone/20 md:inset-4" />

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
  const refused = age === "refused"

  return (
    <div className="relative z-10 flex min-h-svh items-center justify-center px-6 py-16">
        <div className="pointer-events-none absolute left-1/2 top-1/2 w-[min(74vw,520px)] -translate-x-1/2 -translate-y-1/2 text-bone/25">
        <Sigil className="spin-slow h-auto w-full" />
      </div>

      <div className="copy-veil relative z-10 mx-auto flex w-full max-w-lg flex-col items-center text-center">
        <p className="font-mono text-[11px] tracking-[0.55em] text-blood">18+</p>
        <h1 className="chrome mt-5 font-display text-[clamp(3.5rem,12vw,6.5rem)] leading-[0.8] font-medium tracking-[-0.04em]">
          Freckles
        </h1>

        {refused ? (
          <>
            <p className="mt-8 font-serif text-3xl italic leading-tight text-bone md:text-4xl">
              The diary stays shut.
            </p>
            <p className="mt-4 max-w-sm font-serif text-lg leading-relaxed text-ash">
              Come back when you are old enough to read it. If you tapped the wrong door, you can still come in.
            </p>
            <Button
              type="button"
              className="seal mt-8"
              onClick={() => onChoose("yes")}
            >
              I am 18 or older
            </Button>
          </>
        ) : (
          <>
            <FreckleCluster className="mt-6 h-7 w-24" />
            <p className="font-blackletter text-[clamp(1.8rem,5vw,2.7rem)] leading-[1.15] text-bone">
              Diary of a Wimpy <span className="text-blood">bitch</span>
            </p>
            <p className="mt-6 max-w-sm font-serif text-lg leading-relaxed text-ash md:text-xl">
              This door opens onto adult profiles. If you are eighteen or older, come in. If you are not, leave the diary shut.
            </p>
            <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
              <Button type="button" className="seal w-full" onClick={() => onChoose("yes")}>
                I am 18 or older
              </Button>
              <Button
                type="button"
                className="seal seal-ghost w-full"
                onClick={() => onChoose("no")}
              >
                Leave
              </Button>
            </div>
            <noscript>
              <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 text-left">
                <p className="text-center font-serif text-base text-ash italic">
                  JavaScript is off. The doors are still here. Adults only.
                </p>
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
          </>
        )}
      </div>
    </div>
  )
}

function Site() {
  return (
    <div className="relative z-10 pb-24 md:pb-0">
      <header className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 pt-6 md:flex-row md:items-center md:justify-between md:px-10 md:pt-8">
        <a href="#top" className="flex items-center gap-2.5 text-bone">
          <Mark className="size-7" />
          <span className="font-mono text-[11px] tracking-[0.46em]">FRECKLES</span>
        </a>
        <nav className="flex max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[10px] tracking-[0.22em] text-ash uppercase md:justify-end md:gap-x-5 md:tracking-[0.28em]">
          {portals.map((portal) => (
            <a
              key={portal.key}
              href={portal.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 transition-colors hover:text-bone"
            >
              {portal.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="mx-2 mt-5 overflow-hidden border-y border-bone/15 md:mx-4">
        <div className="ticker font-mono text-[10px] tracking-[0.38em] text-ash uppercase">
          <span className="px-3 py-3 whitespace-nowrap">{ticker}</span>
          <span className="px-3 py-3 whitespace-nowrap" aria-hidden="true">
            {ticker}
          </span>
        </div>
      </div>

      <main id="top">
        <section className="relative mx-auto flex min-h-[calc(100svh-7.5rem)] max-w-6xl flex-col items-center justify-center px-5 py-16 text-center md:px-10 md:py-20">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-[min(72vw,560px)] text-bone/25">
              <Sigil className="spin-slow h-auto w-full" />
            </div>
          </div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-[42%] rounded-full bg-blood/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            <p className="font-mono text-[10px] tracking-[0.48em] text-ash uppercase">
              Private record <span className="text-blood">·</span> Adults only
            </p>
            <h1 className="chrome mt-5 font-display text-[clamp(2.75rem,14.2vw,10.75rem)] leading-[0.78] font-medium tracking-[-0.045em]">
              Freckles
            </h1>
            <FreckleCluster className="mt-5 h-7 w-24 md:mt-7" />
            <p className="max-w-[12em] font-blackletter text-[clamp(1.85rem,5.4vw,3.7rem)] leading-[1.12] text-balance text-bone">
              Diary of a Wimpy <span className="text-blood">bitch</span>
            </p>
            <Rule className="mt-7 w-full max-w-xs" />
            <p className="mt-6 max-w-md font-serif text-xl leading-relaxed text-bone/85 italic md:text-2xl">
              Soft mouth. Locked pages. Come closer.
            </p>
            <div className="mt-9 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <SealLink href={onlyfans.href} className="w-full sm:w-auto">
                OnlyFans
              </SealLink>
              <SealLink href={fansly.href} ghost className="w-full sm:w-auto">
                Fansly
              </SealLink>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[10px] tracking-[0.28em] text-ash uppercase">
              {portals.slice(2).map((portal) => (
                <a
                  key={portal.key}
                  href={portal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-bone"
                >
                  {portal.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="diary"
          className="mx-auto grid max-w-6xl gap-10 border-t border-bone/15 px-5 py-20 md:grid-cols-[0.85fr_1.15fr] md:px-10 md:py-28"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.42em] text-ash uppercase">
              Entry 07 — after midnight
            </p>
            <p className="mt-5 max-w-[7em] font-blackletter text-5xl leading-[1.05] text-balance text-bone md:text-7xl">
              she writes it down
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.95] font-medium text-balance text-bone italic">
              Diary of a Wimpy bitch
            </h2>
            <blockquote className="mt-8 font-serif text-2xl leading-snug text-bone italic md:text-3xl">
              “I call myself a wimpy bitch so the bold part can sneak up on you.”
            </blockquote>
            <div className="mt-8 max-w-xl space-y-5 font-serif text-xl leading-relaxed text-bone/80">
              <p>
                People see the freckles and decide she is sweet. She lets them. The cover is a joke. The pages are not.
              </p>
              <p>
                Instagram, TikTok, and Facebook get the version with lipstick. OnlyFans gets the version after it comes off. Fansly is the spare key to the same room.
              </p>
              <p>
                I was good until I wasn’t. Then I
                <span className="mx-2 inline-block h-[0.72em] w-28 translate-y-[1px] bg-bone align-middle" />
                and wrote it down before I could take it back.
              </p>
            </div>
            <a
              href={onlyfans.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.32em] text-bone uppercase transition-colors hover:text-blood"
            >
              Read the rest
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>

        <section id="doors" className="mx-auto max-w-6xl px-5 py-8 md:px-10 md:py-12">
          <div className="mb-4 flex items-end justify-between gap-8 md:mb-6">
            <div>
              <p className="font-mono text-[10px] tracking-[0.42em] text-ash uppercase">The doors</p>
              <h2 className="mt-3 font-display text-4xl leading-none tracking-tight md:text-6xl">
                Five ways in.
              </h2>
            </div>
            <p className="hidden max-w-xs text-right font-serif text-xl text-ash italic md:block">
              Pick a key. The diary does not open itself.
            </p>
          </div>
          <div className="-mx-5 md:-mx-10">
            {portals.map((portal, index) => (
              <a
                key={portal.key}
                href={portal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border-t border-bone/15 px-5 py-6 transition-colors duration-300 last:border-b hover:bg-bone hover:text-void md:gap-8 md:px-10 md:py-8"
              >
                <span className="w-8 shrink-0 font-mono text-[11px] tracking-[0.24em] text-ash group-hover:text-void/55">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[clamp(2.1rem,5vw,3.6rem)] leading-none tracking-tight">
                    {portal.label}
                  </span>
                  <span className="mt-2 block font-serif text-lg text-ash italic group-hover:text-void/70">
                    {portal.note}
                    {portal.handle ? (
                      <span className="mt-1 block font-mono text-[10px] tracking-[0.22em] not-italic sm:mt-0 sm:ml-3 sm:inline">
                        {portal.handle}
                      </span>
                    ) : null}
                  </span>
                </span>
                <ArrowUpRight className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-12 font-mono text-[10px] tracking-[0.28em] text-ash uppercase md:flex-row md:items-end md:justify-between md:px-10">
        <p>Freckles · Diary of a Wimpy bitch</p>
        <p className="max-w-xs normal-case tracking-normal font-serif text-sm text-ash italic md:text-right">
          You must be 18 or older to follow these links.
        </p>
      </footer>

      <div className="fixed inset-x-2 bottom-2 z-40 border border-bone/25 bg-void/90 p-2 backdrop-blur-md md:hidden">
        <SealLink href={onlyfans.href} className="w-full">
          Enter OnlyFans
        </SealLink>
      </div>
    </div>
  )
}
