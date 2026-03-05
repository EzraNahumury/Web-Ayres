import type { Metadata } from "next";
import { Raleway, Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ayres Apparel – Tempatnya Custom Jersey",
    template: "%s | Ayres Apparel",
  },
  description:
    "Custom jersey berkualitas mulai Rp.70.000, produksi 1 hari jadi, tanpa minimum order. Melayani seluruh Indonesia.",
  keywords: ["custom jersey", "jersey bola", "jersey futsal", "jersey olahraga", "Yogyakarta"],
  openGraph: {
    siteName: "Ayres Apparel",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${raleway.variable} ${heebo.variable}`}>
      <body className={raleway.className}>
        {/* Dot Grid background — fixed, full screen, behind everything */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Particles
            particleColors={["#5b58ff", "#a78bfa", "#818cf8", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={80}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
