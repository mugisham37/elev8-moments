import Image from 'next/image';
import { inter, playfair } from '@/app/layout';
import { Button } from '@/components/ui/Button';

/**
 * Fruit & Specialty Boards Section Component
 * 
 * Pixel-perfect recreation of the fruit boards section featuring:
 * - Two-column asymmetric layout (60/40 split)
 * - Circular fruit board image on the left
 * - Typography hierarchy with Playfair Display and Inter
 * - Exact color matching and spacing
 */
export default function FruitSpecialtyBoards() {
  return (
    <section className="fruit-boards-section">
      <div className="fruit-boards-container">
        {/* Left Column - Circular Image */}
        <div className="fruit-boards-image-column">
          <div className="fruit-boards-image-wrapper">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Beautifully arranged fruit and specialty board with fresh berries, flowers, and exotic fruits"
              width={650}
              height={650}
              priority
              quality={90}
              className="fruit-boards-image"
            />
          </div>
        </div>
        
        {/* Right Column - Text Content */}
        <div className="fruit-boards-content-column">
          <h2 className={`${playfair.className} fruit-boards-heading`}>
            FRUIT &<br />
            SPECIALTY BOARDS
          </h2>
          
          <p className={`${inter.className} fruit-boards-description`}>
            Treat your guests to our beautifully arranged fruit and specialty 
            boards, perfect for any occasion! Each board is thoughtfully curated 
            to offer a vibrant mix of fresh fruits and unique ingredients that 
            will impress and delight. Whether it&apos;s a casual gathering or a grand 
            event, we&apos;ve got the perfect board to elevate your celebration!
          </p>
          
          <Button variant="primary" href="/boards">VIEW MORE</Button>
        </div>
      </div>
    </section>
  );
}