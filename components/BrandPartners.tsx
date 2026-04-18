'use client';

import { useTranslation } from '@/lib/i18n';

const partners = [
  { name: "AAU", src: "/logo_partner/AAU.png" },
  { name: "Dikpora", src: "/logo_partner/DIKPORA.png" },
  { name: "Gembira Loka", src: "/logo_partner/GEMBIRALOKA.png" },
  { name: "Honda", src: "/logo_partner/HONDA.png" },
  { name: "KAI", src: "/logo_partner/kai.png" },
  { name: "Paxel", src: "/logo_partner/paxel.png" },
  { name: "Pertamina", src: "/logo_partner/pertamina.png" },
  { name: "QHome", src: "/logo_partner/QHOME.png" },
  { name: "RSUD", src: "/logo_partner/RSUD.jfif" },
];

// Duplicate for seamless loop
const track = [...partners, ...partners];

export default function BrandPartners() {
  const t = useTranslation();
  return (
    <section className="py-20 border-y border-[#1a1a1a] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            {t.brandPartners.label}
          </p>
          <h2 className="text-white text-3xl font-black uppercase leading-tight">
            {t.brandPartners.heading}
          </h2>
        </div>
        <p className="text-[#888] text-xs max-w-xs text-right hidden md:block">
          {t.brandPartners.desc}
        </p>
      </div>

      {/* Ticker */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #080808, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #080808, transparent)' }} />

        <div className="flex" style={{ animation: 'marquee 40s linear infinite' }}>
          {track.map((p, i) => (
            <div
              key={i}
              className="shrink-0 flex flex-col items-center justify-center gap-3 mx-6"
              style={{ width: 100 }}
            >
              {/* Logo cell */}
              <div className="w-[72px] h-[72px] flex items-center justify-center border border-[#1a1a1a] bg-[#0d0d0d] p-2 group-hover:border-[#2a2a2a] transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.name}
                  style={{ maxWidth: 56, maxHeight: 56, objectFit: 'contain' }}
                />
              </div>
              <p className="text-white text-[9px] text-center leading-tight max-w-[90px]">
                {p.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
