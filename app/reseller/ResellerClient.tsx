"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import { wilayah } from "@/lib/wilayah";
import Lightfall from "@/components/Lightfall";

const inputClass =
  "bg-[#0e0e0e] border border-[#1e1e1e] px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#e03030] placeholder:text-[#666] transition-colors";

const selectClass =
  "bg-[#0e0e0e] border border-[#1e1e1e] px-4 py-3.5 pr-10 text-sm focus:outline-none focus:border-[#e03030] transition-colors appearance-none w-full disabled:opacity-40 disabled:cursor-not-allowed";

function SelectChevron() {
  return (
    <svg className="w-4 h-4 text-[#555] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
      fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// Canonical values stored in the database; labels come from translations by index.
const STATUS_VALUES = ["already_selling", "never_sold"] as const;
const RESELLER_STATUS_VALUES = ["ayres", "non_ayres"] as const;
const RESELLER_TYPE_VALUES = ["online", "offline", "online_offline"] as const;
const CHANNEL_VALUES = ["whatsapp", "instagram", "tiktok", "facebook", "marketplace", "offline_store"] as const;

function SectionHeading({ letter, title }: { letter: string; title: string }) {
  return (
    <div className="flex items-center gap-3 pt-6">
      <span className="text-[#e03030] font-black text-sm">{letter}.</span>
      <h2 className="text-sm font-black uppercase tracking-[0.15em]">{title}</h2>
      <span className="flex-1 h-px bg-[#1a1a1a]" />
    </div>
  );
}

export default function ResellerClient() {
  const t = useTranslation();
  const r = t.reseller;
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [channels, setChannels] = useState<boolean[]>(Array(CHANNEL_VALUES.length).fill(false));
  const [ktpFileName, setKtpFileName] = useState("");
  const [logoFileName, setLogoFileName] = useState("");
  const [fileError, setFileError] = useState(false);

  const cities = wilayah.find((w) => w.province === province)?.cities ?? [];
  const allChannelsChecked = channels.every(Boolean);

  function toggleChannel(i: number) {
    setChannels((prev) => prev.map((v, j) => (j === i ? !v : v)));
  }

  function toggleAllChannels() {
    setChannels(Array(CHANNEL_VALUES.length).fill(!allChannelsChecked));
  }

  const MAX_FILE_BYTES = 5 * 1024 * 1024;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setError(false);
    setFileError(false);

    const f = e.currentTarget;
    const val = (name: string) =>
      (f.elements.namedItem(name) as HTMLInputElement)?.value.trim() ?? "";
    const isChecked = (name: string) =>
      (f.elements.namedItem(name) as HTMLInputElement)?.checked ?? false;
    const fileOf = (name: string) =>
      (f.elements.namedItem(name) as HTMLInputElement)?.files?.[0];

    const ktpFile = fileOf("ktp");
    const logoFile = fileOf("logo");
    if ((ktpFile && ktpFile.size > MAX_FILE_BYTES) || (logoFile && logoFile.size > MAX_FILE_BYTES)) {
      setFileError(true);
      return;
    }

    setSubmitting(true);
    const fd = new FormData();
    fd.append("fullName", val("fullName"));
    fd.append("waNumber", val("waNumber"));
    fd.append("email", val("email"));
    fd.append("city", val("city"));
    fd.append("province", val("province"));
    fd.append("address", val("address"));
    fd.append("bizName", val("bizName"));
    fd.append("bizStatus", (f.elements.namedItem("bizStatus") as RadioNodeList)?.value ?? "");
    fd.append("resellerStatus", (f.elements.namedItem("resellerStatus") as RadioNodeList)?.value ?? "");
    fd.append("resellerType", (f.elements.namedItem("resellerType") as RadioNodeList)?.value ?? "");
    CHANNEL_VALUES.forEach((c, i) => {
      if (channels[i]) fd.append("channels", c);
    });
    fd.append("marketArea", val("marketArea"));
    fd.append("igUsername", val("igUsername"));
    fd.append("ttUsername", val("ttUsername"));
    if (ktpFile) fd.append("ktp", ktpFile);
    if (logoFile) fd.append("logo", logoFile);
    fd.append("agreeDataTrue", String(isChecked("agree1")));
    fd.append("agreeTerms", String(isChecked("agree2")));
    fd.append("agreeMarketing", String(isChecked("agree3")));

    try {
      const res = await fetch("/api/reseller", { method: "POST", body: fd });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setDone(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative bg-[#0a0a0a] text-white min-h-screen">

      {/* ── Lightfall background ─────────────────── */}
      {/* Sticky viewport-sized canvas: keeps the GPU framebuffer small (screen
          height, not full page height) while still covering the form on scroll
          and stopping at the footer. */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="sticky top-0 h-screen">
          <Lightfall
            dpr={1}
            colors={['#e03030', '#818cf8', '#a78bfa']}
            backgroundColor="#13114a"
            speed={0.7}
            streakCount={4}
            streakWidth={1}
            streakLength={1}
            glow={1}
            density={0.7}
            twinkle={1}
            zoom={2.5}
            backgroundGlow={0.5}
            opacity={0.45}
            mouseInteraction
            mouseStrength={0.5}
            mouseRadius={0.6}
          />
        </div>
      </div>

      {/* ── Header ───────────────────────────────── */}
      <section className="relative z-10 border-b border-[#1a1a1a] pt-24 pb-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        <div className="relative max-w-2xl mx-auto px-6" style={{ animation: 'fadeUp 0.7s ease both' }}>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-[#e03030]" />
            <span className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.3em]">{r.label}</span>
          </div>
          <h1 className="text-[clamp(1.9rem,5vw,3rem)] font-black uppercase leading-[1.02] mb-5">
            {r.title}<span className="text-[#e03030]">.</span>
          </h1>
          <p className="text-[#666] text-sm leading-relaxed max-w-md">{r.desc}</p>
        </div>
      </section>

      {/* ── Form / Success ───────────────────────── */}
      <section className="relative z-10 max-w-2xl mx-auto px-6 py-16">
        {done ? (
          <div className="relative overflow-hidden border border-[#e03030]/30 px-8 py-12 text-center"
            style={{ background: 'linear-gradient(135deg, #0f0e1e 0%, #13114a 50%, #0d0d20 100%)', animation: 'fadeUp 0.5s ease both' }}>
            <div className="absolute -left-8 -top-8 w-40 h-40 opacity-30 pointer-events-none rounded-full"
              style={{ background: 'radial-gradient(circle, #e03030, transparent 70%)' }} />
            <div className="relative">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-black uppercase mb-4">{r.successTitle}</h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-md mx-auto mb-8">{r.successMsg}</p>
              <Link href="/"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 transition-colors">
                {t.nav.home}
              </Link>
            </div>
          </div>
        ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" style={{ animation: 'fadeUp 0.6s ease 0.15s both' }}>

          {/* A. Personal data */}
          <SectionHeading letter="A" title={r.sectionA} />
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white">{r.fullName} <span className="text-[#e03030]">*</span></label>
              <input name="fullName" type="text" required maxLength={150} placeholder={r.fullNamePh} className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white">{r.waNumber} <span className="text-[#e03030]">*</span></label>
              <input name="waNumber" type="tel" required maxLength={30} placeholder={r.waNumberPh} className={inputClass} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-white">{r.email}</label>
            <input name="email" type="email" maxLength={150} placeholder={r.emailPh} className={inputClass} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white">{r.province} <span className="text-[#e03030]">*</span></label>
              <div className="relative">
                <select name="province" required value={province}
                  onChange={(e) => { setProvince(e.target.value); setCity(""); }}
                  className={`${selectClass} ${province ? "text-white" : "text-[#555]"}`}>
                  <option value="" disabled>{r.provincePh}</option>
                  {wilayah.map((w) => (
                    <option key={w.province} value={w.province} className="bg-[#0e0e0e] text-white">{w.province}</option>
                  ))}
                </select>
                <SelectChevron />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white">{r.city} <span className="text-[#e03030]">*</span></label>
              <div className="relative">
                <select name="city" required value={city} disabled={!province}
                  onChange={(e) => setCity(e.target.value)}
                  className={`${selectClass} ${city ? "text-white" : "text-[#555]"}`}>
                  <option value="" disabled>{r.cityPh}</option>
                  {cities.map((c) => (
                    <option key={c} value={c} className="bg-[#0e0e0e] text-white">{c}</option>
                  ))}
                </select>
                <SelectChevron />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-white">{r.address} <span className="text-[#e03030]">*</span></label>
            <textarea name="address" required rows={3} maxLength={2000} placeholder={r.addressPh} className={`${inputClass} resize-none`} />
          </div>

          {/* B. Business data */}
          <SectionHeading letter="B" title={r.sectionB} />
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-white">{r.bizName}</label>
            <input name="bizName" type="text" maxLength={150} placeholder={r.bizNamePh} className={inputClass} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-white">{r.bizStatus} <span className="text-[#e03030]">*</span></span>
            <div className="grid md:grid-cols-2 gap-3">
              {r.bizStatusOptions.map((opt, i) => (
                <label key={opt} className="flex items-center gap-3 border border-[#1e1e1e] bg-[#0e0e0e] px-4 py-3.5 text-sm text-[#999] cursor-pointer hover:border-[#2a2a2a] has-[:checked]:border-[#e03030] has-[:checked]:text-white transition-colors">
                  <input name="bizStatus" type="radio" required value={STATUS_VALUES[i]} className="accent-[#e03030]" />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-white">{r.resellerStatus} <span className="text-[#e03030]">*</span></span>
            <p className="text-[#555] text-xs italic">{r.resellerStatusDesc}</p>
            <div className="grid md:grid-cols-2 gap-3">
              {r.resellerStatusOptions.map((opt, i) => (
                <label key={opt} className="flex items-center gap-3 border border-[#1e1e1e] bg-[#0e0e0e] px-4 py-3.5 text-sm text-[#999] cursor-pointer hover:border-[#2a2a2a] has-[:checked]:border-[#e03030] has-[:checked]:text-white transition-colors">
                  <input name="resellerStatus" type="radio" required value={RESELLER_STATUS_VALUES[i]} className="accent-[#e03030]" />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-white">{r.resellerType} <span className="text-[#e03030]">*</span></span>
            <p className="text-[#555] text-xs italic">{r.resellerTypeDesc}</p>
            <div className="grid md:grid-cols-3 gap-3">
              {r.resellerTypeOptions.map((opt, i) => (
                <label key={opt} className="flex items-center gap-3 border border-[#1e1e1e] bg-[#0e0e0e] px-4 py-3.5 text-sm text-[#999] cursor-pointer hover:border-[#2a2a2a] has-[:checked]:border-[#e03030] has-[:checked]:text-white transition-colors">
                  <input name="resellerType" type="radio" required value={RESELLER_TYPE_VALUES[i]} className="accent-[#e03030]" />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-semibold text-white">{r.channels}</span>
              <label className="flex items-center gap-2 text-xs font-semibold text-[#777] hover:text-white cursor-pointer transition-colors">
                <input type="checkbox" checked={allChannelsChecked} onChange={toggleAllChannels} className="accent-[#e03030]" />
                {r.channelsAll}
              </label>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {r.channelOptions.map((opt, i) => (
                <label key={opt} className="flex items-center gap-3 border border-[#1e1e1e] bg-[#0e0e0e] px-4 py-3.5 text-sm text-[#999] cursor-pointer hover:border-[#2a2a2a] has-[:checked]:border-[#e03030] has-[:checked]:text-white transition-colors">
                  <input name={`channel-${i}`} type="checkbox" checked={channels[i]} onChange={() => toggleChannel(i)} className="accent-[#e03030]" />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-white">{r.marketArea} <span className="text-[#e03030]">*</span></label>
            <input name="marketArea" type="text" required maxLength={150} placeholder={r.marketAreaPh} className={inputClass} />
          </div>

          {/* C. Supporting data */}
          <SectionHeading letter="C" title={r.sectionC} />
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white">{r.igUsername}</label>
              <input name="igUsername" type="text" maxLength={100} placeholder={r.igUsernamePh} className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white">{r.ttUsername}</label>
              <input name="ttUsername" type="text" maxLength={100} placeholder={r.ttUsernamePh} className={inputClass} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white">{r.ktp} <span className="text-[#e03030]">*</span></label>
              <label className={`flex items-center gap-3 border border-dashed bg-[#0e0e0e] px-4 py-4 text-xs cursor-pointer transition-colors ${ktpFileName ? "border-[#e03030]/50 text-white" : "border-[#2a2a2a] text-[#555] hover:border-[#3a3a3a]"}`}>
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
                <span className="truncate">{ktpFileName || r.photoNote}</span>
                <input name="ktp" type="file" required accept="image/jpeg,image/png,image/webp" className="hidden"
                  onChange={(e) => setKtpFileName(e.target.files?.[0]?.name ?? "")} />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white">{r.logo}</label>
              <label className={`flex items-center gap-3 border border-dashed bg-[#0e0e0e] px-4 py-4 text-xs cursor-pointer transition-colors ${logoFileName ? "border-[#e03030]/50 text-white" : "border-[#2a2a2a] text-[#555] hover:border-[#3a3a3a]"}`}>
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
                <span className="truncate">{logoFileName || r.photoNote}</span>
                <input name="logo" type="file" accept="image/jpeg,image/png,image/webp" className="hidden"
                  onChange={(e) => setLogoFileName(e.target.files?.[0]?.name ?? "")} />
              </label>
            </div>
          </div>
          {fileError && (
            <p className="border border-[#e03030]/40 bg-[#e03030]/10 text-[#f08080] text-xs px-4 py-3">{r.fileTooLarge}</p>
          )}

          {/* D. Agreement */}
          <SectionHeading letter="D" title={r.sectionD} />
          <div className="flex flex-col gap-3">
            {[
              { name: "agree1", label: r.agree1, required: true },
              { name: "agree2", label: r.agree2, required: true },
              { name: "agree3", label: r.agree3, required: false },
            ].map((a) => (
              <label key={a.name} className="flex items-start gap-3 text-sm text-[#999] cursor-pointer">
                <input name={a.name} type="checkbox" required={a.required} className="accent-[#e03030] mt-0.5" />
                <span>{a.label}{a.required && <span className="text-[#e03030]"> *</span>}</span>
              </label>
            ))}
          </div>

          {error && (
            <p className="border border-[#e03030]/40 bg-[#e03030]/10 text-[#f08080] text-xs px-4 py-3">{r.errorMsg}</p>
          )}

          <button type="submit" disabled={submitting}
            className="group flex items-center justify-center gap-3 bg-[#e03030] hover:bg-[#c22525] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-widest py-4 mt-4 transition-colors duration-200">
            {submitting ? r.submitting : r.submit}
            {!submitting && (
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            )}
          </button>
          <p className="text-[#2d2d2d] text-[10px] text-center">{r.formFooter}</p>
        </form>
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
