'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { HeroPresenter } from '../presenters/HeroPresenter';
import { useAuth } from '@/hooks/useAuth';

export const HeroContainer: React.FC = () => {
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();

  const handleGetStarted = () => {
    if (isAuthenticated()) {
      // Jika sudah login, redirect ke posts
      router.push('/posts');
    } else {
      // Jika belum login, redirect ke auth
      router.push('/auth');
    }
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
      isAuthenticated={isAuthenticated()}
      user={user}
    />
  );
};
