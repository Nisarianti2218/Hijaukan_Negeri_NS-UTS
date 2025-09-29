'use client';

import React from 'react';
import { StatisticsPresenter } from '../presenters/StatisticsPresenter';

export const StatisticsContainer: React.FC = () => {
  const stats = [
    {
      id: 1,
      value: '2,547',
      label: 'Volunteer Aktif',
      icon: '👥'
    },
    {
      id: 2,
      value: '15,832',
      label: 'Pohon Ditanam',
      icon: '🌳'
    },
    {
      id: 3,
      value: '127',
      label: 'Lokasi Konservasi',
      icon: '🏞️'
    },
    {
      id: 4,
      value: '234',
      label: 'Kegiatan Selesai',
      icon: '✅'
    }
  ];

  return <StatisticsPresenter stats={stats} />;
};
