'use client';

import React from 'react';
import Link from 'next/link';

interface CreatePostPresenterProps {
  formData: {
    title: string;
    description: string;
    date: string;
    location: string;
    category: string;
  };
  errors: Record<string, string>;
  loading: boolean;
  onInputChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onImageChange: (file: File | null) => void;
  imagePreview?: string;
}

export const CreatePostPresenter: React.FC<CreatePostPresenterProps> = ({
  formData,
  errors,
  loading,
  onInputChange,
  onSubmit,
  onImageChange,
  imagePreview,
}) => {
  const categories = [
    { value: 'penanaman', label: 'Penanaman Pohon' },
    { value: 'bersih-bersih', label: 'Bersih-bersih Lingkungan' },
    { value: 'edukasi', label: 'Edukasi Lingkungan' },
    { value: 'konservasi', label: 'Konservasi' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <Link href="/posts" className="hover:text-green-600">Posts</Link>
            <span>/</span>
            <span className="text-green-600 font-medium">Buat Post</span>
          </div>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Buat Post Baru</h1>
          <p className="text-gray-600">
            Bagikan kegiatan konservasi dan penanaman pohon Anda dengan komunitas
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Judul Kegiatan <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => onInputChange('title', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200 ${errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Contoh: Penanaman 100 Pohon Mangrove di Pantai Sanur"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi Kegiatan <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => onInputChange('description', e.target.value)}
                rows={4}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200 ${errors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Jelaskan detail kegiatan, tujuan, dan manfaat yang akan didapat..."
              />
              <div className="mt-1 flex justify-between text-sm text-gray-500">
                <span>{errors.description && <span className="text-red-600">{errors.description}</span>}</span>
                <span>{formData.description.length}/500</span>
              </div>
            </div>

            {/* Date and Location Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal Kegiatan <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => onInputChange('date', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200 ${errors.date ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.date && (
                  <p className="mt-1 text-sm text-red-600">{errors.date}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lokasi <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => onInputChange('location', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200 ${errors.location ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Contoh: Pantai Sanur, Denpasar"
                />
                {errors.location && (
                  <p className="mt-1 text-sm text-red-600">{errors.location}</p>
                )}
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori Kegiatan
              </label>
              <select
                value={formData.category}
                onChange={(e) => onInputChange('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Foto Kegiatan (opsional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => onImageChange(e.target.files?.[0] || null)}
                className="w-full"
              />
              {imagePreview && (
                <div className="mt-3">
                  <img src={imagePreview} alt="preview" className="h-40 w-full object-cover rounded border" />
                </div>
              )}
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
              >
                {loading ? 'Menyimpan...' : 'Buat Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
