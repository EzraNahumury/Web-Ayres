import { NextResponse } from "next/server";
import { ADMIN_COOKIE, createSessionToken, safeEqual } from "@/lib/adminAuth";

export async function POST(req: Request) {
  let body: { email?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminEmail || !adminPassword) {
    console.error("ADMIN_EMAIL / ADMIN_PASSWORD not configured");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";
  if (!safeEqual(email.toLowerCase(), adminEmail.toLowerCase()) || !safeEqual(password, adminPassword)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const { token, maxAge } = createSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge,
  });
  return res;
}
