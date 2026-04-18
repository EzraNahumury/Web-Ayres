import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Ayres Apparel",
};

export default function HomePage() {
  return <HomeContent />;
}
