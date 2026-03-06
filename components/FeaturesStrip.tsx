const features = [
  { num: "Rp 70rb", label: "Harga Mulai", desc: "Jersey custom, kualitas tidak murahan." },
  { num: "Patren Lab", label: "Technology", desc: "Pola presisi tinggi, hasil beda kelas." },
  { num: "No MOQ", label: "Minimum Order", desc: "Satu biji pun kami kerjakan serius." },
  { num: "100%", label: "Bebas Desain", desc: "Logo, nama, nomor — semua terserah kamu." },
];

export default function FeaturesStrip() {
  return (
    <section className="pt-0 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
          {features.map((f) => (
            <div key={f.num} className="group relative flex flex-col items-center text-center px-6 py-12 bg-[#0a0a0a] overflow-hidden transition-colors duration-300 hover:bg-[#0d0d0f]">

              {/* subtle top accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#e03030] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* subtle bg glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(91,88,255,0.07) 0%, transparent 65%)' }} />

              {/* accent dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-[#e03030] mb-5 group-hover:scale-125 transition-transform duration-300" />

              {/* number */}
              <p className="text-[2.8rem] font-black text-white tracking-tight leading-none mb-2 group-hover:text-[#f5a0a0] transition-colors duration-300">
                {f.num}
              </p>

              {/* label */}
              <p className="text-[#e03030] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                {f.label}
              </p>

              {/* divider */}
              <div className="w-8 h-px bg-[#222] group-hover:bg-[#e03030]/30 mb-4 transition-colors duration-300" />

              {/* desc */}
              <p className="text-[#444] group-hover:text-[#686868] text-xs leading-relaxed transition-colors duration-300 max-w-[140px]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
