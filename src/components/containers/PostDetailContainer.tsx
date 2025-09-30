'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PostDetailPresenter } from '../presenters/PostDetailPresenter';
import { PostRepository, Post } from '@/repositories/PostRepository';
import { useAuth } from '@/hooks/useAuth';

interface PostDetailContainerProps {
  postId: string;
}

export const PostDetailContainer: React.FC<PostDetailContainerProps> = ({ postId }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    loadPost();
  }, [postId]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadPost = () => {
    try {
      const allPosts = PostRepository.getAllPosts();
      const foundPost = allPosts.find(p => p.id === postId);
      setPost(foundPost || null);
    } catch (error) {
      console.error('Error loading post:', error);
      setPost(null);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    router.push('/posts');
  };

  const handleEdit = () => {
    router.push(`/posts/${postId}/edit`);
  };

  const handleDelete = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus post ini? Tindakan ini tidak dapat dibatalkan.')) {
      try {
        PostRepository.deletePost(postId);
        router.push('/posts');
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Terjadi kesalahan saat menghapus post. Silakan coba lagi.');
      }
    }
  };

  return (
    <PostDetailPresenter
      post={post}
      loading={loading}
      currentUserId={user?.id}
      onBack={handleBack}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
