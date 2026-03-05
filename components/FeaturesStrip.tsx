'use client';

import { motion } from 'motion/react';

const features = [
  { num: "Rp 70rb", title: "Harga Mulai", desc: "Jersey custom terjangkau, kualitas tidak murahan." },
  { num: "1 Hari", title: "Jadi", desc: "Pesan hari ini. Besok sudah di tangan kamu." },
  { num: "0", title: "Minimum Order", desc: "Satu biji pun kami kerjakan dengan serius." },
  { num: "100%", title: "Bebas Desain", desc: "Logo, nama, nomor punggung — semua terserah kamu." },
];

export default function FeaturesStrip() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col justify-between p-6 rounded-xl border border-[#1a1a1a] hover:border-[#5b58ff]/40 transition-all duration-300 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              {/* glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                style={{ background: 'radial-gradient(ellipse at top left, rgba(91,88,255,0.08) 0%, transparent 70%)' }} />

              {/* number */}
              <motion.span
                className="text-5xl font-black tracking-tighter leading-none mb-6 block"
                style={{ color: 'transparent', WebkitTextStroke: '1.5px #5b58ff' }}
                initial={{ WebkitTextStroke: '1.5px #5b58ff' } as React.CSSProperties}
                whileHover={{ color: '#5b58ff', WebkitTextStroke: '1.5px #5b58ff' } as React.CSSProperties}
                transition={{ duration: 0.2 }}
              >
                {f.num}
              </motion.span>

              {/* text */}
              <div>
                <p className="text-white font-bold text-sm">{f.title}</p>
                <p className="text-[#4a4a4a] group-hover:text-[#666] text-xs leading-relaxed mt-1 transition-colors">{f.desc}</p>
              </div>

              {/* bottom accent line */}
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#5b58ff] to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
