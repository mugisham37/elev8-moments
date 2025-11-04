"use client";

import { ImageWithFallback } from '../../imageWithFallBack/ImageWithFallback';

export default function Hero() {
  return (
    <section 
      className="flex flex-col lg:grid lg:grid-cols-[55%_45%] min-h-screen lg:min-h-[675px] w-full relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ead8cd 0%, #e4d0c4 100%)'
      }}
      aria-labelledby="event-design-heading"
    >
      {/* Left Content Area */}
      <div className="flex flex-col justify-center items-start px-6 py-12 md:px-10 md:py-16 lg:py-20 lg:pl-[140px] lg:pr-[120px] xl:max-w-[750px] z-10">
        <h1 
          id="event-design-heading"
          className="mb-3 md:mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(42px, 8vw, 96px)',
            fontWeight: '300',
            lineHeight: '1.05',
            letterSpacing: '-1.5px',
            color: '#3d2f2a',
            textTransform: 'uppercase'
          }}
        >
          EVENT DESIGN
        </h1>
        
        <h2 
          className="mb-6 md:mb-8"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(11px, 1.5vw, 13px)',
            fontWeight: '400',
            lineHeight: '18px',
            letterSpacing: '2.8px',
            color: '#3d2f2a',
            textTransform: 'uppercase'
          }}
        >
          YOUR DREAM EVENT...DESIGNED TO PERFECTION
        </h2>
        
        <p 
          className="mb-8 md:mb-12 max-w-[520px]"
          style={{
            fontFamily: "'Crimson Text', serif",
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: '400',
            lineHeight: '1.78',
            letterSpacing: '0.2px',
            color: '#524540'
          }}
        >
          Imagine walking into a space that&apos;s beautifully designed just for your celebration. Whether you&apos;re hosting a cozy get-together, a grand wedding, or a fun holiday party, we&apos;re here to turn your ideas into something magical with our creativity and attention to detail.
        </p>
        
        <button 
          className="w-full md:w-auto"
          style={{
            display: 'inline-block',
            padding: '18px 56px',
            backgroundColor: '#e1cec3',
            border: '1.5px solid #b8a79d',
            borderRadius: '0',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '13px',
            fontWeight: '500',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#3d2f2a',
            cursor: 'pointer',
            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#d4bfb2';
            e.currentTarget.style.borderColor = '#a89585';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(61, 47, 42, 0.18)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e1cec3';
            e.currentTarget.style.borderColor = '#b8a79d';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.backgroundColor = '#c9b2a3';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(61, 47, 42, 0.2)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.backgroundColor = '#d4bfb2';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(61, 47, 42, 0.18)';
          }}
          onFocus={(e) => {
            e.currentTarget.style.outline = '2px solid #8a7a6f';
            e.currentTarget.style.outlineOffset = '3px';
          }}
          onBlur={(e) => {
            e.currentTarget.style.outline = 'none';
          }}
          aria-label="Contact us about event design services"
        >
          CONTACT US
        </button>
      </div>

      {/* Right Image Collage */}
      <div 
        className="hidden lg:block relative w-full h-full min-h-[675px]"
        role="img" 
        aria-label="Event design portfolio showcasing elegant table settings and floral arrangements"
      >
        {/* Image 1: Top Right - Floral Arrangement */}
        <div
          className="absolute hidden 2xl:block"
          style={{
            top: '40px',
            right: '426px',
            width: '502px',
            height: '285px',
            zIndex: 2,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            position: 'relative'
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759774312563-5116b1a90ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvcmFsJTIwY2VudGVycGllY2UlMjBvcmFuZ2V8ZW58MXx8fHwxNzYyMjgxNTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Elegant wedding table floral centerpiece with orange and cream roses"
            fill
            className="object-cover"
            sizes="502px"
          />
        </div>

        {/* Image 1: Responsive version for smaller desktops */}
        <div
          className="absolute 2xl:hidden"
          style={{
            top: '40px',
            right: '20%',
            width: '45%',
            maxWidth: '502px',
            aspectRatio: '502/285',
            zIndex: 2,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            position: 'relative'
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759774312563-5116b1a90ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvcmFsJTIwY2VudGVycGllY2UlMjBvcmFuZ2V8ZW58MXx8fHwxNzYyMjgxNTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Elegant wedding table floral centerpiece with orange and cream roses"
            fill
            className="object-cover"
            sizes="(max-width: 1536px) 45vw, 502px"
          />
        </div>

        {/* Image 2: Middle Left - Table Setting with Chair */}
        <div
          className="absolute hidden 2xl:block"
          style={{
            top: '235px',
            right: '732px',
            width: '318px',
            height: '440px',
            zIndex: 3,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            position: 'relative'
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759419039105-68b8b12660f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGFibGUlMjBzZXR0aW5nJTIwZ29sZCUyMGNoYWlyfGVufDF8fHx8MTc2MjI4MTU0OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Formal table setting with gold chiavari chair and terracotta napkins"
            fill
            className="object-cover"
            sizes="318px"
          />
        </div>

        {/* Image 2: Responsive version */}
        <div
          className="absolute 2xl:hidden"
          style={{
            top: '35%',
            right: '55%',
            width: '30%',
            maxWidth: '318px',
            aspectRatio: '318/440',
            zIndex: 3,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            position: 'relative'
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759419039105-68b8b12660f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGFibGUlMjBzZXR0aW5nJTIwZ29sZCUyMGNoYWlyfGVufDF8fHx8MTc2MjI4MTU0OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Formal table setting with gold chiavari chair and terracotta napkins"
            fill
            className="object-cover"
            sizes="(max-width: 1536px) 30vw, 318px"
          />
        </div>

        {/* Image 3: Bottom Right - Table Runner Detail */}
        <div
          className="absolute hidden 2xl:block"
          style={{
            bottom: '0',
            right: '0',
            width: '440px',
            height: '394px',
            zIndex: 1,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            position: 'relative'
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1677768061409-3d4fbd0250d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdGFibGUlMjBmbG93ZXJzfGVufDF8fHx8MTc2MjI4MTU0OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Wedding reception table with floral runner and elegant place settings"
            fill
            className="object-cover"
            sizes="440px"
          />
        </div>

        {/* Image 3: Responsive version */}
        <div
          className="absolute 2xl:hidden"
          style={{
            bottom: '0',
            right: '0',
            width: '42%',
            maxWidth: '440px',
            aspectRatio: '440/394',
            zIndex: 1,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            position: 'relative'
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1677768061409-3d4fbd0250d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdGFibGUlMjBmbG93ZXJzfGVufDF8fHx8MTc2MjI4MTU0OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Wedding reception table with floral runner and elegant place settings"
            fill
            className="object-cover"
            sizes="(max-width: 1536px) 42vw, 440px"
          />
        </div>
      </div>

      {/* Mobile Image Gallery - shown only on mobile/tablet */}
      <div className="lg:hidden flex flex-col gap-4 px-6 pb-12 md:px-10 md:pb-16">
        <div className="w-full aspect-video shadow-[0_8px_24px_rgba(0,0,0,0.12)] relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759774312563-5116b1a90ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvcmFsJTIwY2VudGVycGllY2UlMjBvcmFuZ2V8ZW58MXx8fHwxNzYyMjgxNTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Elegant wedding table floral centerpiece with orange and cream roses"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 0px"
          />
        </div>
        <div className="w-full aspect-3/4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759419039105-68b8b12660f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGFibGUlMjBzZXR0aW5nJTIwZ29sZCUyMGNoYWlyfGVufDF8fHx8MTc2MjI4MTU0OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Formal table setting with gold chiavari chair and terracotta napkins"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 0px"
          />
        </div>
        <div className="w-full aspect-16/14 shadow-[0_8px_24px_rgba(0,0,0,0.12)] relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1677768061409-3d4fbd0250d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdGFibGUlMjBmbG93ZXJzfGVufDF8fHx8MTc2MjI4MTU0OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Wedding reception table with floral runner and elegant place settings"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 0px"
          />
        </div>
      </div>
    </section>
  );
}