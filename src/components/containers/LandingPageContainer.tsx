'use client';

import React from 'react';
import { HeroContainer } from './HeroContainer';
import { AboutPlatformContainer } from './AboutPlatformContainer';
import { StatisticsContainer } from './StatisticsContainer';

export const LandingPageContainer: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroContainer />
      <AboutPlatformContainer />
      <StatisticsContainer />
    </main>
  );
};
