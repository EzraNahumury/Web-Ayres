import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GlareHover from "@/components/GlareHover";
import GradientText from "@/components/GradientText";
import CircularGallery from "@/components/CircularGallery";
import FeaturesStrip from "@/components/FeaturesStrip";
import TrustSection from "@/components/TrustSection";
import ReviewSlider from "@/components/ReviewSlider";
import YoutubePlayer from "@/components/YoutubePlayer";
import FAQ from "@/components/FAQ";
import BrandPartners from "@/components/BrandPartners";

export const metadata: Metadata = {
  title: "Ayres Apparel – Tempatnya Custom Jersey Yang Indonesia Banget",
};

const partners = [
  { name: "Pertamina", src: "/gambar/Pertamina.png" },
  { name: "Bank BNI", src: "/gambar/Bank-BNI.png" },
  { name: "Honda", src: "/gambar/Honda.png" },
  { name: "Korps Brimob", src: "/gambar/BRIMOB.png" },
  { name: "TNI Angkatan Udara", src: "/gambar/AAU.png" },
  { name: "Mitra Surabaya FC", src: "/gambar/Mitra-Surabaya-Liga-3.png" },
  { name: "Biak United", src: "/gambar/Biak-United-Liga3.png" },
  { name: "Jonnie's Bodega", src: "/gambar/Jonnie-Bodega-Malaysia.png" },
  { name: "Wirasada Pratista", src: "/gambar/Wirasada-Pratista.png" },
  { name: "Praja Wibawa 1950", src: "/gambar/Satpol-PP.png" },
  { name: "Universitas Gadjah Mada", src: "/gambar/UGM.png" },
  { name: "Universitas Negeri Yogyakarta", src: "/gambar/UNY.png" },
  { name: "UNNES", src: "/gambar/UNNES.png" },
  { name: "UPN Veteran", src: "/gambar/UPN.png" },
  { name: "Universitas Sanata Dharma", src: "/gambar/USD.png" },
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
                    "/gambar/Jersey-3.png",
                    "/gambar/Jersey-5.png",
                    "/gambar/Jersey-7.png",
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
                    src="/gambar/Jersey-1.png"
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
                    src="/gambar/Jersey-2.png"
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
                    src="/gambar/Jersey-3.png"
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
      <section id="gallery" className="pt-20 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Split layout */}
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center mb-10">

            {/* Kiri */}
            <div>
              <p className="text-[#5b58ff] text-[10px] font-bold uppercase tracking-[0.35em] mb-6">Who We Are</p>
              <h2 className="font-black text-white leading-[0.95] tracking-tight mb-8"
                style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>
                ORIGINAL<br />
                <em className="not-italic text-[#5b58ff]">gak harus</em><br />
                MAHAL.
              </h2>
              <a
                href="https://wa.me/6287818310416"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white text-xs font-bold px-6 py-3 rounded-full transition-all hover:opacity-80"
                style={{ background: 'linear-gradient(135deg,#5b58ff,#a78bfa)' }}
              >
                Bikin Jersey Sekarang →
              </a>
            </div>

            {/* Kanan: poin */}
            <div className="flex flex-col divide-y divide-[#1a1a1a]">
              {[
                { tag: "01", label: "Harga Mulai", text: "Rp 70.000 per jersey tanpa biaya setup dan tanpa minimum order." },
                { tag: "02", label: "1 Hari Jadi", text: "Pesan hari ini, besok sudah di tangan kamu. Produksi tercepat se-Indonesia." },
                { tag: "03", label: "Kualitas Internasional", text: "Ribuan jersey per bulan, setiap helai dijahit dengan standar premium." },
              ].map((item) => (
                <div key={item.tag} className="group grid grid-cols-[2rem_1fr] gap-4 py-5">
                  <span className="text-[#2a2a2a] text-xs font-bold pt-0.5 group-hover:text-[#5b58ff] transition-colors">{item.tag}</span>
                  <div>
                    <p className="text-white text-sm font-bold mb-1">{item.label}</p>
                    <p className="text-[#555] text-xs leading-relaxed group-hover:text-[#777] transition-colors">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery — full bleed, naik ke atas */}
        <div className="w-full -mt-4" style={{ height: '460px' }}>
          <CircularGallery
            items={[
              { image: '/gambar/Jersey-1.png', text: 'Jersey Custom' },
              { image: '/gambar/Jersey-2.png', text: 'Full Color' },
              { image: '/gambar/Jersey-3.png', text: 'Premium Quality' },
              { image: '/gambar/Jersey-4.png', text: 'Ayres Apparel' },
              { image: '/gambar/Jersey-5.png', text: 'Custom Jersey' },
              { image: '/gambar/Jersey-6.png', text: 'Original Desain' },
              { image: '/gambar/Jersey-7.png', text: 'Jersey Nusantara' },
              { image: '/gambar/WhatsApp-Image-2024-07-22-at-08.13.26-4.jpeg', text: 'Jersey Timnas' },
            ]}
            bend={2}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </section>

      {/* ── STATS + KATEGORI ────────────────────────────────────── */}
      <section className="relative overflow-hidden mt-16">
        {/* Background */}
        <div className="absolute inset-0 z-0"
          style={{ background: 'linear-gradient(135deg, #0d0d1a 0%, #0a0a0a 40%, #0f0a1a 100%)' }} />
        <div className="absolute inset-0 z-0 opacity-30"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, #5b58ff22 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

          {/* Kiri: stats */}
          <div>
            <p className="text-[#888] text-sm leading-relaxed mb-10 max-w-xs">
              Kami telah menjadi kepercayaan banyak tim profesional, instansi pemerintahan dan swasta di Indonesia dan ASEAN.
            </p>
            <div className="flex flex-col gap-6">
              {[
                { num: "2.600+", label: "team sudah custom jersey" },
                { num: "35.000+", label: "pcs jersey sudah di produksi" },
              ].map((s) => (
                <div key={s.num}>
                  <p className="text-5xl font-black text-white leading-none tracking-tight">{s.num}</p>
                  <p className="text-[#666] text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kanan: kategori */}
          <div>
            <h3 className="text-white font-black text-2xl leading-snug mb-6">
              Pilih Kategori Jersey<br />Sesuai Kebutuhanmu
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {["Jersey Bola & Futsal","Jersey Volley","Jersey Sepeda","Jersey Basket","Jersey Badminton","Jersey e-Sport","Jersey Mancing","dan lainnya"].map((k) => (
                <li key={k} className="text-[#888] text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#5b58ff] shrink-0" />
                  {k}
                </li>
              ))}
            </ul>
            <p className="text-[#5b58ff] text-xs font-bold tracking-[0.2em] uppercase">#BIKINJERSEY1HARIJADI</p>
          </div>
        </div>
      </section>

      <TrustSection />

      {/* ── OUR HAPPY CUSTOMER ──────────────────────────────────── */}
      <section className="py-24 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="mb-14 text-center">
            <p className="text-[#5b58ff] text-[10px] font-bold uppercase tracking-[0.35em] mb-3">Testimoni</p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Our Happy Customer</h2>
            <p className="text-[#555] text-sm max-w-xl mx-auto leading-relaxed">
              Alhamdulillah. Kami telah membantu ribuan customer mendapatkan jersey dengan kualitas dan hasil yang memuaskan. Berikut review jujur dari sebagian customer Ayres Apparel.
            </p>
          </div>

          {/* Video + scrollable reviews side by side */}
          <div className="flex gap-6 items-stretch">

            {/* YouTube embed — fixed kiri */}
            <div className="shrink-0 relative rounded-xl overflow-hidden" style={{ width: 480, aspectRatio: '16/9' }}>
              <YoutubePlayer videoId="Rh99xrExmxA" />
            </div>

            {/* Review slider — kanan */}
            <ReviewSlider />

          </div>
        </div>
      </section>

      {/* ── BRAND PARTNERS ──────────────────────────────────────── */}
      <BrandPartners />

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <FAQ />

    </>
  );
}
