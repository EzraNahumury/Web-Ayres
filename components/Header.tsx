"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Order", href: "/order" },
  { label: "Product", href: "/product" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

        {/* Logo — kiri */}
        <Link href="/" className="shrink-0 flex items-center self-center">
          <div className="relative flex items-center justify-center" style={{ width: 180, height: 48 }}>
            <Image
              src="/gambar/new logo.png"
              alt="Ayres Apparel"
              fill
              priority
              className="object-contain brightness-0 invert"
              style={{ objectPosition: 'center center' }}
            />
          </div>
        </Link>

        {/* Nav — tengah (desktop) */}
        <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-bold tracking-wider text-[#aaaaaa] hover:text-white transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>


        {/* Hamburger — mobile */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
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
