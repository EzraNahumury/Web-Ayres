import type { Metadata } from "next";
import ProductContent from "./ProductContent";

export const metadata: Metadata = {
  title: "Product",
  description: "Ayres Apparel custom jersey catalog — Classic and Pro packages.",
};

export default function ProductPage() {
  return <ProductContent />;
}
