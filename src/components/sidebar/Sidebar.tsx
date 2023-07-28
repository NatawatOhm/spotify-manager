import React, { useState } from 'react';
import SpotifyEmbed from '../spotify-embed/SpotifyEmbed';
import './index.css';
import appLogo from '../../assets/icon/spotify.svg';
import homeLogo from '../../assets/icon/home.svg';
import heartLogo from '../../assets/icon/heart.svg';
import userLogo from '../../assets/icon/user.svg';
import playLogo from '../../assets/icon/play.svg';

const Sidebar = () => {
  const [spotifyId, setSpotifyId] = useState<string>('02wk5BttM0QL38ERjLPQJB');
  return (
    <div>
      <div className="sidebar-container px-[24px] py-[18px]">
        <div className="flex justify-center gap-[16px] items-center ">
          <img width={30} src={appLogo} alt="" />
          <div className="text-white">Playlist Manager App</div>
        </div>
        <div>
          <div className="text-[#FFFFFF]/[0.4] pt-[40px]">Menu</div>
        </div>
        <div className="flex flex-col space-y-6 ">
          <div className="flex items-center space-x-[24px] pt-6 cursor-pointer">
            <img width={24} src={homeLogo} alt="" />
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-[24px] cursor-pointer">
            <img width={24} src={playLogo} alt="" />
            <span>Playlist</span>
          </div>
          <div className="flex items-center space-x-[24px] cursor-pointer">
            <img width={24} src={heartLogo} alt="" />
            <span>Favorite</span>
          </div>
          <div className="flex items-center space-x-[24px] cursor-pointer">
            <img width={24} src={userLogo} alt="" />
            <span>Artists</span>
          </div>
        </div>
        <SpotifyEmbed
          src={`https://open.spotify.com/embed/track/${spotifyId}?utm_source=oembed`}
          width="100%"
          height="152"
        />
      </div>
    </div>
  );
};

export default Sidebar;
