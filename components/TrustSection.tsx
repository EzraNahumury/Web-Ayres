'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';

export default function TrustSection() {
  const t = useTranslation();
  const tabs = t.trust.tabs;
  const [active, setActive] = useState<string>(tabs[0].id);
  const current = tabs.find((x) => x.id === active) ?? tabs[0];

  return (
    <section className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* Kiri: masalah — berubah sesuai tab aktif */}
        <div>
          <h3 className="text-white font-black text-2xl uppercase leading-tight mb-2 whitespace-pre-line">
            {t.trust.heading}
          </h3>
          <p className="text-[#666] text-sm mb-6">
            {t.trust.intro}
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
            {t.trust.message}
          </p>
          <div className="flex flex-col divide-y divide-[#1a1a1a]">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="group flex items-center justify-between py-5 text-left cursor-pointer w-full"
              >
                <div className="flex items-center gap-4">
                  <span className={`text-[11px] font-bold tabular-nums transition-colors duration-200 ${active === tab.id ? 'text-[#e03030]' : 'text-[#333]'}`}>
                    0{i + 1}
                  </span>
                  <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${active === tab.id ? 'text-white' : 'text-[#555] group-hover:text-[#999]'}`}>
                    {tab.label}
                  </span>
                </div>
                <span className={`text-xs transition-colors duration-200 ${active === tab.id ? 'text-[#e03030]' : 'text-[#333] group-hover:text-[#555]'}`}>
                  {active === tab.id ? '●' : '○'}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
