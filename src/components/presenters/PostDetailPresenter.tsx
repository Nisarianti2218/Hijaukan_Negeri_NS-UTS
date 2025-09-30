'use client';

import React from 'react';
import { Post } from '@/repositories/PostRepository';
import Link from 'next/link';

interface PostDetailPresenterProps {
  post: Post | null;
  loading: boolean;
  currentUserId?: string;
  onBack: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const PostDetailPresenter: React.FC<PostDetailPresenterProps> = ({
  post,
  loading,
  currentUserId,
  onBack,
  onEdit,
  onDelete,
}) => {
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">📝</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Post Tidak Ditemukan
            </h1>
            <p className="text-gray-600 mb-8">
              Maaf, post yang Anda cari tidak dapat ditemukan.
            </p>
            <Link
              href="/posts"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300"
            >
              Kembali ke Daftar Posts
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getCategoryLabel = (category: string) => {
    const categories: Record<string, string> = {
      'penanaman': 'Penanaman Pohon',
      'bersih-bersih': 'Bersih-bersih Lingkungan',
      'edukasi': 'Edukasi Lingkungan',
      'konservasi': 'Konservasi',
    };
    return categories[category] || category;
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      'penanaman': '🌱',
      'bersih-bersih': '🧹',
      'edukasi': '📚',
      'konservasi': '🛡️',
    };
    return icons[category] || '🌱';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header dengan Back Button */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Daftar Posts
          </button>

          {/* Breadcrumb */}
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/posts" className="hover:text-green-600">Posts</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Detail Post</span>
          </nav>
        </div>

        {/* Post Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Post Image */}
          {post.imageBase64 && (
            <div className="w-full h-64 md:h-80 bg-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.imageBase64}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Post Header */}
          <div className="p-8 pb-6">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <span className="mr-1">{getCategoryIcon(post.category || 'penanaman')}</span>
                {getCategoryLabel(post.category || 'penanaman')}
              </span>
              <span className="text-sm text-gray-500">
                📅 {new Date(post.date).toLocaleDateString('id-ID', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-600 mb-6">
              <div className="flex items-center mr-6">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-semibold">
                    {post.authorName.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{post.authorName}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString('id-ID')}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-2">📍</span>
                <span>{post.location}</span>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="px-8 pb-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Deskripsi Kegiatan</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {post.description}
              </div>
            </div>

            {/* Owner Actions */}
            {currentUserId && post.authorId === currentUserId && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Kelola Post Anda</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onEdit}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit Post
                  </button>
                  <button
                    onClick={onDelete}
                    className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Hapus Post
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onBack}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
                >
                  Kembali ke Daftar
                </button>
                <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300">
                  Ikut Berpartisipasi
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts Section (Optional) */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Post Terkait</h2>
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">🌱</div>
            <p className="text-gray-600">
              Fitur post terkait akan segera hadir untuk membantu Anda menemukan kegiatan serupa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
