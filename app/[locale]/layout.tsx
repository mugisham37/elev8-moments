import type React from "react";
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { Inter, Montserrat } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { LoadingProvider } from "@/components/loading-provider";
import NextTopLoader from "nextjs-toploader";
import { getDictionary } from "@/lib/dictionary";
import { Locale, getLocaleDirection } from "@/types/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Elev8 Rwanda | Media & Moments",
  description:
    "Elev8 Rwanda - Social Media Marketing, Podcast Production, Event Planning & Gifting Services",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const dict = await getDictionary(locale);
  const dir = getLocaleDirection(locale);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <NextTopLoader color="#8B0000" showSpinner={false} />
            <Header dict={dict} />
            <main>{children}</main>
            <Footer dict={dict} />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
