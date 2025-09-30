'use client';

import React from 'react';
import { Post } from '@/repositories/PostRepository';
import { PostCard } from './PostCard';
import { LoadingSpinner } from '../common/LoadingSpinner';

interface PostsPresenterProps {
    posts: Post[];
    loading: boolean;
    onCreatePost: () => void;
    onPostClick: (postId: string) => void;
    canCreate: boolean;
}

export const PostsPresenter: React.FC<PostsPresenterProps> = ({
    posts,
    loading,
    onCreatePost,
    onPostClick,
    canCreate,
}) => {
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

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center min-h-96">
                        <LoadingSpinner />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Daftar Posts Kegiatan
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Temukan berbagai kegiatan konservasi dan penanaman pohon di Indonesia
                    </p>
                </div>

                {/* Posts Grid or Empty State */}
                {posts.length === 0 ? (
                    <div className="text-center">
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                            <div className="text-6xl mb-4">🌱</div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Belum Ada Posts
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Saat ini belum ada kegiatan yang tersedia. Silakan kembali lagi nanti.
                            </p>
                            {canCreate && (
                                <button
                                    onClick={onCreatePost}
                                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300"
                                >
                                    Buat Post Pertama
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Posts Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {posts.map((post) => (
                                <PostCard
                                    key={post.id}
                                    post={post}
                                    categoryLabel={getCategoryLabel(post.category || 'penanaman')}
                                    categoryIcon={getCategoryIcon(post.category || 'penanaman')}
                                    onClick={() => onPostClick(post.id)}
                                />
                            ))}
                        </div>

                        {/* Create Post Button */}
                        {canCreate && (
                            <div className="text-center">
                                <button
                                    onClick={onCreatePost}
                                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 shadow-lg"
                                >
                                    + Buat Post Baru
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
