"use client";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ayresapparel",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ayres_apparel",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ayresapparel",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ayresapparel",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

export default function ContactClient() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
    const text = encodeURIComponent(
      `Halo Ayres Apparel!\n\nNama: ${name}\nSubjek: ${subject}\nPesan: ${message}`
    );
    window.open(`https://wa.me/6287818310416?text=${text}`, "_blank");
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[#1a1a1a] py-24">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(91,88,255,0.15) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-[#5b58ff] text-[11px] font-bold uppercase tracking-[0.25em] mb-5">Hubungi Kami</p>
            <h1 className="text-6xl md:text-7xl font-black uppercase leading-[0.9] mb-6">
              Let's<br />Talk.
            </h1>
            <p className="text-[#777] text-sm leading-relaxed max-w-xs">
              Konsultasi gratis, respon cepat. Tim kami siap bantu dari desain sampai pengiriman.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <a href="https://wa.me/6287818310416" target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-between border border-[#5b58ff]/30 bg-[#5b58ff]/5 hover:bg-[#5b58ff]/10 px-6 py-5 transition-all duration-200">
              <div>
                <p className="text-[10px] text-[#5b58ff] font-bold uppercase tracking-widest mb-1">WhatsApp</p>
                <p className="text-white text-lg font-bold">0878-1831-0416</p>
              </div>
              <svg className="w-5 h-5 text-[#5b58ff] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="mailto:order@ayresapparel.com"
              className="group flex items-center justify-between border border-[#1e1e1e] hover:border-[#2a2a2a] px-6 py-5 transition-all duration-200">
              <div>
                <p className="text-[10px] text-[#555] font-bold uppercase tracking-widest mb-1">Email</p>
                <p className="text-[#aaa] text-sm font-medium group-hover:text-white transition-colors">order@ayresapparel.com</p>
              </div>
              <svg className="w-4 h-4 text-[#333] group-hover:text-[#666] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Info strip ───────────────────────────── */}
      <div className="border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap gap-8 items-center">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5b58ff]" />
            <span className="text-[#999] text-xs">Jl. Wonocatur No.427, Banguntapan, Yogyakarta</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#333]" />
            <span className="text-[#999] text-xs">Senin – Sabtu: 09.00 – 16.30 WIB</span>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                className="text-[#444] hover:text-white transition-colors duration-200">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Form + Map ───────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Form */}
          <div>
            <h2 className="text-2xl font-black uppercase mb-8">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-[#aaa]">Nama <span className="text-[#5b58ff]">*</span></label>
                  <input name="name" type="text" required placeholder="Nama kamu"
                    className="bg-[#111] border border-[#222] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5b58ff] placeholder:text-[#333] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-[#aaa]">No. WA</label>
                  <input name="phone" type="tel" placeholder="08xx-xxxx-xxxx"
                    className="bg-[#111] border border-[#222] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5b58ff] placeholder:text-[#333] transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#aaa]">Email</label>
                <input name="email" type="email" placeholder="email@kamu.com"
                  className="bg-[#111] border border-[#222] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5b58ff] placeholder:text-[#333] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#aaa]">Subjek <span className="text-[#5b58ff]">*</span></label>
                <input name="subject" type="text" required placeholder="Pesan jersey, konsultasi desain, dll."
                  className="bg-[#111] border border-[#222] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5b58ff] placeholder:text-[#333] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#aaa]">Pesan <span className="text-[#5b58ff]">*</span></label>
                <textarea name="message" required rows={5}
                  placeholder="Ceritakan kebutuhanmu — jumlah, bahan, desain, deadline..."
                  className="bg-[#111] border border-[#222] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5b58ff] placeholder:text-[#333] transition-colors resize-none" />
              </div>
              <button type="submit"
                className="group w-full bg-[#5b58ff] hover:bg-[#4845dd] text-white font-bold text-xs uppercase tracking-widest py-4 transition-colors flex items-center justify-center gap-3 mt-1">
                Kirim via WhatsApp
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-black uppercase">Lokasi Kami</h2>
            <div className="flex-1 overflow-hidden border border-[#1a1a1a]" style={{ minHeight: 400 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.6!2d110.4031070!3d-7.8067120!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a573253328fad%3A0x63a0000974d88ae4!2sAYRES%20APPAREL!5e0!3m2!1sen!2sid!4v1709000000000!5m2!1sen!2sid"
                width="100%" height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)', display: 'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href="https://maps.google.com/?q=AYRES+APPAREL+Yogyakarta" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#1a1a1a] py-3 text-[#666] text-xs font-semibold hover:border-[#5b58ff] hover:text-white transition-all duration-200">
              Buka di Google Maps
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
