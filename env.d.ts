// Project-specific Cloudflare bindings.
//
// Augments the empty `Cloudflare.Env` generated in worker-configuration.d.ts so
// that `import { env } from "cloudflare:workers"` (see db/index.ts) is typed.
// Binding names mirror worker/index.ts and the `d1`/`r2` mapping in
// .openai/hosting.json. Keep this file as a non-module (no import/export) so the
// namespace merges with the global one from worker-configuration.d.ts.
declare namespace Cloudflare {
  interface Env {
    ASSETS: Fetcher;
    DB: D1Database;
    IMAGES: ImagesBinding;
  }
}
