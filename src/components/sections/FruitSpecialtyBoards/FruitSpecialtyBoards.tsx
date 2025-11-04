import Image from 'next/image';
import { inter, playfair } from '@/app/layout';
import Button from '../../ui/Button/Button';
import styles from './FruitSpecialtyBoards.module.css';

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
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column - Circular Image */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Beautifully arranged fruit and specialty board with fresh berries, flowers, and exotic fruits"
              width={650}
              height={650}
              priority
              quality={90}
              className={styles.image}
            />
          </div>
        </div>
        
        {/* Right Column - Text Content */}
        <div className={styles.contentColumn}>
          <h2 className={`${playfair.className} ${styles.heading}`}>
            FRUIT &<br />
            SPECIALTY BOARDS
          </h2>
          
          <p className={`${inter.className} ${styles.description}`}>
            Treat your guests to our beautifully arranged fruit and specialty 
            boards, perfect for any occasion! Each board is thoughtfully curated 
            to offer a vibrant mix of fresh fruits and unique ingredients that 
            will impress and delight. Whether it&apos;s a casual gathering or a grand 
            event, we&apos;ve got the perfect board to elevate your celebration!
          </p>
          
          <Button href="/boards">VIEW MORE</Button>
        </div>
      </div>
    </section>
  );
}