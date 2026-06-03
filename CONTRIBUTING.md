# Contributing

Thanks for your interest in improving the **Wild & Tears Field Guide**! This is an
open-source, bilingual fan guide for _The Legend of Zelda: Breath of the Wild_ and
_Tears of the Kingdom_, built by [IFQ.AI](https://ifq.ai) and maintained by
[peixl](https://github.com/peixl).

## Getting started

```bash
git clone https://github.com/peixl/The-Legend-of-Zelda.git
cd The-Legend-of-Zelda
npm install
npm run dev
```

Node.js `>=22.13.0` is required (see `.nvmrc`).

## Before you open a PR

Run all three checks locally:

```bash
npm run lint
npm run typecheck
npm run build
```

## Editing guide content

All page content lives in the dictionaries, **not** in the components:

- `lib/i18n/zh.ts` — 简体中文
- `lib/i18n/en.ts` — English

Both files implement the same `Dictionary` interface (`lib/i18n/types.ts`), so the
TypeScript compiler will fail the build if the two languages drift out of sync.
**Always update both languages in the same PR.**

When you change facts (shrine counts, mechanics, etc.), also keep these in sync:

- `app/api/guide/[lang]/route.ts` — structured JSON export
- `public/llms.txt` and `public/llms-full.txt` — AI/agent core export

## Guidelines

- Keep the guide **original** — write your own analysis; do not copy text from other guides.
- Do not add external/blocked third-party resources (fonts, analytics, CDNs). Keeping
  everything first-party is what keeps the site fast worldwide, including mainland China.
- Prefer WebP for images and keep them reasonably sized.
- Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages
  (e.g. `feat(i18n): ...`, `fix(seo): ...`, `docs: ...`).

## Reporting issues

Use the issue templates for bug reports and feature/content suggestions. For security
reports, see [SECURITY.md](./SECURITY.md).

By contributing, you agree that your code contributions are licensed under the
project's [MIT License](./LICENSE), and guide-text/illustration contributions under
CC BY 4.0.
