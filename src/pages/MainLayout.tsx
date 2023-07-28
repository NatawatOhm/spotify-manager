import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import SpotifyEmbed from '../components/spotify-embed/SpotifyEmbed';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
