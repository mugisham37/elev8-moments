'use client';

import React from 'react';

interface MobileMenuProps {
  onMenuClick?: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onMenuClick }) => {
  return (
    <div
      className="h-[61px] md:h-[400px] md:hidden relative"
      style={{ height: '65.3281px' }}
    >
      <div className="absolute inset-0 bg-[rgb(30,30,30)]">
        <div className="relative" style={{ width: '385px' }}>
          <div
            className="absolute left-[-18px] top-[9px] w-[357px] h-[45px] md:left-[550px] md:top-[150px] md:w-[100px] md:h-[100px] cursor-pointer"
            style={{
              transform: 'scale(1.20312, 1.20312) translate(27.0974px, 3.62987px)',
            }}
            onClick={onMenuClick}
          >
            <div className="w-full h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-full h-full fill-[rgb(249,242,236)]"
              >
                <rect x="60" y="201" width="392" height="12"></rect>
                <rect x="60" y="301" width="392" height="12"></rect>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;