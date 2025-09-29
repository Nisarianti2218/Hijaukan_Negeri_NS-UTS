import React from 'react';

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Daftar Posts Kegiatan
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Temukan berbagai kegiatan konservasi dan penanaman pohon di Indonesia
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-6xl mb-4">🌱</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Belum Ada Posts
            </h2>
            <p className="text-gray-600 mb-6">
              Saat ini belum ada kegiatan yang tersedia. Silakan kembali lagi nanti.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300">
              Buat Post Pertama
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
