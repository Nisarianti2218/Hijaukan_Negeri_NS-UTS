"use client";
import React, { useState } from "react";
import { ProtectedRoute } from "@/components/common/ProtectedRoute";
import { useAuth } from "@/hooks/useAuth";
import { UserRepository, User } from "@/repositories/UserRepository";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const { user } = useAuth();
    const router = useRouter();
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(user?.name || "");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);

    if (!user) {
        return null;
    }

    const getInitials = (fullName: string) => {
        return fullName
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);
    };

    const handleStartEdit = () => {
        setName(user.name);
        setPassword("");
        setError(null);
        setSuccess(null);
        setEditing(true);
    };

    const handleCancel = () => {
        setEditing(false);
        setError(null);
        setSuccess(null);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        if (!name) {
            setError("Nama tidak boleh kosong");
            return;
        }

        setSaving(true);

        const updated: User = {
            id: user.id,
            name: name,
            email: user.email,
            password: password ? password : user.password,
            createdAt: user.createdAt,
        };

        try {
            UserRepository.updateUser(updated);

            // Notify auth listeners in the same tab (useAuth listens for 'auth-changed')
            try {
                window.dispatchEvent(new Event('auth-changed'));
            } catch { }

            setSuccess("Profil berhasil diperbarui!");
            setEditing(false);
        } catch (err) {
            setError("Gagal menyimpan profil");
        } finally {
            setSaving(false);
        }
    };

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <button
                            onClick={() => router.push("/")}
                            className="text-green-600 hover:text-green-700 transition-colors duration-200 flex items-center gap-2 mb-6"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            Kembali
                        </button>
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Profil Saya</h1>
                        <p className="text-gray-600 mt-2">Kelola informasi akun Anda</p>
                    </div>

                    {/* Success Message */}
                    {success && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                            <svg
                                className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <div>
                                <p className="text-green-800 font-medium">{success}</p>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                            <svg
                                className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <div>
                                <p className="text-red-800 font-medium">{error}</p>
                            </div>
                        </div>
                    )}

                    {!editing ? (
                        // View Mode
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            {/* Avatar Section */}
                            <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-12 sm:py-16 flex flex-col items-center sm:items-start">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-green-400 mb-4">
                                    <span className="text-3xl sm:text-4xl font-bold text-green-600">
                                        {getInitials(user.name)}
                                    </span>
                                </div>
                                <div className="text-center sm:text-left">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white">{user.name}</h2>
                                    <p className="text-green-100 mt-1">{user.email}</p>
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="px-8 py-8 space-y-6">
                                {/* Nama */}
                                <div className="border-b border-gray-200 pb-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">👤</span>
                                        <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                            Nama Lengkap
                                        </label>
                                    </div>
                                    <p className="text-lg text-gray-900 mt-2">{user.name}</p>
                                </div>

                                {/* Email */}
                                <div className="border-b border-gray-200 pb-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">📧</span>
                                        <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                            Email
                                        </label>
                                    </div>
                                    <p className="text-lg text-gray-900 mt-2">{user.email}</p>
                                </div>

                                {/* Join Date */}
                                <div className="pb-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">📅</span>
                                        <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                            Bergabung Sejak
                                        </label>
                                    </div>
                                    <p className="text-lg text-gray-900 mt-2">
                                        {new Date(user.createdAt).toLocaleDateString("id-ID", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="px-8 py-8 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleStartEdit}
                                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                >
                                    <span>✏️</span>
                                    Edit Profil
                                </button>
                                <button
                                    onClick={() => router.push("/")}
                                    className="flex-1 px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    Tutup
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Edit Mode
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Edit Informasi Profil</h3>

                            <form onSubmit={handleSave} className="space-y-6">
                                {/* Nama Field */}
                                <div>
                                    <label className="flex text-sm font-semibold text-gray-700 mb-3 items-center gap-2">
                                        <span>👤</span>
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all duration-200 text-gray-900 placeholder-gray-400"
                                        placeholder="Masukkan nama lengkap Anda"
                                        required
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        Nama yang ditampilkan di profil Anda
                                    </p>
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label className="flex text-sm font-semibold text-gray-700 mb-3 items-center gap-2">
                                        <span>🔐</span>
                                        Password Baru
                                    </label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all duration-200 text-gray-900 placeholder-gray-400"
                                        placeholder="Kosongkan jika tidak ingin mengubah password"
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        Biarkan kosong jika tidak ingin mengubah password
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                                    <button
                                        type="submit"
                                        disabled={saving}
                                        className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                    >
                                        <span>💾</span>
                                        {saving ? "Menyimpan..." : "Simpan Perubahan"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleCancel}
                                        className="flex-1 px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-all duration-200 shadow-md hover:shadow-lg"
                                    >
                                        Batal
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </ProtectedRoute>
    );
}
