import type { Metadata } from "next";
import OrderContent from "./OrderContent";

export const metadata: Metadata = {
  title: "Order",
  description: "How to order custom jerseys at Ayres Apparel — easy, fast, and trusted.",
};

export default function OrderPage() {
  return <OrderContent />;
}
