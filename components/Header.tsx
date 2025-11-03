'use client';

import { Bodoni_Moda, Inter } from 'next/font/google';
import Link from 'next/link';

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['600'],
  display: 'swap',
});

export default function TopNav() {
  return (
    <header 
      className="w-full relative header-grid"
      style={{
        minHeight: '230px',
        backgroundColor: '#FAF6F1',
        display: 'grid',
        gridTemplateColumns: '25% 50% 25%',
        alignItems: 'center',
      }}
    >
      {/* Left Section */}
      <div 
        className="flex flex-col justify-center"
        style={{ 
          paddingLeft: '80px',
          alignItems: 'flex-start'
        }}
      >
        <h2 
          className={`${bodoniModa.className}`}
          style={{
            fontSize: '25px',
            fontWeight: 'lighter',
            color: '#2B2522',
            letterSpacing: '0.02em',
            lineHeight: '1.35',
            marginBottom: '14px',
            textAlign: 'left'
          }}
        >
          Need event design?
        </h2>
        <Link 
          href="#design-services"
          className={`${inter.className} uppercase hover:underline`}
          style={{
            fontSize: '11px',
            fontWeight: 600,
            color: '#2B2522',
            letterSpacing: '0.18em',
            textDecoration: 'none',
          }}
        >
          VIEW OUR DESIGN SERVICES
        </Link>
      </div>

      {/* Left Divider */}
      <div 
        className="absolute"
        style={{
          left: '25%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '1px',
          height: '150px',
          backgroundColor: '#C4B5AA',
        }}
      />

      {/* Center Section */}
      <div 
        className="flex flex-col justify-center items-center"
        style={{ 
          paddingLeft: '60px', 
          paddingRight: '60px' 
        }}
      >
        <h1 
          className={`${bodoniModa.className} uppercase`}
          style={{
            fontSize: '56px',
            fontWeight: 'lighter',
            color: '#2B2522',
            letterSpacing: '0.1em',
            marginBottom: '10px',
            textAlign: 'center',
            lineHeight: '1'
          }}
        >
          GLAM HAUS DESIGN CO.
        </h1>
        <div 
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#2B2522',
            marginBottom: '18px'
          }}
        />
        <p 
          className={`${bodoniModa.className}`}
          style={{
            fontSize: '15.5px',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#6B625B',
            letterSpacing: '0.01em',
            textAlign: 'center',
            lineHeight: '1.2'
          }}
        >
          Charcuterie Boards + Grazing Tables + Event Design
        </p>
      </div>

      {/* Right Divider */}
      <div 
        className="absolute"
        style={{
          left: '75%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '1px',
          height: '150px',
          backgroundColor: '#C4B5AA',
        }}
      />

      {/* Right Section */}
      <div 
        className="flex flex-col justify-center"
        style={{ 
          paddingRight: '80px',
          alignItems: 'flex-end'
        }}
      >
        <h2 
          className={`${bodoniModa.className}`}
          style={{
            fontSize: '25px',
            fontWeight: 'lighter',
            color: '#2B2522',
            letterSpacing: '0.02em',
            lineHeight: '1.35',
            marginBottom: '14px',
            textAlign: 'right'
          }}
        >
          Looking for the perfect gift<br />
          for someone special?
        </h2>
        <Link 
          href="#gift-boxes"
          className={`${inter.className} uppercase hover:underline`}
          style={{
            fontSize: '11px',
            fontWeight: 600,
            color: '#2B2522',
            letterSpacing: '0.18em',
            textDecoration: 'none',
          }}
        >
          VIEW OUR BOXES
        </Link>
      </div>
    </header>
  );
}