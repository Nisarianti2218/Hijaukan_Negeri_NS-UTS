import React from 'react';
import { FooterPresenter } from '../presenters/FooterPresenter';

export const FooterContainer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Posts', href: '/posts' },
    { label: 'Komunitas', href: '/community' },
    { label: 'Tentang Kami', href: '/about' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <FooterPresenter
      quickLinks={quickLinks}
      socialLinks={socialLinks}
      currentYear={currentYear}
    />
  );
};
