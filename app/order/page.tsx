import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order",
  description: "Cara pesan jersey custom di Ayres Apparel – mudah, cepat, dan terpercaya.",
};

const steps = [
  {
    number: "01",
    title: "Hubungi Customer Service",
    desc: "Chat via WhatsApp atau form kontak kami untuk mulai pemesanan.",
    tag: "Kontak",
  },
  {
    number: "02",
    title: "Tentukan Desain",
    desc: "Diskusikan desain jersey yang kamu inginkan bersama tim desainer kami.",
    tag: "Desain",
  },
  {
    number: "03",
    title: "Down Payment (DP)",
    desc: "Lakukan pembayaran uang muka untuk mengkonfirmasi pesanan.",
    tag: "Pembayaran",
  },
  {
    number: "04",
    title: "Invoice & Antrian",
    desc: "Kami akan kirimkan invoice dan posisi antrian produksi kamu.",
    tag: "Konfirmasi",
  },
  {
    number: "05",
    title: "Proses Produksi",
    desc: "Jersey kamu mulai diproduksi oleh tim profesional kami.",
    tag: "Produksi",
  },
  {
    number: "06",
    title: "Pelunasan",
    desc: "Selesaikan pembayaran sebelum pesanan dikirim.",
    tag: "Pembayaran",
  },
  {
    number: "07",
    title: "Pengiriman",
    desc: "Jersey dikemas dengan aman dan dikirim ke alamat kamu.",
    tag: "Pengiriman",
  },
  {
    number: "08",
    title: "Produk Sampai",
    desc: "Jersey custom impian kamu sudah siap dipakai!",
    tag: "Selesai",
  },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "Custom"];

export default function OrderPage() {
  return (
    <div className="text-white">

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[#1a1a1a]">
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #e03030 0%, transparent 70%)", filter: "blur(80px)" }}
          />
          <div
            className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)", filter: "blur(70px)" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10">
            <span className="w-6 h-px bg-[#e03030]" />
            <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.3em]">
              Home &rsaquo; Order
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Kiri */}
            <div className="flex flex-col gap-8">
              <h1
                className="text-white font-black uppercase leading-[0.88] tracking-tight"
                style={{ fontSize: "clamp(3.2rem, 6vw, 5rem)" }}
              >
                Cara<br />
                <span style={{ background: "linear-gradient(135deg, #e03030, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Order
                </span><br />
                Jersey.
              </h1>
              <p className="text-[#555] text-sm leading-relaxed max-w-xs">
                Proses mudah, cepat, dan transparan. Ikuti 8 langkah berikut untuk mendapatkan jersey custom impianmu.
              </p>
              <a
                href="https://wa.me/6287818310416?text=Halo%20Ayres%20Apparel%2C%20saya%20mau%20order%20jersey%20custom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white text-xs font-bold px-6 py-3 rounded-full transition-all hover:opacity-80 w-fit"
                style={{ background: "linear-gradient(135deg, #e03030, #a78bfa)" }}
              >
                Mulai Order Sekarang →
              </a>
            </div>

            {/* Kanan — card */}
            <div className="flex flex-col gap-px">

              {/* Pricing highlight */}
              <div className="relative border border-[#1e1e1e] overflow-hidden">
                <div className="h-[2px] w-full bg-gradient-to-r from-[#e03030] to-[#a78bfa]" />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(224,48,48,0.07) 0%, transparent 60%)" }}
                />
                <div className="px-8 py-7 flex items-center justify-between">
                  <div>
                    <p className="text-[#333] text-[10px] uppercase tracking-[0.25em] font-bold mb-1">Mulai dari</p>
                    <p
                      className="text-4xl font-black tracking-tight"
                      style={{ background: "linear-gradient(135deg, #e03030, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    >
                      Rp 70.000
                    </p>
                    <p className="text-[#333] text-[10px] mt-1 uppercase tracking-[0.15em]">per jersey</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#1e1e1e] text-[9px] uppercase tracking-[0.2em] font-bold">No Hidden</p>
                    <p className="text-[#1e1e1e] text-[9px] uppercase tracking-[0.2em] font-bold">Cost</p>
                  </div>
                </div>
              </div>

              {/* Benefit list */}
              <div className="border border-[#1e1e1e] border-t-0 divide-y divide-[#1a1a1a]">
                {[
                  { icon: "✦", text: "Tanpa Minimum Order", sub: "1 pcs pun kami kerjakan" },
                  { icon: "✦", text: "Same Day Production", sub: "Pesan hari ini, besok jadi" },
                  { icon: "✦", text: "Deadline Terjamin", sub: "Pola Ayres beda kelas" },
                  { icon: "✦", text: "Desainer Profesional", sub: "Konsultasi desain gratis" },
                ].map((item) => (
                  <div key={item.text} className="group flex items-center gap-5 px-8 py-4 hover:bg-[#0d0d0d] transition-colors duration-200">
                    <span
                      className="text-xs shrink-0"
                      style={{ background: "linear-gradient(135deg, #e03030, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    >
                      {item.icon}
                    </span>
                    <div className="flex items-center justify-between w-full">
                      <p className="text-white text-xs font-bold uppercase tracking-wide">{item.text}</p>
                      <p className="text-[#333] text-[10px] group-hover:text-[#555] transition-colors duration-200 hidden sm:block">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 divide-x divide-[#1a1a1a] border border-[#1e1e1e] border-t-0">
                {[
                  { num: "8", label: "Langkah" },
                  { num: "Cepat", label: "Same Day" },
                  { num: "0 MOQ", label: "Min Order" },
                ].map((s) => (
                  <div key={s.label} className="px-5 py-5 flex flex-col gap-1">
                    <p className="text-white text-xl font-black">{s.num}</p>
                    <p className="text-[#2a2a2a] text-[9px] uppercase tracking-[0.15em] font-semibold">{s.label}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── How To Order ───────────────────────────────── */}
      <section className="border-b border-[#1a1a1a] py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                How To Order
              </p>
              <h2
                className="text-white font-black uppercase leading-none"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
              >
                Cara Pemesanan
              </h2>
            </div>
            <p className="text-[#555] text-sm max-w-[220px] md:text-right leading-relaxed hidden md:block">
              Delapan langkah untuk mendapatkan jersey custom terbaik.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="group relative bg-[#0a0a0a] px-8 py-8 flex gap-6 items-start hover:bg-[#0d0d0d] transition-colors duration-300 overflow-hidden"
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#e03030] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Subtle glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(224,48,48,0.05) 0%, transparent 60%)" }}
                />

                {/* Number */}
                <div className="shrink-0">
                  <span className="text-[#1e1e1e] text-5xl font-black leading-none group-hover:text-[#e03030]/20 transition-colors duration-300 select-none">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 pt-1">
                  <span className="text-[#333] text-[9px] uppercase tracking-[0.2em] font-bold group-hover:text-[#e03030] transition-colors duration-300">
                    {step.tag}
                  </span>
                  <h3 className="text-white text-sm font-black uppercase leading-snug tracking-wide">
                    {step.title}
                  </h3>
                  <div className="w-6 h-px bg-[#e03030]/40 group-hover:w-12 transition-all duration-500" />
                  <p className="text-[#555] text-xs leading-relaxed group-hover:text-[#777] transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/6287818310416?text=Halo%20Ayres%20Apparel%2C%20saya%20mau%20order%20jersey%20custom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-white text-sm font-bold px-8 py-4 rounded-full transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #e03030, #a78bfa)" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.875L.057 23.077a.75.75 0 00.866.866l5.202-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 01-4.964-1.356l-.356-.212-3.688 1.048 1.048-3.688-.212-.356A9.75 9.75 0 1112 21.75z" />
              </svg>
              Mulai Order Sekarang
            </a>
          </div>

        </div>
      </section>

      {/* ── Size Guide ─────────────────────────────────── */}
      <section className="border-b border-[#1a1a1a] py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                Size Guide
              </p>
              <h2
                className="text-white font-black uppercase leading-none"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
              >
                Ukuran &amp; Size Chart
              </h2>
            </div>
            <p className="text-[#555] text-sm max-w-[220px] md:text-right leading-relaxed hidden md:block">
              Tersedia dari XS hingga ukuran custom sesuai kebutuhan tim kamu.
            </p>
          </div>

          {/* Size chips */}
          <div className="flex flex-wrap gap-2 mb-12">
            {sizes.map((size) => (
              <div
                key={size}
                className="group relative border border-[#1e1e1e] px-6 py-3 hover:border-[#e03030]/40 transition-all duration-300 overflow-hidden cursor-default"
              >
                <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#e03030] to-[#a78bfa] transition-all duration-500" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(224,48,48,0.06) 0%, transparent 70%)" }}
                />
                <span className="relative text-white text-sm font-black uppercase tracking-wider">
                  {size === "Custom" ? (
                    <span style={{ background: "linear-gradient(135deg, #e03030, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      {size}
                    </span>
                  ) : size}
                </span>
              </div>
            ))}
          </div>

          {/* Size chart images */}
          <div className="grid md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {[
              { src: "/Size Chart/1.png", label: "Size Chart Reguler", desc: "Dewasa, Anak & Wanita" },
              { src: "/Size Chart/2.png", label: "Size Chart Oversize", desc: "Oversize & Celana Jersey" },
            ].map((chart) => (
              <div key={chart.label} className="group relative bg-[#0a0a0a] overflow-hidden hover:bg-[#0d0d0d] transition-colors duration-300">
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#e03030] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Label */}
                <div className="px-8 pt-8 pb-4 flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-black uppercase tracking-wide">{chart.label}</p>
                    <p className="text-[#444] text-xs mt-0.5 uppercase tracking-[0.15em]">{chart.desc}</p>
                  </div>
                  <span className="text-[#1e1e1e] text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-[#e03030] transition-colors duration-300">
                    Ayres Apparel
                  </span>
                </div>

                {/* Image */}
                <div className="relative w-full px-4 pb-6">
                  <div className="relative w-full overflow-hidden border border-[#1a1a1a] group-hover:border-[#e03030]/20 transition-colors duration-500">
                    <Image
                      src={chart.src}
                      alt={chart.label}
                      width={800}
                      height={900}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#666] text-xs text-center mt-6 uppercase tracking-[0.15em]">
            *Hubungi CS untuk konsultasi ukuran lebih lanjut
          </p>

        </div>
      </section>

      {/* ── Payment ────────────────────────────────────── */}
      <section className="border-b border-[#1a1a1a] py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Kiri */}
            <div>
              <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                Payment
              </p>
              <h2
                className="text-white font-black uppercase leading-none mb-6"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
              >
                Informasi<br />Pembayaran
              </h2>
              <div className="flex flex-col gap-3 text-[#555] text-sm leading-relaxed">
                <p>Pembayaran dilakukan dua tahap — DP untuk konfirmasi pesanan, dan pelunasan sebelum produk dikirim.</p>
                <p>Konfirmasi transfer via WhatsApp CS kami setelah melakukan pembayaran.</p>
              </div>
            </div>

            {/* Kanan — payment card */}
            <div className="relative group">
              <div
                className="absolute inset-0 rounded-none opacity-30 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, #e03030 0%, transparent 70%)", filter: "blur(40px)" }}
              />
              <div className="relative border border-[#1e1e1e] group-hover:border-[#e03030]/30 transition-all duration-500 overflow-hidden">
                {/* Top accent */}
                <div className="h-[2px] w-full bg-gradient-to-r from-[#e03030] to-[#a78bfa]" />

                <div className="px-10 py-10 flex flex-col gap-6">
                  {/* Bank label */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#333] text-[10px] uppercase tracking-[0.25em] font-bold mb-1">Transfer Bank</p>
                      <p className="text-white text-2xl font-black uppercase tracking-wide">BCA</p>
                    </div>
                    <div
                      className="w-10 h-10 flex items-center justify-center border border-[#1e1e1e]"
                      style={{ background: "linear-gradient(135deg, #e03030, #a78bfa)" }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#1a1a1a]" />

                  {/* Account number */}
                  <div>
                    <p className="text-[#333] text-[10px] uppercase tracking-[0.2em] mb-2">Nomor Rekening</p>
                    <p
                      className="font-black text-4xl tracking-widest"
                      style={{ background: "linear-gradient(135deg, #e03030, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    >
                      456 123 789
                    </p>
                    <p className="text-[#444] text-xs mt-2 uppercase tracking-[0.15em]">a.n. Ayres</p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#1a1a1a]" />

                  {/* Note */}
                  <p className="text-[#333] text-xs leading-relaxed">
                    Konfirmasi pembayaran via WhatsApp dengan mengirimkan bukti transfer.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Corporate ──────────────────────────────────── */}
      <section className="relative overflow-hidden py-32">
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: "linear-gradient(160deg, #0d0d1a 0%, #0a0a0a 50%, #0f0a1a 100%)" }}
        />
        {/* Glow left */}
        <div
          className="absolute z-0 w-[700px] h-[700px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #e03030 0%, transparent 70%)", filter: "blur(100px)", top: "50%", left: "-10%", transform: "translateY(-50%)" }}
        />
        {/* Glow right */}
        <div
          className="absolute z-0 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)", filter: "blur(80px)", top: "50%", right: "-5%", transform: "translateY(-50%)" }}
        />
        {/* Horizontal rule top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e03030]/30 to-transparent z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* Header — centered */}
          <div className="text-center mb-16">
            <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
              Corporate Order
            </p>
            <h2
              className="text-white font-black uppercase leading-none mb-6"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
            >
              Pesanan
              <br />
              <span style={{ background: "linear-gradient(135deg, #e03030, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Korporasi
              </span>
            </h2>
            <p className="text-[#555] text-sm leading-relaxed max-w-lg mx-auto">
              Butuh jersey dalam jumlah besar untuk perusahaan, instansi, atau event?
              Kami menyediakan layanan korporasi dengan harga spesial dan penanganan prioritas.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a] mb-12">
            {[
              { num: "01", title: "Harga Spesial", desc: "Diskon volume untuk pesanan dalam jumlah besar." },
              { num: "02", title: "Account Manager", desc: "Dedicated CS khusus siap membantu dari awal hingga selesai." },
              { num: "03", title: "Produksi Prioritas", desc: "Antrian prioritas, deadline dijamin tepat waktu." },
              { num: "04", title: "Invoice Resmi", desc: "Dokumen resmi, PO tersedia untuk kebutuhan korporasi." },
            ].map((item) => (
              <div
                key={item.num}
                className="group relative bg-[#0a0a0a] px-6 py-8 flex flex-col gap-4 hover:bg-[#0d0d0d] transition-colors duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#e03030] to-[#a78bfa] transition-all duration-500" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(224,48,48,0.06) 0%, transparent 65%)" }}
                />
                <span className="text-[#1e1e1e] text-3xl font-black leading-none group-hover:text-[#e03030]/20 transition-colors duration-300 select-none">
                  {item.num}
                </span>
                <div className="w-6 h-px bg-[#e03030]/40 group-hover:w-10 transition-all duration-500" />
                <div>
                  <p className="text-white text-xs font-black uppercase tracking-wide mb-2">{item.title}</p>
                  <p className="text-[#444] text-xs leading-relaxed group-hover:text-[#666] transition-colors duration-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

    </div>
  );
}
