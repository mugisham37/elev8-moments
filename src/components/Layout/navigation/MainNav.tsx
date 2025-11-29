'use client';

import Link from 'next/link';
import { Instagram, Facebook, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className = '' }: MainNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`main-navigation ${className}`}
      role="banner"
    >
      {/* Social Icons Section - Desktop/Tablet */}
      <div className="social-icons-container">
        <a 
          href="https://instagram.com" 
          className="social-icon"
          aria-label="Instagram profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={24} />
        </a>
        <a 
          href="https://facebook.com" 
          className="social-icon"
          aria-label="Facebook profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook size={24} />
        </a>
      </div>
      
      {/* Desktop/Tablet Navigation Menu */}
      <nav className="nav-menu" aria-label="Main navigation">
        <Link href="/" className="nav-link">
          HOME
        </Link>
        <Link href="/experiences" className="nav-link">
          EXPERIENCES
        </Link>
        <Link href="/event-design" className="nav-link">
          EVENT DESIGN
        </Link>
        <Link href="/gifting" className="nav-link">
          GIFTING
        </Link>
        <Link href="/about" className="nav-link">
          ABOUT
        </Link>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        id="mobile-menu"
        className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <nav className="mobile-nav-menu" aria-label="Mobile navigation">
          <Link href="/" className="mobile-nav-link" onClick={handleLinkClick}>
            HOME
          </Link>
          <Link href="/experiences" className="mobile-nav-link" onClick={handleLinkClick}>
            EXPERIENCES
          </Link>
          <Link href="/event-design" className="mobile-nav-link" onClick={handleLinkClick}>
            EVENT DESIGN
          </Link>
          <Link href="/gifting" className="mobile-nav-link" onClick={handleLinkClick}>
            GIFTING
          </Link>
          <Link href="/about" className="mobile-nav-link" onClick={handleLinkClick}>
            ABOUT
          </Link>

          {/* Social Icons in Mobile Menu */}
          <div className="mobile-social-icons">
            <a 
              href="https://instagram.com" 
              className="mobile-social-icon"
              aria-label="Instagram profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={28} />
            </a>
            <a 
              href="https://facebook.com" 
              className="mobile-social-icon"
              aria-label="Facebook profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={28} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
