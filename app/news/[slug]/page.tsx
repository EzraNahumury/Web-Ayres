import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { newsArticles } from "@/lib/i18n/newsArticles";
import NewsPostClient from "./NewsPostClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = newsArticles.en[slug];
  if (!post) return { title: "Post Not Found" };
  return { title: post.title };
}

export function generateStaticParams() {
  return Object.keys(newsArticles.en).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  if (!newsArticles.en[slug]) notFound();
  return <NewsPostClient slug={slug} />;
}
