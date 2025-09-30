import React from 'react';
import { PostDetailContainer } from '@/components/containers/PostDetailContainer';

interface PostDetailPageProps {
  params: {
    id: string;
  };
}

export default function PostDetailPage({ params }: PostDetailPageProps) {
  return <PostDetailContainer postId={params.id} />;
}
