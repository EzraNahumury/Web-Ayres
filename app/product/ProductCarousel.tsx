"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

const katalog = [
  {
    id: "adi-vira",
    name: "Adi Vira",
    package: "Classic" as const,
    tagline: "Tampilan tim jadi lebih rapi dan profesional.",
    pola: 3,
    cover: "/katalogv2/katalog classic Adi Vira/pembuka.jpeg",
    pages: [
      "/katalogv2/katalog classic Adi Vira/AdiVira-01.jpg.jpeg",
      "/katalogv2/katalog classic Adi Vira/AdiVira-02.jpg.jpeg",
      "/katalogv2/katalog classic Adi Vira/AdiVira-03.jpg.jpeg",
    ],
  },
  {
    id: "cakra-vega",
    name: "Cakra Vega",
    package: "Classic" as const,
    tagline: "Membuat tim terlihat cepat dan agresif sejak awal laga.",
    pola: 6,
    cover: "/katalogv2/katalog classic Cakra Vega/pembuka.jpeg",
    pages: [
      "/katalogv2/katalog classic Cakra Vega/Mar05-01_02.jpg.jpeg",
      "/katalogv2/katalog classic Cakra Vega/Mar05-01_03.jpg.jpeg",
      "/katalogv2/katalog classic Cakra Vega/Mar05-01_04.jpg.jpeg",
      "/katalogv2/katalog classic Cakra Vega/Mar05-01_05.jpg.jpeg",
      "/katalogv2/katalog classic Cakra Vega/Mar05-01_06.jpg.jpeg",
      "/katalogv2/katalog classic Cakra Vega/Mar05-01_07.jpg.jpeg",
    ],
  },
  {
    id: "bima-sena",
    name: "Bima Sena",
    package: "Pro" as const,
    tagline: "Memberi kesan tim kuat dan sulit ditaklukkan.",
    pola: 6,
    cover: "/katalogv2/katalog pro Bima Sena/pembuka.jpeg",
    pages: [
      "/katalogv2/katalog pro Bima Sena/Mar06-02_02.jpg.jpeg",
      "/katalogv2/katalog pro Bima Sena/Mar06-02_03.jpg.jpeg",
      "/katalogv2/katalog pro Bima Sena/Mar06-02_04.jpg.jpeg",
      "/katalogv2/katalog pro Bima Sena/Mar06-02_05.jpg.jpeg",
    ],
  },
  {
    id: "garuda-vastra",
    name: "Garuda Vastra",
    package: "Pro" as const,
    tagline: "Bikin tim kamu terlihat lebih gagah dan elegan dari tim lain.",
    pola: 6,
    cover: "/katalogv2/katalog pro Garuda Vastra/pembuka.jpeg",
    pages: [
      "/katalogv2/katalog pro Garuda Vastra/Mar06-02_06.jpg.jpeg",
      "/katalogv2/katalog pro Garuda Vastra/Mar06-02_07.jpg.jpeg",
      "/katalogv2/katalog pro Garuda Vastra/Mar06-02_08.jpg.jpeg",
      "/katalogv2/katalog pro Garuda Vastra/Mar06-02_09.jpg.jpeg",
    ],
  },
];

const ACCENT = {
  Classic: { color: "#e03030", border: "#e0303066", glow: "#e0303022" },
  Pro: { color: "#a78bfa", border: "#a78bfa66", glow: "#a78bfa22" },
} as const;

const CARD_W = 460;
const CARD_H = 620;
const SIDE_OFFSET = 400;
const SIDE_SCALE = 0.78;
const SIDE_ROTATE_Y = 32;

type LightboxState = { open: false } | { open: true; pageIndex: number };

export function ProductCarousel() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<LightboxState>({ open: false });
  const dragX = useRef<number | null>(null);
  const total = katalog.length;
  const activeItem = katalog[active];
  const activeAccent = ACCENT[activeItem.package];

  const go = (index: number) => setActive(((index % total) + total) % total);

  const openLightbox = (pageIndex = 0) =>
    setLightbox({ open: true, pageIndex });

  const closeLightbox = useCallback(() => setLightbox({ open: false }), []);

  // Keyboard: arrows for carousel, ESC for lightbox
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { closeLightbox(); return; }
      if (lightbox.open) {
        if (e.key === "ArrowLeft")
          setLightbox((lb) =>
            lb.open
              ? { open: true, pageIndex: (lb.pageIndex - 1 + activeItem.pages.length) % activeItem.pages.length }
              : lb
          );
        if (e.key === "ArrowRight")
          setLightbox((lb) =>
            lb.open
              ? { open: true, pageIndex: (lb.pageIndex + 1) % activeItem.pages.length }
              : lb
          );
      } else {
        if (e.key === "ArrowLeft") setActive((a) => ((a - 1) + total) % total);
        if (e.key === "ArrowRight") setActive((a) => (a + 1) % total);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [total, lightbox.open, activeItem.pages.length, closeLightbox]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox.open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox.open]);

  const getRelPos = (i: number) => {
    let rel = i - active;
    if (rel > total / 2) rel -= total;
    if (rel < -total / 2) rel += total;
    return rel;
  };

  const startDrag = (x: number) => { dragX.current = x; };
  const endDrag = (x: number) => {
    if (dragX.current === null) return;
    const delta = x - dragX.current;
    dragX.current = null;
    if (Math.abs(delta) > 60) {
      delta < 0
        ? setActive((a) => (a + 1) % total)
        : setActive((a) => ((a - 1) + total) % total);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        {/* ── Stage ── */}
        <div style={{ perspective: "1600px", perspectiveOrigin: "50% 45%" }}>
          <div className="relative">
            {/* Edge fade */}
            <div
              className="absolute left-0 top-0 w-28 h-full z-30 pointer-events-none"
              style={{ background: "linear-gradient(to right, #080808 10%, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 w-28 h-full z-30 pointer-events-none"
              style={{ background: "linear-gradient(to left, #080808 10%, transparent)" }}
            />

            {/* Cards */}
            <div
              className="relative overflow-hidden select-none"
              style={{ height: CARD_H + 10 }}
              onMouseDown={(e) => startDrag(e.clientX)}
              onMouseUp={(e) => endDrag(e.clientX)}
              onMouseLeave={(e) => endDrag(e.clientX)}
              onTouchStart={(e) => startDrag(e.touches[0].clientX)}
              onTouchEnd={(e) => endDrag(e.changedTouches[0].clientX)}
            >
              {katalog.map((item, i) => {
                const rel = getRelPos(i);
                const isCenter = rel === 0;
                const isVisible = Math.abs(rel) <= 1;

                return (
                  <div
                    key={item.id}
                    className="absolute"
                    style={{
                      top: 0,
                      left: `calc(50% - ${CARD_W / 2}px)`,
                      width: CARD_W,
                      height: CARD_H,
                      transform: `translateX(${rel * SIDE_OFFSET}px) rotateY(${rel * -SIDE_ROTATE_Y}deg) scale(${isCenter ? 1 : SIDE_SCALE})`,
                      transformOrigin: "center center",
                      transition: "transform 0.65s cubic-bezier(0.4,0,0.2,1), opacity 0.5s",
                      opacity: isVisible ? 1 : 0,
                      zIndex: isCenter ? 20 : Math.abs(rel) === 1 ? 10 : 0,
                      cursor: isCenter ? "pointer" : "pointer",
                      pointerEvents: isVisible ? "auto" : "none",
                    }}
                    onClick={() => isCenter ? openLightbox(0) : go(i)}
                  >
                    <KatalogCard
                      item={item}
                      isCenter={isCenter}
                      accent={ACCENT[item.package]}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Navigation ── */}
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={() => setActive((a) => ((a - 1) + total) % total)}
            className="w-11 h-11 rounded-full border border-[#222] flex items-center justify-center text-[#444] hover:border-[#555] hover:text-white transition-all duration-300"
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2.5">
            {katalog.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(i)}
                  style={{
                    width: isActive ? 28 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: isActive ? ACCENT[item.package].color : "#222",
                    transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  aria-label={item.name}
                />
              );
            })}
          </div>

          <button
            onClick={() => setActive((a) => (a + 1) % total)}
            className="w-11 h-11 rounded-full border border-[#222] flex items-center justify-center text-[#444] hover:border-[#555] hover:text-white transition-all duration-300"
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ── Active card detail ── */}
        <div
          key={active}
          className="max-w-[460px] mx-auto w-full px-4"
          style={{ animation: "carouselFadeUp 0.4s ease both" }}
        >
          {/* Thumbnails — clickable */}
          <p className="text-[#2a2a2a] text-[9px] uppercase tracking-[0.25em] font-bold mb-3">
            Halaman Katalog — klik untuk lihat
          </p>
          <div
            className="flex gap-2.5 overflow-x-auto pb-3 mb-5"
            style={{ scrollbarWidth: "none" }}
          >
            {activeItem.pages.map((src, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="relative flex-none overflow-hidden rounded-lg border border-[#1e1e1e] hover:border-[#444] transition-all duration-200 hover:scale-105 group/thumb"
                style={{ width: 88, height: 116 }}
              >
                <Image
                  src={src}
                  alt={`${activeItem.name} halaman ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="88px"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <div className="absolute bottom-1.5 right-2">
                  <span className="text-[8px] text-white/40 font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Order row */}
          <div className="flex items-center gap-4 border-t border-[#141414] pt-5">
            <div>
              <p className="text-white text-sm font-bold">{activeItem.pola} Pola Tersedia</p>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.15em]"
                style={{ color: activeAccent.color }}
              >
                {activeItem.package} Package
              </p>
            </div>
            <div className="flex-1" />
            <a
              href={`https://wa.me/6287818310416?text=${encodeURIComponent(
                `Halo Ayres Apparel, saya tertarik dengan katalog ${activeItem.name} (${activeItem.package} Package). Boleh info lebih lanjut?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white text-[10px] font-black uppercase tracking-[0.12em] px-6 py-3 rounded-full hover:opacity-90 hover:scale-[1.03] transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${activeAccent.color}, #a78bfa)` }}
            >
              Order Sekarang &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox.open && (
        <Lightbox
          item={activeItem}
          accent={activeAccent}
          pageIndex={lightbox.pageIndex}
          onClose={closeLightbox}
          onChangePage={(i) => setLightbox({ open: true, pageIndex: i })}
        />
      )}

      <style>{`
        @keyframes carouselFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lbSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}

/* ── Lightbox ─────────────────────────────────────────── */
function Lightbox({
  item,
  accent,
  pageIndex,
  onClose,
  onChangePage,
}: {
  item: (typeof katalog)[number];
  accent: { color: string; border: string; glow: string };
  pageIndex: number;
  onClose: () => void;
  onChangePage: (i: number) => void;
}) {
  const total = item.pages.length;
  const prev = () => onChangePage((pageIndex - 1 + total) % total);
  const next = () => onChangePage((pageIndex + 1) % total);

  // Swipe inside lightbox
  const dragX = useRef<number | null>(null);
  const startDrag = (x: number) => { dragX.current = x; };
  const endDrag = (x: number) => {
    if (dragX.current === null) return;
    const delta = x - dragX.current;
    dragX.current = null;
    if (Math.abs(delta) > 50) delta < 0 ? next() : prev();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background: "rgba(0,0,0,0.82)",
        backdropFilter: "blur(6px)",
        animation: "lbFadeIn 0.25s ease",
      }}
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-[9px] font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-full border"
            style={{ background: `${accent.color}1a`, borderColor: accent.border, color: accent.color }}
          >
            {item.package}
          </span>
          <span className="text-white font-black uppercase text-sm tracking-wide">{item.name}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#444] text-xs font-bold tabular-nums">
            {String(pageIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#555] hover:border-[#666] hover:text-white transition-all duration-200"
            aria-label="Tutup"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main image + side nav */}
      <div
        className="flex items-center gap-4 px-4 w-full max-w-4xl"
        style={{ animation: "lbSlideUp 0.3s ease" }}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseUp={(e) => endDrag(e.clientX)}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchEnd={(e) => endDrag(e.changedTouches[0].clientX)}
      >
        {/* Prev */}
        <button
          onClick={prev}
          className="flex-none w-12 h-12 rounded-full border border-[#222] flex items-center justify-center text-[#444] hover:border-[#555] hover:text-white transition-all duration-200"
          aria-label="Previous"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Image */}
        <div
          className="flex-1 relative overflow-hidden rounded-2xl border border-[#1e1e1e] select-none"
          style={{
            maxHeight: "calc(100vh - 200px)",
            aspectRatio: "3/4",
            boxShadow: `0 0 80px 0 ${accent.glow}, 0 40px 100px rgba(0,0,0,0.9)`,
          }}
        >
          <Image
            key={pageIndex}
            src={item.pages[pageIndex]}
            alt={`${item.name} halaman ${pageIndex + 1}`}
            fill
            draggable={false}
            className="object-contain select-none"
            sizes="(max-width: 768px) 90vw, 700px"
            priority
          />

          {/* Accent top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: `linear-gradient(90deg, ${accent.color}, #a78bfa)` }}
          />
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="flex-none w-12 h-12 rounded-full border border-[#222] flex items-center justify-center text-[#444] hover:border-[#555] hover:text-white transition-all duration-200"
          aria-label="Next"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom thumbnail strip */}
      <div
        className="absolute bottom-0 left-0 right-0 pb-6 pt-4 flex justify-center"
        onClick={(e) => e.stopPropagation()}
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}
      >
        <div className="flex gap-2.5 overflow-x-auto px-6" style={{ scrollbarWidth: "none" }}>
          {item.pages.map((src, i) => {
            const isActive = i === pageIndex;
            return (
              <button
                key={i}
                onClick={() => onChangePage(i)}
                className="flex-none overflow-hidden rounded-lg transition-all duration-300"
                style={{
                  width: isActive ? 60 : 48,
                  height: isActive ? 80 : 64,
                  border: `2px solid ${isActive ? accent.color : "#222"}`,
                  opacity: isActive ? 1 : 0.5,
                  position: "relative",
                }}
              >
                <Image
                  src={src}
                  alt={`halaman ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="60px"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── KatalogCard ──────────────────────────────────────── */
function KatalogCard({
  item,
  isCenter,
  accent,
}: {
  item: (typeof katalog)[number];
  isCenter: boolean;
  accent: { color: string; border: string; glow: string };
}) {
  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl border border-[#1e1e1e] group/card"
      style={{
        boxShadow: isCenter
          ? `0 0 80px 0 ${accent.glow}, 0 40px 80px rgba(0,0,0,0.9)`
          : "0 20px 60px rgba(0,0,0,0.5)",
        transition: "box-shadow 0.65s",
      }}
    >
      {/* Cover */}
      <Image
        src={item.cover}
        alt={`${item.name} cover`}
        fill
        draggable={false}
        className="object-cover select-none transition-transform duration-700 group/card-hover:scale-[1.03]"
        sizes="460px"
        priority={isCenter}
      />

      {/* Bottom gradient */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 35%, transparent 65%)",
        }}
      />

      {/* Side card dim */}
      <div
        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-500"
        style={{ background: "rgba(0,0,0,0.5)", opacity: isCenter ? 0 : 1 }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-30 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, ${accent.color}, #a78bfa)`,
          opacity: isCenter ? 1 : 0,
        }}
      />

      {/* Package badge */}
      <div className="absolute top-5 left-5 z-30">
        <span
          className="text-[9px] font-black uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full border backdrop-blur-sm"
          style={{
            background: `${accent.color}1a`,
            borderColor: accent.border,
            color: accent.color,
          }}
        >
          {item.package}
        </span>
      </div>

      {/* Pola badge */}
      <div className="absolute top-5 right-5 z-30">
        <span className="text-[#888] text-[9px] font-bold uppercase tracking-[0.15em] bg-black/50 border border-[#222] backdrop-blur-sm px-3 py-1.5 rounded-full">
          {item.pola} Pola
        </span>
      </div>

      {/* "Lihat Design" hint on center hover */}
      {isCenter && (
        <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-black uppercase tracking-[0.15em] text-white backdrop-blur-sm"
            style={{ background: "rgba(0,0,0,0.6)", borderColor: `${accent.color}66` }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            Lihat Semua Design
          </div>
        </div>
      )}

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-7 pb-7 pt-14">
        <div
          className="h-[1.5px] mb-4 transition-all duration-500"
          style={{
            width: isCenter ? 44 : 20,
            background: `linear-gradient(90deg, ${accent.color}, #a78bfa)`,
          }}
        />
        <h3
          className="text-white font-black uppercase leading-none tracking-tight mb-2"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
        >
          {item.name}
        </h3>
        <p
          className="text-sm leading-relaxed transition-colors duration-500"
          style={{ color: isCenter ? "#666" : "#2a2a2a" }}
        >
          &ldquo;{item.tagline}&rdquo;
        </p>
      </div>
    </div>
  );
}
