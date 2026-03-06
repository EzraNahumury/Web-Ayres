'use client';

import { useState } from 'react';

const tabs = [
  {
    id: 'quality',
    label: 'Quality',
    problems: [
      'Bahan kualitas buruk, panas, kasar, gampang sobek, cepat susut.',
      'Sablon cepat pudar / luntur, harga tinggi, kualitas rendah.',
      'Jahitan tidak rapi, mudah lepas setelah beberapa kali cuci.',
      'Warna tidak sesuai desain yang dipesan.',
      'Tidak ada garansi / tanggung jawab ketika barang cacat.',
    ],
  },
  {
    id: 'shipping',
    label: 'Shipping',
    problems: [
      'Seller tidak amanah, pesanan tidak sesuai yang dijanjikan.',
      'Tidak ada kepastian waktu atau selesai tidak tepat waktu.',
      'Pengiriman lambat, paket sering hilang atau rusak di jalan.',
      'Tidak ada tracking yang jelas setelah order dikirim.',
      'Tidak ada konfirmasi ketika barang sudah selesai produksi.',
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing',
    problems: [
      'Harga tidak transparan, banyak biaya tersembunyi setelah order.',
      'Harga mahal tapi kualitas tidak sebanding.',
      'Tidak ada harga khusus untuk pemesanan dalam jumlah besar.',
      'Biaya desain mahal, padahal desain sederhana.',
      'Harga berubah-ubah setelah negosiasi dan deal.',
    ],
  },
  {
    id: 'service',
    label: 'Service',
    problems: [
      'CS tidak responsif, lambat membalas pesan.',
      'Tidak ada konsultasi desain, langsung disuruh kirim file.',
      'Revisi desain dikenakan biaya tambahan.',
      'Complain diabaikan, tidak ada solusi ketika ada masalah.',
      'Tidak ada after-sales support setelah barang diterima.',
    ],
  },
];

export default function TrustSection() {
  const [active, setActive] = useState('quality');
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* Kiri: masalah — berubah sesuai tab aktif */}
        <div>
          <h3 className="text-white font-black text-2xl uppercase leading-tight mb-2">
            Urusan Produksi Jersey<br />Percayakan pada Ayres
          </h3>
          <p className="text-[#666] text-sm mb-6">
            Mungkin kamu punya kekhawatiran seperti ini ketika pesan Jersey:
          </p>
          <ul className="flex flex-col gap-3">
            {current.problems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#666] text-sm">
                <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Kanan: tombol tab */}
        <div>
          <p className="text-[#888] text-sm mb-2">
            Kami tidak memberikan <span className="text-white font-bold">JANJI</span>, tapi{' '}
            <span className="text-white font-bold">BUKTI</span>. Kepuasan customer yang kami
            utamakan. Di AYRES, kami pastikan kamu mendapat:
          </p>
          <div className="flex flex-col divide-y divide-[#1a1a1a]">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className="group flex items-center justify-between py-5 text-left cursor-pointer w-full"
              >
                <div className="flex items-center gap-4">
                  <span className={`text-[11px] font-bold tabular-nums transition-colors duration-200 ${active === t.id ? 'text-[#5b58ff]' : 'text-[#333]'}`}>
                    0{i + 1}
                  </span>
                  <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${active === t.id ? 'text-white' : 'text-[#555] group-hover:text-[#999]'}`}>
                    Best {t.label}
                  </span>
                </div>
                <span className={`text-xs transition-colors duration-200 ${active === t.id ? 'text-[#5b58ff]' : 'text-[#333] group-hover:text-[#555]'}`}>
                  {active === t.id ? '●' : '○'}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
