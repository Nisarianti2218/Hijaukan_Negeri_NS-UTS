'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AboutPlatformPresenter } from '../presenters/AboutPlatformPresenter';

export const AboutPlatformContainer: React.FC = () => {
  const router = useRouter();

  const features = [
    {
      id: 1,
      title: 'Kegiatan Konservasi',
      description: 'Temukan dan ikuti berbagai kegiatan penanaman pohon di seluruh Indonesia',
      icon: '🌱'
    },
    {
      id: 2,
      title: 'Komunitas Peduli',
      description: 'Bergabung dengan komunitas volunteer yang memiliki visi sama untuk bumi hijau',
      icon: '🤝'
    },
    {
      id: 3,
      title: 'Lokasi Konservasi',
      description: 'Jelajahi informasi lengkap lokasi-lokasi konservasi dengan fitur pencarian',
      icon: '📍'
    },
    {
      id: 4,
      title: 'Dampak Nyata',
      description: 'Lacak kontribusi Anda dan lihat dampak nyata dari setiap aksi yang dilakukan',
      icon: '📊'
    }
  ];

  const handleStartExploration = () => {
    // Redirect ke halaman login
    router.push('/auth');
  };

  return (
    <AboutPlatformPresenter 
      features={features}
      onStartExploration={handleStartExploration}
    />
  );
};
