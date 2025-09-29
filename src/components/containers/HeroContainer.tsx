'use client';

import React from 'react';
import { HeroPresenter } from '../presenters/HeroPresenter';

export const HeroContainer: React.FC = () => {
  const handleGetStarted = () => {
    // Scroll ke section selanjutnya atau redirect ke register
    const aboutSection = document.getElementById('about-platform');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <HeroPresenter onGetStarted={handleGetStarted} />;
};
