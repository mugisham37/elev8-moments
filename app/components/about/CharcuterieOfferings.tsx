
import Image from 'next/image';

const offerings = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1615557382865-78f6f3bdc1e0?w=240&h=150&fit=crop",
    alt: "Traditional charcuterie board with flowers and assorted items",
    titleLine1: "TRADITIONAL",
    titleLine2: "BOARDS + BOXES",
    description: "Our traditional boards include an assortment of cheeses, meats, spreads/dips, crackers, fruit (dried & fresh), nuts, sweet treats, etc."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=240&h=150&fit=crop",
    alt: "Brunch-style board with fresh fruits and berries",
    titleLine1: "BRUNCH-STYLE",
    titleLine2: "BOARDS + BOXES",
    description: "Discover our brunch-inspired charcuterie boards, thoughtfully prepared with a selection of light, brunch-friendly meats and cheeses."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1599785209796-786432b228bc?w=240&h=150&fit=crop",
    alt: "Manly board with chocolate, bacon and hearty items",
    titleLine1: "MANLY",
    titleLine2: "BOARDS + BOXES",
    description: "Curated for hearty appetites, featuring a robust selection of meats, cheeses, pickled items, candied bacon, stuffed peppers, and optional add-ons."
  }
];

export default function CharcuterieOfferings() {
  return (
    <section className="bg-[#F5EDE3] w-full">
      <div className="max-w-[1200px] mx-auto px-[100px] md:px-[24px] pt-[70px] pb-[100px]">
        
        {/* Header */}
        <div className="text-center mb-[130px]">
          <div className="flex items-center justify-center gap-2 mb-[5px]">
            <h2 className="font-allura text-[40px] md:text-[32px] text-[#2C2419]">
              Glam Haus
            </h2>
            <div className="w-[150px] h-px bg-[#2C2419]"></div>
          </div>
          <h1 className="font-cormorant text-[56px] md:text-[40px] font-normal text-[#2C2419] tracking-[0.02em] uppercase">
            CHARCUTERIE OFFERINGS
          </h1>
        </div>

        {/* Cards */}
        <div>
          {offerings.map((offering, index) => (
            <div
              key={offering.id}
              className={`flex flex-row md:flex-col items-center gap-[48px] md:gap-0 ${
                index !== offerings.length - 1 ? 'mb-[70px] md:mb-[50px]' : ''
              }`}
            >
              {/* Image */}
              <Image
                src={offering.image}
                alt={offering.alt}
                width={240}
                height={150}
                className="w-[240px] md:w-full h-[150px] md:mb-[24px] rounded-[10px] object-cover shrink-0"
              />
              
              {/* Content */}
              <div className="flex-1">
                {/* Title + Arrow */}
                <div className="flex items-center">
                  <div className="font-montserrat text-[15px] font-medium text-[#2C2419] tracking-[0.15em] leading-[1.6] uppercase">
                    {offering.titleLine1}<br/>
                    {offering.titleLine2}
                  </div>
                  <span className="text-[18px] text-[#2C2419] ml-[18px]">→</span>
                </div>
                
                {/* Description */}
                <p className="font-cormorant text-[15.5px] font-light text-[#3D3229] leading-[1.8] mt-[18px] max-w-[500px]">
                  {offering.description}
                </p>
                
                {/* Separator */}
                <div className="w-full h-px bg-[#D4C4B0] mt-[16px]"></div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}