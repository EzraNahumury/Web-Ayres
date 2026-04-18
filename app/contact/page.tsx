import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ayres Apparel for consultation and custom jersey orders.",
};

export default function ContactPage() {
  return <ContactClient />;
}
