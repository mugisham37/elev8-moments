"use client";

import { FloralLogo } from "./components/FloralLogo";
import Image from "next/image";

export default function FloralSection() {
  const handleQuoteRequest = () => {
    console.log("Request quote clicked");
  };

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1646075514021-398d0925d4a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdGFibGUlMjBmbG93ZXJzJTIwY2VudGVycGllY2V8ZW58MXx8fHwxNzYyMjg0ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Elegant wedding table setting with tall floral centerpiece featuring burgundy and white flowers with eucalyptus garland",
      className: "w-[315px] h-[305px]",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1757672092214-155b697c8a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGZsb3dlcnMlMjB3b29kJTIwZGlzcGxheXxlbnwxfHx8fDE3NjIyODQ4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "White floral arrangement with greenery on geometric wooden display stand with plates",
      className: "w-[220px] h-[260px]",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1651362831065-ec0af833c9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWhsaWElMjBmbG93ZXJzJTIwdmFzZSUyMGRhcmt8ZW58MXx8fHwxNjIyODQ4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "White dahlias and purple flowers in glass vase on elegant dark table setting with wine glasses",
      className: "w-[315px] h-[305px]",
    },
  ];

  return (
    <>
      <section
        className="flex min-h-[680px] w-screen flex-col items-center justify-start bg-[#1a1a1a] px-20 py-15"
        role="banner"
      >
        <div className="flex w-full max-w-[1440px] flex-col items-center">
          {/* Header Section */}
          <header className="mb-12 grid w-full grid-cols-[35%_65%] gap-10">
            {/* Logo */}
            <FloralLogo />

            {/* Content */}
            <div className="flex max-w-[720px] flex-col items-start">
              <h2 className="mb-6 text-[14px] font-normal uppercase leading-relaxed tracking-[3px] text-[#e5e5e5] font-montserrat">
                ELEVATE YOUR SPACE. ONE BLOOM AT A TIME.
              </h2>
              <p className="m-0 max-w-[680px] text-[16px] font-light leading-7 tracking-[0.3px] text-[#d0d0d0] font-montserrat">
                Welcome to a world where blossoms tell a story! At Glam Haus
                Design Co. we specialize in crafting stunning floral
                arrangements perfect for any occasion. Whether you&apos;re
                celebrating a wedding, hosting a glamorous event, or simply
                wanting to brighten your space, our exquisite designs are
                tailored to bring joy and beauty to your life.
              </p>
            </div>
          </header>

          {/* Image Gallery */}
          <div className="mb-12 flex w-full flex-row items-center justify-center gap-6">
            {images.map((image) => (
              <figure key={image.id} className="m-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.id === 2 ? 220 : 315}
                  height={image.id === 2 ? 260 : 305}
                  className={`${image.className} block object-cover transition-all duration-400 ease-in-out hover:scale-105 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.5)] hover:cursor-pointer`}
                  priority
                />
              </figure>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex w-full justify-center">
            <button
              type="button"
              onClick={handleQuoteRequest}
              aria-label="Request a quote for floral arrangements"
              className="min-w-[240px] cursor-pointer rounded-none border border-[#505050] bg-transparent px-12 py-4 text-[14px] font-normal uppercase tracking-[2.5px] text-white shadow-[0px_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-[#808080] hover:bg-white/10 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.4)] active:scale-[0.98] active:bg-white/15 active:transition-all active:duration-150 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent font-montserrat"
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
        /* Tablet (768px - 1439px) */
        @media (max-width: 1439px) {
          section {
            padding: 40px;
          }

          header {
            gap: 32px;
          }

          .flex.gap-6 {
            gap: 16px;
          }

          figure:nth-child(1) img,
          figure:nth-child(3) img {
            width: 280px;
            height: 270px;
          }

          figure:nth-child(2) img {
            width: 200px;
            height: 240px;
          }
        }

        /* Mobile (< 768px) */
        @media (max-width: 767px) {
          section {
            padding: 32px 24px;
            min-height: auto;
          }

          header {
            grid-template-columns: 1fr;
            gap: 32px;
            margin-bottom: 40px;
            text-align: center;
          }

          header > div:first-child {
            align-items: center;
            margin: 0 auto;
          }

          header > div:last-child {
            align-items: center;
            text-align: center;
            max-width: 100%;
          }

          header h1 {
            font-size: 60px;
          }

          header span {
            font-size: 16px;
            letter-spacing: 6px;
          }

          header h2 {
            font-size: 12px;
            letter-spacing: 2px;
            margin-bottom: 20px;
          }

          header p {
            font-size: 14px;
            line-height: 24px;
            max-width: 100%;
          }

          .flex.gap-6 {
            flex-direction: column;
            gap: 16px;
            margin-bottom: 40px;
          }

          figure img {
            width: 100% !important;
            height: auto !important;
            aspect-ratio: 1 / 1;
          }

          figure:nth-child(2) img {
            aspect-ratio: 0.85 / 1;
          }

          button {
            width: 100%;
            max-width: 320px;
            padding: 16px 32px;
            font-size: 13px;
            letter-spacing: 2px;
          }
        }

        /* Extra small devices */
        @media (max-width: 480px) {
          header h1 {
            font-size: 48px;
          }

          header span {
            font-size: 14px;
            letter-spacing: 4px;
          }

          header h2 {
            font-size: 11px;
          }

          header p {
            font-size: 13px;
            line-height: 22px;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          button {
            border-width: 2px;
          }

          button:focus {
            outline-width: 3px;
          }
        }
      `}</style>
    </>
  );
}
