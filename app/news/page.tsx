import type { Metadata } from "next";
import NewsContent from "./NewsContent";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and articles about jerseys, sports, and Ayres Apparel.",
};

export default function NewsPage() {
  return <NewsContent />;
}
