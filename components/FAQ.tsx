'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const t = useTranslation();
  const faqs = t.faq.items;

  return (
    <section className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-[#e03030] text-[11px] font-bold uppercase tracking-[0.2em] mb-3">{t.faq.label}</p>
          <h2 className="text-white text-3xl font-black uppercase">{t.faq.heading}</h2>
        </div>

        {/* Items */}
        <div className="flex flex-col divide-y divide-[#1a1a1a]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left gap-4 group"
              >
                <span className={`text-sm font-semibold transition-colors duration-200 ${open === i ? 'text-white' : 'text-[#888] group-hover:text-[#ccc]'}`}>
                  {faq.q}
                </span>
                <span className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${open === i ? 'border-[#e03030] text-[#e03030]' : 'border-[#333] text-[#555] group-hover:border-[#555]'}`}>
                  <svg className={`w-2.5 h-2.5 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 10 10">
                    <line x1="5" y1="1" x2="5" y2="9" />
                    <line x1="1" y1="5" x2="9" y2="5" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <p className="text-[#666] text-sm leading-relaxed pb-6 pr-10">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
