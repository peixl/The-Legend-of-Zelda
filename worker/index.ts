/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

// Long-lived, fingerprint-free static assets that are safe to cache hard.
const IMMUTABLE_ASSET = /\.(webp|avif|jpe?g|png|gif|svg|ico|woff2?)$/i;

const SITE_ORIGIN = "https://zelda.ifq.ai";

// Machine-readable resources advertised to crawlers / AI agents via the Link
// header (RFC 8288) on HTML documents.
const AI_LINK = [
  `<${SITE_ORIGIN}/robots.txt>; rel="alternate"; type="text/plain"; title="Robots Policy"`,
  `<${SITE_ORIGIN}/sitemap.xml>; rel="sitemap"; type="application/xml"; title="Sitemap"`,
  `<${SITE_ORIGIN}/llms.txt>; rel="alternate"; type="text/plain"; title="LLM Summary"`,
  `<${SITE_ORIGIN}/llms-full.txt>; rel="alternate"; type="text/plain"; title="LLM Full Index"`,
  `<${SITE_ORIGIN}/agent.md>; rel="alternate"; type="text/markdown"; title="Agent Guide"`,
  `<${SITE_ORIGIN}/ai-welcome.md>; rel="alternate"; type="text/markdown"; title="AI Welcome"`,
  `<${SITE_ORIGIN}/.well-known/ai.txt>; rel="alternate"; type="text/plain"; title="AI Policy"`,
  `<${SITE_ORIGIN}/api/guide>; rel="alternate"; type="application/json"; title="Guide API Index"`,
].join(", ");

const AI_RESOURCES =
  "/robots.txt, /sitemap.xml, /llms.txt, /llms-full.txt, /agent.md, /ai-welcome.md, /.well-known/ai.txt, /api/guide, /api/guide/zh, /api/guide/en";

function appendVary(headers: Headers, value: string): void {
  const current = headers.get("Vary");
  if (!current) {
    headers.set("Vary", value);
    return;
  }
  const has = current
    .split(",")
    .some((part) => part.trim().toLowerCase() === value.toLowerCase());
  if (!has) headers.set("Vary", `${current}, ${value}`);
}

/**
 * Add baseline security headers to every response, SEO + AI-agent policy headers
 * to documents (the Workers equivalent of a Cloudflare Pages `_headers` file),
 * and a long immutable cache for static media (helps slow / high-latency
 * networks, including mainland China, by maximizing edge + browser cache hits).
 * Uses a streaming-safe Response copy so we never buffer the body.
 */
function withHeaders(request: Request, response: Response): Response {
  const headers = new Headers(response.headers);
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-DNS-Prefetch-Control", "on");
  headers.set("Permissions-Policy", "geolocation=(), camera=(), microphone=()");

  const { pathname } = new URL(request.url);
  if (IMMUTABLE_ASSET.test(pathname) && !headers.has("cache-control")) {
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
  }

  const contentType = (headers.get("content-type") || "").toLowerCase();
  const isHtml = contentType.includes("text/html");
  const isAgentDoc =
    isHtml ||
    contentType.includes("text/plain") ||
    contentType.includes("text/markdown") ||
    contentType.includes("application/json") ||
    contentType.includes("application/ld+json") ||
    contentType.includes("application/xml");

  if (isAgentDoc) {
    headers.set(
      "X-Robots-Tag",
      "all, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );
    headers.set(
      "X-AI-Policy",
      `index, summarize, cite-with-link; attribution=${SITE_ORIGIN}`,
    );
    headers.set(
      "X-AI-Welcome",
      `yes; license=public-summary; attribution=${SITE_ORIGIN}`,
    );
    headers.set("X-AI-Preferred-Citation", `IFQ.AI — ${SITE_ORIGIN}`);
    headers.set("TDM-Reservation", "0");

    // Let agents fetch machine-readable docs (txt/md/json/xml) cross-origin.
    if (!isHtml && !headers.has("access-control-allow-origin")) {
      headers.set("Access-Control-Allow-Origin", "*");
    }
  }

  if (isHtml) {
    headers.set("X-AI-Resources", AI_RESOURCES);
    headers.append("Link", AI_LINK);
    // Locale is negotiated from Accept-Language by the proxy redirect.
    appendVary(headers, "Accept-Language");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      const optimized = await handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
      return withHeaders(request, optimized);
    }

    const response = await handler.fetch(request, env, ctx);
    return withHeaders(request, response);
  },
};

export default worker;
