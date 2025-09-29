import React from 'react';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Komunitas Peduli Lingkungan
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Bergabunglah dengan komunitas volunteer yang peduli lingkungan
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-6xl mb-4">🤝</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Fitur Komunitas
            </h2>
            <p className="text-gray-600 mb-6">
              Fitur komunitas akan tersedia setelah implementasi autentikasi dan manajemen posts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 border rounded-lg">
                <div className="text-2xl mb-2">👥</div>
                <h3 className="font-semibold">Forum Diskusi</h3>
                <p className="text-sm text-gray-600">Berbagi pengalaman dan tips</p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="text-2xl mb-2">📅</div>
                <h3 className="font-semibold">Event Bersama</h3>
                <p className="text-sm text-gray-600">Ikuti kegiatan komunitas</p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="text-2xl mb-2">🏆</div>
                <h3 className="font-semibold">Leaderboard</h3>
                <p className="text-sm text-gray-600">Lihat kontribusi terbaik</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
