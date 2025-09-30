import React from 'react';
import { ProtectedRoute } from '@/components/common/ProtectedRoute';
import { EditPostContainer } from '@/components/containers/EditPostContainer';

interface EditPostPageProps {
  params: {
    id: string;
  };
}

export default function EditPostPage({ params }: EditPostPageProps) {
  return (
    <ProtectedRoute>
      <EditPostContainer postId={params.id} />
    </ProtectedRoute>
  );
}
