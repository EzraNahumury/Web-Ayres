import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description: "Ayres Apparel – produsen jersey custom dengan tema nusantara, harga terjangkau, kualitas internasional.",
};

const team = [
  { name: "Ajian Sakti", role: "Designer", img: "/uploads/2024/07/352207841_227190743440526_7664507984667158887_n.jpg" },
  { name: "Putri CS", role: "Customer Service & After-Sales", img: null },
  { name: "Thomas London", role: "Production", img: null },
];

const clients = [
  { name: "AAU", src: "/uploads/2024/07/AAU.png" },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f7f6fa] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#7a7a7a] text-sm mb-2">Home &rsaquo; About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#181818]">About Us</h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#3631ee] font-semibold uppercase tracking-widest text-sm mb-3">Siapa Kami</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#181818] mb-6">
                Tempatnya Custom Jersey<br />Yang Indonesia Banget
              </h2>
              <p className="text-[#7a7a7a] leading-relaxed mb-4">
                Ayres Apparel adalah produsen jersey custom yang mengutamakan tema dan nilai nusantara.
                Kami hadir untuk membuktikan bahwa jersey berkualitas internasional bisa didapat dengan harga
                yang sangat terjangkau.
              </p>
              <p className="text-[#7a7a7a] leading-relaxed mb-4">
                Dengan kapasitas produksi mencapai ribuan unit per bulan dan opsi produksi same-day,
                kami siap melayani kebutuhan tim, komunitas, hingga korporasi di seluruh Indonesia.
              </p>
              <p className="text-[#7a7a7a] leading-relaxed">
                <span className="font-semibold text-[#181818]">Kepercayaan adalah hal yang sangat berharga</span> bagi kami.
                Setiap pesanan ditangani dengan dedikasi penuh oleh tim yang berpengalaman.
              </p>
            </div>
            <div>
              <Image
                src="/uploads/2024/07/43.jpg"
                alt="Ayres Apparel Workshop"
                width={600}
                height={500}
                className="rounded-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#3631ee] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "5+", label: "Tahun Pengalaman" },
              { number: "500+", label: "Tim Dilayani" },
              { number: "10.000+", label: "Unit Diproduksi" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold mb-2">{s.number}</div>
                <div className="text-white/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#f7f6fa]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#181818] mb-4">Tim Kami</h2>
          <p className="text-center text-[#7a7a7a] mb-12">
            &ldquo;Teamwork makes the dream work&rdquo;
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden shadow-sm text-center">
                {member.img ? (
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-[#e5e5e5] flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-bold text-[#181818]">{member.name}</h3>
                  <p className="text-[#7a7a7a] text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#181818] mb-12">
            Dipercaya Oleh
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {clients.map((c) => (
              <Image
                key={c.name}
                src={c.src}
                alt={c.name}
                width={100}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
            {/* placeholder for more clients */}
            {["Bank BNI", "Biak United", "BRIMOB", "Honda", "Pertamina", "UGM", "UNY", "UNNES"].map((name) => (
              <div key={name} className="bg-[#f7f6fa] rounded-lg px-6 py-3 text-sm font-semibold text-[#7a7a7a]">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
