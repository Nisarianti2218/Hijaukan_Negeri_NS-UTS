'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { HeroPresenter } from '../presenters/HeroPresenter';

export const HeroContainer: React.FC = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    // Redirect ke halaman login
    router.push('/auth');
  };

  const handleLearnMore = () => {
    // Scroll ke section About Platform
    const aboutSection = document.getElementById('about-platform');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroPresenter 
      onGetStarted={handleGetStarted}
      onLearnMore={handleLearnMore}
    />
  );
};
