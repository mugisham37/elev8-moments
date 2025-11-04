import React from 'react';

interface NavigationProps {
  className?: string;
}

export function TopNav({ className = '' }: NavigationProps) {
  return (
    <header 
      className={`glam-haus-header ${className}`}
      role="banner"
    >
      {/* Left Section */}
      <nav className="glam-haus-section glam-haus-section--left">
        <p className="glam-haus-question">Need event design?</p>
        <a 
          href="/services" 
          className="glam-haus-cta"
          aria-label="View our event design services"
        >
          VIEW OUR DESIGN SERVICES
        </a>
      </nav>
      
      {/* Center Section */}
      <div className="glam-haus-section glam-haus-section--center">
        <h1 className="glam-haus-brand">GLAM HAUS DESIGN CO.</h1>
        <div className="glam-haus-underline" role="presentation" aria-hidden="true" />
        <p className="glam-haus-tagline">
          Charcuterie Boards + Grazing Tables + Event Design
        </p>
      </div>
      
      {/* Right Section */}
      <nav className="glam-haus-section glam-haus-section--right">
        <p className="glam-haus-question">
          Looking for the perfect gift<br />for someone special?
        </p>
        <a 
          href="/boxes" 
          className="glam-haus-cta"
          aria-label="View our gift boxes"
        >
          VIEW OUR BOXES
        </a>
      </nav>
    </header>
  );
}
