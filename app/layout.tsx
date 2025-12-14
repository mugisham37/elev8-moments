import React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Raleway, Montserrat, Playfair_Display } from 'next/font/google'
import MainMenu from '@/components/Shared/Layout/MainMenu'
import MobileMenuWrapper from '@/components/Shared/Layout/MobileMenuWrapper'
import DesktopMenu from '@/components/Shared/Layout/DesktopMenu'
import Instagram from '@/components/Shared/Layout/Instagram'
import Footer from '@/components/Shared/Layout/Footer'
import Legal from '@/components/Shared/Layout/Legal'
import './globals.css'


const raleway = Raleway({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Curated Experiences + Thoughtful Gifting | Elev8 Moments | Kigali, Rwanda',
  description: "Kigali's premier experience curation and thoughtful gifting specialists. We create intentional experiences, soulful workshops, and meaningful gifts that transform ordinary moments into extraordinary memories. From creative workshops like Bloom & Bond to corporate retreats and Visit Rwanda experiences, our curated offerings bring connection and joy to every occasion in Rwanda.",
  openGraph: {
    images: ['/images/33.jpg'],
  },
  alternates: {
    canonical: 'https://elev8moments.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${montserrat.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="preconnect" href="https://static.showit.co" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://lib.showit.co/engine/2.2.6/showit.css"
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: Noiretblanc;
              src: url('https://static.showit.co/file/-2eCp0_jSgW6z2q5bKVLgA/shared/noiretblanc-webfont.woff');
            }
            @font-face {
              font-family: Strings;
              src: url('https://static.showit.co/file/lbBSknNrRtmaP384hN7Xnw/shared/strings.woff');
            }
          `
        }} />
      </head>
      <body>
        <div id="si-sp" className="sp" style={{}}>
          {/* Navigation - Fixed/Sticky Elements */}
          <MainMenu />
          <MobileMenuWrapper />
          <DesktopMenu />
          
          {/* Main Content */}
          {children}
          
          {/* Footer */}
          <Instagram />
          <Footer />
          <Legal />
        </div>

        {/* jQuery and Showit Scripts */}
        <Script
          id="si-jquery"
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://lib.showit.co/widgets/sliding-gallery/2.0.4/gallery.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://lib.showit.co/engine/2.2.6/showit-lib.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://lib.showit.co/engine/2.2.6/showit.min.js"
          strategy="afterInteractive"
        />

        {/* Showit Init Data - Loaded from public JSON file */}
        <Script
          id="init_data_loader"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              fetch('/showit-init-data-full.json')
                .then(r => r.json())
                .then(data => {
                  const script = document.createElement('script');
                  script.id = 'init_data';
                  script.type = 'application/json';
                  script.textContent = JSON.stringify(data);
                  document.head.appendChild(script);
                  window.showitInitData = data;
                })
                .catch(e => console.error('Failed to load Showit init data:', e));
            `
          }}
        />

        {/* Showit Configuration */}
        <Script
          src="/showit-config.js"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}
