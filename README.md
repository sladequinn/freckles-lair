# Freckles

A landing page for Freckles. Gothic cybersigilism, built around **Diary of a Wimpy bitch**, with doors to OnlyFans, Fansly, Instagram, TikTok, and Facebook. Adults only.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4317](http://127.0.0.1:4317).

The first screen asks for an 18+ confirmation. The answer is stored in a cookie named `freckles-age`.

Tap **Freckles** five times quickly to drop into [THE FREAKOFF: SHADOW WARS](https://github.com/sladequinn/thefreakoff), vendored in `freakoff/` and served at `/freakoff/`.

## Links

Outbound profiles live in `src/lib/links.ts`.

Fansly currently points at `https://fansly.com/bbmama4444` as a stand-in. Replace that href when the real Fansly page is ready.

## Deploy on Vercel, domain on Porkbun

This repo is already set to build the landing page and the Freakoff game together (`npm run build`).

1. Click **Publish** in this chat, or import the GitHub repo at [vercel.com/new](https://vercel.com/new). Use the defaults. The first deploy gives you a `*.vercel.app` URL.
2. In Vercel: the project → **Settings → Domains** → add `yourdomain.com` and `www.yourdomain.com`. Prefer the apex as the primary; let Vercel redirect `www` to it.
3. Copy the exact records Vercel shows on that domain card. If it only says “recommended,” use:

   | Type | Host | Answer |
   |---|---|---|
   | A | `@` (blank on Porkbun) | `76.76.21.21` |
   | CNAME | `www` | `cname.vercel-dns-0.com` |

4. In Porkbun: domain → **DNS**. Delete any parked A / CNAME / ALIAS that still points at Porkbun’s placeholder page. Add the two records above. Leave MX alone if you use Porkbun email.
5. Wait until Vercel’s domain status is **Valid**. SSL is automatic. Then `https://yourdomain.com` is the Freckles page and `/freakoff` is the game.

Do not put a CNAME on `@`. If Vercel later shows a different A target or CNAME host on the domain card, use those instead of the table.
