'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreatePostPresenter } from '../presenters/CreatePostPresenter';
import { PostRepository, Post } from '@/repositories/PostRepository';
import { useAuth } from '@/hooks/useAuth';

export const CreatePostContainer: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    category: 'penanaman'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [imageBase64, setImageBase64] = useState<string | undefined>(undefined);
  const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);
  const router = useRouter();
  const { user } = useAuth();

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

    if (!validateForm()) {
      return;
    }

    if (!user) {
      return;
    }

    setLoading(true);

    try {
      const newPost: Post = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        date: formData.date,
        location: formData.location,
        category: formData.category,
        authorId: user.id,
        authorName: user.name,
        createdAt: new Date().toISOString(),
        imageBase64,
      };

      PostRepository.savePost(newPost);

      // Redirect to posts page
      router.push('/posts');
    } catch (error) {
      console.error('Error creating post:', error);
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
    if (!file) {
      setImageBase64(undefined);
      setImagePreview(undefined);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setImageBase64(base64);
      setImagePreview(base64);
    };
    reader.readAsDataURL(file);
  };

  return (
    <CreatePostPresenter
      formData={formData}
      errors={errors}
      loading={loading}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      onImageChange={handleImageChange}
      imagePreview={imagePreview}
    />
  );
};
