import { playfair } from '@/app/layout';
import styles from './Marquee.module.css';

interface MarqueeProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

/**
 * Marquee Component for Scrolling Text
 * 
 * Features:
 * - Continuous horizontal scrolling animation
 * - Customizable speed and direction
 * - Seamless loop with duplicated text
 * - Matches the "Glam Haus Design Co." styling from the image
 */
export default function Marquee({ 
  text, 
  speed = 30, 
  direction = 'left',
  className = ''
}: MarqueeProps) {
  const animationName = direction === 'left' ? styles.scrollLeft : styles.scrollRight;
  
  return (
    <div className={`${styles.marquee} ${className}`}>
      <div 
        className={`${playfair.className} ${styles.content} ${animationName}`}
        style={{ animationDuration: `${speed}s` }}
      >
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
}