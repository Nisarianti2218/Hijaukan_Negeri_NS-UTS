'use client';

import { useState, useEffect } from 'react';
import { UserRepository, User } from '@/repositories/UserRepository';

const AUTH_CHANGED_EVENT = 'auth-changed';

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // Sync helper to re-read session from storage
    const syncSessionFromStorage = () => {
        const session = UserRepository.getSession();
        setUser(session);
    };

    useEffect(() => {
        // Initial read
        syncSessionFromStorage();
        setLoading(false);

        // Listen to custom auth-changed events within the same tab
        const handleAuthChanged = () => {
            syncSessionFromStorage();
        };
        window.addEventListener(AUTH_CHANGED_EVENT, handleAuthChanged);

        // Listen to storage events (other tabs/windows)
        const handleStorage = (e: StorageEvent) => {
            if (e.key === 'session' || e.key === 'users') {
                syncSessionFromStorage();
            }
        };
        window.addEventListener('storage', handleStorage);

        return () => {
            window.removeEventListener(AUTH_CHANGED_EVENT, handleAuthChanged);
            window.removeEventListener('storage', handleStorage);
        };
    }, []);

    const dispatchAuthChanged = () => {
        window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
    };

    const login = (email: string, password: string): { success: boolean; error?: string } => {
        const user = UserRepository.findUserByEmail(email);

        if (!user) {
            return { success: false, error: 'Email tidak ditemukan' };
        }

        if (user.password !== password) {
            return { success: false, error: 'Password salah' };
        }

        UserRepository.setSession(user);
        setUser(user);
        dispatchAuthChanged();
        return { success: true };
    };

    const register = (name: string, email: string, password: string): { success: boolean; error?: string } => {
        const existingUser = UserRepository.findUserByEmail(email);

        if (existingUser) {
            return { success: false, error: 'Email sudah terdaftar' };
        }

        const newUser: User = {
            id: Date.now().toString(),
            name,
            email,
            password,
            createdAt: new Date().toISOString()
        };

        UserRepository.saveUser(newUser);
        UserRepository.setSession(newUser);
        setUser(newUser);
        dispatchAuthChanged();
        return { success: true };
    };

    const logout = () => {
        UserRepository.clearSession();
        setUser(null);
        dispatchAuthChanged();
    };

    const isAuthenticated = () => {
        return user !== null;
    };

    return {
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated
    };
};
