import Image from "next/image";
import type { Metadata } from "next";
import DecryptedText from "@/components/DecryptedText";

export const metadata: Metadata = {
  title: "Company",
  description: "Ayres Apparel – produsen jersey custom dengan tema nusantara, harga terjangkau, kualitas internasional.",
};

const stats = [
  { number: "10+", label: "Years Experienced" },
  { number: "2.600+", label: "Team Custom Jersey" },
  { number: "35.000+", label: "Pcs Diproduksi" },
  { number: "100%", label: "Garansi Kualitas" },
];

const values = [
  {
    num: "01",
    title: "Kualitas Tanpa Kompromi",
    desc: "Setiap jersey diproduksi dengan bahan pilihan dan QC ketat. Hasilnya harus sempurna sebelum sampai ke tangan kamu.",
  },
  {
    num: "02",
    title: "Harga yang Jujur",
    desc: "Tidak ada biaya tersembunyi. Harga yang kamu lihat adalah harga yang kamu bayar — transparan dari awal.",
  },
  {
    num: "03",
    title: "Produksi Cepat",
    desc: "Pesan hari ini, besok jadi. Kami paham bahwa waktu adalah prioritas, terutama menjelang turnamen.",
  },
  {
    num: "04",
    title: "Layanan Personal",
    desc: "Dari konsultasi desain hingga after-sales, kami ada di setiap langkah perjalananmu.",
  },
];


export default function CompanyPage() {
  return (
    <div className="text-white">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="border-b border-[#1a1a1a] pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Kiri — teks */}
          <div className="flex flex-col gap-10">
            {/* Label + heading */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-[#e03030]" />
                <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.3em]">Company</p>
              </div>
              <h1 className="text-6xl font-black uppercase leading-[0.88] tracking-tight">
                Ayres<br />Apparel.
              </h1>
            </div>

            {/* Divider + desc */}
            <div className="border-l-2 border-[#e03030]/30 pl-5">
              <p className="text-[#777] text-sm leading-relaxed">
                Produsen jersey custom berbasis di Bantul, Yogyakarta.<br />
                Kualitas internasional, harga terjangkau, semangat nusantara.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 divide-x divide-[#1a1a1a] border border-[#1a1a1a]">
              {[
                { num: "10+", label: "Years Experienced" },
                { num: "2.600+", label: "Team Custom Jersey" },
                { num: "35.000+", label: "Pcs Diproduksi" },
              ].map((s) => (
                <div key={s.label} className="px-5 py-5 flex flex-col gap-1.5">
                  <p className="text-white text-2xl font-black">
                    <DecryptedText
                      text={s.num}
                      animateOn="view"
                      sequential
                      revealDirection="start"
                      speed={40}
                      characters="0123456789"
                    />
                  </p>
                  <p className="text-[#3a3a3a] text-[9px] uppercase tracking-[0.15em] font-semibold leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kanan — logo besar */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Glow behind logo */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ background: 'radial-gradient(circle, #e03030, transparent)' }} />
              <Image
                src="/gambar/new logo.png"
                alt="Ayres Apparel"
                width={360}
                height={110}
                className="relative brightness-0 invert opacity-90 object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Who We Are ───────────────────────────── */}
      <section className="border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

          {/* Kiri — teks */}
          <div>
            <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-8">
              The Home Of<br />Serious Custom Jersey.
            </h2>
            <div className="flex flex-col gap-4 text-[#666] text-sm leading-relaxed">
              <p>
                Ayres Apparel adalah produsen jersey custom yang mengutamakan tema dan nilai nusantara.
                Kami hadir untuk membuktikan bahwa jersey berkualitas internasional bisa didapat dengan harga yang sangat terjangkau.
              </p>
              <p>
                Dengan kapasitas produksi mencapai ribuan unit per bulan dan opsi produksi same-day,
                kami siap melayani kebutuhan tim, komunitas, hingga korporasi di seluruh Indonesia.
              </p>
              <p>
                <span className="text-white font-semibold">Kepercayaan adalah hal yang sangat berharga</span> bagi kami.
                Setiap pesanan ditangani dengan dedikasi penuh oleh tim yang berpengalaman.
              </p>
            </div>
          </div>

          {/* Kanan — pillar cards */}
          <div className="grid grid-cols-2 gap-px bg-[#1a1a1a]">
            {[
              { num: "01", title: "Deadline Aman", desc: "Produksi cepat, tepat waktu, tanpa kompromi kualitas." },
              { num: "02", title: "Patren Lab Technology", desc: "Pola presisi tinggi dari lab khusus, nyaman dan beda kelas." },
              { num: "03", title: "No Minimum Order", desc: "Satu biji pun kami kerjakan dengan standar yang sama." },
              { num: "04", title: "Harga Terjangkau", desc: "Mulai Rp 70.000, kualitas internasional tanpa harga selangit." },
            ].map((item) => (
              <div key={item.num} className="group bg-[#0a0a0a] px-6 py-8 flex flex-col gap-3 hover:bg-[#0f0f0f] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#e03030] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-[#222] text-[10px] font-black tracking-[0.2em] group-hover:text-[#e03030] transition-colors duration-300">{item.num}</span>
                <p className="text-white text-sm font-black uppercase leading-tight">{item.title}</p>
                <p className="text-[#444] text-xs leading-relaxed group-hover:text-[#666] transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── Values ───────────────────────────────── */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .value-card {
          opacity: 0;
          animation: fadeSlideUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }
      `}</style>
      <section className="border-b border-[#1a1a1a] py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Our Values</p>
              <h2 className="text-white font-black uppercase leading-none" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)' }}>
                Why Ayres?
              </h2>
            </div>
            <p className="text-[#666] text-sm max-w-[260px] md:text-right leading-relaxed hidden md:block">
              Empat prinsip yang menjadi fondasi setiap keputusan yang kami buat.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div
                key={v.num}
                className="value-card group relative bg-[#0d0d0d] border border-[#1e1e1e] p-7 flex flex-col gap-5 hover:border-[#e03030]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* top accent line */}
                <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#e03030] to-[#a78bfa] transition-all duration-500" />
                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 0% 0%, rgba(224,48,48,0.07) 0%, transparent 65%)' }} />
                {/* number */}
                <span className="text-[#333] text-4xl font-black leading-none group-hover:text-[#e03030]/50 transition-colors duration-300 select-none">{v.num}</span>
                {/* divider */}
                <div className="w-8 h-px bg-[#e03030]/50 group-hover:w-full transition-all duration-500" />
                {/* content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-white text-sm font-black uppercase leading-snug tracking-wide">{v.title}</h3>
                  <p className="text-[#666] text-xs leading-relaxed group-hover:text-[#999] transition-colors duration-300">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Founder ──────────────────────────────── */}
      <section className="border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-14">
            <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">Founder & CEO</p>
            <h2 className="text-3xl font-black uppercase">The Man Behind Ayres</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start max-w-2xl">
            {/* Photo */}
            <div className="group relative shrink-0 w-56 overflow-hidden border border-[#1a1a1a] hover:border-[#e03030]/30 transition-all duration-300">
              <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#e03030] to-[#a78bfa] transition-all duration-500 z-10" />
              <Image
                src="/ceo/Profile Photo - Mas Arya Rahadhyan.jpg.jpeg"
                alt="Arya Chandra Rahadhyan"
                width={224}
                height={280}
                className="w-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                style={{ aspectRatio: '4/5' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                <p className="text-[#e03030] text-[9px] font-bold uppercase tracking-[0.2em]">CEO & Founder</p>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-white text-2xl font-black uppercase leading-tight mb-1">
                  Arya Chandra<br />Rahadhyan
                </h3>
                <p className="text-[#555] text-xs uppercase tracking-[0.2em]">Pendiri & Pemilik Ayres Apparel</p>
              </div>
              <div className="w-8 h-px bg-[#e03030]/50" />
              <p className="text-[#666] text-sm leading-relaxed max-w-sm">
                Membangun Ayres Apparel dari nol dengan visi membawa jersey custom berkualitas internasional ke tangan semua kalangan — dari tim kampus hingga klub profesional.
              </p>
              <p className="text-[#333] text-xs italic">
                "Pola Ayres Beda Kelas."
              </p>

              {/* Socials */}
              <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/6282226508883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/s flex items-center justify-center w-9 h-9 border border-[#1e1e1e] hover:border-[#25d366]/40 transition-all duration-300"
                  title="WhatsApp"
                >
                  <svg className="w-4 h-4 text-[#555] group-hover/s:text-[#25d366] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.875L.057 23.077a.75.75 0 00.866.866l5.202-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 01-4.964-1.356l-.356-.212-3.688 1.048 1.048-3.688-.212-.356A9.75 9.75 0 1112 21.75z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/arya_rahadhyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/s flex items-center justify-center w-9 h-9 border border-[#1e1e1e] hover:border-[#e1306c]/40 transition-all duration-300"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 text-[#555] group-hover/s:text-[#e1306c] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@AryaRahadhyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/s flex items-center justify-center w-9 h-9 border border-[#1e1e1e] hover:border-[#ff0000]/40 transition-all duration-300"
                  title="YouTube"
                >
                  <svg className="w-4 h-4 text-[#555] group-hover/s:text-[#ff0000] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/arya-chandra-1ba8b4363/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/s flex items-center justify-center w-9 h-9 border border-[#1e1e1e] hover:border-[#0a66c2]/40 transition-all duration-300"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 text-[#555] group-hover/s:text-[#0a66c2] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>


          </div>
        </div>
      </section>


    </div>
  );
}
