"use client";

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
    <>
      {/* Hero */}
      <section className="bg-[#f7f6fa] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#7a7a7a] text-sm mb-2">Home &rsaquo; Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#181818]">Contact</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#181818] mb-8">Informasi Kontak</h2>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <span className="text-2xl shrink-0">📍</span>
                  <div>
                    <p className="font-semibold text-[#181818] mb-1">Alamat</p>
                    <p className="text-[#7a7a7a] text-sm leading-relaxed">
                      Jl. Wonocatur No.427, Jeruklegi,<br />
                      Banguntapan, Kotagede,<br />
                      D.I. Yogyakarta
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl shrink-0">📱</span>
                  <div>
                    <p className="font-semibold text-[#181818] mb-1">WhatsApp</p>
                    <a href="https://wa.me/6287818310416" className="text-[#3631ee] text-sm hover:underline">
                      0878-1831-0416
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl shrink-0">✉️</span>
                  <div>
                    <p className="font-semibold text-[#181818] mb-1">Email</p>
                    <a href="mailto:order@ayresapparel.com" className="text-[#3631ee] text-sm hover:underline block">
                      order@ayresapparel.com
                    </a>
                    <a href="mailto:pengaduan@ayresapparel.com" className="text-[#3631ee] text-sm hover:underline block">
                      pengaduan@ayresapparel.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl shrink-0">🕐</span>
                  <div>
                    <p className="font-semibold text-[#181818] mb-1">Jam Operasional</p>
                    <p className="text-[#7a7a7a] text-sm">Senin – Sabtu: 09.00 – 16.30</p>
                    <p className="text-[#7a7a7a] text-sm">Minggu: Tutup</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-bold text-[#181818] mb-4">Social Media</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { href: "https://www.instagram.com/ayresapparel", label: "Instagram" },
                    { href: "https://www.tiktok.com/@ayres_apparel", label: "TikTok" },
                    { href: "https://www.facebook.com/ayresapparel", label: "Facebook" },
                    { href: "https://www.youtube.com/@ayresapparel", label: "YouTube" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#f7f6fa] border border-[#e5e5e5] rounded-lg px-4 py-2 text-sm font-semibold text-[#181818] hover:border-[#3631ee] hover:text-[#3631ee] transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#181818] mb-8">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#181818] mb-2">Nama</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Nama kamu"
                      className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 text-sm text-[#181818] focus:outline-none focus:border-[#3631ee] placeholder:text-[#aaa]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#181818] mb-2">No. HP / WA</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="08xx-xxxx-xxxx"
                      className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 text-sm text-[#181818] focus:outline-none focus:border-[#3631ee] placeholder:text-[#aaa]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#181818] mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email@kamu.com"
                    className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 text-sm text-[#181818] focus:outline-none focus:border-[#3631ee] placeholder:text-[#aaa]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#181818] mb-2">Subjek</label>
                  <input
                    name="subject"
                    type="text"
                    required
                    placeholder="Subjek pesan"
                    className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 text-sm text-[#181818] focus:outline-none focus:border-[#3631ee] placeholder:text-[#aaa]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#181818] mb-2">Pesan</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tulis pesanmu di sini..."
                    className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 text-sm text-[#181818] focus:outline-none focus:border-[#3631ee] placeholder:text-[#aaa] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#3631ee] text-white font-bold py-4 rounded-lg hover:bg-[#2825cc] transition-colors uppercase"
                >
                  Kirim via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
