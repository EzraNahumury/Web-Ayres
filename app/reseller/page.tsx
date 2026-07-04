import type { Metadata } from "next";
import ResellerClient from "./ResellerClient";

export const metadata: Metadata = {
  title: "Reseller Registration",
  description: "Register as an Ayres Apparel reseller.",
};

export default function ResellerPage() {
  return <ResellerClient />;
}
