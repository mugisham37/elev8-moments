import React from 'react';

interface TopNavProps {
  className?: string;
}

export const TopNav: React.FC<TopNavProps> = ({ className = '' }) => {
  return (
    <div className={`relative h-[165px] bg-[#F9F2EC] border-b border-[#636363] ${className}`}>
      <div className="max-w-[1200px] mx-auto h-full relative px-4">
        <a 
          href="#" 
          className="absolute left-1/2 top-[42px] -translate-x-1/2 no-underline"
        >
          <h1 className="text-[43px] font-normal text-[#1E1E1E] text-center uppercase font-['Noiretblanc']">
            GLAM HAUS DESIGN CO.
          </h1>
        </a>
        
        <div className="absolute left-0 top-[53px] text-center">
          <p className="text-[20px] font-normal text-[#1E1E1E] font-['Noiretblanc'] mb-4">
            Need event design?
          </p>
          <a 
            href="#" 
            className="inline-block text-[11px] font-bold text-[#1E1E1E] uppercase tracking-[2.2px] font-['Raleway'] no-underline"
          >
            view our design services
          </a>
        </div>
        
        <div className="absolute left-[306px] top-[5px] w-px h-[154px] bg-[#636363]"></div>
        
        <div className="absolute left-1/2 top-[101px] -translate-x-1/2 w-[453px]">
          <h2 className="text-[17px] font-normal text-[#1E1E1E] text-center font-['Raleway']">
            Charcuterie Boards + Grazing Tables + Event Design
          </h2>
          <div className="w-full h-px bg-[#1E1E1E] mt-2"></div>
        </div>
        
        <div className="absolute right-[-120px] top-11 text-center">
          <p className="text-[20px] font-normal text-[#1E1E1E] font-['Noiretblanc'] mb-4">
            Looking for the perfect gift for someone special?
          </p>
          <a 
            href="#" 
            className="inline-block text-[11px] font-bold text-[#1E1E1E] uppercase tracking-[2.2px] font-['Raleway'] no-underline"
          >
            view our BOXES
          </a>
        </div>
        
        <div className="absolute right-[307px] top-[5px] w-px h-[154px] bg-[#636363]"></div>
      </div>
    </div>
  );
};

export default TopNav;
