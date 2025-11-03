import { playfair, montserrat } from '../layout';

export default function MenuSection() {
  const menuItemsColumn1 = ['HOME', 'ABOUT', 'CONTACT'];
  const menuItemsColumn2 = ['BOARDS + BOXES', 'GRAZING TABLES', 'EVENT DESIGN'];

  return (
    <section className={`${playfair.variable} ${montserrat.variable} bg-[#F5EFE7] px-[100px] max-w-[1500px] mx-auto`}>
      <div className="pt-[140px] pb-[100px] grid grid-cols-[1fr_auto_1fr] gap-[100px] items-center">
        
        {/* Left Column - Menu */}
        <div>
          <h2 className="font-playfair text-[58px] font-light text-[#3D3D3D] mb-[32px] text-left">
            Menu
          </h2>
          
          <div className="grid grid-cols-2 gap-[110px]">
            {/* Column 1 */}
            <div>
              {menuItemsColumn1.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-montserrat text-[15px] font-normal text-[#3D3D3D] tracking-[0.8px] leading-[34px] uppercase no-underline block"
                >
                  {item}
                </a>
              ))}
            </div>
            
            {/* Column 2 */}
            <div>
              {menuItemsColumn2.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-montserrat text-[15px] font-normal text-[#3D3D3D] tracking-[0.8px] leading-[34px] uppercase no-underline block"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Center Column - Dividers and Logo */}
        <div className="flex items-center gap-[90px]">
          {/* Left Divider */}
          <div className="w-px h-[190px] bg-[#3D3D3D]"></div>
          
          {/* Company Name */}
          <div className="flex flex-col text-left">
            <div className="font-playfair text-[55px] font-light text-[#3D3D3D] tracking-[1.5px] leading-[62px]">
              Glam
            </div>
            <div className="font-playfair text-[55px] font-light text-[#3D3D3D] tracking-[1.5px] leading-[62px]">
              Haus
            </div>
            <div className="font-playfair text-[50px] font-light text-[#3D3D3D] tracking-[1.5px] leading-[62px]">
              Design Co.
            </div>
          </div>
          
          {/* Right Divider */}
          <div className="w-px h-[190px] bg-[#3D3D3D]"></div>
        </div>

        {/* Right Column - Call to Action */}
        <div>
          <div className="mb-[32px]">
            <div className="font-playfair text-[30px] font-light text-[#3D3D3D] leading-[40px] block">
              Perfect for gifting or
            </div>
            <div className="font-playfair text-[30px] font-light text-[#3D3D3D] leading-[40px] block">
              hosting any occasion!
            </div>
          </div>
          
          <button className="bg-[#2D2D2D] text-white font-montserrat text-[14px] font-medium tracking-[1.2px] px-[48px] py-[19px] border-none uppercase cursor-pointer inline-block">
            PLACE AN ORDER
          </button>
        </div>
      </div>
    </section>
  );
}