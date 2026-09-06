import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * proxy.ts — Server-side route guard for /admin/* paths.
 *
 * Next.js 16 renamed middleware.ts → proxy.ts.
 * The exported function must be named `proxy` (not `middleware`).
 *
 * How it works:
 *  - Any request to /admin/* is intercepted before the page or its JS bundle is served.
 *  - If `admin_session` cookie is absent or malformed → redirect to /admin/compose?locked=1
 *    (the page will show the login form in this state).
 *  - If cookie is present and valid → let the request through normally.
 *
 * The /api/admin/* routes validate the cookie themselves, so they are excluded
 * from this matcher (they return 401 JSON — no redirect needed there).
 */

function isValidSession(sessionValue: string | undefined): boolean {
  if (!sessionValue) return false;

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;

  try {
    const decoded = Buffer.from(sessionValue, "base64").toString("utf-8");
    return (
      decoded.startsWith("cube-admin:") &&
      decoded.endsWith(`:${adminPassword.slice(0, 4)}`)
    );
  } catch {
    return false;
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only guard /admin/* page routes (not API routes — they handle auth themselves)
  if (pathname.startsWith("/admin") && !pathname.startsWith("/api/admin")) {
    const session = request.cookies.get("admin_session")?.value;

    if (!isValidSession(session)) {
      // Redirect to the same page with ?locked=1 so the page renders the login form
      const loginUrl = new URL("/admin/compose", request.url);
      loginUrl.searchParams.set("locked", "1");

      // Avoid redirect loop: only redirect if not already going there with ?locked=1
      if (
        pathname === "/admin/compose" &&
        request.nextUrl.searchParams.get("locked") === "1"
      ) {
        return NextResponse.next();
      }

      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
