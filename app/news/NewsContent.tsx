"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n";

export default function NewsContent() {
  const t = useTranslation();
  const n = t.news;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#f7f6fa] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#7a7a7a] text-sm mb-2">{n.breadcrumb}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#181818]">{n.title}</h1>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {n.posts.map((post) => (
              <article key={post.slug} className="bg-white border border-[#e5e5e5] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-[#f7f6fa] h-48 flex items-center justify-center">
                  <span className="text-5xl">📰</span>
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
                    {t.common.readMore}
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
