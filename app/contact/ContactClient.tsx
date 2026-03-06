"use client";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ayresapparel",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ayres_apparel",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ayresapparel",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ayresapparel",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
];

export default function ContactClient() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
    const body = encodeURIComponent(
      `Halo Ayres Apparel!\n\nNama: ${name}\nNo. WA: ${phone}\nEmail: ${email}\n\nPesan:\n${message}`
    );
    window.location.href = `mailto:order@ayresapparel.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative bg-[#0a0a0a] border-b border-[#1a1a1a] pt-24 pb-20 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div style={{ animation: 'fadeUp 0.7s ease both' }}>
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-8 h-px bg-[#e03030]" />
              <span className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.3em]">Hubungi Kami</span>
            </div>
            <h1 className="text-[clamp(3.5rem,9vw,6rem)] font-black uppercase leading-[0.88] mb-8">
              Let's<br />
              <span className="relative">Talk<span className="text-[#e03030]">.</span></span>
            </h1>
            <p className="text-[#666] text-sm leading-relaxed mb-10 max-w-xs">
              Konsultasi desain gratis, respon cepat. Tim kami siap membantu dari desain hingga pengiriman ke seluruh Indonesia.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{ animation: `fadeUp 0.5s ease ${0.3 + i * 0.08}s both` }}
                  className="w-10 h-10 border border-[#1e1e1e] flex items-center justify-center text-[#444] hover:text-white hover:border-[#e03030] transition-all duration-300">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3" style={{ animation: 'fadeUp 0.7s ease 0.2s both' }}>
            <a href="https://wa.me/6287818310416" target="_blank" rel="noopener noreferrer"
              className="group relative overflow-hidden flex items-center justify-between px-7 py-7 border border-[#e03030]/30 hover:border-[#e03030]/60 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #0f0e1e 0%, #13114a 50%, #0d0d20 100%)' }}>
              {/* Glow top-left */}
              <div className="absolute -left-6 -top-6 w-32 h-32 opacity-30 pointer-events-none rounded-full"
                style={{ background: 'radial-gradient(circle, #e03030, transparent 70%)' }} />
              {/* Glow bottom-right */}
              <div className="absolute right-0 bottom-0 w-24 h-24 opacity-10 pointer-events-none rounded-full"
                style={{ background: 'radial-gradient(circle, #f5a0a0, transparent 70%)' }} />
              <div className="flex items-center gap-5">
                {/* WA Icon */}
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.25l5.565-1.459A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.522-5.186-1.427l-.371-.221-3.304.867.882-3.222-.243-.392A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-[9px] font-bold uppercase tracking-[0.25em] mb-1">Chat Langsung via WhatsApp</p>
                  <p className="text-white text-2xl font-black tracking-tight">0878-1831-0416</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">Chat Sekarang</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a href="mailto:order@ayresapparel.com"
                className="group flex flex-col gap-1.5 border border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#2a2a2a] px-6 py-5 transition-colors duration-200">
                <p className="text-[#444] text-[9px] font-bold uppercase tracking-[0.2em]">Email Order</p>
                <p className="text-[#999] text-xs font-medium group-hover:text-white transition-colors">order@ayresapparel.com</p>
              </a>
              <a href="mailto:pengaduan@ayresapparel.com"
                className="group flex flex-col gap-1.5 border border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#2a2a2a] px-6 py-5 transition-colors duration-200">
                <p className="text-[#444] text-[9px] font-bold uppercase tracking-[0.2em]">Email Pengaduan</p>
                <p className="text-[#999] text-xs font-medium group-hover:text-white transition-colors">pengaduan@ayresapparel.com</p>
              </a>
            </div>
            <div className="border border-[#1a1a1a] bg-[#0d0d0d] px-6 py-5 flex items-center justify-between">
              <div>
                <p className="text-[#444] text-[9px] font-bold uppercase tracking-[0.2em] mb-1.5">Jam Operasional</p>
                <p className="text-[#999] text-xs">Senin – Sabtu &nbsp;·&nbsp; 09.00 – 16.30 WIB</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-500 text-[10px] font-semibold">Buka</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Map ───────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Form */}
          <div style={{ animation: 'fadeUp 0.6s ease 0.1s both' }}>
            <h2 className="text-2xl font-black uppercase mb-8">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-[#888]">Nama <span className="text-[#e03030]">*</span></label>
                  <input name="name" type="text" required placeholder="Nama kamu"
                    className="bg-[#0e0e0e] border border-[#1e1e1e] px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#e03030] placeholder:text-[#2d2d2d] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-[#888]">No. WA</label>
                  <input name="phone" type="tel" placeholder="08xx-xxxx-xxxx"
                    className="bg-[#0e0e0e] border border-[#1e1e1e] px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#e03030] placeholder:text-[#2d2d2d] transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#888]">Email</label>
                <input name="email" type="email" placeholder="email@kamu.com"
                  className="bg-[#0e0e0e] border border-[#1e1e1e] px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#e03030] placeholder:text-[#2d2d2d] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#888]">Subjek <span className="text-[#e03030]">*</span></label>
                <input name="subject" type="text" required placeholder="Pesan jersey, konsultasi desain, dll."
                  className="bg-[#0e0e0e] border border-[#1e1e1e] px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#e03030] placeholder:text-[#2d2d2d] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#888]">Pesan <span className="text-[#e03030]">*</span></label>
                <textarea name="message" required rows={5}
                  placeholder="Ceritakan kebutuhanmu — jumlah, bahan, desain, deadline..."
                  className="bg-[#0e0e0e] border border-[#1e1e1e] px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#e03030] placeholder:text-[#2d2d2d] transition-colors resize-none" />
              </div>
              <button type="submit"
                className="group relative overflow-hidden w-full text-white font-bold text-xs uppercase tracking-widest py-4 transition-all duration-300 flex items-center justify-center gap-3 border border-[#e03030]/30 hover:border-[#e03030]/60"
                style={{ background: 'linear-gradient(135deg, #0f0e1e 0%, #13114a 50%, #0d0d20 100%)' }}>
                Kirim ke Email
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <p className="text-[#2d2d2d] text-[10px] text-center">Pesan dikirim ke order@ayresapparel.com</p>
            </form>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-4" style={{ animation: 'fadeUp 0.6s ease 0.25s both' }}>
            <h2 className="text-2xl font-black uppercase">Lokasi Kami</h2>
            <p className="text-[#555] text-xs">Jl. Wonocatur No.427, Jeruklegi, Banguntapan, D.I. Yogyakarta</p>
            <div className="flex-1 overflow-hidden border border-[#1a1a1a]" style={{ minHeight: 400 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.6!2d110.4031070!3d-7.8067120!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a573253328fad%3A0x63a0000974d88ae4!2sAYRES%20APPAREL!5e0!3m2!1sen!2sid!4v1709000000000!5m2!1sen!2sid"
                width="100%" height="100%"
                style={{ border: 0, filter: 'invert(100%) hue-rotate(180deg)', display: 'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href="https://www.google.com/maps/place/AYRES+APPAREL/@-7.806712,110.403107,17z" target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 border border-[#1a1a1a] py-3.5 text-[#666] text-xs font-semibold hover:border-[#e03030] hover:text-white transition-all duration-200">
              Buka di Google Maps
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>

        </div>
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
