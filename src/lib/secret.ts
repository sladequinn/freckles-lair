import { useRef } from "react"
import { freakoff } from "@/lib/links"

const NEED = 5
const WINDOW_MS = 1600

export function useFrecklesDoor() {
  const stamps = useRef<number[]>([])

  return function knock() {
    const now = performance.now()
    stamps.current = stamps.current.filter((time) => now - time < WINDOW_MS)
    stamps.current.push(now)
    if (stamps.current.length < NEED) return
    stamps.current = []
    window.location.assign(freakoff)
  }
}
