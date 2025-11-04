import { ImageWithFallback } from '../../imageWithFallBack/ImageWithFallback';

export default function EventSetup() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1708014116705-649a97e54e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY29ja3RhaWwlMjBmbG9yYWwlMjBjZW50ZXJwaWVjZXxlbnwxfHx8fDE3NjIyODMwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Elegant cocktail setup with floral centerpiece and copper glassware on rustic table',
      width: 350,
      height: 345
    },
    {
      src: 'https://images.unsplash.com/photo-1745541472970-eeb8274f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjB3aGl0ZSUyMGFpc2xlJTIwdGVudHxlbnwxfHx8fDE3NjIyODMwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'White ceremony aisle with wooden chairs and floral decorations under draped tent',
      width: 248,
      height: 345
    },
    {
      src: 'https://images.unsplash.com/photo-1695998575456-d15d1f36b8d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2hvJTIwb3V0ZG9vciUyMHRhYmxlJTIwY29sb3JmdWwlMjBwaWxsb3dzfGVufDF8fHx8MTc2MjI4MzA1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Boho outdoor table setting with colorful pillows and floral arrangements',
      width: 350,
      height: 345
    }
  ];

  return (
    <section 
      className="w-full min-h-[663px] flex flex-col items-center"
      style={{ 
        backgroundColor: '#2B2B2B',
        padding: '80px 0 60px 0'
      }}
      role="region"
      aria-label="Event Setup Services"
    >
      {/* Content Wrapper */}
      <div className="max-w-[1440px] w-full px-20 lg:px-10 md:px-6">
        
        {/* Text Content Block */}
        <header className="max-w-[880px] lg:max-w-[680px] mx-auto mb-16 text-center px-10 md:px-5 sm:px-0">
          
          {/* Main Heading */}
          <h1 
            className="uppercase text-center mb-4 md:text-[56px] md:leading-[67px] sm:text-[40px] sm:leading-[48px]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '72px',
              fontWeight: 400,
              lineHeight: '86px',
              letterSpacing: '0.04em',
              color: '#FFFFFF',
              margin: '0 0 16px 0'
            }}
          >
            EVENT SET-UP & DECOR
          </h1>
          
          {/* Tagline */}
          <p 
            className="uppercase text-center mb-8 sm:text-[12px] sm:leading-[18px]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '20px',
              letterSpacing: '0.15em',
              color: '#E0E0E0',
              margin: '0 0 32px 0'
            }}
          >
            WE HANDLE THE DETAILS, YOU ENJOY YOUR CELEBRATION
          </p>
          
          {/* Body Paragraph */}
          <p 
            className="text-center sm:text-[15px] sm:leading-[24px]"
            style={{
              fontFamily: "'Lato', Helvetica, Arial, sans-serif",
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: '26px',
              letterSpacing: '0.01em',
              color: '#D4D4D4',
              margin: '0'
            }}
          >
            Our dedicated team specializes in event setup and décor, ensuring every aspect is perfectly executed. From the initial planning stages to the final touches, we work closely with you to bring your ideas to fruition. We'll transform any venue into a glamorous backdrop that captures the essence of your event, creating an atmosphere that leaves a lasting impression.
          </p>
          
        </header>
        
        {/* Image Grid */}
        <div 
          className="flex flex-row gap-6 justify-center items-start max-w-[972px] mx-auto md:flex-col md:items-center sm:gap-4"
          role="list"
        >
          {images.map((image, index) => (
            <figure key={index} role="listitem" className="flex-shrink-0 md:w-full md:max-w-[350px]">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-cover block transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 md:w-full md:h-auto"
                style={{
                  width: `${image.width}px`,
                  height: `${image.height}px`
                }}
              />
            </figure>
          ))}
        </div>
        
      </div>
    </section>
  );
}
