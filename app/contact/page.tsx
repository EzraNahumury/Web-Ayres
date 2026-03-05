import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hubungi Ayres Apparel untuk konsultasi dan pemesanan jersey custom.",
};

export default function ContactPage() {
  return <ContactClient />;
}
