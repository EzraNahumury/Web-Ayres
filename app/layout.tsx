import type { Metadata } from "next";
import { Raleway, Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import { LanguageProvider } from "@/lib/i18n";

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
    default: "Ayres Apparel",
    template: "%s | Ayres Apparel",
  },
  description:
    "Premium custom jersey starting at Rp 70,000. Guaranteed deadlines, Ayres pattern a cut above. Serving all of Indonesia and beyond.",
  keywords: ["custom jersey", "football jersey", "futsal jersey", "sports apparel", "Yogyakarta"],
  openGraph: {
    siteName: "Ayres Apparel",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${heebo.variable}`}>
      <body className={raleway.className}>
        <LanguageProvider>
          {/* Dot Grid background — fixed, full screen, behind everything */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <Particles
              particleColors={["#e03030", "#a78bfa", "#818cf8", "#ffffff"]}
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
        </LanguageProvider>
      </body>
    </html>
  );
}
