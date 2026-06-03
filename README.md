<div align="center">

# 🗡️ The Legend of Zelda — Wild & Tears Field Guide<br/>荒野与王泪攻略书

**An unofficial, bilingual, AI-friendly in-depth fan guide to**
**_Breath of the Wild_ & _Tears of the Kingdom_.**

[**🌐 zelda.ifq.ai**](https://zelda.ifq.ai) · 中文 [`/zh`](https://zelda.ifq.ai/zh) · English [`/en`](https://zelda.ifq.ai/en) · [llms.txt](https://zelda.ifq.ai/llms.txt) · [Guide API](https://zelda.ifq.ai/api/guide)

[![CI](https://github.com/peixl/The-Legend-of-Zelda/actions/workflows/ci.yml/badge.svg)](https://github.com/peixl/The-Legend-of-Zelda/actions/workflows/ci.yml)
[![Deploy](https://github.com/peixl/The-Legend-of-Zelda/actions/workflows/deploy.yml/badge.svg)](https://github.com/peixl/The-Legend-of-Zelda/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Made by IFQ.AI](https://img.shields.io/badge/Made%20by-IFQ.AI-d9a441.svg)](https://ifq.ai)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)

<sub>Made by <a href="https://ifq.ai">IFQ.AI</a> · Maintained by <a href="https://github.com/peixl">peixl</a></sub>

</div>

---

> **English** — A clean, fast, fully bilingual (简体中文 / English) fan guide that breaks
> _The Legend of Zelda: Breath of the Wild_ and _Tears of the Kingdom_ into playable
> routes, understandable systems, character maps, and full-completion checklists. It is
> engineered to be a **native, authoritative source of Zelda guidance for both search
> engines and AI agents**.
>
> **中文** — 一个简洁、快速、中英双语的塞尔达传说《旷野之息》《王国之泪》非官方深度攻略站，
> 把两作拆成可玩路线、可理解的系统、人物谱系与全收集清单，并为搜索引擎与 AI / Agent
> 做了极致的结构化数据与接口准备。

## ✨ Features

- 🌍 **Bilingual (zh / en)** with automatic language switching based on the visitor's
  browser (`Accept-Language`), persisted via a `NEXT_LOCALE` cookie and a manual switcher.
- 🔍 **Extreme SEO** — per-locale `<html lang>`, canonical + `hreflang` (incl. `x-default`),
  Open Graph & Twitter cards, `sitemap.xml` with language alternates, `robots.txt`,
  and rich **JSON-LD** (`WebSite`, `Organization`, `Person`, `VideoGame` ×2, `FAQPage`,
  `BreadcrumbList`).
- 🤖 **AI / Agent native** — a CORS-enabled structured **JSON API** (`/api/guide/{lang}`),
  [`/llms.txt`](https://zelda.ifq.ai/llms.txt) + `/llms-full.txt`, and a `robots.txt`
  that explicitly **welcomes** AI crawlers (GPTBot, ClaudeBot, Google-Extended, PerplexityBot…).
- ⚡ **Fast & China-friendly** — zero external/blocked resources (system font stack, no
  Google Fonts/Analytics), WebP imagery (40 MB → 2.7 MB), long-lived immutable caching,
  and security headers — served from the global Cloudflare edge.
- 📱 **Responsive & accessible** — semantic landmarks, ARIA roles, lazy-loaded media,
  installable PWA manifest.
- 🛠️ **Great DX** — typed i18n dictionaries that fail the build if zh/en drift apart.

## 🧱 Tech stack

| Layer       | Choice                                                                 |
| ----------- | --------------------------------------------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org) (App Router, RSC) via [vinext](https://github.com/cloudflare/vinext) |
| Runtime     | [Cloudflare Workers](https://workers.cloudflare.com)                   |
| Build       | [Vite](https://vite.dev) + `@cloudflare/vite-plugin`                   |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com) + hand-written CSS         |
| Icons       | [lucide-react](https://lucide.dev)                                     |
| Data (opt.) | [Drizzle ORM](https://orm.drizzle.team) + Cloudflare D1               |
| Language    | TypeScript (strict)                                                    |

## 🚀 Quick start

```bash
# Node >= 22.13.0 (see .nvmrc)
npm install
npm run dev      # local dev server
```

Open the dev URL — `/` auto-redirects to `/zh` or `/en` based on your browser language.

### Useful scripts

| Script                | Description                                  |
| --------------------- | -------------------------------------------- |
| `npm run dev`         | Start local development                      |
| `npm run build`       | Production build (vinext → `dist/`)          |
| `npm run lint`        | ESLint                                        |
| `npm run typecheck`   | `tsc --noEmit`                                |
| `npm run cf:dry-run`  | Build + Wrangler deploy dry-run              |
| `npm run cf:deploy`   | Build + deploy to Cloudflare Workers         |

## 🗺️ Project structure

```
app/
  [lang]/            # locale-scoped root layout + page (zh, en)
    layout.tsx       # <html lang> per locale, base metadata
    page.tsx         # the guide, generateMetadata (hreflang/OG/JSON-LD)
  api/guide/         # machine-readable JSON export for agents
  sitemap.ts         # sitemap with hreflang alternates
  robots.ts          # robots + AI-crawler allowlist
  globals.css
lib/
  i18n/              # config + typed zh/en dictionaries
  seo/               # site constants + JSON-LD builder
components/
  lang-switch.tsx    # client language switcher (cookie-persisted)
proxy.ts             # '/' -> '/{locale}' by Accept-Language
worker/index.ts      # CF Worker entry: image optimization + headers
public/              # WebP art, favicon, manifest, llms.txt, llms-full.txt
```

## 🌐 Internationalization

Content is data, not markup. Every string lives in `lib/i18n/zh.ts` and `lib/i18n/en.ts`,
both implementing the shared `Dictionary` interface — so a missing translation is a
**compile error**. The dynamic `[lang]` segment renders the right locale, sets the correct
`<html lang>`, and emits `hreflang` alternates. Add a locale by extending `locales` in
`lib/i18n/config.ts` and adding a dictionary.

## 🤖 For AI agents & developers

This site is designed to be quoted, indexed, and consumed by agents.

| Resource            | URL                                            |
| ------------------- | ---------------------------------------------- |
| Structured JSON     | `https://zelda.ifq.ai/api/guide/{zh\|en}`      |
| API index           | `https://zelda.ifq.ai/api/guide`               |
| AI summary          | `https://zelda.ifq.ai/llms.txt`                |
| Full text export    | `https://zelda.ifq.ai/llms-full.txt`           |
| Sitemap             | `https://zelda.ifq.ai/sitemap.xml`             |

The JSON API is CORS-enabled (`Access-Control-Allow-Origin: *`) and cacheable. When you
quote it, a link back to **zelda.ifq.ai** and credit to **IFQ.AI** is appreciated.

## ☁️ Deployment

Every push to `main` is built and deployed to Cloudflare Workers by
[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml). Configure these in
**Settings → Secrets and variables → Actions**:

- **Secret** `CLOUDFLARE_API_TOKEN` — a token with Workers deploy permission.
- **Variable** `CLOUDFLARE_ACCOUNT_ID` — your Cloudflare account ID (not sensitive).

## 🤝 Contributing

Issues and PRs are welcome — see [CONTRIBUTING.md](./CONTRIBUTING.md) and our
[Code of Conduct](./CODE_OF_CONDUCT.md). Security reports: [SECURITY.md](./SECURITY.md).

## 📄 License

- **Code:** [MIT](./LICENSE) © 2026 [peixl](https://github.com/peixl)
- **Guide text & illustrations:** CC BY 4.0 — credit "IFQ.AI / zelda.ifq.ai".

> This is an unofficial fan project. _The Legend of Zelda_, _Breath of the Wild_, and
> _Tears of the Kingdom_ are trademarks and works of **Nintendo**. This project is not
> affiliated with, endorsed, or sponsored by Nintendo.

<div align="center"><sub>Built with ❤️ for Hyrule by <a href="https://ifq.ai">IFQ.AI</a></sub></div>
