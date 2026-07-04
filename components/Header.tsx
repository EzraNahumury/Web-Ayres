"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage, languages, languageLabels } from "@/lib/i18n";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.company, href: "/company" },
    { label: t.nav.order, href: "/order" },
    { label: t.nav.product, href: "/product" },
    { label: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4 md:gap-8">

        {/* Logo — kiri */}
        <Link href="/" className="shrink-0 flex items-center self-center">
          <div className="relative top-[2px] flex items-center justify-start w-[160px] h-[44px] md:w-[320px] md:h-[80px]">
            <Image
              src="/gambar/new logo.png"
              alt="Ayres Apparel"
              fill
              priority
              className="object-contain brightness-0 invert"
              style={{ objectPosition: 'left center' }}
            />
          </div>
        </Link>

        {/* Nav — tengah (desktop) */}
        <nav className="hidden lg:flex items-center gap-9 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-bold tracking-wider text-[#aaaaaa] hover:text-white transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language switcher */}
        <div className="relative shrink-0" ref={langRef}>
          <button
            onClick={() => setLangOpen((v) => !v)}
            aria-label={t.common.language}
            className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.15em] text-[#aaa] hover:text-white border border-[#222] hover:border-[#444] px-2.5 py-1.5 rounded-full transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
            </svg>
            <span>{languageLabels[lang].short}</span>
            <svg className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-[#0d0d0d] border border-[#222] rounded-md shadow-lg overflow-hidden z-50">
              {languages.map((code) => (
                <button
                  key={code}
                  onClick={() => { setLang(code); setLangOpen(false); }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold transition-colors ${lang === code ? "bg-[#1a1a1a] text-white" : "text-[#aaa] hover:bg-[#141414] hover:text-white"}`}
                >
                  <span>{languageLabels[code].long}</span>
                  <span className="text-[10px] text-[#666] font-bold tracking-wider">{languageLabels[code].short}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Hamburger — mobile */}
        <button
          className="lg:hidden shrink-0 flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t.common.menu}
        >
          <span className="block w-5 h-0.5 bg-white" />
          <span className="block w-5 h-0.5 bg-white" />
          <span className="block w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-[#1f1f1f] px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs font-bold tracking-wider text-[#aaaaaa] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
