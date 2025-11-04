import Link from 'next/link';
import { inter } from '@/src/app/layout';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

/**
 * Reusable Button Component
 * 
 * Features:
 * - Primary variant matches the "VIEW MORE" button styling
 * - Supports both Link and button functionality
 * - Hover states and smooth transitions
 * - Responsive design
 */
export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = ''
}: ButtonProps) {
  const buttonClasses = `${inter.className} ${styles.button} ${styles[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}