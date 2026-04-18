"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { newsArticles, newsCta } from "@/lib/i18n/newsArticles";

export default function NewsPostClient({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const post = newsArticles[lang][slug] ?? newsArticles.en[slug];
  const cta = newsCta[lang];

  if (!post) {
    return (
      <section className="py-20 text-center">
        <p className="text-[#7a7a7a]">Post not found.</p>
      </section>
    );
  }

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
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="mt-12 p-8 bg-[#f7f6fa] rounded-2xl text-center">
            <p className="font-bold text-[#181818] text-lg mb-2">{cta.heading}</p>
            <p className="text-[#7a7a7a] mb-4">{cta.desc}</p>
            <a
              href="https://wa.me/6287818310416"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#3631ee] text-white font-bold px-8 py-3 rounded hover:bg-[#2825cc] transition-colors uppercase"
            >
              {cta.cta}
            </a>
          </div>

          <div className="mt-8">
            <Link href="/news" className="text-[#3631ee] font-semibold hover:underline">
              {cta.back}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
