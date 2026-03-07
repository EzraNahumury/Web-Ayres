import Image from "next/image";
import type { Metadata } from "next";
import { ProductCarousel } from "./ProductCarousel";

export const metadata: Metadata = {
  title: "Produk",
  description: "Katalog jersey custom Ayres Apparel – Classic dan Pro package.",
};

export default function ProductPage() {
  return (
    <div className="text-white">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[#141414]">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute -top-32 -left-20 w-[700px] h-[600px] opacity-[0.06] rounded-full"
            style={{ background: "radial-gradient(circle, #e03030, transparent 65%)", filter: "blur(80px)" }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-[500px] h-[500px] opacity-[0.05] rounded-full"
            style={{ background: "radial-gradient(circle, #a78bfa, transparent 65%)", filter: "blur(80px)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
          <div className="flex items-center gap-2 mb-12">
            <span className="w-5 h-px bg-[#e03030]" />
            <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.35em]">
              Home &rsaquo; Produk
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-end">
            <div>
              <h1
                className="text-white font-black uppercase leading-[0.88] tracking-tight mb-6"
                style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
              >
                Katalog<br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #e03030 0%, #a78bfa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Jersey
                </span>
                <br />
                Ayres.
              </h1>
              <p className="text-[#484848] text-sm leading-relaxed max-w-sm">
                Pilih pola jersey terbaik dari koleksi Classic dan Pro kami. Setiap desain lahir dari teknologi Patren Lab Ayres.
              </p>
            </div>

            <div className="flex flex-col divide-y divide-[#141414] border border-[#141414]">
              {[
                { num: "4", label: "Katalog Tersedia", sub: "Classic & Pro" },
                { num: "21", label: "Total Pola", sub: "Pilihan desain" },
                { num: "2", label: "Package Tier", sub: "Classic · Pro" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-6 px-6 py-5">
                  <p
                    className="text-4xl font-black w-20 shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #e03030, #a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {s.num}
                  </p>
                  <div>
                    <p className="text-white text-xs font-bold uppercase tracking-wide">{s.label}</p>
                    <p className="text-[#303030] text-[10px] uppercase tracking-[0.15em] mt-0.5">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3D Carousel ──────────────────────────────────── */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#e03030]" />
                <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.3em]">
                  Koleksi Lengkap
                </p>
              </div>
              <h2
                className="text-white font-black uppercase leading-none"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
              >
                Semua Katalog
              </h2>
            </div>
            <div className="hidden md:block flex-1 h-px bg-[#141414]" />
            <p className="hidden md:block text-[#2a2a2a] text-xs uppercase tracking-[0.2em] font-semibold">
              4 Katalog
            </p>
          </div>

          <ProductCarousel />
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-[#141414] py-24">
        <div
          className="absolute inset-0 z-0 opacity-[0.18]"
          style={{
            background: "radial-gradient(ellipse at 50% 110%, #e03030 0%, transparent 55%)",
            filter: "blur(60px)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.4em] mb-5">
            Custom Order
          </p>
          <h2
            className="text-white font-black uppercase leading-none mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            Tidak menemukan<br />pola yang cocok?
          </h2>
          <p className="text-[#484848] text-sm leading-relaxed max-w-md mx-auto mb-10">
            Tim desainer kami siap membuat pola jersey custom sesuai keinginan kamu dari nol.
          </p>
          <a
            href="https://wa.me/6287818310416?text=Halo%20Ayres%20Apparel%2C%20saya%20ingin%20custom%20desain%20jersey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-white text-sm font-bold px-10 py-4 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #e03030, #a78bfa)" }}
          >
            <WaIcon />
            Konsultasi Desain Gratis
          </a>
        </div>
      </section>

    </div>
  );
}

function WaIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.875L.057 23.077a.75.75 0 00.866.866l5.202-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 01-4.964-1.356l-.356-.212-3.688 1.048 1.048-3.688-.212-.356A9.75 9.75 0 1112 21.75z" />
    </svg>
  );
}
