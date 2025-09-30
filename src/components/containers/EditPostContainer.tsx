'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { EditPostPresenter } from '../presenters/EditPostPresenter';
import { PostRepository, Post } from '@/repositories/PostRepository';
import { useAuth } from '@/hooks/useAuth';

interface EditPostContainerProps {
  postId: string;
}

export const EditPostContainer: React.FC<EditPostContainerProps> = ({ postId }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    category: 'penanaman'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [imageBase64, setImageBase64] = useState<string | undefined>(undefined);
  const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    loadPost();
  }, [postId]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadPost = () => {
    try {
      const foundPost = PostRepository.getPostById(postId);
      if (!foundPost) {
        router.push('/posts');
        return;
      }

      // Check if user owns this post
      if (!user || foundPost.authorId !== user.id) {
        router.push('/posts');
        return;
      }

      setPost(foundPost);
      setFormData({
        title: foundPost.title,
        description: foundPost.description,
        date: foundPost.date,
        location: foundPost.location,
        category: foundPost.category || 'penanaman'
      });
      
      if (foundPost.imageBase64) {
        setImageBase64(foundPost.imageBase64);
        setImagePreview(foundPost.imageBase64);
      }
    } catch (error) {
      console.error('Error loading post:', error);
      router.push('/posts');
    } finally {
      setInitialLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Judul wajib diisi';
    } else if (formData.title.length < 5) {
      newErrors.title = 'Judul minimal 5 karakter';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Deskripsi wajib diisi';
    } else if (formData.description.length < 20) {
      newErrors.description = 'Deskripsi minimal 20 karakter';
    }

    if (!formData.date) {
      newErrors.date = 'Tanggal wajib diisi';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date = 'Tanggal tidak boleh masa lalu';
      }
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Lokasi wajib diisi';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !post || !user) {
      return;
    }

    setLoading(true);

    try {
      const updatedData = {
        title: formData.title,
        description: formData.description,
        date: formData.date,
        location: formData.location,
        category: formData.category,
        imageBase64,
      };

      PostRepository.updatePost(postId, updatedData);

      // Redirect to post detail
      router.push(`/posts/${postId}`);
    } catch (error) {
      console.error('Error updating post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleImageChange = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImageBase64(result);
        setImagePreview(result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageBase64(undefined);
      setImagePreview(undefined);
    }
  };

  const handleCancel = () => {
    router.push(`/posts/${postId}`);
  };

  if (initialLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <EditPostPresenter
      formData={formData}
      errors={errors}
      loading={loading}
      imagePreview={imagePreview}
      onInputChange={handleInputChange}
      onImageChange={handleImageChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};
