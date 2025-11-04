import { ImageWithFallback } from '../imageWithFallBack/ImageWithFallback';

// Instagram gallery images data
const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1616596612351-5a7ae04e2840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyY3V0ZXJpZSUyMGJvYXJkJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NjIyNjI5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Colorful charcuterie board with pink flowers and assorted meats',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1603643205616-5e029797b7c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF6aW5nJTIwcGxhdHRlciUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MjI2Mjk5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Fruit and cheese grazing platter with colorful arrangement',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1725155229958-4cef2f664d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjBib2FyZCUyMG92ZXJoZWFkfGVufDF8fHx8MTc2MjI2Mjk5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Artisan meat and cheese board with garnishes',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1558476007-7a34999acb57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwc3R5bGluZyUyMGJvYXJkfGVufDF8fHx8MTc2MjI2Mjk5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Floral garnished charcuterie board',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1590912710024-6d51a6771abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY2hlZXNlJTIwcGxhdHRlcnxlbnwxfHx8fDE3NjIyNjMwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Cheese and fruit arrangement on wooden board',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1611070097019-134ef801cfa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwYm9hcmQlMjBzd2VldHxlbnwxfHx8fDE3NjIyNjMwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Sweet treats and dessert board',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1722718461737-8b739ef577ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyY3V0ZXJpZSUyMHZhcmlldHklMjBtZWF0c3xlbnwxfHx8fDE3NjIyNjMwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Variety of charcuterie items on display',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1642942092149-4145a2c4a1e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHNwcmVhZHxlbnwxfHx8fDE3NjIyNjMwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Artisan charcuterie board with seasonal items',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1549320719-b97a0b5b8294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjBmcnVpdCUyMGFycmFuZ2VtZW50fGVufDF8fHx8MTc2MjI2MzAwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Gourmet food spread with multiple components',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1757873889053-f9c13d66387b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF6aW5nJTIwdGFibGUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjIyNjMwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Colorful grazing platter arrangement',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1759335514530-43ac3c515a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBldGl6ZXIlMjBwbGF0dGVyJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjIyNjMwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Elegant cheese board presentation',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1755862922067-8a0135afc1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGZvb2QlMjBib2FyZHxlbnwxfHx8fDE3NjIyNjMwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Fall-themed charcuterie board',
    size: 'small'
  }
];

// Menu items
const menuItems = [
  { label: 'HOME', href: '#home' },
  { label: 'BOARDS + BOXES', href: '#boards' },
  { label: 'ABOUT', href: '#about' },
  { label: 'GRAZING TABLES', href: '#grazing' },
  { label: 'CONTACT', href: '#contact' },
  { label: 'EVENT DESIGN', href: '#events' }
];

export default function App() {
  return (
    <footer className="w-full bg-[#EFE8E1]" role="contentinfo">
      <div className="w-full px-20 py-10 flex flex-col items-center">
        
        {/* Instagram Gallery Section */}
        <section className="w-full max-w-[1760px] mb-15 relative" aria-label="Instagram gallery">
          
          {/* Gallery Heading */}
          <h2 
            className="text-center mb-10"
            style={{
              fontFamily: '"Sacramento", "Allura", cursive',
              fontSize: '72px',
              fontWeight: 400,
              lineHeight: '88px',
              color: '#2D2D2D',
              letterSpacing: '0px'
            }}
          >
            Follow Us On Instagram!
          </h2>
          
          {/* Image Grid */}
          <div className="grid grid-cols-7 gap-2 max-w-[1140px] mx-auto">
            {galleryImages.map((image, index) => (
              <a
                key={index}
                href="https://instagram.com/glamhausdesign"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View our Instagram post - ${image.alt}`}
                className={`${
                  image.size === 'large' ? 'col-span-2' : 'col-span-1'
                } overflow-hidden`}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full aspect-square object-cover cursor-pointer transition-transform duration-300 hover:scale-105 hover:brightness-95"
                />
              </a>
            ))}
          </div>
          
          {/* CTA Banner Overlay */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10"
            style={{
              width: '608px',
              height: '98px',
              backgroundColor: '#1C1C1C',
              top: '280px',
              boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)'
            }}
          >
            <p 
              style={{
                fontFamily: '"Sacramento", "Allura", cursive',
                fontSize: '56px',
                fontWeight: 400,
                color: '#FFFFFF',
                letterSpacing: '0.5px'
              }}
            >
              Let&apos;s Get Social
            </p>
          </div>
        </section>
        
        {/* Footer Content */}
        <div className="flex justify-between items-start w-full max-w-[1760px] gap-[120px] py-10">
          
          {/* Menu Column */}
          <nav className="flex flex-col flex-[0_0_auto]" aria-label="Main navigation">
            <h3 
              className="mb-6"
              style={{
                fontFamily: '"Didot", "Bodoni MT", serif',
                fontSize: '64px',
                fontWeight: 300,
                lineHeight: '72px',
                color: '#2D2D2D'
              }}
            >
              Menu
            </h3>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="transition-colors duration-200 hover:text-[#2D2D2D]"
                style={{
                  fontFamily: '"Montserrat", "Avenir", sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '32px',
                  color: '#4A4A4A',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  textDecoration: 'none'
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Brand Column */}
          <div className="flex flex-col items-center flex-[1_1_auto]">
            <h1 
              className="text-center"
              style={{
                fontFamily: '"Didot", "Bodoni MT", serif',
                fontSize: '68px',
                fontWeight: 300,
                lineHeight: '76px',
                color: '#2D2D2D'
              }}
            >
              Glam Haus<br />Design Co.
            </h1>
          </div>
          
          {/* CTA Column */}
          <div className="flex flex-col items-center gap-6 flex-[0_0_auto]">
            <p 
              className="text-center max-w-[340px]"
              style={{
                fontFamily: '"Didot", "Bodoni MT", serif',
                fontSize: '32px',
                fontWeight: 300,
                lineHeight: '40px',
                color: '#2D2D2D'
              }}
            >
              Perfect for gifting or hosting any occasion!
            </p>
            <button
              className="inline-flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#1C1C1C] hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] active:scale-[0.98] active:bg-black focus:outline-none focus:ring-2 focus:ring-[#2D2D2D] focus:ring-offset-3"
              style={{
                width: '208px',
                height: '56px',
                padding: '18px 40px',
                backgroundColor: '#2A2A2A',
                color: '#FFFFFF',
                fontFamily: '"Montserrat", sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                border: 'none'
              }}
              aria-label="Place an order for grazing boards"
            >
              PLACE AN ORDER
            </button>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="w-full text-center pt-6 mt-10">
          <p 
            style={{
              fontFamily: '"Montserrat", "Inter", sans-serif',
              fontSize: '12px',
              fontWeight: 400,
              lineHeight: '18px',
              color: '#6B6B6B',
              letterSpacing: '0.3px'
            }}
          >
            Website Designed With Love By Indie Haus Design Co.
          </p>
        </div>
      </div>
    </footer>
  );
}
