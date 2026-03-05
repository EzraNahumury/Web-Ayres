import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GlareHover from "@/components/GlareHover";
import GradientText from "@/components/GradientText";
import CircularGallery from "@/components/CircularGallery";
import FeaturesStrip from "@/components/FeaturesStrip";

export const metadata: Metadata = {
  title: "Ayres Apparel – Tempatnya Custom Jersey Yang Indonesia Banget",
};

const partners = [
  { name: "Pertamina", src: "/uploads/2024/07/Pertamina.png" },
  { name: "Bank BNI", src: "/uploads/2024/07/Bank-BNI.png" },
  { name: "Honda", src: "/uploads/2024/07/Honda.png" },
  { name: "BRIMOB", src: "/uploads/2024/07/BRIMOB.png" },
  { name: "Satpol PP", src: "/uploads/2024/07/Satpol-PP.png" },
  { name: "Mitra Surabaya", src: "/uploads/2024/07/Mitra-Surabaya-Liga-3.png" },
  { name: "Biak United", src: "/uploads/2024/07/Biak-United-Liga3.png" },
  { name: "Jonnie Bodega", src: "/uploads/2024/07/Jonnie-Bodega-Malaysia.png" },
  { name: "Wirasada Pratista", src: "/uploads/2024/07/Wirasada-Pratista.png" },
  { name: "AAU", src: "/uploads/2024/07/AAU.png" },
  { name: "UGM", src: "/uploads/2024/07/UGM.png" },
  { name: "UNY", src: "/uploads/2024/07/UNY.png" },
  { name: "UNNES", src: "/uploads/2024/07/UNNES.png" },
  { name: "UPN Veteran", src: "/uploads/2024/07/UPN.png" },
  { name: "USD", src: "/uploads/2024/07/USD.png" },
];

const galleryImages = [
  { src: "/uploads/2024/07/Gallery-1.jpg", alt: "Jersey Custom Ayres 1" },
  { src: "/uploads/2024/07/Gallery-2.jpg", alt: "Jersey Custom Ayres 2" },
  { src: "/uploads/2024/07/Gallery-3.jpg", alt: "Jersey Custom Ayres 3" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-[700px] md:min-h-[760px] overflow-hidden">

        {/* Ambient glow blobs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #5b58ff 0%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)', filter: 'blur(60px)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-full min-h-[700px] md:min-h-[760px] flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full py-20">

            {/* ── Kiri: Teks ── */}
            <div className="flex flex-col gap-8">

              {/* Headline */}
              <div className="flex flex-col gap-4">
                <p className="text-[#5b58ff] text-xs font-bold tracking-[0.2em] uppercase">Custom Jersey &amp; Apparel</p>
                <h1 className="text-white font-black flex flex-col" style={{ lineHeight: 1.05, fontSize: 'clamp(2.8rem, 5vw, 4.2rem)' }}>
                  <span>Tempatnya</span>
                  <GradientText
                    colors={["#5b58ff", "#a78bfa", "#c4b5fd", "#5b58ff"]}
                    animationSpeed={4}
                    showBorder={false}
                    className="!mx-0 !rounded-none !p-0 font-black"
                    style={{ fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', lineHeight: 1.05 } as React.CSSProperties}
                  >
                    Custom Jersey
                  </GradientText>
                  <span>Yang Indonesia Banget</span>
                </h1>
              </div>

              {/* Desc */}
              <p className="text-[#888] text-base leading-relaxed max-w-md">
                Produksi <span className="text-white font-semibold">1 hari jadi</span>, mulai <span className="text-white font-semibold">Rp 70.000</span>, tanpa minimum order. Sudah dipercaya Pertamina, BNI, Honda, dan ratusan tim se-Indonesia.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/6287818310416"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white text-sm font-bold px-7 py-3.5 rounded-full transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #5b58ff, #a78bfa)' }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.875L.057 23.077a.75.75 0 00.866.866l5.202-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 01-4.964-1.356l-.356-.212-3.688 1.048 1.048-3.688-.212-.356A9.75 9.75 0 1112 21.75z"/>
                  </svg>
                  Bikin Sekarang
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 text-[#aaa] text-sm font-bold px-7 py-3.5 rounded-full border border-[#2a2a2a] hover:border-[#555] hover:text-white transition-colors"
                >
                  Lihat Koleksi
                </a>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex -space-x-2">
                  {[
                    "/uploads/2024/07/Jersey-3-768x960.png",
                    "/uploads/2024/07/Jersey-4.png",
                    "/uploads/2024/07/Jersey-7.png",
                  ].map((src, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] overflow-hidden bg-[#1a1a1a]">
                      <Image src={src} alt="jersey" width={32} height={32} className="object-cover w-full h-full" />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#777]">
                  <span className="text-white font-semibold">500+</span> jersey sudah dikirim bulan ini
                </p>
              </div>
            </div>

            {/* ── Kanan: Jersey Showcase ── */}
            <div className="hidden md:flex items-center justify-center relative h-[520px]">
              {/* Glow halo di belakang kartu tengah */}
              <div className="absolute z-0 w-64 h-64 rounded-full opacity-40"
                style={{ background: 'radial-gradient(circle, #5b58ff 0%, transparent 70%)', filter: 'blur(40px)', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }} />

              {/* Jersey utama - tengah */}
              <div className="absolute z-20"
                style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', filter: 'drop-shadow(0 25px 50px rgba(91,88,255,0.35))' }}>
                <GlareHover
                  width="230px" height="290px"
                  background="#141414" borderRadius="20px" borderColor="#5b58ff55"
                  glareColor="#ffffff" glareOpacity={0.3} glareAngle={-30}
                  glareSize={300} transitionDuration={700}>
                  <Image
                    src="/uploads/2024/07/Jersey-3-768x960.png"
                    alt="Custom Jersey Ayres"
                    fill className="object-contain" priority
                    sizes="230px"
                  />
                </GlareHover>
              </div>

              {/* Jersey kiri */}
              <div className="absolute z-10"
                style={{ left: '4%', top: '55%', transform: 'translateY(-50%) rotate(-10deg)', filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.6))' }}>
                <GlareHover
                  width="175px" height="215px"
                  background="#141414" borderRadius="16px" borderColor="#ffffff15"
                  glareColor="#ffffff" glareOpacity={0.2} glareAngle={-30}
                  glareSize={300} transitionDuration={700}>
                  <Image
                    src="/uploads/2024/07/Jersey-4.png"
                    alt="Custom Jersey Ayres 2"
                    fill className="object-contain"
                    sizes="175px"
                  />
                </GlareHover>
              </div>

              {/* Jersey kanan */}
              <div className="absolute z-10"
                style={{ right: '2%', top: '50%', transform: 'translateY(-50%) rotate(10deg)', filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.6))' }}>
                <GlareHover
                  width="175px" height="215px"
                  background="#141414" borderRadius="16px" borderColor="#ffffff15"
                  glareColor="#ffffff" glareOpacity={0.2} glareAngle={-30}
                  glareSize={300} transitionDuration={700}>
                  <Image
                    src="/uploads/2024/07/Jersey-7.png"
                    alt="Custom Jersey Ayres 3"
                    fill className="object-contain"
                    sizes="175px"
                  />
                </GlareHover>
              </div>

              {/* Badge harga — floating */}
              <div className="absolute z-30 flex flex-col items-center gap-0.5"
                style={{ bottom: '8%', left: '50%', transform: 'translateX(-50%)' }}>
                <div className="text-[#666] text-[10px] tracking-widest uppercase font-medium">mulai dari</div>
                <div className="text-white text-lg font-black tracking-tight">Rp 70.000</div>
                <div className="h-px w-8 bg-[#5b58ff] rounded-full" />
              </div>

            </div>

          </div>
        </div>
      </section>

      <FeaturesStrip />

      {/* ── WHO WE ARE ──────────────────────────────────────────── */}
      <section id="gallery" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#5b58ff] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            ORIGINAL gak harus<br />MAHAL
          </h2>
          <p className="text-[#5b58ff] font-black text-lg tracking-widest mb-6">
            #BIKINJERSEY1HARIJADI
          </p>
          <p className="text-[#888] text-sm leading-relaxed max-w-2xl mx-auto mb-2">
            <strong className="text-white">Ayres Apparel</strong> adalah tempat custom jersey yang mengusung tema dan value nusantara pada jersey yang dibuatnya.
            <br />Kami menawarkan produksi Jersey di <strong className="text-white">AYRES</strong> dengan harga sangat terjangkau.
            <br />Kecepatan produksi yang bisa mencapai ribuan jersey perbulannya dan tentu saja dengan jaminan kualitas internasional.
            <br />Kami juga menawarkan <strong className="text-white">jersey 1 hari jadi</strong> untuk kamu yang gak suka menunggu.
          </p>
          {/* underline decoration */}
          <div className="flex justify-center mt-6 mb-14">
            <div className="w-16 h-0.5 bg-[#5b58ff]" />
          </div>

          {/* Circular Gallery */}
          <div className="w-full" style={{ height: '500px' }}>
            <CircularGallery
              items={[
                { image: '/uploads/2024/07/Gallery-1-1024x683.jpg', text: 'Ayres Apparel' },
                { image: '/uploads/2024/07/Gallery-2.jpg', text: 'Custom Jersey' },
                { image: '/uploads/2024/07/Jersey-3-768x960.png', text: 'Jersey Custom' },
                { image: '/uploads/2024/07/Jersey-4.png', text: 'Full Color' },
                { image: '/uploads/2024/07/Jersey-7.png', text: 'Premium Quality' },
                { image: '/uploads/2024/07/Review-2-1024x569.png', text: 'Biak United' },
                { image: '/uploads/2024/07/Review-4-1024x569.png', text: 'Tim Nasional' },
                { image: '/uploads/2024/07/Review-7-768x427.png', text: 'Partner Kami' },
              ]}
              bend={2}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
        </div>
      </section>

      {/* ── BRAND PARTNERS ──────────────────────────────────────── */}
      <section className="py-16 border-y border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#5b58ff] text-xs font-bold uppercase tracking-[0.2em] mb-10 text-center">
            Our Brand Partner :
          </p>
          <div className="grid grid-cols-5 gap-8 place-items-center">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center justify-center">
                <Image
                  src={p.src}
                  alt={p.name}
                  width={100}
                  height={70}
                  className="object-contain max-h-[70px] w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">
            Siap Bikin Jersey Impian Kamu?
          </h2>
          <p className="text-white/60 mb-8">
            Hubungi kami sekarang dan dapatkan konsultasi desain gratis!
          </p>
          <a
            href="https://wa.me/6287818310416"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#5b58ff] text-white font-bold text-sm px-10 py-4 uppercase tracking-wider rounded-full hover:bg-[#4845dd] transition-colors"
          >
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>
    </>
  );
}
