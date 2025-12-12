'use client';

import React from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

interface NavbarPresenterProps {
  navItems: NavItem[];
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  user?: User | null;
  isAuthenticated: boolean;
}

export const NavbarPresenter: React.FC<NavbarPresenterProps> = ({
  navItems,
  isMenuOpen,
  onToggleMenu,
  onCloseMenu,
  user,
  isAuthenticated,
}) => {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-xl">🌱</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900">Hijaukan Negeri</h1>
                <p className="text-xs text-gray-500">Platform Konservasi Lingkungan</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 lg:gap-8">
              {/* User Greeting */}
              {isAuthenticated && user && (
                <div className="text-sm text-gray-600 pr-4 border-r border-gray-200">
                  👋 Halo, <span className="font-semibold text-green-600">{user.name}</span>
                </div>
              )}

              {/* Nav Items */}
              {navItems.map((item) => (
                item.onClick ? (
                  <button
                    key={item.href}
                    onClick={item.onClick}
                    className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${item.isActive
                        ? 'bg-green-50 text-green-600 border-b-2 border-green-600'
                        : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                      }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={onToggleMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="bg-gradient-to-b from-green-50 to-white px-4 py-4 space-y-2">
            {/* User Info Mobile */}
            {isAuthenticated && user && (
              <div className="px-3 py-3 mb-3 rounded-lg bg-white border border-green-100">
                <p className="text-sm text-gray-600">
                  👋 Halo, <span className="font-semibold text-green-600">{user.name}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{user.email}</p>
              </div>
            )}

            {/* Mobile Nav Items */}
            <div className="space-y-1">
              {navItems.map((item) => (
                item.onClick ? (
                  <button
                    key={item.href}
                    onClick={() => {
                      item.onClick?.();
                      onCloseMenu();
                    }}
                    className="w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onCloseMenu}
                    className={`block px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 ${item.isActive
                        ? 'bg-green-100 text-green-600 border-l-4 border-green-600'
                        : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                      }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden transition-opacity duration-300"
          onClick={onCloseMenu}
        />
      )}
    </>
  );
};
