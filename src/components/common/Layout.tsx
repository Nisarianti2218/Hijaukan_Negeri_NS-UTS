import React from 'react';
import { NavbarContainer } from '../containers/NavbarContainer';
import { FooterContainer } from '../containers/FooterContainer';
import { ClearSessionButton } from './ClearSessionButton';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarContainer />
      <main className="flex-grow">
        {children}
      </main>
      <FooterContainer />
      {/* Development only - Clear Session Button */}
      {process.env.NODE_ENV === 'development' && <ClearSessionButton />}
    </div>
  );
};
