import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Allura, Playfair_Display, Montserrat, Dancing_Script, Cormorant_Garamond, Crimson_Text, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/Layout/navigation/TopNav";
import { MainNavigation } from "@/components/Layout/navigation/MainNav";
import Footer from "@/components/Layout/Footer";

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

const crimsonText = Crimson_Text({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
});

const pinyonScript = Pinyon_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pinyon',
  display: 'swap',
});

// Export fonts for use in components
export { inter, allura, playfair, montserrat, dancingScript, cormorantGaramond, crimsonText, pinyonScript };

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
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${allura.variable} ${playfair.variable} ${montserrat.variable} ${dancingScript.variable} ${cormorantGaramond.variable} ${crimsonText.variable} ${pinyonScript.variable} antialiased`}
        suppressHydrationWarning
      >
        <TopNav />
        <MainNavigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
