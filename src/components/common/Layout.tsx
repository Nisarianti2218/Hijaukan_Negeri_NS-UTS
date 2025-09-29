import React from 'react';
import { NavbarContainer } from '../containers/NavbarContainer';
import { FooterContainer } from '../containers/FooterContainer';

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
    </div>
  );
};
