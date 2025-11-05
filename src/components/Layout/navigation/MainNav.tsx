import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className = '' }: MainNavigationProps) {
  return (
    <header 
      className={`main-navigation ${className}`}
      role="banner"
    >
      {/* Social Icons Section */}
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
      
      {/* Navigation Menu */}
      <nav className="nav-menu" aria-label="Main navigation">
        <Link href="/" className="nav-link">
          HOME
        </Link>
        <Link href="/grazing-tables" className="nav-link">
          GRAZING TABLES
        </Link>
        <Link href="/event-design" className="nav-link">
          EVENT DESIGN
        </Link>
        <Link href="/elf-kits" className="nav-link">
          ELF KITS
        </Link>
        <Link href="/about" className="nav-link">
          ABOUT
        </Link>
      </nav>
    </header>
  );
}
