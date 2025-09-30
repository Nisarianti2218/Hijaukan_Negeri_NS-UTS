'use client';

import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export const ClearSessionButton: React.FC = () => {
    const { logout } = useAuth();
    const router = useRouter();

    const handleClearSession = () => {
        logout();
        // Clear all localStorage data
        localStorage.clear();
        router.push('/');
        // Reload page to reset state
        window.location.reload();
    };

    return (
        <button
            onClick={handleClearSession}
            className="fixed bottom-4 right-4 bg-red-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors duration-200 z-50"
            title="Clear session untuk testing"
        >
            🗑️ Clear Session
        </button>
    );
};
