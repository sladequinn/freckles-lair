import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "THE FREAKOFF: SHADOW WARS",
  description: "A 2.5D arcade beat 'em up and versus fighter.",
}

export default function FreakoffPage() {
  return (
    <iframe
      title="THE FREAKOFF: SHADOW WARS"
      src="/freakoff/index.html"
      className="fixed inset-0 z-50 h-svh w-full border-0 bg-[#07060d]"
      allow="autoplay; fullscreen; gamepad"
    />
  )
}
