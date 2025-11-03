import { inter, allura, playfair } from '@/app/layout';

/**
 * Welcome Section Component for Glam Haus
 * 
 * A luxury hero section featuring elegant typography hierarchy:
 * - Script heading using Allura font
 * - Serif subtitle with italic emphasis using Playfair Display
 * - Light sans-serif body text using Inter
 * 
 * Design matches exact specifications with precise spacing and colors.
 */
export default function WelcomeSection() {
  return (
    <section className="bg-[#0a0a0a] w-full">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 py-20 md:py-[100px] lg:py-[120px] pb-[100px] md:pb-[120px] lg:pb-[140px] flex flex-col items-center justify-center text-center">
        
        {/* Main Heading - Script Font */}
        <h1 className={`${allura.className} text-[48px] md:text-[64px] lg:text-[80px] font-normal text-white tracking-[0.03em] leading-[1.25] mb-7`}>
          Welcome to Glam Haus
        </h1>
        
        {/* Subtitle - Serif with Italic Emphasis */}
        <p className={`${playfair.className} text-[18px] md:text-[20px] lg:text-[22px] font-normal text-[#F5F5F5] tracking-[0.015em] leading-[1.65] mb-9 max-w-full`}>
          Indulge in the <em className="italic">ultimate culinary experience</em> with our luxury charcuterie boards and custom grazing tables. Elevate your event with our exquisite creations and savor every moment.
        </p>
        
        {/* Body Text - Sans-serif with Constrained Width */}
        <p className={`${inter.className} text-[15px] md:text-[16px] lg:text-[17px] font-light text-[#D5D5D5] tracking-[0.01em] leading-[1.75] max-w-[960px] mx-auto`}>
          Each board is an artful display of gourmet cheeses, fine meats, fresh fruits, and delightful accompaniments, making us the ideal choice for your next gathering. With a focus on quality and presentation, we create memorable culinary experiences that leave a lasting impression.
        </p>
        
      </div>
    </section>
  );
}