import { NextResponse, type NextRequest } from "next/server";
import { isLocale, matchLocale } from "@/lib/i18n/config";

/**
 * Root entry point. `/` carries no locale, so we pick one from a previously
 * stored preference (NEXT_LOCALE cookie) or the visitor's Accept-Language
 * header, then redirect to the localized route. Localized paths (`/zh`, `/en`)
 * and all assets bypass this because the matcher only targets `/`.
 */
export function proxy(request: NextRequest) {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  const locale = isLocale(cookie)
    ? cookie
    : matchLocale(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: ["/"],
};
