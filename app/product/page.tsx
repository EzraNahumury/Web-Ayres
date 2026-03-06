import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk",
  description: "Katalog jersey custom Ayres Apparel – Classic dan Pro package.",
};

const katalog = [
  {
    id: "adi-vira",
    name: "Adi Vira",
    package: "Classic",
    tagline: "Tampilan tim jadi lebih rapi dan profesional.",
    pola: 3,
    images: ["/katalog/katalog classic Adi Vira/1.png"],
  },
  {
    id: "cakra-vega",
    name: "Cakra Vega",
    package: "Classic",
    tagline: "Membuat tim terlihat cepat dan agresif sejak awal laga.",
    pola: 6,
    images: [
      "/katalog/katalog classic Cakra Vega/1.png",
      "/katalog/katalog classic Cakra Vega/2.png",
    ],
  },
  {
    id: "bima-sena",
    name: "Bima Sena",
    package: "Pro",
    tagline: "Memberi kesan tim kuat dan sulit ditaklukkan.",
    pola: 6,
    images: [
      "/katalog/katalog pro Bima Sena/1.png",
      "/katalog/katalog pro Bima Sena/2.png",
    ],
  },
  {
    id: "garuda-vastra",
    name: "Garuda Vastra",
    package: "Pro",
    tagline: "Bikin tim kamu terlihat lebih gagah dan elegan dari tim lain.",
    pola: 6,
    images: [
      "/katalog/katalog pro Garuda Vastra/1.png",
      "/katalog/katalog pro Garuda Vastra/2.png",
    ],
  },
];

export default function ProductPage() {
  const classicItems = katalog.filter((k) => k.package === "Classic");
  const proItems = katalog.filter((k) => k.package === "Pro");

  return (
    <div className="text-white">

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[#1a1a1a]">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute top-[-20%] left-[-5%] w-[600px] h-[600px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #e03030 0%, transparent 70%)", filter: "blur(80px)" }}
          />
          <div
            className="absolute bottom-[-20%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)", filter: "blur(70px)" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">
          <div className="flex items-center gap-2 mb-10">
            <span className="w-6 h-px bg-[#e03030]" />
            <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.3em]">
              Home &rsaquo; Produk
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            {/* Kiri */}
            <div>
              <h1
                className="text-white font-black uppercase leading-[0.88] tracking-tight mb-6"
                style={{ fontSize: "clamp(3.2rem, 6vw, 5rem)" }}
              >
                Katalog<br />
                <span style={{ background: "linear-gradient(135deg, #e03030, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Jersey
                </span><br />
                Ayres.
              </h1>
              <p className="text-[#555] text-sm leading-relaxed max-w-xs">
                Pilih pola jersey terbaik dari koleksi Classic dan Pro kami. Setiap desain lahir dari teknologi Patren Lab Ayres.
              </p>
            </div>

            {/* Kanan — info */}
            <div className="flex flex-col gap-px">
              <div className="border border-[#1e1e1e] overflow-hidden">
                <div className="h-[2px] w-full bg-gradient-to-r from-[#e03030] to-[#a78bfa]" />
                <div className="grid grid-cols-3 divide-x divide-[#1a1a1a]">
                  {[
                    { num: "4", label: "Katalog Tersedia" },
                    { num: "21", label: "Total Pola" },
                    { num: "2", label: "Package Tier" },
                  ].map((s) => (
                    <div key={s.label} className="px-6 py-6 flex flex-col gap-1.5">
                      <p
                        className="text-3xl font-black"
                        style={{ background: "linear-gradient(135deg, #e03030, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                      >
                        {s.num}
                      </p>
                      <p className="text-[#2a2a2a] text-[9px] uppercase tracking-[0.15em] font-semibold leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-[#1e1e1e] border-t-0 px-6 py-4 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e03030]" />
                  <span className="text-[#444] text-xs uppercase tracking-[0.15em] font-bold">Classic</span>
                </div>
                <div className="w-px h-3 bg-[#1e1e1e]" />
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#a78bfa]" />
                  <span className="text-[#444] text-xs uppercase tracking-[0.15em] font-bold">Pro</span>
                </div>
                <div className="ml-auto">
                  <p className="text-[#222] text-[10px] uppercase tracking-[0.2em]">#PolaAyresBedaKelas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Classic Package ─────────────────────────────── */}
      <section className="border-b border-[#1a1a1a] py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Section label */}
          <div className="flex items-center gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#e03030]" />
                <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.3em]">Classic Package</p>
              </div>
              <h2
                className="text-white font-black uppercase leading-none"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
              >
                Koleksi Classic
              </h2>
            </div>
            <div className="hidden md:block flex-1 h-px bg-[#1a1a1a]" />
            <p className="hidden md:block text-[#333] text-xs uppercase tracking-[0.2em]">
              {classicItems.length} Katalog
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {classicItems.map((item) => (
              <KatalogCard key={item.id} item={item} accentColor="#e03030" />
            ))}
          </div>

        </div>
      </section>

      {/* ── Pro Package ─────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Section label */}
          <div className="flex items-center gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#a78bfa]" />
                <p className="text-[#a78bfa] text-[10px] font-bold uppercase tracking-[0.3em]">Pro Package</p>
              </div>
              <h2
                className="text-white font-black uppercase leading-none"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
              >
                Koleksi Pro
              </h2>
            </div>
            <div className="hidden md:block flex-1 h-px bg-[#1a1a1a]" />
            <p className="hidden md:block text-[#333] text-xs uppercase tracking-[0.2em]">
              {proItems.length} Katalog
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {proItems.map((item) => (
              <KatalogCard key={item.id} item={item} accentColor="#a78bfa" />
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA Bottom ──────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-[#1a1a1a] py-24">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{ background: "radial-gradient(ellipse at 50% 100%, #e03030 0%, transparent 60%)", filter: "blur(60px)" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Custom Order</p>
          <h2
            className="text-white font-black uppercase leading-none mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            Tidak menemukan<br />pola yang cocok?
          </h2>
          <p className="text-[#555] text-sm leading-relaxed max-w-md mx-auto mb-10">
            Tim desainer kami siap membuat pola jersey custom sesuai keinginan kamu dari nol.
          </p>
          <a
            href="https://wa.me/6287818310416?text=Halo%20Ayres%20Apparel%2C%20saya%20ingin%20custom%20desain%20jersey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-white text-sm font-bold px-10 py-4 rounded-full transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #e03030, #a78bfa)" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.875L.057 23.077a.75.75 0 00.866.866l5.202-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 01-4.964-1.356l-.356-.212-3.688 1.048 1.048-3.688-.212-.356A9.75 9.75 0 1112 21.75z" />
            </svg>
            Konsultasi Desain Gratis
          </a>
        </div>
      </section>

    </div>
  );
}

function KatalogCard({
  item,
  accentColor,
}: {
  item: (typeof katalog)[number];
  accentColor: string;
}) {
  const waText = encodeURIComponent(
    `Halo Ayres Apparel, saya tertarik dengan katalog ${item.name} (${item.package} Package). Boleh info lebih lanjut?`
  );

  return (
    <div className="group relative bg-[#0a0a0a] overflow-hidden hover:bg-[#0d0d0d] transition-colors duration-300 flex flex-col">
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 z-10"
        style={{ background: `linear-gradient(90deg, ${accentColor}, #a78bfa)` }}
      />

      {/* Images */}
      <div className="relative flex gap-1 bg-[#111] overflow-hidden" style={{ height: 560 }}>
        {item.images.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden"
            style={{ flex: 1 }}
          >
            <Image
              src={src}
              alt={`${item.name} katalog ${i + 1}`}
              fill
              className="object-contain group-hover:scale-[1.02] transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}

        {/* Package badge — over image */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5"
            style={{ background: accentColor === "#e03030" ? "rgba(224,48,48,0.9)" : "rgba(167,139,250,0.9)" }}
          >
            {item.package}
          </span>
        </div>

        {/* Pola count badge */}
        <div className="absolute top-4 right-4 z-10 text-right">
          <span className="text-white text-[9px] font-bold uppercase tracking-[0.15em] bg-black/70 px-3 py-1.5">
            {item.pola} Pola
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-4 px-8 py-7 flex-1">
        {/* Name + divider */}
        <div>
          <h3
            className="text-white font-black uppercase leading-none tracking-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
          >
            {item.name}
          </h3>
          <div
            className="w-8 h-px group-hover:w-16 transition-all duration-500"
            style={{ background: accentColor }}
          />
        </div>

        {/* Tagline */}
        <p className="text-[#555] text-xs leading-relaxed italic group-hover:text-[#777] transition-colors duration-300">
          &ldquo;{item.tagline}&rdquo;
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 mt-auto border-t border-[#1a1a1a]">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-white text-xs font-black uppercase">{item.pola} Pola</p>
              <p className="text-[#333] text-[9px] uppercase tracking-[0.15em]">Tersedia</p>
            </div>
            <div className="w-px h-6 bg-[#1a1a1a]" />
            <div>
              <p
                className="text-xs font-black uppercase"
                style={{ color: accentColor }}
              >
                {item.package}
              </p>
              <p className="text-[#333] text-[9px] uppercase tracking-[0.15em]">Package</p>
            </div>
          </div>

          <a
            href={`https://wa.me/6287818310416?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white text-[10px] font-black uppercase tracking-[0.1em] px-5 py-2.5 border border-[#1e1e1e] hover:border-transparent transition-all duration-300 group/btn relative overflow-hidden"
          >
            <span
              className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(135deg, ${accentColor}, #a78bfa)` }}
            />
            <span className="relative">Order →</span>
          </a>
        </div>
      </div>
    </div>
  );
}
