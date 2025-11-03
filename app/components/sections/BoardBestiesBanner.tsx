import Image from 'next/image'
import Link from 'next/link'

export default function BoardBestiesBanner() {
  return (
    <section className="w-full bg-[#F5F1ED] px-[20px] md:px-[50px] py-[30px] md:py-[50px]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-[30px] md:gap-[70px]">
        
        {/* LEFT: Main Image - 37% width */}
        <div className="w-full md:w-[37%] shrink-0">
          <div className="relative border-10 border-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <Image
              src="https://images.unsplash.com/photo-1571197119282-7c4d9e7c8b8a?w=600&h=450&fit=crop&crop=center"
              alt="Colorful charcuterie board with fruits, cheeses, and meats"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* CENTER: Text Content - 45% width */}
        <div className="w-full md:w-[45%] flex flex-col justify-center text-center md:text-left">
          
          {/* Heading - Both parts on same line */}
          <h2 className="mb-[22px] leading-[1.1]">
            <span className="font-playfair text-[36px] md:text-[52px] font-normal text-[#1A1A1A] tracking-normal">
              Join our{' '}
            </span>
            <span className="font-dancing text-[42px] md:text-[58px] font-normal text-[#1A1A1A] underline decoration-[#1A1A1A] underline-offset-4">
              Board Besties
            </span>
          </h2>

          {/* Subheading */}
          <p className="font-montserrat text-[17px] font-normal text-[#707070] tracking-[0.4px] leading-[1.6] mb-[30px] max-w-[500px]">
            Follow us on Instagram to keep up with our latest releases and specials!
          </p>

          {/* Button */}
          <Link 
            href="https://instagram.com/glamhausdesignco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black text-white font-montserrat text-[13px] font-semibold tracking-[1.8px] uppercase px-[44px] py-[17px] rounded-none border-none hover:bg-[#2C2C2C] transition-colors duration-300 w-fit md:w-auto mx-auto md:mx-0 cursor-pointer">
              TAKE ME THERE
            </button>
          </Link>
        </div>

        {/* RIGHT: Small Image - 15% width */}
        <div className="hidden md:flex w-[15%] shrink-0 justify-end">
          <div className="relative border-8 border-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] max-w-[180px]">
            <Image
              src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=180&h=180&fit=crop&crop=center"
              alt="Individual charcuterie cone serving"
              width={180}
              height={180}
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
        </div>

      </div>
    </section>
  )
}