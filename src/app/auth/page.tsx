import React from 'react';

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">🌱</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Masuk ke Hijaukan Negeri
            </h1>
            <p className="text-gray-600 mt-2">
              Bergabunglah dalam misi konservasi lingkungan
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
              <div className="text-4xl mb-4">🔐</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Halaman Autentikasi
              </h2>
              <p className="text-gray-600">
                Form login dan register akan diimplementasikan di Sprint berikutnya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
