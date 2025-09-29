'use client';

import React from 'react';

interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: string;
}

interface StatisticsPresenterProps {
  stats: StatItem[];
}

export const StatisticsPresenter: React.FC<StatisticsPresenterProps> = ({ stats }) => {
  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Dampak yang Telah Kita Capai
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Bersama-sama kita telah membuat perubahan nyata untuk lingkungan
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-green-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
