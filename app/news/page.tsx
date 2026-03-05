import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "Berita dan artikel terbaru seputar jersey, olahraga, dan Ayres Apparel.",
};

const posts = [
  {
    slug: "jadwal-finalissima-2025-spanyol-vs-argentina",
    title: "Jadwal Finalissima 2025 Spanyol vs Argentina",
    date: "17 Juli 2024",
    excerpt: "Pertandingan level top ini akan mempertemukan juara Euro 2024 dan juara Copa America 2024. Simak jadwal lengkapnya di sini.",
    img: null,
  },
  {
    slug: "tips-merawat-kaos-jersey-bola",
    title: "Tips Merawat Kaos Jersey Bola",
    date: "17 Juli 2024",
    excerpt: "Cara merawat jersey bola agar tetap awet dan terlihat seperti baru. Lebih baik menggunakan tangan ketimbang mesin cuci.",
    img: null,
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f7f6fa] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#7a7a7a] text-sm mb-2">Home &rsaquo; News</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#181818]">News</h1>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white border border-[#e5e5e5] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-[#f7f6fa] h-48 flex items-center justify-center">
                  {post.img ? (
                    <Image src={post.img} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
                  ) : (
                    <span className="text-5xl">📰</span>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-[#7a7a7a] text-xs mb-3">{post.date}</p>
                  <h2 className="font-bold text-lg text-[#181818] mb-3 leading-snug">
                    <Link href={`/news/${post.slug}`} className="hover:text-[#3631ee] transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-[#7a7a7a] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                    href={`/news/${post.slug}`}
                    className="text-[#3631ee] font-semibold text-sm hover:underline"
                  >
                    Baca Selengkapnya →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
