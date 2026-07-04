import { randomBytes } from "crypto";
import { mkdir, unlink, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { IMAGE_EXTENSIONS, MAX_UPLOAD_BYTES, UPLOAD_DIR } from "@/lib/uploads";

const BUSINESS_STATUSES = ["already_selling", "never_sold"] as const;
const RESELLER_STATUSES = ["ayres", "non_ayres"] as const;
const RESELLER_TYPES = ["online", "offline", "online_offline"] as const;
const SALES_CHANNELS = [
  "whatsapp",
  "instagram",
  "tiktok",
  "facebook",
  "marketplace",
  "offline_store",
] as const;

function str(v: FormDataEntryValue | null, max: number): string | null {
  if (typeof v !== "string") return null;
  const s = v.trim();
  return s.length > 0 && s.length <= max ? s : null;
}

function pickFile(v: FormDataEntryValue | null): File | null {
  return v instanceof File && v.size > 0 && v.name ? v : null;
}

function validateImage(file: File): string | null {
  const ext = IMAGE_EXTENSIONS[file.type];
  if (!ext) return null;
  if (file.size > MAX_UPLOAD_BYTES) return null;
  return ext;
}

async function saveImage(file: File, ext: string): Promise<string> {
  const name = `${Date.now()}-${randomBytes(8).toString("hex")}${ext}`;
  await writeFile(path.join(UPLOAD_DIR, name), Buffer.from(await file.arrayBuffer()));
  return name;
}

export async function POST(req: Request) {
  let fd: FormData;
  try {
    fd = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const fullName = str(fd.get("fullName"), 150);
  const waNumber = str(fd.get("waNumber"), 30);
  const email = str(fd.get("email"), 150);
  const city = str(fd.get("city"), 100);
  const province = str(fd.get("province"), 100);
  const address = str(fd.get("address"), 2000);
  const bizName = str(fd.get("bizName"), 150);
  const marketArea = str(fd.get("marketArea"), 150);
  const igUsername = str(fd.get("igUsername"), 100);
  const ttUsername = str(fd.get("ttUsername"), 100);

  const bizStatus = BUSINESS_STATUSES.find((s) => s === fd.get("bizStatus")) ?? null;
  const resellerStatus = RESELLER_STATUSES.find((s) => s === fd.get("resellerStatus")) ?? null;
  const resellerType = RESELLER_TYPES.find((s) => s === fd.get("resellerType")) ?? null;
  const channelsRaw = fd.getAll("channels");
  const channels = SALES_CHANNELS.filter((c) => channelsRaw.includes(c));

  if (!fullName || !waNumber || !city || !province || !address || !bizStatus || !resellerStatus || !resellerType || !marketArea) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (fd.get("agreeDataTrue") !== "true" || fd.get("agreeTerms") !== "true") {
    return NextResponse.json({ error: "Required agreements not accepted" }, { status: 400 });
  }

  const ktpFile = pickFile(fd.get("ktp"));
  if (!ktpFile) {
    return NextResponse.json({ error: "KTP photo is required" }, { status: 400 });
  }
  const ktpExt = validateImage(ktpFile);
  if (!ktpExt) {
    return NextResponse.json({ error: "KTP photo must be JPG/PNG/WebP, max 5MB" }, { status: 400 });
  }

  const logoFile = pickFile(fd.get("logo"));
  let logoExt: string | null = null;
  if (logoFile) {
    logoExt = validateImage(logoFile);
    if (!logoExt) {
      return NextResponse.json({ error: "Logo must be JPG/PNG/WebP, max 5MB" }, { status: 400 });
    }
  }

  await mkdir(UPLOAD_DIR, { recursive: true });
  const ktpName = await saveImage(ktpFile, ktpExt);
  const logoName = logoFile && logoExt ? await saveImage(logoFile, logoExt) : null;

  try {
    await db.execute(
      `INSERT INTO reseller_registrations
        (full_name, wa_number, email, city, province, address,
         business_name, business_status, reseller_status, reseller_type,
         sales_channels, market_area, instagram_username, tiktok_username,
         ktp_file, logo_file, agree_data_true, agree_terms, agree_marketing)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        fullName,
        waNumber,
        email,
        city,
        province,
        address,
        bizName,
        bizStatus,
        resellerStatus,
        resellerType,
        channels.length > 0 ? channels.join(",") : null,
        marketArea,
        igUsername,
        ttUsername,
        ktpName,
        logoName,
        1,
        1,
        fd.get("agreeMarketing") === "true" ? 1 : 0,
      ]
    );
  } catch (err) {
    console.error("reseller insert failed:", err);
    // Best-effort cleanup of orphaned files when the insert fails.
    await unlink(path.join(UPLOAD_DIR, ktpName)).catch(() => {});
    if (logoName) await unlink(path.join(UPLOAD_DIR, logoName)).catch(() => {});
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
