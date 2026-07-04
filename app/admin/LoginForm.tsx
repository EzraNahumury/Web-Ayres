"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const inputClass =
  "bg-[#0e0e0e] border border-[#1e1e1e] px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#e03030] placeholder:text-[#2d2d2d] transition-colors w-full";

export default function LoginForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setError(false);
    setSubmitting(true);
    const f = e.currentTarget;
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: (f.elements.namedItem("email") as HTMLInputElement).value,
          password: (f.elements.namedItem("password") as HTMLInputElement).value,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      router.refresh();
    } catch {
      setError(true);
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm" style={{ animation: 'fadeUp 0.6s ease both' }}>
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-8 h-px bg-[#e03030]" />
          <span className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.3em]">Admin</span>
        </div>
        <h1 className="text-3xl font-black uppercase mb-8">
          Masuk<span className="text-[#e03030]">.</span>
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#888]">Email</label>
            <input name="email" type="email" required autoComplete="username"
              placeholder="admin@email.com" className={inputClass} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#888]">Password</label>
            <div className="relative">
              <input name="password" type={showPassword ? "text" : "password"} required autoComplete="current-password"
                placeholder="••••••••" className={`${inputClass} pr-12`} />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                className="absolute right-0 top-0 h-full px-4 flex items-center text-[#555] hover:text-white transition-colors">
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {error && (
            <p className="border border-[#e03030]/40 bg-[#e03030]/10 text-[#f08080] text-xs px-4 py-3">
              Email atau password salah.
            </p>
          )}
          <button type="submit" disabled={submitting}
            className="bg-[#e03030] hover:bg-[#c22525] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-widest py-4 mt-2 transition-colors duration-200">
            {submitting ? "Memeriksa..." : "Masuk"}
          </button>
        </form>
      </div>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
