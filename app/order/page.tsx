import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order",
  description: "Cara pesan jersey custom di Ayres Apparel – mudah, cepat, dan terpercaya.",
};

const steps = [
  { number: "01", title: "Hubungi Customer Service", desc: "Chat via WhatsApp atau form kontak kami untuk mulai pemesanan." },
  { number: "02", title: "Tentukan Desain", desc: "Diskusikan desain jersey yang kamu inginkan bersama tim desainer kami." },
  { number: "03", title: "Down Payment (DP)", desc: "Lakukan pembayaran uang muka untuk mengkonfirmasi pesanan." },
  { number: "04", title: "Invoice & Antrian", desc: "Kami akan kirimkan invoice dan posisi antrian produksi kamu." },
  { number: "05", title: "Proses Produksi", desc: "Jersey kamu mulai diproduksi oleh tim profesional kami." },
  { number: "06", title: "Pelunasan", desc: "Selesaikan pembayaran sebelum pesanan dikirim." },
  { number: "07", title: "Pengiriman", desc: "Jersey dikemas dengan aman dan dikirim ke alamat kamu." },
  { number: "08", title: "Produk Sampai", desc: "Jersey custom impian kamu sudah siap dipakai! 🎉" },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "Custom"];

export default function OrderPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f7f6fa] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#7a7a7a] text-sm mb-2">Home &rsaquo; Order</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#181818]">Cara Order</h1>
        </div>
      </section>

      {/* How To Order */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#181818] mb-4">
            Cara Pemesanan
          </h2>
          <p className="text-center text-[#7a7a7a] mb-14">
            Ikuti langkah-langkah berikut untuk memesan jersey custom kamu
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5 bg-white border border-[#e5e5e5] rounded-xl p-6 hover:border-[#3631ee] transition-colors">
                <span className="text-3xl font-bold text-[#3631ee] opacity-40 shrink-0 w-12">{step.number}</span>
                <div>
                  <h3 className="font-bold text-[#181818] mb-1">{step.title}</h3>
                  <p className="text-[#7a7a7a] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="py-16 bg-[#f7f6fa]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#181818] mb-8">Ukuran Tersedia</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sizes.map((size) => (
              <span key={size} className="bg-white border border-[#e5e5e5] rounded-lg px-6 py-3 font-bold text-[#181818]">
                {size}
              </span>
            ))}
          </div>
          <p className="text-center text-[#7a7a7a] text-sm mt-6">
            *Size chart detail tersedia. Hubungi CS untuk informasi lengkap.
          </p>
        </div>
      </section>

      {/* Payment */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#181818] mb-8">Informasi Pembayaran</h2>
          <div className="bg-[#f7f6fa] rounded-2xl p-8 text-center max-w-sm mx-auto">
            <p className="text-[#7a7a7a] text-sm mb-2">Transfer Bank</p>
            <p className="text-xl font-bold text-[#181818]">BCA</p>
            <p className="text-2xl font-bold text-[#3631ee] my-2">456 123 789</p>
            <p className="text-[#7a7a7a] text-sm">a.n. Ayres</p>
          </div>
        </div>
      </section>

      {/* Corporate */}
      <section className="py-16 bg-[#181818] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Pesanan Korporasi</h2>
          <p className="text-white/70 mb-8">
            Butuh jersey dalam jumlah besar untuk perusahaan, instansi, atau event?
            Kami menyediakan layanan korporasi dengan harga spesial.
          </p>
          <a
            href="https://wa.me/6287818310416?text=Halo%20Ayres%20Apparel%2C%20saya%20ingin%20bertanya%20tentang%20pesanan%20korporasi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#3631ee] text-white font-bold px-8 py-4 rounded hover:bg-[#2825cc] transition-colors uppercase"
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </>
  );
}
