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
    <section className="bg-[#1e1e1e] text-white py-16">
                <div className="max-w-[900px] mx-auto px-4 text-center">
                    <h2 className="text-[70px] font-strings mb-6">Welcome to Elev8 Moments</h2>
                    <p className="text-[20px] font-noiretblanc mb-6">Celebrate life with intention through our curated events, unique experiences, and thoughtful gifts. Elevate your moments with our soulful creations and cherish every connection.</p>
                    <p className="text-[15px] font-raleway leading-relaxed">Each experience is an artful blend of creativity, connection, healing, and meaningful moments, making us the ideal choice for your next celebration. With a focus on intentionality and presence, we create memorable soulful experiences that leave a lasting impression.</p>
                </div>
            </section>
  );
}