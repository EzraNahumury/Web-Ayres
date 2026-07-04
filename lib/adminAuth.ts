import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE = "admin_session";
const SESSION_MAX_AGE_S = 24 * 60 * 60; // 24 hours

function secret(): string {
  return process.env.SESSION_SECRET ?? "dev-secret-change-me";
}

function sign(value: string): string {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

export function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

export function createSessionToken(): { token: string; maxAge: number } {
  const exp = String(Date.now() + SESSION_MAX_AGE_S * 1000);
  return { token: `${exp}.${sign(exp)}`, maxAge: SESSION_MAX_AGE_S };
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const dot = token.indexOf(".");
  if (dot === -1) return false;
  const exp = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  if (!/^\d+$/.test(exp) || Number(exp) < Date.now()) return false;
  return safeEqual(sig, sign(exp));
}
