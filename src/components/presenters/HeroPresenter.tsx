'use client';

import React from 'react';

interface HeroPresenterProps {
  onGetStarted: () => void;
  onLearnMore: () => void;
}

export const HeroPresenter: React.FC<HeroPresenterProps> = ({ onGetStarted, onLearnMore }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="block">Hijaukan</span>
          <span className="block text-green-100">Negeri</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-green-50 leading-relaxed max-w-3xl mx-auto">
          Platform web interaktif untuk mendukung kegiatan penanaman pohon dan konservasi lingkungan. 
          Mari bergabung dalam aksi nyata untuk masa depan bumi yang lebih hijau.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onGetStarted}
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Mulai Berpartisipasi
          </button>
          
          <button 
            onClick={onLearnMore}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors duration-300"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
