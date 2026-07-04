import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/adminAuth";
import { UPLOAD_DIR, UPLOAD_NAME_PATTERN } from "@/lib/uploads";

const CONTENT_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const store = await cookies();
  if (!verifySessionToken(store.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name } = await params;
  if (!UPLOAD_NAME_PATTERN.test(name)) {
    return NextResponse.json({ error: "Invalid file name" }, { status: 400 });
  }

  const data = await readFile(path.join(UPLOAD_DIR, name)).catch(() => null);
  if (!data) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return new NextResponse(new Uint8Array(data), {
    headers: {
      "Content-Type": CONTENT_TYPES[path.extname(name)] ?? "application/octet-stream",
      "Cache-Control": "private, max-age=3600",
    },
  });
}
