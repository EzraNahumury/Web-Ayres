'use client';

import { useState } from 'react';

const reviews = [
  {
    name: 'Egyadnan Saputra',
    meta: '1 ulasan',
    stars: 5,
    text: 'Wahh..warbyasah sih buat jersey disini, selain bisa puas milih bahan jersey dan desain, puas juga dgn pelayanan nya yg ramah2 dan ga ketinggalan hasil nya juga memuaskan bgt dgn cuttingan yg rapi dan hasil warna yg menyala bgt. Terimakasih Ayres Apparel',
  },
  {
    name: 'Dikky Kusuma Wijaya',
    meta: '5 ulasan · 1 foto',
    stars: 5,
    text: 'Jersey nya nyaman, proses cepat, pelayanan baik. Recomended 👍👍👍',
  },
  {
    name: 'Panjerino Setiaji',
    meta: '5 ulasan · 20 foto',
    stars: 5,
    text: 'Rekomended sekali kakak, jersey pesanan saya selesai dengan cepat. Pilihan bahannya lengkap, designnya juga keren2. Terimakasih Ayres Apparel 🤩 TOP 🔥',
  },
  {
    name: 'A Priambudi',
    meta: '1 ulasan',
    stars: 5,
    text: 'rekomen bikin jersey disini!!',
  },
  {
    name: 'Narendra Irvan',
    meta: '6 ulasan · 1 foto',
    stars: 5,
    text: 'Pelayanannya ramah dan bisa bikin jersey dalam waktu yang super cepat 🤙',
  },
  {
    name: 'maya fadlilah asthanny',
    meta: '1 ulasan',
    stars: 5,
    text: 'Adem banget bahan ny 🥹🥰 makasih udh bantuin bikin jersey! Next repeat order ya kak! ❤️',
  },
  {
    name: 'angger p',
    meta: 'Local Guide · 11 ulasan · 31 foto',
    stars: 5,
    text: 'cakep bangetttt jerseynyaaaaa. pelayanan cepat, baik sekali mimpinnya. worth it to buy bangetttt dengan harga segitu tapi jerseynya cakep abis',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < count ? 'text-yellow-400' : 'text-[#333]'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewSlider() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));
  const r = reviews[current];

  return (
    <div className="flex-1 flex flex-col gap-4 min-w-0">
      {/* Card */}
      <div className="flex-1 rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] p-7 flex flex-col justify-between" style={{ minHeight: 270 }}>

        {/* Top: Google badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-[#555] text-xs">Google Review</span>
          </div>
          <Stars count={r.stars} />
        </div>

        {/* Quote */}
        <p className="text-white text-sm leading-relaxed flex-1 mb-6">
          "{r.text}"
        </p>

        {/* Reviewer */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#5b58ff]/20 border border-[#5b58ff]/30 flex items-center justify-center text-[#5b58ff] text-xs font-bold shrink-0">
            {r.name[0].toUpperCase()}
          </div>
          <div>
            <p className="text-white text-xs font-semibold">{r.name}</p>
            <p className="text-[#444] text-[10px]">{r.meta}</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-[#5b58ff]' : 'w-1.5 bg-[#2a2a2a] hover:bg-[#444]'}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} className="w-8 h-8 rounded-full border border-[#2a2a2a] text-[#666] hover:border-[#5b58ff] hover:text-white flex items-center justify-center transition-all text-sm">←</button>
          <button onClick={next} className="w-8 h-8 rounded-full bg-[#5b58ff] text-white hover:bg-[#4845dd] flex items-center justify-center transition-colors text-sm">→</button>
        </div>
      </div>
    </div>
  );
}
