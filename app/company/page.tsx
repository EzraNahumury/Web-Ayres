import type { Metadata } from "next";
import CompanyContent from "./CompanyContent";

export const metadata: Metadata = {
  title: "Company",
  description: "Ayres Apparel – custom jersey producer with Nusantara themes, affordable prices, international quality.",
};

export default function CompanyPage() {
  return <CompanyContent />;
}
