'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { NavbarPresenter } from '../presenters/NavbarPresenter';
import { useAuth } from '@/hooks/useAuth';

export const NavbarContainer: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, isAuthenticated } = useAuth();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

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
    ...(isAuthenticated() ? [
      {
        label: 'Buat Post',
        href: '/create',
        isActive: pathname === '/create',
      },
      {
        label: 'Profile',
        href: '/profile',
        isActive: pathname === '/profile',
      }
    ] : []),
    ...(isAuthenticated() ? [
      {
        label: 'Logout',
        href: '#',
        isActive: false,
        onClick: handleLogout,
      }
    ] : [
      {
        label: 'Login',
        href: '/auth',
        isActive: pathname === '/auth',
      }
    ]),
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
      user={user}
      isAuthenticated={isAuthenticated()}
    />
  );
};
