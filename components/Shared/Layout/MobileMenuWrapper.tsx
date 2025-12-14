'use client';

import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import MobilePopUpMenu from './MobilePopUpMenu';

const MobileMenuWrapper: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <MobileMenu onMenuClick={handleMenuOpen} />
      <MobilePopUpMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </>
  );
};

export default MobileMenuWrapper;
