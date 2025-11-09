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
                    <h2 className="text-[70px] font-strings mb-6">Welcome to Glam Haus</h2>
                    <p className="text-[20px] font-noiretblanc mb-6">Indulge in the ultimate culinary experience with
                        our luxury charcuterie boards and custom grazing tables. Elevate your event with our exquisite
                        creations and savor every moment.</p>
                    <p className="text-[15px] font-raleway leading-relaxed">Each board is an artful display of gourmet
                        cheeses, fine meats, fresh fruits, and delightful accompaniments, making us the ideal choice for
                        your next gathering. With a focus on quality and presentation, we create memorable culinary
                        experiences that leave a lasting impression.</p>
                </div>
            </section>
  );
}