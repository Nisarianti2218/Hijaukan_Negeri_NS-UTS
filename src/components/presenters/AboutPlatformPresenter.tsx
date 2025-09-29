'use client';

import React from 'react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface AboutPlatformPresenterProps {
  features: Feature[];
}

export const AboutPlatformPresenter: React.FC<AboutPlatformPresenterProps> = ({ features }) => {
  return (
    <section id="about-platform" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Platform untuk Bumi yang Lebih Hijau
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bergabunglah dengan ribuan volunteer dalam misi konservasi lingkungan. 
            Temukan lokasi penanaman, bagikan pengalaman, dan bangun komunitas peduli lingkungan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group hover:-translate-y-2 transform transition-transform"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Mulai Eksplorasi
          </button>
        </div>
      </div>
    </section>
  );
};
