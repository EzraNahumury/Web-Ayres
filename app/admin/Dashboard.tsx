"use client";

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";

export type Registration = {
  id: number;
  full_name: string;
  wa_number: string;
  email: string | null;
  city: string;
  province: string;
  address: string;
  business_name: string | null;
  business_status: "already_selling" | "never_sold";
  reseller_status: "ayres" | "non_ayres";
  reseller_type: "online" | "offline" | "online_offline";
  sales_channels: string | null;
  market_area: string;
  instagram_username: string | null;
  tiktok_username: string | null;
  ktp_file: string | null;
  logo_file: string | null;
  agree_data_true: number;
  agree_terms: number;
  agree_marketing: number;
  created_at: string;
};

const STATUS_LABELS: Record<Registration["business_status"], string> = {
  already_selling: "Sudah Berjualan Jersey",
  never_sold: "Belum Pernah Berjualan",
};

const RESELLER_STATUS_LABELS: Record<Registration["reseller_status"], string> = {
  ayres: "Ayres",
  non_ayres: "Non Ayres",
};

const RESELLER_TYPE_LABELS: Record<Registration["reseller_type"], string> = {
  online: "Online",
  offline: "Offline",
  online_offline: "Online & Offline",
};

const CHANNEL_LABELS: Record<string, string> = {
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  tiktok: "TikTok",
  facebook: "Facebook",
  marketplace: "Marketplace",
  offline_store: "Toko Offline",
};

function channelText(csv: string | null): string {
  if (!csv) return "—";
  return csv.split(",").map((c) => CHANNEL_LABELS[c] ?? c).join(", ");
}

function FilePreview({ label, file }: { label: string; file: string | null }) {
  return (
    <div>
      <p className="text-[#555] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{label}</p>
      {file ? (
        <a href={`/api/admin/file/${file}`} target="_blank" rel="noopener noreferrer" title="Buka ukuran penuh">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/api/admin/file/${file}`} alt={label}
            className="h-28 border border-[#2a2a2a] object-cover hover:border-[#e03030] transition-colors" />
        </a>
      ) : (
        <p className="text-[#555] text-sm">—</p>
      )}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string | null }) {
  return (
    <div>
      <p className="text-[#555] text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{label}</p>
      <p className="text-[#ccc] text-sm whitespace-pre-wrap">{value || "—"}</p>
    </div>
  );
}

export default function Dashboard({ rows }: { rows: Registration[] }) {
  const router = useRouter();
  const [openId, setOpenId] = useState<number | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);
  const [confirmId, setConfirmId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  async function handleDelete(id: number) {
    if (deletingId !== null) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/registrations/${id}`, { method: "DELETE" });
      if (res.ok) router.refresh();
    } finally {
      setDeletingId(null);
      setConfirmId(null);
    }
  }

  async function handleLogout() {
    if (loggingOut) return;
    setLoggingOut(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24" style={{ animation: 'fadeUp 0.6s ease both' }}>

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#e03030]" />
              <span className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.3em]">Admin</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black uppercase">
              Data Pendaftar Reseller<span className="text-[#e03030]">.</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="border border-[#1a1a1a] bg-[#0d0d0d] px-5 py-3">
              <p className="text-[#555] text-[9px] font-bold uppercase tracking-[0.2em]">Total Pendaftar</p>
              <p className="text-xl font-black">{rows.length}</p>
            </div>
            <button onClick={handleLogout} disabled={loggingOut}
              className="border border-[#1e1e1e] hover:border-[#e03030] disabled:opacity-50 text-[#888] hover:text-white text-xs font-bold uppercase tracking-widest px-6 py-4 transition-colors">
              {loggingOut ? "Keluar..." : "Keluar"}
            </button>
          </div>
        </div>

        {/* Table */}
        {rows.length === 0 ? (
          <div className="border border-[#1a1a1a] bg-[#0d0d0d] px-6 py-16 text-center">
            <p className="text-[#666] text-sm">Belum ada pendaftar.</p>
            <p className="text-[#3a3a3a] text-xs mt-2">Data dari form /reseller akan muncul di sini.</p>
          </div>
        ) : (
          <div className="border border-[#1a1a1a] overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[720px]">
              <thead>
                <tr className="border-b border-[#1a1a1a] bg-[#0d0d0d]">
                  {["#", "Tanggal", "Nama", "WhatsApp", "Kota", "Status Usaha", ""].map((h, i) => (
                    <th key={i} className="px-4 py-3.5 text-[#555] text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <Fragment key={row.id}>
                    <tr
                      onClick={() => setOpenId(openId === row.id ? null : row.id)}
                      className="border-b border-[#141414] hover:bg-[#0f0f0f] cursor-pointer transition-colors">
                      <td className="px-4 py-4 text-[#555]">{row.id}</td>
                      <td className="px-4 py-4 text-[#888] whitespace-nowrap">{row.created_at}</td>
                      <td className="px-4 py-4 font-bold">{row.full_name}</td>
                      <td className="px-4 py-4 text-[#aaa] whitespace-nowrap">
                        <a href={`https://wa.me/${row.wa_number.replace(/[^0-9]/g, "").replace(/^0/, "62")}`}
                          target="_blank" rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="hover:text-[#e03030] underline decoration-[#2a2a2a] underline-offset-4 transition-colors">
                          {row.wa_number}
                        </a>
                      </td>
                      <td className="px-4 py-4 text-[#aaa]">{row.city}</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border ${
                          row.business_status === "already_selling"
                            ? "border-green-900 text-green-500"
                            : "border-[#2a2a2a] text-[#888]"
                        }`}>
                          {STATUS_LABELS[row.business_status]}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-[#555]">
                        <svg className={`w-4 h-4 transition-transform ${openId === row.id ? "rotate-180" : ""}`}
                          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </td>
                    </tr>
                    {openId === row.id && (
                      <tr className="border-b border-[#141414] bg-[#0d0d0d]">
                        <td colSpan={7} className="px-6 py-6">
                          <div className="grid md:grid-cols-3 gap-x-8 gap-y-5">
                            <Detail label="Email" value={row.email} />
                            <Detail label="Provinsi" value={row.province} />
                            <Detail label="Wilayah Pemasaran" value={row.market_area} />
                            <div className="md:col-span-3">
                              <Detail label="Alamat Lengkap" value={row.address} />
                            </div>
                            <Detail label="Nama Usaha/Toko" value={row.business_name} />
                            <Detail label="Status Reseller Ayres" value={RESELLER_STATUS_LABELS[row.reseller_status]} />
                            <Detail label="Jenis Reseller" value={RESELLER_TYPE_LABELS[row.reseller_type]} />
                            <Detail label="Media Penjualan" value={channelText(row.sales_channels)} />
                            <Detail label="Instagram / TikTok"
                              value={`${row.instagram_username || "—"} / ${row.tiktok_username || "—"}`} />
                            <FilePreview label="Foto KTP" file={row.ktp_file} />
                            <FilePreview label="Foto Profil/Logo Usaha" file={row.logo_file} />
                            <div className="md:col-span-3">
                              <p className="text-[#555] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Persetujuan</p>
                              <div className="flex flex-wrap gap-4 text-xs">
                                <span className={row.agree_data_true ? "text-green-500" : "text-[#555]"}>
                                  {row.agree_data_true ? "✔" : "✖"} Data benar
                                </span>
                                <span className={row.agree_terms ? "text-green-500" : "text-[#555]"}>
                                  {row.agree_terms ? "✔" : "✖"} Setuju S&K
                                </span>
                                <span className={row.agree_marketing ? "text-green-500" : "text-[#555]"}>
                                  {row.agree_marketing ? "✔" : "✖"} Bersedia terima promo
                                </span>
                              </div>
                            </div>
                            <div className="md:col-span-3 flex items-center justify-end gap-3 pt-4 border-t border-[#1a1a1a]">
                              {confirmId === row.id ? (
                                <>
                                  <span className="text-[#f08080] text-xs">Hapus data ini secara permanen (termasuk foto)?</span>
                                  <button onClick={() => setConfirmId(null)} disabled={deletingId === row.id}
                                    className="border border-[#2a2a2a] hover:border-[#555] text-[#888] hover:text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 transition-colors">
                                    Batal
                                  </button>
                                  <button onClick={() => handleDelete(row.id)} disabled={deletingId === row.id}
                                    className="bg-[#e03030] hover:bg-[#c22525] disabled:opacity-50 text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 transition-colors">
                                    {deletingId === row.id ? "Menghapus..." : "Ya, Hapus"}
                                  </button>
                                </>
                              ) : (
                                <button onClick={() => setConfirmId(row.id)}
                                  className="group flex items-center gap-2 border border-[#e03030]/40 hover:border-[#e03030] hover:bg-[#e03030]/10 text-[#e03030] text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 transition-colors">
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                  </svg>
                                  Hapus
                                </button>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
