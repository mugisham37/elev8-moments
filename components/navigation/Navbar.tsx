'use client';

import SocialIcons from './SocialIcons';
import NavLinks from './NavLinks';

export default function Navbar() {
  return (
    <header
      className="w-full relative z-50"
      style={{
        backgroundColor: '#1E1E1E',
        height: '65px',
        paddingLeft: '28px',
        paddingRight: '28px',
      }}
    >
      <div 
        className="flex items-center justify-between h-full"
        style={{ height: '65px' }}
      >
        {/* Left Section - Social Icons */}
        <div className="flex items-center">
          <SocialIcons />
        </div>

        {/* Center Section - Navigation Menu */}
        <div className="flex items-center justify-center flex-1">
          <NavLinks />
        </div>

        {/* Right Section - Empty for balance */}
        <div className="flex items-center" style={{ width: 'auto' }}>
          {/* Empty space for visual balance */}
        </div>
      </div>
    </header>
  );
}