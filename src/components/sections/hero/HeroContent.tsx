import { Button } from '../../ui/Button'

export default function HeroContent() {
  return (
    <div className="bg-[#0a0a0a] flex flex-col justify-center z-2 px-[55px] py-[65px] md:px-[30px] md:py-[40px] sm:px-[20px] sm:py-[30px]">
      {/* Location Text */}
      <div className="font-montserrat font-normal text-[13px] text-white uppercase tracking-[0.23em] mb-[18px] sm:text-[12px]">
        NEW BRAUNFELS, TEXAS
      </div>
      
      {/* Main Heading */}
      <h1 className="font-playfair font-normal text-[60px] leading-[1.13] text-white uppercase max-w-[680px] mb-[28px] md:text-[48px] sm:text-[36px]">
        PERFECTLY CRAFTED CHARCUTERIE BOARDS, BOXES & GRAZING TABLES
      </h1>
      
      {/* Body Text */}
      <p className="font-montserrat font-normal text-[15.5px] leading-[1.65] text-white max-w-[600px] mb-[38px] sm:text-[14px]">
        At Glam Haus, we specialize in crafting custom boards, boxes & grazing tables that elevate any occasion. Whether you're hosting a grand event, looking for the perfect hostess gift, or simply indulging in a treat for yourself, our carefully curated selections are designed to impress.
      </p>
      
      {/* Call to Action Button */}
      <Button variant="outline" className="w-fit text-white border-white hover:bg-white hover:text-black">
        VIEW OUR SERVICES
      </Button>
    </div>
  )
}