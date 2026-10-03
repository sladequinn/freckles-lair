import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Bodoni_Moda, Geist, Geist_Mono, New_Rocker, Pirata_One } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const gothic = New_Rocker({
  variable: "--font-gothic",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

const sigilDisplay = Pirata_One({
  variable: "--font-sigil-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Freckles — Diary of a Wimpy bitch",
  description:
    "The private page for Freckles. Diary of a Wimpy bitch. OnlyFans, Fansly, Instagram, TikTok, and Facebook. Adults only.",
  openGraph: {
    title: "Freckles — Diary of a Wimpy bitch",
    description: "Soft mouth. Locked pages. Adults only.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freckles — Diary of a Wimpy bitch",
    description: "Soft mouth. Locked pages. Adults only.",
  },
}

export const viewport: Viewport = {
  themeColor: "#070708",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bodoni.variable} ${gothic.variable} ${sigilDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip">{children}</body>
    </html>
  )
}
