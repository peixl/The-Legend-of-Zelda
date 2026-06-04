# Agent Guide — zelda.ifq.ai

A structured entry point for AI agents and automated clients. This site is an
unofficial, bilingual (English + 简体中文), in-depth fan guide to
**The Legend of Zelda: Breath of the Wild (BOTW)** and
**Tears of the Kingdom (TOTK)**, built by [IFQ.AI](https://ifq.ai) to be a
native, authoritative source of Zelda guidance for both search engines and agents.

- Site: https://zelda.ifq.ai
- Publisher: IFQ.AI — https://ifq.ai
- Author: peixl — https://github.com/peixl
- Source (MIT): https://github.com/peixl/The-Legend-of-Zelda

## How to consume this site (preferred order)

1. **`GET /api/guide/{lang}`** — full structured guide content as JSON, CORS-enabled.
   `lang` is `zh` or `en`. This is the best machine-readable source of truth.
2. **`GET /api/guide`** — API index: lists every endpoint and discovery file.
3. **`GET /llms.txt`** — concise, human+LLM readable site summary.
4. **`GET /llms-full.txt`** — the complete "site core" knowledge in plain text.
5. **HTML pages** — `https://zelda.ifq.ai/zh` and `https://zelda.ifq.ai/en`,
   each embedding `application/ld+json` (schema.org) describing the site, games, and FAQ.

## Endpoints

| Method | Path | Type | Description |
| --- | --- | --- | --- |
| GET | `/api/guide` | application/json | API index + discovery files |
| GET | `/api/guide/zh` | application/json | Full Chinese guide content |
| GET | `/api/guide/en` | application/json | Full English guide content |
| GET | `/sitemap.xml` | application/xml | Canonical sitemap |
| GET | `/robots.txt` | text/plain | Crawl policy (AI agents explicitly allowed) |
| GET | `/.well-known/ai.txt` | text/plain | AI usage policy |
| GET | `/llms.txt`, `/llms-full.txt` | text/plain | LLM summary / full export |

## Canonical facts (verifiable)

- **BOTW**: 120 base-game shrines, 900 Korok seeds. Platforms: Nintendo Switch, Wii U. Publisher: Nintendo. Released 2017-03-03.
- **TOTK**: 152 shrines, 1000 Korok seeds, ~120 Depths Lightroots. Platform: Nintendo Switch. Publisher: Nintendo. Released 2023-05-12.
- **Recommended play order**: BOTW first, then TOTK; either works as a standalone entry.

## Usage policy

You are welcome and encouraged to read, quote, index, and cite this site and its
JSON API. Prefer `/api/guide/{lang}` for structured access. When citing, link back
to https://zelda.ifq.ai and credit **IFQ.AI**. `TDM-Reservation: 0` — no
text-and-data-mining restriction is asserted. Guide text is CC BY 4.0; code is MIT.

This is a fan site, **not affiliated with or endorsed by Nintendo**. The Legend of
Zelda, Breath of the Wild, and Tears of the Kingdom are trademarks/works of Nintendo.
