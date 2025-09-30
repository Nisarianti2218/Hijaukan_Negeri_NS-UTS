"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function AuthPage() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login, register } = useAuth();

  // Handlers
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!loginData.email || !loginData.password) {
      setError("Email dan password wajib diisi.");
      setLoading(false);
      return;
    }

    const result = login(loginData.email, loginData.password);

    if (result.success) {
      router.push("/");
    } else {
      setError(result.error || "Terjadi kesalahan saat login.");
    }

    setLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!registerData.name || !registerData.email || !registerData.password || !registerData.confirm) {
      setError("Semua field wajib diisi.");
      setLoading(false);
      return;
    }

    if (!registerData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setError("Format email tidak valid.");
      setLoading(false);
      return;
    }

    if (registerData.password !== registerData.confirm) {
      setError("Password tidak sama.");
      setLoading(false);
      return;
    }

    const result = register(registerData.name, registerData.email, registerData.password);

    if (result.success) {
      router.push("/");
    } else {
      setError(result.error || "Terjadi kesalahan saat registrasi.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <span className="text-white text-3xl">🌱</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Hijaukan Negeri</h1>
          <p className="text-gray-600 text-center text-sm">
            Bergabung dan login untuk ikut aksi konservasi lingkungan!
          </p>
        </div>
        <div className="flex mb-6 border-b">
          <button
            className={`flex-1 py-2 transition-all duration-200 ${tab === "login"
              ? "border-b-2 border-green-600 font-bold text-green-700"
              : "text-gray-500 hover:text-green-600"
              }`}
            onClick={() => setTab("login")}
          >
            <span className="mr-2">🔑</span> Login
          </button>
          <button
            className={`flex-1 py-2 transition-all duration-200 ${tab === "register"
              ? "border-b-2 border-green-600 font-bold text-green-700"
              : "text-gray-500 hover:text-green-600"
              }`}
            onClick={() => setTab("register")}
          >
            <span className="mr-2">📝</span> Register
          </button>
        </div>
        {error && <div className="mb-4 text-red-600 text-sm text-center">{error}</div>}
        <div className="transition-all duration-300">
          {tab === "login" ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-900 bg-white placeholder-gray-500"
                  value={loginData.email}
                  onChange={e => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-900 bg-white placeholder-gray-500"
                  value={loginData.password}
                  onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 font-semibold shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Memproses..." : "Login"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-900 bg-white placeholder-gray-500"
                  value={registerData.name}
                  onChange={e => setRegisterData({ ...registerData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-900 bg-white placeholder-gray-500"
                  value={registerData.email}
                  onChange={e => setRegisterData({ ...registerData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-900 bg-white placeholder-gray-500"
                  value={registerData.password}
                  onChange={e => setRegisterData({ ...registerData, password: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password</label>
                <input
                  type="password"
                  placeholder="Konfirmasi Password"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-900 bg-white placeholder-gray-500"
                  value={registerData.confirm}
                  onChange={e => setRegisterData({ ...registerData, confirm: e.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 font-semibold shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Memproses..." : "Register"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}