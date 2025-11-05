
import { ImageWithFallback } from '../../../imageWithFallBack/ImageWithFallback';
import { FeatureItem } from './FeatureItem';

interface HowItWorksProps {
  heroImage?: string;
  galleryImages?: string[];
  sidebarImages?: string[];
}

export function HowItWorks({ 
  heroImage = "https://images.unsplash.com/photo-1609181643935-aca1ff223e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjBlbGYlMjB0b3klMjBzZXR1cHxlbnwxfHx8fDE3NjIzMzA2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  galleryImages = [
    "https://images.unsplash.com/photo-1719346660539-9acee5f081a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGYlMjBob3QlMjBjaG9jb2xhdGUlMjBtYXJzaG1hbGxvd3N8ZW58MXx8fHwxNzYyMzMwNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1642211841112-2beeda7bfc07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjB0cmVhc3VyZSUyMGNoZXN0JTIwZ29sZHxlbnwxfHx8fDE3NjIzMzA2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1575412466007-b6e5f30eaa66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjBlbGYlMjBzYWZldHl8ZW58MXx8fHwxNzYyMzMwNjU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  sidebarImages = [
    "https://images.unsplash.com/photo-1726070146923-27a729d670ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjBlbGYlMjBwYWNrYWdlJTIwbGV0dGVyc3xlbnwxfHx8fDE3NjIzMzA2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1599519868354-6620b923cd8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjB0cmVlJTIwZGVjb3JhdGVkJTIwcHJlc2VudHN8ZW58MXx8fHwxNzYyMzMwNjU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ]
}: HowItWorksProps) {
  const features = [
    "Each kit comes with a personalized hello and goodbye letter that will be customized to your family whether you have a new or returning elf or elves.",
    "Each day's theme will come individually bagged and contain instructions for set-up and props. Just unpack that day's materials, follow directions, and you're all set for the night.",
    "Our kits accommodates one elf and activities for up to 2 children with themes that are suitable for ages 2-12"
  ];

  return (
    <section className="w-full bg-[#F5F3F0] px-[24px] sm:px-[40px] lg:px-[60px] py-[40px] sm:py-[60px] lg:py-[80px] box-border">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.2fr_1.5fr_0.8fr] gap-x-[24px] md:gap-x-[32px] xl:gap-x-[40px] gap-y-[24px] md:gap-y-[28px] xl:gap-y-[32px]">
        {/* Left Column - Hero Image and Gallery */}
        <div className="flex flex-col gap-[24px] md:gap-[28px] xl:gap-[32px]">
          <div className="relative w-full aspect-4/3">
            <ImageWithFallback 
              src={heroImage}
              alt="Elf on the Shelf setup with hidden treat game and green polka dot cups"
              fill
              className="object-cover rounded-none transition-transform duration-300 hover:scale-[1.02]"
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-[12px] sm:gap-[14px] xl:gap-[16px] justify-between">
            <div className="relative w-[calc(50%-6px)] sm:w-[calc(33.333%-9.33px)] xl:w-[calc(33.333%-10.67px)] aspect-square">
              <ImageWithFallback 
                src={galleryImages[0]}
                alt="Two elves enjoying hot chocolate setup with firewood backdrop"
                fill
                className="object-cover rounded-none transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_16px_rgba(43,38,35,0.15)] cursor-pointer"
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
            </div>
            <div className="relative w-[calc(50%-6px)] sm:w-[calc(33.333%-9.33px)] xl:w-[calc(33.333%-10.67px)] aspect-square">
              <ImageWithFallback 
                src={galleryImages[1]}
                alt="Elf with treasure chest filled with chocolate gold coins"
                fill
                className="object-cover rounded-none transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_16px_rgba(43,38,35,0.15)] cursor-pointer"
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
            </div>
            <div className="relative w-full sm:w-[calc(33.333%-9.33px)] xl:w-[calc(33.333%-10.67px)] aspect-square">
              <ImageWithFallback 
                src={galleryImages[2]}
                alt="Elf displaying safety message sign"
                fill
                className="object-cover rounded-none transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_16px_rgba(43,38,35,0.15)] cursor-pointer"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
              />
            </div>
          </div>
        </div>

        {/* Center Content - Heading and Features */}
        <div className="flex flex-col pt-0 xl:pt-[24px] md:col-span-2 xl:col-span-1">
          <h1 
            className="m-0 mb-[12px] sm:mb-[14px] xl:mb-[16px] text-[40px] sm:text-[56px] xl:text-[72px] font-light leading-[48px] sm:leading-[64px] xl:leading-[80px] tracking-[0.02em] text-[#2B2623] uppercase"
            style={{ fontFamily: "'Didot', 'Libre Baskerville', Georgia, serif" }}
          >
            How It Works
          </h1>
          
          <p className="text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px] tracking-[0.01em] text-[#5A5552] uppercase mb-[28px] sm:mb-[36px] xl:mb-[40px] m-0">
            Take the &ldquo;what is my elf going to do tonight&rdquo; question<br className="hidden sm:block" />
            off your holiday to-do list with our convenient kits!
          </p>
          
          <ul className="list-none p-0 m-0" role="list">
            {features.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
          </ul>
          
          <p className="text-[13px] leading-[20px] text-[#7A7672] italic mt-[20px] sm:mt-[22px] xl:mt-[24px] m-0">
            *Elf Not Included
          </p>
        </div>

        {/* Right Sidebar - Stacked Images */}
        <div className="flex flex-col md:flex-row xl:flex-col gap-[20px] sm:gap-[22px] xl:gap-[24px] items-stretch md:items-center xl:items-end md:col-span-2 xl:col-span-1">
          <div className="relative w-full md:w-1/2 xl:w-full aspect-4/3">
            <ImageWithFallback 
              src={sidebarImages[0]}
              alt="Elf on the Shelf kit contents including personalized letters and instructions"
              fill
              className="object-cover rounded-none transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_16px_rgba(43,38,35,0.15)] cursor-pointer"
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          <div className="relative w-full md:w-1/2 xl:w-full aspect-4/3">
            <ImageWithFallback 
              src={sidebarImages[1]}
              alt="Elf posing with decorated Christmas tree and wrapped gifts"
              fill
              className="object-cover rounded-none transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_16px_rgba(43,38,35,0.15)] cursor-pointer"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
