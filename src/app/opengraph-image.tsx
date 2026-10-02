import { ImageResponse } from "next/og"

export const alt = "Freckles — Diary of a Wimpy bitch"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#070708",
          color: "#efeae2",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            color: "#e11d48",
            fontFamily: "Georgia, serif",
          }}
        >
          18+
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 132,
            letterSpacing: -4,
            fontFamily: "Georgia, serif",
            lineHeight: 0.85,
          }}
        >
          FRECKLES
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontSize: 42,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
          }}
        >
          Diary of a Wimpy bitch
        </div>
      </div>
    ),
    { ...size },
  )
}
