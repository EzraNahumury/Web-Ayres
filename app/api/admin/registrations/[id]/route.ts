import { unlink } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import type { RowDataPacket } from "mysql2";
import { db } from "@/lib/db";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/adminAuth";
import { UPLOAD_DIR, UPLOAD_NAME_PATTERN } from "@/lib/uploads";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const store = await cookies();
  if (!verifySessionToken(store.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  if (!/^\d+$/.test(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  try {
    const [rows] = await db.execute<RowDataPacket[]>(
      "SELECT ktp_file, logo_file FROM reseller_registrations WHERE id = ?",
      [id]
    );
    if (rows.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    await db.execute("DELETE FROM reseller_registrations WHERE id = ?", [id]);

    // Best-effort cleanup of the uploaded photos.
    for (const file of [rows[0].ktp_file, rows[0].logo_file]) {
      if (typeof file === "string" && UPLOAD_NAME_PATTERN.test(file)) {
        await unlink(path.join(UPLOAD_DIR, file)).catch(() => {});
      }
    }
  } catch (err) {
    console.error("registration delete failed:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
