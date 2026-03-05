import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const posts: Record<string, { title: string; date: string; content: string }> = {
  "jadwal-finalissima-2025-spanyol-vs-argentina": {
    title: "Jadwal Finalissima 2025 Spanyol vs Argentina",
    date: "17 Juli 2024",
    content: `
      <p>Pertandingan level top ini akan mempertemukan juara Euro 2024 dan juara Copa America 2024. Finalissima adalah pertandingan antara juara UEFA dan juara CONMEBOL yang mempertemukan dua kekuatan terbaik dunia.</p>
      <h2>Jadwal Pertandingan</h2>
      <p>Finalissima 2025 dijadwalkan berlangsung di Eropa. Spanyol sebagai juara Euro 2024 akan berhadapan dengan Argentina juara Copa America 2024 dalam pertandingan prestisius ini.</p>
      <h2>Dukung Tim Favorit Kamu</h2>
      <p>Nonton pertandingan seru ini sambil pakai jersey custom dari Ayres Apparel! Buat jersey tim favorit kamu sekarang dengan harga mulai Rp.70.000.</p>
    `,
  },
  "tips-merawat-kaos-jersey-bola": {
    title: "Tips Merawat Kaos Jersey Bola",
    date: "17 Juli 2024",
    content: `
      <p>Jersey bola adalah investasi yang perlu dirawat dengan baik. Berikut tips agar jersey kamu tetap awet dan terlihat seperti baru.</p>
      <h2>1. Cuci dengan Tangan</h2>
      <p>Lebih baik menggunakan tangan ketimbang mesin cuci. Mesin cuci bisa merusak serat kain dan print pada jersey.</p>
      <h2>2. Gunakan Air Dingin</h2>
      <p>Cuci dengan air dingin atau suhu rendah untuk menjaga warna dan elastisitas kain.</p>
      <h2>3. Hindari Pemutih</h2>
      <p>Jangan gunakan pemutih atau detergen keras yang bisa memudarkan warna jersey.</p>
      <h2>4. Jemur di Tempat Teduh</h2>
      <p>Hindari menjemur di bawah sinar matahari langsung. Angin-anginkan di tempat yang teduh.</p>
      <h2>5. Jangan Diperas Terlalu Kuat</h2>
      <p>Peras dengan lembut atau gulung dengan handuk untuk mengeluarkan air berlebih.</p>
    `,
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return { title: post.title };
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <>
      <section className="bg-[#f7f6fa] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#7a7a7a] text-sm mb-2">
            <Link href="/" className="hover:text-[#3631ee]">Home</Link>
            {" "}&rsaquo;{" "}
            <Link href="/news" className="hover:text-[#3631ee]">News</Link>
            {" "}&rsaquo; {post.title}
          </p>
          <p className="text-[#7a7a7a] text-sm mt-4">{post.date}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#181818] mt-2">{post.title}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div
            className="prose prose-lg max-w-none text-[#181818] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:text-[#7a7a7a] [&_p]:leading-relaxed [&_p]:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 p-8 bg-[#f7f6fa] rounded-2xl text-center">
            <p className="font-bold text-[#181818] text-lg mb-2">Tertarik Custom Jersey?</p>
            <p className="text-[#7a7a7a] mb-4">Mulai dari Rp.70.000, produksi 1 hari jadi!</p>
            <a
              href="https://wa.me/6287818310416"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#3631ee] text-white font-bold px-8 py-3 rounded hover:bg-[#2825cc] transition-colors uppercase"
            >
              Order Sekarang
            </a>
          </div>

          <div className="mt-8">
            <Link href="/news" className="text-[#3631ee] font-semibold hover:underline">
              ← Kembali ke News
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
