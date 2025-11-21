/**
 * Welcome Section Component - Responsive Typography
 * 
 * Typography Scale Analysis:
 * 
 * MOBILE (320px-639px):
 * - H2: 32px Allura (script, decorative)
 * - P1: 16px Playfair, line-height: 19px (subtitle)
 * - P2: 14px Raleway, line-height: 24px (body text)
 * - Padding: 48px vertical
 * 
 * TABLET & DESKTOP (640px-1279px):
 * - H2: 54px Allura
 * - P1: 20px Playfair, line-height: 23px
 * - P2: 16px Raleway, line-height: 30px
 * - Padding: 64px vertical
 * 
 * LARGE SCREENS (1280px+):
 * - H2: 60px Allura (enhanced presence)
 * - P1: 20px Playfair, line-height: 23px
 * - P2: 16px Raleway, line-height: 30px
 * - Padding: 64px vertical
 */
export default function WelcomeSection() {
  return (
    <section className="bg-[#1e1e1e] text-white py-12 md:py-16">
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-[32px] md:text-[54px] xl:text-[60px] font-allura font-normal mb-2 md:mb-1">
                        Welcome to Elev8 Moments
                    </h2>
                    <p className="text-[16px] md:text-[20px] font-noiretblanc mb-3 md:mb-4 leading-[19px] md:leading-[23px]">
                        Celebrate life with intention through our curated events, unique experiences, and thoughtful gifts. Elevate your moments with our soulful creations and cherish every connection.
                    </p>
                    <p className="text-[14px] md:text-[16px] font-raleway leading-6 md:leading-[30px]">
                        Each experience is an artful blend of creativity, connection, healing, and meaningful moments, making us the ideal choice for your next celebration. With a focus on intentionality and presence, we create memorable soulful experiences that leave a lasting impression.
                    </p>
                </div>
            </section>
  );
}