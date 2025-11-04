'use client';

import { Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/constants/navigation';

export default function SocialIcons() {
  return (
    <div className="flex items-center" style={{ gap: '22px' }}>
      <Link
        href={SOCIAL_LINKS[0].href}
        aria-label={SOCIAL_LINKS[0].ariaLabel}
        className="transition-opacity duration-300 ease-in-out hover:opacity-70"
        style={{ cursor: 'pointer' }}
      >
        <Instagram 
          size={21} 
          color="#FFFFFF" 
          strokeWidth={1.5}
        />
      </Link>
      <Link
        href={SOCIAL_LINKS[1].href}
        aria-label={SOCIAL_LINKS[1].ariaLabel}
        className="transition-opacity duration-300 ease-in-out hover:opacity-70"
        style={{ cursor: 'pointer' }}
      >
        <Facebook 
          size={21} 
          color="#FFFFFF" 
          strokeWidth={1.5}
        />
      </Link>
    </div>
  );
}