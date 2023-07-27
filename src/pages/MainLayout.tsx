import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import PlayerBar from '../components/playerbar/PlayerBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
      <PlayerBar />
    </div>
  );
};

export default MainLayout;
