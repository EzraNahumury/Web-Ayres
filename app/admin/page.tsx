import type { Metadata } from "next";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/adminAuth";
import LoginForm from "./LoginForm";
import Dashboard, { type Registration } from "./Dashboard";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const store = await cookies();
  const authed = verifySessionToken(store.get(ADMIN_COOKIE)?.value);

  if (!authed) return <LoginForm />;

  const [rows] = await db.query(
    `SELECT id, full_name, wa_number, email, city, province, address,
            business_name, business_status, reseller_status, reseller_type,
            sales_channels, market_area,
            instagram_username, tiktok_username, ktp_file, logo_file,
            agree_data_true, agree_terms, agree_marketing,
            DATE_FORMAT(created_at, '%d/%m/%Y %H:%i') AS created_at
     FROM reseller_registrations
     ORDER BY id DESC`
  );

  return <Dashboard rows={rows as Registration[]} />;
}
