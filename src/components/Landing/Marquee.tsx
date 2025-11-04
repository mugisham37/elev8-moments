import { playfair } from '@/app/layout';

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
  const animationName = direction === 'left' ? 'marquee-scroll-left' : 'marquee-scroll-right';
  
  return (
    <div className={`marquee ${className}`}>
      <div 
        className={`${playfair.className} marquee-content ${animationName}`}
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
      </div>
    </div>
  );
}