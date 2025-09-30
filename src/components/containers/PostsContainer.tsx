'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PostsPresenter } from '../presenters/PostsPresenter';
import { PostRepository, Post } from '@/repositories/PostRepository';
import { useAuth } from '@/hooks/useAuth';

export const PostsContainer: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    try {
      const allPosts = PostRepository.getAllPosts();
      // Sort by creation date (newest first)
      const sortedPosts = allPosts.sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setPosts(sortedPosts);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = () => {
    if (isAuthenticated()) {
      router.push('/create');
    } else {
      router.push('/auth');
    }
  };

  const handlePostClick = (postId: string) => {
    // For now, just show an alert. In the future, this could navigate to post detail
    const post = posts.find(p => p.id === postId);
    if (post) {
      alert(`Detail Post: ${post.title}\n\n${post.description}\n\nTanggal: ${new Date(post.date).toLocaleDateString('id-ID')}\nLokasi: ${post.location}\nPembuat: ${post.authorName}`);
    }
  };

  return (
    <PostsPresenter
      posts={posts}
      loading={loading}
      onCreatePost={handleCreatePost}
      onPostClick={handlePostClick}
      canCreate={isAuthenticated()}
    />
  );
};
