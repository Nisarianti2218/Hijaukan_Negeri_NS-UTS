import React from 'react';
import { ProtectedRoute } from '@/components/common/ProtectedRoute';
import { CreatePostContainer } from '@/components/containers/CreatePostContainer';

export default function CreatePostPage() {
  return (
    <ProtectedRoute>
      <CreatePostContainer />
    </ProtectedRoute>
  );
}
