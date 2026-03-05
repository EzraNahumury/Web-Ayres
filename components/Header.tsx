"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Order", href: "/order" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

        {/* Logo — kiri */}
        <Link href="/" className="shrink-0">
          <Image
            src="/uploads/2024/07/logo-panjang.png"
            alt="Ayres Apparel"
            width={130}
            height={42}
            priority
            className="object-contain"
          />
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

        {/* CTA — kanan (desktop) */}
        <a
          href="https://wa.me/6287818310416"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block border border-[#5b58ff] text-[#5b58ff] text-[11px] font-bold tracking-wider px-5 py-2 hover:bg-[#5b58ff] hover:text-white transition-colors shrink-0 whitespace-nowrap"
        >
          MAKE MY DESIGN
        </a>

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
          <a
            href="https://wa.me/6287818310416"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#5b58ff] text-[#5b58ff] text-xs font-bold tracking-wider px-5 py-2 text-center hover:bg-[#5b58ff] hover:text-white transition-colors"
          >
            MAKE MY DESIGN
          </a>
        </div>
      )}
    </header>
  );
}
