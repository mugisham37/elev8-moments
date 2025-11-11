import Image from 'next/image';

export default function Gallery() {
  const images = [
    { src: "https://picsum.photos/600/700", alt: "Gallery 1" },
    { src: "https://picsum.photos/600/700", alt: "Gallery 2" },
    { src: "https://picsum.photos/600/700", alt: "Gallery 3" },
    { src: "https://picsum.photos/600/700", alt: "Gallery 4" },
    { src: "https://picsum.photos/600/700", alt: "Gallery 5" },
    { src: "https://picsum.photos/600/700", alt: "Gallery 6" },
  ];

  return (
    <section className="bg-[#f9f2ec] py-16">
      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`first-${index}`} className="shrink-0">
              <Image 
                alt={image.alt} 
                className="h-[641px] object-cover"
                src={image.src} 
                width={600} 
                height={700} 
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((image, index) => (
            <div key={`second-${index}`} className="shrink-0">
              <Image 
                alt={image.alt} 
                className="h-[641px] object-cover"
                src={image.src} 
                width={600} 
                height={700} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}