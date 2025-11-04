'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/app/constants/navigation';

export default function NavLinks() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        role="navigation" 
        aria-label="Main navigation"
        className="hidden md:block"
      >
        <ul 
          className="flex items-center list-none m-0 p-0 nav-links" 
          style={{ gap: '45px' }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-opacity duration-300 ease-in-out hover:opacity-70"
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontSize: '14.5px',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '1.8px',
                  lineHeight: 1,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          className="hamburger-menu transition-opacity duration-300 ease-in-out hover:opacity-70"
        >
          {isMobileMenuOpen ? (
            <X size={24} color="#FFFFFF" />
          ) : (
            <Menu size={24} color="#FFFFFF" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <nav 
            role="navigation" 
            aria-label="Mobile navigation"
            className="nav-menu mobile-open"
          >
            <ul className="flex flex-col list-none m-0 p-0 gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="transition-opacity duration-300 ease-in-out hover:opacity-70"
                    style={{
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontSize: '14.5px',
                      fontWeight: 400,
                      color: '#FFFFFF',
                      textTransform: 'uppercase',
                      letterSpacing: '1.8px',
                      lineHeight: 1,
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}