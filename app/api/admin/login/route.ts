import { NextResponse } from "next/server";

// Simple in-memory rate limiter — resets when server restarts (fine for solo use)
const loginAttempts = new Map<string, { count: number; firstAttempt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : "unknown";
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const now = Date.now();

  // Rate limit check
  const record = loginAttempts.get(ip);
  if (record) {
    if (now - record.firstAttempt < WINDOW_MS) {
      if (record.count >= MAX_ATTEMPTS) {
        return NextResponse.json(
          { error: "Too many attempts. Try again later." },
          { status: 429 }
        );
      }
      record.count++;
    } else {
      // Window expired — reset
      loginAttempts.set(ip, { count: 1, firstAttempt: now });
    }
  } else {
    loginAttempts.set(ip, { count: 1, firstAttempt: now });
  }

  try {
    const body = await request.json();
    const { password } = body;

    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
      console.error("ADMIN_PASSWORD is not set in environment variables.");
      return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
    }

    if (!password || password !== adminPassword) {
      return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
    }

    // On success — clear rate limit record and set session cookie
    loginAttempts.delete(ip);

    // Use a simple signed-ish token: timestamp + secret
    // Not cryptographically signed, but sufficient for solo admin use
    const sessionToken = Buffer.from(
      `cube-admin:${now}:${adminPassword.slice(0, 4)}`
    ).toString("base64");

    const response = NextResponse.json({ success: true });

    response.cookies.set("admin_session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 12, // 12 hours
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
