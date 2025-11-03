import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Allura, Playfair_Display, Montserrat, Dancing_Script, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import TopNav from "@/app/components/Header";
import Navbar from "@/app/components/navigation/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-allura',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

// Export fonts for use in components
export { inter, allura, playfair, montserrat, dancingScript, cormorantGaramond };

export const metadata: Metadata = {
  title: "Glam Haus Design Co.",
  description: "Charcuterie Boards + Grazing Tables + Event Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${allura.variable} ${playfair.variable} ${montserrat.variable} ${dancingScript.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <TopNav />
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
