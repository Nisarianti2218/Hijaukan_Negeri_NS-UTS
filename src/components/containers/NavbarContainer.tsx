'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { NavbarPresenter } from '../presenters/NavbarPresenter';

export const NavbarContainer: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    {
      label: 'Home',
      href: '/',
      isActive: pathname === '/',
    },
    {
      label: 'Posts',
      href: '/posts',
      isActive: pathname === '/posts',
    },
    {
      label: 'Komunitas',
      href: '/community',
      isActive: pathname === '/community',
    },
    {
      label: 'Login',
      href: '/auth',
      isActive: pathname === '/auth',
    },
  ];

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <NavbarPresenter
      navItems={navItems}
      isMenuOpen={isMenuOpen}
      onToggleMenu={handleToggleMenu}
      onCloseMenu={handleCloseMenu}
    />
  );
};
