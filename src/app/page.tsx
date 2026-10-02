import { cookies } from "next/headers"
import { Landing, type AgeState } from "@/components/landing"

export default async function Home() {
  const jar = await cookies()
  const value = jar.get("freckles-age")?.value
  const initialAge: AgeState =
    value === "yes" ? "open" : value === "no" ? "refused" : "locked"

  return <Landing initialAge={initialAge} />
}
