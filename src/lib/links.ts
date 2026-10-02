export type Portal = {
  key: string
  href: string
  label: string
  note: string
  handle?: string
}

// Fansly is a stand-in on the OnlyFans handle until the real page exists.
export const portals: Portal[] = [
  {
    key: "onlyfans",
    href: "https://onlyfans.com/bbmama4444",
    label: "OnlyFans",
    handle: "@bbmama4444",
    note: "Where the diary actually opens",
  },
  {
    key: "fansly",
    href: "https://fansly.com/bbmama4444",
    label: "Fansly",
    handle: "@bbmama4444",
    note: "Spare key. Same girl.",
  },
  {
    key: "instagram",
    href: "https://www.instagram.com/bbymamalamma",
    label: "Instagram",
    handle: "@bbymamalamma",
    note: "The version with lipstick",
  },
  {
    key: "tiktok",
    href: "https://www.tiktok.com/@seductivesamantha",
    label: "TikTok",
    handle: "@seductivesamantha",
    note: "She moves",
  },
  {
    key: "facebook",
    href: "https://www.facebook.com/share/1BzaoWUBDY/",
    label: "Facebook",
    note: "The share she allows",
  },
]

export const onlyfans = portals[0]
export const fansly = portals[1]
