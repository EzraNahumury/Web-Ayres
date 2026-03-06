import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Order", href: "/order" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/ayresapparel",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ayresapparel",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ayresapparel",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ayres_apparel",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

const marketplaces = [
  { label: "Shopee", href: "https://shopee.co.id/ayresapparel", src: "/gambar/shopee-logo.jpg" },
  { label: "Lazada", href: "https://www.lazada.co.id", src: "/gambar/lazada-logo.jpg" },
  { label: "Tokopedia", href: "https://www.tokopedia.com/ayresapparel", src: "/gambar/tokopedia-logo.jpg" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] text-white">

      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12">

        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Image
            src="/gambar/logo-panjang.png"
            alt="Ayres Apparel"
            width={130}
            height={40}
            className="object-contain brightness-0 invert"
          />
          <p className="text-[#444] text-sm leading-relaxed max-w-[220px]">
            Tempatnya Custom Jersey Yang Indonesia Banget.
          </p>
          <p className="text-[#5b58ff] text-[10px] font-bold uppercase tracking-[0.2em]">
            #BIKINJERSEY1HARIJADI
          </p>
          <div className="flex gap-3 mt-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 border border-[#222] flex items-center justify-center text-[#555] hover:border-[#5b58ff] hover:text-white transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#333] mb-5">Menu</p>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#555] text-sm hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Info */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#333] mb-5">Informasi</p>
          <div className="flex flex-col gap-3 text-[#555] text-sm">
            <p className="leading-relaxed">
              Jl. Wonocatur No.427,<br />
              Banguntapan, Kotagede,<br />
              D.I. Yogyakarta
            </p>
            <p className="leading-relaxed">
              Senin – Sabtu: 09.00 – 16.30<br />
              Minggu: Tutup
            </p>
            <a href="mailto:admin@ayresapparel.com" className="hover:text-white transition-colors">
              admin@ayresapparel.com
            </a>
            <a href="https://wa.me/6287818310416" className="hover:text-white transition-colors">
              0878-1831-0416
            </a>
          </div>
        </div>

        {/* Marketplace */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#333] mb-5">Tersedia di</p>
          <div className="flex flex-col gap-3">
            {marketplaces.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border border-[#1a1a1a] px-4 py-3 hover:border-[#2a2a2a] transition-colors duration-200"
              >
                <div className="w-6 h-6 relative shrink-0 overflow-hidden rounded-sm">
                  <Image src={m.src} alt={m.label} fill className="object-contain" />
                </div>
                <span className="text-[#555] text-xs font-semibold group-hover:text-[#999] transition-colors duration-200">
                  {m.label}
                </span>
                <svg className="w-3 h-3 text-[#333] group-hover:text-[#555] ml-auto transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#111] px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[#333] text-xs">
            © {new Date().getFullYear()} Ayres Apparel. All rights reserved.
          </p>
          <p className="text-[#2a2a2a] text-xs">
            Custom Jersey · Bantul, Yogyakarta
          </p>
        </div>
      </div>
    </footer>
  );
}
